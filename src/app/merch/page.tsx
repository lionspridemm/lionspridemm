import type { Metadata } from "next";
import Image from "next/image";
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
    price: 41,
    image: "/merch/hat.jpg",
    kind: "item" as const,
  },
];

export default function MerchPage() {
  return (
    <section className="py-12 text-white">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
          Merchandise
        </h1>
        <p className="prose-muted mt-2">
          Grab official gear! Browse the options here, then checkout through Square. (Link at the bottom)
        </p>
      </header>

      <MerchClient products={PRODUCTS} />
      <div className="mt-16 flex flex-col items-center gap-3 text-center">
        <a href="#" className="btn-ice inline-flex items-center justify-center px-8 py-3 text-lg">
            Shop on Square!
        </a>
      </div>
    </section>
  );
}