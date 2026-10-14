import React, { useState } from 'react';
import { servicesData } from '../../data/servicesData';
import { 
  Code2, 
  Sparkles, 
  Printer, 
  Layers, 
  ArrowRight,
  CheckCircle2,
  Clock,
  FileCheck
} from 'lucide-react';

const serviceTheme = {
  "web-dev": {
    icon: Code2,
    badgeBg: "bg-blue-50 text-[#2563EB] border-blue-200",
    accentBg: "bg-[#2563EB]",
    hoverBorder: "hover:border-[#2563EB]/50",
    iconBg: "bg-blue-50 text-[#2563EB]",
    checkColor: "text-[#2563EB]"
  },
  "graphic-branding": {
    icon: Sparkles,
    badgeBg: "bg-purple-50 text-[#8B5CF6] border-purple-200",
    accentBg: "bg-[#8B5CF6]",
    hoverBorder: "hover:border-[#8B5CF6]/50",
    iconBg: "bg-purple-50 text-[#8B5CF6]",
    checkColor: "text-[#8B5CF6]"
  },
  "print-production": {
    icon: Printer,
    badgeBg: "bg-teal-50 text-[#14B8A6] border-teal-200",
    accentBg: "bg-[#14B8A6]",
    hoverBorder: "hover:border-[#14B8A6]/50",
    iconBg: "bg-teal-50 text-[#14B8A6]",
    checkColor: "text-[#14B8A6]"
  },
  "digital-creative": {
    icon: Layers,
    badgeBg: "bg-rose-50 text-[#FF6B6B] border-rose-200",
    accentBg: "bg-[#FF6B6B]",
    hoverBorder: "hover:border-[#FF6B6B]/50",
    iconBg: "bg-rose-50 text-[#FF6B6B]",
    checkColor: "text-[#FF6B6B]"
  }
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
    } else {
      window.location.href = `/portfolio?category=${encodeURIComponent(categoryFilter)}`;
    }
  };

  return (
    <section id="services" className="py-24 sm:py-32 bg-white border-b border-slate-200/80 relative scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading & Subheading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-14 border-b border-slate-200/80">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#2563EB] font-bold">
              <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
              Core Capabilities
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#172033] tracking-tight">
              Services & Deliverables
            </h2>
          </div>

          <p className="text-[#64748B] text-base sm:text-lg max-w-md font-normal leading-relaxed">
            From single-page responsive builds to complete physical print suites and brand identities — everything is handled with master craftsmanship.
          </p>
        </div>

        {/* 4 Core Service Cards (2x2 Grid) with distinct colorful accents */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {servicesData.map((service) => {
            const theme = serviceTheme[service.id] || serviceTheme["web-dev"];
            const IconComponent = theme.icon;
            const isHovered = activeCard === service.id;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveCard(service.id)}
                onMouseLeave={() => setActiveCard(null)}
                className={`group relative rounded-2xl p-7 sm:p-9 bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:shadow-blue-500/8 transition-all duration-300 flex flex-col justify-between ${theme.hoverBorder} ${
                  isHovered ? '-translate-y-1' : ''
                }`}
              >
                <div>
                  {/* Top Row: Index, Badge & Icon */}
                  <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-[#172033] bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                        {service.number}
                      </span>
                      <span className={`text-[10px] font-mono uppercase tracking-widest font-bold px-2.5 py-0.5 rounded-full border ${theme.badgeBg}`}>
                        {service.featuredBadge}
                      </span>
                    </div>

                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      isHovered ? `${theme.accentBg} text-white shadow-md` : `${theme.iconBg} border border-slate-100`
                    }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#172033] group-hover:text-[#2563EB] transition-colors mt-6">
                    {service.title}
                  </h3>
                  <div className="text-xs sm:text-sm font-medium text-[#64748B] mt-2 mb-4 leading-relaxed">
                    {service.tagline}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {service.description}
                  </p>

                  {/* Included Items Tag Pills */}
                  <div className="mt-6 pt-5 border-t border-slate-100">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#64748B] font-semibold mb-3">
                      Key Deliverables & Formats
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.items.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-xs text-[#172033] bg-[#F8FAFC] p-2.5 rounded-xl border border-slate-200/70"
                        >
                          <CheckCircle2 className={`w-3.5 h-3.5 ${theme.checkColor} shrink-0`} />
                          <span className="font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Production specs callout */}
                  <div className="mt-5 p-4 rounded-xl bg-[#EFF6FF]/60 border border-blue-100 text-xs text-[#64748B] space-y-1">
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#2563EB] font-bold uppercase">
                      <FileCheck className="w-3.5 h-3.5" />
                      <span>Delivery Package:</span>
                    </div>
                    <p className="text-[11px] text-slate-700 leading-relaxed font-mono">
                      {service.deliverables}
                    </p>
                  </div>
                </div>

                {/* Bottom Action Bar */}
                <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#64748B]">
                    <Clock className="w-3.5 h-3.5 text-[#2563EB]" />
                    <span>Est. {service.turnaround}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleExplore(service.categoryFilter)}
                      className="text-xs font-mono text-[#64748B] hover:text-[#2563EB] underline transition-colors cursor-pointer"
                    >
                      View Concepts
                    </button>
                    <button
                      onClick={onOpenQuote}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#EFF6FF] hover:bg-[#2563EB] hover:text-white text-xs font-bold uppercase tracking-wider text-[#2563EB] transition-all cursor-pointer border border-blue-200"
                    >
                      <span>Inquire</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom studio custom retainer banner */}
        <div className="mt-14 p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-[#EFF6FF] via-white to-[#EFF6FF] border border-blue-200 text-[#172033] flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center md:text-left">
            <div className="font-display font-bold text-xl sm:text-2xl text-[#172033]">
              Looking for a unified multi-discipline package?
            </div>
            <div className="text-xs sm:text-sm text-[#64748B] max-w-xl">
              Combine a brand identity system, custom responsive website, and complete print suite into a single managed milestone timeline.
            </div>
          </div>
          <button
            onClick={onOpenQuote}
            className="px-7 py-3.5 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md shadow-blue-500/20 whitespace-nowrap cursor-pointer"
          >
            Request Multi-Service Proposal →
          </button>
        </div>

      </div>
    </section>
  );
}
