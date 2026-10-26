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
      "Beylikdüzü’nde koltuk yıkama, köşe koltuk yıkama ve leke çıkarma hizmetini Kärcher Puzzi 8/1 profesyonel makinesiyle yerinde yapıyoruz. Leke, koku ve toz kumaşın derinliğinden alınır.",
    about: [
      "Beylikdüzü’nde koltuk, köşe takımı, sandalye ve yatakları Kärcher Puzzi 8/1 ile püskürtme-emme yöntemiyle yıkıyoruz. Önce koltuk vakumlanır, lekelere kumaşa uygun ön işlem yapılır; ardından temiz su kumaşın içine püskürtülüp kirle birlikte geri çekilir.",
      "Açık renkli köşe takımlarında ve kadife koltuklarda kumaşa uygun ürünle, nemi düşük tutarak çalışıyoruz. Son emmeyle fazla su alındığı için koltuk genellikle 4–8 saatte kurur. Yakuplu ve Kavaklı’dan Gürpınar ve Sahil’e kadar ilçenin tüm mahallelerinde aynı hizmeti veriyoruz.",
    ],
    faq: [
      {
        q: "Beylikdüzü’nde hangi mahallelere geliyorsunuz?",
        a: "Adnan Kahveci, Barış, Büyükşehir, Cumhuriyet, Dereağzı, Gürpınar, Kavaklı, Marmara, Sahil ve Yakuplu dahil Beylikdüzü’nün 10 mahallesinin tamamına geliyoruz.",
      },
      {
        q: "Beylikdüzü’nde leke çıkarma da yapıyor musunuz?",
        a: "Evet. Yemek, içecek, ter ve evcil hayvan lekelerine kumaşa uygun ön işlem yapıp ardından koltuğu makineyle yıkıyoruz. Çıkmayabilecek lekeleri işe başlamadan önce söylüyoruz.",
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
      "Akçaburgaz", "Akevler", "Akşemseddin", "Ardıçlı", "Aşık Veysel", "Atatürk", "Merkez (Bağlarçeşme)", "Balıkyolu",
      "Barbaros Hayrettin Paşa", "Battalgazi", "Çınar", "Cumhuriyet", "Esenkent", "Fatih", "Gökevler", "Güzelyurt",
      "Hürriyet", "İncirtepe", "İnönü", "İstiklal", "Koza", "Mehmet Akif Ersoy", "Mehterçeşme", "Mevlana",
      "Namık Kemal", "Necip Fazıl Kısakürek", "Orhan Gazi", "Örnek", "Osmangazi", "Pınar", "Piri Reis", "Saadetdere",
      "Şehitler", "Selahaddin Eyyubi", "Süleymaniye", "Sultaniye", "Talatpaşa", "Turgut Özal", "Üçevler", "Yenikent",
      "Yeşilkent", "Yunus Emre", "Zafer",
    ],
    description:
      "Esenyurt’ta koltuk, köşe takımı, sandalye ve yatak yıkama ile leke çıkarma. Kärcher Puzzi 8/1 ile yerinde derinlemesine temizlik; fotoğraf gönderin, net fiyatı hemen yazalım.",
    about: [
      "Çocuklu ve evcil hayvanlı evlerde koltuklar en çok yıpranan eşyalardır. Yemek, süt ve çikolata lekeleri ile idrar kokusu için kumaşa uygun ürünle ön işlem yapıyor, ardından Kärcher Puzzi 8/1 ile koltuğu derinlemesine yıkıyoruz.",
      "Püskürtme-emme yönteminde su kumaşın içine püskürtülür ve kirle birlikte geri çekilir; kumaşta deterjan kalıntısı kalmaz. Esenkent, Yenikent, Saadetdere, Pınar, Mehterçeşme dahil Esenyurt’un 43 mahallesinde aynı hizmeti veriyoruz.",
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
      "Avcılar’da profesyonel koltuk yıkama ve leke çıkarma. Kärcher Puzzi 8/1 ile koltuk, köşe takımı ve yataklarınızı yerinde yıkıyor, leke ve kokuyu kumaşın derinliğinden gideriyoruz.",
    about: [
      "Avcılar’da koltuk yıkamayı Kärcher Puzzi 8/1 profesyonel püskürtme-emme makinesiyle yapıyoruz. Koltuk önce vakumlanır, lekelere kumaşa uygun ön işlem yapılır; ardından temiz su kumaşın içine püskürtülüp kir ve lekeyle birlikte geri çekilir.",
      "Yıkamanın sonunda fazla suyu iyice çekiyor, kumaşta ürün kalıntısı bırakmamak için durulama yapıyoruz; koltuk genellikle 4–8 saatte kurur. Ambarlı, Cihangir, Denizköşkler, Gümüşpala, Üniversite ve Firuzköy dahil Avcılar’ın tüm mahallelerinde hizmet veriyoruz.",
    ],
    faq: [
      {
        q: "Avcılar’da hangi mahallelere geliyorsunuz?",
        a: "Ambarlı, Cihangir, Denizköşkler, Firuzköy, Gümüşpala, Merkez, Mustafa Kemal Paşa, Tahtakale, Üniversite ve Yeşilkent dahil Avcılar’ın 10 mahallesinin tamamına geliyoruz.",
      },
      {
        q: "Avcılar’da hangi eşyaları yıkıyorsunuz?",
        a: "Tekli, ikili ve üçlü koltuklar, L ve U köşe takımları, minderli sandalyeler ve tek ya da çift kişilik yatakları yıkıyoruz. Kumaş, kadife ve keten döşemelerde kumaşa uygun ürün kullanıyoruz.",
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
      "Büyükçekmece’de koltuk yıkama, köşe koltuk yıkama ve leke çıkarma. Kärcher Puzzi 8/1 ile koltuk, sandalye ve yataklarınızı yerinde, derinlemesine yıkıyoruz.",
    about: [
      "Geniş köşe takımlarını, büyük oturma gruplarını, sandalye ve yatakları tek randevuda yıkıyoruz. Kärcher Puzzi 8/1 ile su kumaşın içine püskürtülür ve kirle birlikte geri çekilir; leke, toz ve koku kumaşın derinliğinden alınır.",
      "Uzun süre kapalı kalan koltuklardaki toz ve rutubet kokusunu derinlemesine yıkamayla gideriyoruz. Mimarsinan, Kumburgaz, Alkent 2000, Kamiloba, Celaliye ve Fatih dahil Büyükçekmece’nin 24 mahallesinde aynı hizmeti veriyoruz.",
    ],
    faq: [
      {
        q: "Büyükçekmece’de hangi mahallelere geliyorsunuz?",
        a: "Mimarsinan, Kumburgaz, Alkent 2000, Kamiloba ve Celaliye dahil Büyükçekmece’nin 24 mahallesinin tamamına geliyoruz.",
      },
      {
        q: "Bahçe minderleri ve yatakları da yıkıyor musunuz?",
        a: "Evet. Koltukların yanında bahçe ve oturma minderlerini, tek ve çift kişilik yatakları da aynı randevuda yıkıyoruz.",
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
