import Link from "next/link";
import fs from "fs";
import path from "path";
import Carousel from "@/components/Carousel";

export const metadata = {
  title: "About Us — Lion’s Pride MM",
  description:
    "Who we are, what we believe, and how we ride: a Christ-centered, inclusive motorcycle ministry serving bikers and non-bikers alike.",
};

// Read images from /public/gallery/about (server component)
function getGalleryImages() {
  const dir = path.join(process.cwd(), "public", "gallery", "about");
  try {
    const files = fs.readdirSync(dir);
    const allow = new Set([".jpg", ".jpeg", ".png", ".webp"]);
    return files
      .filter((f) => allow.has(path.extname(f).toLowerCase()))
      .map((f) => `/gallery/about/${f}`);
  } catch {
    return [];
  }
}

export default function AboutPage() {
  const images = getGalleryImages();

  return (
    <div className="space-y-8">
      {/* Header */}
      <section className="card p-6 space-y-3">
        <h1 className="text-3xl md:text-4xl font-extrabold">About Lion’s Pride MM</h1>
        <p className="max-w-3xl prose-muted">
          We’re a Christ-centered motorcycle ministry with a simple mission:{" "}
          <span className="text-white font-semibold">lead as many men and women to Jesus as we can</span>. We ride,
          pray, serve, and show up—on two wheels or four. If your heart is open, you’re welcome in the Pride.
        </p>
      </section>

      {/* Mission + Quick Facts */}
      <section className="grid lg:grid-cols-3 gap-6">
        {/* Mission card */}
        <div className="lg:col-span-2 card p-6 space-y-4">
          <h2 className="text-xl font-bold">Our Mission</h2>
          <p className="prose-muted">
            Share the Gospel within the motorcycle community and the wider world, foster real brotherhood, and
            serve people with love and integrity—on and off the road.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 pt-2">
            <div className="card p-4">
              <h3 className="font-semibold mb-1">Inclusive by Design</h3>
              <p className="text-sm prose-muted">
                You don’t need a bike to belong. Ride a Harley, ride a Honda, drive a car, or ride along in prayer—our
                rides and events are open to anyone pursuing Christ or curious about the hope we carry.
              </p>
            </div>
            <div className="card p-4">
              <h3 className="font-semibold mb-1">Brotherhood with Purpose</h3>
              <p className="text-sm prose-muted">
                We’re a family, not a clique. We practice integrity, respect, and love. We honor others on the road,
                and we represent Christ with humility and strength.
              </p>
            </div>
          </div>
        </div>

        {/* Quick facts card */}
        <aside className="card p-6 space-y-4">
          <h2 className="text-xl font-bold">Quick Facts</h2>
          <ul className="space-y-2 text-sm prose-muted">
            <li>• Open rides & outreach events year-round.</li>
            <li>• Bikes welcome. Cars welcome. People welcome.</li>
            <li>• Christ-centered, Scripture-anchored, service-minded.</li>
            <li>• Guided by bylaws and accountable leadership.</li>
          </ul>
          <div className="pt-2 grid gap-2">
            <Link href="/events" className="btn-ice text-center">
              See Events &amp; Rides
            </Link>
            <Link href="/join" className="btn-accent text-center">
              Join the Pride
            </Link>
            <Link href="/documents" className="text-[--lp-ice] text-center hover:underline">
              Read Our Bylaws
            </Link>
          </div>
        </aside>
      </section>

      {/* How we operate */}
      <section className="card p-6 space-y-4">
        <h2 className="text-xl font-bold">How We Operate</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h3 className="font-semibold">Ministry &amp; Rides</h3>
            <p className="prose-muted">
              We schedule rides in the riding season and outreach opportunities throughout the year—hospitality nights,
              prayer meetups, charity support, and community service. Patch or no patch, you can serve alongside us
              while you discern next steps.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold">Character &amp; Conduct</h3>
            <p className="prose-muted">
              We represent Christ honorably. That means no illegal drugs or activity, no divisive behavior, and
              consistent respect toward other clubs and riders. We follow road safety protocols and keep our witness
              clean.
            </p>
          </div>
        </div>
      </section>

      {/* What we're about + New here */}
      <section className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 card p-6 space-y-4">
          <h2 className="text-xl font-bold">What We’re About</h2>
          <ul className="list-disc pl-6 space-y-2 prose-muted">
            <li>
              <span className="text-white font-medium">Jesus at the center.</span> Prayer, Scripture, worship, and
              practical love are non-negotiables.
            </li>
            <li>
              <span className="text-white font-medium">People over patches.</span> Our identity is Christ, not leather.
              Patches reflect commitment; they never define worth.
            </li>
            <li>
              <span className="text-white font-medium">Service is our road.</span> We look for needs and meet them—with
              our hands, our resources, and our presence.
            </li>
            <li>
              <span className="text-white font-medium">Real accountability.</span> We operate with a clear structure and
              shared expectations so trust stays strong.
            </li>
          </ul>
        </div>

        <div className="card p-6 space-y-3">
          <h3 className="font-semibold">New Here?</h3>
          <p className="text-sm prose-muted">
            Meet the officers, visit a chapter meeting, or roll on a ride with us. If you’re not on a bike, follow in
            your car—seriously. Come as you are.
          </p>
          <div className="grid gap-2">
            <Link href="/officers" className="btn-ice text-center">
              Meet the Officers
            </Link>
            <Link href="/contact" className="btn-accent text-center">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery / Carousel */}
      <section className="card p-6 space-y-4">
        <h2 className="text-xl font-bold">Scenes from the Road</h2>
        {images.length > 0 ? (
          <Carousel images={images} auto intervalMs={5000} fit="contain" />
        ) : (
          <p className="prose-muted">
            Drop photos into <code>/public/gallery/about/</code> and they’ll appear here automatically.
          </p>
        )}
      </section>

      {/* Closing line */}
      <section className="card p-6 text-center">
        <p className="text-lg">
          Wherever we ride,{" "}
          <span className="text-[--lp-ice] font-semibold">we ride for the Kingdom</span>.
        </p>
      </section>
    </div>
  );
}
