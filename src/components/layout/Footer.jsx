import React, { useState } from 'react';
import { studioInfo } from '../../data/companyData';
import { ArrowUp, ArrowUpRight, Sparkles, MessageSquare, Mail, X, ShieldCheck } from 'lucide-react';
import { InstagramIcon, LinkedinIcon, DribbbleIcon, BehanceIcon } from '../ui/SocialIcons';

export default function Footer({ onSelectCategory }) {
  const [activePolicy, setActivePolicy] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" }
  ];

  const serviceLinks = [
    { name: "Website Design & Dev", filter: "Web Design" },
    { name: "Brand Identity Systems", filter: "Branding" },
    { name: "Print Collateral & Pre-Press", filter: "Print" },
    { name: "Packaging & Dielines", filter: "Packaging" },
    { name: "Digital Creatives & Decks", filter: "Digital" }
  ];

  const handleNavClick = (e, href) => {
    if (!href.startsWith('#')) return;
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleServiceClick = (e, filter) => {
    e.preventDefault();
    if (onSelectCategory) {
      onSelectCategory(filter);
    }
    const el = document.querySelector('#portfolio');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    else window.location.href = `/portfolio?category=${encodeURIComponent(filter)}`;
  };

  return (
    <>
      <footer className="bg-[#F7F8FC] text-[#172033] pt-16 pb-10 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Top Tier: Brand, Navigation, Services, Connect */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-200">
            
            {/* Brand Info (Cols 1-5) */}
            <div className="lg:col-span-5 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FFFFFF] border border-white/15 text-[#2563EB] flex items-center justify-center font-display font-black text-lg">
                  R
                </div>
                <span className="font-display font-black text-xl text-[#172033] tracking-tight">
                  {studioInfo.name}
                </span>
              </div>

              <p className="font-display font-bold text-lg text-[#2563EB]">
                {studioInfo.tagline}
              </p>

              <p className="text-xs text-[#64748B] max-w-sm leading-relaxed">
                {studioInfo.positioning} From business websites and e-commerce platforms to custom packaging and press-ready print materials.
              </p>

              {/* Back to top button */}
              <div className="pt-2">
                <button
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#64748B] hover:text-[#2563EB] transition-colors cursor-pointer"
                >
                  <span>Back to Top</span>
                  <ArrowUp className="w-3.5 h-3.5 text-[#2563EB]" />
                </button>
              </div>
            </div>

            {/* Quick Navigation Links (Cols 6-7) */}
            <div className="lg:col-span-2 space-y-4">
              <div className="text-xs font-mono uppercase tracking-widest text-[#2563EB] font-bold">
                Navigation
              </div>
              <ul className="space-y-2.5 text-xs font-mono">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-[#64748B] hover:text-[#172033] transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links (Cols 8-10) */}
            <div className="lg:col-span-3 space-y-4">
              <div className="text-xs font-mono uppercase tracking-widest text-[#2563EB] font-bold">
                Capabilities
              </div>
              <ul className="space-y-2.5 text-xs font-mono">
                {serviceLinks.map((svc) => (
                  <li key={svc.name}>
                    <a
                      href="#portfolio"
                      onClick={(e) => handleServiceClick(e, svc.filter)}
                      className="text-[#64748B] hover:text-[#2563EB] transition-colors flex items-center justify-between group"
                    >
                      <span>{svc.name}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#2563EB]" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect / Socials (Cols 11-12) */}
            <div className="lg:col-span-2 space-y-4">
              <div className="text-xs font-mono uppercase tracking-widest text-[#2563EB] font-bold">
                Connect Direct
              </div>
              <div className="space-y-2">
                {studioInfo.socialLinks.map((social) => {
                  const Icon = social.name === "Instagram" ? InstagramIcon
                    : social.name === "LinkedIn" ? LinkedinIcon
                    : social.name === "Dribbble" ? DribbbleIcon
                    : BehanceIcon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between text-xs text-[#64748B] hover:text-[#172033] transition-colors py-1 group"
                    >
                      <span className="flex items-center gap-2">
                        <Icon className="w-3.5 h-3.5 text-[#64748B] group-hover:text-[#2563EB] transition-colors" />
                        {social.name}
                      </span>
                      <span className="text-[10px] font-mono text-[#64748B] group-hover:text-[#2563EB] transition-colors">↗</span>
                    </a>
                  );
                })}
              </div>

              <div className="pt-3 text-[11px] font-mono text-[#64748B] space-y-1">
                <div>
                  <a href={`mailto:${studioInfo.email}`} className="text-[#475569] hover:text-[#2563EB] transition-colors">
                    {studioInfo.email}
                  </a>
                </div>
                <div>
                  <a href={studioInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-[#475569] hover:text-[#2563EB] transition-colors">
                    WhatsApp: {studioInfo.phone}
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Tier: Copyright, Craft Disclosure & Policies */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-[#64748B]">
            <div>
              © {studioInfo.copyrightYear} {studioInfo.name}. All rights reserved.
            </div>

            <div className="flex items-center gap-6">
              <button
                onClick={() => setActivePolicy('privacy')}
                className="hover:text-[#172033] transition-colors cursor-pointer"
              >
                Privacy Notice
              </button>
              <button
                onClick={() => setActivePolicy('terms')}
                className="hover:text-[#172033] transition-colors cursor-pointer"
              >
                Studio Terms
              </button>
            </div>
          </div>

        </div>
      </footer>

      {/* Accessible Policy & Terms Modal */}
      {activePolicy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            onClick={() => setActivePolicy(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          />
          <div className="relative w-full max-w-lg rounded-2xl bg-white p-6 sm:p-8 border border-slate-200 shadow-2xl z-10 text-[#172033] space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#2563EB]" />
                <span className="font-display font-bold text-base text-[#172033]">
                  {activePolicy === 'privacy' ? 'Client Privacy Notice' : 'Studio Terms & Ownership'}
                </span>
              </div>
              <button
                onClick={() => setActivePolicy(null)}
                className="p-1 rounded-lg text-[#64748B] hover:text-[#172033]"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-xs sm:text-sm text-[#64748B] space-y-3 leading-relaxed">
              {activePolicy === 'privacy' ? (
                <>
                  <p>
                    At <strong className="text-[#172033]">Riddhi Print Studio</strong>, we treat all client briefs, design assets, and confidential commercial data with strict non-disclosure standards.
                  </p>
                  <p>
                    Information submitted through our project inquiry form is used exclusively for evaluating your project scope and preparing design proposals. We never sell or share client data with third parties.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <strong className="text-[#172033]">100% Asset Ownership:</strong> Upon full project invoice completion, clients receive complete ownership of all finalized vector artwork, print master PDFs, and responsive web code.
                  </p>
                  <p>
                    <strong className="text-[#172033]">Concept Showcases:</strong> Sample concepts displayed on this website are authored by Riddhi Print Studio to illustrate technical dielines, responsive frontend code, and typographic standards.
                  </p>
                </>
              )}
            </div>

            <div className="pt-2 text-right">
              <button
                onClick={() => setActivePolicy(null)}
                className="px-4 py-2 rounded-full bg-white/10 hover:bg-[#2563EB] hover:text-[#F8FAFC] text-xs font-mono uppercase font-bold text-[#172033] transition-colors cursor-pointer"
              >
                Acknowledge & Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
