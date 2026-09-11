-- Run this once in Supabase SQL Editor. Authentication is handled by Supabase Auth.
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  phone text,
  email text,
  role text not null default 'client' check (role in ('client', 'admin')),
  created_at timestamptz not null default now()
);

create or replace function public.handle_new_user() returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, full_name, phone, email)
  values (new.id, coalesce(new.raw_user_meta_data->>'full_name', ''), new.phone, new.email)
  on conflict (id) do nothing;
  return new;
end; $$;
create trigger on_auth_user_created after insert on auth.users for each row execute procedure public.handle_new_user();

create or replace function public.is_admin() returns boolean language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.profiles where id = auth.uid() and role = 'admin');
$$;

create table public.projects (
  id uuid primary key default gen_random_uuid(), user_id uuid not null references public.profiles(id) on delete cascade,
  service text not null, title text not null, description text not null, company text, contact_phone text,
  budget text, timeline text, status text not null default 'Submitted', admin_notes text,
  attachment_path text, attachment_name text, created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table public.invoices (
  id uuid primary key default gen_random_uuid(), project_id uuid not null references public.projects(id) on delete cascade,
  user_id uuid not null references public.profiles(id) on delete cascade, service text not null, project_title text not null,
  client_name text, client_email text, subtotal integer not null, tax integer not null default 0, total integer not null,
  status text not null default 'Pending', created_at timestamptz not null default now()
);
create view public.admin_projects with (security_invoker = true) as
  select p.*, pr.full_name as client_name, pr.phone as client_phone, pr.email as client_email
  from public.projects p join public.profiles pr on pr.id = p.user_id;

alter table public.profiles enable row level security;
alter table public.projects enable row level security;
alter table public.invoices enable row level security;
create policy "read own profile" on public.profiles for select using (id = auth.uid() or public.is_admin());
create policy "update own profile" on public.profiles for update using (id = auth.uid()) with check (id = auth.uid() and role = (select role from public.profiles where id = auth.uid()));
create policy "read own projects" on public.projects for select using (user_id = auth.uid() or public.is_admin());
create policy "create own projects" on public.projects for insert with check (user_id = auth.uid());
create policy "client edits own submitted project" on public.projects for update using (user_id = auth.uid() and status = 'Submitted') with check (user_id = auth.uid() and status = 'Submitted');
create policy "admin manages projects" on public.projects for update using (public.is_admin()) with check (public.is_admin());
create policy "read own invoices" on public.invoices for select using (user_id = auth.uid() or public.is_admin());
create policy "admin creates invoices" on public.invoices for insert with check (public.is_admin());

insert into storage.buckets (id, name, public) values ('project-files', 'project-files', false) on conflict do nothing;
create policy "upload own project files" on storage.objects for insert to authenticated with check (bucket_id = 'project-files' and (storage.foldername(name))[1] = auth.uid()::text);
create policy "read own project files" on storage.objects for select to authenticated using (bucket_id = 'project-files' and ((storage.foldername(name))[1] = auth.uid()::text or public.is_admin()));
-- Promote yourself after signing up: update public.profiles set role = 'admin' where id = 'YOUR_AUTH_USER_UUID';
