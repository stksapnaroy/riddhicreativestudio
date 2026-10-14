import React from 'react';
import { portfolioCategories, portfolioData } from '../../data/portfolioData';
import PortfolioCard from './PortfolioCard';
import { Sparkles, Layers, Info, ArrowRight } from 'lucide-react';

export default function Portfolio({ 
  activeCategory, 
  onSelectCategory, 
  onSelectProject,
  onOpenQuote 
}) {
  // Filter projects dynamically
  const filteredProjects = activeCategory === "All"
    ? portfolioData
    : portfolioData.filter(project => 
        project.category === activeCategory || 
        project.secondaryCategories?.includes(activeCategory)
      );

  return (
    <section id="portfolio" className="py-20 sm:py-28 bg-[#F7F8FC] border-b border-slate-200 relative scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-200">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#2563EB] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
              Work & Concept Showcases
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#172033] tracking-tight">
              Selected Work
            </h2>
          </div>

          <p className="text-[#64748B] text-base sm:text-lg max-w-md font-normal leading-relaxed">
            Curated concept case studies demonstrating our multidisciplinary craft across web applications, brand identities, and luxury print production.
          </p>
        </div>

        {/* Dynamic Category Filter Bar */}
        <div className="mt-10 mb-12 flex items-center gap-2 overflow-x-auto pb-3 sm:pb-0 scrollbar-none">
          {portfolioCategories.map((category) => {
            const isSelected = activeCategory === category;
            
            const count = category === "All" 
              ? portfolioData.length 
              : portfolioData.filter(p => p.category === category || p.secondaryCategories?.includes(category)).length;

            return (
              <button
                key={category}
                onClick={() => onSelectCategory(category)}
                className={`group relative px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-[#2563EB] text-[#F8FAFC] font-bold shadow-md shadow-[#2563EB]/10'
                    : 'bg-white text-[#64748B] border border-slate-200 hover:border-[#D9468D]/50 hover:text-[#172033]'
                }`}
              >
                <span>{category}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-[#64748B]'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Portfolio Cards Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <PortfolioCard
                key={project.id}
                project={project}
                onClick={onSelectProject}
              />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center rounded-2xl bg-white border border-slate-200 p-8 space-y-4">
            <Layers className="w-10 h-10 text-[#64748B] mx-auto" />
            <div className="font-display font-bold text-lg text-[#172033]">No concepts found in this filter</div>
            <p className="text-xs text-[#64748B] max-w-sm mx-auto">
              We frequently produce custom multi-discipline work. Contact us to discuss your custom project scope.
            </p>
            <button
              onClick={() => onSelectCategory("All")}
              className="text-xs font-mono text-[#2563EB] font-bold hover:underline cursor-pointer"
            >
              Reset to All Projects
            </button>
          </div>
        )}

        {/* Transparent Concept Statement */}
        <div className="mt-14 p-5 rounded-xl bg-white border border-slate-200 flex items-start gap-3.5 text-xs text-[#64748B] max-w-3xl mx-auto">
          <Info className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <span className="font-bold text-[#172033]">Studio Craft Disclosure: </span>
            To maintain complete integrity with our clients, the presentations above are clearly identified 
            <strong className="text-[#2563EB]"> Studio Sample Concepts</strong>. They illustrate our real typographic design systems, 
            factory dieline preparation, 300 DPI CMYK pre-press standards, and responsive frontend code.
          </div>
        </div>

        {/* Bottom Portfolio Inquiry Banner */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-2 pl-6 pr-2 rounded-full bg-white border border-slate-200 shadow-lg">
            <span className="text-xs sm:text-sm text-[#172033] font-medium">
              Ready to create something distinctive for your brand?
            </span>
            <button
              onClick={onOpenQuote}
              className="px-6 py-2.5 rounded-full bg-[#2563EB] text-[#F8FAFC] hover:bg-[#1D4ED8] text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer"
            >
              Discuss Your Project →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
