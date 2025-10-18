import type { Metadata } from "next";
import path from "path";
import fs from "fs";
import OfficerGallery from "@/components/OfficerGallery";

export const metadata: Metadata = {
  title: "Officers — Lion’s Pride MM",
  description: "Leadership team of Lion’s Pride Motorcycle Ministry.",
};

// Our source of truth — exactly as you specified
const OFFICERS = [
  { name: "Don Aulbert",    title: "President",                 slug: "don-aulbert" },
  { name: "Angela Aulbert", title: "Secretary / Chaplain",     slug: "angela-aulbert" },
  { name: "Jeff Miller",    title: "Road Captain",             slug: "jeff-miller" },
  { name: "Jon Sansoucie",  title: "Media Officer",            slug: "jon-sansoucie" },
  { name: "Nick Lanham",    title: "Vice President / Chaplain",slug: "nick-lanham" },
] as const;

type Officer = (typeof OFFICERS)[number];

// Resolve `/public/officers/<slug>.jpg` (you said they’re .jpg)
function resolveImage(slug: string): string | null {
  const base = path.join(process.cwd(), "public", "officers");
  const full = path.join(base, `${slug}.jpg`);
  return fs.existsSync(full) ? `/officers/${slug}.jpg` : null;
}

// Jon’s testimony — your exact text, line-broken for readability in the modal
const JON_TESTIMONY = `Hi, I’m Jon. I’ve always been drawn to anything with two wheels. I grew up riding ATVs and fell in love with the open air early on. These days, cruiser motorcycles are my pace; I traded daredevil speed for deeper purpose. When I went searching for a motorcycle ministry, I found Don and the Lion’s Pride, and it’s been home ever since. This brotherhood has become a family away from family, a pillar in my life built on faith, loyalty, and shared purpose.

My walk with Christ began at 26. I said the prayer and started learning who God really is, but it became real when I launched my business about 3 years ago. Suddenly I had to rely on Him daily, for provision, for wisdom, for everything. I started writing down my prayers: “Lord, help me pay the bills.” “Bring me work.” One by one, God showed up. He’s been showing up ever since.

Because of the love I’ve received from my Abba (God), I can’t help but want to serve His Kingdom. My heart is for acts of service, helping those who can’t help themselves. In my business I run a widows and orphans program to bless those in need. With the Pride, that same spirit carries on as we visit boys’ homes, pray with people, and pour into our community wherever God opens doors.

Through this journey I’ve learned that no one is just one thing. We’re all made of many facets, and when you surround yourself with strong believers, the best in you starts to rise. My hope is that my brothers and sisters in the Pride feel built up and encouraged by me, just as they constantly sharpen me.

In the end, I tell everyone the same thing: if you’re searching for peace or fulfillment, go get Jesus. Everything else follows.
“Seek first the kingdom of God and His righteousness, and all these things will be added to you.” Matthew 6:33`;

export default function OfficersPage() {
  // Build the final array for the client component
  const officers = OFFICERS.map((o) => ({
    name: o.name,
    title: o.title,
    image: resolveImage(o.slug),
    testimony:
      o.slug === "jon-sansoucie"
        ? JON_TESTIMONY
        : "Testimony coming soon.",
  }));

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 text-white">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">Officers</h1>
        <p className="mt-3 prose-muted max-w-prose">
          Hover or tap a name to read a short testimony.
        </p>
      </header>

      <OfficerGallery officers={officers} />
    </section>
  );
}
