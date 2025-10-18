import Link from "next/link";

export const metadata = {
  title: "Terms of Use | Lion’s Pride MM",
  description: "Ground rules for using this website.",
};

export default function TermsPage() {
  return (
    <div className="relative mx-auto max-w-3xl px-4 py-24 text-white">
      <div className="card p-8">
        <h1 className="text-3xl font-bold">Terms of Use</h1>
        <p className="mt-4 text-[--lp-muted]">
          Use this site responsibly. Don’t attempt to break, scrape, or abuse it. Content is
          provided as-is without warranties. By submitting information, you confirm you have
          rights to share it and consent to our processing consistent with the Privacy Policy.
        </p>

        <h2 className="mt-8 text-xl font-semibold">Acceptable use</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-[--lp-muted]">
          <li>No unlawful, harmful, or harassing behavior.</li>
          <li>No automated scraping or rate abuse.</li>
          <li>No posting of others’ private information without consent.</li>
        </ul>

        <h2 className="mt-8 text-xl font-semibold">Intellectual property</h2>
        <p className="mt-3 text-[--lp-muted]">
          Site content and branding are owned by Lion’s Pride MM unless otherwise noted.
        </p>

        <h2 className="mt-8 text-xl font-semibold">Changes</h2>
        <p className="mt-3 text-[--lp-muted]">
          Policies may change; updates will be posted here with a new effective date.
        </p>

        <div className="mt-10 flex gap-4">
          <Link href="/documents" className="btn-ice">
            ← Back to Documents
          </Link>
          <Link href="/" className="btn-accent">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
