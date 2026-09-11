// Storage helper for Client Requirements and Studio Invoices

const SUBMISSIONS_KEY = 'riddhi_client_submissions';
const INVOICES_KEY = 'riddhi_studio_invoices';

export const initialSubmissions = [
  {
    id: "REQ-2026-01",
    createdAt: "2026-03-08T10:30:00.000Z",
    clientName: "Ananya Sharma",
    clientPhone: "+91 98765 43210",
    clientEmail: "ananya@bloomskincare.in",
    company: "Bloom Botanicals",
    service: "Packaging Design",
    title: "Organic Serum Dropper Bottle & Box Dieline",
    description: "We need an elegant, frosted glass dropper bottle label and FSC-certified outer carton box with embossed botanical leaf veins for our upcoming 50ml Rosehip Glow serum.",
    budget: "₹25,000 – ₹50,000",
    timeline: "2 – 3 Weeks",
    attachedFile: { name: "Bloom_Dieline_Specs_v1.pdf", size: "3.4 MB" },
    status: "In Design",
    adminNotes: "Concepts 01 & 02 shared with client on WhatsApp. Awaiting lid finish confirmation."
  },
  {
    id: "REQ-2026-02",
    createdAt: "2026-03-05T14:15:00.000Z",
    clientName: "Vikram Malhotra",
    clientPhone: "+91 98112 34567",
    clientEmail: "vikram@urbanproperties.com",
    company: "Urban Properties Group",
    service: "Print Design",
    title: "16-Page Luxury Architectural Monograph Brochure",
    description: "Hardcover casebound brochure for high-net-worth real estate buyers. Includes floorplans, metallic copper foil on charcoal bookcloth, and layflat binding.",
    budget: "₹50,000+",
    timeline: "1 Month",
    attachedFile: { name: "Urban_Horizon_CAD_Plans.zip", size: "18.2 MB" },
    status: "Under Review",
    adminNotes: "Meeting scheduled to review physical paper samples and foil proofs."
  },
  {
    id: "REQ-2026-03",
    createdAt: "2026-02-28T09:00:00.000Z",
    clientName: "Priya Nair",
    clientPhone: "+91 99887 76655",
    clientEmail: "priya@fitlifeapparel.com",
    company: "FitLife Apparel",
    service: "Web Design",
    title: "Interactive DTC Fitness Brand Web Experience",
    description: "Responsive website with interactive drop teasers, modular product showcase, and smooth mobile micro-interactions.",
    budget: "₹50,000+",
    timeline: "Immediately (< 1 week)",
    attachedFile: { name: "FitLife_Brand_Assets.fig", size: "12.0 MB" },
    status: "Delivered / Completed",
    adminNotes: "Final React codebase and Figma tokens delivered. Client gave 5-star feedback!"
  }
];

export const initialInvoices = [
  {
    id: "INV-2026-001",
    projectId: "REQ-2026-01",
    projectTitle: "Organic Serum Dropper Bottle & Box Dieline",
    clientName: "Ananya Sharma",
    clientPhone: "+91 98765 43210",
    clientEmail: "ananya@bloomskincare.in",
    company: "Bloom Botanicals",
    service: "Packaging Design",
    issueDate: "2026-03-09",
    dueDate: "2026-03-24",
    status: "Pending",
    lineItems: [
      { description: "Primary Dropper Label Vector System & Dieline", qty: 1, rate: 12000, amount: 12000 },
      { description: "Outer Folding Carton 3D Mockup & Print Bleeds", qty: 1, rate: 15000, amount: 15000 },
      { description: "Foil Debossing Specs & Pantone Color Matching", qty: 1, rate: 5000, amount: 5000 }
    ],
    subtotal: 32000,
    taxRate: 18,
    tax: 5760,
    total: 37760,
    notes: "50% advance received. Balance due upon final print-ready PDF handoff."
  },
  {
    id: "INV-2026-002",
    projectId: "REQ-2026-03",
    projectTitle: "Interactive DTC Fitness Brand Web Experience",
    clientName: "Priya Nair",
    clientPhone: "+91 99887 76655",
    clientEmail: "priya@fitlifeapparel.com",
    company: "FitLife Apparel",
    service: "Web Design",
    issueDate: "2026-02-28",
    dueDate: "2026-03-05",
    status: "Paid",
    lineItems: [
      { description: "Complete Interactive Web UI/UX Architecture in Figma", qty: 1, rate: 35000, amount: 35000 },
      { description: "Frontend Responsive Implementation (React + Tailwind)", qty: 1, rate: 25000, amount: 25000 }
    ],
    subtotal: 60000,
    taxRate: 18,
    tax: 10800,
    total: 70800,
    notes: "Payment received in full via UPI / Bank Transfer. Thank you for your partnership!"
  }
];

// Get all submissions
export function getSubmissions() {
  try {
    const saved = localStorage.getItem(SUBMISSIONS_KEY);
    if (!saved) {
      localStorage.setItem(SUBMISSIONS_KEY, JSON.stringify(initialSubmissions));
      return initialSubmissions;
    }
    return JSON.parse(saved);
  } catch {
    return initialSubmissions;
  }
}

