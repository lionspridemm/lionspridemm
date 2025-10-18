import "./globals.css";
import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Phone, Menu, Facebook } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Background from "@/components/Background";

export const metadata: Metadata = {
  title: "Lion’s Pride MM",
  description: "Riding with purpose. Serving with love.",
  metadataBase: new URL("https://lionspridemm.com"),
  openGraph: {
    title: "Lion’s Pride MM",
    description: "Riding with purpose. Serving with love.",
    url: "https://lionspridemm.com",
    siteName: "Lion’s Pride MM",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lion’s Pride MM",
    description: "Riding with purpose. Serving with love.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0b0b",
  colorScheme: "dark",
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Mobile-only overrides; desktop/tablet untouched */}
        <link rel="stylesheet" href="/mobile.css" media="(max-width: 900px)" />
      </head>
      <body className="antialiased selection:bg-[--lp-ice]/30 selection:text-white">
        {/* Background */}
        <Background />

        {/* ===== DESKTOP/TABLET HEADER (unchanged) ===== */}
        <div className="fixed left-0 top-0 z-20 hidden w-full border-b border-[--lp-border] bg-black/70 supports-[backdrop-filter]:backdrop-blur md:block">
          <PageHeader />
        </div>

        {/* ===== MOBILE HEADER (brand + big Contact + hamburger) ===== */}
        <div className="fixed left-0 top-0 z-20 w-full border-b border-[--lp-border] bg-black/70 supports-[backdrop-filter]:backdrop-blur md:hidden">
          <div className="mx-auto max-w-6xl px-4 py-3 text-white">
            <div className="flex items-center justify-between">
              <span className="text-base font-semibold tracking-wide">Lion’s Pride MM</span>

              {/* Zero-JS dropdown via details/summary */}
              <details className="relative">
                <summary
                  className="list-none inline-flex items-center justify-center rounded-xl p-2 text-[--lp-ice] hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[--lp-ice] cursor-pointer"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" />
                </summary>

                {/* Dropdown panel */}
                <div className="absolute right-0 mt-2 w-48 overflow-hidden rounded-2xl border border-[--lp-border] bg-[var(--lp-card)] shadow-xl">
                  <div className="px-3 py-2 border-b border-[--lp-border]">
                    <span className="text-xs uppercase tracking-wide text-[--lp-muted]">Menu</span>
                  </div>
                  <nav className="flex flex-col p-2 text-sm">
                    {/* Mirror desktop menu exactly (no Contact) */}
                    <Link href="/" className="rounded-lg px-3 py-2 hover:bg-white/5">Home</Link>
                    <Link href="/about" className="rounded-lg px-3 py-2 hover:bg-white/5">About</Link>
                    <Link href="/officers" className="rounded-lg px-3 py-2 hover:bg-white/5">Officers</Link>
                    <Link href="/documents" className="rounded-lg px-3 py-2 hover:bg-white/5">Documents</Link>
                    <Link href="/events" className="rounded-lg px-3 py-2 hover:bg-white/5">Events</Link>
                    <Link href="/join" className="rounded-lg px-3 py-2 hover:bg-white/5">Join Us</Link>
                  </nav>
                </div>
              </details>
            </div>

            {/* Big primary CTA under title (mobile only) */}
            <div className="mt-3">
              <Link
                href="/contact"
                className="btn-ice inline-flex w-full items-center justify-center gap-2"
                aria-label="Contact Lion’s Pride MM"
              >
                <Phone className="h-4 w-4" />
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* ===== MAIN CONTENT ===== */}
        <main className="relative z-10 mx-auto max-w-6xl px-4 pt-28 pb-[calc(5.5rem+env(safe-area-inset-bottom))] text-white md:pt-32 md:pb-[calc(6.5rem+env(safe-area-inset-bottom))]">
          {children}

          {/* Floating contact: desktop/tablet only; mobile uses header CTA */}
          <Link
            href="/contact"
            className="fixed left-4 z-30 hidden items-center gap-2 rounded-2xl bg-[--lp-ice] px-5 py-2.5 font-semibold text-black shadow transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[--lp-ice] focus-visible:ring-offset-2 focus-visible:ring-offset-black md:inline-flex md:left-6"
            style={{ top: `calc(6rem + env(safe-area-inset-top))` }}
            aria-label="Contact Lion’s Pride MM"
          >
            <Phone className="h-4 w-4" /> Contact
          </Link>
        </main>

        {/* ===== FOOTER ===== */}
        <footer className="fixed bottom-0 left-0 z-20 w-full border-t border-[--lp-border] bg-black/70 text-white supports-[backdrop-filter]:backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 py-3 text-sm">
            {/* Desktop/tablet footer unchanged */}
            <div className="hidden items-center justify-between gap-2 md:flex">
              <p>© {new Date().getFullYear()} Lion’s Pride Motorcycle Ministry · lionspridemm.com</p>
              <div className="flex items-center gap-4">
                <Link href="/documents" className="text-[--lp-ice] hover:underline">Documents</Link>
                <Link href="/about" className="text-[--lp-ice] hover:underline">About</Link>
                <Link href="/contact" className="text-[--lp-ice] hover:underline">Contact</Link>
                <a
                  href="https://www.facebook.com/groups/237721163228220"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-md text-[--lp-ice] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[--lp-ice]"
                  aria-label="Facebook Group"
                  title="Join our Facebook Group"
                >
                  <Facebook className="h-4 w-4" />
                  <span className="sr-only">Facebook Group</span>
                </a>
              </div>
            </div>

            {/* Mobile footer: Facebook only + tiny copyright */}
            <div className="flex items-center justify-between md:hidden">
              <a
                href="https://www.facebook.com/groups/237721163228220"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-md text-[--lp-ice] focus:outline-none focus-visible:ring-2 focus-visible:ring-[--lp-ice]"
                aria-label="Facebook Group"
                title="Join our Facebook Group"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook Group</span>
              </a>
              <p className="text-xs">© {new Date().getFullYear()} Lion’s Pride MM</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
