import React, { useState, useRef } from 'react';
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
  UploadCloud, 
  CheckCircle2, 
  AlertCircle, 
  FileText, 
  X, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { InstagramIcon, LinkedinIcon, DribbbleIcon, BehanceIcon } from '../ui/SocialIcons';

export default function ContactSection({ prefilledService = "" }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: prefilledService || "",
    projectDetails: "",
    budget: "",
    timeline: ""
  });

  const [attachedFile, setAttachedFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const fileInputRef = useRef(null);

  // Update service if prefilledService prop changes
  React.useEffect(() => {
    if (prefilledService) {
      setFormData(prev => ({ ...prev, service: prefilledService }));
    }
  }, [prefilledService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleBudgetSelect = (b) => {
    setFormData(prev => ({ ...prev, budget: b }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      // Limit to 25MB check
      if (file.size > 25 * 1024 * 1024) {
        alert("File size exceeds 25MB limit.");
        return;
      }
      setAttachedFile({
        name: file.name,
        size: (file.size / (1024 * 1024)).toFixed(2) + " MB"
      });
    }
  };

  const handleRemoveFile = (e) => {
    e.stopPropagation();
    setAttachedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.service) newErrors.service = "Please select a service.";
    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = "Please provide brief details about your project.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API integration (integration-ready)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      projectDetails: "",
      budget: "",
      timeline: ""
    });
    setAttachedFile(null);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#FAF9F5] border-t border-[#E7E5DE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#2546FF] font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#2546FF]" />
            Project Inquiries
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#0D0E11] tracking-tight">
            Let's Create Something Together.
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg font-normal leading-relaxed">
            Tell us what you're working on and let's discuss how Riddhi Creative Studio can help bring your vision to life.
          </p>
        </div>

        {/* 2-Column Layout: Form & Contact Information */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left / Main Column: Contact Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#E7E5DE] p-6 sm:p-10 shadow-xs">
            
            {isSubmitted ? (
              /* Success Confirmation Card */
              <div className="py-12 px-4 text-center space-y-5 animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-[#0D0E11]">
                  Inquiry Received!
                </h3>
                <p className="text-neutral-600 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to Riddhi Creative Studio, <span className="font-semibold text-neutral-900">{formData.name}</span>. 
                  Our team will review your project requirements for <span className="font-semibold text-[#2546FF]">{formData.service}</span> and reply within 24 business hours.
                </p>

                <div className="p-4 rounded-xl bg-[#F3F2EC] border border-[#E7E5DE] max-w-md mx-auto text-left text-xs text-neutral-600 space-y-1 font-mono">
                  <div><span className="font-bold">Contact Email:</span> {formData.email}</div>
                  {formData.budget && <div><span className="font-bold">Budget Tier:</span> {formData.budget}</div>}
                  {attachedFile && <div><span className="font-bold">Attachment:</span> {attachedFile.name}</div>}
                </div>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-full bg-[#0D0E11] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#2546FF] transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              /* Actual Inquiry Form */
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-neutral-700 font-semibold block">
                      Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Maya Patel"
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none ${
                        errors.name 
                          ? 'border-rose-500 bg-rose-50/20 focus:border-rose-600' 
                          : 'border-[#E7E5DE] focus:border-[#2546FF] focus:ring-2 focus:ring-[#2546FF]/10'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-rose-500 flex items-center gap-1 font-mono mt-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-neutral-700 font-semibold block">
                      Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none ${
                        errors.email 
                          ? 'border-rose-500 bg-rose-50/20 focus:border-rose-600' 
                          : 'border-[#E7E5DE] focus:border-[#2546FF] focus:ring-2 focus:ring-[#2546FF]/10'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-500 flex items-center gap-1 font-mono mt-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone & Company Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-neutral-700 font-semibold block">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl border border-[#E7E5DE] text-sm focus:outline-none focus:border-[#2546FF] focus:ring-2 focus:ring-[#2546FF]/10"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-neutral-700 font-semibold block">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Bloom Labs"
                      className="w-full px-4 py-3 rounded-xl border border-[#E7E5DE] text-sm focus:outline-none focus:border-[#2546FF] focus:ring-2 focus:ring-[#2546FF]/10"
                    />
                  </div>
                </div>

                {/* Service Required Dropdown */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-700 font-semibold block">
                    Service Required <span className="text-rose-500">*</span>
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors bg-white focus:outline-none ${
                      errors.service 
                        ? 'border-rose-500 bg-rose-50/20' 
                        : 'border-[#E7E5DE] focus:border-[#2546FF] focus:ring-2 focus:ring-[#2546FF]/10'
                    }`}
                  >
                    <option value="">Select a Creative Service</option>
                    {serviceOptions.map((svc, i) => (
                      <option key={i} value={svc}>{svc}</option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="text-xs text-rose-500 flex items-center gap-1 font-mono mt-1">
                      <AlertCircle className="w-3 h-3" /> {errors.service}
                    </p>
                  )}
                </div>

                {/* Project Details Textarea */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-700 font-semibold block">
                    Project Details <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    name="projectDetails"
                    value={formData.projectDetails}
                    onChange={handleChange}
                    placeholder="Tell us about your brand, goals, target audience, deliverables, or inspiration..."
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none ${
                      errors.projectDetails 
                        ? 'border-rose-500 bg-rose-50/20' 
                        : 'border-[#E7E5DE] focus:border-[#2546FF] focus:ring-2 focus:ring-[#2546FF]/10'
                    }`}
                  />
                  {errors.projectDetails && (
                    <p className="text-xs text-rose-500 flex items-center gap-1 font-mono mt-1">
                      <AlertCircle className="w-3 h-3" /> {errors.projectDetails}
                    </p>
                  )}
                </div>

                {/* Budget Range Selector */}
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-700 font-semibold block">
                    Budget Range
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {budgetOptions.map((opt, i) => {
                      const isSelected = formData.budget === opt;
                      return (
                        <button
                          key={i}
                          type="button"
                          onClick={() => handleBudgetSelect(opt)}
                          className={`px-3.5 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                            isSelected
                              ? 'bg-[#2546FF] border-[#2546FF] text-white shadow-xs font-semibold'
                              : 'bg-neutral-50 border-[#E7E5DE] text-neutral-700 hover:border-neutral-400'
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Preferred Timeline Dropdown */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-700 font-semibold block">
                    Preferred Timeline
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#E7E5DE] text-sm bg-white focus:outline-none focus:border-[#2546FF] focus:ring-2 focus:ring-[#2546FF]/10"
                  >
                    <option value="">Select Timeline</option>
                    {timelineOptions.map((tl, i) => (
                      <option key={i} value={tl}>{tl}</option>
                    ))}
                  </select>
                </div>

                {/* File Upload Drag & Drop Area */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-700 font-semibold block">
                    Attach Brand Brief or Reference Files (Optional)
                  </label>
                  
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept=".pdf,.png,.jpg,.jpeg,.zip,.ai,.fig"
                    className="hidden"
                  />

                  {attachedFile ? (
                    <div className="p-3.5 rounded-xl bg-[#F3F2EC] border border-[#E7E5DE] flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <FileText className="w-5 h-5 text-[#2546FF]" />
                        <div>
                          <div className="text-xs font-bold text-neutral-900 truncate max-w-xs">{attachedFile.name}</div>
                          <div className="text-[10px] text-neutral-500 font-mono">{attachedFile.size}</div>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={handleRemoveFile}
                        className="p-1 rounded-full hover:bg-neutral-300 text-neutral-500"
                        title="Remove file"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      className="border-2 border-dashed border-[#DCDAD2] hover:border-[#2546FF] rounded-xl p-6 text-center cursor-pointer transition-colors bg-[#FAF9F5]/60 hover:bg-white"
                    >
                      <UploadCloud className="w-8 h-8 text-neutral-400 mx-auto mb-2" />
                      <div className="text-xs font-semibold text-neutral-800">
                        Click to upload or drag and drop
                      </div>
                      <div className="text-[10px] text-neutral-500 font-mono mt-1">
                        PDF, AI, Figma, PNG, JPG, or ZIP (Max 25MB)
                      </div>
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-8 rounded-full bg-[#0D0E11] hover:bg-[#2546FF] text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-blue-500/20 flex items-center justify-center gap-2 group disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Processing Inquiry...
                      </span>
                    ) : (
                      <>
                        <span>Send Project Inquiry</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-center text-neutral-400 font-mono mt-3">
                    We respect your privacy. No spam. Integration-ready inquiry pipeline.
                  </p>
                </div>

              </form>
            )}

          </div>

          {/* Right Column: Contact Information Block */}
          <div className="lg:col-span-5 space-y-8">

            {/* Studio Info Card */}
            <div className="p-8 rounded-2xl bg-white border border-[#E7E5DE] space-y-6">
              <div className="space-y-2">
                <div className="text-xs font-mono uppercase tracking-widest text-[#2546FF] font-semibold">
                  Direct Inquiries
                </div>
                <h3 className="font-display font-bold text-2xl text-[#0D0E11]">
                  Contact Information
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Have a quick question or prefer to connect directly? Feel free to reach out via email or phone.
                </p>
              </div>

              <div className="space-y-4 pt-2 border-t border-neutral-100 text-sm">
                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-800 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase text-neutral-400">Email Address</div>
                    <a 
                      href={`mailto:${studioInfo.email}`} 
                      className="font-semibold text-neutral-900 hover:text-[#2546FF] transition-colors break-all"
                    >
                      {studioInfo.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-800 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase text-neutral-400">Phone / WhatsApp</div>
                    <div className="font-semibold text-neutral-900">
                      {studioInfo.phone}
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-800 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase text-neutral-400">Location</div>
                    <div className="font-semibold text-neutral-900">
                      {studioInfo.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-neutral-100 space-y-3">
                <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-semibold">
                  Studio Social Profiles
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {studioInfo.socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-neutral-50 hover:bg-neutral-100 border border-[#E7E5DE] flex items-center justify-between text-xs font-semibold text-neutral-800 hover:text-[#2546FF] transition-all"
                    >
                      <span>{social.name}</span>
                      <ExternalLink className="w-3 h-3 text-neutral-400" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Studio Availability Banner */}
            <div className="p-6 rounded-2xl bg-[#0D0E11] text-white space-y-3 border border-neutral-800">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>STUDIO BOOKING STATUS</span>
              </div>
              <div className="font-display font-bold text-lg text-white">
                {studioInfo.availability}
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                We take on a limited number of clients per quarter to ensure dedicated creative attention and rapid turnarounds.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
