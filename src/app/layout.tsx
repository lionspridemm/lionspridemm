import "./globals.css";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Background from "@/components/Background";
import Link from "next/link";
import { Phone, Facebook } from "lucide-react";

export const metadata: Metadata = {
  title: "Lion’s Pride MM",
  description: "Riding with purpose. Serving with love.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        {/* Background behind everything */}
        <Background />

        {/* Fixed header */}
        <div className="fixed top-0 left-0 w-full z-20 bg-black/70 border-b border-[--lp-border]">
          <PageHeader />
        </div>

        {/* Main content */}
        <main className="relative z-10 mx-auto max-w-6xl px-4 pt-32 pb-24 text-white">
          {children}

          {/* FLOATING CONTACT BUTTON — now top-left, white text */}
          <Link
            href="/contact"
            className="fixed top-24 md:top-28 left-4 md:left-6 z-30 inline-flex items-center gap-2 font-semibold px-5 py-2.5 rounded-2xl shadow bg-[--lp-ice] text-white hover:opacity-90 transition"
            aria-label="Contact Lion’s Pride MM"
          >
            <Phone className="w-4 h-4" /> Contact Us
          </Link>
        </main>

        {/* Fixed footer */}
        <footer className="fixed bottom-0 left-0 w-full z-20 bg-black/70 border-t border-[--lp-border] text-white">
          <div className="mx-auto max-w-6xl px-4 py-4 text-sm">
            <div className="flex items-center justify-between gap-2">
              <p>
                © {new Date().getFullYear()} Lion’s Pride Motorcycle Ministry · lionspridemm.com
              </p>

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

                {/* Facebook group link */}
                <a
                  href="https://www.facebook.com/groups/237721163228220"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[--lp-ice] hover:underline"
                  aria-label="Facebook Group"
                  title="Join our Facebook Group"
                >
                  <Facebook className="w-4 h-4" />
                  <span className="sr-only">Facebook Group</span>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
