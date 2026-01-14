"use client";

import Image from "next/image";


type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

const SHIRT_PRICING = {
    longSleeve: 22,
    triBlend: 18,
    shortSleeve: 20,
    upcharge2XL: 1.5,
    upcharge3XL: 2,
};

export default function MerchClient({ products }: { products: Product[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((p) => (
        <article key={p.id} className="card overflow-hidden">
          <div className="relative aspect-[4/3] w-full bg-black/30">
            <Image
              src={p.image}
              alt={p.name}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </div>

          <div className="p-4">
            <div className="flex items-start justify-between gap-3">
              <h2 className="font-semibold leading-snug">{p.name}</h2>
              <div className="shrink-0 font-semibold text-[--lp-ice]">
                {"price" in p && typeof p.price === "number" ? `$${p.price.toFixed(2)}` : "$18.00-$22.00"}
              </div>
            </div>

            <p className="prose-muted mt-3 text-sm">
              Payment handled at checkout.
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}