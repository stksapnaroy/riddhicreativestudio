import React from 'react';
import { 
  Layers, 
  ExternalLink, 
  Sparkles, 
  Coffee, 
  Droplet, 
  BookOpen, 
  Smartphone, 
  Laptop, 
  Award, 
  CheckCircle2,
  TrendingUp,
  Cpu
} from 'lucide-react';

/**
 * High-fidelity Studio Mockup Renderer
 * Supports real image URLs if provided, or renders custom editorial design studio mockups
 */
export default function MockupVisual({ 
  type = "coffee-branding", 
  title = "Project Visual", 
  category = "Branding", 
  imageUrl = null,
  className = "",
  aspectRatio = "aspect-[16/10]",
  isFeatured = false
}) {
  // If an external image URL is provided, render it directly with lazy loading
  if (imageUrl) {
    return (
      <div className={`relative overflow-hidden bg-neutral-900 ${aspectRatio} ${className}`}>
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
      </div>
    );
  }

  // Otherwise, render custom, ultra-sharp vector/CSS design studio mockups
  const renderStudioMockup = () => {
    switch (type) {
      case "coffee-branding":
        return (
          <div className="relative w-full h-full bg-[#161413] flex items-center justify-center p-6 sm:p-10 overflow-hidden select-none">
            {/* Ambient warm lighting */}
            <div className="absolute -top-16 -left-16 w-64 h-64 bg-amber-600/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-amber-800/20 rounded-full blur-3xl pointer-events-none" />
            
            {/* Subtle background grid pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

            {/* Visual composition: Coffee Pouch + Embossed Business Card */}
            <div className="relative z-10 w-full max-w-sm flex flex-col items-center justify-center gap-4">
              {/* Coffee Pouch */}
              <div className="w-48 sm:w-56 bg-gradient-to-b from-[#24211e] via-[#1c1917] to-[#141211] rounded-2xl p-4 sm:p-5 border border-amber-900/40 shadow-2xl relative transition-transform duration-500 group-hover:-translate-y-2">
                {/* Degassing valve badge */}
                <div className="w-3 h-3 rounded-full border border-amber-700/50 mx-auto mb-3 flex items-center justify-center">
                  <div className="w-1 h-1 bg-amber-500 rounded-full" />
                </div>
                
                {/* Foil Brand Stamp */}
                <div className="border border-amber-500/30 bg-amber-500/5 rounded-xl p-3 text-center backdrop-blur-sm">
                  <div className="flex items-center justify-center gap-1 text-amber-400 mb-1">
                    <Coffee className="w-3.5 h-3.5" />
                    <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-amber-300">Nova Coffee</span>
                  </div>
                  <div className="font-display font-bold text-base sm:text-lg text-white tracking-wide">YIRGACHEFFE</div>
                  <div className="text-[10px] text-amber-200/70 tracking-widest uppercase mt-0.5">Washed • Single Origin • Heirloom</div>
                </div>

                {/* Bag bottom specs */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[9px] text-neutral-400">
                  <span>NET WT. 250G</span>
                  <span className="text-amber-400 font-mono">LOT #4028</span>
                  <span>ALT. 2100M</span>
                </div>
              </div>

              {/* Overlapping Foil Business Card */}
              <div className="w-52 sm:w-60 -mt-8 -mr-12 bg-gradient-to-br from-[#2c2724] to-[#1e1b18] border border-amber-500/30 rounded-lg p-3.5 shadow-2xl shadow-black/80 rotate-3 transition-transform duration-500 group-hover:rotate-1 group-hover:scale-105">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-[9px] tracking-widest text-amber-400 uppercase font-semibold">Nova Specialty Roasters</div>
                    <div className="text-[8px] text-neutral-400 mt-0.5">Pour-Over • Espresso • Subscriptions</div>
                  </div>
                  <div className="w-5 h-5 rounded border border-amber-400/40 flex items-center justify-center text-[10px] font-display font-bold text-amber-300">
                    N
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "skincare-packaging":
        return (
          <div className="relative w-full h-full bg-[#121915] flex items-center justify-center p-6 sm:p-10 overflow-hidden select-none">
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-emerald-700/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-teal-800/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex items-end justify-center gap-4 sm:gap-6">
              {/* Outer Box Mockup */}
              <div className="w-32 sm:w-40 h-52 sm:h-64 bg-gradient-to-b from-[#1c2721] to-[#141c18] border border-emerald-700/30 rounded-lg p-4 flex flex-col justify-between shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
                <div className="space-y-1">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center text-emerald-300">
                    <Droplet className="w-3 h-3" />
                  </div>
                  <div className="text-[10px] tracking-[0.2em] uppercase font-bold text-emerald-300 pt-2">Bloom Botanicals</div>
                  <div className="text-sm font-display font-semibold text-white">Nourish Oil</div>
                  <div className="text-[9px] text-emerald-200/60">Cold-Pressed Botanical Serum</div>
                </div>
                <div className="text-[8px] font-mono text-neutral-400 pt-2 border-t border-emerald-900/40 flex justify-between">
                  <span>1.7 FL. OZ.</span>
                  <span>50 ML e</span>
                </div>
              </div>

              {/* Frosted Dropper Bottle Mockup */}
              <div className="w-24 sm:w-28 h-44 sm:h-52 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-t-3xl rounded-b-xl p-3 flex flex-col items-center justify-between shadow-2xl transition-transform duration-500 group-hover:translate-y-1">
                {/* Bamboo Dropper Cap */}
                <div className="w-12 h-7 bg-gradient-to-b from-[#d5b895] to-[#a88a68] rounded-t-lg -mt-7 border border-[#8a6b4a]/40 shadow-md flex items-center justify-center">
                  <div className="w-4 h-2 bg-[#2c2016] rounded-full" />
                </div>
                {/* Bottle Label */}
                <div className="w-full bg-[#1b2520]/90 border border-emerald-500/30 rounded p-2 text-center my-auto">
                  <div className="text-[7px] tracking-widest text-emerald-300 font-bold uppercase">Bloom</div>
                  <div className="text-[9px] font-display text-white font-medium">Night Repair</div>
                  <div className="text-[6px] text-neutral-400 mt-0.5">Rosehip • Bakuchiol</div>
                </div>
                <div className="text-[7px] text-white/50 font-mono">30 ML</div>
              </div>
            </div>
          </div>
        );

      case "editorial-brochure":
        return (
          <div className="relative w-full h-full bg-[#141517] flex items-center justify-center p-6 sm:p-10 overflow-hidden select-none">
            <div className="absolute inset-0 bg-[radial-gradient(#38bdf80f_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
            
            {/* Open Monograph Spread */}
            <div className="relative z-10 w-full max-w-md bg-[#1e2025] rounded-lg border border-neutral-700/50 shadow-2xl shadow-black p-4 sm:p-6 transition-transform duration-500 group-hover:scale-[1.02]">
              {/* Center Binding Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-neutral-950/80 shadow-md" />
              
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {/* Left Page */}
                <div className="space-y-3">
                  <div className="flex items-center gap-1.5 text-sky-400">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span className="text-[9px] tracking-widest uppercase font-mono font-semibold">Urban Properties</span>
                  </div>
                  <div className="text-xs sm:text-base font-display font-bold text-white leading-tight">
                    THE HORIZON RESIDENCES
                  </div>
                  <div className="space-y-1">
                    <div className="h-1 w-full bg-neutral-700/60 rounded" />
                    <div className="h-1 w-4/5 bg-neutral-700/40 rounded" />
                    <div className="h-1 w-2/3 bg-neutral-700/30 rounded" />
                  </div>
                  <div className="text-[8px] font-mono text-neutral-400 mt-4">VOL. 03 / ARCHITECTURAL REVIEW</div>
                </div>

                {/* Right Page: Blueprint / Floorplan illustration */}
                <div className="space-y-2 border border-sky-500/20 bg-sky-950/20 rounded p-2.5">
                  <div className="flex justify-between text-[7px] text-sky-300 font-mono">
                    <span>PENTHOUSE A</span>
                    <span>3,840 SQ. FT.</span>
                  </div>
                  {/* Floorplan vector grid */}
                  <div className="h-20 sm:h-24 border border-dashed border-sky-500/30 rounded flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-2 border border-sky-400/20" />
                    <div className="absolute top-2 left-6 bottom-2 w-[1px] bg-sky-400/30" />
                    <div className="absolute left-2 right-2 top-8 h-[1px] bg-sky-400/30" />
                    <span className="text-[9px] font-mono text-sky-200/80 tracking-wider">LIVING • TERRACE • SUITE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "social-campaign":
        return (
          <div className="relative w-full h-full bg-[#180d0d] flex items-center justify-center p-6 sm:p-10 overflow-hidden select-none">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-red-600/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-orange-600/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex items-center justify-center gap-3 sm:gap-5 w-full max-w-sm">
              {/* Instagram Phone Mockup */}
              <div className="w-48 sm:w-56 bg-black border-2 border-neutral-800 rounded-[28px] p-2.5 shadow-2xl shadow-red-950/40 transition-transform duration-500 group-hover:-translate-y-2">
                {/* Phone Speaker & Camera notch */}
                <div className="w-16 h-3 bg-neutral-900 rounded-full mx-auto mb-2" />
                
                {/* Social Card Content */}
                <div className="bg-gradient-to-br from-red-600 via-rose-700 to-black rounded-2xl p-3.5 text-white relative overflow-hidden">
                  <div className="text-[8px] font-mono tracking-widest uppercase bg-white/20 px-2 py-0.5 rounded-full inline-block mb-2">
                    FITLIFE CAMPAIGN
                  </div>
                  <div className="font-display font-extrabold text-base sm:text-lg leading-tight uppercase">
                    BREAK EVERY<br />LIMIT TODAY
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="text-[9px] font-semibold tracking-wider">DROP 04 // 2025</div>
                    <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center text-[10px] font-bold">
                      →
                    </div>
                  </div>
                </div>

                {/* Social engagement simulation */}
                <div className="mt-2.5 px-1 flex items-center justify-between text-[8px] text-neutral-400">
                  <span className="text-red-400 font-semibold">❤️ 12.8k likes</span>
                  <span>💬 418 comments</span>
                </div>
              </div>

              {/* Floating Performance Metric Badge */}
              <div className="hidden sm:flex flex-col gap-2">
                <div className="bg-[#241313] border border-red-500/30 rounded-xl p-3 shadow-xl backdrop-blur-md">
                  <div className="flex items-center gap-1 text-red-400 text-[10px] font-semibold">
                    <TrendingUp className="w-3 h-3" />
                    <span>CTR BOOST</span>
                  </div>
                  <div className="text-xl font-display font-bold text-white">+420%</div>
                  <div className="text-[8px] text-neutral-400">Paid Ad Conversion</div>
                </div>
              </div>
            </div>
          </div>
        );

      case "web-mockup":
        return (
          <div className="relative w-full h-full bg-[#0d0f17] flex items-center justify-center p-4 sm:p-8 overflow-hidden select-none">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

            {/* Laptop / Browser Mockup Frame */}
            <div className="relative z-10 w-full max-w-lg bg-[#151824] rounded-xl border border-blue-500/30 shadow-2xl overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
              {/* Browser Header Bar */}
              <div className="bg-[#0f111a] px-3 py-2 border-b border-white/10 flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex-1 max-w-[200px] mx-auto bg-black/40 rounded px-2.5 py-0.5 text-[9px] font-mono text-neutral-400 text-center truncate">
                  creativestudio.design
                </div>
              </div>

              {/* Screen Body */}
              <div className="p-4 sm:p-6 bg-gradient-to-b from-[#151824] to-[#0d0f17] space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-blue-400">
                    <Laptop className="w-3.5 h-3.5" />
                    <span className="text-[9px] font-bold tracking-wider">CREATIVE STUDIO</span>
                  </div>
                  <div className="flex gap-2 text-[8px] text-neutral-400 font-medium">
                    <span>WORK</span>
                    <span>SERVICES</span>
                    <span>CONTACT</span>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="text-sm sm:text-lg font-display font-extrabold text-white leading-snug">
                    WE CRAFT DIGITAL EXPERIENCES THAT INSPIRE.
                  </div>
                  <div className="text-[9px] text-neutral-400 mt-1 max-w-xs">
                    Fluid interactions, modular design tokens, and sub-second performance.
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-2">
                  <div className="h-10 bg-blue-500/10 border border-blue-500/20 rounded p-1.5">
                    <div className="w-3 h-1 bg-blue-400 rounded mb-1" />
                    <div className="text-[7px] text-white font-mono">01 BRAND</div>
                  </div>
                  <div className="h-10 bg-white/5 border border-white/10 rounded p-1.5">
                    <div className="w-3 h-1 bg-neutral-400 rounded mb-1" />
                    <div className="text-[7px] text-neutral-300 font-mono">02 PRINT</div>
                  </div>
                  <div className="h-10 bg-white/5 border border-white/10 rounded p-1.5">
                    <div className="w-3 h-1 bg-neutral-400 rounded mb-1" />
                    <div className="text-[7px] text-neutral-300 font-mono">03 PIXELS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "print-stationery":
        return (
          <div className="relative w-full h-full bg-[#1b1511] flex items-center justify-center p-6 sm:p-10 overflow-hidden select-none">
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-amber-700/15 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 w-full max-w-sm flex items-center justify-center">
              {/* Stacked Business Cards with Foiled Edges */}
              <div className="relative w-64 sm:w-72 h-40 sm:h-44">
                {/* Back card (offset) */}
                <div className="absolute inset-0 bg-[#2b211a] rounded-xl border border-amber-800/40 shadow-xl rotate-6 translate-x-3 translate-y-3" />
                
                {/* Middle card (offset opposite) */}
                <div className="absolute inset-0 bg-[#241c16] rounded-xl border border-amber-700/50 shadow-xl -rotate-3 -translate-x-2 -translate-y-1" />

                {/* Front focal card */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#33261e] via-[#241b15] to-[#1a130f] rounded-xl border border-amber-500/40 shadow-2xl p-5 flex flex-col justify-between transition-transform duration-500 group-hover:scale-105">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-[9px] font-mono tracking-widest text-amber-400 uppercase font-semibold">Artisan Roastery</div>
                      <div className="text-[8px] text-neutral-400">Coffee Bar & Kitchen</div>
                    </div>
                    <div className="w-6 h-6 rounded-full border border-amber-400/40 flex items-center justify-center text-amber-300 font-display font-bold text-xs">
                      A
                    </div>
                  </div>

                  <div className="flex justify-between items-end border-t border-amber-900/40 pt-3">
                    <div className="space-y-0.5">
                      <div className="text-[10px] font-display font-semibold text-white">700gsm Cotton Stock</div>
                      <div className="text-[8px] text-amber-200/60">Burnt Amber Painted Edges • Foil Deboss</div>
                    </div>
                    <div className="text-[8px] font-mono text-neutral-400">EST. 2024</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "saas-web":
        return (
          <div className="relative w-full h-full bg-[#0c0d19] flex items-center justify-center p-4 sm:p-8 overflow-hidden select-none">
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 w-full max-w-md bg-[#131525] rounded-xl border border-indigo-500/30 shadow-2xl p-4 sm:p-5 space-y-3 transition-transform duration-500 group-hover:scale-[1.02]">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-indigo-400" />
                  <span className="text-xs font-display font-bold text-white">Lumina Telemetry</span>
                </div>
                <div className="flex items-center gap-1 text-[8px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                  <CheckCircle2 className="w-2.5 h-2.5" />
                  <span>ONLINE 99.99%</span>
                </div>
              </div>

              {/* Data Graph simulation */}
              <div className="h-24 bg-[#0c0d19] rounded-lg p-3 border border-indigo-500/20 flex flex-col justify-between relative overflow-hidden">
                <div className="flex justify-between text-[8px] font-mono text-neutral-400">
                  <span>REALTIME LATENCY</span>
                  <span className="text-indigo-400 font-bold">12.4ms avg</span>
                </div>
                {/* SVG Curve Line */}
                <svg className="w-full h-12 stroke-indigo-400 fill-none" viewBox="0 0 200 40">
                  <path d="M0,35 Q30,10 60,25 T120,15 T160,30 T200,5" strokeWidth="2" />
                  <linearGradient id="glow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0.0" />
                  </linearGradient>
                  <path d="M0,35 Q30,10 60,25 T120,15 T160,30 T200,5 L200,40 L0,40 Z" fill="url(#glow)" stroke="none" />
                </svg>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[9px]">
                <div className="bg-white/5 p-2 rounded border border-white/5">
                  <div className="text-neutral-400">Throughput</div>
                  <div className="text-sm font-display font-bold text-white">1.4M req/s</div>
                </div>
                <div className="bg-white/5 p-2 rounded border border-white/5">
                  <div className="text-neutral-400">Compute Load</div>
                  <div className="text-sm font-display font-bold text-indigo-300">28.2% Optimal</div>
                </div>
              </div>
            </div>
          </div>
        );

      case "matcha-packaging":
        return (
          <div className="relative w-full h-full bg-[#0e1711] flex items-center justify-center p-6 sm:p-10 overflow-hidden select-none">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex items-center justify-center gap-4 sm:gap-6">
              {/* Matcha Canister Mockup */}
              <div className="w-32 sm:w-36 h-48 sm:h-56 bg-gradient-to-b from-[#1e2721] via-[#141b16] to-[#0f1411] rounded-2xl border border-emerald-600/30 p-4 flex flex-col justify-between shadow-2xl relative transition-transform duration-500 group-hover:-translate-y-2">
                {/* Gold Lid rim */}
                <div className="w-full h-3 bg-gradient-to-r from-amber-600 via-amber-300 to-amber-600 rounded-full shadow-md -mt-2 opacity-90" />

                {/* Japanese Washi Sash Band */}
                <div className="bg-[#f2ece1] text-[#1c1815] -mx-4 py-3 px-4 shadow-md border-y border-amber-900/20 text-center">
                  <div className="text-[8px] font-mono tracking-[0.25em] uppercase font-bold text-emerald-900">
                    KŌHĪ MATCHA
                  </div>
                  <div className="font-display font-bold text-sm text-neutral-900">宇治 抹茶</div>
                  <div className="text-[7px] text-neutral-600">Uji Kyoto • Ceremonial First Harvest</div>
                </div>

                <div className="text-[8px] font-mono text-emerald-300/80 flex justify-between border-t border-emerald-800/30 pt-2">
                  <span>NET 30G</span>
                  <span>STONE GROUND</span>
                </div>
              </div>

              {/* Ritual Card */}
              <div className="w-28 sm:w-32 h-36 sm:h-40 bg-[#f7f4ed] rounded-lg p-3 text-neutral-900 shadow-xl border border-neutral-300 rotate-3 transition-transform duration-500 group-hover:rotate-1">
                <div className="text-[7px] font-mono tracking-widest text-emerald-800 uppercase font-semibold">The Ritual</div>
                <div className="text-xs font-display font-bold text-neutral-900 mt-1">Whisk to Cloud</div>
                <div className="space-y-1.5 mt-2">
                  <div className="h-1 w-full bg-neutral-300 rounded" />
                  <div className="h-1 w-5/6 bg-neutral-300 rounded" />
                  <div className="h-1 w-2/3 bg-neutral-300 rounded" />
                </div>
                <div className="text-[7px] text-neutral-500 font-mono mt-4">80°C • 15 SEC WHISK</div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="relative w-full h-full bg-neutral-900 flex items-center justify-center p-8 text-neutral-400">
            <Layers className="w-12 h-12 text-neutral-600 mb-2" />
            <span className="text-sm font-medium">{title}</span>
          </div>
        );
    }
  };

  return (
    <div className={`group relative w-full overflow-hidden rounded-xl border border-neutral-800/60 shadow-lg transition-all duration-500 hover:border-neutral-700 ${aspectRatio} ${className}`}>
      {renderStudioMockup()}
      
      {/* Subtle bottom gradient overlay for readability */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

      {/* Quick category pill on mockup */}
      <div className="absolute top-4 left-4 z-20">
        <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-black/60 text-white/90 backdrop-blur-md border border-white/10">
          {category}
        </span>
      </div>

      {isFeatured && (
        <div className="absolute top-4 right-4 z-20">
          <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-[#2546FF] text-white font-semibold backdrop-blur-md flex items-center gap-1 shadow-lg shadow-blue-500/20">
            <Sparkles className="w-3 h-3" />
            Featured Case Study
          </span>
        </div>
      )}
    </div>
  );
}
