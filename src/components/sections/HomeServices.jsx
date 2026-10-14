import React from 'react';
import { ArrowUpRight, Code2, PanelsTopLeft, PenTool, Share2, BookOpen, Package } from 'lucide-react';

const items = [
  { title: 'Websites & UI/UX', detail: 'Thoughtful websites, landing pages and online stores that make your brand easy to explore.', icon: Code2, color: '#2563EB', wash: '#EAF1FF', count: '01' },
  { title: 'Brand identity', detail: 'Logos, visual systems and clear guidelines that help your business feel unmistakably yours.', icon: PenTool, color: '#A33CBC', wash: '#F6EAFE', count: '02' },
  { title: 'Graphics & campaigns', detail: 'Social media posts, advertising creatives and digital content made to catch the eye.', icon: Share2, color: '#C43D76', wash: '#FDEAF1', count: '03' },
  { title: 'Print design', detail: 'Brochures, flyers, business cards and catalogues, prepared for a beautiful finish.', icon: BookOpen, color: '#0F8B78', wash: '#E3F6F1', count: '04' },
  { title: 'Packaging', detail: 'Labels and packaging concepts that carry your brand from screen to shelf.', icon: Package, color: '#C27610', wash: '#FFF2D8', count: '05' },
  { title: 'Digital experiences', detail: 'Frontend development and digital creative services for launches and growing teams.', icon: PanelsTopLeft, color: '#5255B9', wash: '#EDEEFF', count: '06' }
];

export default function HomeServices() {
  return (
    <section className="relative overflow-hidden bg-[#FFFAF2] py-20 sm:py-28">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#F59E0B]/15" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[.19em] text-[#B45309]">One studio, many ways to grow</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-[#172033] sm:text-5xl">Good ideas deserve <span className="rps-gradient-text">a full toolkit.</span></h2>
          </div>
          <a href="/services" className="inline-flex items-center gap-2 pb-1 text-sm font-bold text-[#2563EB] transition hover:gap-3">Explore all services <ArrowUpRight className="h-4 w-4" /></a>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {items.map(({ title, detail, icon: Icon, color, wash, count }) => (
            <a href="/services" key={title} className="group relative min-h-48 overflow-hidden rounded-[22px] border border-[#EDE7DE] bg-white p-6 shadow-[0_8px_30px_-25px_rgba(41,44,61,.32)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_-24px_rgba(41,44,61,.28)] sm:p-7">
              <span className="absolute right-5 top-5 text-[10px] font-bold tracking-[.16em] text-[#A0A5AF]">{count}</span>
              <span className="grid h-12 w-12 place-items-center rounded-2xl transition group-hover:rotate-[-5deg]" style={{ color, backgroundColor: wash }}><Icon className="h-5 w-5" /></span>
              <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-[#172033]">{title}</h3>
              <p className="mt-2 max-w-sm text-sm leading-6 text-[#64748B]">{detail}</p>
              <span className="absolute bottom-6 right-6 text-[#A0A5AF] transition group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true"><ArrowUpRight className="h-4 w-4" /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
