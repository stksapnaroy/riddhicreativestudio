import React from 'react';
import { studioStats } from '../../data/companyData';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function TrustIntro({ onOpenQuote }) {
  return (
    <section className="py-20 sm:py-28 bg-[#FAF9F5] border-y border-[#E7E5DE] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Editorial Split Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#2546FF] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#2546FF]" />
              Studio Philosophy
            </div>
            
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0D0E11] tracking-tight leading-tight">
              Creative Thinking.<br />
              Beautiful Design.<br />
              <span className="text-neutral-400">Real Results.</span>
            </h2>
          </div>

          <div className="lg:col-span-6 space-y-6 pt-2">
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
              We combine creative thinking, strategic design and digital expertise to create work that looks great and works even better. 
              Whether you need a single marketing piece or a complete visual identity, Riddhi Creative Studio is here to bring your ideas to life.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#0D0E11] hover:text-[#2546FF] transition-colors group"
              >
                <span>Let's talk about your upcoming project</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-[#2546FF]" />
              </button>
            </div>
          </div>

        </div>

        {/* Small Stats Grid (Easily editable placeholders) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-16 pt-12 border-t border-[#E7E5DE]">
          {studioStats.map((stat, idx) => (
            <div 
              key={idx} 
              className="space-y-1.5 p-4 rounded-xl bg-white/60 border border-[#EAE8E0] hover:border-[#2546FF]/40 transition-colors"
            >
              <div className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#0D0E11] tracking-tight">
                {stat.number}
              </div>
              <div className="text-sm font-semibold text-neutral-900">
                {stat.label}
              </div>
              <div className="text-xs text-neutral-500 leading-normal">
                {stat.desc}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
