import React from 'react';
import { ArrowRight, Sparkles, FolderOpen, Mail, MessageSquare } from 'lucide-react';
import { studioInfo } from '../../data/companyData';

export default function FullCTA({ onOpenQuote }) {
  const scrollToSection = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-24 sm:py-32 bg-gradient-to-br from-[#173B75] via-[#43338D] to-[#A52C73] border-b border-white/10 text-white overflow-hidden">
      {/* Dynamic Studio Glow */}
      <div className="absolute inset-0 opacity-20 bg-dot-pattern pointer-events-none" />
      <div className="absolute -top-32 -right-24 w-96 h-96 rounded-full border border-white/15 pointer-events-none" />
      <div className="absolute -bottom-48 -left-20 w-[30rem] h-[30rem] rounded-full border border-[#FACC15]/30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

        {/* Top Studio Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFFFFF] border border-white/10 text-neutral-300 mb-8">
          <Sparkles className="w-3.5 h-3.5 text-[#D9468D]" />
          <span className="text-xs font-mono tracking-widest uppercase font-semibold text-[#6D28D9]">
            Start Your Next Project
          </span>
        </div>

        {/* Headline */}
        <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.08] max-w-4xl mx-auto text-white">
          Have a Project<br className="hidden sm:inline" /> in Mind?
        </h2>

        {/* Supporting text */}
        <p className="mt-6 text-base sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-normal">
          Whether you need a high-converting website, bespoke brand identity, or production-ready print collateral — let's craft something remarkable together.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenQuote}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#FACC15] hover:bg-[#FDE68A] text-[#172033] font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-2xl shadow-black/20 group cursor-pointer"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <button
            onClick={() => scrollToSection('#portfolio')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/30 text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer"
          >
            <FolderOpen className="w-4 h-4 text-[#FACC15]" />
            <span>Explore Selected Work</span>
          </button>
        </div>

        {/* Direct WhatsApp & Email quick line */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-white/75">
          <a 
            href={studioInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-white/85 hover:text-[#FACC15] transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#FACC15]" />
            <span>Chat on WhatsApp: {studioInfo.phone}</span>
          </a>
          <span className="text-white/20 hidden sm:inline">•</span>
          <a 
            href={`mailto:${studioInfo.email}`} 
            className="inline-flex items-center gap-1.5 text-white/85 hover:text-[#FACC15] transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#FACC15]" />
            <span>{studioInfo.email}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
