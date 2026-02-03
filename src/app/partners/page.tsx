import Image from "next/image";
import Link from "next/link";
import { partners } from "@/data/partners";

export const metadata = {
  title: "Support the Mission — Lion’s Pride MM",
  description:
    "Businesses and individuals who help fuel the work of Lion’s Pride Motorcycle Ministry through ongoing and one-time support.",
};

export default function SponsorsPage() {
  const { monthly, oneTime } = partners;

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 text-white space-y-10">
      {/* Hero */}
      <div className="card p-6 md:p-8 space-y-4">
        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
          Support the Mission
        </h1>
        <p className="text-[--lp-muted] max-w-prose">
          These sponsors help us ride, serve, and show up for people in need.
          Their generosity fuels outreach rides, benevolence, and practical
          ministry on and off the road.
        </p>
        <div className="flex flex-wrap gap-3 mt-4">
          <Link
            href="/contact"
            className="btn-ice inline-flex items-center rounded-full bg-[--lp-ice] px-4 py-2 font-semibold text-black hover:opacity-90"
          >
            Talk About Sponsorship
          </Link>
        </div>
      </div>

      {/* Monthly Sponsors */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Monthly Sponsors</h2>
        <p className="text-[--lp-muted] max-w-prose">
          Recurring supporters who help keep the lights on and the rubber on the road.
        </p>

        {monthly.length === 0 ? (
          <p className="prose-muted text-sm">
            No monthly sponsors listed yet. As partners come on board, they’ll be honored here.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {monthly.map((sponsor) => (
              <PartnerCard key={sponsor.name} {...sponsor} />
            ))}
          </div>
        )}
      </section>

      {/* One-Time Supporters */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">One-Time Supporters</h2>
        <p className="text-[--lp-muted] max-w-prose">
          Individuals and organizations who have sown into specific events,
          needs, or projects.
        </p>

        {oneTime.length === 0 ? (
          <p className="prose-muted text-sm">
            One-time gifts and sponsors will be highlighted here as they come in.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {oneTime.map((sponsor) => (
              <PartnerCard key={sponsor.name} {...sponsor} />
            ))}
          </div>
        )}
      </section>

      {/* Disclaimer */}
      <div className="card p-6 md:p-8 text-sm prose-muted text-center">
        <p>
          Listing a sponsor does not imply endorsement of their products or services.
          It recognizes generosity toward the work of Lion’s Pride Motorcycle Ministry.
        </p>
      </div>
    </section>
  );
}

type PartnerCardProps = {
  name: string;
  image: string;
  url?: string | null;
};

function PartnerCard({ name, image, url }: PartnerCardProps) {
  const inner = (
    <>
      <div className="w-full aspect-video relative rounded-md overflow-hidden bg-black/20">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain p-2 group-hover:scale-105 transition-transform"
        />
      </div>
      <p className="mt-2 font-semibold text-sm">{name}</p>
    </>
  );

  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group block rounded-xl border border-[--lp-border] bg-black/30 p-4 hover:bg-white/5 transition"
        title={name}
      >
        {inner}
      </a>
    );
  }

  return (
    <div
      className="group block rounded-xl border border-[--lp-border] bg-black/30 p-4 hover:bg-white/5 transition"
      title={name}
    >
      {inner}
    </div>
  );
}
