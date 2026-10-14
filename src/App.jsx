import React, { useEffect, useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/hero/Hero';
import Services from './components/sections/Services';
import HomeServices from './components/sections/HomeServices';
import Portfolio from './components/sections/Portfolio';
import WhyUs from './components/sections/WhyUs';
import ProcessTimeline from './components/sections/ProcessTimeline';
import AboutStudio from './components/sections/AboutStudio';
import CraftStandards from './components/sections/CraftStandards';
import FAQSection from './components/sections/FAQSection';
import FullCTA from './components/sections/FullCTA';
import ContactSection from './components/sections/ContactSection';
import ProjectModal from './components/modals/ProjectModal';
import QuoteDrawer from './components/modals/QuoteDrawer';
import ClientPortalModal from './components/portals/ClientPortalModal';
import InvoiceModal from './components/portals/InvoiceModal';
import AdminPortalModal from './components/portals/AdminPortalModal';
import AuthModal from './components/auth/AuthModal';
import { getSessionProfile } from './services/portalApi';
import { supabase } from './lib/supabase';
import { portfolioData } from './data/portfolioData';

export default function App() {
  const [activeCategory, setActiveCategory] = useState(() => new URLSearchParams(window.location.search).get('category') || "All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState("");
  const [isClientPortalOpen, setIsClientPortalOpen] = useState(false);
  const [isAdminPortalOpen, setIsAdminPortalOpen] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [session, setSession] = useState({ user: null, profile: null });

  useEffect(() => {
    if (!supabase) return;
    const refresh = () => getSessionProfile().then(setSession).catch(() => setSession({ user: null, profile: null }));
    refresh();
    const { data: { subscription } } = supabase.auth.onAuthStateChange(() => refresh());
    return () => subscription.unsubscribe();
  }, []);

  const openClientPortal = () => session.user ? setIsClientPortalOpen(true) : setIsAuthOpen(true);
  const openAdminPortal = () => session.profile?.role === 'admin' ? setIsAdminPortalOpen(true) : setIsAuthOpen(true);

  // Select project by ID or object
  const handleSelectProject = (projectOrId) => {
    if (typeof projectOrId === 'string') {
      const found = portfolioData.find(p => p.id === projectOrId);
      if (found) setSelectedProject(found);
    } else {
      setSelectedProject(projectOrId);
    }
  };

  const handleStartProjectFromCaseStudy = (serviceCategory) => {
    let mappedService = "Graphic Design & Branding";
    if (serviceCategory === "Print") mappedService = "Print Design & Production";
    else if (serviceCategory === "Packaging") mappedService = "Packaging & Dielines";
    else if (serviceCategory === "Web Design" || serviceCategory === "Web") mappedService = "Website Design & Development";
    else if (serviceCategory === "Digital") mappedService = "Digital Creative Services";

    setPrefilledService(mappedService);
    
    // Smooth scroll to contact section
    const contactEl = document.querySelector('#contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCategoryFilter = (category) => {
    setActiveCategory(category);
  };

  const page = window.location.pathname.replace(/\/$/, '') || '/';
  const home = page === '/';

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#172033] font-sans antialiased selection:bg-[#2563EB]/15 selection:text-[#2563EB]">
      {/* 1. Header & Navigation */}
      <Header 
        onOpenQuote={() => setIsQuoteOpen(true)}
        onOpenClientPortal={openClientPortal}
        onOpenAdminPortal={openAdminPortal}
      />

      {/* Main Page Flow */}
      <main className="flex-grow">
        {home && <>
          <Hero />
          <HomeServices />
          <Portfolio activeCategory={activeCategory} onSelectCategory={handleCategoryFilter} onSelectProject={handleSelectProject} onOpenQuote={() => setIsQuoteOpen(true)} />
          <WhyUs onOpenQuote={() => setIsQuoteOpen(true)} />
          <ProcessTimeline onOpenQuote={() => setIsQuoteOpen(true)} />
          <FullCTA onOpenQuote={() => setIsQuoteOpen(true)} />
        </>}
        {page === '/services' && <><PageIntro title="Services" text="Creative services to take your brand from first idea to a polished digital or print experience."/><Services onSelectCategory={handleCategoryFilter} onOpenQuote={() => setIsQuoteOpen(true)} /><WhyUs onOpenQuote={() => setIsQuoteOpen(true)} /><ProcessTimeline onOpenQuote={() => setIsQuoteOpen(true)} /></>}
        {page === '/portfolio' && <><PageIntro title="Portfolio" text="A selection of clearly labeled studio sample concepts across web, identity, print and packaging."/><Portfolio activeCategory={activeCategory} onSelectCategory={handleCategoryFilter} onSelectProject={handleSelectProject} onOpenQuote={() => setIsQuoteOpen(true)} /></>}
        {page === '/about' && <><PageIntro title="About the Studio" text="One creative partner for design, development and print solutions."/><AboutStudio onOpenQuote={() => setIsQuoteOpen(true)} /><CraftStandards /><FAQSection onOpenQuote={() => setIsQuoteOpen(true)} /></>}
        {page === '/contact' && <><PageIntro title="Talk about your project" text="Share a little about what you are building. We will help you find the right next step."/><ContactSection prefilledService={prefilledService} /></>}
        {!['/', '/services', '/portfolio', '/about', '/contact'].includes(page) && <PageIntro title="Page not found" text="The page you’re looking for isn’t available." />}
      </main>

      {/* Studio Footer */}
      <Footer 
        onSelectCategory={handleCategoryFilter}
      />

      {/* Interactive Modals & Drawers */}
      <ProjectModal 
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
        onStartProject={handleStartProjectFromCaseStudy}
      />

      <QuoteDrawer 
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />

      <ClientPortalModal
        isOpen={isClientPortalOpen}
        onClose={() => setIsClientPortalOpen(false)}
        onOpenInvoice={(invoice) => setSelectedInvoice(invoice)}
        user={session.user}
      />

      <AdminPortalModal
        isOpen={isAdminPortalOpen}
        onClose={() => setIsAdminPortalOpen(false)}
        onOpenInvoice={(invoice) => setSelectedInvoice(invoice)}
        isAdmin={session.profile?.role === 'admin'}
      />

      <InvoiceModal
        invoice={selectedInvoice}
        isOpen={Boolean(selectedInvoice)}
        onClose={() => setSelectedInvoice(null)}
      />

      <AuthModal 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)} 
      />
    </div>
  );
}

function PageIntro({ title, text }) {
  return <section className="pt-36 pb-14 sm:pt-40 sm:pb-20 bg-[#EFF6FF]"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><p className="text-sm font-semibold uppercase tracking-widest text-[#2563EB]">Riddhi Print Studio</p><h1 className="mt-4 text-4xl sm:text-6xl font-black tracking-tight text-[#172033]">{title}</h1><p className="mt-5 max-w-2xl text-lg text-[#64748B]">{text}</p></div></section>;
}
