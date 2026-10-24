// Open Graph / Twitter görselleri: build sırasında `out/og/<sayfa>.png` olarak üretilir.
// (`opengraph-image` dosya kuralı statik çıktıda uzantısız dosya yazdığı için route handler kullanılıyor;
// .png uzantısı her statik hostingde doğru Content-Type ile sunulmasını sağlar.)

import { districtCopy, hero, ogHome } from "@/lib/content";
import { districts, getDistrict } from "@/lib/districts";
import { ogFile } from "@/lib/metadata";
import { renderOgImage } from "@/lib/og";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return [{ file: ogFile("home") }, ...districts.map((d) => ({ file: ogFile(d.slug) }))];
}

export async function GET(_req: Request, ctx: RouteContext<"/og/[file]">) {
  const { file } = await ctx.params;
  const district = getDistrict(file.replace(/\.png$/, ""));

  if (!district) {
    return renderOgImage({ title: hero.title, subtitle: ogHome.subtitle, image: hero.image });
  }
  return renderOgImage({
    title: districtCopy.title(district),
    subtitle: `${districtCopy.badge(district)}.`,
    image: district.image,
  });
}
