import React, { useState, useEffect } from 'react';
import { X, ArrowRight, CheckCircle2, Sparkles, Send } from 'lucide-react';
import { serviceOptions, budgetOptions, studioInfo } from '../../data/companyData';

export default function QuoteDrawer({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Branding',
    budget: '₹25,000 – ₹50,000',
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
    }, 700);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      service: 'Branding',
      budget: '₹25,000 – ₹50,000',
      details: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF9F5] border-l border-[#E7E5DE] shadow-2xl p-6 sm:p-8 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300">
          
          <div>
            {/* Header */}
            <div className="flex items-center justify-between pb-6 border-b border-[#E7E5DE]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2546FF]" />
                <span className="font-display font-bold text-base text-[#0D0E11]">
                  Project Quote Request
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full hover:bg-neutral-200 text-neutral-500 hover:text-black transition-colors"
                aria-label="Close quote drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            {submitted ? (
              <div className="py-16 text-center space-y-4 animate-in fade-in zoom-in duration-300">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-display font-bold text-2xl text-neutral-900">
                  Quote Request Sent!
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Thank you, <span className="font-semibold">{formData.name}</span>. We will analyze your scope for <span className="font-semibold text-[#2546FF]">{formData.service}</span> and deliver an estimate within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-4 px-6 py-2.5 rounded-full bg-[#0D0E11] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#2546FF] transition-colors"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="py-6 space-y-5">
                <div className="space-y-1">
                  <h4 className="font-display font-bold text-xl text-neutral-900">
                    Get a Tailored Estimate
                  </h4>
                  <p className="text-xs text-neutral-500">
                    Tell us what you need and our lead creative will prepare a custom proposal.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-700 font-semibold block">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Maya Patel"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E7E5DE] text-sm bg-white focus:outline-none focus:border-[#2546FF] focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-700 font-semibold block">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E7E5DE] text-sm bg-white focus:outline-none focus:border-[#2546FF] focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-700 font-semibold block">
                    Primary Service Needed
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E7E5DE] text-sm bg-white focus:outline-none focus:border-[#2546FF]"
                  >
                    {serviceOptions.map((svc) => (
                      <option key={svc} value={svc}>{svc}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-700 font-semibold block">
                    Approximate Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E7E5DE] text-sm bg-white focus:outline-none focus:border-[#2546FF]"
                  >
                    {budgetOptions.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-700 font-semibold block">
                    Project Details
                  </label>
                  <textarea
                    rows={3}
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    placeholder="Briefly describe what you're looking to build or design..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E7E5DE] text-sm bg-white focus:outline-none focus:border-[#2546FF]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-full bg-[#2546FF] hover:bg-[#1837E8] text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? 'Submitting...' : 'Request Project Quote →'}
                </button>
              </form>
            )}
          </div>

          {/* Drawer Footer */}
          <div className="pt-6 border-t border-[#E7E5DE] text-xs text-neutral-500 font-mono">
            <div>Direct Contact: {studioInfo.email}</div>
            <div className="text-[10px] text-neutral-400 mt-1">
              Riddhi Creative Studio • India
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
