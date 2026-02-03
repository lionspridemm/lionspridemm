import Link from "next/link";

export const metadata = {
  title: "Documents | Lion’s Pride MM",
  description: "Bylaws and key policy documents.",
};

export default function DocumentsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 text-white">
      <h1 className="text-3xl font-bold">Documents</h1>
      <p className="mt-3 text-[--lp-muted]">
        Centralized repository for member-facing docs. Files open in a new tab.
      </p>

      <ul className="mt-8 space-y-4">
        <li className="card p-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold">Bylaws (PDF)</h2>
              <p className="text-sm text-[--lp-muted]">Current governing document.</p>
            </div>
            <Link
              href="/docs/bylaws.pdf"
              target="_blank"
              rel="noopener"
              className="btn-ice"
            >
              Open PDF
            </Link>
          </div>
        </li>

        <li className="card p-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold">Background Consent (PDF)</h2>
              <p className="text-sm text-[--lp-muted]">Printable Form to Sign</p>
            </div>
            <Link
              href="/docs/background_check.pdf"
              target="_blank"
              rel="noopener"
              className="btn-ice"
            >
              Open PDF
            </Link>
          </div>
        </li>


        <li className="card p-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold">Privacy Policy</h2>
              <p className="text-sm text-[--lp-muted]">How we handle data.</p>
            </div>
            <Link href="/privacy" className="btn-ice">View</Link>
          </div>
        </li>

        <li className="card p-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold">Terms of Use</h2>
              <p className="text-sm text-[--lp-muted]">Rules of the road for the site.</p>
            </div>
            <Link href="/terms" className="btn-ice">View</Link>
          </div>
        </li>
      </ul>
    </div>
  );
}
