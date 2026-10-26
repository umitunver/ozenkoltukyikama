// Open Graph / Twitter görselleri: build sırasında `out/og/<sayfa>.png` olarak üretilir.
// (`opengraph-image` dosya kuralı statik çıktıda uzantısız dosya yazdığı için route handler kullanılıyor;
// .png uzantısı her statik hostingde doğru Content-Type ile sunulmasını sağlar.)

import { districtCopy, hero, neighborhoodCopy, ogHome } from "@/lib/content";
import { districts, getDistrict } from "@/lib/districts";
import type { ImageName } from "@/lib/images";
import { ogFile } from "@/lib/metadata";
import { neighborhoods } from "@/lib/neighborhoods";
import { renderOgImage } from "@/lib/og";

export const dynamic = "force-static";
export const dynamicParams = false;

type OgPage = { title: string; subtitle: string; image: ImageName };

// Anahtar: "home", ilçe slug'ı veya "<ilçe-slug>-<mahalle-slug>" (sayfaların `ogPage` değeri)
function ogPages(): Record<string, OgPage> {
  const pages: Record<string, OgPage> = {
    home: { title: hero.title, subtitle: ogHome.subtitle, image: hero.image },
  };
  for (const d of districts) {
    pages[d.slug] = { title: districtCopy.title(d), subtitle: `${districtCopy.badge(d)}.`, image: d.image };
  }
  for (const n of neighborhoods) {
    const d = getDistrict(n.district)!;
    pages[`${n.district}-${n.slug}`] = {
      title: neighborhoodCopy.title(n),
      subtitle: neighborhoodCopy.ogSubtitle(n, d),
      image: n.image,
    };
  }
  return pages;
}

export function generateStaticParams() {
  return Object.keys(ogPages()).map((page) => ({ file: ogFile(page) }));
}

export async function GET(_req: Request, ctx: RouteContext<"/og/[file]">) {
  const { file } = await ctx.params;
  const page = ogPages()[file.replace(/\.png$/, "")] ?? ogPages().home;
  return renderOgImage(page);
}
