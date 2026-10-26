// Ana sayfa ve ilçe sayfalarının ortak bölüm metinleri (Figma'dan birebir).
// İlçeye özel metinler `lib/districts.ts`, iletişim ve fiyatlar `lib/site.ts` içinde.

import type { Faq } from "./districts";
import type { ImageName } from "./images";

export type IconName = "house" | "money" | "paw" | "clock";

export const nav = [
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Fiyatlar", href: "#fiyatlar" },
  { label: "Nasıl çalışır?", href: "#nasil-calisir" },
  { label: "Bölgeler", href: "/#bolgeler" },
  { label: "SSS", href: "#sss" },
];

export const hero = {
  badge: "Beylikdüzü, Esenyurt, Avcılar ve Büyükçekmece’de hizmet veriyoruz",
  title: "İstanbul’da evinizde koltuk yıkama",
  description:
    "Profesyonel makineyle koltuğunuzu evinizde, derinlemesine yıkıyoruz. Leke, koku ve toz gider.",
  image: "koltuk-yikama-evde" as ImageName,
  imageAlt: "Evde makineyle gri kumaş koltuk yıkama",
  whatsappLabel: "WhatsApp’tan fiyat al",
  callLabelMobile: "Hemen ara",
  bullets: ["Fotoğrafla ücretsiz fiyat", "Size uygun saatte geliriz", "Ödeme iş bitince"],
  card: { title: "Fotoğraf gönderin", text: "Fiyatı birkaç dakikada yazalım" },
};

export const trust: { icon: IconName; title: string; text: string }[] = [
  { icon: "house", title: "Evinizde yıkama", text: "Koltuk taşınmaz" },
  { icon: "money", title: "Net fiyat", text: "Sonradan ek ücret yok" },
  { icon: "paw", title: "Ev dostu ürünler", text: "Çocuk ve evcil hayvan" },
  { icon: "clock", title: "Hızlı kuruma", text: "Genellikle 4–8 saat" },
];

export type Service = {
  name: string;
  text: string;
  image: ImageName;
  imageAlt: string;
  /** Görsel yan yana "önce | sonra" ise kartta yalnızca sağ (sonra) yarısı gösterilir. */
  rightHalf?: boolean;
};

export const services = {
  eyebrow: "Hizmetler",
  title: "Neleri yıkıyoruz?",
  linkLabel: "Fiyat al",
  items: [
    {
      name: "Koltuk yıkama",
      text: "Tekli, ikili ve üçlü koltuklar; kumaş, kadife ve keten.",
      image: "koltuk-yikama-evde",
      imageAlt: "Evde makineyle gri kumaş koltuk yıkama",
    },
    {
      name: "Köşe koltuk yıkama",
      text: "L ve U köşe takımları, minderleri dahil.",
      image: "bolge-buyukcekmece",
      imageAlt: "Bahçeli evde köşe koltuk yıkama",
    },
    {
      name: "Sandalye yıkama",
      text: "Minderli yemek ve çalışma sandalyeleri.",
      image: "once-sonra-sandalye",
      imageAlt: "Yıkama sonrası temiz, krem rengi minderli sandalye",
      rightHalf: true,
    },
    {
      name: "Yatak yıkama",
      text: "Tek ve çift kişilik yataklar, iki yüzü.",
      image: "yatak-yikama",
      imageAlt: "Çift kişilik yatak yıkama",
    },
  ] satisfies Service[],
};

export const howItWorks = {
  eyebrow: "Nasıl çalışır?",
  title: "Üç adımda tertemiz koltuk",
  buttonLabel: "Fotoğraf gönder",
  steps: [
    {
      title: "Fotoğrafını gönderin",
      text: "WhatsApp’tan koltuğunuzun fotoğrafını ve ilçenizi yazın.",
      image: "koltuk-fotografi-cekme" as ImageName,
      imageAlt: "Lekeli koltuğun telefonla fotoğrafını çeken müşteri",
    },
    {
      title: "Fiyat ve saati netleştirelim",
      text: "Net fiyatı söyleyelim, size uyan gün ve saati birlikte seçelim.",
      image: "koltuk-yikama-randevuya-gelis" as ImageName,
      imageAlt: "Koltuk yıkama makinesiyle apartmana gelen usta",
    },
    {
      title: "Evinizde yıkayalım",
      text: "Zemini koruyarak çalışır, işi bitirince ortalığı toparlarız.",
      image: "koltuk-yikama-evde" as ImageName,
      imageAlt: "Evde makineyle gri kumaş koltuk yıkama",
    },
  ],
};

