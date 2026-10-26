// Mahalle detay sayfalarının verisi: /<ilçe-slug>/<mahalle-slug>
// Türkçe ekler elle yazıldı; yerel bilgiler kaynaklarıyla birlikte (bkz. `sources`) araştırılarak eklendi.
// Yeni bir mahalle eklemek için listeye bir kayıt eklemek yeterli; sayfa, sitemap, OG görseli,
// ilçe sayfasındaki bağlantı ve llms.txt otomatik oluşur.

import type { Faq } from "./districts";
import { avcilarNeighborhoods } from "./neighborhoods-avcilar";
import { beylikduzuNeighborhoods } from "./neighborhoods-beylikduzu";
import { buyukcekmeceNeighborhoods } from "./neighborhoods-buyukcekmece";
import { esenyurtNeighborhoods1 } from "./neighborhoods-esenyurt-1";
import { esenyurtNeighborhoods2 } from "./neighborhoods-esenyurt-2";
import type { ImageName } from "./images";

export type Neighborhood = {
  /** URL parçası: "yakuplu" → /beylikduzu-koltuk-yikama/yakuplu */
  slug: string;
  /** Bağlı olduğu ilçenin slug'ı (`lib/districts.ts`) */
  district: string;
  /** İlçe verisindeki `neighborhoods` listesindeki adla birebir aynı */
  name: string;
  /** Başlıklarda kullanılan ad. Gündelik kelime olan adlarda "Barış Mahallesi" gibi, diğerlerinde `name`. */
  heading: string;
  officialName: string; // "Yakuplu Mahallesi"
  locative: string; // "Yakuplu’da"
  locativeAdj: string; // "Yakuplu’daki"
  dative: string; // "Yakuplu’ya"
  iAmIn: string; // "Yakuplu’dayım"
  image: ImageName;
  imageAlt: string;
  /** Hero açıklaması */
  description: string;
  /** "Kısa bilgiler" kutusunun mahalleye özel cümlesi (yapay zekâ aramaları için doğrudan cevap) */
  summary: string;
  /** Mahalleye özel kısa bilgiler (Konum, Konut yapısı, Yakın noktalar …) */
  facts: { label: string; value: string }[];
  about: string[];
  /** Komşu mahallelerin slug'ları; başka ilçedekiler "<ilçe-slug>/<mahalle-slug>" biçiminde */
  nearby: string[];
  faq: Faq[];
  /** Mahallenin Vikipedi sayfası (JSON-LD `sameAs`) */
  wikipedia?: string;
  /** Yerel bilgilerin kaynakları (sayfada gösterilmez, düzenleme için) */
  sources?: string[];
};

export const neighborhoods: Neighborhood[] = [
  ...beylikduzuNeighborhoods,
  ...avcilarNeighborhoods,
  ...buyukcekmeceNeighborhoods,
  ...esenyurtNeighborhoods1,
  ...esenyurtNeighborhoods2,
];

export function neighborhoodsOf(districtSlug: string) {
  return neighborhoods.filter((n) => n.district === districtSlug);
}

export function getNeighborhood(districtSlug: string, slug: string) {
  return neighborhoods.find((n) => n.district === districtSlug && n.slug === slug);
}

/** İlçe sayfasındaki mahalle çipini sayfaya bağlamak için ada göre arar. */
export function findNeighborhoodByName(districtSlug: string, name: string) {
  return neighborhoods.find((n) => n.district === districtSlug && n.name === name);
}

export function neighborhoodPath(n: Pick<Neighborhood, "district" | "slug">) {
  return `/${n.district}/${n.slug}`;
}

/** `nearby` listesini sayfası olan mahallelere çevirir; henüz sayfası olmayanlar atlanır. */
export function resolveNearby(n: Neighborhood) {
  return n.nearby
    .map((ref) => {
      const [district, slug] = ref.includes("/") ? ref.split("/") : [n.district, ref];
      return getNeighborhood(district, slug);
    })
    .filter((x) => x !== undefined);
}
