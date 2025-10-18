import fs from "fs";
import path from "path";

export const metadata = {
  title: "Officers — Lion’s Pride MM",
  description: "Leadership team of Lion’s Pride Motorcycle Ministry.",
};

// Allowed extensions we’ll check in /public/officers
const EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];

type Officer = {
  name: string;
  title: string;
  slug: string; // kebab-case for filename lookup
};

// Master list (edit titles here as needed)
const OFFICERS: Officer[] = [
  { name: "Don Aulbert", title: "President", slug: "don-aulbert" },
  { name: "Nick Lanham", title: "Vice President / Chaplain", slug: "nick-lanham" },
  { name: "Jeff Miller", title: "Ride Captain", slug: "jeff-miller" },
  { name: "Angela Aulbert", title: "Secretary / Chaplain", slug: "angela-aulbert" },
  { name: "Jon Sansoucie", title: "Media Officer", slug: "jon-sansoucie" },
];

// Resolve the first existing image for a given slug
function resolveImage(slug: string): string | null {
  const base = path.join(process.cwd(), "public", "officers");
  for (const ext of EXTENSIONS) {
    const full = path.join(base, `${slug}${ext}`);
    if (fs.existsSync(full)) return `/officers/${slug}${ext}`;
  }
  return null; // no image available
}

export default function OfficersPage() {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {OFFICERS.map((o) => {
        const img = resolveImage(o.slug);
        return (
          <div key={o.slug} className="card p-5 flex items-center gap-4">
            {img ? (
              <img
                src={img}
                alt={`${o.name} headshot`}
                className="h-16 w-16 rounded-full object-cover border border-[--lp-border]"
                draggable={false}
              />
            ) : (
              <div className="h-16 w-16 rounded-full border border-[--lp-border] bg-black/40 grid place-items-center text-xs text-white/60">
                No Photo
              </div>
            )}
            <div>
              <div className="font-semibold">{o.name}</div>
              <div className="text-sm prose-muted">{o.title}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
