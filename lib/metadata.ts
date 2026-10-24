import type { Metadata } from "next";
import { site } from "./site";

export const ogSize = { width: 1200, height: 630 };

/** "home" veya ilçe slug'ı → "home.png" (`app/og/[file]/route.tsx` çıktısı) */
export const ogFile = (page: string) => `${page}.png`;
export const ogUrl = (page: string) => `/og/${ogFile(page)}`;

/**
 * Sayfa başına title, description, canonical, Open Graph ve Twitter kartı.
 * `ogPage`: `/og/<ogPage>.png` görseli ("home" veya ilçe slug'ı).
 */
export function pageMetadata({
  title,
  description,
  path,
  ogPage,
}: {
  title: string;
  description: string;
  path: string;
  ogPage: string;
}): Metadata {
  const images = [{ url: ogUrl(ogPage), ...ogSize, alt: title, type: "image/png" }];
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "tr_TR",
      siteName: site.name,
      url: path,
      title,
      description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images,
    },
  };
}
