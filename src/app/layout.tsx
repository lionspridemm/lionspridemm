import "./globals.css";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Background from "@/components/Background";
import Link from "next/link";
import { Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Lion’s Pride MM",
  description: "Riding with purpose. Serving with love.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* Ignore extension-injected attributes on <body> to prevent hydration warnings */}
      <body suppressHydrationWarning>
        <Background />
        <PageHeader />

        <main className="mx-auto max-w-6xl px-4 py-10">
          {children}
        </main>

        <Link
          href="/contact"
          className="fixed right-4 bottom-4 md:right-6 md:bottom-6 btn-accent inline-flex items-center gap-2"
          aria-label="Contact Lion’s Pride MM"
        >
          <Phone className="w-4 h-4" /> Contact Us
        </Link>

        <footer className="border-t border-[--lp-border] mt-16">
          <div className="mx-auto max-w-6xl px-4 py-10 text-sm prose-muted">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <p>© {new Date().getFullYear()} Lion’s Pride Motorcycle Ministry · lionspridemm.com</p>
              <div className="flex items-center gap-4">
                <Link href="/documents" className="hover:text-[--lp-ice]">Documents</Link>
                <Link href="/about" className="hover:text-[--lp-ice]">About</Link>
                <Link href="/contact" className="hover:text-[--lp-ice]">Contact</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
