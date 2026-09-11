import React, { useState, useEffect } from 'react';
import { Type, Check, ChevronUp, ChevronDown } from 'lucide-react';

const fontOptions = [
  { id: 'outfit', name: 'Outfit', style: 'Modern Grotesk (Default)', preview: 'Aa' },
  { id: 'space-grotesk', name: 'Space Grotesk', style: 'Editorial Studio', preview: 'Aa' },
  { id: 'playfair', name: 'Playfair Display', style: 'Luxury Serif', preview: 'Aa' },
  { id: 'jakarta', name: 'Plus Jakarta', style: 'Clean Neo-Grotesque', preview: 'Aa' },
];

export default function FontSwitcher() {
  const [currentFont, setCurrentFont] = useState('outfit');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('riddhi_heading_font') || 'outfit';
    setCurrentFont(saved);
    document.documentElement.setAttribute('data-heading-font', saved);
  }, []);

  const handleSelectFont = (fontId) => {
    setCurrentFont(fontId);
    document.documentElement.setAttribute('data-heading-font', fontId);
    localStorage.setItem('riddhi_heading_font', fontId);
  };

  const activeOption = fontOptions.find(f => f.id === currentFont) || fontOptions[0];

  return (
    <div className="fixed bottom-5 right-5 z-40 select-none">
      {isOpen ? (
        <div className="bg-[#0D0E11] text-white rounded-2xl p-4 shadow-2xl border border-neutral-700/80 w-72 backdrop-blur-md animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
            <div className="flex items-center gap-2">
              <Type className="w-4 h-4 text-[#2546FF]" />
              <span className="text-xs font-mono font-bold tracking-wider uppercase">Heading Font Style</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-neutral-400 hover:text-white p-1 rounded-md text-xs font-mono"
              title="Minimize"
            >
              ✕
            </button>
          </div>

          <div className="mt-3 space-y-1.5">
            {fontOptions.map((f) => {
              const isSelected = currentFont === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => handleSelectFont(f.id)}
                  className={`w-full text-left p-2.5 rounded-xl text-xs flex items-center justify-between transition-all ${
                    isSelected
                      ? 'bg-[#2546FF] text-white font-bold shadow-md'
                      : 'hover:bg-neutral-800/80 text-neutral-300'
                  }`}
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{f.name}</span>
                      {f.id === 'outfit' && (
                        <span className="text-[9px] px-1.5 py-0.2 rounded bg-white/20 uppercase font-mono">
                          Default
                        </span>
                      )}
                    </div>
                    <div className={`text-[10px] ${isSelected ? 'text-blue-100' : 'text-neutral-500'}`}>
                      {f.style}
                    </div>
                  </div>

                  <span className="text-base font-bold font-display opacity-80 pl-2">
                    {f.preview}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-3 pt-2 border-t border-neutral-800/80 text-[10px] text-neutral-400 font-mono text-center">
            Changes apply instantly to all headings
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#0D0E11]/90 text-white hover:bg-[#0D0E11] backdrop-blur-md border border-neutral-700/80 shadow-xl hover:shadow-2xl transition-all duration-200 text-xs font-mono hover:scale-105"
          title="Change heading font style"
        >
          <Type className="w-3.5 h-3.5 text-[#2546FF]" />
          <span className="hidden sm:inline text-neutral-300">Heading Font:</span>
          <span className="font-bold text-white">{activeOption.name}</span>
          <ChevronUp className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white" />
        </button>
      )}
    </div>
  );
}
