import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles, Phone, Mail } from 'lucide-react';
import { studioInfo } from '../../data/companyData';

export default function Header({ onOpenQuote, onOpenClientPortal, onOpenAdminPortal, activeSection = "home" }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on esc key or resize
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'py-3 bg-[#FAF9F5]/90 backdrop-blur-md shadow-sm border-b border-[#E7E5DE]' 
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-2.5 group"
              aria-label="Riddhi Creative Studio - Home"
            >
              <div className="w-9 h-9 rounded-xl bg-[#0D0E11] text-white flex items-center justify-center font-display font-black text-base shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:bg-[#2546FF]">
                R
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-base sm:text-lg tracking-tight text-[#0D0E11] group-hover:text-[#2546FF] transition-colors">
                  Riddhi Creative Studio
                </span>
                <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-500 -mt-1 hidden sm:block">
                  Print & Digital Agency
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 bg-white/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#E7E5DE] shadow-sm">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3.5 py-1.5 text-xs font-medium tracking-wide text-neutral-700 hover:text-[#0D0E11] hover:bg-neutral-100 rounded-full transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Side: CTA Button & Mobile Hamburger */}
            <div className="flex items-center gap-3">
              <button
                onClick={onOpenClientPortal}
                className="hidden lg:inline-flex px-3 py-2 text-xs font-semibold text-neutral-700 hover:text-[#2546FF]"
              >
                My Portal
              </button>
              <button
                onClick={onOpenAdminPortal}
                className="hidden xl:inline-flex px-2 py-2 text-[10px] font-mono text-neutral-400 hover:text-neutral-900"
                title="Studio admin"
              >
                Admin
              </button>
              <button
                onClick={onOpenQuote}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#0D0E11] text-white hover:bg-[#2546FF] shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
                className="md:hidden p-2 rounded-xl bg-white border border-[#E7E5DE] text-neutral-800 hover:text-[#2546FF] transition-colors"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div 
        className={`fixed inset-0 z-40 md:hidden transition-all duration-400 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          onClick={() => setMobileMenuOpen(false)}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        />

        {/* Drawer Panel */}
        <div 
          className={`absolute top-0 right-0 bottom-0 w-[85%] max-w-sm bg-[#FAF9F5] p-6 shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-out border-l border-[#E7E5DE] ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-[#E7E5DE]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#0D0E11] text-white flex items-center justify-center font-display font-bold text-sm">
                  R
                </div>
                <span className="font-display font-bold text-sm">Riddhi Creative Studio</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg text-neutral-500 hover:text-black"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <div className="py-6 space-y-2">
              {navLinks.map((link, idx) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-display font-semibold text-neutral-900 hover:bg-neutral-100 hover:text-[#2546FF] transition-colors"
                >
                  <span>{link.name}</span>
                  <span className="text-xs font-mono text-neutral-400">0{idx + 1}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Drawer Footer Actions */}
          <div className="space-y-4 pt-4 border-t border-[#E7E5DE]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-3 px-4 rounded-full bg-[#2546FF] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="text-xs text-neutral-500 space-y-1 font-mono">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-neutral-400" />
                <span>{studioInfo.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-neutral-400" />
                <span>{studioInfo.phone}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
