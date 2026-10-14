import React, { useState } from 'react';
import { faqData, studioInfo } from '../../data/companyData';
import { ChevronDown, Plus, Minus, MessageSquare, ArrowRight } from 'lucide-react';

export default function FAQSection({ onOpenQuote }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faqs" className="py-24 sm:py-32 bg-[#F8FAFC] border-b border-white/10 relative scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#2563EB] font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
            Frequently Asked Questions
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-[#172033] tracking-tight">
            Everything You Need to Know
          </h2>
          <p className="text-[#64748B] text-base font-normal leading-relaxed">
            Clear, transparent answers about our creative workflows, print production support, source file handovers, and project timelines.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen 
                    ? 'bg-[#FFFFFF] border-[#2563EB]/40 shadow-lg' 
                    : 'bg-[#FFFFFF]/60 border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-base sm:text-lg text-[#172033]">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'bg-[#2563EB] text-[#F8FAFC] rotate-180' : 'bg-white/5 text-[#64748B]'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-7 sm:px-7 text-sm sm:text-base text-[#64748B] leading-relaxed border-t border-white/5 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Quick Help Card */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#FFFFFF] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <div className="font-display font-bold text-lg text-[#172033]">
              Have a question not listed here?
            </div>
            <div className="text-xs text-[#64748B]">
              Reach out directly on WhatsApp or drop us an email brief for a quick response.
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={studioInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-xs font-mono uppercase text-[#172033] transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>Ask on WhatsApp</span>
            </a>
            <button
              onClick={onOpenQuote}
              className="px-5 py-2.5 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-[#F8FAFC] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Start an Inquiry
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
