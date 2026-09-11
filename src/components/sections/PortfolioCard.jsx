import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import MockupVisual from '../ui/MockupVisual';

export default function PortfolioCard({ project, onClick }) {
  return (
    <article
      onClick={() => onClick(project)}
      className="group cursor-pointer flex flex-col justify-between rounded-2xl bg-white border border-[#E7E5DE] overflow-hidden shadow-xs hover:shadow-xl hover:border-neutral-400 transition-all duration-300"
    >
      {/* Visual Mockup Container */}
      <div className="relative overflow-hidden">
        <MockupVisual
          type={project.mockupType}
          title={project.title}
          category={project.category}
          imageUrl={project.imageUrl}
          aspectRatio="aspect-[16/11]"
          className="transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />

        {/* Hover View Button Overlay */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
          <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-2xl transition-transform duration-300 transform scale-75 group-hover:scale-100">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
        <div className="space-y-2">
          {/* Metadata: Category & Timeline */}
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-[#2546FF] font-semibold uppercase tracking-wider">
              {project.category}
            </span>
            <span className="text-neutral-400">
              {project.year}
            </span>
          </div>

          {/* Project Title */}
          <h3 className="font-display font-bold text-xl sm:text-2xl text-[#0D0E11] group-hover:text-[#2546FF] transition-colors leading-tight">
            {project.title}
          </h3>

          {/* Short description */}
          <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed line-clamp-2">
            {project.shortDescription}
          </p>
        </div>

        {/* Footer: Tags & View Project link */}
        <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
          <div className="flex flex-wrap gap-1">
            {project.services.slice(0, 2).map((srv, idx) => (
              <span 
                key={idx} 
                className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-100 text-neutral-600"
              >
                {srv}
              </span>
            ))}
            {project.services.length > 2 && (
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-neutral-100 text-neutral-400">
                +{project.services.length - 2}
              </span>
            )}
          </div>

          <div className="inline-flex items-center gap-1 text-xs font-bold text-[#0D0E11] group-hover:text-[#2546FF] transition-colors">
            <span>View</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </article>
  );
}
