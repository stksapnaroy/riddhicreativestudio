import React from 'react';
import { ArrowRight, Sparkles, FolderOpen, Mail } from 'lucide-react';
import { studioInfo } from '../../data/companyData';

export default function FullCTA({ onOpenQuote }) {
  const scrollToSection = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-28 sm:py-36 bg-[#0D0E11] text-white overflow-hidden bg-noise-dark">
      {/* Dynamic Studio Gradient Glows */}
      <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-[#2546FF]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 right-1/4 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

        {/* Top Studio Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-neutral-300 mb-8">
          <Sparkles className="w-3.5 h-3.5 text-[#2546FF]" />
          <span className="text-xs font-mono tracking-widest uppercase font-semibold">
            Let's Collaborate
          </span>
        </div>

        {/* Headline */}
        <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.08] max-w-4xl mx-auto">
          Have a Project<br className="hidden sm:inline" /> in Mind?
        </h2>

        {/* Supporting text */}
        <p className="mt-6 text-base sm:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed font-normal">
          Whether it's a brochure, brand identity, packaging design or a complete website, let's create something great together.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenQuote}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#2546FF] hover:bg-[#1837E8] text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-2xl shadow-blue-500/30 group"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <button
            onClick={() => scrollToSection('#portfolio')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/20 text-sm font-semibold tracking-wide transition-all duration-300"
          >
            <FolderOpen className="w-4 h-4 text-neutral-400" />
            <span>View Our Portfolio</span>
          </button>
        </div>

        {/* Direct Email quick line */}
        <div className="mt-12 text-xs font-mono text-neutral-500">
          Or send a direct email to{' '}
          <a 
            href={`mailto:${studioInfo.email}`} 
            className="text-white hover:text-[#2546FF] underline underline-offset-4 transition-colors font-medium"
          >
            {studioInfo.email}
          </a>
        </div>

      </div>
    </section>
  );
}
