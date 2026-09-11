import React from 'react';
import { studioInfo } from '../../data/companyData';
import { ArrowUp, ArrowUpRight, Sparkles } from 'lucide-react';
import { InstagramIcon, LinkedinIcon, DribbbleIcon, BehanceIcon } from '../ui/SocialIcons';

export default function Footer({ onSelectCategory }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" }
  ];

  const serviceLinks = [
    { name: "Print Design", filter: "Print" },
    { name: "Graphic Design", filter: "Graphic Design" },
    { name: "Branding", filter: "Branding" },
    { name: "Packaging", filter: "Packaging" },
    { name: "Web Design", filter: "Web Design" },
    { name: "Development", filter: "Web Design" }
  ];

  const handleNavClick = (e, href) => {
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
  };

  return (
    <footer className="bg-[#0D0E11] text-white pt-20 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Tier: Brand, Navigation, Services, Social */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-neutral-800">
          
          {/* Brand Info (Cols 1-5) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-white text-black flex items-center justify-center font-display font-black text-base shadow-sm">
                R
              </div>
              <span className="font-display font-extrabold text-xl text-white tracking-tight">
                {studioInfo.name}
              </span>
            </div>

            <p className="font-display font-medium text-lg text-neutral-300 max-w-sm">
              {studioInfo.tagline}
            </p>

            <p className="text-xs text-neutral-400 max-w-sm leading-relaxed">
              We help businesses with everything from professional print design and branding to digital graphics and modern website design.
            </p>

            {/* Back to top button */}
            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white transition-colors"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Quick Navigation Links (Cols 6-7) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold">
              Explore
            </div>
            <ul className="space-y-2.5 text-xs">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links (Cols 8-10) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold">
              Design Services
            </div>
            <ul className="space-y-2.5 text-xs">
              {serviceLinks.map((svc) => (
                <li key={svc.name}>
                  <a
                    href="#portfolio"
                    onClick={(e) => handleServiceClick(e, svc.filter)}
                    className="text-neutral-400 hover:text-[#2546FF] transition-colors flex items-center justify-between group"
                  >
                    <span>{svc.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect / Socials (Cols 11-12) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold">
              Connect
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
                    className="flex items-center justify-between text-xs text-neutral-400 hover:text-white transition-colors py-1 group"
                  >
                    <span className="flex items-center gap-2">
                      <Icon className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#2546FF] transition-colors" />
                      {social.name}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-600 group-hover:text-[#2546FF] transition-colors">↗</span>
                  </a>
                );
              })}
            </div>

            <div className="pt-3 text-[11px] font-mono text-neutral-500">
              Direct: <a href={`mailto:${studioInfo.email}`} className="text-neutral-300 hover:underline">{studioInfo.email}</a>
            </div>
          </div>

        </div>

        {/* Bottom Tier: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>
            © {studioInfo.copyrightYear} {studioInfo.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#privacy" onClick={(e) => e.preventDefault()} className="hover:text-neutral-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" onClick={(e) => e.preventDefault()} className="hover:text-neutral-300 transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
