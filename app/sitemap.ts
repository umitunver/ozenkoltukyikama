import type { MetadataRoute } from "next";
import { districts } from "@/lib/districts";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: `${site.domain}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    ...districts.map((d) => ({
      url: `${site.domain}/${d.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
