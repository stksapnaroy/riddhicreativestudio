import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Phone, Mail } from 'lucide-react';
import { studioInfo } from '../../data/companyData';

export default function Header({ onOpenQuote, onOpenClientPortal, onOpenAdminPortal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" }
  ];

  const handleNavClick = (e, href) => {
    setMobileMenuOpen(false);
    if (!href.startsWith('#')) return;
    e.preventDefault();
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
            ? 'py-3.5 bg-white/92 backdrop-blur-md border-b border-slate-200/80 shadow-xs' 
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <a 
              href="/"
              className="flex items-center gap-3 group cursor-pointer"
              aria-label="Riddhi Print Studio - Home"
            >
              <div className="w-10 h-10 rounded-xl bg-[#2563EB] text-white flex items-center justify-center font-display font-black text-lg shadow-sm shadow-blue-500/25 transition-transform duration-300 group-hover:scale-105 group-hover:bg-[#1D4ED8]">
                R
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-base sm:text-lg tracking-tight text-[#172033] group-hover:text-[#2563EB] transition-colors">
                  Riddhi Print Studio
                </span>
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#64748B] -mt-0.5 hidden sm:block">
                  Design • Development • Print
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-white/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200 shadow-2xs">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3.5 py-1.5 text-xs font-medium tracking-wide text-[#64748B] hover:text-[#2563EB] hover:bg-[#EFF6FF] rounded-full transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Side: Availability, Client Portal & Primary CTA */}
            <div className="flex items-center gap-3">
              {onOpenClientPortal && (
                <button
                  onClick={onOpenClientPortal}
                  className="hidden md:inline-flex px-3 py-2 text-xs font-semibold text-[#64748B] hover:text-[#2563EB] transition-colors cursor-pointer"
                >
                  Client Portal
                </button>
              )}

              {/* Primary CTA Button */}
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#2563EB] text-white hover:bg-[#1D4ED8] shadow-sm hover:shadow-md hover:shadow-blue-500/20 transition-all duration-300 group cursor-pointer"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              {/* Mobile menu toggle button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
                className="lg:hidden p-2 rounded-xl bg-white border border-slate-200 text-[#172033] hover:text-[#2563EB] hover:border-[#2563EB] transition-colors cursor-pointer"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div 
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          onClick={() => setMobileMenuOpen(false)}
          className="absolute inset-0 bg-slate-900/50 backdrop-blur-xs transition-opacity"
        />

        {/* Drawer Panel */}
        <div 
          className={`absolute top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white p-6 shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-out border-l border-slate-200 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-slate-200">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#2563EB] text-white flex items-center justify-center font-display font-black text-sm">
                  R
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-bold text-sm text-[#172033]">Riddhi Print Studio</span>
                  <span className="text-[10px] font-mono text-[#64748B]">Design • Dev • Print</span>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg text-[#64748B] hover:text-[#172033]"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <div className="py-6 space-y-1">
              {navLinks.map((link, idx) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-display font-semibold text-[#172033] hover:bg-[#EFF6FF] hover:text-[#2563EB] transition-colors"
                >
                  <span>{link.name}</span>
                  <span className="text-[11px] font-mono text-[#64748B]">0{idx + 1}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Drawer Footer Actions */}
          <div className="space-y-4 pt-4 border-t border-slate-200">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-3.5 px-4 rounded-full bg-[#2563EB] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-blue-500/20 hover:bg-[#1D4ED8]"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {onOpenClientPortal && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenClientPortal();
                }}
                className="w-full py-2.5 px-4 rounded-full bg-slate-50 border border-slate-200 text-[#172033] font-semibold text-xs flex items-center justify-center gap-2 hover:bg-slate-100"
              >
                <span>Client Portal Access</span>
              </button>
            )}

            <div className="text-xs text-[#64748B] space-y-1.5 font-mono pt-2">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>{studioInfo.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>{studioInfo.phone}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
