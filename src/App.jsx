import React, { useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/hero/Hero';
import TrustIntro from './components/sections/TrustIntro';
import Services from './components/sections/Services';
import FeaturedProject from './components/sections/FeaturedProject';
import Portfolio from './components/sections/Portfolio';
import WhyUs from './components/sections/WhyUs';
import ProcessTimeline from './components/sections/ProcessTimeline';
import AboutStudio from './components/sections/AboutStudio';
import Testimonials from './components/sections/Testimonials';
import FullCTA from './components/sections/FullCTA';
import ContactSection from './components/sections/ContactSection';
import ProjectModal from './components/modals/ProjectModal';
import QuoteDrawer from './components/modals/QuoteDrawer';
import FontSwitcher from './components/ui/FontSwitcher';
import { portfolioData } from './data/portfolioData';

export default function App() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState("");

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
    // Map category to service option name
    let mappedService = "Branding";
    if (serviceCategory === "Print") mappedService = "Print Design";
    else if (serviceCategory === "Packaging") mappedService = "Packaging Design";
    else if (serviceCategory === "Graphic Design") mappedService = "Graphic Design";
    else if (serviceCategory === "Social Media") mappedService = "Social Media Design";
    else if (serviceCategory === "Web Design") mappedService = "Web Design";

    setPrefilledService(mappedService);
    
    // Scroll to contact form
    const contactEl = document.querySelector('#contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCategoryFilter = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#121316] font-sans antialiased">
      {/* Sticky Responsive Header */}
      <Header 
        onOpenQuote={() => setIsQuoteOpen(true)} 
      />

      {/* Main Page Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero 
          onOpenQuote={() => setIsQuoteOpen(true)}
          onSelectProject={handleSelectProject}
        />

        {/* 2. Trust / Intro Section */}
        <TrustIntro 
          onOpenQuote={() => setIsQuoteOpen(true)}
        />

        {/* 3. Services Section */}
        <Services 
          onSelectCategory={handleCategoryFilter}
          onOpenQuote={() => setIsQuoteOpen(true)}
        />

        {/* 4. Featured Project Section (Editorial Split) */}
        <FeaturedProject 
          onOpenProject={handleSelectProject}
          onOpenQuote={() => setIsQuoteOpen(true)}
        />

        {/* 5. Selected Work / Portfolio Grid */}
        <Portfolio 
          activeCategory={activeCategory}
          onSelectCategory={handleCategoryFilter}
          onSelectProject={handleSelectProject}
          onOpenQuote={() => setIsQuoteOpen(true)}
        />

        {/* 6. Why Work With Us */}
        <WhyUs />

        {/* 7. How We Work / Process Timeline */}
        <ProcessTimeline 
          onOpenQuote={() => setIsQuoteOpen(true)}
        />

        {/* 8. About Riddhi Creative Studio */}
        <AboutStudio 
          onOpenQuote={() => setIsQuoteOpen(true)}
        />

        {/* 9. Client Testimonials */}
        <Testimonials />

        {/* 10. Visually Powerful Full-Width CTA */}
        <FullCTA 
          onOpenQuote={() => setIsQuoteOpen(true)}
        />

        {/* 11. Contact Inquiry Form & Studio Information */}
        <ContactSection 
          prefilledService={prefilledService}
        />
      </main>

      {/* Studio Footer */}
      <Footer 
        onSelectCategory={handleCategoryFilter}
      />

      {/* Interactive Modals */}
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

      {/* Floating Heading Style Switcher */}
      <FontSwitcher />
    </div>
  );
}
