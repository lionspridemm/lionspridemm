import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="space-y-3 text-sm">
        <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-[--lp-amber]" /><span>(636) 299-0857</span></p>
        <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-[--lp-amber]" /><span>lionspridemm@gmail.com</span></p>
        <p className="prose-muted">Zero-spam. Your message goes straight to a human.</p>
      </div>
      <form className="grid gap-3">
        <input className="bg-[--lp-card] border border-[--lp-border] rounded-xl px-3 py-2" placeholder="Your name" />
        <input className="bg-[--lp-card] border border-[--lp-border] rounded-xl px-3 py-2" placeholder="Email or phone" />
        <textarea className="bg-[--lp-card] border border-[--lp-border] rounded-xl px-3 py-2 min-h-[120px]" placeholder="How can we serve you?" />
        <button type="button" className="btn-accent inline-flex items-center gap-2">
          <Mail className="w-4 h-4" /> Send
        </button>
        <p className="text-xs prose-muted">
          Prefer a call? <Link href="tel:+16362990857" className="text-[--lp-amber] hover:underline">(636) 299-0857</Link>
        </p>
      </form>
    </div>
  );
}
