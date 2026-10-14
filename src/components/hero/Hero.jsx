import React, { useState } from 'react';
import { ArrowDown, ArrowRight, Check, Sparkles } from 'lucide-react';
import { studioInfo } from '../../data/companyData';

const needs = [
  'Website Design', 'E-commerce Website', 'Landing Page', 'Branding & Logo',
  'Graphic Design', 'Social Media Creatives', 'Printing & Packaging', 'Other'
];

export default function Hero() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `Free consultation request — ${data.get('name')}`;
    const body = [
      `Name: ${data.get('name')}`,
      `Business: ${data.get('business') || 'Not provided'}`,
      `Phone: ${data.get('phone')}`,
      `Email: ${data.get('email')}`,
      `Interested in: ${data.get('need')}`,
      `Project details: ${data.get('details') || 'Not provided'}`
    ].join('\n');
    window.location.href = `mailto:${studioInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section id="home" className="rps-hero relative isolate overflow-hidden">
      <div className="rps-hero-glow" aria-hidden="true" />
      <div className="rps-hero-inner relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-4 pb-10 pt-28 sm:px-6 sm:pt-32 lg:min-h-[100svh] lg:grid-cols-[1.02fr_.88fr] lg:gap-16 lg:px-8 lg:pb-12 lg:pt-28">
        <div className="relative py-4 sm:py-8 lg:py-10">
          <div className="absolute -left-16 top-16 -z-10 hidden h-52 w-52 rounded-full border border-[#F5A623]/30 lg:block" />
          <div className="absolute -left-10 top-22 -z-10 hidden h-40 w-40 rounded-full border border-dashed border-[#D9468D]/35 lg:block" />
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E9D5FF] bg-white/80 px-3.5 py-2 text-[10px] font-bold tracking-[.19em] text-[#6D28D9] shadow-sm sm:text-[11px]">
            <span className="h-2 w-2 rounded-full bg-[#F59E0B]" /> YOUR COMPLETE CREATIVE PARTNER
          </div>

          <h1 className="mt-7 max-w-3xl font-display text-[clamp(2.8rem,6vw,5.65rem)] font-extrabold leading-[.99] tracking-[-.065em] text-[#172033]">
            Ideas Se Identity Tak, <span className="rps-gradient-text">We Create It All.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-[#596579] sm:text-lg sm:leading-8">
            From stunning websites and brand identities to eye-catching graphics and premium print designs, we help your business stand out.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="/services" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#2563EB] px-6 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-[#173B75]">
              Explore Our Services <ArrowRight className="h-4 w-4" />
            </a>
            <a href="/portfolio" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#D9DEEA] bg-white/80 px-6 text-sm font-bold text-[#27334A] transition hover:border-[#D9468D] hover:text-[#B42366]">
              View Our Work <ArrowDown className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-[#5B6578]">
            {['Web & UI/UX', 'Brand & Graphics', 'Print & Packaging'].map((item, i) => (
              <span key={item} className="inline-flex items-center gap-2"><span className={`h-2 w-2 rounded-full ${['bg-[#2563EB]', 'bg-[#D9468D]', 'bg-[#14B8A6]'][i]}`} />{item}</span>
            ))}
          </div>

          <div className="rps-mandala absolute -right-4 top-2 hidden h-32 w-32 text-[#F59E0B]/70 xl:block" aria-hidden="true">
            <svg viewBox="0 0 120 120" fill="none"><circle cx="60" cy="60" r="42" stroke="currentColor" strokeWidth="1.4" strokeDasharray="2 4"/><circle cx="60" cy="60" r="27" stroke="currentColor"/><path d="M60 8 69 43 103 27 77 53 112 60 77 67 103 93 69 77 60 112 51 77 17 93 43 67 8 60 43 53 17 27 51 43 60 8Z" stroke="currentColor" strokeWidth="1.2"/><circle cx="60" cy="60" r="7" fill="currentColor"/></svg>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[520px] lg:ml-auto">
          <div className="rps-arch-back" aria-hidden="true" />
          <div className="relative rounded-[28px] border border-white/80 bg-white/95 p-5 shadow-[0_28px_90px_-35px_rgba(46,48,89,.32)] backdrop-blur-xl sm:rounded-[32px] sm:p-7">
            <div className="absolute -right-2 -top-3 grid h-12 w-12 place-items-center rounded-2xl bg-[#FACC15] text-[#5A3410] shadow-lg shadow-amber-500/20 sm:-right-4 sm:-top-4 sm:h-14 sm:w-14"><Sparkles className="h-6 w-6" /></div>
            <div className="mb-5 pr-8 sm:mb-6">
              <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#C24178]">LET’S MAKE IT HAPPEN</p>
              <h2 className="mt-2 font-display text-2xl font-extrabold leading-tight tracking-tight text-[#172033] sm:text-[1.8rem]">Let&apos;s Create Something Amazing!</h2>
              <p className="mt-2 text-sm leading-6 text-[#64748B]">Tell us what you need. We&apos;ll help bring your idea to life.</p>
            </div>

            {sent ? (
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-sm text-emerald-900" role="status">
                <div className="flex items-center gap-2 font-bold"><Check className="h-5 w-5" /> Your enquiry is ready in your email app.</div>
                <p className="mt-2 leading-6">If it didn&apos;t open, email us at <a className="font-semibold underline" href={`mailto:${studioInfo.email}`}>{studioInfo.email}</a>. This website does not store enquiry details.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                  <Field label="Full Name" name="name" placeholder="Your name" required />
                  <Field label="Business Name" name="business" placeholder="Your business (optional)" />
                  <Field label="Phone Number" name="phone" type="tel" placeholder="+91" required />
                  <Field label="Email Address" name="email" type="email" placeholder="you@example.com" required />
                </div>
                <label className="block text-xs font-semibold text-[#344054]">
                  What do you need? <span className="text-[#D9468D]" aria-hidden="true">*</span>
                  <select name="need" required defaultValue="" className="rps-field mt-1.5">
                    <option value="" disabled>Select a service</option>
                    {needs.map((need) => <option key={need}>{need}</option>)}
                  </select>
                </label>
                <label className="block text-xs font-semibold text-[#344054]">
                  Project Details <span className="font-normal text-[#8992A2]">(optional)</span>
                  <textarea name="details" rows="2" placeholder="A few words about your project…" className="rps-field mt-1.5 resize-y" />
                </label>
                <button type="submit" className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#2563EB] via-[#6845D9] to-[#B93883] px-5 text-sm font-bold text-white shadow-md shadow-purple-600/15 transition hover:brightness-105 focus:outline-none focus:ring-4 focus:ring-purple-200">
                  Get a Free Consultation <ArrowRight className="h-4 w-4" />
                </button>
                <p className="text-center text-[10px] leading-4 text-[#7B8494]">Your details are used to prepare an email enquiry. They aren&apos;t stored on this website.</p>
              </form>
            )}
          </div>
          <div className="absolute -bottom-5 -left-4 -z-10 h-20 w-20 rounded-full bg-[#14B8A6]/20 blur-xl sm:-left-8" />
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 h-2 w-full bg-gradient-to-r from-[#2563EB] via-[#D9468D] via-55% to-[#F59E0B]" />
    </section>
  );
}

function Field({ label, name, type = 'text', placeholder, required = false }) {
  return (
    <label className="block text-xs font-semibold text-[#344054]">
      {label} {required && <span className="text-[#D9468D]" aria-hidden="true">*</span>}
      <input name={name} type={type} placeholder={placeholder} required={required} autoComplete={name === 'business' ? 'organization' : name === 'name' ? 'name' : name} className="rps-field mt-1.5" />
    </label>
  );
}
