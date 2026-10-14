import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import MockupVisual from '../ui/MockupVisual';

export default function PortfolioCard({ project, onClick }) {
  return (
    <article
      onClick={() => onClick(project)}
      className="group cursor-pointer flex flex-col justify-between rounded-2xl bg-white border border-[#E2E8F0] overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-[#2563EB]/10 hover:border-[#2563EB]/50 transition-all duration-300"
    >
      {/* Visual Mockup Container */}
      <div className="relative overflow-hidden bg-[#F8FAFC]">
        <MockupVisual
          type={project.mockupType}
          title={project.title}
          category={project.category}
          imageUrl={project.imageUrl}
          aspectRatio="aspect-[16/11]"
          className="transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />

        {/* Hover View Button Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
          <div className="w-12 h-12 rounded-full bg-[#2563EB] text-[#F8FAFC] flex items-center justify-center shadow-2xl transition-transform duration-300 transform scale-75 group-hover:scale-100">
            <ArrowUpRight className="w-5 h-5 font-bold" />
          </div>
        </div>

        {/* Studio Concept badge overlay */}
        <div className="absolute top-3 left-3 pointer-events-none">
          <span className="text-[9px] font-mono uppercase tracking-widest px-2.5 py-1 rounded bg-[#F8FAFC]/80 text-[#2563EB] border border-white/10 backdrop-blur-sm">
            {project.conceptBadge || "Studio Concept"}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
        <div className="space-y-2">
          {/* Metadata: Category & Timeline */}
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-[#2563EB] font-semibold uppercase tracking-wider">
              {project.category}
            </span>
            <span className="text-[#64748B]">
              {project.year}
            </span>
          </div>

          {/* Project Title */}
          <h3 className="font-display font-bold text-xl text-[#172033] group-hover:text-[#2563EB] transition-colors leading-tight">
            {project.title}
          </h3>

          {/* Short description */}
          <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed line-clamp-2">
            {project.shortDescription}
          </p>
        </div>

        {/* Footer: Tags & View Project link */}
        <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
          <div className="flex flex-wrap gap-1">
            {project.services.slice(0, 2).map((srv, idx) => (
              <span 
                key={idx} 
                className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#EFF6FF] text-[#475569] border border-[#DBEAFE]"
              >
                {srv}
              </span>
            ))}
            {project.services.length > 2 && (
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 text-[#64748B]">
                +{project.services.length - 2}
              </span>
            )}
          </div>

          <div className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider font-bold text-[#172033] group-hover:text-[#2563EB] transition-colors">
            <span>Explore</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </article>
  );
}
