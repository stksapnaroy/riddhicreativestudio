import React, { useState } from 'react';
import { Mail, MessageSquare, X } from 'lucide-react';
import { sendEmailLink, sendPhoneOtp, verifyPhoneOtp } from '../../services/portalApi';
import { isSupabaseConfigured } from '../../lib/supabase';

export default function AuthModal({ isOpen, onClose }) {
  const [mode, setMode] = useState('email');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [sent, setSent] = useState(false);
  const [message, setMessage] = useState('');
  if (!isOpen) return null;
  const submit = async (event) => {
    event.preventDefault(); setMessage('');
    try {
      if (mode === 'email') { await sendEmailLink(email); setMessage('Check your inbox and open the secure sign-in link.'); }
      else if (sent) { await verifyPhoneOtp(phone, otp); onClose(); }
      else { await sendPhoneOtp(phone); setSent(true); setMessage('OTP sent. Enter it below to sign in.'); }
    } catch (error) { setMessage(error.message || 'Unable to send login code.'); }
  };
  return <div className="fixed inset-0 z-[70] flex items-center justify-center p-4"><button onClick={onClose} className="absolute inset-0 bg-black/70" aria-label="Close login" /><form onSubmit={submit} className="relative w-full max-w-md bg-[#FAF9F5] rounded-3xl p-6 sm:p-8 shadow-2xl"><button type="button" onClick={onClose} className="absolute top-4 right-4 text-neutral-500"><X /></button><p className="text-xs font-mono font-bold text-[#2546FF] uppercase">Secure client portal</p><h2 className="font-display font-black text-2xl mt-1">Log in to your workspace</h2><p className="text-sm text-neutral-600 mt-2">Use your email or WhatsApp number to see and edit your own requests and bills.</p>{!isSupabaseConfigured ? <p className="mt-5 p-3 rounded-xl bg-amber-50 text-amber-800 text-xs">Portal setup is pending. Add the Supabase keys in <code>.env.local</code> first.</p> : <><div className="flex gap-2 mt-6"><button type="button" onClick={() => { setMode('email'); setSent(false); }} className={`flex-1 py-2 rounded-lg text-xs font-bold ${mode === 'email' ? 'bg-[#0D0E11] text-white' : 'bg-white border'}`}><Mail className="inline w-3.5 h-3.5 mr-1" />Email</button><button type="button" onClick={() => { setMode('phone'); setSent(false); }} className={`flex-1 py-2 rounded-lg text-xs font-bold ${mode === 'phone' ? 'bg-[#0D0E11] text-white' : 'bg-white border'}`}><MessageSquare className="inline w-3.5 h-3.5 mr-1" />WhatsApp number</button></div>{mode === 'email' ? <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@email.com" className="mt-4 w-full border rounded-xl px-3 py-3 text-sm" /> : <><input required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91 98765 43210" className="mt-4 w-full border rounded-xl px-3 py-3 text-sm" />{sent && <input required value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="6-digit OTP" className="mt-3 w-full border rounded-xl px-3 py-3 text-sm" />}</>}<button className="mt-4 w-full py-3 rounded-xl bg-[#2546FF] text-white text-xs font-bold">{mode === 'phone' && sent ? 'Verify & log in' : mode === 'phone' ? 'Send OTP' : 'Send secure email link'}</button>{message && <p className="mt-3 text-xs text-neutral-600">{message}</p>}</>}</form></div>;
}
