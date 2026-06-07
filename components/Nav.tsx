"use client";

import { useState } from "react";

const links = [
  { label: "What I Do",  href: "#services"     },
  { label: "Work",       href: "#work"          },
  { label: "Experience", href: "#experience"    },
  { label: "Highlights", href: "#achievements"  },
  { label: "Contact",    href: "#contact"       },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-stone-100">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-14">

        <a href="#" className="font-serif text-base text-stone-900 shrink-0 tracking-wide">Ayesha Patel</a>

        {/* Desktop */}
        <nav className="hidden sm:flex items-center gap-6 text-sm text-stone-400">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-stone-900 transition-colors whitespace-nowrap">
              {l.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden p-1 text-stone-500 hover:text-stone-900 transition-colors"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>

      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="sm:hidden border-t border-stone-100 bg-white/95 backdrop-blur-sm">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3.5 text-sm text-stone-600 hover:text-stone-900 hover:bg-stone-50 transition-colors border-b border-stone-50 last:border-0"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
