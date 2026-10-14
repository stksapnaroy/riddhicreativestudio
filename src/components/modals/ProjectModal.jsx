import React, { useEffect } from 'react';
import { X, ArrowRight, Sparkles, CheckCircle2, Calendar, Clock, Layers } from 'lucide-react';
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
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity animate-in fade-in duration-300"
      />

      {/* Modal Container */}
      <div className="relative min-h-screen px-4 py-8 sm:py-14 flex items-center justify-center pointer-events-none">
        
        <div className="relative w-full max-w-4xl bg-[#FFFFFF] rounded-3xl shadow-2xl border border-white/10 overflow-hidden pointer-events-auto text-[#172033]">

          {/* Sticky Modal Top Bar */}
          <div className="sticky top-0 z-30 px-6 py-4 bg-[#FFFFFF]/95 backdrop-blur-md border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-[#2563EB] text-[#F8FAFC] font-bold">
                {project.category}
              </span>
              <span className="text-xs font-mono text-[#64748B] hidden sm:inline">
                {project.timeline} Duration • {project.year}
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-[#64748B] border border-white/10 hidden md:inline">
                Studio Concept
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 text-[#64748B] hover:text-[#172033] transition-colors cursor-pointer"
              aria-label="Close case study modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-6 sm:p-10 space-y-10 max-h-[85vh] overflow-y-auto">

            {/* Title & Tagline */}
            <div className="space-y-3">
              <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#172033] tracking-tight leading-tight">
                {project.title}
              </h2>
              <p className="text-base sm:text-xl text-[#64748B] font-normal leading-relaxed">
                {project.tagline}
              </p>
            </div>

            {/* Hero Mockup Visual */}
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#F8FAFC]">
              <MockupVisual
                type={project.mockupType}
                title={project.title}
                category={project.category}
                imageUrl={project.imageUrl}
                aspectRatio="aspect-[16/10]"
              />
            </div>

            {/* Project Quick Meta Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-[#F8FAFC] border border-white/10 text-xs font-mono">
              <div>
                <div className="text-[10px] uppercase text-[#64748B]">Project Type</div>
                <div className="font-bold text-[#172033] mt-0.5 truncate">{project.client}</div>
              </div>
              <div>
                <div className="text-[10px] uppercase text-[#64748B]">Primary Discipline</div>
                <div className="font-bold text-[#2563EB] mt-0.5">{project.category}</div>
              </div>
              <div>
                <div className="text-[10px] uppercase text-[#64748B]">Timeline</div>
                <div className="font-bold text-[#172033] mt-0.5">{project.timeline}</div>
              </div>
              <div>
                <div className="text-[10px] uppercase text-[#64748B]">Year</div>
                <div className="font-bold text-[#172033] mt-0.5">{project.year}</div>
              </div>
            </div>

            {/* Project Deep Dive 2-Col Split */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#2563EB] font-bold">
                  The Creative Challenge
                </h4>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#2563EB] font-bold">
                  The Studio Solution
                </h4>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  {project.designSolution}
                </p>
              </div>
            </div>

            {/* Deliverables / Scope list */}
            <div className="pt-6 border-t border-white/10">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#64748B] font-bold mb-4">
                Services & Deliverables Provided
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.services.map((srv, idx) => (
                  <div 
                    key={idx}
                    className="p-3 rounded-xl bg-[#F8FAFC] border border-white/10 flex items-center gap-2.5 text-xs text-neutral-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                    <span>{srv}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Action Footer */}
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <div className="font-display font-bold text-base text-[#172033]">
                  Inspired by this design concept?
                </div>
                <div className="text-xs text-[#64748B]">
                  We can tailor a similar digital or print solution for your brand.
                </div>
              </div>

              <button
                onClick={handleStartSimilar}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-[#F8FAFC] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Start a Project Like This</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
