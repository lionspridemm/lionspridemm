import Link from "next/link";
import { Phone, Calendar, MapPin, Mail } from "lucide-react";

export const metadata = {
  title: "Contact | Lion’s Pride MM",
  description:
    "Prayer, Presence, Purpose. If you’re on the road and need a brother, you’ve got one.",
};

export default function ContactPage() {
  return (
    <div className="relative mx-auto max-w-6xl px-4 text-white">
      {/* Global page backdrop (covers hero + tiles) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          /* Top-focused blue + subtle gold glow, then long feather to deep dark.
             Second radial anchored *below* the fold to keep the fade going on mobile. */
          background:
            "radial-gradient(120% 90% at 50% -10%, rgba(124,197,255,0.22) 0%, rgba(124,197,255,0.14) 22%, rgba(216,162,74,0.10) 40%, rgba(15,14,13,0.96) 70%)," +
            "radial-gradient(120% 120% at 50% 120%, rgba(216,162,74,0.10) 0%, rgba(15,14,13,0.96) 55%, rgba(15,14,13,1) 85%)",
        }}
      />

      {/* HERO */}
      <section className="relative isolate py-24 md:py-28">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Prayer, Presence, <span className="text-[--lp-ice]">Purpose</span>.
          </h1>
          <p className="mt-4 prose-muted max-w-2xl mx-auto">
            If you’re on the road and need a brother, you’ve got one.
            We ride together, we pray together, and we show up.
          </p>

          {/* Primary CTA — tooltip shows number on hover/focus (desktop) */}
          <div className="mt-8 flex flex-col items-center gap-3 md:flex-row md:justify-center">
            <a
              href="tel:+16362990857"
              className="btn-ice group relative inline-flex items-center justify-center gap-2 w-full max-w-xs text-center md:w-auto md:max-w-none"
              aria-label="Call Lion’s Pride MM"
              title="636-299-0857"
            >
              <Phone className="w-4 h-4" />
              Call Now
              {/* Tooltip */}
              <span
                role="tooltip"
                className="pointer-events-none absolute -top-12 left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded-lg border border-[--lp-border] bg-[var(--lp-card)] px-3 py-1.5 text-sm font-semibold text-[--lp-ice] shadow-xl group-hover:block group-focus-visible:block"
              >
                636-299-0857
              </span>
            </a>

            <Link
              href="/events"
              className="btn-accent inline-flex items-center justify-center gap-2 w-full max-w-xs text-center md:w-auto md:max-w-none"
            >
              <Calendar className="w-4 h-4" />
              Ride Schedule
            </Link>
          </div>

          {/* Scripture strip */}
          <figure className="mt-10 mx-auto max-w-2xl">
            <blockquote className="card p-6 text-[--lp-muted] italic">
              “Iron sharpens iron, and one man sharpens another.” — Proverbs 27:17
            </blockquote>
          </figure>
        </div>
      </section>

      {/* INFO TILES */}
      <section className="pb-24 md:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="card p-6">
            <h2 className="text-lg font-semibold">Meet Up Local</h2>
            <p className="mt-2 text-sm prose-muted">
              Roll out with us at the next ride or outreach. New riders and guests welcome.
            </p>
            <Link href="/events" className="btn-ice mt-4 inline-flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              See Events
            </Link>
          </div>

          <div className="card p-6">
            <h2 className="text-lg font-semibold">Request Prayer</h2>
            <p className="mt-2 text-sm prose-muted">
              Need prayer or someone to stand with you? We’ll connect fast and follow up.
            </p>

            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                href="tel:+16362990857"
                className="btn-accent inline-flex items-center gap-2 group relative justify-center"
                title="636-299-0857"
              >
                <Phone className="w-4 h-4" />
                Call Now
                <span
                  role="tooltip"
                  className="pointer-events-none absolute -top-12 left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded-lg border border-[--lp-border] bg-[var(--lp-card)] px-3 py-1.5 text-sm font-semibold text-[--lp-ice] shadow-xl group-hover:block group-focus-visible:block"
                >
                  636-299-0857
                </span>
              </a>

              <a
                href="mailto:lionspridemm@gmail.com"
                className="btn-accent inline-flex items-center gap-2 group relative justify-center"
                title="lionspridemm@gmail.com"
              >
                <Mail className="w-4 h-4" />
                Email Us
                <span
                  role="tooltip"
                  className="pointer-events-none absolute -top-12 left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded-lg border border-[--lp-border] bg-[var(--lp-card)] px-3 py-1.5 text-sm font-semibold text-[--lp-ice] shadow-xl group-hover:block group-focus-visible:block"
                >
                  lionspridemm@gmail.com
                </span>
              </a>
            </div>

          </div>

          <div className="card p-6">
            <h2 className="text-lg font-semibold">Find a Home</h2>
            <p className="mt-2 text-sm prose-muted">
              We’re building and growing fast. Reach out to connect with a member to join our family!
            </p>
            <Link href="/join" className="btn-ice mt-4 inline-flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Join the Pride
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
