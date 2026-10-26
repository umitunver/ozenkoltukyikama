// Esenyurt mahalle sayfaları (1/2: Akçaburgaz – Mehmet Akif Ersoy).
// Mahalle listesi TÜİK (ADNKS 2025), Esenyurt Belediyesi muhtarlık sayfası, Kaymakamlık ve Vikipedi ile doğrulandı (43 mahalle).
// Bağlarçeşme: TÜİK 2025 ve belediye artık "Merkez Mahallesi" yazıyor (Kaymakamlık ve PTT hâlâ Bağlarçeşme) — sayfada
// "Merkez (Bağlarçeşme)" olarak geçiyor. Sınırlar OSM idari sınırları; parklar belediyenin proje sayfalarından,
// diğer adresler kurumların kendi iletişim sayfalarından. Doğrulanamayan konut tipi / yer bilgisi kullanılmadı.

import type { Neighborhood } from "./neighborhoods";

const D = "esenyurt-koltuk-yikama";
export const ESENYURT_MUHTARLIK = "https://www.esenyurt.bel.tr/muhtarliklar";
export const ESENYURT_NUFUS = "https://www.nufusune.com/esenyurt-ilce-nufusu-istanbul";
const proj = (slug: string) => `https://www.esenyurt.bel.tr/projeler/sayfa/${slug}`;
const wiki = (title: string) => `https://tr.wikipedia.org/wiki/${encodeURIComponent(title)}`;

export const esenyurtPrice = (where: string) => ({
  q: "Fiyatı nasıl öğrenebilirim?",
  a: `WhatsApp’tan koltuğunuzun fotoğrafını ve ${where} olduğunuzu yazın; net fiyatı ve uygun saatleri ücretsiz iletelim.`,
});
const PRICE = esenyurtPrice;

const DRYING = {
  q: "Yıkadıktan sonra koltuğu ne zaman kullanabilirim?",
  a: "Kumaşa ve havaya göre genellikle 4–8 saat içinde kurur. Pencereleri açık tutmanız kurumayı hızlandırır; kuruyana kadar üzerine örtü sermemenizi öneririz.",
};
const LIFT = {
  q: "Yüksek katlara makineyi nasıl çıkarıyorsunuz?",
  a: "Makinemiz taşınabilir; asansörle dairenize çıkarıyoruz. Asansör yoksa ya da arızalıysa merdivenle kendimiz taşıyoruz.",
};