export const included = {
  eyebrow: "Yıkamaya dahil olanlar",
  title: "Koltuğunuza neler yapıyoruz?",
  items: [
    { title: "Toz alma", text: "Yıkamadan önce koltuk vakumlanır, toz ve kırıntılar alınır." },
    { title: "Leke ön işlemi", text: "Lekelere kumaşa uygun ürünle önceden işlem yapılır." },
    { title: "Makineyle derin yıkama", text: "Su kumaşın içine püskürtülür ve kirle birlikte geri çekilir." },
    { title: "Koku giderme", text: "Ter, yemek ve evcil hayvan kokularına karşı." },
    { title: "Son emme", text: "Fazla nem çekilir, koltuk daha hızlı kurur." },
  ],
  note: "Minderler, kollar ve sırt kısmı fiyata dahildir.",
};

export const pricing = {
  eyebrow: "Fiyatlar",
  title: "Koltuk yıkama fiyatları",
  text: "Fiyatlar koltuğun boyutuna ve kumaşına göre küçük farklılık gösterebilir. Net fiyatı fotoğraf üzerinden söylüyoruz.",
  tableCaption: "Koltuk yıkama fiyat listesi",
  pricePlaceholder: "Fiyat için yazın",
  card: {
    title: "Net fiyat için fotoğraf gönderin",
    text: "Koltuğunuzun fotoğrafını ve ilçenizi WhatsApp’tan yazın, birkaç dakika içinde fiyatı ve boş saatleri iletelim.",
    whatsappLabel: "WhatsApp’tan yaz",
    callLabel: "Ya da arayın",
  },
};

// Şu anki görseller yapay zekâ ile üretildi; `site.showBeforeAfter` kapalıyken gösterilmez.
export const beforeAfter = {
  eyebrow: "Önce / sonra",
  title: "Yaptığımız işlerden",
  before: "Önce",
  after: "Sonra",
  items: [
    { title: "Kadife üçlü koltuk", location: "Beylikdüzü", image: "once-sonra-kadife-koltuk" as ImageName, imageAlt: "Kadife üçlü koltuk yıkama önce ve sonra" },
    { title: "Köşe koltuk takımı", location: "Esenyurt", image: "once-sonra-kose-koltuk" as ImageName, imageAlt: "Köşe koltuk yıkama önce ve sonra" },
    { title: "Yemek sandalyeleri", location: "Avcılar", image: "once-sonra-sandalye" as ImageName, imageAlt: "Sandalye yıkama önce ve sonra" },
  ],
};

export type GalleryItem = { image: ImageName; label: string; alt: string };

export const gallery = {
  eyebrow: "Galeri",
  title: "Yıkama nasıl görünüyor?",
  text: "Vakumlamadan son emmeye kadar bir koltuk yıkamasının aşamaları.",
  main: { image: "kirli-su-cekimi", label: "Kirli suyun çekilmesi", alt: "Koltuktan kirli suyun makineyle çekilmesi" } satisfies GalleryItem,
  items: [
    { image: "bolge-avcilar", label: "Leke ön işlemi", alt: "Kumaş koltukta leke ön işlemi" },
    { image: "bolge-esenyurt", label: "Önce vakumlama", alt: "Yıkama öncesi koltuk vakumlama" },
    { image: "yikama-sonrasi-koltuk", label: "Yıkama sonrası", alt: "Yıkama sonrası temiz gri koltuk" },
    { image: "yatak-yikama", label: "Yatak yıkama", alt: "Çift kişilik yatak yıkama" },
  ] satisfies GalleryItem[],
  // İlçe sayfasında hero fotoğrafı galeride tekrar etmesin diye yerine bunlar kullanılır.
  alternates: [
    { image: "bolge-beylikduzu", label: "Köşe koltuk yıkama", alt: "Site dairesinde köşe koltuk yıkama" },
    { image: "bolge-buyukcekmece", label: "Köşe takımı yıkama", alt: "Bahçeli evde köşe koltuk yıkama" },
  ] satisfies GalleryItem[],
};

export const about = {
  eyebrow: "İşi kim yapıyor?",
  title: "Kapınıza ekip değil, işin sahibi gelir",
  text: "Merhaba, ben Ümit. Özen Koltuk Yıkama’da randevuya kendim geliyor, koltuğu kendim yıkıyorum. Bu yüzden her işin sonucu doğrudan benim sorumluluğumda.",
  bullets: [
    "Randevu saatinde gelirim, gecikirsem önceden haber veririm",
    "Çalışırken zemini ve eşyaları örtüyle korurum",
    "Sonucu birlikte kontrol etmeden ödeme almam",
  ],
  image: "koltuk-yikama-randevuya-gelis" as ImageName,
  imageAlt: "Koltuk yıkama makinesiyle apartmana gelen usta",
};

