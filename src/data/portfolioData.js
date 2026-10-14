export const portfolioCategories = [
  "All",
  "Web Design",
  "Branding",
  "Print",
  "Packaging",
  "Digital"
];

export const portfolioData = [
  {
    id: "nova-coffee",
    title: "Nova Coffee Roasters",
    category: "Branding",
    secondaryCategories: ["Packaging", "Print"],
    tagline: "Artisan specialty coffee identity, custom typography & luxury foil packaging",
    shortDescription: "A comprehensive brand identity system, custom logotype, roast packaging architecture, and editorial cafe collateral designed to command boutique retail presence.",
    year: "2026",
    timeline: "4 Weeks",
    client: "Sample Studio Concept (Artisan Roastery)",
    isSampleConcept: true,
    conceptBadge: "Studio Sample Concept",
    services: ["Brand Identity", "Custom Logotype", "Coffee Bag Packaging", "Menu Design", "Foil Stamped Business Cards"],
    accentColor: "#D4FF43",
    bgGradient: "from-amber-950 via-neutral-900 to-[#17191D]",
    mockupType: "coffee-branding",
    featured: true,
    overview: "This studio concept explores how an artisan coffee brand can command premium pricing through a harmonious balance of Scandinavian minimalism and tactile print finishes.",
    challenge: "The specialty coffee sector is inundated with generic kraft bags. The goal was to establish a distinctive visual signature that translates effortlessly from high-end supermarket shelves to a modern digital subscription web app.",
    creativeDirection: "Architectural typographic hierarchy, deep roasted umber and warm charcoal backgrounds, illuminated by subtle brass foil debossing and geometric origin badges.",
    designSolution: "Created a modular packaging system featuring soft-touch matte pouch bags, metallic foil roast descriptors, debossed cotton business cards, and a cohesive cafe collateral suite.",
    finalResult: "A tangible, production-ready design system demonstrating master-level print preparation alongside digital brand versatility.",
    gallery: [
      {
        title: "Primary Logotype & Business Card Suite",
        desc: "Hot-stamped metallic foil on 600gsm duplexed cotton stock with blind debossing.",
        aspect: "landscape",
        type: "stationery"
      },
      {
        title: "Single-Origin Matte Pouch Packaging",
        desc: "Color-coded typographic origin labels on textured charcoal pouch bags with degassing valve details.",
        aspect: "square",
        type: "packaging"
      },
      {
        title: "Cafe Takeaway Cups & Collateral",
        desc: "Minimal monochrome typographic wrap and waterproof amber glass cold-brew bottle labels.",
        aspect: "portrait",
        type: "collateral"
      }
    ]
  },
  {
    id: "creative-studio-web",
    title: "Vanguard Architecture Platform",
    category: "Web Design",
    secondaryCategories: ["UI/UX Design", "Website Development"],
    tagline: "High-performance digital web experience with responsive editorial grids",
    shortDescription: "An avant-garde responsive web platform built for high-end architecture and interior practices, emphasizing fluid layouts, interactive case studies, and instant loading speeds.",
    year: "2026",
    timeline: "5 Weeks",
    client: "Sample Studio Concept (Digital Architecture)",
    isSampleConcept: true,
    conceptBadge: "Studio Sample Concept",
    services: ["UI/UX Architecture", "Responsive Frontend Code", "Interactive Prototyping", "Design System", "Performance Optimization"],
    accentColor: "#D4FF43",
    bgGradient: "from-neutral-900 via-[#1F2228] to-[#17191D]",
    mockupType: "web-mockup",
    featured: true,
    overview: "A digital flagship concept engineered to demonstrate how editorial typography, asymmetric grids, and semantic frontend development create an unforgettable web experience.",
    challenge: "Showcasing expansive architectural photography without degrading mobile load performance or cluttering user navigation on smaller screens.",
    creativeDirection: "Deep charcoal canvas with ivory typography, micro-borders reminiscent of architectural drawings, and subtle electric lime interactive hover cues.",
    designSolution: "Engineered a component-driven React architecture with responsive image loading, accessible keyboard navigation, and seamless mobile ergonomics.",
    finalResult: "Flawless mobile responsiveness, 99/100 Lighthouse performance, and zero layout shift across viewports.",
    gallery: [
      {
        title: "Desktop Web Platform Interface",
        desc: "Editorial dark layout with custom fluid hover cards and clean project filtering.",
        aspect: "landscape",
        type: "web"
      },
      {
        title: "Mobile Ergonomic Responsive Layout",
        desc: "Thumb-zone navigation, smooth drawer transitions, and high-density typography.",
        aspect: "portrait",
        type: "mobile"
      }
    ]
  },
  {
    id: "bloom-skincare",
    title: "Aura Botanical Skincare",
    category: "Packaging",
    secondaryCategories: ["Branding", "Print"],
    tagline: "Sustainable organic cosmetic packaging with frosted glass & tactile labels",
    shortDescription: "A sustainable luxury cosmetic packaging suite featuring custom bottle labels, outer folding box dielines, and unboxing collateral.",
    year: "2026",
    timeline: "4 Weeks",
    client: "Sample Studio Concept (Organic Beauty)",
    isSampleConcept: true,
    conceptBadge: "Studio Sample Concept",
    services: ["Packaging Design", "Box Dieline Engineering", "Cosmetic Label System", "Product Mockups", "Material Specifications"],
    accentColor: "#D4FF43",
    bgGradient: "from-emerald-950 via-neutral-900 to-[#17191D]",
    mockupType: "skincare-packaging",
    featured: false,
    overview: "This sample concept explores organic botanical luxury, balancing strict cosmetic regulatory requirements with an ultra-clean, serene shelf aesthetic.",
    challenge: "Integrating ingredient lists, batch numbers, and barcode compliance while maintaining a tranquil, premium vanity presence.",
    creativeDirection: "Earthy botanical tones, warm porcelain ivory, and subtle foil micro-accents paired with a clean geometric sans-serif.",
    designSolution: "Created waterproof textured label dielines for frosted glass dropper bottles, complemented by raw unbleached cardstock outer boxes with blind debossed botanical patterns.",
    finalResult: "A shelf-ready packaging design system ready for commercial manufacturing and print vendor handoff.",
    gallery: [
      {
        title: "Botanical Serum Dropper Bottle & Jar Trio",
        desc: "Frosted glass vessels with custom die-cut labels and matte bamboo dropper caps.",
        aspect: "landscape",
        type: "bottles"
      },
      {
        title: "Outer Box Unboxing Experience",
        desc: "FSC certified embossed folding carton with hidden internal botanical patterns.",
        aspect: "square",
        type: "boxes"
      }
    ]
  },
  {
    id: "urban-properties",
    title: "The Metropolitan Monograph",
    category: "Print",
    secondaryCategories: ["Branding", "Digital"],
    tagline: "Luxury real estate editorial brochure & hardcover print book",
    shortDescription: "A large-format editorial monograph featuring gold foil debossing, thread-sewn binding, architectural floorplans, and production specifications.",
    year: "2025",
    timeline: "3 Weeks",
    client: "Sample Studio Concept (Luxury Real Estate)",
    isSampleConcept: true,
    conceptBadge: "Studio Sample Concept",
    services: ["Editorial Design", "Brochure Layout", "Print Production Oversight", "Floorplan Redraws", "Finishing Specifications"],
    accentColor: "#D4FF43",
    bgGradient: "from-slate-900 via-neutral-900 to-[#17191D]",
    mockupType: "editorial-brochure",
    featured: false,
    overview: "An editorial print concept created to demonstrate how physical bookbinding, high-gsm paper stocks, and foil finishes elevate high-value property presentations.",
    challenge: "Organizing complex architectural drawings, developer specifications, and luxury imagery into an uncluttered, collectible keepsake book.",
    creativeDirection: "Swiss-inspired editorial grid with generous margins, dramatic typographic contrast, and precision crop marks.",
    designSolution: "Designed a casebound monograph with metallic copper foil blocking, thread stitching that lays completely flat at 180 degrees, and panoramic gatefold spreads.",
    finalResult: "A tangible luxury print asset demonstrating end-to-end print pre-press mastery and production readiness.",
    gallery: [
      {
        title: "Hardcover Casebound Monograph",
        desc: "Charcoal bookcloth cover with debossed metallic copper lettering.",
        aspect: "landscape",
        type: "hardcover"
      },
      {
        title: "Architectural Interior Spreads",
        desc: "Gatefold panoramic spreads featuring double-coated matte art paper (200gsm).",
        aspect: "landscape",
        type: "spreads"
      }
    ]
  },
  {
    id: "lumina-tech",
    title: "Lumina Cloud SaaS & Analytics",
    category: "Web Design",
    secondaryCategories: ["Digital", "UI/UX Design"],
    tagline: "High-converting B2B SaaS landing page & interactive product interface",
    shortDescription: "A high-conversion landing page and interactive analytics dashboard UI engineered for enterprise software and technical audiences.",
    year: "2026",
    timeline: "4 Weeks",
    client: "Sample Studio Concept (B2B SaaS Platform)",
    isSampleConcept: true,
    conceptBadge: "Studio Sample Concept",
    services: ["SaaS Web Design", "UI/UX Dashboards", "Interactive Data Graphics", "Conversion Rate Optimization", "Frontend Build"],
    accentColor: "#D4FF43",
    bgGradient: "from-indigo-950 via-neutral-900 to-[#17191D]",
    mockupType: "saas-web",
    featured: false,
    overview: "A digital concept demonstrating how complex enterprise telemetry data can be presented in a clean, intuitive, and visually compelling product interface.",
    challenge: "Translating dense data tables and telemetry flows into digestible, conversion-focused value propositions.",
    creativeDirection: "Deep dark mode backdrop, glowing metric indicators, clean monospace data figures, and glassmorphic container cards.",
    designSolution: "Created an interactive product simulation module embedded in the landing page to let prospective users interact with live UI components.",
    finalResult: "A high-converting web structure engineered for maximum clarity and rapid client acquisition.",
    gallery: [
      {
        title: "Enterprise Dashboard & Analytics UI",
        desc: "Interactive data visualization modules featuring real-time node metrics and custom charts.",
        aspect: "landscape",
        type: "dashboard"
      },
      {
        title: "Feature Matrix & Comparison Table",
        desc: "High-contrast typography designed for rapid scanning and decision making.",
        aspect: "landscape",
        type: "specs"
      }
    ]
  },
  {
    id: "fitlife-campaign",
    title: "Apex Athletics Digital Campaign",
    category: "Digital",
    secondaryCategories: ["Branding", "Print"],
    tagline: "High-voltage performance ad creatives & investor pitch deck system",
    shortDescription: "A high-energy digital campaign suite featuring dynamic social media ad carousels, performance banners, and an investor presentation deck.",
    year: "2026",
    timeline: "3 Weeks",
    client: "Sample Studio Concept (Activewear & Fitness)",
    isSampleConcept: true,
    conceptBadge: "Studio Sample Concept",
    services: ["Digital Advertising Creatives", "Social Media Graphics", "Pitch Deck Design", "Ad Banner Systems", "Campaign Guidelines"],
    accentColor: "#D4FF43",
    bgGradient: "from-red-950 via-neutral-900 to-[#17191D]",
    mockupType: "social-campaign",
    featured: false,
    overview: "A multi-channel digital creative concept tailored to showcase how kinetic typography and bold contrast capture attention on crowded digital feeds.",
    challenge: "Creating a cohesive creative system that functions across square feeds, vertical 9:16 stories, and 16:9 executive pitch slides.",
    creativeDirection: "Kinetic typography, high-contrast dark backgrounds with neon accents, dynamic athlete cutouts, and technical performance statistics.",
    designSolution: "Constructed a 30+ slide modular template suite in Figma, paired with an executive investor pitch deck formatted for high-stakes presentations.",
    finalResult: "A turnkey digital campaign asset pack ready for multi-channel rollout.",
    gallery: [
      {
        title: "Panoramic Social Carousels",
        desc: "Seamless visual carousels with product breakdowns and technical highlights.",
        aspect: "square",
        type: "carousel"
      },
      {
        title: "Executive Investor Pitch Deck",
        desc: "16:9 widescreen presentation slides with financial charts and market opportunity maps.",
        aspect: "landscape",
        type: "pitchdeck"
      }
    ]
  }
];
