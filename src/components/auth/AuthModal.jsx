import React, { useState } from 'react';
import { ArrowRight, Mail, MessageSquare, Palette, X } from 'lucide-react';
import { sendEmailOtp, sendPhoneOtp, verifyEmailOtp, verifyPhoneOtp } from '../../services/portalApi';
import { isSupabaseConfigured } from '../../lib/supabase';

export default function AuthModal({ isOpen, onClose }) {
  const [mode, setMode] = useState('email');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [sent, setSent] = useState(false);
  const [message, setMessage] = useState('');
  const switchMode = (next) => { setMode(next); setSent(false); setOtp(''); setMessage(''); };
  if (!isOpen) return null;

  const submit = async (event) => {
    event.preventDefault(); setMessage('');
    try {
      if (mode === 'email' && !sent) { await sendEmailOtp(email); setSent(true); setMessage('A 6-digit code is on its way to your inbox.'); }
      else if (mode === 'email') { await verifyEmailOtp(email, otp); onClose(); }
      else if (!sent) { await sendPhoneOtp(phone); setSent(true); setMessage('A 6-digit code has been sent to your phone.'); }
      else { await verifyPhoneOtp(phone, otp); onClose(); }
    } catch (error) { setMessage(error.message || 'We could not verify that code. Please try again.'); }
  };

  return <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
    <button onClick={onClose} className="absolute inset-0 bg-[#0D0E11]/75 backdrop-blur-sm" aria-label="Close login" />
    <form onSubmit={submit} className="relative overflow-hidden w-full max-w-2xl rounded-[28px] bg-[#FAF9F5] shadow-2xl grid sm:grid-cols-[.85fr_1.15fr]">
      <button type="button" onClick={onClose} className="absolute z-10 top-4 right-4 rounded-full p-1.5 bg-white/80 text-neutral-500 hover:text-black"><X className="w-4 h-4" /></button>
      <aside className="relative min-h-52 sm:min-h-full bg-[#2546FF] text-white p-7 sm:p-8 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="relative"><div className="w-10 h-10 rounded-xl bg-white text-[#2546FF] grid place-items-center shadow-lg"><Palette className="w-5 h-5" /></div><p className="mt-8 text-[10px] font-mono tracking-[.22em] uppercase text-blue-100">Riddhi Creative Studio</p><h2 className="font-display font-black text-3xl leading-none mt-2">Your ideas.<br />In progress.</h2><p className="mt-4 text-sm text-blue-100 leading-relaxed">Keep your briefs, updates and bills in one creative workspace.</p></div>
        <div className="absolute -bottom-8 -right-6 w-36 h-36 rounded-full border-[18px] border-white/20" />
      </aside>
      <section className="p-7 sm:p-8"><p className="text-[10px] font-mono font-bold tracking-[.18em] uppercase text-[#2546FF]">Client portal access</p><h3 className="font-display font-black text-2xl text-[#0D0E11] mt-1">Let’s pick up where<br />your project left off.</h3>{!isSupabaseConfigured ? <p className="mt-5 p-3 rounded-xl bg-amber-50 text-amber-800 text-xs">Portal setup is pending. Add the Supabase keys in <code>.env.local</code> first.</p> : <><div className="flex gap-2 mt-6 p-1 rounded-xl bg-neutral-100"><button type="button" onClick={() => switchMode('email')} className={`flex-1 py-2 rounded-lg text-xs font-bold transition-colors ${mode === 'email' ? 'bg-white shadow-sm text-[#2546FF]' : 'text-neutral-500'}`}><Mail className="inline w-3.5 h-3.5 mr-1.5" />Email</button><button type="button" onClick={() => switchMode('phone')} className={`flex-1 py-2 rounded-lg text-xs font-bold transition-colors ${mode === 'phone' ? 'bg-white shadow-sm text-[#2546FF]' : 'text-neutral-500'}`}><MessageSquare className="inline w-3.5 h-3.5 mr-1.5" />Phone</button></div><label className="block mt-5 text-xs font-bold text-neutral-700">{mode === 'email' ? 'Your email address' : 'Your WhatsApp number'}</label><input required type={mode === 'email' ? 'email' : 'tel'} value={mode === 'email' ? email : phone} onChange={(e) => mode === 'email' ? setEmail(e.target.value) : setPhone(e.target.value)} placeholder={mode === 'email' ? 'hello@yourbrand.com' : '+91 98765 43210'} className="mt-2 w-full rounded-xl border border-[#E7E5DE] bg-white px-3.5 py-3 text-sm outline-none focus:border-[#2546FF] focus:ring-2 focus:ring-blue-100" />{sent && <><label className="block mt-4 text-xs font-bold text-neutral-700">6-digit verification code</label><input required inputMode="numeric" maxLength="6" value={otp} onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))} placeholder="• • • • • •" className="mt-2 w-full rounded-xl border border-[#2546FF] bg-white px-3.5 py-3 text-lg tracking-[.45em] outline-none" /></>}<button className="mt-5 w-full py-3.5 rounded-xl bg-[#0D0E11] hover:bg-[#2546FF] text-white text-xs font-bold transition-colors">{sent ? 'Verify & enter portal' : 'Send my verification code'} <ArrowRight className="inline w-4 h-4 ml-1" /></button>{message && <p className="mt-3 text-xs text-neutral-600 leading-relaxed">{message}</p>}<p className="mt-4 text-[11px] text-neutral-400">No password to remember. Your project space stays linked to your verified contact.</p></>}</section>
    </form>
  </div>;
}
