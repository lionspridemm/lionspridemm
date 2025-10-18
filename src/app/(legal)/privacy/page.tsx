import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Lion’s Pride MM",
  description: "Our commitments on data privacy and stewardship.",
};

export default function PrivacyPage() {
  return (
    <div className="relative mx-auto max-w-3xl px-4 py-24 text-white">
      <div className="card p-8">
        <h1 className="text-3xl font-bold">Privacy Policy</h1>
        <p className="mt-4 text-[--lp-muted]">
          We collect only what we need to operate this site and our ministry (for example,
          contact form submissions and basic analytics). We don’t sell data, and we limit
          access to authorized leaders who need it to serve members.
        </p>

        <h2 className="mt-8 text-xl font-semibold">What we collect</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-[--lp-muted]">
          <li>Contact details you submit (name, email, message).</li>
          <li>Basic usage analytics (page views, device, approximate region).</li>
        </ul>

        <h2 className="mt-8 text-xl font-semibold">How we use it</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-[--lp-muted]">
          <li>Responding to inquiries and coordinating rides/events.</li>
          <li>Improving site performance and security.</li>
        </ul>

        <h2 className="mt-8 text-xl font-semibold">Data retention & sharing</h2>
        <p className="mt-3 text-[--lp-muted]">
          Data is retained only as long as necessary for ministry operations. We do not sell
          or share personal data with third parties except service providers that help us run
          the site (hosting, email), bound by their own privacy terms.
        </p>

        <h2 className="mt-8 text-xl font-semibold">Contact</h2>
        <p className="mt-3 text-[--lp-muted]">
          For privacy questions or requests, use the Contact page.
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
