import React, { useState, useEffect } from 'react';
import { X, ArrowRight, CheckCircle2, Sparkles, MessageSquare, Mail } from 'lucide-react';
import { serviceOptions, budgetOptions, studioInfo } from '../../data/companyData';

export default function QuoteDrawer({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Website Design & Development',
    budget: budgetOptions[1] || '₹15,000 – ₹35,000 / $200 – $500',
    details: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      service: 'Website Design & Development',
      budget: budgetOptions[1],
      details: ''
    });
    onClose();
  };

  const whatsAppUrl = `https://wa.me/918585959480?text=${encodeURIComponent(
    `*Fast Quote Request - Riddhi Print Studio*\n\n` +
    `*Name:* ${formData.name}\n` +
    `*Email:* ${formData.email}\n` +
    `*Service:* ${formData.service}\n` +
    `*Budget:* ${formData.budget}\n` +
    `*Details:* ${formData.details || 'Quick quote request'}`
  )}`;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#F8FAFC] border-l border-white/10 shadow-2xl p-6 sm:p-8 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300 text-[#172033]">
          
          <div>
            {/* Header */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB]" />
                <span className="font-display font-bold text-base text-[#172033]">
                  Fast Project Quote
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full hover:bg-white/10 text-[#64748B] hover:text-[#172033] transition-colors cursor-pointer"
                aria-label="Close quote drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            {submitted ? (
              <div className="py-12 text-center space-y-5 animate-in fade-in zoom-in duration-300">
                <div className="w-14 h-14 rounded-full bg-[#2563EB]/20 border border-[#2563EB] text-[#2563EB] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-display font-bold text-2xl text-[#172033]">
                  Quote Brief Formatted!
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  Thank you, <span className="font-semibold text-[#172033]">{formData.name}</span>. To ensure instant delivery to our creative director, send it directly via WhatsApp:
                </p>

                <div className="pt-2 space-y-3">
                  <a
                    href={whatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </a>

                  <button
                    onClick={handleReset}
                    className="w-full py-2.5 text-xs font-mono text-[#64748B] hover:text-[#172033] underline cursor-pointer"
                  >
                    Done & Close
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="py-6 space-y-5">
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Fill in your basic project requirements below and we will prepare a milestone estimate.
                </p>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono uppercase text-[#64748B] font-semibold">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Alex Morgan"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FFFFFF] border border-white/10 text-xs sm:text-sm text-[#172033] focus:outline-none focus:border-[#2563EB]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono uppercase text-[#64748B] font-semibold">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FFFFFF] border border-white/10 text-xs sm:text-sm text-[#172033] focus:outline-none focus:border-[#2563EB]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono uppercase text-[#64748B] font-semibold">Core Service</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FFFFFF] border border-white/10 text-xs sm:text-sm text-[#172033] focus:outline-none focus:border-[#2563EB]"
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#F8FAFC] text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono uppercase text-[#64748B] font-semibold">Estimated Budget</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FFFFFF] border border-white/10 text-xs sm:text-sm text-[#172033] focus:outline-none focus:border-[#2563EB]"
                  >
                    {budgetOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#F8FAFC] text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono uppercase text-[#64748B] font-semibold">Project Notes</label>
                  <textarea
                    rows="3"
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    placeholder="Briefly describe your requirements..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FFFFFF] border border-white/10 text-xs sm:text-sm text-[#172033] focus:outline-none focus:border-[#2563EB] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-[#F8FAFC] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#2563EB]/20 transition-all cursor-pointer"
                >
                  {isSubmitting ? "Processing..." : "Generate Quote Brief →"}
                </button>
              </form>
            )}
          </div>

          {/* Footer note */}
          <div className="pt-4 border-t border-white/10 text-xs font-mono text-[#64748B]">
            Need immediate support? WhatsApp: <a href={studioInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-[#2563EB] hover:underline">{studioInfo.phone}</a>
          </div>

        </div>
      </div>
    </div>
  );
}
