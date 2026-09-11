import React, { useEffect } from 'react';
import { X, ArrowRight, Sparkles, CheckCircle2, Calendar, Clock, Layers, Award } from 'lucide-react';
import MockupVisual from '../ui/MockupVisual';

export default function ProjectModal({ project, isOpen, onClose, onStartProject }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const handleStartSimilar = () => {
    onClose();
    if (onStartProject) {
      onStartProject(project.category);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop with rich blur */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity animate-in fade-in duration-300"
      />

      {/* Modal Container */}
      <div className="relative min-h-screen px-4 py-8 sm:py-14 flex items-center justify-center pointer-events-none">
        
        <div className="relative w-full max-w-4xl bg-[#FAF9F5] rounded-2xl shadow-2xl border border-neutral-700/30 overflow-hidden pointer-events-auto">

          {/* Sticky Modal Top Bar */}
          <div className="sticky top-0 z-30 px-6 py-4 bg-[#FAF9F5]/95 backdrop-blur-md border-b border-[#E7E5DE] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-[#2546FF] text-white font-bold">
                {project.category}
              </span>
              <span className="text-xs font-mono text-neutral-500 hidden sm:inline">
                {project.timeline} Duration • {project.year}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-neutral-200 text-neutral-700 hover:text-black transition-colors"
              aria-label="Close case study modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-6 sm:p-10 space-y-10 max-h-[85vh] overflow-y-auto">

            {/* Title & Tagline */}
            <div className="space-y-3">
              <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#0D0E11] tracking-tight leading-tight">
                {project.title}
              </h2>
              <p className="text-base sm:text-xl text-neutral-600 font-normal leading-relaxed">
                {project.tagline}
              </p>
            </div>

            {/* Hero Mockup Visual */}
            <div className="rounded-xl overflow-hidden shadow-xl border border-neutral-300">
              <MockupVisual
                type={project.mockupType}
                title={project.title}
                category={project.category}
                imageUrl={project.imageUrl}
                aspectRatio="aspect-[16/10]"
              />
            </div>

            {/* Project Quick Meta Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-xl bg-[#F3F2EC] border border-[#E7E5DE]">
              <div>
                <div className="text-[10px] font-mono uppercase text-neutral-500">Client / Showcase</div>
                <div className="text-xs font-bold text-neutral-900 mt-0.5 truncate">{project.client}</div>
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase text-neutral-500">Discipline</div>
                <div className="text-xs font-bold text-[#2546FF] mt-0.5">{project.category}</div>
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase text-neutral-500">Timeline</div>
                <div className="text-xs font-bold text-neutral-900 mt-0.5">{project.timeline}</div>
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase text-neutral-500">Year Completed</div>
                <div className="text-xs font-bold text-neutral-900 mt-0.5">{project.year}</div>
              </div>
            </div>

            {/* Case Study Core Editorial Breakdown */}
            <div className="space-y-8 divide-y divide-[#E7E5DE]">

              {/* 1. Overview */}
              <div className="pt-6 space-y-2">
                <h3 className="font-display font-bold text-lg text-[#0D0E11] flex items-center gap-2">
                  <span className="font-mono text-xs text-[#2546FF]">01</span>
                  Project Overview
                </h3>
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                  {project.overview}
                </p>
              </div>

              {/* 2. The Challenge */}
              <div className="pt-6 space-y-2">
                <h3 className="font-display font-bold text-lg text-[#0D0E11] flex items-center gap-2">
                  <span className="font-mono text-xs text-[#2546FF]">02</span>
                  The Challenge
                </h3>
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              {/* 3. Creative Direction */}
              <div className="pt-6 space-y-2">
                <h3 className="font-display font-bold text-lg text-[#0D0E11] flex items-center gap-2">
                  <span className="font-mono text-xs text-[#2546FF]">03</span>
                  Creative Direction
                </h3>
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                  {project.creativeDirection}
                </p>
              </div>

              {/* 4. Design Solution */}
              <div className="pt-6 space-y-2">
                <h3 className="font-display font-bold text-lg text-[#0D0E11] flex items-center gap-2">
                  <span className="font-mono text-xs text-[#2546FF]">04</span>
                  Design Solution
                </h3>
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                  {project.designSolution}
                </p>
              </div>

              {/* 5. Final Result */}
              <div className="pt-6 space-y-2">
                <h3 className="font-display font-bold text-lg text-[#0D0E11] flex items-center gap-2">
                  <span className="font-mono text-xs text-[#2546FF]">05</span>
                  Final Result & Impact
                </h3>
                <div className="p-4 rounded-xl bg-white border border-[#E7E5DE] text-sm text-neutral-800 leading-relaxed font-medium">
                  {project.finalResult}
                </div>
              </div>

            </div>

            {/* Visual Gallery Deliverables */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="space-y-4 pt-4 border-t border-[#E7E5DE]">
                <h3 className="font-display font-bold text-lg text-[#0D0E11]">
                  Deliverable Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.gallery.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="p-4 rounded-xl bg-white border border-[#E7E5DE] space-y-2"
                    >
                      <div className="flex items-center gap-2 text-xs font-bold text-neutral-900 font-display">
                        <CheckCircle2 className="w-4 h-4 text-[#2546FF]" />
                        <span>{item.title}</span>
                      </div>
                      <p className="text-xs text-neutral-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Services Delivered Tag Pills */}
            <div className="space-y-3 pt-4 border-t border-[#E7E5DE]">
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-semibold">
                Services Provided in this Case Study
              </div>
              <div className="flex flex-wrap gap-2">
                {project.services.map((srv, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-neutral-100 text-neutral-800 border border-neutral-200"
                  >
                    {srv}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Call to Action Box */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0D0E11] text-white space-y-4 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center sm:text-left">
                <div className="font-display font-bold text-xl text-white">
                  Need something similar for your brand?
                </div>
                <div className="text-xs sm:text-sm text-neutral-400">
                  Let's bring this level of craft, typography, and execution to your business.
                </div>
              </div>

              <button
                onClick={handleStartSimilar}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#2546FF] hover:bg-[#1837E8] text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-xl shadow-blue-500/25 flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
