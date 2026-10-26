// İşletme bilgileri, fiyatlar ve site genelindeki ayarlar.
// İletişim bilgisi veya fiyat değişince yalnızca bu dosyayı düzenleyin.

export const site = {
  name: "Özen Koltuk Yıkama",
  /** Ana ekrana eklenince ikonun altında görünen kısa ad (manifest + apple-mobile-web-app-title). */
  shortName: "Özen",
  domain: "https://ozenkoltukyikama.com",
  phoneDisplay: "0501 320 52 95",
  phoneHref: "tel:+905013205295",
  phoneE164: "+905013205295",
  whatsapp: "905013205295",
  email: "iletisim@ozenkoltukyikama.com",
  address: { neighborhood: "Saadetdere Mah.", district: "Esenyurt", city: "İstanbul", country: "TR" },
  hours: "Her gün 09:00 – 21:00", // TODO: işletme sahibi onaylayacak
  // JSON-LD için çalışma saatinin makinece okunur hâli; `hours` değişirse bunu da güncelleyin.
  openingHours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "09:00",
    closes: "21:00",
  },
  areas: ["Beylikdüzü", "Esenyurt", "Avcılar", "Büyükçekmece"],
  // Sosyal medya hesapları: footer bağlantıları ve JSON-LD `sameAs`
  social: { facebook: "https://www.facebook.com/profile.php?id=61595719869436" },
  gaMeasurementId: "G-E4G2FDMDM7",
  // Arama motoru site doğrulama kodları (<meta name="…-verification">)
  verification: { yandex: "6af29c627c51c0b9" },

  // Önce / sonra bölümü. Şu anki görseller yapay zekâ ile üretildi, gerçek iş sonucu değil.
  // Gerçek fotoğraflar `lib/content.ts` içindeki `beforeAfter` listesine eklenince `true` yapın.
  showBeforeAfter: false,
} as const;

export type Price = {
  name: string;
  note: string;
  /** TL cinsinden fiyat. `null` iken sitede "Fiyat için yazın" görünür. */
  price: number | null;
};

// TODO: fiyatlar girilecek. Figma'daki "000 ₺" yalnızca yer tutucudur.
export const prices: Price[] = [
  { name: "Tekli koltuk / berjer", note: "Kumaş veya kadife", price: null },
  { name: "İkili koltuk", note: "2 kişilik kanepe", price: null },
  { name: "Üçlü koltuk", note: "3 kişilik kanepe", price: null },
  { name: "Köşe (L) koltuk", note: "Standart boy köşe takımı", price: null },
  { name: "Koltuk takımı 3+3+1+1", note: "En çok tercih edilen", price: null },
  { name: "Sandalye", note: "Adet fiyatı, minderli", price: null },
  { name: "Yatak", note: "Çift kişilik, iki yüz", price: null },
];

export const whatsappMessages = {
  home: "Merhaba, koltuk yıkama için fiyat almak istiyorum.",
  /** `iAmIn` ilçe verisindeki elle yazılmış ek: "Beylikdüzü’ndeyim" gibi. */
  district: (iAmIn: string) => `Merhaba, ${iAmIn}. Koltuk yıkama için fiyat almak istiyorum.`,
  service: (serviceName: string) => `Merhaba, ${serviceName} için fiyat almak istiyorum.`,
};

export function whatsappHref(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function formatPrice(price: number) {
  return `${new Intl.NumberFormat("tr-TR").format(price)} ₺`;
}

/** Fiyatlar girildiyse JSON-LD `priceRange` için "1.000 ₺ – 4.500 ₺" biçiminde aralık döndürür. */
export function priceRange() {
  const values = prices.map((p) => p.price).filter((p): p is number => p !== null);
  if (values.length === 0) return undefined;
  const min = Math.min(...values);
  const max = Math.max(...values);
  return min === max ? formatPrice(min) : `${formatPrice(min)} – ${formatPrice(max)}`;
}