export const areas = {
  eyebrow: "Bölgeler",
  title: "Hizmet verdiğimiz ilçeler",
  text: "İstanbul Avrupa Yakası’nda bu dört ilçede hizmet veriyoruz. Yakın bir semtteyseniz yine de yazın.",
  otherEyebrow: "Diğer bölgeler",
  otherTitle: "Yakındaki diğer hizmet bölgelerimiz",
  chipSuffix: "koltuk yıkama",
};

export const faq = {
  eyebrow: "SSS",
  title: "Sık sorulan sorular",
  text: "Aklınızdaki soru burada yoksa WhatsApp’tan sorun.",
  items: [
    {
      q: "Koltuk yıkandıktan sonra ne kadar sürede kurur?",
      a: "Kumaşa ve havaya göre genellikle 4–8 saat içinde kurur. Pencereleri açık tutmanız kurumayı hızlandırır. Kuruyana kadar üzerine örtü sermemenizi öneririz.",
    },
    {
      q: "Koltuğu sizin yerinize mi götürüyorsunuz?",
      a: "Hayır. Makinemizle evinize geliyoruz, yıkamayı evinizde yapıyoruz. Taşıma, söküp takma derdi yok.",
    },
    {
      q: "Her leke çıkar mı?",
      a: "Yemek, içecek, ter ve toz lekelerinin büyük çoğunluğu çıkar. Çok eski, boya veya mürekkep lekelerinde işe başlamadan önce açıkça ne kadarının çıkabileceğini söylüyoruz.",
    },
    {
      q: "Kullandığınız ürünler çocuklar ve evcil hayvanlar için güvenli mi?",
      a: "Evlerde kullanıma uygun, kumaşa zarar vermeyen ürünler kullanıyoruz. Yıkama sonrası kumaşta kalıntı bırakmamak için durulama yapıyoruz.",
    },
    {
      q: "Fiyatı nasıl öğrenebilirim?",
      a: "WhatsApp’tan koltuğunuzun fotoğrafını gönderin, net fiyatı ve uygun saatleri yazalım. Fiyat teklifi ücretsizdir.",
    },
    {
      q: "Ödemeyi ne zaman yapıyorum?",
      a: "Ödemeyi iş bittikten ve sonucu gördükten sonra yapıyorsunuz. Nakit veya havale/EFT kabul ediyoruz.",
    },
  ] satisfies Faq[],
};

export const finalCta = {
  title: "Koltuğunuzun fotoğrafını gönderin, fiyatı hemen yazalım",
  whatsappLabel: "WhatsApp’tan fiyat al",
};

export const footer = {
  description: "Beylikdüzü, Esenyurt, Avcılar ve Büyükçekmece’de evde koltuk, köşe takımı, sandalye ve yatak yıkama.",
  servicesTitle: "Hizmetler",
  areasTitle: "Bölgeler",
  contactTitle: "İletişim",
  whatsappLabel: "WhatsApp",
};

export const breadcrumb = { home: "Ana sayfa", areas: "Bölgeler" };

// İlçe sayfası şablon metinleri. Ekler `lib/districts.ts` içindeki elle yazılmış alanlardan gelir.
type D = { name: string; genitive: string; locative: string; locativeAdj: string; neighborhoods: string[] };

export const districtCopy = {
  pageName: (d: D) => `${d.name} koltuk yıkama`,
  badge: (d: D) => `${d.genitive} ${d.neighborhoods.length} mahallesinin tamamına geliyoruz`,
  title: (d: D) => `${d.name} koltuk yıkama`,
  neighborhoodsEyebrow: "Mahalleler",
  neighborhoodsTitle: (d: D) => `${d.locative} hizmet verdiğimiz mahalleler`,
  neighborhoodsText: (d: D) =>
    `${d.genitive} ${d.neighborhoods.length} mahallesinin tamamına evinize gelerek hizmet veriyoruz.`,
  aboutTitle: (d: D) => `${d.locative} koltuk yıkama`,
  servicesTitle: (d: D) => `${d.locative} neleri yıkıyoruz?`,
  pricingTitle: (d: D) => `${d.name} koltuk yıkama fiyatları`,
  beforeAfterTitle: (d: D) => `${d.locative} yaptığımız işlerden`,
  faqTitle: (d: D) => `${d.name} için sık sorulanlar`,
  finalTitle: (d: D) => `${d.locativeAdj} eviniz için fiyatı hemen öğrenin`,
  metaTitle: (d: D) => `${d.name} Koltuk Yıkama | Evinizde Yerinde Yıkama – Özen Koltuk Yıkama`,
  metaDescription: (d: D) =>
    `${d.locative} evinizde koltuk, köşe takımı, sandalye ve yatak yıkama. ${d.neighborhoods.length} mahallenin tamamına geliyoruz. Fotoğraf gönderin, fiyatı WhatsApp’tan öğrenin.`,
  serviceType: "Koltuk yıkama",
};

