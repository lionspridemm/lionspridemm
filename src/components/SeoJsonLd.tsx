// src/components/SeoJsonLd.tsx
// NOTE: no "use client" — this renders on the server, so it shows in View Source

export default function SeoJsonLd() {
  const site = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Lion’s Pride Motorcycle Ministry",
    url: site,
    logo: `${site}/icons/icon-512.png`,
    sameAs: [
      // "https://www.facebook.com/...",
      // "https://www.instagram.com/..."
    ],
  };

  const web = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Lion’s Pride MM",
    url: site,
    potentialAction: {
      "@type": "SearchAction",
      target: `${site}/search?q={query}`,
      "query-input": "required name=query",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(web) }}
      />
    </>
  );
}