// Add a new submission
export function addSubmission(submissionData) {
  const all = getSubmissions();
  const newId = `REQ-2026-${String(all.length + 1).padStart(2, '0')}`;
  const newSubmission = {
    id: newId,
    createdAt: new Date().toISOString(),
    status: 'Submitted',
    adminNotes: 'Newly received from website submission.',
    ...submissionData
  };
  const updated = [newSubmission, ...all];
  localStorage.setItem(SUBMISSIONS_KEY, JSON.stringify(updated));
  return newSubmission;
}

// Update submission status or notes
export function updateSubmission(id, updates) {
  const all = getSubmissions();
  const updated = all.map(sub => sub.id === id ? { ...sub, ...updates } : sub);
  localStorage.setItem(SUBMISSIONS_KEY, JSON.stringify(updated));
  return updated;
}

// Get all invoices
export function getInvoices() {
  try {
    const saved = localStorage.getItem(INVOICES_KEY);
    if (!saved) {
      localStorage.setItem(INVOICES_KEY, JSON.stringify(initialInvoices));
      return initialInvoices;
    }
    return JSON.parse(saved);
  } catch {
    return initialInvoices;
  }
}

// Create new invoice
export function createInvoice(invoiceData) {
  const all = getInvoices();
  const newId = `INV-2026-${String(all.length + 1).padStart(3, '0')}`;
  const newInvoice = {
    id: newId,
    issueDate: new Date().toISOString().split('T')[0],
    status: 'Pending',
    ...invoiceData
  };
  const updated = [newInvoice, ...all];
  localStorage.setItem(INVOICES_KEY, JSON.stringify(updated));
  return newInvoice;
}

// Update invoice
export function updateInvoice(id, updates) {
  const all = getInvoices();
  const updated = all.map(inv => inv.id === id ? { ...inv, ...updates } : inv);
  localStorage.setItem(INVOICES_KEY, JSON.stringify(updated));
  return updated;
}

// Build WhatsApp Direct Chat URL for studio phone 8585959480
export function buildStudioWhatsAppUrl(requirement) {
  const studioNumber = "918585959480";
  const textLines = [
    `*🎨 NEW DESIGN REQUIREMENT // RIDDHI CREATIVE STUDIO*`,
    ``,
    `*Client Name:* ${requirement.clientName || 'Valued Client'}`,
    `*Phone:* ${requirement.clientPhone || 'Not provided'}`,
    `*Email:* ${requirement.clientEmail || 'Not provided'}`,
    requirement.company ? `*Company:* ${requirement.company}` : null,
    `*Service Needed:* ${requirement.service || 'Creative Design'}`,
    requirement.budget ? `*Budget Range:* ${requirement.budget}` : null,
    requirement.timeline ? `*Timeline:* ${requirement.timeline}` : null,
    requirement.attachedFile ? `*Attached Reference File:* ${requirement.attachedFile.name} (${requirement.attachedFile.size})` : null,
    ``,
    `*Project Details / Idea:*`,
    `"${requirement.description || 'Requirement details attached.'}"`,
    ``,
    `_Sent via Riddhi Creative Studio Interactive Portal_`
  ].filter(Boolean).join('\n');

  return `https://wa.me/${studioNumber}?text=${encodeURIComponent(textLines)}`;
}

// Build Client direct WhatsApp URL from Admin panel
export function buildClientWhatsAppUrl(clientPhone, projectTitle) {
  const cleanPhone = (clientPhone || "").replace(/\D/g, '');
  const greeting = `Hi! This is Riddhi Creative Studio regarding your design requirement for "${projectTitle || 'your project'}". We have reviewed your brief and are excited to work together.`;
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(greeting)}`;
}

// Build Email Mailto URL for riddhicreativestudio@gmail.com
export function buildStudioEmailUrl(requirement) {
  const recipient = "riddhicreativestudio@gmail.com";
  const subject = `[Design Inquiry] ${requirement.service || 'Creative Project'} - ${requirement.clientName || 'New Client'}`;
  const body = [
    `Hello Riddhi Creative Studio Team,`,
    ``,
    `I would like to discuss a new design project with you.`,
    ``,
    `CLIENT DETAILS:`,
    `- Name: ${requirement.clientName}`,
    `- Phone / WhatsApp: ${requirement.clientPhone}`,
    `- Email: ${requirement.clientEmail}`,
    requirement.company ? `- Company: ${requirement.company}` : null,
    ``,
    `PROJECT BRIEF:`,
    `- Service Required: ${requirement.service}`,
    `- Budget: ${requirement.budget || 'Flexible'}`,
    `- Preferred Timeline: ${requirement.timeline || 'Flexible'}`,
    requirement.attachedFile ? `- Attachment Reference: ${requirement.attachedFile.name} (${requirement.attachedFile.size})` : null,
    ``,
    `PROJECT DETAILS:`,
    `${requirement.description}`,
    ``,
    `Looking forward to coordinating and creating this project together!`,
    ``,
    `Regards,`,
    `${requirement.clientName}`
  ].filter(Boolean).join('\n');

  return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
