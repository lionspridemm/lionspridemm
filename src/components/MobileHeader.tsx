"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/officers", label: "Officers" },
  { href: "/documents", label: "Documents" },
  { href: "/events", label: "Events" },
  { href: "/join", label: "Join Us" },
  // No Contact here — you have the big Contact button below
];

export default function MobileHeader() {
  const [open, setOpen] = useState(false);

  const handleNav = () => setOpen(false);

  return (
    <div className="fixed left-0 top-0 z-20 w-full border-b border-[--lp-border] bg-black/70 supports-[backdrop-filter]:backdrop-blur md:hidden">
      <div className="mx-auto max-w-6xl px-4 py-3 text-white">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <span className="text-base font-semibold tracking-wide">Lion’s Pride MM</span>

          {/* Hamburger */}
          <button
            className="inline-flex items-center justify-center rounded-xl p-2 text-[--lp-ice] hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[--lp-ice]"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Big primary CTA under title (always visible) */}
        <div className="mt-3">
          <Link
            href="/contact"
            className="btn-ice inline-flex w-full items-center justify-center gap-2"
            aria-label="Contact Lion’s Pride MM"
            onClick={handleNav}
          >
            <Phone className="h-4 w-4" />
            Contact
          </Link>
        </div>
      </div>

      {/* Dropdown panel */}
      {open && (
        <div className="border-t border-[--lp-border] bg-[var(--lp-card)]/95 backdrop-blur">
          <nav className="mx-auto max-w-6xl px-4 py-3">
            <ul className="grid gap-2 text-sm">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="block rounded-lg px-3 py-2 hover:bg-white/5"
                    onClick={handleNav}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}
