import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Printer, 
  Package, 
  Layout, 
  Smartphone, 
  Coffee, 
  BookOpen, 
  ExternalLink,
  ChevronRight,
  Maximize2
} from 'lucide-react';

const heroDisciplines = [
  {
    id: "packaging",
    number: "01",
    tabLabel: "Packaging & 3D",
    badge: "Tactile Physical Craft",
    projectId: "nova-coffee",
    title: "Nova Coffee & Bloom Skincare",
    subtitle: "Custom pouch packaging, botanical jars, and foil-embossed cotton stationery.",
    specs: ["CMYK Offset", "Spot UV & Gold Foil", "FSC Certified Stock", "Factory Dielines"],
    color: "#D97706",
    accentGlow: "rgba(217, 119, 6, 0.18)",
  },
  {
    id: "print",
    number: "02",
    tabLabel: "Editorial & Print",
    badge: "Print Masterworks",
    projectId: "urban-properties",
    title: "Urban Monograph & Editorial",
    subtitle: "Hardcover Swiss-bound property book, architectural brochures, and floorplans.",
    specs: ["200gsm Art Paper", "Thread-Sewn Binding", "Copper Foil Deboss", "1:1 Scale Blueprints"],
    color: "#0284C7",
    accentGlow: "rgba(2, 132, 199, 0.18)",
  },
  {
    id: "digital",
    number: "03",
    tabLabel: "Web & UI/UX",
    badge: "Modern Digital Experiences",
    projectId: "creative-studio-web",
    title: "Creative Studio & SaaS Web",
    subtitle: "Fluid interactive web design, responsive component systems, and sub-second load times.",
    specs: ["React & Tailwind", "60 FPS Animations", "Mobile Ergonomics", "Lighthouse 99/100"],
    color: "#2546FF",
    accentGlow: "rgba(37, 70, 255, 0.22)",
  },
  {
    id: "social",
    number: "04",
    tabLabel: "Social & Campaigns",
    badge: "Performance Creatives",
    projectId: "fitlife-campaign",
    title: "FitLife High-Voltage Campaign",
    subtitle: "High-conversion Instagram carousels, paid ad creative suites, and kinetic typography.",
    specs: ["Modular Figma Kit", "9:16 Vertical Story Ads", "+420% CTR Boost", "Vector Stickers"],
    color: "#DC2626",
    accentGlow: "rgba(220, 38, 38, 0.18)",
  }
];

