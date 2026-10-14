import React from 'react';
import { craftStandards } from '../../data/companyData';
import { ShieldCheck, CheckCircle2, Sparkles, Code2, Printer, Palette } from 'lucide-react';

const icons = [ShieldCheck, Printer, Code2, Palette];

export default function CraftStandards() {
  return (
    <section className="py-24 sm:py-32 bg-[#F8FAFC] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#2563EB] font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
            Studio Commitments
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#172033] tracking-tight">
            Our Quality & Craft Guarantees
          </h2>
          <p className="text-[#64748B] text-base sm:text-lg font-normal leading-relaxed">
            We don't cut corners. Every digital deliverable and print specification is created to meet rigorous industry standards before final handover.
          </p>
        </div>

        {/* 4 Craft Standard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {craftStandards.map((item, idx) => {
            const Icon = icons[idx] || ShieldCheck;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#FFFFFF] border border-white/10 hover:border-[#2563EB]/40 transition-all duration-300 space-y-4 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-white/5 text-[#2563EB] border border-white/10 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded bg-[#2563EB]/10 text-[#2563EB] border border-[#2563EB]/20">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl sm:text-2xl text-[#172033]">
                  {item.title}
                </h3>

                <p className="text-sm text-[#64748B] leading-relaxed">
                  {item.description}
                </p>

                <div className="pt-3 flex items-center gap-2 text-xs font-mono text-[#2563EB]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Guaranteed Studio Specification</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
