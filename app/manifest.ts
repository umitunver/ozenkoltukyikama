import type { MetadataRoute } from "next";
import { seo } from "@/lib/content";
import { site } from "@/lib/site";

export const dynamic = "force-static";

// İkonlar `npm run brand` ile üretilir (public/web-app-manifest-*.png).
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.shortName,
    description: seo.homeDescription,
    lang: "tr",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#faf8f5",
    theme_color: "#ffffff",
    icons: [
      { src: "/web-app-manifest-192x192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/web-app-manifest-512x512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/web-app-manifest-maskable-512x512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
