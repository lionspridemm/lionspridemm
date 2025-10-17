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
          Christ-centered brotherhood carrying the Gospel into biker culture through presence, prayer, and practical service.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/join" className="btn-accent">Join the Pride</Link>
          <Link href="/events" className="btn-ice">See Upcoming Rides</Link>
        </div>
      </div>

      <div className="grid place-items-center">
        {/* Clean logo, no box, subtle highlight ring */}
        <img
          src="/logo.png"
          alt="Lion’s Pride MM"
          className="w-64 md:w-80 rounded-[28px] ring-1 ring-[--lp-ice]/40 shadow"
        />
      </div>
    </section>
  );
}
