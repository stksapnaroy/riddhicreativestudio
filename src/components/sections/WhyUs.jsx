import React from 'react';
import { whyChooseUsData } from '../../data/companyData';
import { 
  Sparkles, 
  TrendingUp, 
  Layers, 
  Maximize2, 
  Users2, 
  ShieldCheck,
  CheckCircle 
} from 'lucide-react';

const iconMap = {
  Sparkles,
  TrendingUp,
  Layers,
  Maximize2,
  Users2,
  ShieldCheck,
};

export default function WhyUs() {
  return (
    <section className="py-24 sm:py-32 bg-[#FAF9F5] border-t border-[#E7E5DE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#2546FF] font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#2546FF]" />
            The Studio Difference
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#0D0E11] tracking-tight">
            Why Work With Us?
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg font-normal leading-relaxed">
            We operate as an agile creative partner invested in your long-term success — delivering thoughtful, high-caliber craft without agency bloat.
          </p>
        </div>

        {/* 6 Feature Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {whyChooseUsData.map((item, idx) => {
            const Icon = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl p-8 bg-white border border-[#E7E5DE] hover:border-[#2546FF]/50 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top: Icon & Index */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-neutral-100 text-neutral-800 flex items-center justify-center group-hover:bg-[#2546FF] group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-neutral-400">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-xl text-[#0D0E11] group-hover:text-[#2546FF] transition-colors mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom decorative bar */}
                <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                  <span>STUDIO STANDARD</span>
                  <span className="text-emerald-600 flex items-center gap-1 font-semibold">
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