// Mahalle sayfası şablon metinleri. `n` mahalle (`lib/neighborhoods.ts`), `d` bağlı olduğu ilçe.
type N = { heading: string; officialName: string; locative: string; locativeAdj: string; dative: string };

export const neighborhoodCopy = {
  pageName: (n: N) => `${n.heading} koltuk yıkama`,
  badge: (n: N, d: D) => `${d.name} · ${n.officialName}’ne evinize geliyoruz`,
  title: (n: N) => `${n.heading} koltuk yıkama`,
  quickEyebrow: "Kısa bilgiler",
  quickTitle: (n: N) => `${n.locative} koltuk yıkama hakkında bilmeniz gerekenler`,
  /** "Kısa bilgiler" kutusunun ilk cümlesi; ardından mahalleye özel `summary` gelir. */
  quickLead: (n: N, d: D) =>
    `Özen Koltuk Yıkama, ${d.genitive} ${n.officialName}’nde koltuk, köşe takımı, sandalye ve yatak yıkamayı makinesiyle evinize gelerek yapar. Fiyat, WhatsApp’tan gönderdiğiniz fotoğrafa göre ücretsiz verilir; ödeme iş bitince alınır.`,
  factLabels: {
    service: "Hizmet",
    area: "Hizmet bölgesi",
    price: "Fiyat",
    drying: "Kuruma süresi",
    hours: "Çalışma saatleri",
    payment: "Ödeme",
  },
  factValues: {
    service: "Evde koltuk, köşe takımı, sandalye ve yatak yıkama",
    area: (n: N, d: D) => `${n.officialName}, ${d.name} / İstanbul`,
    price: "Fotoğrafla ücretsiz ve net fiyat (WhatsApp)",
    drying: "Kumaşa ve havaya göre genellikle 4–8 saat",
    payment: "İş bittikten sonra; nakit veya havale/EFT",
  },
  aboutTitle: (n: N) => `${n.locative} evinize nasıl geliyoruz?`,
  servicesTitle: (n: N) => `${n.locative} neleri yıkıyoruz?`,
  pricingTitle: (n: N) => `${n.heading} koltuk yıkama fiyatları`,
  faqTitle: (n: N) => `${n.heading} için sık sorulanlar`,
  nearbyEyebrow: "Yakın mahalleler",
  nearbyTitle: (n: N) => `${n.dative} yakın mahallelerde de evinize geliyoruz`,
  nearbyAll: (d: D) => `${d.genitive} tüm mahalleleri`,
  finalTitle: (n: N) => `${n.locativeAdj} eviniz için fiyatı hemen öğrenin`,
  metaTitle: (n: N, d: D) => `${n.heading} Koltuk Yıkama, ${d.name} | Özen`,
  metaDescription: (n: N, d: D) =>
    `${n.officialName}, ${d.name}: koltuk, köşe takımı, sandalye ve yatak yıkamayı evinizde yapıyoruz. Fotoğraf gönderin, net fiyatı WhatsApp’tan öğrenin.`,
  ogSubtitle: (n: N, d: D) => `${d.name} · ${n.officialName}’ne evinize geliyoruz.`,
};

export const stickyBar = { call: "Ara", whatsapp: "WhatsApp’tan yaz" };

export const ogHome = {
  subtitle: "Beylikdüzü, Esenyurt, Avcılar ve Büyükçekmece’de yerinde, profesyonel koltuk yıkama.",
};

export const seo = {
  homeTitle: "Beylikdüzü Koltuk Yıkama | Esenyurt, Avcılar, Büyükçekmece – Özen",
  homeDescription:
    "Beylikdüzü, Esenyurt, Avcılar ve Büyükçekmece’de evinizde profesyonel koltuk yıkama. Fotoğraf gönderin, net fiyatı WhatsApp’tan hemen öğrenin.",
};
