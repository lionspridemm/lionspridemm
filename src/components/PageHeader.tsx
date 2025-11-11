"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/officers", label: "Officers" },
  { href: "/documents", label: "Documents" },
  { href: "/events", label: "Events" },
  { href: "/join", label: "Join Us" },
  { href: "/contact", label: "Contact" }, // still used for mobile menu
];

export default function PageHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/55 border-b border-[--lp-border]">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Lion’s Pride MM"
            className="w-10 h-10 rounded-full ring-1 ring-[--lp-ice]/50"
          />
          <div className="leading-tight">
            <div className="font-black tracking-wide text-lg">Lion’s Pride MM (DEV)</div>
            <div className="text-xs prose-muted">Motorcycle Ministry</div>
          </div>
        </Link>

        {/* ===== DESKTOP NAV ===== */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {links
            .filter(({ label }) => label !== "Contact") // remove Contact from desktop links
            .map(({ href, label }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={
                    active
                      ? "text-[--lp-ice] font-semibold"
                      : "hover:text-[--lp-ice]"
                  }
                >
                  {label}
                </Link>
              );
            })}
          {/* Contact button remains */}
          <Link href="/contact" className="btn-ice hidden lg:inline-flex">
            Contact
          </Link>
        </nav>

        {/* ===== MOBILE CALL BUTTON ===== */}
        <Link
          href="tel:+16362990857"
          className="md:hidden btn-ice inline-flex items-center gap-2 mr-2"
        >
          <Phone className="w-4 h-4" /> Call
        </Link>

        {/* ===== MOBILE MENU TOGGLE ===== */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* ===== MOBILE MENU ===== */}
      {open && (
        <div className="md:hidden border-t border-[--lp-border] bg-black/70">
          <div className="mx-auto max-w-6xl px-4 py-4 grid gap-3">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="py-2"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
