import React from 'react';
import { whyChooseUsData } from '../../data/companyData';
import { 
  ShieldCheck, 
  Layers, 
  Maximize2, 
  Sparkles, 
  TrendingUp, 
  Users2, 
  CheckCircle, 
  XCircle,
  ArrowRight
} from 'lucide-react';

const iconMap = {
  ShieldCheck,
  Layers,
  Maximize2,
  Sparkles,
  TrendingUp,
  Users2,
};

export default function WhyUs({ onOpenQuote }) {
  return (
    <section id="why-us" className="py-24 sm:py-32 bg-[#F8FAFC] border-b border-white/10 relative scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#2563EB] font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
            The Studio Advantage
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#172033] tracking-tight">
            Why Partner With One Creative Studio?
          </h2>
          <p className="text-[#64748B] text-base sm:text-lg font-normal leading-relaxed">
            Eliminate vendor fragmentation. We unify digital frontend code, brand identity, and physical print production into one seamless creative workflow.
          </p>
        </div>

        {/* Side-by-side Comparison Matrix: Fragmented vs. Riddhi Studio */}
        <div className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Column A: Fragmented Approach */}
            <div className="p-8 rounded-2xl bg-[#FFF4F1] border border-[#F4C9C1] space-y-5">
            <div className="flex items-center justify-between pb-4 border-b border-[#F4C9C1]">
              <span className="font-display font-bold text-lg text-[#9F2D20]">
                The Multi-Vendor Headache
              </span>
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white text-[#9F2D20] border border-[#F4C9C1]">
                Fragmented
              </span>
            </div>

            <ul className="space-y-4 text-xs sm:text-sm text-[#64748B]">
              <li className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-[#C24132] shrink-0 mt-0.5" />
                <span>Managing 3–4 separate freelancers who don't talk to each other.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-[#C24132] shrink-0 mt-0.5" />
                <span>Web developer doesn't understand typography or brand aesthetics.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-[#C24132] shrink-0 mt-0.5" />
                <span>Graphic designer provides files with wrong print bleeds and color gamuts.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-[#C24132] shrink-0 mt-0.5" />
                <span>Inconsistent brand colors between physical paper and mobile screens.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-[#C24132] shrink-0 mt-0.5" />
                <span>Blame games when a print error or website glitch occurs.</span>
              </li>
            </ul>
          </div>

          {/* Column B: Riddhi Print Studio */}
          <div className="p-8 rounded-2xl bg-[#FFFFFF] border border-[#2563EB]/40 space-y-5 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#2563EB]/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <span className="font-display font-bold text-lg text-[#172033]">
                The Riddhi Print Studio Workflow
              </span>
              <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded bg-[#2563EB] text-[#F8FAFC] font-bold">
                Unified Partner
              </span>
            </div>

            <ul className="space-y-4 text-xs sm:text-sm text-[#334155]">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                <span><strong>Single point of contact:</strong> One accountable studio from strategy to production.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                <span><strong>Exact color parity:</strong> Seamless harmony between RGB screens and CMYK print inks.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                <span><strong>Production-certified assets:</strong> Clean responsive code & printer-verified vector PDFs.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                <span><strong>End-to-end design system:</strong> Brand fonts, spacing, and icons match everywhere.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                <span><strong>Direct senior craft:</strong> Work directly with expert designers and developers.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* 6 Feature Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {whyChooseUsData.map((item, idx) => {
            const Icon = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl p-8 bg-white border border-slate-200 hover:border-[#D9468D]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top: Icon & Index */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] text-[#2563EB] border border-[#DBEAFE] flex items-center justify-center group-hover:bg-[#2563EB] group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#64748B]">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-xl text-[#172033] group-hover:text-[#2563EB] transition-colors mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#64748B] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom decorative bar */}
                <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-[#64748B]">
                  <span>STUDIO STANDARD</span>
                  <span className="text-[#2563EB] flex items-center gap-1 font-semibold">
                    <CheckCircle className="w-3 h-3" /> Guaranteed
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
