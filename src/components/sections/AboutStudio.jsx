import React from 'react';
import { aboutTags } from '../../data/companyData';
import { ArrowRight, Sparkles, CheckCircle2, Compass, Layers, Palette } from 'lucide-react';

export default function AboutStudio({ onOpenQuote }) {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#FAF9F5] border-t border-[#E7E5DE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 2-Column Split: Content & Studio Workspace Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Story & Tags */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#2546FF] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#2546FF]" />
              About Riddhi Creative Studio
            </div>

            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#0D0E11] tracking-tight leading-tight">
              Designing Ideas<br />Into Reality
            </h2>

            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
              Riddhi Creative Studio is a creative design studio focused on helping businesses communicate through strong visual design. 
              From print materials and branding to digital graphics and websites, we bring creative thinking and practical design together.
            </p>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              Whether working with ambitious startups forging their first identity or established enterprises seeking unified print and digital evolution, 
              we champion typography, spatial discipline, and genuine strategic clarity across every medium.
            </p>

            {/* Service Tags */}
            <div className="pt-2">
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold mb-3">
                Disciplines Under One Roof
              </div>
              <div className="flex flex-wrap gap-2">
                {aboutTags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold px-3.5 py-1.5 rounded-full bg-white border border-[#E7E5DE] text-neutral-800 shadow-2xs hover:border-[#2546FF] hover:text-[#2546FF] transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Studio Metrics Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#E7E5DE]">
              <div className="space-y-1">
                <div className="text-xs font-mono text-neutral-500 uppercase">Headquarters</div>
                <div className="font-display font-bold text-base text-neutral-900">India (Global Remote)</div>
              </div>
              <div className="space-y-1">
                <div className="text-xs font-mono text-neutral-500 uppercase">Focus</div>
                <div className="font-display font-bold text-base text-[#2546FF]">Print to Pixels</div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#0D0E11] text-white hover:bg-[#2546FF] text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <span>Let's Work Together</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

          </div>

          {/* Right Column: Creative Studio Workspace Visual Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl bg-[#14161C] p-6 sm:p-10 border border-neutral-700/60 shadow-2xl overflow-hidden text-white">
              
              {/* Studio ambient glow */}
              <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#2546FF]/25 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

              {/* Workspace Header */}
              <div className="relative z-10 flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-[#2546FF]" />
                  <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
                    STUDIO DESK & WORKBENCH
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                  ACTIVE DRAFTING
                </span>
              </div>

              {/* Workspace Visual Elements */}
              <div className="relative z-10 py-6 space-y-6">
                {/* 1. Color Palette / Swatches Matrix */}
                <div className="space-y-2">
                  <div className="text-[10px] font-mono uppercase text-neutral-400">Color Fidelity Swatches</div>
                  <div className="grid grid-cols-5 gap-2">
                    <div className="h-14 rounded-lg bg-[#FAF9F5] text-black p-1.5 flex flex-col justify-between text-[8px] font-mono font-bold shadow-sm">
                      <span>OFFWHITE</span>
                      <span>#FAF9F5</span>
                    </div>
                    <div className="h-14 rounded-lg bg-[#2546FF] text-white p-1.5 flex flex-col justify-between text-[8px] font-mono font-bold shadow-sm">
                      <span>COBALT</span>
                      <span>#2546FF</span>
                    </div>
                    <div className="h-14 rounded-lg bg-[#0D0E11] text-white p-1.5 flex flex-col justify-between text-[8px] font-mono font-bold border border-white/20">
                      <span>OBSIDIAN</span>
                      <span>#0D0E11</span>
                    </div>
                    <div className="h-14 rounded-lg bg-[#D97706] text-white p-1.5 flex flex-col justify-between text-[8px] font-mono font-bold">
                      <span>AMBER</span>
                      <span>PANTONE</span>
                    </div>
                    <div className="h-14 rounded-lg bg-[#059669] text-white p-1.5 flex flex-col justify-between text-[8px] font-mono font-bold">
                      <span>BOTANIC</span>
                      <span>CMYK</span>
                    </div>
                  </div>
                </div>

                {/* 2. Grid & Dieline Preview Card */}
                <div className="p-4 rounded-xl bg-neutral-900/90 border border-white/10 space-y-3">
                  <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400">
                    <span className="flex items-center gap-1.5 text-neutral-200">
                      <Compass className="w-3.5 h-3.5 text-[#2546FF]" />
                      PRECISION DIELINE & VECTOR ALIGNMENT
                    </span>
                    <span>1:1 SCALE</span>
                  </div>

                  <div className="h-28 border border-dashed border-[#2546FF]/40 rounded-lg p-3 relative flex items-center justify-around bg-black/40">
                    <div className="border border-white/20 rounded p-2 text-center text-[9px] font-mono">
                      <div className="text-neutral-400">MARGIN</div>
                      <div className="text-white font-bold">3.0mm BLEED</div>
                    </div>
                    <div className="w-[1px] h-12 bg-neutral-700" />
                    <div className="border border-white/20 rounded p-2 text-center text-[9px] font-mono">
                      <div className="text-neutral-400">RESOLUTION</div>
                      <div className="text-emerald-400 font-bold">300 DPI VECTOR</div>
                    </div>
                    <div className="w-[1px] h-12 bg-neutral-700" />
                    <div className="border border-white/20 rounded p-2 text-center text-[9px] font-mono">
                      <div className="text-neutral-400">CODE</div>
                      <div className="text-[#2546FF] font-bold">REACT / CSS</div>
                    </div>
                  </div>
                </div>

                {/* 3. Studio quote stamp */}
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs font-mono text-neutral-300">
                  <span>“Craft is not an afterthought, it is the product.”</span>
                  <span className="text-[#2546FF] font-bold">RCS</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
