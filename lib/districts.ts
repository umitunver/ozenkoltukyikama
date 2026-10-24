// İlçe sayfalarının verisi. Türkçe ekler elle yazıldı; otomatik üretilmez.
//
//   genitive    → "Beylikdüzü’nün"      (… 10 mahallesinin tamamına geliyoruz)
//   locative    → "Beylikdüzü’nde"      (… hizmet verdiğimiz mahalleler)
//   locativeAdj → "Beylikdüzü’ndeki"    (… eviniz için fiyatı hemen öğrenin)
//   iAmIn       → "Beylikdüzü’ndeyim"   (WhatsApp hazır mesajı)

import type { ImageName } from "./images";

export type Faq = { q: string; a: string };

export type District = {
  slug: string;
  name: string;
  genitive: string;
  locative: string;
  locativeAdj: string;
  iAmIn: string;
  image: ImageName;
  imageAlt: string;
  neighborhoods: string[];
  description: string;
  about: [string, string];
  faq: Faq[];
};

export const districts: District[] = [
  {
    slug: "beylikduzu-koltuk-yikama",
    name: "Beylikdüzü",
    genitive: "Beylikdüzü’nün",
    locative: "Beylikdüzü’nde",
    locativeAdj: "Beylikdüzü’ndeki",
    iAmIn: "Beylikdüzü’ndeyim",
    image: "bolge-beylikduzu",
    imageAlt: "Beylikdüzü’nde site dairesinde köşe koltuk yıkama",
    neighborhoods: ["Adnan Kahveci", "Barış", "Büyükşehir", "Cumhuriyet", "Dereağzı", "Gürpınar", "Kavaklı", "Marmara", "Sahil", "Yakuplu"],
    description:
      "Beylikdüzü’ndeki evinize makinemizle geliyor, koltuğunuzu yerinde ve derinlemesine yıkıyoruz. Site ve rezidanslarda daireye kadar çıkıyoruz; koltuğu taşımanıza gerek yok.",
    about: [
      "Beylikdüzü’nde evlerin büyük kısmı site ve yüksek katlı rezidanslarda. Randevudan önce site girişi, otopark ve asansör bilgisini sizden alıyor, gelişimizi buna göre planlıyoruz.",
      "Yakuplu ve Kavaklı’dan Gürpınar ve Sahil Mahallesi’ne kadar ilçenin her yerine geliyoruz. Açık renkli köşe takımlarında ve kadife koltuklarda kumaşa uygun ürünle çalışıyor, fazla suyu iyice çekerek koltuğun çabuk kurumasını sağlıyoruz.",
    ],
    faq: [
      {
        q: "Beylikdüzü’nde hangi mahallelere geliyorsunuz?",
        a: "Adnan Kahveci, Barış, Büyükşehir, Cumhuriyet, Dereağzı, Gürpınar, Kavaklı, Marmara, Sahil ve Yakuplu dahil Beylikdüzü’nün 10 mahallesinin tamamına geliyoruz.",
      },
      {
        q: "Site ve rezidanslara geliyor musunuz?",
        a: "Evet. Güvenlikten giriş izni gerekiyorsa randevu sırasında haber vermeniz yeterli; makineyle daireye kadar çıkıyoruz.",
      },
      {
        q: "Beylikdüzü için ek yol ücreti var mı?",
        a: "Hayır, Beylikdüzü’nün tüm mahallelerinde aynı fiyat listesi geçerli.", // TODO: onayla
      },
      {
        q: "Aynı gün randevu alabilir miyim?",
        a: "Takvim uygunsa aynı gün gelebiliyoruz. En hızlı yol WhatsApp’tan fotoğraf ve adres göndermek.", // TODO: onayla
      },
    ],
  },
  {
    slug: "esenyurt-koltuk-yikama",
    name: "Esenyurt",
    genitive: "Esenyurt’un",
    locative: "Esenyurt’ta",
    locativeAdj: "Esenyurt’taki",
    iAmIn: "Esenyurt’tayım",
    image: "bolge-esenyurt",
    imageAlt: "Esenyurt’ta yıkama öncesi koltuk vakumlama",
    neighborhoods: [
      "Akçaburgaz", "Akevler", "Akşemseddin", "Ardıçlı", "Aşık Veysel", "Atatürk", "Bağlarçeşme", "Balıkyolu",
      "Barbaros Hayrettin Paşa", "Battalgazi", "Çınar", "Cumhuriyet", "Esenkent", "Fatih", "Gökevler", "Güzelyurt",
      "Hürriyet", "İncirtepe", "İnönü", "İstiklal", "Koza", "Mehmet Akif Ersoy", "Mehterçeşme", "Mevlana",
      "Namık Kemal", "Necip Fazıl Kısakürek", "Orhan Gazi", "Örnek", "Osmangazi", "Pınar", "Piri Reis", "Saadetdere",
      "Şehitler", "Selahaddin Eyyubi", "Süleymaniye", "Sultaniye", "Talatpaşa", "Turgut Özal", "Üçevler", "Yenikent",
      "Yeşilkent", "Yunus Emre", "Zafer",
    ],
    description:
      "Esenyurt’taki evinize gelip koltuk, köşe takımı ve sandalyelerinizi yerinde yıkıyoruz. Fotoğrafını gönderin, net fiyatı ve en yakın boş saati yazalım.",
    about: [
      "Esenyurt İstanbul’un en kalabalık ilçelerinden biri; çocuklu ve evcil hayvanlı evlerde koltuklar da en çok yorulan eşyalar oluyor. Yemek, süt ve çikolata lekeleri ile idrar kokusu için kumaşa uygun ürünle ön işlem yapıyor, ardından makineyle derinlemesine yıkıyoruz.",
      "Esenkent, Yenikent, Saadetdere, Pınar, Mehterçeşme ve diğer tüm mahallelere geliyoruz. Yüksek katlı binalarda asansör yoksa önceden haber verin, gelişimizi ona göre planlayalım.",
    ],
    faq: [
      {
        q: "Esenyurt’ta hangi mahallelere geliyorsunuz?",
        a: "Esenyurt’un 43 mahallesinin tamamına geliyoruz. Mahallenizi yukarıdaki listede görebilirsiniz; emin değilseniz WhatsApp’tan adresinizi yazın.",
      },
      {
        q: "Evcil hayvan kokusu çıkar mı?",
        a: "Çoğu durumda koku belirgin şekilde azalır ya da tamamen gider. Koku kumaşın altındaki süngere işlemişse bunu yıkamadan önce açıkça söylüyoruz.",
      },
      {
        q: "Esenyurt için ek yol ücreti var mı?",
        a: "Hayır, Esenyurt’un tüm mahallelerinde aynı fiyat listesi geçerli.", // TODO: onayla
      },
      {
        q: "Hafta sonu geliyor musunuz?",
        a: "Evet, cumartesi ve pazar günleri de randevu veriyoruz.", // TODO: onayla
      },
    ],
  },
  {
    slug: "avcilar-koltuk-yikama",
    name: "Avcılar",
    genitive: "Avcılar’ın",
    locative: "Avcılar’da",
    locativeAdj: "Avcılar’daki",
    iAmIn: "Avcılar’dayım",
    image: "bolge-avcilar",
    imageAlt: "Avcılar’da kumaş koltukta leke ön işlemi",
    neighborhoods: ["Ambarlı", "Cihangir", "Denizköşkler", "Firuzköy", "Gümüşpala", "Merkez", "Mustafa Kemal Paşa", "Tahtakale", "Üniversite", "Yeşilkent"],
    description:
      "Avcılar’daki evinize makinemizle geliyoruz; koltuğunuzu yerinde yıkıyor, leke ve kokuyu gideriyoruz. Taşıma yok, söküp takma yok.",
    about: [
      "Avcılar’da eski ve yeni binalar iç içe. Asansörsüz apartmanlarda makinemizi kendimiz taşıyoruz; sizin bir şey hazırlamanıza gerek yok, koltuğun etrafını biraz boşaltmanız yeterli.",
      "Göl ve denize yakın evlerde hava nemli olabiliyor. Bu yüzden yıkamanın sonunda fazla suyu iyice çekiyor, kurumayı hızlandırmak için nasıl havalandırmanız gerektiğini anlatıyoruz. Ambarlı, Cihangir, Denizköşkler, Gümüşpala, Üniversite ve Firuzköy dahil tüm mahallelere geliyoruz.",
    ],
    faq: [
      {
        q: "Avcılar’da hangi mahallelere geliyorsunuz?",
        a: "Ambarlı, Cihangir, Denizköşkler, Firuzköy, Gümüşpala, Merkez, Mustafa Kemal Paşa, Tahtakale, Üniversite ve Yeşilkent dahil Avcılar’ın 10 mahallesinin tamamına geliyoruz.",
      },
      {
        q: "Asansörsüz binalara geliyor musunuz?",
        a: "Evet. Makinemiz taşınabilir, merdivenle de çıkarıyoruz; bunun için ek ücret almıyoruz.", // TODO: onayla
      },
      {
        q: "Nemli havada koltuk ne kadar sürede kurur?",
        a: "Koltuk genellikle 4–8 saatte kurur; nemli ve kapalı havalarda bu süre biraz uzayabilir. Pencere açmak, klima ya da nem alma cihazı çalıştırmak kurumayı hızlandırır.",
      },
      {
        q: "Avcılar için ek yol ücreti var mı?",
        a: "Hayır, Avcılar’ın tüm mahallelerinde aynı fiyat listesi geçerli.", // TODO: onayla
      },
    ],
  },
  {
    slug: "buyukcekmece-koltuk-yikama",
    name: "Büyükçekmece",
    genitive: "Büyükçekmece’nin",
    locative: "Büyükçekmece’de",
    locativeAdj: "Büyükçekmece’deki",
    iAmIn: "Büyükçekmece’deyim",
    image: "bolge-buyukcekmece",
    imageAlt: "Büyükçekmece’de bahçeli evde köşe koltuk yıkama",
    neighborhoods: [
      "19 Mayıs", "Ahmediye", "Alkent 2000", "Atatürk", "Bahçelievler", "Çakmaklı", "Celaliye", "Cumhuriyet",
      "Dizdariye", "Ekinoba", "Fatih", "Güzelce", "Hürriyet", "Kamiloba", "Karaağaç", "Kumburgaz", "Mimaroba",
      "Mimarsinan", "Murat Çeşme", "Pınartepe", "Sinanoba", "Türkoba", "Ulus", "Yenimahalle",
    ],
    description:
      "Büyükçekmece’deki apartman, site ve müstakil evlere geliyoruz. Koltuk, köşe takımı ve sandalyelerinizi evinizde, yerinde yıkıyoruz.",
    about: [
      "Büyükçekmece’de bahçeli site evleri ve müstakil evler çok. Geniş köşe takımlarını ve büyük oturma gruplarını tek randevuda yıkayabiliyoruz.",
      "Mimarsinan, Kumburgaz, Alkent 2000, Kamiloba, Celaliye, Fatih ve diğer tüm mahallelere geliyoruz. Yazlık olarak kullanılan evlerde, uzun süre kapalı kalan koltukların toz ve rutubet kokusunu gidermek için sezon açılışında yıkama iyi bir başlangıç olur.",
    ],
    faq: [
      {
        q: "Büyükçekmece’de hangi mahallelere geliyorsunuz?",
        a: "Mimarsinan, Kumburgaz, Alkent 2000, Kamiloba ve Celaliye dahil Büyükçekmece’nin 24 mahallesinin tamamına geliyoruz.",
      },
      {
        q: "Yazlık evlere geliyor musunuz?",
        a: "Evet. Sezon açılışında veya kapanışında koltuk, minder ve yatakları tek randevuda yıkayabiliyoruz.",
      },
      {
        q: "Merkezden uzak mahalleler için ek ücret var mı?",
        a: "Merkezden uzak mahalleler için ek ücret olup olmadığını fiyat verirken açıkça yazıyoruz; sonradan sürpriz ücret çıkmaz.", // TODO: onayla
      },
      {
        q: "Ne kadar önceden randevu almalıyım?",
        a: "Yaz aylarında talep arttığı için birkaç gün önceden yazmanızı öneririz. Diğer dönemlerde genellikle kısa sürede randevu verebiliyoruz.",
      },
    ],
  },
];

export function getDistrict(slug: string) {
  return districts.find((d) => d.slug === slug);
}
