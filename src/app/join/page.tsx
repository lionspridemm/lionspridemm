// src/app/join/page.tsx
export const metadata = {
  title: "Join the Pride — Lion’s Pride MM",
  description: "How to become part of the Lion’s Pride Motorcycle Ministry.",
};

export default function JoinPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 text-white">
      {/* Hero */}
      <div className="card mb-8">
        <div className="p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            Join the Pride
          </h1>
          <p className="mt-3 text-[--lp-muted] max-w-prose">
            We’re a Christ-centered riding family. If your heart is open and you’re ready
            to serve, we’ll ride with you—two wheels or four.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/events"
              className="btn-ice inline-flex items-center rounded-full bg-[--lp-ice] px-4 py-2 font-semibold text-black hover:opacity-90"
            >
              See Events &amp; Rides
            </a>
            <a
              href="/contact"
              className="btn-accent inline-flex items-center rounded-full border border-[--lp-border] px-4 py-2 font-semibold hover:bg-white/5"
            >
              Contact Leadership
            </a>
          </div>
        </div>
      </div>

      {/* Two-column layout */}
      <div className="grid gap-6 md:grid-cols-3">
        {/* Left: Steps + Values */}
        <div className="md:col-span-2 space-y-6">
          {/* Steps */}
          <div className="card">
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-bold">How Joining Works</h2>
              <ol className="mt-4 space-y-4">
                <li className="rounded-xl border border-[--lp-border] p-4">
                  <p className="font-semibold">1) Show Up &amp; Ride</p>
                  <p className="mt-1 text-[--lp-muted]">
                    Come to an open ride, service event, or chapter meeting. Meet the crew. Feel the fit.
                  </p>
                </li>
                <li className="rounded-xl border border-[--lp-border] p-4">
                  <p className="font-semibold">2) Connect &amp; Grow</p>
                  <p className="mt-1 text-[--lp-muted]">
                    Pray with us, serve with us, be consistent. We’re a brotherhood/sisterhood, not a spectator club.
                  </p>
                </li>
                <li className="rounded-xl border border-[--lp-border] p-4">
                  <p className="font-semibold">3) Commit &amp; Apply</p>
                  <p className="mt-1 text-[--lp-muted]">
                    Talk with an officer, review our bylaws, agree to our code of conduct, and start the path to wearing the patch.
                    For more info, read the{" "}
                    <a href="/documents" className="text-[--lp-ice] underline underline-offset-4 hover:opacity-90">
                      bylaws
                    </a>.
                  </p>
                </li>
              </ol>
            </div>
          </div>

          {/* Values */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="card">
              <div className="p-6">
                <h3 className="text-lg font-bold">Character &amp; Witness</h3>
                <p className="mt-2 text-[--lp-muted]">
                  Integrity, respect, and love. We represent Christ on the road and off it.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="p-6">
                <h3 className="text-lg font-bold">Consistency &amp; Service</h3>
                <p className="mt-2 text-[--lp-muted]">
                  Show up. Serve people. Ride safely. Encourage others. We’re a ministry first.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Quick Facts */}
        <aside className="space-y-6">
          <div className="card h-full">
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-bold">Quick Facts</h2>
              <ul className="mt-4 space-y-3 text-[--lp-muted]">
                <li>Open to riders <em>and</em> non-riders who serve.</li>
                <li>Any brand of bike welcome.</li>
                <li>Christ-centered, Scripture-anchored.</li>
                <li>Guided by bylaws and accountable leadership.</li>
                <li>
                  Giving: at chapter meetings we “pass the hat.” Members—especially officers—are
                  encouraged to give as they’re able. No fixed dues.
                </li>
              </ul>

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href="/events"
                  className="btn-ice inline-flex items-center justify-center rounded-full bg-[--lp-ice] px-4 py-2 font-semibold text-black hover:opacity-90"
                >
                  See Events &amp; Rides
                </a>
                <a
                  href="/documents"
                  className="btn-accent inline-flex items-center justify-center rounded-full border border-[--lp-border] px-4 py-2 font-semibold hover:bg-white/5"
                >
                  Read Our Bylaws
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* FAQs */}
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="card">
          <div className="p-6">
            <h3 className="text-lg font-bold">Do I need a motorcycle?</h3>
            <p className="mt-2 text-[--lp-muted]">
              No. Many serve from four wheels. The mission matters most.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="p-6">
            <h3 className="text-lg font-bold">Are there dues?</h3>
            <p className="mt-2 text-[--lp-muted]">
              No mandatory dues. At chapter meetings we pass a hat and encourage members—and especially officers—to
              give as they can.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="p-6">
            <h3 className="text-lg font-bold">How soon can I wear a patch?</h3>
            <p className="mt-2 text-[--lp-muted]">
              After a period of consistency, alignment with our values, and leadership approval.
              For specifics, see the{" "}
              <a href="/documents" className="text-[--lp-ice] underline underline-offset-4 hover:opacity-90">
                bylaws
              </a>.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="p-6">
            <h3 className="text-lg font-bold">Is it family-friendly?</h3>
            <p className="mt-2 text-[--lp-muted]">
              Yes. We protect kids and families at all events.
            </p>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="mt-8 card">
        <div className="p-6 md:p-8">
          <h2 className="text-2xl font-bold">Ready to ride with purpose?</h2>
          <p className="mt-2 text-[--lp-muted]">
            Show up, serve, and grow with a Christ-centered brotherhood and sisterhood.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/events"
              className="btn-ice inline-flex items-center rounded-full bg-[--lp-ice] px-4 py-2 font-semibold text-black hover:opacity-90"
            >
              See Events
            </a>
            <a
              href="/contact"
              className="btn-accent inline-flex items-center rounded-full border border-[--lp-border] px-4 py-2 font-semibold hover:bg-white/5"
            >
              Contact Leadership
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
