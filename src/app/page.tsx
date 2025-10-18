import Link from "next/link";

export default function Home() {
  return (
    <section className="grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Riding with <span className="text-[--lp-ice]">purpose</span>. Serving with{" "}
          <span className="text-[--lp-ice]">love</span>.
        </h1>
        <p className="mt-4 prose-muted max-w-prose">
          Christ-centered brotherhood carrying the Gospel into biker culture through presence, prayer, and practical
          service.
        </p>

        {/* Buttons: centered on mobile, original layout on md+ */}
        <div className="mt-6 flex flex-col items-center gap-3 md:flex-row md:items-start">
          <Link
            href="/join"
            className="btn-accent w-full max-w-xs text-center md:w-auto md:max-w-none"
          >
            Join the Pride
          </Link>
          <Link
            href="/events"
            className="btn-ice w-full max-w-xs text-center md:w-auto md:max-w-none"
          >
            See Upcoming Rides
          </Link>
        </div>
      </div>

      {/* Circular, softer halo with tighter footprint */}
      <div className="relative grid place-items-center">
        {/* Halo */}
        <div
          className="pointer-events-none absolute rounded-full"
          style={{
            width: "min(20rem, 48vw)",
            height: "min(20rem, 48vw)",
            background:
              "radial-gradient(circle at center, rgba(255,255,255,0.70) 0%, rgba(255,255,255,0.40) 42%, rgba(255,255,255,0.18) 70%, rgba(255,255,255,0.00) 100%)",
            backdropFilter: "blur(8px)",
            boxShadow: "0 10px 32px rgba(0,0,0,0.40), inset 0 -8px 22px rgba(0,0,0,0.06)",
          }}
        />

        {/* Logo — nudged downward inside the circle */}
        <div className="relative" style={{ transform: "translateY(6%)" }}>
          <img
            src="/logo.png"
            alt="Lion’s Pride MM"
            className="w-[min(15rem,36vw)] md:w-[min(18rem,36vw)] drop-shadow-[0_6px_24px_rgba(0,0,0,0.35)] select-none"
          />
        </div>
      </div>
    </section>
  );
}