export default function Hero({ onOpenQuote, onSelectProject, onShareRequirement }) {
  const [activeTab, setActiveTab] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto cycle tabs every 6.5s unless paused by interaction
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % heroDisciplines.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const current = heroDisciplines[activeTab];

  const scrollToSection = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="relative pt-24 sm:pt-32 pb-20 sm:pb-28 bg-[#FAF9F5] border-b border-[#E7E5DE] overflow-hidden select-none"
    >
      {/* Background Architectural Studio Grid & Ambience */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-[140px] pointer-events-none transition-colors duration-1000"
        style={{ backgroundColor: current.accentGlow }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* 1. Top Agency Ticker & Coordinates */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#E7E5DE] text-[11px] font-mono text-neutral-600">
          <div className="flex items-center gap-3">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2546FF] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2546FF]" />
            </span>
            <span className="font-semibold text-neutral-900 uppercase tracking-wider">
              Riddhi Creative Studio
            </span>
            <span className="text-neutral-300 hidden sm:inline">•</span>
            <span className="hidden sm:inline text-neutral-500">
              India // Remote Worldwide
            </span>
          </div>

          <div className="flex items-center gap-4 text-neutral-500">
            <span className="hidden md:inline bg-white px-2.5 py-0.5 rounded-full border border-[#E7E5DE]">
              Q2/Q3 Bookings Open
            </span>
            <span className="text-neutral-800 font-semibold">
              From Print to Pixels
            </span>
          </div>
        </div>

        {/* 2. Main Hero Split Grid: Editorial Typography + Interactive 3D Studio Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Left Column: Bold Asymmetric Typography & Magnetic CTAs (Cols 1-5) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Studio Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E7E5DE] shadow-2xs">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#2546FF] font-bold">
                Multidisciplinary Design Agency
              </span>
            </div>

            {/* Giant Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-[#0D0E11] tracking-tight leading-[1.05]">
              From Print.<br />
              To Pixels.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2546FF] via-[#1A36E8] to-[#0D0E11]">
                We Design It All.
              </span>
            </h1>

            {/* Narrative text */}
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
              Riddhi Creative Studio creates thoughtful designs that help businesses look better, 
              communicate clearly and stand out — from tactile print & luxury packaging to digital experiences and modern websites.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={() => scrollToSection('#portfolio')}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#0D0E11] text-white hover:bg-[#2546FF] text-xs font-bold uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <span>View Our Work</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-neutral-900 border border-[#D9D7CE] hover:border-neutral-900 hover:bg-neutral-50 text-xs font-bold uppercase tracking-wider transition-all duration-200"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#2546FF]" />
                <span>Start a Project</span>
              </button>

              <button
                onClick={onShareRequirement}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/70 text-neutral-900 border border-[#D9D7CE] hover:border-[#2546FF] hover:text-[#2546FF] text-xs font-bold uppercase tracking-wider transition-all duration-200"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Share an Idea</span>
              </button>
            </div>

            {/* Discipline Quick Jump Links */}
            <div className="pt-4 border-t border-[#E7E5DE] space-y-2">
              <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 font-semibold">
                Explore Core Disciplines:
              </div>
              <div className="flex flex-wrap gap-2">
                {heroDisciplines.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(idx);
                      setIsAutoPlaying(false);
                    }}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                      activeTab === idx
                        ? 'bg-[#0D0E11] text-white font-semibold shadow-xs'
                        : 'bg-white border border-[#E7E5DE] text-neutral-600 hover:border-neutral-400 hover:text-black'
                    }`}
                  >
                    {item.tabLabel}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Interactive 3D Studio Stage (Cols 6-12) */}
          <div 
            className="lg:col-span-7"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* The Studio Canvas Box with Precision Crop Marks */}
            <div className="relative rounded-3xl bg-[#0D0E11] p-5 sm:p-8 border border-neutral-800 shadow-2xl text-white overflow-hidden transition-all duration-500">
              
              {/* Corner Print Register & Crop Marks */}
              <div className="absolute top-3 left-3 text-[10px] font-mono text-neutral-600 pointer-events-none">┌ 3.0mm</div>
              <div className="absolute top-3 right-3 text-[10px] font-mono text-neutral-600 pointer-events-none">3.0mm ┐</div>
              <div className="absolute bottom-3 left-3 text-[10px] font-mono text-neutral-600 pointer-events-none">└ CMYK</div>
              <div className="absolute bottom-3 right-3 text-[10px] font-mono text-neutral-600 pointer-events-none">300 DPI ┘</div>

              {/* Top Discipline Switcher Tabs on Canvas */}
              <div className="flex items-center justify-between gap-2 pb-5 border-b border-white/10 overflow-x-auto scrollbar-none">
                <div className="flex items-center gap-1.5">
                  {heroDisciplines.map((d, idx) => {
                    const isSelected = activeTab === idx;
                    return (
                      <button
                        key={d.id}
                        onClick={() => {
                          setActiveTab(idx);
                          setIsAutoPlaying(false);
                        }}
                        className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all flex items-center gap-1.5 ${
                          isSelected
                            ? 'bg-white text-black font-bold shadow-md'
                            : 'text-neutral-400 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        <span className="opacity-60">{d.number}</span>
                        <span>{d.tabLabel}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="hidden sm:flex items-center gap-1 text-[10px] font-mono text-neutral-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Interactive</span>
                </div>
              </div>

              {/* Dynamic Visual Stage Container */}
              <div className="py-6 min-h-[360px] sm:min-h-[400px] flex flex-col justify-between">
                
                {/* Visual Content Rendered Based on Active Discipline */}
                <div 
                  onClick={() => onSelectProject && onSelectProject(current.projectId)}
                  className="cursor-pointer group relative rounded-2xl bg-gradient-to-b from-white/5 to-white/0 p-4 sm:p-6 border border-white/10 hover:border-[#2546FF]/80 transition-all duration-500"
                >
                  
                  {/* Packaging & 3D Stage */}
                  {current.id === "packaging" && (
                    <div className="relative h-64 sm:h-72 flex items-center justify-center overflow-hidden">
                      {/* Ambient warm glow */}
                      <div className="absolute inset-0 bg-amber-500/10 rounded-xl blur-2xl pointer-events-none" />
                      
                      <div className="relative z-10 flex items-center justify-center gap-3 sm:gap-6 w-full">
                        {/* Matte Coffee Bag Mockup */}
                        <div className="w-36 sm:w-44 bg-gradient-to-b from-[#24211d] to-[#141210] rounded-2xl p-4 border border-amber-600/40 shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
                          <div className="w-3 h-3 rounded-full border border-amber-500/60 mx-auto mb-2 flex items-center justify-center">
                            <div className="w-1 h-1 bg-amber-400 rounded-full" />
                          </div>
                          <div className="border border-amber-500/30 bg-amber-500/5 rounded-xl p-2.5 text-center">
                            <div className="text-[8px] font-mono tracking-widest uppercase font-bold text-amber-300">Nova Coffee</div>
                            <div className="font-display font-bold text-xs sm:text-sm text-white mt-0.5">YIRGACHEFFE</div>
                            <div className="text-[7px] text-amber-200/70 font-mono mt-0.5">SINGLE ORIGIN • 250G</div>
                          </div>
                          <div className="mt-3 pt-2 border-t border-white/10 flex justify-between text-[8px] font-mono text-neutral-400">
                            <span>MATTE POUCH</span>
                            <span className="text-amber-400 font-bold">VALVE</span>
                          </div>
                        </div>

                        {/* Stamped Foil Business Cards */}
                        <div className="w-36 sm:w-48 -ml-4 bg-gradient-to-br from-[#2f2721] to-[#1c1713] rounded-xl p-3.5 border border-amber-500/40 shadow-2xl rotate-6 transition-transform duration-500 group-hover:rotate-2 group-hover:scale-105">
                          <div className="flex justify-between items-start">
                            <span className="text-[8px] font-mono uppercase text-amber-400 font-bold">Duplex Cotton</span>
                            <span className="w-4 h-4 rounded border border-amber-400/40 flex items-center justify-center text-[9px] text-amber-300 font-bold">R</span>
                          </div>
                          <div className="font-display font-bold text-xs text-white mt-3">700gsm Letterpress</div>
                          <div className="text-[8px] text-amber-200/60 font-mono">Burnt Amber Edges</div>
                        </div>

                        {/* Botanical Dropper Bottle */}
                        <div className="hidden sm:flex w-24 h-44 bg-white/10 backdrop-blur-md rounded-t-2xl rounded-b-lg border border-white/20 p-2 flex-col items-center justify-between shadow-xl -ml-2 rotate-[-4deg]">
                          <div className="w-8 h-4 bg-[#c8a986] rounded-t -mt-4 border border-[#8a6e4d]" />
                          <div className="text-[7px] font-mono text-center text-emerald-300">Bloom Botanic</div>
                          <div className="text-[6px] text-neutral-400 font-mono">50 ML</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Editorial & Print Stage */}
                  {current.id === "print" && (
                    <div className="relative h-64 sm:h-72 flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 bg-sky-500/10 rounded-xl blur-2xl pointer-events-none" />
                      
                      {/* Open Monograph Spread Mockup */}
                      <div className="relative z-10 w-full max-w-md bg-[#191c24] rounded-xl border border-sky-500/30 p-5 shadow-2xl shadow-black transition-transform duration-500 group-hover:scale-[1.02]">
                        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-black/60 shadow-sm" />
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <div className="text-[8px] font-mono text-sky-400 uppercase tracking-wider font-bold">Monograph 03</div>
                            <div className="font-display font-bold text-sm text-white leading-tight">THE HORIZON RESIDENCES</div>
                            <div className="space-y-1">
                              <div className="h-1 w-full bg-neutral-700/60 rounded" />
                              <div className="h-1 w-4/5 bg-neutral-700/40 rounded" />
                            </div>
                            <div className="text-[7px] font-mono text-neutral-400 mt-2">SWISS BINDING • COPPER FOIL</div>
                          </div>
                          <div className="border border-sky-500/20 bg-sky-950/30 rounded p-2 text-center space-y-1">
                            <div className="text-[7px] font-mono text-sky-300">FLOORPLAN ARCHIVE</div>
                            <div className="h-16 border border-dashed border-sky-400/30 rounded flex items-center justify-center text-[8px] font-mono text-sky-200/80">
                              3,840 SQ. FT. BLUEPRINT
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Web & UI/UX Stage */}
                  {current.id === "digital" && (
                    <div className="relative h-64 sm:h-72 flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 bg-[#2546FF]/15 rounded-xl blur-2xl pointer-events-none" />

                      {/* Laptop Browser Mockup Frame */}
                      <div className="relative z-10 w-full max-w-md bg-[#12141d] rounded-xl border border-[#2546FF]/40 shadow-2xl overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
                        <div className="bg-[#0b0d13] px-3 py-1.5 border-b border-white/10 flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 rounded-full bg-rose-500/80" />
                            <div className="w-2 h-2 rounded-full bg-amber-500/80" />
                            <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
                          </div>
                          <span className="text-[8px] font-mono text-neutral-400">riddhicreativestudio.com</span>
                          <span className="text-[8px] font-mono text-[#2546FF] font-bold">60 FPS</span>
                        </div>
                        <div className="p-4 space-y-3 bg-gradient-to-b from-[#151826] to-[#0c0e17]">
                          <div className="font-display font-black text-sm sm:text-base text-white">
                            CREATIVE STUDIO ARCHITECTURE
                          </div>
                          <div className="grid grid-cols-3 gap-2">
                            <div className="bg-[#2546FF]/15 border border-[#2546FF]/30 p-2 rounded text-[7px] font-mono text-blue-200">
                              <div>UI DESIGN</div>
                              <div className="font-bold text-white text-[9px] mt-0.5">FIGMA 100%</div>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-2 rounded text-[7px] font-mono text-neutral-300">
                              <div>SPEED</div>
                              <div className="font-bold text-emerald-400 text-[9px] mt-0.5">0.4S LOAD</div>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-2 rounded text-[7px] font-mono text-neutral-300">
                              <div>CODE</div>
                              <div className="font-bold text-white text-[9px] mt-0.5">REACT 19</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Social & Campaigns Stage */}
                  {current.id === "social" && (
                    <div className="relative h-64 sm:h-72 flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 bg-red-600/15 rounded-xl blur-2xl pointer-events-none" />

                      <div className="relative z-10 flex items-center justify-center gap-4">
                        {/* Phone Screen Mockup */}
                        <div className="w-44 sm:w-52 bg-black border-2 border-neutral-700 rounded-3xl p-2.5 shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
                          <div className="w-12 h-2 bg-neutral-900 rounded-full mx-auto mb-2" />
                          <div className="bg-gradient-to-br from-red-600 via-rose-700 to-black rounded-2xl p-3 text-white">
                            <span className="text-[7px] font-mono uppercase bg-white/20 px-1.5 py-0.5 rounded">DROP 04</span>
                            <div className="font-display font-black text-xs sm:text-sm uppercase leading-tight mt-1">
                              BREAK EVERY LIMIT
                            </div>
                            <div className="text-[8px] mt-2 flex justify-between font-mono">
                              <span>CAMPAIGN</span>
                              <span>+420% CTR</span>
                            </div>
                          </div>
                        </div>

                        {/* Metric pill */}
                        <div className="bg-[#1f1111] border border-red-500/30 p-3 rounded-xl shadow-xl hidden sm:block">
                          <div className="text-[8px] font-mono text-red-400">ENGAGEMENT</div>
                          <div className="font-display font-black text-lg text-white">12.8k</div>
                          <div className="text-[7px] text-neutral-400">Direct Saves & Shares</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Overlay CTA affordance on hover */}
                  <div className="absolute inset-x-0 bottom-3 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <span className="px-4 py-1.5 rounded-full bg-white text-black font-display font-bold text-xs shadow-xl flex items-center gap-1.5">
                      <span>Explore {current.title}</span>
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>

                </div>

                {/* Bottom Stage Details & Specs Strip */}
                <div className="mt-4 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-0.5">
                    <div className="text-xs font-display font-bold text-white flex items-center gap-2">
                      <span>{current.title}</span>
                      <span className="text-[10px] font-mono text-neutral-400">• {current.badge}</span>
                    </div>
                    <p className="text-[11px] text-neutral-400 max-w-sm leading-normal">
                      {current.subtitle}
                    </p>
                  </div>

                  {/* Production specs badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {current.specs.map((spec, i) => (
                      <span
                        key={i}
                        className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-neutral-300"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Progress Line for auto-play */}
              <div className="mt-2 h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#2546FF] transition-all duration-300"
                  style={{ width: `${((activeTab + 1) / heroDisciplines.length) * 100}%` }}
                />
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
