import React from 'react';
import { Sparkles, ArrowRight, CheckCircle2, Award } from 'lucide-react';
import MockupVisual from '../ui/MockupVisual';
import { portfolioData } from '../../data/portfolioData';

export default function FeaturedProject({ onOpenProject, onOpenQuote }) {
  // Select Nova Coffee as the flagship featured project
  const featured = portfolioData.find(p => p.id === 'nova-coffee') || portfolioData[0];

  return (
    <section className="py-24 sm:py-32 bg-[#FAF9F5] border-t border-[#E7E5DE] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex items-center justify-between pb-8 mb-10 border-b border-[#E7E5DE]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2546FF]" />
            <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-800 font-bold">
              Featured Project
            </h2>
          </div>
          <span className="text-xs font-mono text-neutral-500">
            Case Study • 01
          </span>
        </div>

        {/* Split Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column: Large Project Visual Mockup */}
          <div 
            onClick={() => onOpenProject(featured)}
            className="lg:col-span-7 cursor-pointer group relative"
          >
            <MockupVisual 
              type={featured.mockupType}
              title={featured.title}
              category={featured.category}
              isFeatured={true}
              aspectRatio="aspect-[4/3] sm:aspect-[16/11]"
              className="shadow-2xl transition-all duration-500 group-hover:scale-[1.01]"
            />
            
            {/* Visual click affordance hint */}
            <div className="absolute inset-0 rounded-xl bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
              <span className="px-4 py-2 rounded-full bg-white/95 text-black font-display font-bold text-xs shadow-xl flex items-center gap-1.5 backdrop-blur-sm">
                <span>View Full Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Right Column: Project Information */}
          <div className="lg:col-span-5 space-y-6">

            {/* Category tag & Client type */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#2546FF] font-semibold uppercase tracking-wider">
                <span>{featured.category}</span>
                <span>•</span>
                <span>{featured.timeline}</span>
                <span>•</span>
                <span>{featured.year}</span>
              </div>
              
              <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0D0E11] tracking-tight leading-tight">
                {featured.title}
              </h3>
            </div>

            {/* Short description */}
            <p className="text-neutral-600 text-base leading-relaxed">
              {featured.shortDescription}
            </p>

            {/* Services Provided */}
            <div className="pt-2 border-t border-[#E7E5DE]">
              <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 font-semibold mb-3">
                Services Provided
              </div>
              <div className="flex flex-wrap gap-2">
                {featured.services.map((service, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-white border border-[#E7E5DE] text-neutral-800 shadow-2xs"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Highlight takeaway quote / outcome */}
            <div className="p-4 rounded-xl bg-[#F3F2EC] border border-[#E5E4DE] text-xs text-neutral-700 leading-relaxed font-mono">
              <span className="text-[#2546FF] font-bold">Outcome: </span>
              {featured.finalResult}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={() => onOpenProject(featured)}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#0D0E11] text-white hover:bg-[#2546FF] text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md group"
              >
                <span>View Case Study</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-transparent hover:bg-neutral-200/50 text-neutral-800 text-xs font-bold uppercase tracking-wider transition-all duration-200"
              >
                Start Project Like This →
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
