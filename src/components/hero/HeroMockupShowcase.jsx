import React from 'react';
import { 
  Laptop, 
  Smartphone, 
  Sparkles, 
  Coffee, 
  Droplets, 
  Layers, 
  ArrowUpRight,
  TrendingUp,
  Award
} from 'lucide-react';

export default function HeroMockupShowcase({ onSelectProject }) {
  return (
    <div className="relative w-full max-w-5xl mx-auto mt-6 select-none perspective-1000">
      {/* Dynamic Background Ambient Studio Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[80%] bg-gradient-to-tr from-[#2546FF]/15 via-purple-600/10 to-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Studio Composition Frame */}
      <div className="relative z-10 w-full min-h-[460px] sm:min-h-[520px] lg:min-h-[560px] flex items-center justify-center">

        {/* 1. Centerpiece: Sleek Laptop Web Design Mockup */}
        <div 
          onClick={() => onSelectProject && onSelectProject('creative-studio-web')}
          className="relative z-20 w-[92%] sm:w-[80%] lg:w-[68%] bg-[#0e1017] rounded-2xl border border-neutral-700/60 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.4)] overflow-hidden cursor-pointer transition-all duration-500 hover:border-[#2546FF]/60 hover:shadow-2xl hover:shadow-[#2546FF]/20"
        >
          {/* Laptop Top Browser Bar */}
          <div className="bg-[#151722] px-4 py-2.5 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <div className="bg-black/40 rounded-full px-3 py-0.5 text-[10px] font-mono text-neutral-400 border border-white/5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              riddhicreativestudio.com
            </div>
            <div className="text-[10px] font-mono text-[#2546FF] font-semibold flex items-center gap-1">
              <span>EXPLORE</span>
              <ArrowUpRight className="w-3 h-3" />
            </div>
          </div>

          {/* Screen Canvas: Studio Digital Showcase */}
          <div className="p-5 sm:p-7 bg-gradient-to-br from-[#12141e] via-[#0b0c12] to-[#08090d] text-white">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#2546FF] flex items-center justify-center font-display font-black text-xs text-white">
                  R
                </div>
                <div>
                  <div className="font-display font-bold text-xs tracking-wider">RIDDHI CREATIVE STUDIO</div>
                  <div className="text-[9px] text-neutral-400">Print & Digital Design Practice</div>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-3 text-[10px] text-neutral-400 font-mono">
                <span className="text-white font-medium">BRANDING</span>
                <span>PRINT</span>
                <span>PACKAGING</span>
                <span>WEB</span>
              </div>
            </div>

            <div className="py-2">
              <div className="text-xs font-mono text-[#2546FF] tracking-widest uppercase mb-1">
                Visual Architecture • 2026
              </div>
              <div className="text-xl sm:text-3xl font-display font-extrabold tracking-tight leading-tight">
                From Print to Pixels,<br />We Design It All.
              </div>
            </div>

            {/* Micro grid of project thumbnails inside the laptop */}
            <div className="grid grid-cols-3 gap-2.5 mt-4 pt-4 border-t border-white/10">
              <div className="bg-neutral-800/40 rounded-lg p-2.5 border border-white/5">
                <div className="text-[9px] text-neutral-400 font-mono">01 IDENTITY</div>
                <div className="text-xs font-semibold text-white truncate">Nova Coffee</div>
              </div>
              <div className="bg-neutral-800/40 rounded-lg p-2.5 border border-white/5">
                <div className="text-[9px] text-neutral-400 font-mono">02 PACKAGING</div>
                <div className="text-xs font-semibold text-white truncate">Bloom Skincare</div>
              </div>
              <div className="bg-neutral-800/40 rounded-lg p-2.5 border border-white/5">
                <div className="text-[9px] text-neutral-400 font-mono">03 EDITORIAL</div>
                <div className="text-xs font-semibold text-white truncate">Urban Properties</div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Floating Left: Tactile Embossed Business Cards (Print & Branding) */}
        <div 
          onClick={() => onSelectProject && onSelectProject('artisan-roastery-print')}
          className="absolute -left-3 sm:left-2 lg:left-6 -top-4 sm:top-6 z-30 w-44 sm:w-56 bg-gradient-to-br from-[#2a231d] to-[#1a1512] rounded-xl p-4 border border-amber-500/30 shadow-2xl rotate-[-6deg] animate-float-slow cursor-pointer transition-all duration-300 hover:scale-105 hover:rotate-[-2deg] hover:border-amber-400"
        >
          <div className="flex justify-between items-start mb-3">
            <div className="w-6 h-6 rounded border border-amber-400/40 flex items-center justify-center font-display font-bold text-amber-300 text-xs">
              R
            </div>
            <span className="px-1.5 py-0.5 rounded text-[8px] font-mono uppercase tracking-wider bg-amber-500/10 text-amber-300 border border-amber-500/20">
              Print
            </span>
          </div>
          <div className="font-display font-bold text-white text-xs sm:text-sm">700gsm Cotton Stock</div>
          <div className="text-[9px] text-amber-200/70 mt-0.5">Burnt Foil Edge & Deboss</div>
          <div className="mt-3 pt-2 border-t border-white/10 flex justify-between text-[8px] font-mono text-neutral-400">
            <span>PRINT READY</span>
            <span className="text-amber-400">SPOT UV</span>
          </div>
        </div>

        {/* 3. Floating Left Bottom: Packaging Mockup Pouch (Packaging Design) */}
        <div 
          onClick={() => onSelectProject && onSelectProject('nova-coffee')}
          className="absolute -left-2 sm:left-4 -bottom-6 sm:bottom-2 z-30 w-40 sm:w-52 bg-[#1a1715] rounded-xl p-3.5 border border-amber-600/30 shadow-2xl rotate-[5deg] animate-float-delayed cursor-pointer transition-all duration-300 hover:scale-105 hover:rotate-[2deg]"
        >
          <div className="w-2.5 h-2.5 rounded-full border border-amber-500/50 mx-auto mb-2 flex items-center justify-center">
            <div className="w-1 h-1 bg-amber-400 rounded-full" />
          </div>
          <div className="bg-amber-950/40 border border-amber-500/20 rounded-lg p-2 text-center">
            <div className="text-[8px] font-mono tracking-widest text-amber-400 uppercase font-bold">Nova Coffee</div>
            <div className="text-[10px] font-display font-bold text-white">Yirgacheffe Pouch</div>
          </div>
          <div className="mt-2 flex justify-between items-center text-[8px] font-mono text-neutral-400">
            <span>PACKAGING</span>
            <span className="text-amber-300">MATTE 250G</span>
          </div>
        </div>

        {/* 4. Floating Right Top: Mobile Website & UI/UX Mockup */}
        <div 
          onClick={() => onSelectProject && onSelectProject('fitlife-campaign')}
          className="absolute -right-2 sm:right-4 -top-6 sm:top-2 z-30 w-36 sm:w-48 bg-[#0d0e14] rounded-2xl p-2.5 border-2 border-neutral-700/80 shadow-2xl rotate-[8deg] animate-float-delayed cursor-pointer transition-all duration-300 hover:scale-105 hover:rotate-[3deg]"
        >
          {/* Phone Dynamic Island Notch */}
          <div className="w-12 h-2.5 bg-neutral-900 rounded-full mx-auto mb-2" />
          
          <div className="bg-gradient-to-b from-rose-600 to-red-950 rounded-xl p-2.5 text-white">
            <div className="text-[7px] font-mono uppercase tracking-widest opacity-80">Social & Mobile</div>
            <div className="font-display font-extrabold text-[10px] sm:text-xs leading-tight mt-1">
              FITLIFE CAMPAIGN
            </div>
            <div className="mt-2 flex items-center justify-between text-[8px]">
              <span className="text-white/90">IG Launch</span>
              <span className="bg-white/20 px-1 py-0.5 rounded text-[7px] font-bold">AD DROP</span>
            </div>
          </div>
          <div className="mt-2 px-1 flex items-center justify-between text-[8px] text-neutral-400 font-mono">
            <span className="text-red-400 font-semibold">❤️ +420%</span>
            <span>ENGAGE</span>
          </div>
        </div>

        {/* 5. Floating Right Bottom: Editorial Brochure / Poster Card */}
        <div 
          onClick={() => onSelectProject && onSelectProject('urban-properties')}
          className="absolute -right-3 sm:right-6 -bottom-8 sm:bottom-1 z-30 w-44 sm:w-56 bg-[#16181f] rounded-xl p-3.5 border border-sky-500/30 shadow-2xl rotate-[-5deg] animate-float-slow cursor-pointer transition-all duration-300 hover:scale-105 hover:rotate-[-1deg]"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[8px] font-mono uppercase tracking-widest text-sky-400 font-bold">
              Brochure & Poster
            </span>
            <span className="w-2 h-2 rounded-full bg-sky-400/80" />
          </div>
          <div className="font-display font-bold text-white text-xs sm:text-sm">Horizon Residences</div>
          <div className="text-[9px] text-neutral-400 mt-0.5">Editorial Architecture Monograph</div>
          <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[8px] font-mono text-neutral-400">
            <span>200 GSM ART PAPER</span>
            <span className="text-sky-300">FOIL STAMP</span>
          </div>
        </div>

      </div>

      {/* Floating studio visual indicator tag */}
      <div className="flex items-center justify-center gap-2 mt-4 text-[11px] font-mono text-neutral-500">
        <span className="w-2 h-2 rounded-full bg-[#2546FF]" />
        <span>Hover or tap mockups to view studio case studies</span>
      </div>
    </div>
  );
}
