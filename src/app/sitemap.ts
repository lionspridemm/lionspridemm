import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://lionspridemm.com";
  return [
    { url: `${base}/`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/about`, changeFrequency: "monthly" },
    { url: `${base}/documents`, changeFrequency: "monthly" },
    { url: `${base}/privacy`, changeFrequency: "yearly" },
    { url: `${base}/terms`, changeFrequency: "yearly" },
    { url: `${base}/contact`, changeFrequency: "monthly" }
  ];
}
