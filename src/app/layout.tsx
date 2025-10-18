import "./globals.css";
import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Phone, Facebook } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Background from "@/components/Background";
import MobileHeader from "@/components/MobileHeader"; // ⬅️ add this import

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
        <link rel="stylesheet" href="/mobile.css" media="(max-width: 900px)" />
      </head>
      <body className="antialiased selection:bg-[--lp-ice]/30 selection:text-white">
        <Background />

        {/* Desktop / Tablet header (unchanged) */}
        <div className="fixed left-0 top-0 z-20 hidden w-full border-b border-[--lp-border] bg-black/70 supports-[backdrop-filter]:backdrop-blur md:block">
          <PageHeader />
        </div>

        {/* Mobile header (client component handles open/close) */}
        <MobileHeader />

        {/* Main content */}
        <main className="relative z-10 mx-auto max-w-6xl px-4 pt-28 pb-[calc(5.5rem+env(safe-area-inset-bottom))] text-white md:pt-32 md:pb-[calc(6.5rem+env(safe-area-inset-bottom))]">
          {children}          
        </main>

        {/* Footer (unchanged) */}
        <footer className="fixed bottom-0 left-0 z-20 w-full border-t border-[--lp-border] bg-black/70 text-white supports-[backdrop-filter]:backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 py-3 text-sm">
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
