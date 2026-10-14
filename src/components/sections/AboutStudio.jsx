import React from 'react';
import { aboutTags, studioInfo } from '../../data/companyData';
import { ArrowRight, Sparkles, CheckCircle2, Compass, Layers, Palette } from 'lucide-react';

export default function AboutStudio({ onOpenQuote }) {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FFFAF2] border-b border-slate-200 relative scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 2-Column Split: Content & Studio Workspace Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Story & Tags */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#2563EB] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
              About Riddhi Print Studio
            </div>

            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#172033] tracking-tight leading-tight">
              Designing Ideas<br />
              <span className="text-[#2563EB]">Into Reality</span>
            </h2>

            <p className="text-base sm:text-lg text-[#64748B] leading-relaxed font-normal">
              <strong className="text-[#172033]">Riddhi Print Studio</strong> is a multidisciplinary creative design and development studio. We believe great brands should look exceptional both on illuminated glass screens and in textured paper packaging.
            </p>

            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed font-normal">
              Whether you are an ambitious startup needing an MVP website and launch collateral, or an established enterprise requiring cohesive brand systems, brochures, and packaging dielines — we eliminate fragmented vendors by handling design, development, and print production under one roof.
            </p>

            {/* Service Tags */}
            <div className="pt-2">
              <div className="text-xs font-mono uppercase tracking-wider text-[#64748B] font-semibold mb-3">
                Disciplines Under One Roof
              </div>
              <div className="flex flex-wrap gap-2">
                {aboutTags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-white/10 text-[#172033] hover:border-[#2563EB] hover:text-[#2563EB] transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Studio Metrics Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
              <div className="space-y-1">
                <div className="text-xs font-mono text-[#64748B] uppercase">Location</div>
                <div className="font-display font-bold text-base text-[#172033]">{studioInfo.location}</div>
              </div>
              <div className="space-y-1">
                <div className="text-xs font-mono text-[#64748B] uppercase">Dual Medium</div>
                <div className="font-display font-bold text-base text-[#2563EB]">Screen & Print</div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#2563EB] text-[#F8FAFC] hover:bg-[#1D4ED8] text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <span>Let's Work Together</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

          </div>

          {/* Right Column: Creative Studio Workbench Visual Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl bg-white p-6 sm:p-10 border border-slate-200 shadow-xl overflow-hidden text-[#172033]">
              
              {/* Studio ambient glow */}
              <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#2563EB]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-[#D9468D]/10 rounded-full blur-3xl pointer-events-none" />

              {/* Workspace Header */}
              <div className="relative z-10 flex items-center justify-between pb-6 border-b border-slate-200">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-[#2563EB]" />
                  <span className="font-mono text-xs text-[#64748B] uppercase tracking-widest">
                    STUDIO DUAL-CRAFT WORKBENCH
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#2563EB] bg-[#2563EB]/10 px-2.5 py-0.5 rounded border border-[#2563EB]/20">
                  CODE + PRESS
                </span>
              </div>

              {/* Workspace Visual Elements */}
              <div className="relative z-10 py-6 space-y-6">
                
                {/* 1. Color Palette / Swatches Matrix */}
                <div className="space-y-2">
                  <div className="text-[10px] font-mono uppercase text-[#64748B]">Curated Studio Palette Swatches</div>
                  <div className="grid grid-cols-4 gap-2">
                    <div className="h-16 rounded-lg bg-[#EFF6FF] text-[#173B75] p-2 flex flex-col justify-between text-[8px] font-mono border border-blue-100">
                      <span>SOFT BLUE</span>
                      <span>#EFF6FF</span>
                    </div>
                    <div className="h-16 rounded-lg bg-[#FFF8E8] text-[#78350F] p-2 flex flex-col justify-between text-[8px] font-mono font-bold shadow-sm">
                      <span>SAFFRON</span>
                      <span>#FACC15</span>
                    </div>
                    <div className="h-16 rounded-lg bg-[#2563EB] text-[#F8FAFC] p-2 flex flex-col justify-between text-[8px] font-mono font-bold shadow-sm">
                      <span>ROYAL BLUE</span>
                      <span>#2563EB</span>
                    </div>
                    <div className="h-16 rounded-lg bg-[#14B8A6] text-white p-2 flex flex-col justify-between text-[8px] font-mono font-bold">
                      <span>TEAL</span>
                      <span>#14B8A6</span>
                    </div>
                  </div>
                </div>

                {/* 2. Dieline & Vector Alignment Card */}
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 space-y-3">
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#64748B]">
                    <span className="flex items-center gap-1.5 text-[#334155]">
                      <Compass className="w-3.5 h-3.5 text-[#2563EB]" />
                      PRECISION SPECIFICATION ENGINE
                    </span>
                    <span className="text-[#2563EB]">CERTIFIED</span>
                  </div>

                  <div className="h-28 border border-dashed border-[#2563EB]/30 rounded-lg p-3 relative flex items-center justify-around bg-white">
                    <div className="border border-slate-200 rounded p-2 text-center text-[9px] font-mono">
                      <div className="text-[#64748B]">PRINT BLEED</div>
                      <div className="text-[#172033] font-bold">3.0mm EXACT</div>
                    </div>
                    <div className="w-[1px] h-12 bg-slate-200" />
                    <div className="border border-slate-200 rounded p-2 text-center text-[9px] font-mono">
                      <div className="text-[#64748B]">RESOLUTION</div>
                    <div className="text-[#2563EB] font-bold">300 DPI CMYK</div>
                    </div>
                    <div className="w-[1px] h-12 bg-slate-200" />
                    <div className="border border-slate-200 rounded p-2 text-center text-[9px] font-mono">
                      <div className="text-[#64748B]">WEB ENGINE</div>
                      <div className="text-[#172033] font-bold">REACT / CSS</div>
                    </div>
                  </div>
                </div>

                {/* 3. Studio quote stamp */}
                <div className="p-3.5 rounded-xl bg-[#F6EEFF] border border-[#E9D5FF] flex items-center justify-between text-xs font-mono text-[#475569]">
                  <span>“Your Vision. Our Creative Craft.”</span>
                  <span className="text-[#2563EB] font-bold">RPS</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
