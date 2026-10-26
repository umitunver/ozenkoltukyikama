// Mahalle detay sayfalarının verisi: /<ilçe-slug>/<mahalle-slug>
// Mahalle kayıtları yalnızca adı, Türkçe ekleri ve komşuları tutar (elle yazıldı). Sayfa metni hizmet odaklıdır ve
// `lib/content.ts` içindeki şablonlardan gelir; her mahalleye sırayla bir hizmet konusu (köşe koltuk, leke çıkarma,
// yatak …) ve o konunun görseli atanır. Yeni bir mahalle eklemek için listeye bir kayıt eklemek yeterli; sayfa,
// sitemap, OG görseli, ilçe sayfasındaki bağlantı ve llms.txt otomatik oluşur.

import { neighborhoodThemes, type NeighborhoodTheme } from "./content";
import type { ImageName } from "./images";
import { avcilarNeighborhoods } from "./neighborhoods-avcilar";
import { beylikduzuNeighborhoods } from "./neighborhoods-beylikduzu";
import { buyukcekmeceNeighborhoods } from "./neighborhoods-buyukcekmece";
import { esenyurtNeighborhoods } from "./neighborhoods-esenyurt";

export type NeighborhoodEntry = {
  /** URL parçası: "yakuplu" → /beylikduzu-koltuk-yikama/yakuplu */
  slug: string;
  /** Bağlı olduğu ilçenin slug'ı (`lib/districts.ts`) */
  district: string;
  /** İlçe verisindeki `neighborhoods` listesindeki adla birebir aynı */
  name: string;
  /** Başlıklarda kullanılan ad. Başka ilçede de olan adlarda "Avcılar Cihangir" gibi, diğerlerinde `name`. */
  heading: string;
  officialName: string; // "Yakuplu Mahallesi"
  locative: string; // "Yakuplu’da"
  locativeAdj: string; // "Yakuplu’daki"
  dative: string; // "Yakuplu’ya"
  iAmIn: string; // "Yakuplu’dayım"
  /** Komşu mahallelerin slug'ları; başka ilçedekiler "<ilçe-slug>/<mahalle-slug>" biçiminde */
  nearby: string[];
  /** Mahallenin Vikipedi sayfası (JSON-LD `sameAs`) */
  wikipedia?: string;
};

export type Neighborhood = NeighborhoodEntry & {
  /** Sayfanın öne çıkan hizmet konusu ve görseli */
  theme: NeighborhoodTheme;
  image: ImageName;
  imageAlt: string;
  /** Metin varyantlarını seçmek için listedeki sırası */
  index: number;
};

export const neighborhoods: Neighborhood[] = [
  ...beylikduzuNeighborhoods,
  ...avcilarNeighborhoods,
  ...buyukcekmeceNeighborhoods,
  ...esenyurtNeighborhoods,
].map((n, index) => {
  const theme = neighborhoodThemes[index % neighborhoodThemes.length];
  return { ...n, theme, image: theme.image, imageAlt: theme.imageAlt(n), index };
});

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
