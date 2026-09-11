import React from 'react';
import { testimonialsData } from '../../data/companyData';
import { Quote, Sparkles } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32 bg-[#FAF9F5] border-t border-[#E7E5DE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#2546FF] font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#2546FF]" />
            Client Perspectives
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#0D0E11] tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg font-normal leading-relaxed">
            Honest reflections from founders and creative leads who partner with Riddhi Creative Studio.
          </p>
        </div>

        {/* 3 Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-2xl bg-white border border-[#E7E5DE] shadow-xs flex flex-col justify-between hover:border-neutral-400 transition-colors"
            >
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-[#2546FF]/30" />
                <p className="text-neutral-700 text-sm sm:text-base leading-relaxed italic">
                  “{item.quote}”
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center justify-between">
                <div>
                  <div className="font-display font-bold text-sm text-[#0D0E11]">
                    {item.author}
                  </div>
                  <div className="text-xs text-neutral-500">
                    {item.role}, <span className="text-neutral-700 font-medium">{item.company}</span>
                  </div>
                </div>

                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-100 text-neutral-600">
                  {item.projectType}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer / Note */}
        <div className="mt-8 text-center text-xs text-neutral-400 font-mono">
          * Representative client testimonials structured as easily editable placeholders.
        </div>

      </div>
    </section>
  );
}
