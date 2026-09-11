import React from 'react';
import { portfolioCategories, portfolioData } from '../../data/portfolioData';
import PortfolioCard from './PortfolioCard';
import { Sparkles, Layers, Info } from 'lucide-react';

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
    <section id="portfolio" className="py-24 sm:py-32 bg-[#FAF9F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E7E5DE]">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#2546FF] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#2546FF]" />
              Portfolio & Case Studies
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#0D0E11] tracking-tight">
              Selected Work
            </h2>
          </div>

          <p className="text-neutral-600 text-base sm:text-lg max-w-md font-normal leading-relaxed">
            A collection of ideas we've turned into meaningful visual experiences across print and digital media.
          </p>
        </div>

        {/* Dynamic Category Filter Bar */}
        <div className="mt-10 mb-12 flex items-center gap-2 overflow-x-auto pb-3 sm:pb-0 scrollbar-none">
          {portfolioCategories.map((category) => {
            const isSelected = activeCategory === category;
            
            // Calculate count
            const count = category === "All" 
              ? portfolioData.length 
              : portfolioData.filter(p => p.category === category || p.secondaryCategories?.includes(category)).length;

            return (
              <button
                key={category}
                onClick={() => onSelectCategory(category)}
                className={`group relative px-4 py-2 rounded-full text-xs font-semibold tracking-wide whitespace-nowrap transition-all duration-200 flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#0D0E11] text-white shadow-md'
                    : 'bg-white text-neutral-600 border border-[#E7E5DE] hover:border-neutral-400 hover:text-black'
                }`}
              >
                <span>{category}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-neutral-100 text-neutral-500'
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
          <div className="py-20 text-center rounded-2xl bg-white border border-[#E7E5DE] p-8 space-y-4">
            <Layers className="w-10 h-10 text-neutral-400 mx-auto" />
            <div className="font-display font-bold text-lg">No projects found in this category</div>
            <p className="text-xs text-neutral-500 max-w-sm mx-auto">
              We frequently produce custom work in this category. Contact us to view private client archives.
            </p>
            <button
              onClick={() => onSelectCategory("All")}
              className="text-xs font-mono text-[#2546FF] font-bold hover:underline"
            >
              Reset to All Projects
            </button>
          </div>
        )}

        {/* Transparent Notice about Concept Showcases */}
        <div className="mt-14 p-4 rounded-xl bg-[#F4F3ED] border border-[#E7E5DE] flex items-start gap-3 text-xs text-neutral-600 max-w-3xl mx-auto">
          <Info className="w-4 h-4 text-[#2546FF] shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-neutral-900">Studio Portfolio Architecture: </span>
            The projects above are structured concept showcases engineered to demonstrate our typography, 
            print-ready dielines, 3D packaging systems, and digital design standards. They can easily be customized 
            or populated with your live client assets.
          </div>
        </div>

        {/* Bottom Portfolio Inquiry Banner */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-2 pl-5 pr-2 rounded-full bg-white border border-[#E7E5DE] shadow-sm">
            <span className="text-xs sm:text-sm text-neutral-700 font-medium">
              Want to see more tailored work in your specific industry?
            </span>
            <button
              onClick={onOpenQuote}
              className="px-5 py-2.5 rounded-full bg-[#0D0E11] text-white hover:bg-[#2546FF] text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Inquire About Custom Samples →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
