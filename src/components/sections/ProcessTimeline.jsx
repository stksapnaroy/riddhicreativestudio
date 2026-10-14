import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

const processSteps = [
  { step: '01', phase: 'Discover', title: 'Brief & Direction', description: 'Align on your goals, audience, scope and creative direction before work begins.', keyDeliverable: 'Project brief & approved direction' },
  { step: '02', phase: 'Design', title: 'Design & Prototype', description: 'Explore web interfaces, brand visuals, packaging or print layouts in clear concepts.', keyDeliverable: 'Design concepts & previews' },
  { step: '03', phase: 'Build', title: 'Build & Prepare', description: 'Develop the frontend or prepare artwork and production files to the agreed specifications.', keyDeliverable: 'Working code or press-ready files' },
  { step: '04', phase: 'Deliver', title: 'Launch & Handover', description: 'Launch your website or hand over final creative files and assets for the next step.', keyDeliverable: 'Final files & project handover' }
];

export default function ProcessTimeline({ onOpenQuote }) {
  const [activeStep, setActiveStep] = useState(0);

  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    else window.location.href = '/contact';
  };

  return (
    <section id="process" className="py-20 sm:py-28 bg-[#FFFAF2] border-b border-slate-200 relative overflow-hidden scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-14 border-b border-slate-200">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#2563EB] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
              Structured Methodology
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#172033] tracking-tight">
              How We Work
            </h2>
          </div>

          <p className="text-[#64748B] text-base sm:text-lg max-w-md font-normal leading-relaxed">
            A transparent, milestone-driven framework designed to eliminate guesswork and deliver production-ready assets on schedule.
          </p>
        </div>

        {/* Four clear steps from first brief to final handover. */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 relative">
          
          {/* Connector Line (visible only on large desktop screens) */}
          <div className="hidden xl:block absolute top-12 left-8 right-8 h-[1px] bg-slate-200 -z-0" />

          {processSteps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <div
                key={step.step}
                onMouseEnter={() => setActiveStep(idx)}
                className={`relative z-10 p-6 rounded-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer border ${
                  isActive
                    ? 'bg-[#FFFFFF] border-[#2563EB]/60 shadow-xl shadow-[#2563EB]/5 -translate-y-2'
                    : 'bg-white/70 border-slate-200 hover:border-[#D9468D]/40 hover:bg-white'
                }`}
              >
                <div>
                  {/* Step Badge & Indicator Node */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-mono font-bold text-xs transition-all duration-300 shadow-sm ${
                      isActive 
                        ? 'bg-[#2563EB] text-[#F8FAFC] ring-4 ring-[#2563EB]/20' 
                        : 'bg-[#F8FAFC] text-[#172033] border border-white/20'
                    }`}>
                      {step.step}
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#2563EB] font-bold">
                      {step.phase}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display font-bold text-lg text-[#172033] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Key Deliverable Box */}
                <div className="mt-6 pt-4 border-t border-slate-200">
                  <div className="text-[10px] font-mono text-[#64748B] uppercase tracking-wider mb-1">
                    Key Deliverable
                  </div>
                  <div className="text-xs font-semibold text-[#334155] flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0 mt-0.5" />
                    <span>{step.keyDeliverable}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Guarantee Pill */}
          <div className="mt-14 p-4 rounded-xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-3xl mx-auto shadow-sm">
          <div className="flex items-center gap-2.5 text-xs text-[#475569]">
            <Sparkles className="w-4 h-4 text-[#2563EB]" />
            <span>Every project includes master source files, commercial usage rights, and print pre-flight checks.</span>
          </div>
          <button
            onClick={scrollToContact}
            className="text-xs font-mono uppercase font-bold text-[#2563EB] hover:underline flex items-center gap-1 shrink-0 cursor-pointer"
          >
            <span>Start Step 01 Today</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
