import React, { useState } from 'react';
import { processTimelineData } from '../../data/companyData';
import { CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export default function ProcessTimeline({ onOpenQuote }) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-24 sm:py-32 bg-[#FAF9F5] border-t border-[#E7E5DE] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-16 border-b border-[#E7E5DE]">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#2546FF] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#2546FF]" />
              Structured Methodology
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#0D0E11] tracking-tight">
              How We Work
            </h2>
          </div>

          <p className="text-neutral-600 text-base sm:text-lg max-w-md font-normal leading-relaxed">
            A reliable 5-step creative process engineered to eliminate guesswork and deliver exceptional design on schedule.
          </p>
        </div>

        {/* 5-Step Interactive Timeline Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          
          {/* Connector Line (visible on desktop) */}
          <div className="hidden md:block absolute top-12 left-8 right-8 h-[2px] bg-[#E7E5DE] -z-0" />

          {processTimelineData.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <div
                key={step.step}
                onMouseEnter={() => setActiveStep(idx)}
                className={`relative z-10 p-6 rounded-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer border ${
                  isActive
                    ? 'bg-white border-[#2546FF] shadow-xl shadow-[#2546FF]/5 -translate-y-2'
                    : 'bg-white/70 border-[#E7E5DE] hover:border-neutral-400 hover:bg-white'
                }`}
              >
                <div>
                  {/* Step Badge & Indicator Node */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-mono font-bold text-xs transition-all duration-300 shadow-sm ${
                      isActive 
                        ? 'bg-[#2546FF] text-white ring-4 ring-blue-100' 
                        : 'bg-[#0D0E11] text-white'
                    }`}>
                      {step.step}
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#2546FF] font-bold">
                      {step.phase}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display font-bold text-lg text-[#0D0E11] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Key Deliverable Box */}
                <div className="mt-6 pt-4 border-t border-neutral-100">
                  <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider mb-1">
                    Key Deliverable
                  </div>
                  <div className="text-xs font-semibold text-neutral-900 flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{step.keyDeliverable}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Guarantee Pill */}
        <div className="mt-14 p-4 rounded-xl bg-white border border-[#E7E5DE] flex flex-col sm:flex-row items-center justify-between gap-4 max-w-3xl mx-auto shadow-2xs">
          <div className="flex items-center gap-2.5 text-xs text-neutral-700">
            <Sparkles className="w-4 h-4 text-[#2546FF]" />
            <span>Every project comes with guaranteed production-ready assets and complete copyright handover.</span>
          </div>
          <button
            onClick={onOpenQuote}
            className="text-xs font-bold text-[#2546FF] hover:underline flex items-center gap-1 shrink-0"
          >
            <span>Start Step 01</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