export const esenyurtNeighborhoods1: Neighborhood[] = [
  {
    slug: "akcaburgaz",
    district: D,
    name: "Akçaburgaz",
    heading: "Akçaburgaz",
    officialName: "Akçaburgaz Mahallesi",
    locative: "Akçaburgaz’da",
    locativeAdj: "Akçaburgaz’daki",
    dative: "Akçaburgaz’a",
    iAmIn: "Esenyurt Akçaburgaz Mahallesi’ndeyim",
    image: "sahne-u-kose",
    imageAlt: "Geniş salonda gri U köşe koltuğun yıkanması",
    description:
      "Esenyurt Akçaburgaz’daki ev ve sitelere geliyoruz. Büyük köşe takımlarını minderleriyle birlikte evinizde, makineyle yıkıyoruz.",
    summary:
      "Akçaburgaz, Esenyurt’un kuzeybatı ucunda, TEM otoyolunun geçtiği ve Büyükçekmece ile komşu mahalle; nüfusu 2008’deki yaklaşık 4.800 kişiden 2025’te 27.500’e yükseldi. Beykent Üniversitesi Hadımköy Yerleşkesi de burada. Geniş köşe takımlarını sökmeden, minderleriyle birlikte yerinde yıkıyoruz.",
    facts: [
      { label: "Konum", value: "Esenyurt’un kuzeybatısında; TEM (O-3) geçiyor, Büyükçekmece sınırında" },
      { label: "Komşu mahalleler", value: "Orhan Gazi, Osmangazi, Selahaddin Eyyubi (Büyükçekmece Alkent 2000, Çakmaklı, Karaağaç)" },
      { label: "Nüfus", value: "27.530 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "Beykent Üniversitesi Hadımköy Yerleşkesi, Akçaburgaz Spor Salonu, Mimar Sinan Parkı" },
    ],
    about: [
      "Akçaburgaz Mahallesi, Esenyurt’un kuzeybatı köşesinde, TEM otoyolunun geçtiği ve batısında Büyükçekmece’nin Alkent 2000, Çakmaklı ve Karaağaç mahalleleriyle komşu bir mahalle. Nüfusu 2008’de 4.755 iken 2025’te 27.530’a çıktı. Hadımköy İstanbul Caddesi’ndeki Beykent Üniversitesi Hadımköy Yerleşkesi, Akçaburgaz Spor Salonu ve Mimar Sinan Parkı mahallenin bilinen noktaları; adına rağmen Yunus Emre Parkı da Akçaburgaz’da.",
      "Yeni konutlarda sık rastladığımız geniş U ve L köşe takımlarını sökmeden, minderleriyle birlikte yerinde yıkıyor, fazla suyu iyice çekiyoruz. Site girişlerinde güvenliğe isminizi bırakmanız yeterli.",
    ],
    nearby: ["orhan-gazi", "osmangazi", "selahaddin-eyyubi", "buyukcekmece-koltuk-yikama/alkent-2000", "buyukcekmece-koltuk-yikama/karaagac"],
    faq: [
      {
        q: "Akçaburgaz’ın her yerine geliyor musunuz?",
        a: "Evet. Beykent Üniversitesi Hadımköy Yerleşkesi çevresi dahil Akçaburgaz Mahallesi’nin tüm ev ve sitelerine geliyoruz.",
      },
      {
        q: "Büyük U köşe takımını evde yıkayabiliyor musunuz?",
        a: "Evet. Köşe takımını sökmeden, minderleriyle birlikte yerinde yıkıyoruz; fotoğrafını gönderirseniz boyutuna göre net fiyat veriyoruz.",
      },
      DRYING,
      PRICE("Akçaburgaz’da"),
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/Ak%C3%A7aburgaz,_Esenyurt",
    sources: [
      wiki("Akçaburgaz,_Esenyurt"),
      ESENYURT_MUHTARLIK,
      "https://www.nufusune.com/40880-istanbul-esenyurt-akcaburgaz-mahallesi-nufusu",
      "https://www.beykent.edu.tr/iletisim",
      "https://www.esenyurt.bel.tr/esenyurt/sayfa/akcaburgaz-spor-salonu-293",
      proj("mimar-sinan-parki"),
      proj("yunus-emre-parki"),
    ],
  },
  {
    slug: "akevler",
    district: D,
    name: "Akevler",
    heading: "Akevler",
    officialName: "Akevler Mahallesi",
    locative: "Akevler’de",
    locativeAdj: "Akevler’deki",
    dative: "Akevler’e",
    iAmIn: "Esenyurt Akevler Mahallesi’ndeyim",
    image: "sahne-rezidans-kule",
    imageAlt: "Yüksek katlı rezidans dairesinde yeşil kadife koltuğun yıkanması",
    description:
      "Esenyurt Akevler’deki yüksek katlı site ve rezidans dairelerine geliyoruz. Makinemizi asansörle dairenize çıkarıp koltuğunuzu evinizde yıkıyoruz.",
    summary:
      "Akevler, 2015’te kurulan, yüksek katlı site ve rezidans kulelerinin bulunduğu, E-5’in iç kesiminde yer alan Esenyurt mahallesi. Yüksek katlarda makinemizi asansörle çıkarıyor, pencerelerin az açıldığı dairelerde fazla suyu özellikle iyi çekiyoruz.",
    facts: [
      { label: "Konum", value: "Esenyurt’un güneyinde, E-5’in iç kesiminde" },
      { label: "Komşu mahalleler", value: "Zafer, Talatpaşa, Mehmet Akif Ersoy, Üçevler, Güzelyurt" },
      { label: "Nüfus", value: "12.761 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "Regnum Astrum sitesi, 1062. Sokak Parkı" },
    ],
    about: [
      "Akevler Mahallesi, Esenyurt’un 2015’te 20’den 43 mahalleye çıkmasıyla kurulan mahallelerden biri; tamamı Esenyurt mahalleleriyle çevrili. Mahallede 29 katlı Regnum Astrum gibi yüksek katlı site ve rezidans kuleleri bulunuyor.",
      "Yüksek katlı bloklarda blok ve kat bilgisini önceden alıp gelişimizi planlıyoruz; makinemizi asansörle dairenize çıkarıyoruz. Pencerelerin sınırlı açıldığı yüksek katlarda yıkamanın sonunda fazla suyu özellikle iyi çekiyoruz.",
    ],
    nearby: ["zafer", "talatpasa", "mehmet-akif-ersoy", "ucevler", "guzelyurt"],
    faq: [
      {
        q: "Akevler’deki rezidans ve sitelere geliyor musunuz?",
        a: "Evet. Akevler Mahallesi’ndeki tüm site, rezidans ve apartmanlara makinemizle geliyoruz. Güvenlikte isim bırakmanız yeterli.",
      },
      LIFT,
      {
        q: "Pencereleri az açılan dairede koltuk nasıl kurur?",
        a: "Fazla suyu iyice çektiğimiz için koltuk genellikle 4–8 saatte kurur. Klima veya vantilatör çalıştırmak ve kapıları açık tutmak kurumayı hızlandırır.",
      },
      PRICE("Akevler’de"),
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/Akevler,_Esenyurt",
    sources: [
      wiki("Akevler,_Esenyurt"),
      ESENYURT_MUHTARLIK,
      ESENYURT_NUFUS,
      "https://www.haber7.com/foto-galeri/4913-kampanyali-101-konut-projesi-galeri/p50",
      proj("1062-sokak-parki"),
    ],
  },
  {
    slug: "aksemseddin",
    district: D,
    name: "Akşemseddin",
    heading: "Akşemseddin",
    officialName: "Akşemseddin Mahallesi",
    locative: "Akşemseddin’de",
    locativeAdj: "Akşemseddin’deki",
    dative: "Akşemseddin’e",
    iAmIn: "Esenyurt Akşemseddin Mahallesi’ndeyim",
    image: "mahalle-baris",
    imageAlt: "Apartman dairesinde gri üçlü koltuğun yıkama öncesi vakumlanması",
    description:
      "Esenyurt Akşemseddin’deki evinize geliyoruz. Koltuğunuzu önce vakumluyor, ardından makineyle evinizde derinlemesine yıkıyoruz.",
    summary:
      "Akşemseddin, yaklaşık 8 bin kişiyle Esenyurt’un en az nüfuslu mahallesi; ilçenin doğu ucunda, Avcılar’ın Firuzköy ve Yeşilkent mahalleleriyle komşu. Yıkamadan önce koltuğu vakumlayıp toz ve kırıntıları alıyor, sonra makineyle yıkıyoruz.",
    facts: [
      { label: "Konum", value: "Esenyurt’un doğu ucunda, Avcılar sınırında" },
      { label: "Komşu mahalleler", value: "İncirtepe, Yunus Emre, Namık Kemal, Zafer (Avcılar Firuzköy ve Yeşilkent)" },
      { label: "Nüfus", value: "8.093 (2025, ADNKS), Esenyurt’un en az nüfuslu mahallesi" },
      { label: "Bilinen yerler", value: "Çiğdem Parkı, KİPTAŞ-4 Parkı" },
    ],
    about: [
      "Akşemseddin Mahallesi, Esenyurt’un doğu sınırında, Avcılar’ın Firuzköy ve Yeşilkent mahallelerine komşu; ilçe içinde İncirtepe, Yunus Emre, Namık Kemal ve Zafer ile çevrili. Yaklaşık 8.100 kişilik nüfusuyla Esenyurt’un en küçük mahallesi. Çiğdem Parkı ve KİPTAŞ-4 Parkı mahallenin yeşil alanları.",
      "Avcılar sınırındaki evlere de aynı gün gelebiliyoruz. Koltuğu önce vakumluyor, lekelere ön işlem yapıyor, sonra suyu kumaşın içine püskürtüp kirle birlikte geri çekiyoruz.",
    ],
    nearby: ["incirtepe", "yunus-emre", "namik-kemal", "zafer", "avcilar-koltuk-yikama/firuzkoy", "avcilar-koltuk-yikama/yesilkent"],
    faq: [
      {
        q: "Akşemseddin’e geliyor musunuz?",
        a: "Evet. Akşemseddin Mahallesi’nin tamamına ve komşu Avcılar Firuzköy ile Yeşilkent’e makinemizle geliyoruz.",
      },
      {
        q: "Yıkamaya neler dahil?",
        a: "Vakumlama, leke ön işlemi, makineyle derin yıkama, koku giderme ve son emme fiyata dahil. Minderler, kollar ve sırt kısmı da yıkanır.",
      },
      DRYING,
      PRICE("Akşemseddin’de"),
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/Ak%C5%9Femseddin,_Esenyurt",
    sources: [wiki("Akşemseddin,_Esenyurt"), ESENYURT_MUHTARLIK, ESENYURT_NUFUS, proj("cigdem-parki"), proj("kiptas-4-parki")],
  },
  {
    slug: "ardicli",
    district: D,
    name: "Ardıçlı",
    heading: "Ardıçlı",
    officialName: "Ardıçlı Mahallesi",
    locative: "Ardıçlı’da",
    locativeAdj: "Ardıçlı’daki",
    dative: "Ardıçlı’ya",
    iAmIn: "Esenyurt Ardıçlı Mahallesi’ndeyim",
    image: "sahne-cocuklu-ev",
    imageAlt: "Bej kumaş koltuktaki keçeli kalem lekesine ön işlem uygulanması",
    description:
      "Esenyurt Ardıçlı’daki evinize geliyoruz. Çocuklu evlerde kalem ve yiyecek lekelerine ön işlem yapıp koltuğunuzu yerinde yıkıyoruz.",
    summary:
      "Ardıçlı, Esenyurt’un kuzeydoğusunda, Avcılar Yeşilkent sınırında yer alan, 75. Yıl Parkı’nın bulunduğu mahalle. Çocuklu evlerde keçeli kalem, meyve suyu ve yemek lekelerine kumaşa uygun ürünle ön işlem yapıp makineyle yıkıyoruz.",
    facts: [
      { label: "Konum", value: "Esenyurt’un kuzeydoğusunda; Avcılar Yeşilkent sınırında" },
      { label: "Komşu mahalleler", value: "Süleymaniye, Esenkent, Örnek, Selahaddin Eyyubi, Yenikent (Avcılar Yeşilkent)" },
      { label: "Nüfus", value: "8.322 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "75. Yıl Parkı, Sarmaşık Parkı, Ardıç Parkı" },
    ],
    about: [
      "Ardıçlı Mahallesi, Esenyurt’un kuzeydoğusunda, doğuda Avcılar’ın Yeşilkent Mahallesi ile komşu; ilçe içinde Süleymaniye, Esenkent, Örnek, Selahaddin Eyyubi ve Yenikent ile çevrili. Hacı Bektaş Veli Caddesi’ndeki 75. Yıl Parkı, Sarmaşık Parkı ve Ardıç Parkı mahallenin yeşil alanları.",
      "Çocuklu evlerde koltuklarda keçeli kalem, meyve suyu ve yemek lekeleri sık görülüyor. Bu lekelere önce kumaşa uygun ürünle ön işlem yapıyor, ardından makineyle yıkıyor ve durulayarak kumaşta ürün kalıntısı bırakmıyoruz.",
    ],
    nearby: ["suleymaniye", "esenkent", "ornek", "selahaddin-eyyubi", "yenikent", "avcilar-koltuk-yikama/yesilkent"],
    faq: [
      {
        q: "Ardıçlı’nın her yerine geliyor musunuz?",
        a: "Evet. 75. Yıl Parkı çevresi dahil Ardıçlı Mahallesi’nin tüm ev ve sitelerine geliyoruz.",
      },
      {
        q: "Keçeli kalem lekesi çıkar mı?",
        a: "Çoğu durumda çıkar ya da belirgin şekilde açılır. Kalemin türüne ve ne kadar beklediğine göre sonucu işe başlamadan önce söylüyoruz.",
      },
      {
        q: "Kullandığınız ürünler çocuklar için güvenli mi?",
        a: "Evlerde kullanıma uygun ürünler kullanıyor ve yıkamanın sonunda durulama yapıyoruz; kumaşta ürün kalıntısı bırakmıyoruz.",
      },
      PRICE("Ardıçlı’da"),
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/Ard%C4%B1%C3%A7l%C4%B1,_Esenyurt",
    sources: [wiki("Ardıçlı,_Esenyurt"), ESENYURT_MUHTARLIK, ESENYURT_NUFUS, proj("75yil-parki"), proj("sarmasik-parki"), proj("ardic-parki")],
  },
  {
    slug: "asik-veysel",
    district: D,
    name: "Aşık Veysel",
    heading: "Aşık Veysel Mahallesi",
    officialName: "Aşık Veysel Mahallesi",
    locative: "Aşık Veysel Mahallesi’nde",
    locativeAdj: "Aşık Veysel Mahallesi’ndeki",
    dative: "Aşık Veysel Mahallesi’ne",
    iAmIn: "Esenyurt Aşık Veysel Mahallesi’ndeyim",
    image: "sahne-site-giris",
    imageAlt: "Yıkama makinesiyle site girişinden geçen usta",
    description:
      "Esenyurt Aşık Veysel Mahallesi’ndeki site ve dairelere geliyoruz. Güvenliğe isminizi bırakmanız yeterli; koltuğunuzu evinizde yıkıyoruz.",
    summary:
      "Aşık Veysel Mahallesi, 2015’te Esenkent’ten ayrılan, Bahçeşehir sınırındaki, Sunflower AVM’nin ve Havana Park Sosyal Tesisi’nin bulunduğu Esenyurt mahallesi; bu yerler çoğu zaman “Esenkent” diye anılsa da Aşık Veysel’de. Sitelerde makinemizle doğrudan dairenize çıkıyoruz.",
    facts: [
      { label: "Konum", value: "Esenyurt’un kuzeyinde; Başakşehir Bahçeşehir sınırında" },
      { label: "Komşu mahalleler", value: "Koza, Esenkent (Başakşehir Bahçeşehir 2. Kısım)" },
      { label: "Nüfus", value: "15.543 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "Sunflower AVM, Havana Park Sosyal Tesisi, Talatpaşa Caddesi Yürüyüş Parkı" },
    ],
    about: [
      "Aşık Veysel Mahallesi 2015’te Esenkent’ten ayrılarak kuruldu; kuzeyde Başakşehir’in Bahçeşehir 2. Kısım Mahallesi, ilçe içinde Koza ve Esenkent ile komşu. Süleyman Demirel Caddesi’ndeki Sunflower AVM (mahalle muhtarlığı da otoparkında), Havana Park Sosyal Tesisi ve Talatpaşa Caddesi Yürüyüş Parkı mahallede; bu yerler sıklıkla Esenkent adıyla anılıyor.",
      "Sitelerde güvenliğe isminizi bırakmanız, misafir otoparkının yerini söylemeniz yeterli; makinemizle dairenize çıkıyoruz. Koltuk, köşe takımı ve sandalyeleri aynı randevuda yıkayabiliyoruz.",
    ],
    nearby: ["koza", "esenkent"],
    faq: [
      {
        q: "Sunflower ve Havana çevresindeki sitelere geliyor musunuz?",
        a: "Evet. Sunflower AVM ve Havana Park çevresi dahil Aşık Veysel Mahallesi’nin tüm sitelerine geliyoruz.",
      },
      {
        q: "Sitede güvenlik izni gerekiyorsa ne yapmalıyım?",
        a: "Randevu sırasında haber vermeniz yeterli; güvenliğe isminizi bırakır, makineyle dairenize çıkarız.",
      },
      DRYING,
      PRICE("Aşık Veysel Mahallesi’nde"),
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/A%C5%9F%C4%B1k_Veysel,_Esenyurt",
    sources: [
      wiki("Aşık_Veysel,_Esenyurt"),
      ESENYURT_MUHTARLIK,
      ESENYURT_NUFUS,
      "https://www.esenyurt.bel.tr/esenyurt/sayfa/havana-park-sosyal-tesisi-281",
      proj("talatpasa-caddesi-yuruyus-parki"),
    ],
  },
  {
    slug: "ataturk",
    district: D,
    name: "Atatürk",
    heading: "Esenyurt Atatürk",
    officialName: "Atatürk Mahallesi",
    locative: "Esenyurt Atatürk’te",
    locativeAdj: "Esenyurt Atatürk’teki",
    dative: "Esenyurt Atatürk’e",
    iAmIn: "Esenyurt Atatürk Mahallesi’ndeyim",
    image: "mahalle-yakuplu",
    imageAlt: "Eski apartman dairesinde kahverengi kumaş berjerin yıkanması",
    description:
      "Esenyurt Atatürk Mahallesi’ndeki evinize geliyoruz. Koltuk, berjer ve takımlarınızı evinizde, makineyle yıkıyoruz.",
    summary:
      "Esenyurt’un Atatürk Mahallesi, ilçenin batısında, belediyenin termal tesisinin bulunduğu ve Büyükçekmece’nin Çakmaklı ve Cumhuriyet mahalleleriyle komşu mahalle. Büyükçekmece’de de Atatürk Mahallesi olduğu için adresinizde Esenyurt’u belirtmeniz yeterli; ikisine de geliyoruz.",
    facts: [
      { label: "Konum", value: "Esenyurt’un batısında; Büyükçekmece sınırında" },
      { label: "Komşu mahalleler", value: "Gökevler, Osmangazi, Hürriyet, İstiklal (Büyükçekmece Çakmaklı ve Cumhuriyet)" },
      { label: "Nüfus", value: "15.875 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "Atatürk Mahallesi Termal Tesisi, Necmettin Erbakan Parkı" },
    ],
    about: [
      "Atatürk Mahallesi, Esenyurt’un batı ucunda, Büyükçekmece’nin Çakmaklı ve Cumhuriyet mahalleleriyle komşu; ilçe içinde Gökevler, Osmangazi, Hürriyet ve İstiklal ile çevrili. Belediyenin Kuruçeşme Caddesi’ndeki termal tesisi ve Gazi Caddesi’ndeki Necmettin Erbakan Parkı mahallede. Atatürk Yürüyüş Parkı ise adına rağmen Aşık Veysel Mahallesi’nde.",
      "Uzun yıllar kullanılan berjer ve takımlarda önce iyice vakumluyor, lekelere ön işlem yapıyor, sonra makineyle yıkıyoruz. Desenli kumaşlarda ürünü önce görünmeyen bir yerde deniyoruz.",
    ],
    nearby: ["gokevler", "osmangazi", "hurriyet", "istiklal", "buyukcekmece-koltuk-yikama/cakmakli", "buyukcekmece-koltuk-yikama/cumhuriyet"],
    faq: [
      {
        q: "Esenyurt Atatürk ile Büyükçekmece Atatürk’e mi geliyorsunuz?",
        a: "İkisine de geliyoruz. Aynı adlı iki mahalle olduğu için WhatsApp’ta adresinizle birlikte ilçeyi yazmanız yeterli.",
      },
      {
        q: "Eski berjer ve koltuklar yıkamaya uygun mu?",
        a: "Çoğu kumaş berjer ve koltuk yerinde yıkanabilir. Fotoğrafını gönderin; kumaş uygun değilse önceden söylüyoruz.",
      },
      DRYING,
      PRICE("Esenyurt Atatürk Mahallesi’nde"),
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/Atat%C3%BCrk,_Esenyurt",
    sources: [
      wiki("Atatürk,_Esenyurt"),
      ESENYURT_MUHTARLIK,
      ESENYURT_NUFUS,
      "https://www.esenyurt.bel.tr/iletisim",
      proj("necmettin-erbakan-parki"),
    ],
  },
  {
    slug: "merkez-baglarcesme",
    district: D,
    name: "Merkez (Bağlarçeşme)",
    heading: "Esenyurt Merkez (Bağlarçeşme)",
    officialName: "Merkez Mahallesi",
    locative: "Esenyurt Merkez’de",
    locativeAdj: "Esenyurt Merkez’deki",
    dative: "Esenyurt Merkez’e",
    iAmIn: "Esenyurt Merkez (Bağlarçeşme) Mahallesi’ndeyim",
    image: "sahne-asansorsuz-merdiven",
    imageAlt: "Asansörsüz apartmanda yıkama makinesinin merdivenle taşınması",
    description:
      "Esenyurt Merkez (eski adıyla Bağlarçeşme) Mahallesi’ndeki evinize geliyoruz. Asansörsüz binalarda makineyi merdivenle kendimiz taşıyoruz.",
    summary:
      "Esenyurt’un Merkez Mahallesi (eski adıyla Bağlarçeşme), ilçenin ilk yerleşim alanlarından biri olan, 19 Mayıs Bulvarı ve Bağlarçeşme Caddesi çevresindeki eski merkez; TÜİK ve belediye kayıtlarında artık “Merkez” adıyla geçiyor. Az katlı ve bitişik nizam binalarda makinemizi merdivenle kendimiz çıkarıyoruz.",
    facts: [
      { label: "Konum", value: "Esenyurt’un eski merkezi; 19 Mayıs Bulvarı ve Bağlarçeşme Caddesi çevresi" },
      { label: "Komşu mahalleler", value: "Pınar, Yenikent, Çınar, Fatih, Örnek, Sultaniye" },
      { label: "Nüfus", value: "33.174 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "Esenyurt Tarihi Merkez Camii, Özel Esencan Hastanesi, Meyveli Park" },
    ],
    about: [
      "Merkez Mahallesi, adını tarihî Bağlar Çeşmesi’nden alan ve uzun yıllar Bağlarçeşme olarak bilinen, Esenyurt’un ilk yerleşim alanlarından biri; TÜİK’in 2025 kayıtlarında ve belediyenin muhtarlık listesinde artık “Merkez Mahallesi” olarak geçiyor. 19. yüzyılda Eşkinoz Köyü mescidi olarak yapılan Esenyurt Tarihi Merkez Camii, 19 Mayıs Bulvarı’ndaki Özel Esencan Hastanesi ve muhtarlığın bulunduğu Meyveli Park mahallede.",
      "Mahallede 2000’lere kadar hızla yapılmış, az katlı ve bitişik nizam binalar çoğunlukta. Asansörü olmayan binalarda makinemizi merdivenle kendimiz çıkarıyoruz; koltuğun çevresini biraz boşaltmanız yeterli.",
    ],
    nearby: ["pinar", "yenikent", "cinar", "fatih", "ornek", "sultaniye"],
    faq: [
      {
        q: "Bağlarçeşme ile Merkez Mahallesi aynı yer mi?",
        a: "Evet. TÜİK ve Esenyurt Belediyesi kayıtlarında Bağlarçeşme artık Merkez Mahallesi olarak geçiyor. Adresinizde hangisini yazarsanız yazın, mahallenin tamamına geliyoruz.",
      },
      {
        q: "Asansörsüz binalara geliyor musunuz?",
        a: "Evet. Makinemiz taşınabilir; merdivenle kendimiz çıkarıyoruz. Sizin bir şey hazırlamanıza gerek yok.",
      },
      {
        q: "Binanın önüne park yeri yoksa ne oluyor?",
        a: "Adresinizi yazarken yakında kısa süreli park edilebilecek bir yer olup olmadığını belirtin; makineyi kısa bir mesafe taşımamız sorun değil.",
      },
      PRICE("Esenyurt Merkez (Bağlarçeşme) Mahallesi’nde"),
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/Ba%C4%9Flar%C3%A7e%C5%9Fme,_Esenyurt",
    sources: [
      wiki("Bağlarçeşme,_Esenyurt"),
      ESENYURT_MUHTARLIK,
      "https://www.nufusune.com/40855-istanbul-esenyurt-merkez-mahallesi-nufusu",
      "https://esencanhastanesi.com.tr/iletisim/",
      "https://kulturenvanteri.com/yer/esenyurt-tarihi-merkez-camii/",
      "https://dergipark.org.tr/tr/pub/kent/article/526367",
    ],
  },
  {
    slug: "balikyolu",
    district: D,
    name: "Balıkyolu",
    heading: "Balıkyolu",
    officialName: "Balıkyolu Mahallesi",
    locative: "Balıkyolu’nda",
    locativeAdj: "Balıkyolu’ndaki",
    dative: "Balıkyolu’na",
    iAmIn: "Esenyurt Balıkyolu Mahallesi’ndeyim",
    image: "sahne-evcil-hayvan",
    imageAlt: "Kedili evde koyu gri koltuktaki tüylerin vakumlanması",
    description:
      "Esenyurt Balıkyolu’ndaki evinize geliyoruz. Evcil hayvanlı evlerde koltuktaki tüyleri önce vakumluyor, ardından makineyle yıkıyoruz.",
    summary:
      "Balıkyolu, Esenyurt’un doğusunda, TEM Avcılar–Haramidere bağlantı yolunun yanında, Avcılar Yeşilkent sınırında yer alan ve yaklaşık 30 bin kişinin yaşadığı mahalle. Evcil hayvanlı evlerde koltuğu önce vakumlayıp tüyleri alıyor, sonra yıkıyoruz.",
    facts: [
      { label: "Konum", value: "Esenyurt’un doğusunda; Avcılar Yeşilkent sınırında" },
      { label: "Komşu mahalleler", value: "İnönü, Sultaniye, Süleymaniye, Yunus Emre (Avcılar Yeşilkent)" },
      { label: "Nüfus", value: "29.640 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "Ahmet Temel Parkı" },
    ],
    about: [
      "Balıkyolu Mahallesi, Esenyurt’un doğusunda, adını taşıyan Balıkyolu Caddesi çevresinde gelişen, yaklaşık 30 bin kişinin yaşadığı bir mahalle; doğuda Avcılar’ın Yeşilkent Mahallesi, ilçe içinde İnönü, Sultaniye, Süleymaniye ve Yunus Emre ile komşu. Ahmet Temel Parkı mahallenin yeşil alanı.",
      "Evcil hayvanlı evlerde yıkamadan önce koltuğu özel başlıkla vakumlayıp tüyleri alıyor, kokuya karşı kumaşa uygun ürünle yıkıyoruz. Koku kumaşın altındaki süngere işlemişse bunu yıkamadan önce açıkça söylüyoruz.",
    ],
    nearby: ["inonu", "sultaniye", "suleymaniye", "yunus-emre", "avcilar-koltuk-yikama/yesilkent"],
    faq: [
      {
        q: "Balıkyolu’nun her yerine geliyor musunuz?",
        a: "Evet. Balıkyolu Mahallesi’nin tamamına ve komşu Avcılar Yeşilkent’e makinemizle geliyoruz.",
      },
      {
        q: "Kedi ve köpek tüyü koltuktan çıkar mı?",
        a: "Evet. Yıkamadan önce koltuğu özel başlıkla vakumlayıp tüyleri alıyoruz, ardından makineyle yıkıyoruz.",
      },
      {
        q: "Evcil hayvan kokusu gider mi?",
        a: "Çoğu durumda belirgin şekilde azalır ya da tamamen gider. Koku süngere işlemişse bunu yıkamadan önce söylüyoruz.",
      },
      PRICE("Balıkyolu’nda"),
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/Bal%C4%B1kyolu,_Esenyurt",
    sources: [wiki("Balıkyolu,_Esenyurt"), ESENYURT_MUHTARLIK, ESENYURT_NUFUS, proj("ahmet-temel-parki")],
  },
  {
    slug: "barbaros-hayrettin-pasa",
    district: D,
    name: "Barbaros Hayrettin Paşa",
    heading: "Barbaros Hayrettin Paşa Mahallesi",
    officialName: "Barbaros Hayrettin Paşa Mahallesi",
    locative: "Barbaros Hayrettin Paşa Mahallesi’nde",
    locativeAdj: "Barbaros Hayrettin Paşa Mahallesi’ndeki",
    dative: "Barbaros Hayrettin Paşa Mahallesi’ne",
    iAmIn: "Esenyurt Barbaros Hayrettin Paşa Mahallesi’ndeyim",
    image: "mahalle-buyuksehir",
    imageAlt: "Yüksek katlı dairede gri köşe koltuğun yıkanması",
    description:
      "Esenyurt Barbaros Hayrettin Paşa Mahallesi’ndeki site ve dairelere geliyoruz. Koltuk ve köşe takımınızı taşımadan, evinizde yıkıyoruz.",
    summary:
      "Barbaros Hayrettin Paşa Mahallesi, E-5 üzerinde, “Cumhuriyet Mahallesi” metrobüs durağının bulunduğu ve Beylikdüzü’nün Cumhuriyet Mahallesi’ne komşu Esenyurt mahallesi; yaklaşık 28 bin kişi yaşıyor. Metrobüs çevresindeki site ve dairelere makinemizle geliyoruz.",
    facts: [
      { label: "Konum", value: "Esenyurt’un güneybatısında, E-5 üzerinde; “Cumhuriyet Mahallesi” metrobüs durağı" },
      { label: "Komşu mahalleler", value: "Gökevler, Piri Reis, Cumhuriyet, Hürriyet (Beylikdüzü Cumhuriyet)" },
      { label: "Nüfus", value: "28.385 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "Siteler Kültür ve Spor Merkezi, Cumhuriyet Parkı" },
    ],
    about: [
      "Barbaros Hayrettin Paşa Mahallesi, E-5’in kuzeyinde, karşısında Beylikdüzü’nün Cumhuriyet Mahallesi bulunan bir Esenyurt mahallesi; adını taşımasa da “Cumhuriyet Mahallesi” metrobüs durağı ve Cumhuriyet Parkı bu mahallede. 2293. Sokak’taki Siteler Kültür ve Spor Merkezi de mahallenin bilinen noktası.",
      "Metrobüse yakın site ve apartmanlarda blok ve kat bilgisini önceden alıp gelişimizi planlıyoruz; makinemizi asansörle dairenize çıkarıyoruz. Köşe takımlarını minderleriyle birlikte yerinde yıkıyoruz.",
    ],
    nearby: ["gokevler", "piri-reis", "cumhuriyet", "hurriyet", "beylikduzu-koltuk-yikama/cumhuriyet"],
    faq: [
      {
        q: "Cumhuriyet Mahallesi metrobüs durağı çevresine geliyor musunuz?",
        a: "Evet. Durak Barbaros Hayrettin Paşa Mahallesi’nde; mahallenin tamamına ve karşıdaki Beylikdüzü Cumhuriyet Mahallesi’ne de geliyoruz.",
      },
      LIFT,
      DRYING,
      PRICE("Barbaros Hayrettin Paşa Mahallesi’nde"),
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/Barbaros_Hayrettin_Pa%C5%9Fa,_Esenyurt",
    sources: [
      wiki("Barbaros_Hayrettin_Paşa,_Esenyurt"),
      ESENYURT_MUHTARLIK,
      ESENYURT_NUFUS,
      "https://tr.wikipedia.org/wiki/Cumhuriyet_Mahallesi_Metrobüs_İstasyonu",
      "https://www.esenyurt.bel.tr/iletisim",
      proj("cumhuriyet-parki"),
    ],
  },
  {
    slug: "battalgazi",
    district: D,
    name: "Battalgazi",
    heading: "Esenyurt Battalgazi",
    officialName: "Battalgazi Mahallesi",
    locative: "Esenyurt Battalgazi’de",
    locativeAdj: "Esenyurt Battalgazi’deki",
    dative: "Esenyurt Battalgazi’ye",
    iAmIn: "Esenyurt Battalgazi Mahallesi’ndeyim",
    image: "sahne-cocuk-yatagi",
    imageAlt: "Çocuk odasında tek kişilik yatağın makineyle yıkanması",
    description:
      "Esenyurt Battalgazi Mahallesi’ndeki evinize geliyoruz. Koltuk ve yataklarınızı aynı randevuda, evinizde yıkıyoruz.",
    summary:
      "Esenyurt’un Battalgazi Mahallesi (Malatya’daki Battalgazi ilçesi değil), ilçenin batı-orta kesiminde, Kadir Topbaş Parkı’nın bulunduğu ve yaklaşık 17.700 kişinin yaşadığı mahalle. Koltuklarla birlikte çocuk ve yetişkin yataklarını da aynı randevuda yıkıyoruz.",
    facts: [
      { label: "Konum", value: "Esenyurt’un batı-orta kesiminde, iç bölgede" },
      { label: "Komşu mahalleler", value: "Selahaddin Eyyubi, Pınar, Şehitler, Osmangazi, İstiklal" },
      { label: "Nüfus", value: "17.733 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "Kadir Topbaş Parkı" },
    ],
    about: [
      "Battalgazi Mahallesi, Esenyurt’un batı-orta kesiminde, tamamı Esenyurt mahalleleriyle çevrili bir mahalle: Selahaddin Eyyubi, Pınar, Şehitler, Osmangazi ve İstiklal ile komşu. Kadir Topbaş Parkı mahallenin bilinen yeşil alanı.",
      "Koltukların yanında yatak yıkamayı da aynı randevuda yapıyoruz: yatağın iki yüzünü makineyle yıkayıp fazla suyu çekiyoruz. Çocuklu evlerde yıkamanın sonunda durulama yapıyor, kumaşta ürün kalıntısı bırakmıyoruz.",
    ],
    nearby: ["selahaddin-eyyubi", "pinar", "sehitler", "osmangazi", "istiklal"],
    faq: [
      {
        q: "Battalgazi Mahallesi’nin her yerine geliyor musunuz?",
        a: "Evet. Kadir Topbaş Parkı çevresi dahil Battalgazi Mahallesi’nin tamamına geliyoruz.",
      },
      {
        q: "Yatak yıkamayı koltukla aynı gün yapıyor musunuz?",
        a: "Evet. Tek ve çift kişilik yatakların iki yüzünü koltuklarla aynı randevuda yıkıyoruz.",
      },
      {
        q: "Kullandığınız ürünler çocuklar için güvenli mi?",
        a: "Evlerde kullanıma uygun ürünler kullanıyor ve yıkamanın sonunda durulama yapıyoruz; kumaşta ürün kalıntısı bırakmıyoruz.",
      },
      PRICE("Esenyurt Battalgazi Mahallesi’nde"),
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/Battalgazi,_Esenyurt",
    sources: [wiki("Battalgazi,_Esenyurt"), ESENYURT_MUHTARLIK, ESENYURT_NUFUS, proj("kadir-topbas-parki")],
  },
  {
    slug: "cinar",
    district: D,
    name: "Çınar",
    heading: "Esenyurt Çınar",
    officialName: "Çınar Mahallesi",
    locative: "Esenyurt Çınar’da",
    locativeAdj: "Esenyurt Çınar’daki",
    dative: "Esenyurt Çınar’a",
    iAmIn: "Esenyurt Çınar Mahallesi’ndeyim",
    image: "mahalle-kavakli",
    imageAlt: "Minderli yemek sandalyesinin makineyle yıkanması",
    description:
      "Esenyurt Çınar Mahallesi’ndeki evinize geliyoruz. Koltuk, köşe takımı ve minderli sandalyelerinizi aynı randevuda yıkıyoruz.",
    summary:
      "Esenyurt’un Çınar Mahallesi, ilçenin orta-kuzey kesiminde, Esenyurt Belediyesi Nikah Sarayı’nın bulunduğu ve yaklaşık 32 bin kişinin yaşadığı mahalle. Koltukların yanında minderli yemek sandalyelerini de aynı randevuda, kumaşa uygun ürünle yıkıyoruz.",
    facts: [
      { label: "Konum", value: "Esenyurt’un orta-kuzey kesiminde, iç bölgede" },
      { label: "Komşu mahalleler", value: "Örnek, Pınar, Merkez (Bağlarçeşme), Selahaddin Eyyubi" },
      { label: "Nüfus", value: "31.971 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "Esenyurt Belediyesi Nikah Sarayı, Koru Parkı" },
    ],
    about: [
      "Çınar Mahallesi, Esenyurt’un orta-kuzey kesiminde, Örnek, Pınar, Merkez (Bağlarçeşme) ve Selahaddin Eyyubi mahalleleriyle çevrili; yaklaşık 32 bin kişilik nüfusuyla ilçenin kalabalık mahallelerinden biri. Ahmet Arif Caddesi’ndeki Esenyurt Belediyesi Nikah Sarayı ve Koru Parkı mahallede; komşu Örnek Mahallesi’nin muhtarlığı da Çınar sınırları içinde.",
      "Kalabalık ailelerin evlerinde koltukların yanında minderli yemek sandalyeleri de çok kullanılıyor. Sandalyeleri koltuklarla aynı randevuda, kumaşın türüne uygun ürünle tek tek yıkıyoruz; fiyatı adet üzerinden veriyoruz.",
    ],
    nearby: ["ornek", "pinar", "merkez-baglarcesme", "selahaddin-eyyubi"],
    faq: [
      {
        q: "Esenyurt Çınar Mahallesi’nin her yerine geliyor musunuz?",
        a: "Evet. Nikah Sarayı ve Koru Parkı çevresi dahil Çınar Mahallesi’nin tamamına geliyoruz.",
      },
      {
        q: "Yemek sandalyelerini koltukla birlikte yıkıyor musunuz?",
        a: "Evet. Minderli sandalyeleri aynı randevuda yıkıyoruz; fiyatı adet üzerinden veriyoruz.",
      },
      DRYING,
      PRICE("Esenyurt Çınar Mahallesi’nde"),
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/%C3%87%C4%B1nar,_Esenyurt",
    sources: [wiki("Çınar,_Esenyurt"), ESENYURT_MUHTARLIK, ESENYURT_NUFUS, "https://www.esenyurt.bel.tr/iletisim", proj("koru-parki")],
  },
  {
    slug: "cumhuriyet",
    district: D,
    name: "Cumhuriyet",
    heading: "Esenyurt Cumhuriyet",
    officialName: "Cumhuriyet Mahallesi",
    locative: "Esenyurt Cumhuriyet’te",
    locativeAdj: "Esenyurt Cumhuriyet’teki",
    dative: "Esenyurt Cumhuriyet’e",
    iAmIn: "Esenyurt Cumhuriyet Mahallesi’ndeyim",
    image: "bolge-avcilar",
    imageAlt: "Kumaş koltukta leke ön işlemi",
    description:
      "Esenyurt Cumhuriyet Mahallesi’ndeki evinize geliyoruz. Lekelere kumaşa uygun ürünle ön işlem yapıp koltuğunuzu evinizde yıkıyoruz.",
    summary:
      "Esenyurt’un Cumhuriyet Mahallesi, E-5’e yakın, Ihlamur Parkı’nın bulunduğu ve yaklaşık 14.400 kişinin yaşadığı mahalle. “Cumhuriyet Mahallesi” metrobüs durağı ise komşu Barbaros Hayrettin Paşa’da; Beylikdüzü ve Büyükçekmece’de de aynı adlı mahalleler var, adresinizde ilçeyi belirtmeniz yeterli.",
    facts: [
      { label: "Konum", value: "Esenyurt’un güneybatısında, E-5’e yakın iç kesimde" },
      { label: "Komşu mahalleler", value: "Mevlana, Piri Reis, Barbaros Hayrettin Paşa, Mehterçeşme, Yeşilkent" },
      { label: "Nüfus", value: "14.447 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "Ihlamur Parkı" },
    ],
    about: [
      "Cumhuriyet Mahallesi, E-5’e yakın ama yola cephesi olmayan, tamamı Esenyurt mahalleleriyle çevrili bir mahalle; Mevlana, Piri Reis, Barbaros Hayrettin Paşa, Mehterçeşme ve Yeşilkent ile komşu. Ihlamur Parkı mahallenin yeşil alanı. Adını taşıyan metrobüs durağı ve Cumhuriyet Parkı ise komşu Barbaros Hayrettin Paşa Mahallesi’nde.",
      "Yemek, çay ve kahve lekelerine önce kumaşa uygun ürünle ön işlem yapıyor, ardından suyu kumaşın içine püskürtüp kirle birlikte geri çekiyoruz. Çok eski lekelerde ne kadarının çıkabileceğini işe başlamadan söylüyoruz.",
    ],
    nearby: ["mevlana", "piri-reis", "barbaros-hayrettin-pasa", "mehtercesme", "yesilkent"],
    faq: [
      {
        q: "Esenyurt, Beylikdüzü ve Büyükçekmece Cumhuriyet mahallelerinin hangisine geliyorsunuz?",
        a: "Üçüne de geliyoruz. Aynı adlı mahalleler olduğu için WhatsApp’ta adresinizle birlikte ilçeyi yazmanız yeterli.",
      },
      {
        q: "Her leke çıkar mı?",
        a: "Yemek, içecek, ter ve toz lekelerinin büyük çoğunluğu çıkar. Çok eski, boya veya mürekkep lekelerinde sonucu işe başlamadan önce söylüyoruz.",
      },
      DRYING,
      PRICE("Esenyurt Cumhuriyet Mahallesi’nde"),
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/Cumhuriyet,_Esenyurt",
    sources: [wiki("Cumhuriyet,_Esenyurt"), ESENYURT_MUHTARLIK, ESENYURT_NUFUS, proj("ihlamur-parki")],
  },
  {
    slug: "esenkent",
    district: D,
    name: "Esenkent",
    heading: "Esenkent",
    officialName: "Esenkent Mahallesi",
    locative: "Esenkent’te",
    locativeAdj: "Esenkent’teki",
    dative: "Esenkent’e",
    iAmIn: "Esenyurt Esenkent Mahallesi’ndeyim",
    image: "sahne-havuzlu-site",
    imageAlt: "Havuzlu site dairesinde krem rengi koltuğun yıkanması",
    description:
      "Esenyurt Esenkent’teki site ve dairelere geliyoruz. Koltuk ve köşe takımınızı taşımadan, evinizde makineyle yıkıyoruz.",
    summary:
      "Esenkent, Esenyurt’un kuzeyinde, Başakşehir Bahçeşehir ve Avcılar Yeşilkent sınırında, TEM otoyolunun geçtiği mahalle; 2015’te Aşık Veysel Mahallesi’nin ayrılmasıyla bugünkü sınırlarını aldı. Sitelerde güvenliğe isminizi bırakmanız yeterli; makinemizle dairenize çıkıyoruz.",
    facts: [
      { label: "Konum", value: "Esenyurt’un kuzeyinde; TEM geçiyor, Bahçeşehir ve Avcılar Yeşilkent sınırında" },
      { label: "Komşu mahalleler", value: "Aşık Veysel, Ardıçlı, Koza (Başakşehir Bahçeşehir; Avcılar Yeşilkent)" },
      { label: "Nüfus", value: "9.351 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "Zehra Yıldız Sokak Parkı" },
    ],
    about: [
      "Esenkent Mahallesi’nin nüfusu 2014’te 25 bini aşıyordu; 2015’te Aşık Veysel Mahallesi ayrılınca bugünkü sınırlarını aldı. Kuzeyde Başakşehir’in Bahçeşehir mahalleleri, doğuda Avcılar’ın Yeşilkent Mahallesi ile komşu; TEM otoyolu mahalleden geçiyor. Sunflower, Havana ve Akbatı gibi “Esenkent” diye anılan yerlerin çoğu bugün komşu Aşık Veysel ve Koza mahallelerinde.",
      "Sitelerde güvenliğe isminizi bırakmanız, misafir otoparkının yerini söylemeniz yeterli; makinemiz taşınabilir, asansörle dairenize çıkarıyoruz. Açık renkli koltuklarda kumaşa uygun ürünle çalışıp fazla suyu iyice çekiyoruz.",
    ],
    nearby: ["asik-veysel", "ardicli", "koza", "avcilar-koltuk-yikama/yesilkent"],
    faq: [
      {
        q: "Esenkent’teki sitelere geliyor musunuz?",
        a: "Evet. Esenkent Mahallesi’nin tüm sitelerine ve komşu Aşık Veysel ile Koza’ya da makinemizle geliyoruz.",
      },
      {
        q: "Sitede güvenlik izni gerekiyorsa ne yapmalıyım?",
        a: "Randevu sırasında haber vermeniz yeterli; güvenliğe isminizi bırakır, makineyle dairenize çıkarız.",
      },
      DRYING,
      PRICE("Esenkent’te"),
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/Esenkent,_Esenyurt",
    sources: [wiki("Esenkent,_Esenyurt"), ESENYURT_MUHTARLIK, ESENYURT_NUFUS, proj("zehra-yildiz-sokak-parki")],
  },
  {
    slug: "fatih",
    district: D,
    name: "Fatih",
    heading: "Esenyurt Fatih",
    officialName: "Fatih Mahallesi",
    locative: "Esenyurt Fatih’te",
    locativeAdj: "Esenyurt Fatih’teki",
    dative: "Esenyurt Fatih’e",
    iAmIn: "Esenyurt Fatih Mahallesi’ndeyim",
    image: "sahne-kirli-su-tanki",
    imageAlt: "Yıkama sonrası makinenin kirli su haznesinin ev sahibine gösterilmesi",
    description:
      "Esenyurt Fatih Mahallesi’ndeki evinize geliyoruz. Koltuğunuzu yerinde yıkıyor, çekilen kirli suyu yıkama sonunda size gösteriyoruz.",
    summary:
      "Esenyurt’un Fatih Mahallesi, ilçenin ortasında, 19 Mayıs Bulvarı üzerinde, Esenyurt Necmi Kadıoğlu Devlet Hastanesi’nin bulunduğu mahalle (Fatih ilçesi değil). Koltuktan çektiğimiz kirli suyu iş bitince size gösteriyoruz.",
    facts: [
      { label: "Konum", value: "Esenyurt’un ortasında, 19 Mayıs Bulvarı üzerinde" },
      { label: "Komşu mahalleler", value: "Üçevler, Talatpaşa, Pınar, Merkez (Bağlarçeşme), Sultaniye" },
      { label: "Nüfus", value: "27.695 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "Esenyurt Necmi Kadıoğlu Devlet Hastanesi, Fatih Parkı" },
    ],
    about: [
      "Fatih Mahallesi, Esenyurt’un ortasında, 19 Mayıs Bulvarı üzerinde yer alıyor; Esenyurt Necmi Kadıoğlu Devlet Hastanesi’nin resmî adresi bu mahallede. Üçevler, Talatpaşa, Pınar, Merkez (Bağlarçeşme) ve Sultaniye ile komşu. Fatih ilçesi ve Büyükçekmece’deki Fatih Mahallesi ile karışmaması için adresinizde Esenyurt’u belirtin.",
      "Yıkamada önce koltuğu vakumluyor, lekelere ön işlem yapıyor, sonra suyu kumaşın içine püskürtüp kirle birlikte geri çekiyoruz. Çekilen kirli suyu iş bitince size gösteriyor, ödemeyi sonucu birlikte kontrol ettikten sonra alıyoruz.",
    ],
    nearby: ["ucevler", "talatpasa", "pinar", "merkez-baglarcesme", "sultaniye"],
    faq: [
      {
        q: "Esenyurt Fatih’e mi, Fatih ilçesine mi geliyorsunuz?",
        a: "Biz Esenyurt’taki Fatih Mahallesi’ne geliyoruz. Büyükçekmece’deki Fatih Mahallesi’ne de geliyoruz; adresinizde ilçeyi yazmanız yeterli.",
      },
      {
        q: "Yıkamanın gerçekten temizlediğini nasıl anlarım?",
        a: "Koltuktan çektiğimiz kirli suyu makinenin haznesinde size gösteriyoruz. Ödemeyi de sonucu birlikte kontrol ettikten sonra alıyoruz.",
      },
      DRYING,
      PRICE("Esenyurt Fatih Mahallesi’nde"),
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/Fatih,_Esenyurt",
    sources: [wiki("Fatih,_Esenyurt"), ESENYURT_MUHTARLIK, ESENYURT_NUFUS, "https://esenyurtdh.saglik.gov.tr/", proj("fatih-parki")],
  },
  {
    slug: "gokevler",
    district: D,
    name: "Gökevler",
    heading: "Gökevler",
    officialName: "Gökevler Mahallesi",
    locative: "Gökevler’de",
    locativeAdj: "Gökevler’deki",
    dative: "Gökevler’e",
    iAmIn: "Esenyurt Gökevler Mahallesi’ndeyim",
    image: "bolge-beylikduzu",
    imageAlt: "Site dairesinde köşe koltuk yıkama",
    description:
      "Esenyurt Gökevler’deki evinize geliyoruz. Köşe takımı ve koltuklarınızı evinizde, makineyle derinlemesine yıkıyoruz.",
    summary:
      "Gökevler, E-5 üzerinde, Beykent metrobüs durağının sınırında yer alan, Büyükçekmece Cumhuriyet (Beykent) ile komşu Esenyurt mahallesi; belediyenin at binicilik tesisi de burada. E-5 çevresindeki ev ve sitelere makinemizle geliyoruz.",
    facts: [
      { label: "Konum", value: "Esenyurt’un batısında, E-5 üzerinde; Beykent metrobüs durağı sınırında" },
      { label: "Komşu mahalleler", value: "Atatürk, Barbaros Hayrettin Paşa (Büyükçekmece Cumhuriyet)" },
      { label: "Nüfus", value: "17.691 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "Esenyurt Belediyesi At Binicilik Tesisi, 564. Sokak Parkı" },
    ],
    about: [
      "Gökevler Mahallesi, Esenyurt’un batısında E-5’in kenarında yer alıyor; eski adı Hadımköy olan Beykent metrobüs durağı, Gökevler ile Büyükçekmece’nin Cumhuriyet Mahallesi arasında. Belediyenin 12 dönümlük At Binicilik Tesisi mahallede. Beykent semti ve Beykent Üniversitesi’nin ana yerleşkesi ise sınırın öbür yanında, Büyükçekmece’de.",
      "E-5’e yakın binalarda adresinizi yazarken kısa süreli park imkânını belirtmeniz yeterli; makinemizle doğrudan evinize geliyoruz. Köşe takımlarını minderleriyle birlikte yerinde yıkıyor, fazla suyu iyice çekiyoruz.",
    ],
    nearby: ["ataturk", "barbaros-hayrettin-pasa", "buyukcekmece-koltuk-yikama/cumhuriyet"],
    faq: [
      {
        q: "Gökevler’e ve Beykent metrobüs çevresine geliyor musunuz?",
        a: "Evet. Gökevler Mahallesi’nin tamamına ve sınırın öbür yanındaki Büyükçekmece Cumhuriyet (Beykent) tarafına da geliyoruz.",
      },
      {
        q: "Köşe takımını sökmeden yıkayabiliyor musunuz?",
        a: "Evet. Köşe takımını minderleriyle birlikte yerinde yıkıyoruz; fotoğrafını gönderirseniz boyutuna göre net fiyat veriyoruz.",
      },
      DRYING,
      PRICE("Gökevler’de"),
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/G%C3%B6kevler",
    sources: [
      wiki("Gökevler"),
      ESENYURT_MUHTARLIK,
      ESENYURT_NUFUS,
      "https://tr.wikipedia.org/wiki/Beykent_Metrobüs_İstasyonu",
      "https://www.esenyurt.bel.tr/esenyurt/sayfa/at-binicilik-tesisi-282",
    ],
  },
  {
    slug: "guzelyurt",
    district: D,
    name: "Güzelyurt",
    heading: "Esenyurt Güzelyurt",
    officialName: "Güzelyurt Mahallesi",
    locative: "Esenyurt Güzelyurt’ta",
    locativeAdj: "Esenyurt Güzelyurt’taki",
    dative: "Esenyurt Güzelyurt’a",
    iAmIn: "Esenyurt Güzelyurt Mahallesi’ndeyim",
    image: "mahalle-dereagzi",
    imageAlt: "Açık mavi kumaş koltuğun makineyle yıkanması",
    description:
      "Esenyurt Güzelyurt’taki evinize geliyoruz. Koltuk ve köşe takımlarınızı evinizde, makineyle derinlemesine yıkıyoruz.",
    summary:
      "Güzelyurt, E-5 üzerinde Güzelyurt ve Haramidere metrobüs duraklarının bulunduğu, Vadi Esenyurt Şehir Parkı’na ev sahipliği yapan ve karşısında Beylikdüzü Yakuplu’nun yer aldığı Esenyurt mahallesi. Metrobüs çevresindeki ev ve sitelere makinemizle geliyoruz.",
    facts: [
      { label: "Konum", value: "Esenyurt’un güneyinde, E-5 üzerinde; Güzelyurt ve Haramidere metrobüs durakları" },
      { label: "Komşu mahalleler", value: "Mehmet Akif Ersoy, Zafer, Mevlana, Akevler (Beylikdüzü Yakuplu)" },
      { label: "Nüfus", value: "17.956 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "Vadi Esenyurt Şehir Parkı, Nilüfer Parkı" },
    ],
    about: [
      "Güzelyurt Mahallesi E-5’in kuzeyinde, karşısında Beylikdüzü’nün Yakuplu Mahallesi bulunan bir Esenyurt mahallesi; Güzelyurt ve Haramidere metrobüs durakları bu sınırda. Avcılar–Haramidere bağlantı yolu üzerindeki Vadi Esenyurt Şehir Parkı mahallenin en bilinen yeşil alanı. Marmara Park AVM ise komşu Mevlana Mahallesi’nde.",
      "Metrobüse yakın apartman ve sitelerde blok ve kat bilgisini önceden alıp gelişimizi planlıyoruz. Koltuğu vakumlama, leke ön işlemi, makineyle derin yıkama ve son emme fiyata dahil.",
    ],
    nearby: ["mehmet-akif-ersoy", "zafer", "mevlana", "akevler", "beylikduzu-koltuk-yikama/yakuplu"],
    faq: [
      {
        q: "Güzelyurt metrobüs çevresine geliyor musunuz?",
        a: "Evet. Güzelyurt ve Haramidere durakları çevresi dahil Güzelyurt Mahallesi’nin tamamına ve karşıdaki Beylikdüzü Yakuplu’ya geliyoruz.",
      },
      {
        q: "Yıkamaya neler dahil?",
        a: "Vakumlama, leke ön işlemi, makineyle derin yıkama, koku giderme ve son emme fiyata dahil. Minderler, kollar ve sırt kısmı da yıkanır.",
      },
      DRYING,
      PRICE("Esenyurt Güzelyurt’ta"),
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/G%C3%BCzelyurt,_Esenyurt",
    sources: [
      wiki("Güzelyurt,_Esenyurt"),
      ESENYURT_MUHTARLIK,
      ESENYURT_NUFUS,
      "https://tr.wikipedia.org/wiki/Güzelyurt_Metrobüs_İstasyonu",
      proj("vadi-esenyurt-sehir-parki"),
    ],
  },
  {
    slug: "hurriyet",
    district: D,
    name: "Hürriyet",
    heading: "Esenyurt Hürriyet",
    officialName: "Hürriyet Mahallesi",
    locative: "Esenyurt Hürriyet’te",
    locativeAdj: "Esenyurt Hürriyet’teki",
    dative: "Esenyurt Hürriyet’e",
    iAmIn: "Esenyurt Hürriyet Mahallesi’ndeyim",
    image: "mahalle-cumhuriyet",
    imageAlt: "Hardal rengi kumaş koltuktaki lekeye ön işlem uygulanması",
    description:
      "Esenyurt Hürriyet Mahallesi’ndeki evinize geliyoruz. Koltuktaki lekelere ön işlem yapıp evinizde, makineyle yıkıyoruz.",
    summary:
      "Esenyurt’un Hürriyet Mahallesi, ilçenin batısında, iç kesimde yer alan ve yaklaşık 28 bin kişinin yaşadığı mahalle; Büyükçekmece’de de aynı adlı bir mahalle var. Lekeli koltuklarda önce kumaşa uygun ürünle ön işlem yapıyor, ardından makineyle yıkıyoruz.",
    facts: [
      { label: "Konum", value: "Esenyurt’un batısında, iç kesimde" },
      { label: "Komşu mahalleler", value: "Atatürk, Necip Fazıl Kısakürek, Piri Reis, Barbaros Hayrettin Paşa, İstiklal" },
      { label: "Nüfus", value: "28.342 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "Dalgıç Sokak Parkı, Hürriyet Kreş Parkı" },
    ],
    about: [
      "Hürriyet Mahallesi, Esenyurt’un batısında, Atatürk, Necip Fazıl Kısakürek, Piri Reis, Barbaros Hayrettin Paşa ve İstiklal mahalleleriyle çevrili bir iç kesim mahallesi; yaklaşık 28 bin kişilik nüfusuyla ilçenin kalabalık mahallelerinden. Dalgıç Sokak Parkı ve Hürriyet Kreş Parkı mahallenin yeşil alanları.",
      "Yemek, çay, kahve ve çocuk lekelerinde önce kumaşa uygun ürünle ön işlem yapıyor, ardından makineyle yıkıyoruz. Çok eski lekelerde ne kadarının çıkabileceğini işe başlamadan söylüyoruz.",
    ],
    nearby: ["ataturk", "necip-fazil-kisakurek", "piri-reis", "barbaros-hayrettin-pasa", "istiklal"],
    faq: [
      {
        q: "Esenyurt Hürriyet’e mi, Büyükçekmece Hürriyet’e mi geliyorsunuz?",
        a: "İkisine de geliyoruz. Aynı adlı iki mahalle olduğu için WhatsApp’ta adresinizle birlikte ilçeyi yazmanız yeterli.",
      },
      {
        q: "Her leke çıkar mı?",
        a: "Yemek, içecek, ter ve toz lekelerinin büyük çoğunluğu çıkar. Çok eski, boya veya mürekkep lekelerinde sonucu işe başlamadan önce söylüyoruz.",
      },
      DRYING,
      PRICE("Esenyurt Hürriyet Mahallesi’nde"),
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/H%C3%BCrriyet,_Esenyurt",
    sources: [wiki("Hürriyet,_Esenyurt"), ESENYURT_MUHTARLIK, ESENYURT_NUFUS, proj("dalgic-sokak-parki"), proj("hurriyet-kres-parki")],
  },
  {
    slug: "incirtepe",
    district: D,
    name: "İncirtepe",
    heading: "İncirtepe",
    officialName: "İncirtepe Mahallesi",
    locative: "İncirtepe’de",
    locativeAdj: "İncirtepe’deki",
    dative: "İncirtepe’ye",
    iAmIn: "Esenyurt İncirtepe Mahallesi’ndeyim",
    image: "sahne-berjer",
    imageAlt: "Desenli kumaş berjerin oturma yerinin makineyle yıkanması",
    description:
      "Esenyurt İncirtepe’deki evinize geliyoruz. Koltuk, berjer ve takımlarınızı evinizde, makineyle yıkıyoruz.",
    summary:
      "İncirtepe, Esenyurt’un 2015 öncesindeki 20 mahallesinden biri; ilçenin güneydoğusunda, Zafer ve İnönü arasında yer alıyor ve yaklaşık 28 bin kişi yaşıyor. Uzun yıllar kullanılmış berjer ve takımları da makinemizle yerinde yıkıyoruz.",
    facts: [
      { label: "Konum", value: "Esenyurt’un güneydoğusunda, iç kesimde" },
      { label: "Komşu mahalleler", value: "Akşemseddin, Yunus Emre, Zafer, İnönü" },
      { label: "Nüfus", value: "28.130 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "İncirtepe Parkı" },
    ],
    about: [
      "İncirtepe, Esenyurt’un 2015’te 43 mahalleye bölünmesinden önceki 20 eski mahallesinden biri; güneydoğuda Akşemseddin, Yunus Emre, Zafer ve İnönü mahalleleriyle çevrili. İncirtepe Parkı mahallenin yeşil alanı.",
      "Uzun yıllar kullanılan berjer ve desenli takımlarda önce iyice vakumluyor, lekelere ön işlem yapıyor, sonra makineyle yıkıyoruz. Desenli kumaşlarda ürünü önce görünmeyen bir yerde deniyoruz.",
    ],
    nearby: ["aksemseddin", "yunus-emre", "zafer", "inonu"],
    faq: [
      {
        q: "İncirtepe’nin her yerine geliyor musunuz?",
        a: "Evet. İncirtepe Mahallesi’nin tamamına ve komşu Akşemseddin, Yunus Emre, Zafer ve İnönü’ye geliyoruz.",
      },
      {
        q: "Desenli koltuklarda renk akar mı?",
        a: "Ürünü önce görünmeyen bir yerde deniyoruz; kumaşa uygun ürünle çalıştığımız için renk akmaz. Riskli bir kumaşsa yıkamadan önce söylüyoruz.",
      },
      DRYING,
      PRICE("İncirtepe’de"),
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/%C4%B0ncirtepe,_Esenyurt",
    sources: [wiki("İncirtepe,_Esenyurt"), ESENYURT_MUHTARLIK, ESENYURT_NUFUS, proj("incirtepe-parki")],
  },
  {
    slug: "inonu",
    district: D,
    name: "İnönü",
    heading: "Esenyurt İnönü",
    officialName: "İnönü Mahallesi",
    locative: "Esenyurt İnönü’de",
    locativeAdj: "Esenyurt İnönü’deki",
    dative: "Esenyurt İnönü’ye",
    iAmIn: "Esenyurt İnönü Mahallesi’ndeyim",
    image: "koltuk-yikama-evde",
    imageAlt: "Evde makineyle gri kumaş koltuk yıkama",
    description:
      "Esenyurt İnönü Mahallesi’ndeki evinize geliyoruz. Koltuğunuzu taşımadan, evinizde makineyle derinlemesine yıkıyoruz.",
    summary:
      "Esenyurt’un İnönü Mahallesi, ilçenin orta-doğu kesiminde, Doğan Araslı Bulvarı üzerinde yer alan ve yaklaşık 26.700 kişinin yaşadığı mahalle; Mehmet Akif Ersoy Parkı da burada. Doğan Araslı Bulvarı çevresindeki ev ve sitelere makinemizle geliyoruz.",
    facts: [
      { label: "Konum", value: "Esenyurt’un orta-doğu kesiminde, Doğan Araslı Bulvarı üzerinde" },
      { label: "Komşu mahalleler", value: "Balıkyolu, Yunus Emre, Zafer, Sultaniye, İncirtepe" },
      { label: "Nüfus", value: "26.737 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "Mehmet Akif Ersoy Parkı" },
    ],
    about: [
      "İnönü Mahallesi, Esenyurt’un ana arterlerinden Doğan Araslı Bulvarı üzerinde, Balıkyolu, Yunus Emre, Zafer, Sultaniye ve İncirtepe mahalleleriyle çevrili. Belediyenin Mehmet Akif Ersoy Parkı, adına rağmen Mehmet Akif Ersoy Mahallesi’nde değil, İnönü’de. Birçok ilçede İnönü Mahallesi bulunduğu için adresinizde Esenyurt’u belirtin.",
      "Bulvar üzerindeki binalarda adresinizi yazarken kısa süreli park imkânını belirtmeniz yeterli. Koltuğu vakumlama, leke ön işlemi, makineyle derin yıkama ve son emme fiyata dahil.",
    ],
    nearby: ["balikyolu", "yunus-emre", "zafer", "sultaniye", "incirtepe"],
    faq: [
      {
        q: "Doğan Araslı Bulvarı çevresine geliyor musunuz?",
        a: "Evet. Doğan Araslı Bulvarı çevresi dahil İnönü Mahallesi’nin tamamına geliyoruz.",
      },
      {
        q: "Binanın önüne park yeri yoksa ne oluyor?",
        a: "Adresinizi yazarken yakında kısa süreli park edilebilecek bir yer olup olmadığını belirtin; makineyi kısa bir mesafe taşımamız sorun değil.",
      },
      DRYING,
      PRICE("Esenyurt İnönü Mahallesi’nde"),
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/%C4%B0n%C3%B6n%C3%BC,_Esenyurt",
    sources: [wiki("İnönü,_Esenyurt"), ESENYURT_MUHTARLIK, ESENYURT_NUFUS, proj("mehmet-akif-ersoy-parki")],
  },
  {
    slug: "istiklal",
    district: D,
    name: "İstiklal",
    heading: "Esenyurt İstiklal",
    officialName: "İstiklal Mahallesi",
    locative: "Esenyurt İstiklal’de",
    locativeAdj: "Esenyurt İstiklal’deki",
    dative: "Esenyurt İstiklal’e",
    iAmIn: "Esenyurt İstiklal Mahallesi’ndeyim",
    image: "yatak-yikama",
    imageAlt: "Çift kişilik yatak yıkama",
    description:
      "Esenyurt İstiklal Mahallesi (Kıraç) evinize geliyoruz. Koltuk ve yataklarınızı aynı randevuda, evinizde yıkıyoruz.",
    summary:
      "Esenyurt’un İstiklal Mahallesi, 2008’de Esenyurt’a katılan eski Kıraç beldesinin bulunduğu bölgede; belediyenin ek hizmet binası ve muhtarlık da burada. Kıraç’taki evlere makinemizle geliyor, koltuk ve yatakları aynı randevuda yıkıyoruz.",
    facts: [
      { label: "Konum", value: "Esenyurt’un batısında, Kıraç bölgesinde" },
      { label: "Komşu mahalleler", value: "Osmangazi, Şehitler, Battalgazi, Atatürk, Necip Fazıl Kısakürek, Hürriyet" },
      { label: "Nüfus", value: "18.702 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "Esenyurt Belediyesi Halkla İlişkiler Ek Hizmet Binası, Göknar Parkı" },
    ],
    about: [
      "İstiklal Mahallesi, 2008’de Esenyurt’a katılan eski Kıraç İlk Kademe Belediyesi’nin bulunduğu bölgede; belediye adreslerinde “İstiklal Mah. … Kıraç – Esenyurt” diye geçiyor. Sanat Sokak’taki Halkla İlişkiler Ek Hizmet Binası ve Göknar Parkı mahallede; altı Esenyurt mahallesiyle komşu.",
      "Koltukların yanında yatak yıkamayı da aynı randevuda yapıyoruz: yatağın iki yüzünü makineyle yıkayıp fazla suyu çekiyoruz, yatak da genellikle birkaç saat içinde kurur.",
    ],
    nearby: ["osmangazi", "sehitler", "battalgazi", "ataturk", "necip-fazil-kisakurek", "hurriyet"],
    faq: [
      {
        q: "Kıraç’taki evlere geliyor musunuz?",
        a: "Evet. Kıraç bölgesindeki İstiklal Mahallesi’nin tamamına ve komşu mahallelere makinemizle geliyoruz.",
      },
      {
        q: "Yatak yıkamayı koltukla aynı gün yapıyor musunuz?",
        a: "Evet. Tek ve çift kişilik yatakların iki yüzünü koltuklarla aynı randevuda yıkıyoruz.",
      },
      DRYING,
      PRICE("Esenyurt İstiklal Mahallesi’nde"),
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/%C4%B0stiklal,_Esenyurt",
    sources: [
      wiki("İstiklal,_Esenyurt"),
      ESENYURT_MUHTARLIK,
      ESENYURT_NUFUS,
      "https://www.esenyurt.bel.tr/iletisim",
      proj("goknar-parki"),
      "https://www.memurlar.net/haber/105460/",
    ],
  },
  {
    slug: "koza",
    district: D,
    name: "Koza",
    heading: "Esenyurt Koza",
    officialName: "Koza Mahallesi",
    locative: "Esenyurt Koza’da",
    locativeAdj: "Esenyurt Koza’daki",
    dative: "Esenyurt Koza’ya",
    iAmIn: "Esenyurt Koza Mahallesi’ndeyim",
    image: "mahalle-adnan-kahveci",
    imageAlt: "Site dairesinde bej L koltuğun makineyle yıkanması",
    description:
      "Esenyurt Koza Mahallesi’ndeki site ve dairelere geliyoruz. Koltuk ve köşe takımınızı taşımadan, evinizde makineyle yıkıyoruz.",
    summary:
      "Koza Mahallesi, Akbatı AVM’nin bulunduğu, 2015’te Orhan Gazi’den ayrılan, TEM otoyolunun geçtiği ve Bahçeşehir’e komşu Esenyurt mahallesi; Akbatı çoğu zaman “Esenkent” diye anılsa da resmî adresi Koza. Sitelerde makinemizle doğrudan dairenize çıkıyoruz.",
    facts: [
      { label: "Konum", value: "Esenyurt’un kuzeyinde; TEM geçiyor, Başakşehir Bahçeşehir sınırında" },
      { label: "Komşu mahalleler", value: "Orhan Gazi, Aşık Veysel, Selahaddin Eyyubi, Esenkent (Başakşehir Bahçeşehir 2. Kısım)" },
      { label: "Nüfus", value: "10.025 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "Akbatı AVM" },
    ],
    about: [
      "Koza Mahallesi 2015’te Orhan Gazi’den ayrılarak kuruldu; kuzeyde Başakşehir’in Bahçeşehir 2. Kısım Mahallesi ile komşu, TEM otoyolu mahalleden geçiyor. Akbatı AVM’nin resmî adresi “Koza Mah., 1655. Sokak Esenkent Mevkii No:6”; bu yüzden Akbatı çevresi sıklıkla Esenkent ya da Bahçeşehir diye anılıyor.",
      "Sitelerde güvenliğe isminizi bırakmanız, misafir otoparkının yerini söylemeniz yeterli; makinemiz taşınabilir, asansörle dairenize çıkarıyoruz. Açık renkli köşe takımlarında kumaşa uygun ürünle çalışıp fazla suyu iyice çekiyoruz.",
    ],
    nearby: ["orhan-gazi", "asik-veysel", "selahaddin-eyyubi", "esenkent"],
    faq: [
      {
        q: "Akbatı çevresindeki sitelere geliyor musunuz?",
        a: "Evet. Akbatı AVM çevresi dahil Koza Mahallesi’nin tüm sitelerine ve komşu Esenkent ile Aşık Veysel’e geliyoruz.",
      },
      {
        q: "Sitede güvenlik izni gerekiyorsa ne yapmalıyım?",
        a: "Randevu sırasında haber vermeniz yeterli; güvenliğe isminizi bırakır, makineyle dairenize çıkarız.",
      },
      DRYING,
      PRICE("Esenyurt Koza Mahallesi’nde"),
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/Koza,_Esenyurt",
    sources: [wiki("Koza,_Esenyurt"), ESENYURT_MUHTARLIK, ESENYURT_NUFUS, "https://www.akbati.com/iletisim"],
  },
  {
    slug: "mehmet-akif-ersoy",
    district: D,
    name: "Mehmet Akif Ersoy",
    heading: "Esenyurt Mehmet Akif Ersoy",
    officialName: "Mehmet Akif Ersoy Mahallesi",
    locative: "Esenyurt Mehmet Akif Ersoy’da",
    locativeAdj: "Esenyurt Mehmet Akif Ersoy’daki",
    dative: "Esenyurt Mehmet Akif Ersoy’a",
    iAmIn: "Esenyurt Mehmet Akif Ersoy Mahallesi’ndeyim",
    image: "mahalle-marmara",
    imageAlt: "Yatak odasında çift kişilik yatağın makineyle yıkanması",
    description:
      "Esenyurt Mehmet Akif Ersoy Mahallesi’ndeki evinize geliyoruz. Koltuk ve yataklarınızı aynı randevuda, evinizde yıkıyoruz.",
    summary:
      "Esenyurt’un Mehmet Akif Ersoy Mahallesi, E-5’e yakın, Avrupa Yakası’nın en büyük kaykay parklarından birini barındıran Şehitler Parkı’nın bulunduğu ve yaklaşık 27 bin kişinin yaşadığı mahalle. Koltuklarla birlikte yatakları da aynı randevuda yıkıyoruz.",
    facts: [
      { label: "Konum", value: "Esenyurt’un güneyinde, E-5’e yakın; Güzelyurt metrobüs durağına yakın" },
      { label: "Komşu mahalleler", value: "Güzelyurt, Mehterçeşme, Akevler, Talatpaşa, Mevlana" },
      { label: "Nüfus", value: "26.809 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "Şehitler Parkı ve Kaykay Parkı" },
    ],
    about: [
      "Mehmet Akif Ersoy Mahallesi E-5’e yakın, Güzelyurt, Mehterçeşme, Akevler, Talatpaşa ve Mevlana mahalleleriyle çevrili; mahalle sakinleri metrobüse Güzelyurt durağından biniyor. 2051. Sokak’taki Şehitler Parkı ve içindeki 2.390 m²’lik, Avrupa Yakası’nın en büyüğü olarak tanıtılan kaykay parkı mahallede. Adını taşıyan Mehmet Akif Ersoy Parkı ise İnönü Mahallesi’nde.",
      "Koltukların yanında yatak yıkamayı da aynı randevuda yapıyoruz: yatağın iki yüzünü makineyle yıkayıp fazla suyu çekiyoruz. İstanbul’un birçok ilçesinde aynı adlı mahalle bulunduğu için adresinizde Esenyurt’u belirtin.",
    ],
    nearby: ["guzelyurt", "mehtercesme", "akevler", "talatpasa", "mevlana"],
    faq: [
      {
        q: "Mehmet Akif Ersoy Mahallesi’nin her yerine geliyor musunuz?",
        a: "Evet. Şehitler Parkı çevresi dahil Esenyurt Mehmet Akif Ersoy Mahallesi’nin tamamına geliyoruz.",
      },
      {
        q: "Yatak yıkamayı koltukla aynı gün yapıyor musunuz?",
        a: "Evet. Tek ve çift kişilik yatakların iki yüzünü koltuklarla aynı randevuda yıkıyoruz.",
      },
      DRYING,
      PRICE("Esenyurt Mehmet Akif Ersoy Mahallesi’nde"),
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/Mehmet_Akif_Ersoy,_Esenyurt",
    sources: [
      wiki("Mehmet_Akif_Ersoy,_Esenyurt"),
      ESENYURT_MUHTARLIK,
      ESENYURT_NUFUS,
      proj("sehitler-parki"),
      "https://www.esenyurt.bel.tr/esenyurt/sayfa/kaykay-parki-skate-park-283",
      "https://istanbulkentkonseyi.org.tr/wp-content/uploads/2022/05/Esenyurt-Katilim-Kafe-Raporu.pdf",
    ],
  },
];
