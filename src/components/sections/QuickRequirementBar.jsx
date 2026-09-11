import React, { useState, useRef } from 'react';
import { 
  Send, 
  UploadCloud, 
  CheckCircle2, 
  Sparkles, 
  MessageSquare, 
  Mail, 
  FileText, 
  X, 
  ArrowRight, 
  Layers, 
  Printer, 
  Package, 
  Globe, 
  Palette,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { buildStudioWhatsAppUrl, buildStudioEmailUrl } from '../../utils/portalStore';
import { createProject } from '../../services/portalApi';
import { studioInfo } from '../../data/companyData';

const quickCategories = [
  { id: "Print Design", label: "Print (Brochure/Cards/Menu)", icon: Printer },
  { id: "Packaging Design", label: "Packaging & Boxes", icon: Package },
  { id: "Branding", label: "Logo & Brand Identity", icon: Palette },
  { id: "Web Design", label: "Website & UI/UX", icon: Globe },
  { id: "Social Media Design", label: "Social Media & Ads", icon: Sparkles },
  { id: "Other", label: "Custom Design / Suggestion", icon: Layers },
];

export default function QuickRequirementBar({ onOpenClientPortal, user, onRequireLogin }) {
  const [selectedService, setSelectedService] = useState("Print Design");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    requirement: "",
    budget: "₹10,000 – ₹25,000",
    timeline: "2 – 3 Weeks"
  });

  const [attachedFile, setAttachedFile] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lastSubmission, setLastSubmission] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 25 * 1024 * 1024) {
        alert("File size exceeds 25MB.");
        return;
      }
      setAttachedFile({
        name: file.name,
        size: (file.size / (1024 * 1024)).toFixed(2) + " MB"
      });
      setSelectedFile(file);
    }
  };

  const handleRemoveFile = (e) => {
    e.stopPropagation();
    setAttachedFile(null);
    setSelectedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const validate = () => {
    if (!formData.name.trim()) {
      setErrorMsg("Please enter your name.");
      return false;
    }
    if (!formData.phone.trim() && !formData.email.trim()) {
      setErrorMsg("Please provide your WhatsApp number or Email so we can coordinate.");
      return false;
    }
    if (!formData.requirement.trim()) {
      setErrorMsg("Please describe your design idea or project requirement.");
      return false;
    }
    setErrorMsg("");
    return true;
  };

  const createSubmission = async () => {
    if (!user) { onRequireLogin?.(); return null; }
    const input = {
      name: formData.name, phone: formData.phone, email: formData.email, company: formData.company,
      service: selectedService, title: `${selectedService}: ${formData.requirement.slice(0, 45)}${formData.requirement.length > 45 ? '…' : ''}`,
      description: formData.requirement, budget: formData.budget, timeline: formData.timeline,
    };
    const saved = await createProject(input, selectedFile);
    setLastSubmission(saved); setIsSubmitted(true);
    return input;
  };

  const handleSendWhatsApp = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try { const submissionData = await createSubmission(); if (submissionData) window.open(buildStudioWhatsAppUrl({ ...submissionData, clientName: formData.name, clientPhone: formData.phone, clientEmail: formData.email, attachedFile }), '_blank'); } catch (error) { setErrorMsg(error.message || 'Could not save your request.'); }
  };

  // Submit and open Email client with riddhicreativestudio@gmail.com
  const handleSendEmail = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try { const submissionData = await createSubmission(); if (submissionData) window.location.href = buildStudioEmailUrl({ ...submissionData, clientName: formData.name, clientPhone: formData.phone, clientEmail: formData.email, attachedFile }); } catch (error) { setErrorMsg(error.message || 'Could not save your request.'); }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: "",
      phone: "",
      email: "",
      company: "",
      requirement: "",
      budget: "₹10,000 – ₹25,000",
      timeline: "2 – 3 Weeks"
    });
    setAttachedFile(null);
    setSelectedFile(null);
    setLastSubmission(null);
  };

  return (
    <section className="py-12 bg-[#F3F2EC] border-b border-[#E7E5DE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Wrapper Card */}
        <div className="rounded-3xl bg-white border border-[#E7E5DE] p-6 sm:p-10 shadow-lg shadow-black/5 relative overflow-hidden">
          
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#2546FF]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Header Row: Title & Link to Client Portal */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#E7E5DE]">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#2546FF] font-bold">
                <span className="w-2 h-2 rounded-full bg-[#2546FF] animate-pulse" />
                Direct Collaboration & Idea Sharing
              </div>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#0D0E11] tracking-tight mt-1">
                Have a Design Idea or Specific Requirement?
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-2xl">
                Share your idea, reference files, or requirements. We will coordinate directly on WhatsApp ({studioInfo.phone}) or Email ({studioInfo.email}) to execute your project.
              </p>
            </div>

            <button
              onClick={onOpenClientPortal}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-semibold font-mono tracking-wide transition-colors shrink-0"
            >
              <span>View My Projects & Bills</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#2546FF]" />
            </button>
          </div>

          {/* Success State */}
          {isSubmitted ? (
            <div className="py-10 text-center space-y-5 animate-in fade-in zoom-in duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-display font-black text-2xl text-[#0D0E11]">
                Requirement Received & Dispatched!
              </h3>
              <p className="text-sm text-neutral-600 max-w-xl mx-auto leading-relaxed">
                Thank you, <span className="font-bold text-neutral-900">{formData.name}</span>! Your project <span className="font-bold text-[#2546FF]">"{lastSubmission?.title}"</span> has been logged into your Client Portal and shared with our studio team.
              </p>

              {/* Quick Action Pills */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <a
                  href={`https://wa.me/918585959480`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20b859] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Open WhatsApp Chat (+91 8585959480)</span>
                </a>

                <button
                  onClick={onOpenClientPortal}
                  className="px-6 py-3 rounded-full bg-[#0D0E11] hover:bg-[#2546FF] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center gap-2"
                >
                  <Layers className="w-4 h-4" />
                  <span>Track Status in Client Portal</span>
                </button>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs font-mono text-neutral-500 hover:text-black underline"
                >
                  Submit Another Requirement / Idea
                </button>
              </div>
            </div>
          ) : (
            /* Interactive Submission Form */
            <div className="mt-8 space-y-6">

              {/* 1. Category Selector Pills */}
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-semibold block mb-2.5">
                  Select Project Category:
                </label>
                <div className="flex flex-wrap gap-2">
                  {quickCategories.map((cat) => {
                    const Icon = cat.icon;
                    const isSelected = selectedService === cat.id;
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => setSelectedService(cat.id)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
                          isSelected
                            ? 'bg-[#0D0E11] text-white shadow-md'
                            : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        <span>{cat.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Requirement Textarea */}
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-neutral-700 font-semibold block">
                  Describe Your Design Idea, Vision, or Specific Requirements: <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={3}
                  value={formData.requirement}
                  onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                  placeholder="e.g. I need a luxury matte black packaging pouch for coffee with gold foil stamping, or I need an editorial 12-page company brochure with high quality print-ready dielines..."
                  className="w-full px-4 py-3 rounded-xl border border-[#E7E5DE] text-sm focus:outline-none focus:border-[#2546FF] focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* 3. Three Columns: Client Details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-700 font-semibold block">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Verma"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E7E5DE] text-sm focus:outline-none focus:border-[#2546FF]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-700 font-semibold block">
                    WhatsApp Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E7E5DE] text-sm focus:outline-none focus:border-[#2546FF]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-700 font-semibold block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="rahul@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E7E5DE] text-sm focus:outline-none focus:border-[#2546FF]"
                  />
                </div>
              </div>

              {/* 4. Attachment & Budget Row */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                
                {/* File Attachment */}
                <div className="sm:col-span-7">
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept=".pdf,.png,.jpg,.jpeg,.zip,.ai,.fig"
                    className="hidden"
                  />

                  {attachedFile ? (
                    <div className="p-3 rounded-xl bg-neutral-100 border border-[#E7E5DE] flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-[#2546FF]" />
                        <span className="text-xs font-bold text-neutral-900 truncate max-w-[220px]">
                          {attachedFile.name}
                        </span>
                        <span className="text-[10px] text-neutral-500 font-mono">({attachedFile.size})</span>
                      </div>
                      <button
                        type="button"
                        onClick={handleRemoveFile}
                        className="text-neutral-400 hover:text-rose-600 p-1"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full border border-dashed border-[#D5D3CA] hover:border-[#2546FF] rounded-xl py-2.5 px-4 text-left flex items-center gap-2.5 text-xs text-neutral-600 hover:bg-neutral-50 transition-colors"
                    >
                      <UploadCloud className="w-4 h-4 text-neutral-400" />
                      <span>Attach Reference Image, Sketch, or Dieline PDF (Optional)</span>
                    </button>
                  )}
                </div>

                {/* Budget selector */}
                <div className="sm:col-span-5">
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E7E5DE] text-xs bg-white focus:outline-none focus:border-[#2546FF]"
                  >
                    <option value="Under ₹10,000">Budget: Under ₹10,000</option>
                    <option value="₹10,000 – ₹25,000">Budget: ₹10,000 – ₹25,000</option>
                    <option value="₹25,000 – ₹50,000">Budget: ₹25,000 – ₹50,000</option>
                    <option value="₹50,000+">Budget: ₹50,000+ (Comprehensive)</option>
                    <option value="Let's Discuss">Budget: Let's Discuss</option>
                  </select>
                </div>

              </div>

              {/* Error Message */}
              {errorMsg && (
                <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 text-xs font-mono">
                  ⚠️ {errorMsg}
                </div>
              )}

              {/* Dual Action Buttons: Send via WhatsApp + Send via Email */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                
                {/* 1. Direct WhatsApp to 8585959480 */}
                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="flex-1 py-3.5 px-6 rounded-full bg-[#25D366] hover:bg-[#20b859] text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send via WhatsApp to Studio (+91 8585959480)</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>

                {/* 2. Direct Email to riddhicreativestudio@gmail.com */}
                <button
                  type="button"
                  onClick={handleSendEmail}
                  className="py-3.5 px-6 rounded-full bg-[#0D0E11] hover:bg-[#2546FF] text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send via Email (riddhicreativestudio@gmail.com)</span>
                </button>

              </div>

              {/* Bottom Guarantee Notes */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-4 text-[11px] font-mono text-neutral-500">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>After login, your brief is securely saved in your client portal</span>
                </div>
                <div>
                  Studio Direct: <span className="font-semibold text-neutral-800">+91 8585959480</span>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
