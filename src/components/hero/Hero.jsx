import React from 'react';
import { ArrowRight, Sparkles, MoveDown, CheckCircle2 } from 'lucide-react';
import HeroMockupShowcase from './HeroMockupShowcase';

export default function Hero({ onOpenQuote, onSelectProject }) {
  const scrollToSection = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden bg-noise"
    >
      {/* Background Studio Gradients */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#2546FF]/5 via-amber-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Studio Status Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#E7E5DE] shadow-xs text-neutral-800">
            <span className="w-2 h-2 rounded-full bg-[#2546FF] animate-ping" />
            <span className="text-[11px] font-mono tracking-wider uppercase font-semibold">
              Riddhi Creative Studio • Design Agency
            </span>
          </div>
        </div>

        {/* Hero Editorial Header */}
        <div className="text-center max-w-4xl mx-auto space-y-5">
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-[#0D0E11] tracking-tight leading-[1.08]">
            From Print to Pixels,<br className="hidden sm:inline" />
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#0D0E11] via-[#2546FF] to-[#0D0E11]">
              We Design It All.
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Riddhi Creative Studio creates thoughtful designs that help businesses look better, 
            communicate clearly and stand out — from print and branding to digital experiences and websites.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <button
              onClick={() => scrollToSection('#portfolio')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#0D0E11] text-white hover:bg-[#2546FF] text-sm font-semibold tracking-wide shadow-md hover:shadow-xl hover:shadow-[#2546FF]/20 transition-all duration-300 group"
            >
              <span>View Our Work</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-neutral-900 border border-[#D9D7CE] hover:border-neutral-900 hover:bg-neutral-50 text-sm font-semibold tracking-wide transition-all duration-300"
            >
              <Sparkles className="w-4 h-4 text-[#2546FF]" />
              <span>Start a Project</span>
            </button>
          </div>

          {/* Micro badges below CTA */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-3 text-xs text-neutral-500 font-mono">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Print-Ready Dielines
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Complete Brand Identity
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Responsive Web & UI
            </span>
          </div>
        </div>

        {/* Large Visual Composition Mockup Showcase */}
        <div className="pt-8 sm:pt-12">
          <HeroMockupShowcase onSelectProject={onSelectProject} />
        </div>

      </div>
    </section>
  );
}
