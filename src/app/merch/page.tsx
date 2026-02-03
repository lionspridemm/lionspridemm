import type { Metadata } from "next";
import MerchClient from "./MerchClient";

export const metadata: Metadata = {
  title: "Merch — Lion’s Pride MM",
  description: "Merchandise for Lion’s Pride Motorcycle Ministry.",
};

const PRODUCTS = [
  // Shirts (designs)
  {
    id: "iron-sharpens-iron",
    name: "Iron Sharpens Iron (Design)",
    priceNote:
      "Choose shirt type, sizes up to XL. +$1.50 for 2XL, +$2 for 3XL.",
    image: "/merch/iron_sharpens_iron.png",
    kind: "design" as const,
  },
  {
    id: "prayer-brother",
    name: "If You Need Prayer, You've Got a Brother (Design)",
    priceNote:
      "Choose shirt type, sizes up to XL. +$1.50 for 2XL, +$2 for 3XL.",
    image: "/merch/prayer_brother.png",
    kind: "design" as const,
  },
  {
    id: "prayer-sister",
    name: "If You Need Prayer, You've Got a Sister (Design)",
    priceNote:
      "Choose shirt type, sizes up to XL. +$1.50 for 2XL, +$2 for 3XL.",
    image: "/merch/prayer_sister.png",
    kind: "design" as const,
  },
  {
    id: "prayer-presence-purpose",
    name: "Prayer. Presence. Purpose. (Design)",
    priceNote:
      "Choose shirt type, sizes up to XL. +$1.50 for 2XL, +$2 for 3XL.",
    image: "/merch/prayer_presence.png",
    kind: "design" as const,
  },
  {
    id: "fellowship",
    name: "Fellowship in Christ (Design)",
    priceNote:
      "Choose shirt type, sizes up to XL. +$1.50 for 2XL, +$2 for 3XL.",
    image: "/merch/fellowship.png",
    kind: "design" as const,
  },

  // Non-shirt items (fixed price)
  {
    id: "tumbler",
    name: "Lion’s Pride Tumbler",
    price: 23,
    image: "/merch/tumbler.jpg",
    kind: "item" as const,
  },
  {
    id: "coffee-cup",
    name: "Lion’s Pride Coffee Cup",
    price: 18,
    image: "/merch/coffee_cup.jpg",
    kind: "item" as const,
  },
  {
    id: "hat",
    name: "Lion’s Pride Hat",
    price: 25,
    image: "/merch/hat.jpg",
    kind: "item" as const,
  },
];

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/90">
      {children}
    </span>
  );
}

export default function MerchPage() {
  return (
    <section className="py-12 text-white">
      {/* Banner */}
      <div className="mb-10 rounded-2xl border border-white/10 bg-[#0f1a24] p-6 md:p-8 shadow-xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wide text-white/70">
              ORDERING NOTE
            </p>
            <h2 className="mt-1 text-2xl md:text-3xl font-extrabold leading-tight text-[#d4af37]">
              Choose your shirt options in the Square storefront
            </h2>
            <p className="mt-2 text-white/80">
              This page shows the designs and merch. For shirts, the Square
              storefront is where you pick the shirt type, size, and color.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <Pill>Shirt type selected in Square (Long/Short Sleeve, Performance/Cotton, etc...)</Pill>
              <Pill>Sizes up to XL standard. 2XL +$1.50 and 3XL +$2.00</Pill>
            </div>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row md:flex-col md:items-end">
            <a
              href="#square-storefront"
              className="btn-ice inline-flex items-center justify-center px-7 py-3 text-base font-semibold"
            >
              Shop in Square
            </a>
            <p className="text-xs text-white/60 md:text-right">
              Options live there on purpose.
            </p>
          </div>
        </div>
      </div>

      {/* Existing header */}
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
          Merchandise
        </h1>
        <p className="prose-muted mt-2">
          Browse the designs here, then choose options and checkout through
          Square.
        </p>
      </header>

      <MerchClient products={PRODUCTS} />

      {/* Square storefront anchor + CTA */}
      <div
        id="square-storefront"
        className="mt-16 flex flex-col items-center gap-3 text-center scroll-mt-24"
      >
        <a
          href="#square-storefront"
          className="btn-ice inline-flex items-center justify-center px-8 py-3 text-lg"
        >
          Shop on Square!
        </a>
      </div>
    </section>
  );
}
