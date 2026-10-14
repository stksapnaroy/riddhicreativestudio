import React from 'react';
import { Sparkles, ArrowRight, CheckCircle2, FileText, Layers } from 'lucide-react';
import MockupVisual from '../ui/MockupVisual';
import { portfolioData } from '../../data/portfolioData';

export default function FeaturedProject({ onOpenProject, onOpenQuote }) {
  const featured = portfolioData.find(p => p.id === 'nova-coffee') || portfolioData[0];

  return (
    <section className="py-24 sm:py-32 bg-[#F8FAFC] border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex items-center justify-between pb-8 mb-12 border-b border-slate-200/80">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB]" />
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#172033] font-bold">
              Flagship Concept Case Study
            </h2>
          </div>
          <span className="text-xs font-mono text-[#2563EB] bg-blue-50 px-3 py-1 rounded-full border border-blue-200 font-bold">
            Studio Concept Showcase
          </span>
        </div>

        {/* Split Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Left Column: Large Concept Mockup */}
          <div 
            onClick={() => onOpenProject(featured)}
            className="lg:col-span-7 cursor-pointer group relative rounded-3xl overflow-hidden border border-slate-200/80 bg-white p-3 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <MockupVisual 
              type={featured.mockupType}
              title={featured.title}
              category={featured.category}
              isFeatured={true}
              aspectRatio="aspect-[4/3] sm:aspect-[16/11]"
              className="rounded-2xl shadow-sm transition-all duration-500 group-hover:scale-[1.01]"
            />
            
            {/* Visual click affordance hint */}
            <div className="absolute inset-0 rounded-3xl bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
              <span className="px-5 py-2.5 rounded-full bg-[#2563EB] text-white font-display font-bold text-xs uppercase tracking-wider shadow-xl flex items-center gap-2">
                <span>Inspect Concept Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Right Column: Project Information */}
          <div className="lg:col-span-5 space-y-6">

            {/* Category tag & timeline */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#2563EB] font-bold uppercase tracking-wider">
                <span>{featured.category}</span>
                <span className="text-slate-300">•</span>
                <span>{featured.timeline}</span>
                <span className="text-slate-300">•</span>
                <span>{featured.year}</span>
              </div>
              
              <h3 className="font-display font-black text-3xl sm:text-4xl text-[#172033] tracking-tight leading-tight">
                {featured.title}
              </h3>
            </div>

            {/* Short description */}
            <p className="text-[#64748B] text-base leading-relaxed">
              {featured.shortDescription}
            </p>

            {/* Services Included */}
            <div className="pt-2 border-t border-slate-200/80">
              <div className="text-[11px] font-mono uppercase tracking-widest text-[#64748B] font-semibold mb-3">
                Deliverables Crafted
              </div>
              <div className="flex flex-wrap gap-2">
                {featured.services.map((service, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-white border border-slate-200 text-[#172033] shadow-2xs"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Design Craft Rationale */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs text-[#64748B] leading-relaxed font-mono shadow-2xs">
              <span className="text-[#2563EB] font-bold">Studio Direction: </span>
              {featured.designSolution}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={() => onOpenProject(featured)}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#2563EB] text-white hover:bg-[#1D4ED8] text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md shadow-blue-500/20 group cursor-pointer"
              >
                <span>Read Full Case Study</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white border border-slate-200 hover:border-[#2563EB] text-[#172033] hover:text-[#2563EB] text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-2xs cursor-pointer"
              >
                Start Similar Project →
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
