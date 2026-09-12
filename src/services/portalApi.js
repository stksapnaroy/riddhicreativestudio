import { supabase } from '../lib/supabase';

function requireClient() {
  if (!supabase) throw new Error('Portal is not configured yet. Add the Supabase environment keys.');
  return supabase;
}

async function currentUser() {
  const client = requireClient();
  const { data: { user }, error } = await client.auth.getUser();
  if (error) throw error;
  if (!user) throw new Error('Please log in to continue.');
  return user;
}

export async function getSessionProfile() {
  const client = requireClient();
  const { data: { user } } = await client.auth.getUser();
  if (!user) return { user: null, profile: null };
  const { data: profile, error } = await client.from('profiles').select('*').eq('id', user.id).single();
  if (error) throw error;
  return { user, profile };
}

export async function sendEmailLink(email) {
  const client = requireClient();
  // VITE_SITE_URL keeps links correct even when the request is triggered from a preview/local build.
  const redirectTo = import.meta.env.VITE_SITE_URL || window.location.origin;
  const { error } = await client.auth.signInWithOtp({ email, options: { emailRedirectTo: redirectTo } });
  if (error) throw error;
}

export async function sendPhoneOtp(phone) {
  const client = requireClient();
  const { error } = await client.auth.signInWithOtp({ phone });
  if (error) throw error;
}

export async function verifyPhoneOtp(phone, token) {
  const client = requireClient();
  const { error } = await client.auth.verifyOtp({ phone, token, type: 'sms' });
  if (error) throw error;
}

export async function signOut() { await requireClient().auth.signOut(); }

export async function createProject(input, file) {
  const client = requireClient();
  const user = await currentUser();
  let attachmentPath = null;
  let attachmentName = null;
  if (file) {
    attachmentName = file.name;
    attachmentPath = `${user.id}/${crypto.randomUUID()}-${file.name.replace(/[^a-zA-Z0-9._-]/g, '-')}`;
    const { error: uploadError } = await client.storage.from('project-files').upload(attachmentPath, file, { upsert: false });
    if (uploadError) throw uploadError;
  }
  const { data, error } = await client.from('projects').insert({
    user_id: user.id,
    service: input.service,
    title: input.title,
    description: input.description,
    company: input.company || null,
    contact_phone: input.phone || null,
    budget: input.budget || null,
    timeline: input.timeline || null,
    attachment_path: attachmentPath,
    attachment_name: attachmentName,
  }).select().single();
  if (error) throw error;
  return data;
}

export async function getMyProjects() {
  const { data, error } = await requireClient().from('projects').select('*').order('created_at', { ascending: false });
  if (error) throw error;
  return data;
}

export async function updateMyProject(id, updates) {
  const { data, error } = await requireClient().from('projects').update(updates).eq('id', id).select().single();
  if (error) throw error;
  return data;
}

export async function getMyInvoices() {
  const { data, error } = await requireClient().from('invoices').select('*').order('created_at', { ascending: false });
  if (error) throw error;
  return data;
}

export async function getAdminProjects() {
  const { data, error } = await requireClient().from('admin_projects').select('*').order('created_at', { ascending: false });
  if (error) throw error;
  return data;
}

export async function adminUpdateProject(id, updates) {
  const { data, error } = await requireClient().from('projects').update(updates).eq('id', id).select().single();
  if (error) throw error;
  return data;
}

export async function adminCreateInvoice(project, total) {
  const subtotal = Math.round(total / 1.18);
  const { data, error } = await requireClient().from('invoices').insert({
    project_id: project.id,
    user_id: project.user_id,
    service: project.service,
    project_title: project.title,
    client_name: project.client_name,
    client_email: project.client_email,
    total,
    subtotal,
    tax: total - subtotal,
    status: 'Pending',
  }).select().single();
  if (error) throw error;
  return data;
}

export async function getAttachmentUrl(path) {
  if (!path) return null;
  const { data, error } = await requireClient().storage.from('project-files').createSignedUrl(path, 60 * 30);
  if (error) throw error;
  return data.signedUrl;
}
