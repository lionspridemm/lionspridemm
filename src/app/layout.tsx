import "./globals.css";
import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Phone, Facebook } from "lucide-react";
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
        {/* Mobile-only CSS overrides (optional but supported) */}
        <link rel="stylesheet" href="/mobile.css" media="(max-width: 900px)" />
      </head>
      <body className="antialiased selection:bg-[--lp-ice]/30 selection:text-white">
        {/* Site background */}
        <Background />

        {/* ===== DESKTOP/TABLET HEADER (unchanged), hidden on small screens ===== */}
        <div className="fixed left-0 top-0 z-20 hidden w-full border-b border-[--lp-border] bg-black/70 supports-[backdrop-filter]:backdrop-blur md:block">
          <PageHeader />
        </div>

        {/* ===== MOBILE HEADER (compact title pinned + big contact button) ===== */}
        <div className="fixed left-0 top-0 z-20 w-full border-b border-[--lp-border] bg-black/70 supports-[backdrop-filter]:backdrop-blur md:hidden">
          <div className="mx-auto max-w-6xl px-4 py-3 text-white">
            <div className="flex items-center justify-between">
              <span className="text-base font-semibold tracking-wide">Lion’s Pride MM</span>
              {/* Keep a small Facebook affordance in the header for quick access */}
              <a
                href="https://www.facebook.com/groups/237721163228220"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-md text-[--lp-ice] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[--lp-ice]"
                aria-label="Facebook Group"
                title="Join our Facebook Group"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook Group</span>
              </a>
            </div>

            {/* Big primary call-to-action directly under title */}
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

        {/* ===== MAIN CONTENT =====
            - Extra top padding on mobile to clear compact header
            - Extra bottom padding to clear fixed footer safely
        */}
        <main className="relative z-10 mx-auto max-w-6xl px-4 pt-28 pb-[calc(5.5rem+env(safe-area-inset-bottom))] text-white md:pt-32 md:pb-[calc(6.5rem+env(safe-area-inset-bottom))]">
          {children}

          {/* Floating contact button: show ONLY on md+; mobile uses header button */}
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
            {/* Desktop/tablet footer: original links retained */}
            <div className="hidden items-center justify-between gap-2 md:flex">
              <p>© {new Date().getFullYear()} Lion’s Pride Motorcycle Ministry · lionspridemm.com</p>
              <div className="flex items-center gap-4">
                <Link href="/documents" className="text-[--lp-ice] hover:underline">
                  Documents
                </Link>
                <Link href="/about" className="text-[--lp-ice] hover:underline">
                  About
                </Link>
                <Link href="/contact" className="text-[--lp-ice] hover:underline">
                  Contact
                </Link>
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

            {/* Mobile footer: just Facebook icon + tiny copyright */}
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
              <p className="text-xs">
                © {new Date().getFullYear()} Lion’s Pride MM
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
