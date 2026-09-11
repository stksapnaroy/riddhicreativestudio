import React from 'react';

export function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

export function LinkedinIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect width="4" height="12" x="2" y="9"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

export function DribbbleIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"/>
      <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"/>
      <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"/>
    </svg>
  );
}

export function BehanceIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h4.5a2.5 2.5 0 0 1 0 5H3z"/>
      <path d="M3 13h5a2.5 2.5 0 0 1 0 5H3z"/>
      <line x1="3" x2="3" y1="5" y2="19"/>
      <path d="M14 13h7a3.5 3.5 0 0 1-7 0 3.5 3.5 0 0 1 7 0"/>
      <line x1="15" x2="20" y1="8" y2="8"/>
    </svg>
  );
}
