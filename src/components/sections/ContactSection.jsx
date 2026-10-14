import React, { useState, useRef, useEffect } from 'react';
import { 
  studioInfo, 
  serviceOptions, 
  budgetOptions, 
  timelineOptions 
} from '../../data/companyData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  FileText, 
  Sparkles,
  ExternalLink,
  MessageSquare,
  Clock,
  ShieldCheck,
  Send
} from 'lucide-react';
import { InstagramIcon, LinkedinIcon, DribbbleIcon, BehanceIcon } from '../ui/SocialIcons';

export default function ContactSection({ prefilledService = "" }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    selectedServices: prefilledService ? [prefilledService] : ["Website Design & Development"],
    budget: budgetOptions[1] || "₹15,000 – ₹35,000 / $200 – $500",
    timeline: timelineOptions[1] || "2 – 4 Weeks",
    projectDetails: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  // Sync prefilled service when prop changes
  useEffect(() => {
    if (prefilledService) {
      setFormData(prev => ({
        ...prev,
        selectedServices: prev.selectedServices.includes(prefilledService)
          ? prev.selectedServices
          : [...prev.selectedServices, prefilledService]
      }));
    }
  }, [prefilledService]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const toggleService = (srv) => {
    setFormData(prev => {
      const exists = prev.selectedServices.includes(srv);
      const updated = exists 
        ? prev.selectedServices.filter(s => s !== srv)
        : [...prev.selectedServices, srv];
      return { ...prev, selectedServices: updated };
    });
    if (errors.selectedServices) {
      setErrors(prev => ({ ...prev, selectedServices: null }));
    }
  };

  const handleBudgetSelect = (b) => {
    setFormData(prev => ({ ...prev, budget: b }));
  };

  const handleTimelineSelect = (t) => {
    setFormData(prev => ({ ...prev, timeline: t }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your full name.";
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email format.";
    }
    if (formData.selectedServices.length === 0) {
      newErrors.selectedServices = "Please select at least one service interest.";
    }
    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = "Please describe your project requirements.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Honest submission processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setSubmittedData({ ...formData });
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmittedData(null);
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      selectedServices: ["Website Design & Development"],
      budget: budgetOptions[1],
      timeline: timelineOptions[1],
      projectDetails: ""
    });
    setErrors({});
  };

  // Construct structured WhatsApp URL
  const generateWhatsAppUrl = (data) => {
    if (!data) return studioInfo.whatsappUrl;
    const text = `*New Project Inquiry - Riddhi Print Studio*\n\n` +
      `*Name:* ${data.name}\n` +
      `*Email:* ${data.email}\n` +
      `*Phone:* ${data.phone || 'Not provided'}\n` +
      `*Company:* ${data.company || 'Not provided'}\n` +
      `*Services:* ${data.selectedServices.join(', ')}\n` +
      `*Budget:* ${data.budget}\n` +
      `*Timeline:* ${data.timeline}\n` +
      `*Project Brief:* ${data.projectDetails}`;
    return `https://wa.me/918585959480?text=${encodeURIComponent(text)}`;
  };

  // Construct structured Mailto URL
  const generateMailtoUrl = (data) => {
    if (!data) return `mailto:${studioInfo.email}`;
    const subject = `Project Inquiry from ${data.name} [${data.selectedServices[0] || 'Studio'}]`;
    const body = `Hi Riddhi Print Studio team,\n\n` +
      `I would like to discuss an upcoming project.\n\n` +
      `Name: ${data.name}\n` +
      `Email: ${data.email}\n` +
      `Phone: ${data.phone || 'N/A'}\n` +
      `Company: ${data.company || 'N/A'}\n` +
      `Services Needed: ${data.selectedServices.join(', ')}\n` +
      `Budget Range: ${data.budget}\n` +
      `Target Timeline: ${data.timeline}\n\n` +
      `Project Description:\n${data.projectDetails}\n\n` +
      `Best regards,\n${data.name}`;
    return `mailto:${studioInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#FFFAF2] border-b border-slate-200 relative scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#2563EB] font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
            Initiate Collaboration
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#172033] tracking-tight">
            Start a Project
          </h2>
          <p className="text-[#64748B] text-base sm:text-lg font-normal leading-relaxed">
            Tell us about your brand vision, target timeline, and service requirements. Choose email or WhatsApp to send the prepared enquiry.
          </p>
        </div>

        {/* 2-Column Split: Inquiry Form (Left) & Studio Contact Intelligence (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">

          {/* Left Column: Interactive Inquiry Form (Cols 1-7) */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl relative">
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-7" aria-label="Project Inquiry Form">
                  
                  {/* Step 1: Services Selection */}
                  <div className="space-y-3">
                    <span id="services-label" className="block text-xs font-mono uppercase tracking-wider text-[#172033] font-bold">
                      1. What services do you need? <span className="text-[#2563EB]">*</span>
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5" role="group" aria-labelledby="services-label">
                      {serviceOptions.map((srv) => {
                        const isSelected = formData.selectedServices.includes(srv);
                        return (
                          <button
                            type="button"
                            role="checkbox"
                            aria-checked={isSelected}
                            key={srv}
                            onClick={() => toggleService(srv)}
                            className={`p-3 rounded-xl text-xs font-mono text-left transition-all border flex items-center justify-between cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#2563EB]/40 ${
                              isSelected
                                ? 'bg-[#2563EB] text-[#F8FAFC] font-bold border-[#2563EB]'
                                : 'bg-[#F8FAFC] text-[#64748B] border-slate-200 hover:border-[#2563EB]/40 hover:text-[#172033]'
                            }`}
                          >
                            <span>{srv}</span>
                            <span className={`w-4 h-4 rounded flex items-center justify-center text-[10px] ${
                              isSelected ? 'bg-white text-[#2563EB]' : 'border border-slate-300'
                            }`}>
                              {isSelected ? '✓' : ''}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                    {errors.selectedServices && (
                      <p className="text-xs text-[#B42318] font-mono flex items-center gap-1.5 mt-1" role="alert">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.selectedServices}</span>
                      </p>
                    )}
                  </div>

                  {/* Step 2: Contact Details */}
                  <div className="space-y-3 pt-3 border-t border-white/10">
                    <span className="block text-xs font-mono uppercase tracking-wider text-[#172033] font-bold">
                      2. Your Contact Details <span className="text-[#2563EB]">*</span>
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-name" className="sr-only">Full Name</label>
                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your Full Name *"
                          aria-required="true"
                          aria-invalid={Boolean(errors.name)}
                          className={`w-full px-4 py-3 rounded-xl bg-[#F8FAFC] text-[#172033] placeholder-[#64748B] border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB]/40 transition-colors ${
                            errors.name ? 'border-red-500' : 'border-white/10 focus:border-[#2563EB]'
                          }`}
                        />
                        {errors.name && (
                          <p className="text-[11px] text-red-400 font-mono mt-1" role="alert">{errors.name}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="contact-email" className="sr-only">Email Address</label>
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Email Address *"
                          aria-required="true"
                          aria-invalid={Boolean(errors.email)}
                          className={`w-full px-4 py-3 rounded-xl bg-[#F8FAFC] text-[#172033] placeholder-[#64748B] border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB]/40 transition-colors ${
                            errors.email ? 'border-red-500' : 'border-white/10 focus:border-[#2563EB]'
                          }`}
                        />
                        {errors.email && (
                          <p className="text-[11px] text-red-400 font-mono mt-1" role="alert">{errors.email}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="contact-phone" className="sr-only">Phone / WhatsApp</label>
                        <input
                          id="contact-phone"
                          type="text"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Phone / WhatsApp (Optional)"
                          className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] text-[#172033] placeholder-[#64748B] border border-white/10 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/40 text-xs sm:text-sm focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label htmlFor="contact-company" className="sr-only">Company / Brand</label>
                        <input
                          id="contact-company"
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Company / Brand Name (Optional)"
                          className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] text-[#172033] placeholder-[#64748B] border border-white/10 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/40 text-xs sm:text-sm focus:outline-none transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Budget Brackets */}
                  <div className="space-y-3 pt-3 border-t border-white/10">
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#172033] font-bold">
                      3. Project Budget Range
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {budgetOptions.map((b) => (
                        <button
                          type="button"
                          key={b}
                          onClick={() => handleBudgetSelect(b)}
                          className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all border cursor-pointer ${
                            formData.budget === b
                              ? 'bg-white/15 text-[#2563EB] border-[#2563EB] font-bold'
                              : 'bg-[#F8FAFC] text-[#64748B] border-white/10 hover:border-white/20 hover:text-white'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 4: Timeline */}
                  <div className="space-y-3 pt-3 border-t border-white/10">
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#172033] font-bold">
                      4. Target Timeline
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {timelineOptions.map((t) => (
                        <button
                          type="button"
                          key={t}
                          onClick={() => handleTimelineSelect(t)}
                          className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all border cursor-pointer ${
                            formData.timeline === t
                              ? 'bg-white/15 text-[#2563EB] border-[#2563EB] font-bold'
                              : 'bg-[#F8FAFC] text-[#64748B] border-white/10 hover:border-white/20 hover:text-white'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 5: Project Brief */}
                  <div className="space-y-2 pt-3 border-t border-white/10">
                    <label htmlFor="contact-project-details" className="block text-xs font-mono uppercase tracking-wider text-[#172033] font-bold">
                      5. Project Description & Goals <span className="text-[#2563EB]">*</span>
                    </label>
                    <textarea
                      id="contact-project-details"
                      name="projectDetails"
                      rows="4"
                      value={formData.projectDetails}
                      onChange={handleInputChange}
                      aria-required="true"
                      aria-invalid={Boolean(errors.projectDetails)}
                      placeholder="Tell us about what you want to build or design, your business goals, target audience, and any special deliverables..."
                      className={`w-full px-4 py-3 rounded-xl bg-[#F8FAFC] text-[#172033] placeholder-[#64748B] border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB]/40 transition-colors resize-none ${
                        errors.projectDetails ? 'border-red-500' : 'border-white/10 focus:border-[#2563EB]'
                      }`}
                    />
                    {errors.projectDetails && (
                      <p className="text-[11px] text-red-400 font-mono mt-1" role="alert">{errors.projectDetails}</p>
                    )}
                  </div>

                  {/* Submission CTA */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-[#F8FAFC] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 shadow-xl shadow-[#2563EB]/20 disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-[#F8FAFC] border-t-transparent rounded-full animate-spin" />
                          <span>Preparing Your Brief...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Project Inquiry</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] font-mono text-[#64748B] text-center pt-2">
                    🔒 Strict client confidentiality. Direct designer & developer review.
                  </p>

                </form>
              ) : (
                /* Honest & Functional Submission Confirmation Flow */
                <div className="py-8 space-y-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#2563EB]/20 border border-[#2563EB] text-[#2563EB] flex items-center justify-center mx-auto shadow-xl">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display font-black text-2xl sm:text-3xl text-[#172033]">
                      Inquiry Prepared Successfully!
                    </h3>
                    <p className="text-sm text-[#64748B] max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-[#172033]">{submittedData?.name}</strong>. Your project brief has been structured. To ensure instant delivery without relying on unverified mail servers, choose your preferred sending method below:
                    </p>
                  </div>

                  {/* Direct Transmission Action Buttons */}
                  <div className="pt-2 space-y-3 max-w-md mx-auto">
                    <a
                      href={generateWhatsAppUrl(submittedData)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-6 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send Direct via WhatsApp (Instant)</span>
                    </a>

                    <a
                      href={generateMailtoUrl(submittedData)}
                      className="w-full py-3.5 px-6 rounded-full bg-[#F8FAFC] border border-white/20 hover:border-[#2563EB] text-[#172033] hover:text-[#2563EB] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send via Default Email App</span>
                    </a>
                  </div>

                  {/* Summary of what was recorded */}
                  <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-white/10 text-left text-xs font-mono space-y-2 text-[#64748B] max-w-md mx-auto">
                    <div className="text-[10px] uppercase text-[#2563EB] font-bold pb-1 border-b border-white/10">
                      Inquiry Summary
                    </div>
                    <div><strong>Services:</strong> {submittedData?.selectedServices.join(', ')}</div>
                    <div><strong>Budget:</strong> {submittedData?.budget}</div>
                    <div><strong>Timeline:</strong> {submittedData?.timeline}</div>
                    <div><strong>Email:</strong> {submittedData?.email}</div>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={handleReset}
                      className="text-xs font-mono text-[#64748B] hover:text-[#172033] underline cursor-pointer"
                    >
                      Submit Another Project Inquiry
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* Right Column: Studio Contact Details & Assurance (Cols 8-12) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Studio Info Card */}
            <div className="p-8 rounded-3xl bg-[#FFFFFF] border border-white/10 space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#2563EB] font-bold">
                  Direct Studio Access
                </span>
                <h3 className="font-display font-bold text-2xl text-[#172033]">
                  Riddhi Print Studio
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  {studioInfo.positioning}
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-white/10 text-xs sm:text-sm font-mono text-[#64748B]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-[#2563EB] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase text-[#64748B]">Direct Email</div>
                    <a href={`mailto:${studioInfo.email}`} className="text-[#172033] hover:text-[#2563EB] transition-colors">
                      {studioInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-[#2563EB] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase text-[#64748B]">WhatsApp & Phone</div>
                    <a href={studioInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-[#172033] hover:text-[#2563EB] transition-colors">
                      {studioInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-[#2563EB] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase text-[#64748B]">Location & Reach</div>
                    <span className="text-[#172033]">{studioInfo.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-[#2563EB] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase text-[#64748B]">Availability</div>
                    <span className="text-[#2563EB]">{studioInfo.availability}</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="pt-4 border-t border-white/10">
                <a
                  href={studioInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono uppercase text-[#172033] flex items-center justify-between transition-colors group"
                >
                  <span className="flex items-center gap-2">
                    <MessageSquare className="w-3.5 h-3.5 text-[#2563EB]" />
                    <span>Quick Chat on WhatsApp</span>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#2563EB] transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Response Time & Guarantee Pill */}
            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-white/10 space-y-3 text-xs text-[#64748B]">
              <div className="flex items-center gap-2 text-[#2563EB] font-bold font-mono uppercase">
                <ShieldCheck className="w-4 h-4" />
                <span>Our Inquiry Guarantee</span>
              </div>
              <p className="leading-relaxed">
                We review every project request thoroughly. No automated template spam — you receive a considered creative assessment and realistic timeline directly from our lead team.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
