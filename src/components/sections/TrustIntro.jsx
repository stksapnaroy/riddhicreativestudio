import React from 'react';
import { studioCapabilitiesTicker, studioInfo } from '../../data/companyData';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function TrustIntro({ onOpenQuote }) {
  return (
    <section className="py-14 sm:py-20 bg-[#F8FAFC] border-b border-slate-200/80 relative overflow-hidden">
      {/* Moving capabilities ribbon in light blue */}
      <div className="relative w-full overflow-hidden border-y border-blue-200/80 py-4 bg-[#EFF6FF]">
        <div className="flex w-max animate-marquee space-x-8 text-xs font-mono uppercase tracking-widest text-[#172033] font-semibold">
          {[...studioCapabilitiesTicker, ...studioCapabilitiesTicker].map((item, idx) => (
            <div key={idx} className="flex items-center space-x-3">
              <span className={`w-2 h-2 rounded-full ${
                idx % 4 === 0 ? 'bg-[#2563EB]' : idx % 4 === 1 ? 'bg-[#8B5CF6]' : idx % 4 === 2 ? 'bg-[#14B8A6]' : 'bg-[#FF6B6B]'
              }`} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#2563EB] font-bold">
              <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
              The Studio Advantage
            </div>
            
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#172033] tracking-tight leading-tight">
              One Creative Partner.<br />
              Complete Digital &<br />
              <span className="text-[#2563EB]">Print Solutions.</span>
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-5">
            <p className="text-base sm:text-lg text-[#64748B] leading-relaxed font-normal">
              Most businesses lose time and brand consistency trying to coordinate between web developers who don't understand typography, graphic designers who don't know print bleeds, and print shops with no design support.
            </p>
            <p className="text-sm sm:text-base text-[#172033] leading-relaxed font-medium">
              At <strong className="text-[#2563EB]">Riddhi Print Studio</strong>, we provide all three under one roof. Your responsive website, brand identity system, and physical print collateral are created with cohesive art direction, unified typography, and guaranteed production readiness.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-6">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-bold text-[#2563EB] hover:text-[#1D4ED8] transition-colors group cursor-pointer"
              >
                <span>Discuss Your Project Requirements</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <span className="text-xs font-mono text-[#64748B] flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#14B8A6]" />
                Zero Agency Bloat • Direct Designer & Dev Access
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
