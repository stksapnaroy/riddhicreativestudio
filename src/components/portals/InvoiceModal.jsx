import React from 'react';
import { X, Printer, Download, CheckCircle2, Clock, AlertCircle, MessageSquare } from 'lucide-react';
import { studioInfo } from '../../data/companyData';

export default function InvoiceModal({ invoice, isOpen, onClose }) {
  if (!isOpen || !invoice) return null;

  const handlePrint = () => {
    window.print();
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Paid':
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
            <CheckCircle2 className="w-3.5 h-3.5" /> PAID
          </span>
        );
      case 'Pending':
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-100 text-amber-800 border border-amber-300">
            <Clock className="w-3.5 h-3.5" /> PAYMENT PENDING
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono font-bold bg-rose-100 text-rose-800 border border-rose-300">
            <AlertCircle className="w-3.5 h-3.5" /> PAYMENT DUE
          </span>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
      />

      <div className="relative min-h-screen px-4 py-8 sm:py-12 flex items-center justify-center pointer-events-none">
        <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-neutral-300 overflow-hidden pointer-events-auto text-neutral-900">
          
          {/* Top Control Bar (Hidden on print) */}
          <div className="print:hidden px-6 py-4 bg-neutral-900 text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-neutral-400">Tax Invoice Slip</span>
              <span className="font-bold text-sm text-white">{invoice.id}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="px-3.5 py-1.5 rounded-lg bg-white text-black text-xs font-semibold flex items-center gap-1.5 hover:bg-neutral-200 transition-colors"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-white"
                aria-label="Close invoice"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Invoice Body */}
          <div className="p-8 sm:p-12 space-y-8 bg-white">
            
            {/* Header: Studio & Invoice Details */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 pb-8 border-b-2 border-neutral-900">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#0D0E11] text-white flex items-center justify-center font-display font-black text-sm">
                    R
                  </div>
                  <span className="font-display font-black text-xl tracking-tight text-neutral-900">
                    Riddhi Creative Studio
                  </span>
                </div>
                <div className="text-xs text-neutral-500 font-mono pt-1">
                  Creative Design • Print & Digital Agency
                </div>
                <div className="text-xs text-neutral-600 font-mono">
                  Email: {studioInfo.email}
                </div>
                <div className="text-xs text-neutral-600 font-mono">
                  WhatsApp / Phone: {studioInfo.phone}
                </div>
              </div>

              <div className="sm:text-right space-y-1.5">
                <div className="text-xs font-mono uppercase text-neutral-400 font-bold">TAX INVOICE</div>
                <div className="font-mono font-bold text-xl text-neutral-900">{invoice.id}</div>
                <div>{getStatusBadge(invoice.status)}</div>
                <div className="text-xs text-neutral-500 font-mono pt-1">
                  Issue Date: <span className="font-semibold text-neutral-800">{invoice.issueDate}</span>
                </div>
                {invoice.dueDate && (
                  <div className="text-xs text-neutral-500 font-mono">
                    Due Date: <span className="font-semibold text-neutral-800">{invoice.dueDate}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Billed To & Project Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-5 rounded-xl bg-neutral-50 border border-neutral-200">
              <div className="space-y-1">
                <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-bold">
                  Billed To (Client):
                </div>
                <div className="font-display font-bold text-base text-neutral-900">
                  {invoice.clientName}
                </div>
                {invoice.company && (
                  <div className="text-xs text-neutral-700 font-medium">{invoice.company}</div>
                )}
                <div className="text-xs text-neutral-500 font-mono">{invoice.clientPhone}</div>
                <div className="text-xs text-neutral-500 font-mono">{invoice.clientEmail}</div>
              </div>

              <div className="space-y-1 sm:text-right">
                <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-bold">
                  Project & Discipline:
                </div>
                <div className="font-display font-bold text-sm text-[#2546FF]">
                  {invoice.projectTitle}
                </div>
                <div className="text-xs text-neutral-600 font-mono">
                  Service: {invoice.service}
                </div>
                <div className="text-xs text-neutral-500 font-mono">
                  Ref Project ID: {invoice.projectId}
                </div>
              </div>
            </div>

            {/* Line Items Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b-2 border-neutral-900 font-mono uppercase tracking-wider text-neutral-500">
                    <th className="py-2.5 font-bold">#</th>
                    <th className="py-2.5 font-bold">Service / Deliverable Description</th>
                    <th className="py-2.5 font-bold text-center">Qty</th>
                    <th className="py-2.5 font-bold text-right">Rate</th>
                    <th className="py-2.5 font-bold text-right">Amount (INR)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  {invoice.lineItems.map((item, idx) => (
                    <tr key={idx}>
                      <td className="py-3 font-mono text-neutral-400">{idx + 1}</td>
                      <td className="py-3 font-medium text-neutral-800">{item.description}</td>
                      <td className="py-3 font-mono text-center text-neutral-600">{item.qty || 1}</td>
                      <td className="py-3 font-mono text-right text-neutral-600">₹{item.rate.toLocaleString('en-IN')}</td>
                      <td className="py-3 font-mono font-bold text-right text-neutral-900">₹{item.amount.toLocaleString('en-IN')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Total Calculations */}
            <div className="border-t-2 border-neutral-900 pt-4 flex flex-col sm:flex-row justify-between gap-6 items-start">
              <div className="max-w-xs space-y-2 text-xs text-neutral-500 font-mono">
                <div className="font-bold text-neutral-800">Payment & Bank Details:</div>
                <div>UPI ID: <span className="text-neutral-900 font-bold">8585959480@upi</span></div>
                <div>Google Pay / PhonePe / Paytm: <span className="text-neutral-900 font-bold">+91 8585959480</span></div>
                {invoice.notes && (
                  <div className="pt-2 italic text-neutral-600">Note: {invoice.notes}</div>
                )}
              </div>

              <div className="w-full sm:w-64 space-y-2 text-xs font-mono">
                <div className="flex justify-between text-neutral-600">
                  <span>Subtotal:</span>
                  <span>₹{invoice.subtotal.toLocaleString('en-IN')}</span>
                </div>
                {invoice.tax > 0 && (
                  <div className="flex justify-between text-neutral-600">
                    <span>GST (18%):</span>
                    <span>₹{invoice.tax.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between text-base font-display font-black text-neutral-900 border-t-2 border-neutral-900 pt-2">
                  <span>Total Due:</span>
                  <span className="text-[#2546FF]">₹{invoice.total.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>

            {/* Bottom Signature / Footer */}
            <div className="pt-8 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
              <div>
                Authorized by Riddhi Creative Studio • India
              </div>
              <div>
                Thank you for choosing Riddhi Creative Studio!
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
