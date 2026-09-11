import React, { useState } from 'react';
import { servicesData } from '../../data/servicesData';
import { 
  Printer, 
  Palette, 
  Sparkles, 
  Package, 
  Layout, 
  Code2, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

const serviceIcons = {
  "print-design": Printer,
  "graphic-design": Palette,
  "branding": Sparkles,
  "packaging-design": Package,
  "web-design": Layout,
  "website-development": Code2,
};

export default function Services({ onSelectCategory, onOpenQuote }) {
  const [activeCard, setActiveCard] = useState(null);

  const handleExplore = (categoryFilter) => {
    if (onSelectCategory) {
      onSelectCategory(categoryFilter);
    }
    const portfolioEl = document.querySelector('#portfolio');
    if (portfolioEl) {
      portfolioEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#FAF9F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading & Subheading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-16 border-b border-[#E7E5DE]">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#2546FF] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#2546FF]" />
              Our Capabilities
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#0D0E11] tracking-tight">
              What We Do
            </h2>
          </div>

          <p className="text-neutral-600 text-base sm:text-lg max-w-md font-normal leading-relaxed">
            From a single design to a complete digital experience, we've got you covered.
          </p>
        </div>

        {/* 6 Interactive Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
          {servicesData.map((service) => {
            const IconComponent = serviceIcons[service.id] || Sparkles;
            const isHovered = activeCard === service.id;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveCard(service.id)}
                onMouseLeave={() => setActiveCard(null)}
                className={`group relative rounded-2xl p-7 sm:p-8 bg-white border transition-all duration-300 flex flex-col justify-between ${
                  isHovered 
                    ? 'border-[#2546FF] shadow-xl shadow-[#2546FF]/5 -translate-y-1' 
                    : 'border-[#E7E5DE] hover:border-neutral-400 shadow-xs'
                }`}
              >
                <div>
                  {/* Top Row: Index & Category Icon */}
                  <div className="flex items-center justify-between pb-6">
                    <span className="font-mono text-xs font-bold text-neutral-400 tracking-wider">
                      {service.number}
                    </span>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      isHovered ? 'bg-[#2546FF] text-white' : 'bg-neutral-100 text-neutral-700'
                    }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-display font-bold text-2xl text-[#0D0E11] group-hover:text-[#2546FF] transition-colors">
                    {service.title}
                  </h3>
                  <div className="text-xs font-medium text-neutral-500 mt-1 mb-4">
                    {service.tagline}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Included Items Tag Pills */}
                  <div className="mt-6 pt-5 border-t border-neutral-100">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-semibold mb-2.5">
                      Included Services
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {service.items.map((item, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-neutral-100/80 text-neutral-700 border border-neutral-200/60"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action CTA */}
                <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <button
                    onClick={() => handleExplore(service.categoryFilter)}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0D0E11] group-hover:text-[#2546FF] transition-colors"
                  >
                    <span>{service.cta}</span>
                  </button>

                  <button
                    onClick={onOpenQuote}
                    className="text-[11px] font-mono text-neutral-400 hover:text-black underline transition-colors"
                  >
                    Inquire
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom studio promise banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#0D0E11] text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="font-display font-bold text-lg sm:text-xl">
              Need a custom multi-discipline design package?
            </div>
            <div className="text-xs sm:text-sm text-neutral-400">
              We bundle print collateral, branding, packaging, and websites into seamless project retainers.
            </div>
          </div>
          <button
            onClick={onOpenQuote}
            className="px-6 py-3 rounded-full bg-[#2546FF] hover:bg-[#1837E8] text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md whitespace-nowrap"
          >
            Request Custom Package →
          </button>
        </div>

      </div>
    </section>
  );
}
