// Esenyurt mahalle sayfaları (2/2: Mehterçeşme – Zafer). Kaynak yöntemi için `neighborhoods-esenyurt-1.ts`.
// Tuzaklar: Saadetdere Termal Tesisi, "Saadetdere Mahallesi" metrobüs durağı ve Torium AVM Turgut Özal'da;
// belediyenin ana binası Zafer'de (Sultaniye'deki eski bina); Namık Kemal, Örnek ve Yenikent muhtarlıkları başka
// mahallelerde; Şehitler Parkı Mehmet Akif Ersoy'da; Avcılar'ın Yeşilkent'i Esenyurt Yeşilkent'e komşu değil.

import { ESENYURT_MUHTARLIK, esenyurtPrice as PRICE } from "./neighborhoods-esenyurt-1";
import type { Neighborhood } from "./neighborhoods";

const D = "esenyurt-koltuk-yikama";
const ILETISIM = "https://web.archive.org/web/20260514130709/http://www.esenyurt.bel.tr/iletisim";
const KENT_KONSEYI = "https://istanbulkentkonseyi.org.tr/wp-content/uploads/2022/05/Esenyurt-Katilim-Kafe-Raporu.pdf";
const proj = (slug: string) => `http://www.esenyurt.bel.tr/projeler/sayfa/${slug}`;
const wiki = (title: string) => `https://tr.wikipedia.org/wiki/${encodeURIComponent(title)}`;
const nufus = (id: string, slug: string) => `https://www.nufusune.com/${id}-istanbul-esenyurt-${slug}-mahallesi-nufusu`;

const DRYING = {
  q: "Yıkadıktan sonra koltuğu ne zaman kullanabilirim?",
  a: "Kumaşa ve havaya göre genellikle 4–8 saat içinde kurur. Pencereleri açık tutmanız kurumayı hızlandırır; kuruyana kadar üzerine örtü sermemenizi öneririz.",
};
const PARKING = {
  q: "Binanın önüne park yeri yoksa ne oluyor?",
  a: "Adresinizi yazarken yakında kısa süreli park edilebilecek bir yer olup olmadığını belirtin; makineyi kısa bir mesafe taşımamız sorun değil.",
};
const STAINS = {
  q: "Her leke çıkar mı?",
  a: "Yemek, içecek, ter ve toz lekelerinin büyük çoğunluğu çıkar. Çok eski, boya veya mürekkep lekelerinde sonucu işe başlamadan önce açıkça söylüyoruz.",
};

export const esenyurtNeighborhoods2: Neighborhood[] = [
  {
    slug: "mehtercesme",
    district: D,
    name: "Mehterçeşme",
    heading: "Mehterçeşme",
    officialName: "Mehterçeşme Mahallesi",
    locative: "Mehterçeşme’de",
    locativeAdj: "Mehterçeşme’deki",
    dative: "Mehterçeşme’ye",
    iAmIn: "Esenyurt Mehterçeşme Mahallesi’ndeyim",
    image: "sahne-cocuklu-ev",
    imageAlt: "Bej kumaş koltuktaki keçeli kalem lekesine ön işlem uygulanması",
    description:
      "Esenyurt Mehterçeşme’deki evinize geliyoruz. Çocuklu evlerde kalem ve yiyecek lekelerine ön işlem yapıp koltuğunuzu yerinde yıkıyoruz.",
    summary:
      "Mehterçeşme, adını bölgedeki tarihî çeşmeden alan, yaklaşık 37.700 kişiyle Esenyurt’un en kalabalık mahallelerinden biri; Haramidere deresi mahalleden geçiyor, sakinleri metrobüse Güzelyurt durağından biniyor. Çocuklu evlerde lekelere kumaşa uygun ürünle ön işlem yapıyoruz.",
    facts: [
      { label: "Konum", value: "Esenyurt’un güneyinde, iç kesimde; Haramidere deresi geçiyor, Güzelyurt metrobüs durağına yakın" },
      { label: "Komşu mahalleler", value: "Yeşilkent, Mehmet Akif Ersoy, Talatpaşa, Mevlana, Cumhuriyet" },
      { label: "Nüfus", value: "37.697 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "Mehterçeşme Muhtarlığı Yanı Parkı, Menekşe Kreş Parkı" },
    ],
    about: [
      "Mehterçeşme ve Merkez (Bağlarçeşme) mahalleleri adlarını bölgedeki tarihî çeşmelerden alıyor. Hacı Bayram Veli, Bağdat ve Ufuk caddeleri çevresinde gelişen mahalle tamamı Esenyurt mahalleleriyle çevrili; Haramidere deresi mahalleden geçiyor. Mahalle sakinleri metrobüse Güzelyurt durağından biniyor.",
      "Kalabalık aile evlerinde koltuklarda kalem, meyve suyu ve yemek lekeleri sık görülüyor. Bu lekelere önce kumaşa uygun ürünle ön işlem yapıyor, ardından makineyle yıkıyor ve durulayarak kumaşta ürün kalıntısı bırakmıyoruz.",
    ],
    nearby: ["yesilkent", "mehmet-akif-ersoy", "talatpasa", "mevlana", "cumhuriyet"],
    faq: [
      {
        q: "Mehterçeşme’nin her yerine geliyor musunuz?",
        a: "Evet. Hacı Bayram Veli Caddesi çevresi dahil Mehterçeşme Mahallesi’nin tamamına geliyoruz.",
      },
      {
        q: "Kullandığınız ürünler çocuklar için güvenli mi?",
        a: "Evlerde kullanıma uygun ürünler kullanıyor ve yıkamanın sonunda durulama yapıyoruz; kumaşta ürün kalıntısı bırakmıyoruz.",
      },
      STAINS,
      PRICE("Mehterçeşme’de"),
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/Mehter%C3%A7e%C5%9Fme",
    sources: [wiki("Mehterçeşme"), ESENYURT_MUHTARLIK, nufus("40854", "mehtercesme"), KENT_KONSEYI, proj("mehtercesme-muhtarligi-yani-parki"), proj("menekse-kres-parki")],
  },
  {
    slug: "mevlana",
    district: D,
    name: "Mevlana",
    heading: "Esenyurt Mevlana",
    officialName: "Mevlana Mahallesi",
    locative: "Esenyurt Mevlana’da",
    locativeAdj: "Esenyurt Mevlana’daki",
    dative: "Esenyurt Mevlana’ya",
    iAmIn: "Esenyurt Mevlana Mahallesi’ndeyim",
    image: "sahne-site-giris",
    imageAlt: "Yıkama makinesiyle site girişinden geçen usta",
    description:
      "Esenyurt Mevlana Mahallesi’ndeki site ve dairelere geliyoruz. Marmara Park çevresindeki evlerde koltuğunuzu taşımadan, evinizde yıkıyoruz.",
    summary:
      "Esenyurt’un Mevlana Mahallesi, E-5 üzerinde, Marmara Park AVM’nin bulunduğu ve karşısında Beylikdüzü’nün Barış ve Büyükşehir mahallelerinin yer aldığı mahalle; “Beylikdüzü” ve “Beylikdüzü Belediye” metrobüs durakları mahallenin E-5 kenarında. Sitelerde makinemizle doğrudan dairenize çıkıyoruz.",
    facts: [
      { label: "Konum", value: "Esenyurt’un güneybatısında, E-5 üzerinde; Beylikdüzü ve Beylikdüzü Belediye metrobüs durakları" },
      { label: "Komşu mahalleler", value: "Cumhuriyet, Güzelyurt, Mehterçeşme, Mehmet Akif Ersoy (Beylikdüzü Barış, Büyükşehir, Yakuplu)" },
      { label: "Nüfus", value: "14.560 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "Marmara Park AVM, Aslanyurdu Parkı, Yunus Balta Kültür Merkezi Parkı" },
    ],
    about: [
      "Mevlana Mahallesi, E-5’in kuzeyinde, karşısında Beylikdüzü’nün Barış ve Büyükşehir mahalleleri bulunan bir Esenyurt mahallesi; adlarında Beylikdüzü geçse de “Beylikdüzü” ve “Beylikdüzü Belediye” metrobüs durakları bu mahallenin E-5 kenarında. Çelebi Mehmet Caddesi’ndeki Marmara Park AVM’nin resmî adresi de Mevlana Mahallesi. İstanbul’un başka ilçelerinde de Mevlana Mahallesi olduğu için adresinizde Esenyurt’u belirtin.",
      "Sitelerde güvenliğe isminizi bırakmanız, misafir otoparkının yerini söylemeniz yeterli; makinemiz taşınabilir, asansörle dairenize çıkarıyoruz. Köşe takımlarını minderleriyle birlikte yerinde yıkıyoruz.",
    ],
    nearby: ["cumhuriyet", "guzelyurt", "mehtercesme", "mehmet-akif-ersoy", "beylikduzu-koltuk-yikama/baris", "beylikduzu-koltuk-yikama/buyuksehir"],
    faq: [
      {
        q: "Marmara Park çevresindeki sitelere geliyor musunuz?",
        a: "Evet. Marmara Park AVM ve metrobüs çevresi dahil Mevlana Mahallesi’nin tamamına geliyoruz.",
      },
      {
        q: "Beylikdüzü tarafındaki evlere de geliyor musunuz?",
        a: "Evet. Karşıdaki Beylikdüzü Barış ve Büyükşehir dahil Beylikdüzü’nün tüm mahallelerine geliyoruz.",
      },
      DRYING,
      PRICE("Esenyurt Mevlana Mahallesi’nde"),
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/Mevlana,_Esenyurt",
    sources: [wiki("Mevlana,_Esenyurt"), ESENYURT_MUHTARLIK, nufus("181492", "mevlana"), "https://www.marmarapark.com/iletisim", proj("aslanyurdu-parki"), proj("yunus-balta-kultur-merkezi-parki")],
  },
  {
    slug: "namik-kemal",
    district: D,
    name: "Namık Kemal",
    heading: "Esenyurt Namık Kemal",
    officialName: "Namık Kemal Mahallesi",
    locative: "Esenyurt Namık Kemal’de",
    locativeAdj: "Esenyurt Namık Kemal’deki",
    dative: "Esenyurt Namık Kemal’e",
    iAmIn: "Esenyurt Namık Kemal Mahallesi’ndeyim",
    image: "mahalle-yakuplu",
    imageAlt: "Eski apartman dairesinde kahverengi kumaş berjerin yıkanması",
    description:
      "Esenyurt Namık Kemal Mahallesi’ndeki evinize geliyoruz. Koltuk, berjer ve takımlarınızı evinizde, makineyle yıkıyoruz.",
    summary:
      "Esenyurt’un Namık Kemal Mahallesi, E-5 kenarında, Haramidere Sanayi metrobüs durağının bulunduğu, Beylikdüzü Yakuplu ve Avcılar sınırına yakın mahalle; Adile Naşit ve Doğan Araslı bulvarları mahalleden geçiyor. Berjer ve takımları da makinemizle yerinde yıkıyoruz.",
    facts: [
      { label: "Konum", value: "Esenyurt’un güneydoğusunda, E-5 kenarında; Haramidere Sanayi metrobüs durağı" },
      { label: "Komşu mahalleler", value: "Zafer, Turgut Özal, Saadetdere, Akşemseddin (Beylikdüzü Yakuplu)" },
      { label: "Nüfus", value: "23.674 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "181. Sokak Parkı" },
    ],
    about: [
      "Namık Kemal Mahallesi, E-5’in kuzey kenarında, karşısında Beylikdüzü’nün Yakuplu Mahallesi bulunan, Haramidere Sanayi metrobüs durağının yer aldığı bir Esenyurt mahallesi; Adile Naşit Bulvarı, Doğan Araslı Bulvarı ve Tonguç Baba Caddesi mahalleden geçiyor. Mahallenin muhtarlığı ise komşu Zafer Mahallesi’nde. Esenler ve Ümraniye’de de aynı adlı mahalleler bulunuyor.",
      "Uzun yıllar kullanılan berjer ve takımlarda önce iyice vakumluyor, lekelere ön işlem yapıyor, sonra makineyle yıkıyoruz. Desenli kumaşlarda ürünü önce görünmeyen bir yerde deniyoruz.",
    ],
    nearby: ["zafer", "turgut-ozal", "saadetdere", "aksemseddin", "beylikduzu-koltuk-yikama/yakuplu"],
    faq: [
      {
        q: "Haramidere Sanayi metrobüs çevresine geliyor musunuz?",
        a: "Evet. Haramidere Sanayi durağı çevresi dahil Namık Kemal Mahallesi’nin tamamına ve karşıdaki Beylikdüzü Yakuplu’ya geliyoruz.",
      },
      {
        q: "Eski berjer ve koltuklar yıkamaya uygun mu?",
        a: "Çoğu kumaş berjer ve koltuk yerinde yıkanabilir. Fotoğrafını gönderin; kumaş uygun değilse önceden söylüyoruz.",
      },
      DRYING,
      PRICE("Esenyurt Namık Kemal Mahallesi’nde"),
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/Nam%C4%B1k_Kemal,_Esenyurt",
    sources: [wiki("Namık_Kemal,_Esenyurt"), ESENYURT_MUHTARLIK, nufus("40856", "namikkemal"), proj("181-sokak-parki")],
  },
  {
    slug: "necip-fazil-kisakurek",
    district: D,
    name: "Necip Fazıl Kısakürek",
    heading: "Necip Fazıl Kısakürek Mahallesi",
    officialName: "Necip Fazıl Kısakürek Mahallesi",
    locative: "Necip Fazıl Kısakürek Mahallesi’nde",
    locativeAdj: "Necip Fazıl Kısakürek Mahallesi’ndeki",
    dative: "Necip Fazıl Kısakürek Mahallesi’ne",
    iAmIn: "Esenyurt Necip Fazıl Kısakürek Mahallesi’ndeyim",
    image: "sahne-berjer",
    imageAlt: "Desenli kumaş berjerin oturma yerinin makineyle yıkanması",
    description:
      "Esenyurt Necip Fazıl Kısakürek Mahallesi’ndeki evinize geliyoruz. Koltuk, berjer ve takımlarınızı evinizde, makineyle yıkıyoruz.",
    summary:
      "Necip Fazıl Kısakürek Mahallesi, Esenyurt’un batısında, 2015’te kurulan, Kıraç Şehit Erol Olçok Kültür Merkezi’nin bulunduğu ve yaklaşık 20 bin kişinin yaşadığı mahalle. Klasik berjer ve desenli koltuklarda kumaşa uygun ürünle, rengi korumaya özen göstererek çalışıyoruz.",
    facts: [
      { label: "Konum", value: "Esenyurt’un batısında, iç kesimde; Gazi ve Ali Rıza Bey caddeleri çevresi" },
      { label: "Komşu mahalleler", value: "Hürriyet, Şehitler, Yeşilkent, İstiklal" },
      { label: "Nüfus", value: "20.015 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "Kıraç Şehit Erol Olçok Kültür Merkezi, Maral Sokak Parkı" },
    ],
    about: [
      "Necip Fazıl Kısakürek Mahallesi, Esenyurt’un 2015’te 43 mahalleye çıkmasıyla kurulan mahallelerinden biri; Hürriyet, Şehitler, Yeşilkent ve İstiklal mahalleleriyle çevrili. Ankakuşu Sokak’taki Kıraç Şehit Erol Olçok Kültür Merkezi ve Maral Sokak Parkı mahallede. Ümraniye ve Sultanbeyli’deki “Necip Fazıl” mahalleleriyle karıştırılmamalı.",
      "Uzun yıllar kullanılan berjer ve desenli takımlarda önce iyice vakumluyor, lekelere ön işlem yapıyor, sonra makineyle yıkıyoruz. Desenli kumaşlarda rengin akmaması için ürünü önce görünmeyen bir yerde deniyoruz.",
    ],
    nearby: ["hurriyet", "sehitler", "yesilkent", "istiklal"],
    faq: [
      {
        q: "Necip Fazıl Kısakürek Mahallesi’ne geliyor musunuz?",
        a: "Evet. Erol Olçok Kültür Merkezi çevresi dahil Necip Fazıl Kısakürek Mahallesi’nin tamamına geliyoruz.",
      },
      {
        q: "Desenli koltuklarda renk akar mı?",
        a: "Ürünü önce görünmeyen bir yerde deniyoruz; kumaşa uygun ürünle çalıştığımız için renk akmaz. Riskli bir kumaşsa yıkamadan önce söylüyoruz.",
      },
      DRYING,
      PRICE("Necip Fazıl Kısakürek Mahallesi’nde"),
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/Necip_Faz%C4%B1l_K%C4%B1sak%C3%BCrek,_Esenyurt",
    sources: [wiki("Necip_Fazıl_Kısakürek,_Esenyurt"), ESENYURT_MUHTARLIK, nufus("181484", "necipfazilkisakurek"), ILETISIM, proj("maral-sokak-parki")],
  },
  {
    slug: "orhan-gazi",
    district: D,
    name: "Orhan Gazi",
    heading: "Esenyurt Orhan Gazi",
    officialName: "Orhan Gazi Mahallesi",
    locative: "Esenyurt Orhan Gazi’de",
    locativeAdj: "Esenyurt Orhan Gazi’deki",
    dative: "Esenyurt Orhan Gazi’ye",
    iAmIn: "Esenyurt Orhan Gazi Mahallesi’ndeyim",
    image: "bolge-buyukcekmece",
    imageAlt: "Bahçeli evde köşe koltuk yıkama",
    description:
      "Esenyurt Orhan Gazi Mahallesi’ndeki evinize geliyoruz. Koltuk ve köşe takımlarınızı evinizde, makineyle derinlemesine yıkıyoruz.",
    summary:
      "Orhan Gazi, 2015’ten önce Sanayi Mahallesi olarak bilinen, TEM otoyolunun geçtiği ve Esenyurt Mesire Alanı’nın bulunduğu, Bahçeşehir ve Arnavutköy sınırındaki Esenyurt mahallesi; nüfusu 2024’ten 2025’e 17.700’den 19.200’e çıktı. İlçenin kuzeyindeki evlere de makinemizle geliyoruz.",
    facts: [
      { label: "Konum", value: "Esenyurt’un kuzeyinde; TEM (Avrupa Otoyolu) geçiyor, Başakşehir ve Arnavutköy sınırında" },
      { label: "Komşu mahalleler", value: "Akçaburgaz, Koza, Selahaddin Eyyubi (Başakşehir Bahçeşehir 2. Kısım, Arnavutköy Ömerli)" },
      { label: "Nüfus", value: "19.205 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "Esenyurt Mesire Alanı ve Semt Parkı, Yasemin Parkı, Erguvan Parkı" },
    ],
    about: [
      "Orhan Gazi Mahallesi 2015’ten önce Sanayi Mahallesi olarak biliniyordu; aynı yıl Koza Mahallesi ondan ayrıldı. TEM otoyolunun geçtiği mahallede belediyenin Esenyurt Mesire Alanı ve Semt Parkı, Yasemin ve Erguvan parkları bulunuyor; kuzeyde Başakşehir’in Bahçeşehir 2. Kısım ve Arnavutköy’ün Ömerli mahalleleriyle komşu. Pendik ve Sultanbeyli’deki Orhangazi mahalleleriyle ya da Esenyurt’un Osmangazi Mahallesi ile karıştırılmamalı.",
      "Merkeze uzak kuzey mahallelerinde de randevuyu size uyan saate göre planlıyoruz. Köşe takımlarını minderleriyle birlikte yerinde yıkıyor, fazla suyu iyice çekiyoruz.",
    ],
    nearby: ["akcaburgaz", "koza", "selahaddin-eyyubi", "buyukcekmece-koltuk-yikama/karaagac"],
    faq: [
      {
        q: "Orhan Gazi Mahallesi’ne geliyor musunuz?",
        a: "Evet. Esenyurt Orhan Gazi Mahallesi’nin tamamına ve komşu Akçaburgaz ile Koza’ya geliyoruz. Osmangazi Mahallesi’ne de geliyoruz; adresinizi yazmanız yeterli.",
      },
      {
        q: "Köşe takımını sökmeden yıkayabiliyor musunuz?",
        a: "Evet. Köşe takımını minderleriyle birlikte yerinde yıkıyoruz; fotoğrafını gönderirseniz boyutuna göre net fiyat veriyoruz.",
      },
      DRYING,
      PRICE("Esenyurt Orhan Gazi Mahallesi’nde"),
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/Orhan_Gazi,_Esenyurt",
    sources: [wiki("Orhan_Gazi,_Esenyurt"), ESENYURT_MUHTARLIK, nufus("40863", "orhangazi"), proj("esenyurt-mesire-alani-ve-semt-parki"), proj("yasemin-parki")],
  },
  {
    slug: "ornek",
    district: D,
    name: "Örnek",
    heading: "Esenyurt Örnek",
    officialName: "Örnek Mahallesi",
    locative: "Esenyurt Örnek’te",
    locativeAdj: "Esenyurt Örnek’teki",
    dative: "Esenyurt Örnek’e",
    iAmIn: "Esenyurt Örnek Mahallesi’ndeyim",
    image: "mahalle-dereagzi",
    imageAlt: "Açık mavi kumaş koltuğun makineyle yıkanması",
    description:
      "Esenyurt Örnek Mahallesi’ndeki evinize geliyoruz. Koltuk ve köşe takımlarınızı evinizde, makineyle derinlemesine yıkıyoruz.",
    summary:
      "Esenyurt’un Örnek Mahallesi, ilçenin orta-kuzey kesiminde, Doğan Araslı Bulvarı ve Erzurum Kongre Caddesi üzerinde yer alıyor; 2015’te bir bölümü Pınar Mahallesi’ne ayrıldı. Mahallede yaklaşık 20.500 kişi yaşıyor; evlerinize makinemizle geliyoruz.",
    facts: [
      { label: "Konum", value: "Esenyurt’un orta-kuzey kesiminde; Doğan Araslı Bulvarı ve Erzurum Kongre Caddesi" },
      { label: "Komşu mahalleler", value: "Çınar, Selahaddin Eyyubi, Ardıçlı, Merkez (Bağlarçeşme)" },
      { label: "Nüfus", value: "20.518 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "Esenyurt Belediyesi Temizlik İşleri Müdürlüğü" },
    ],
    about: [
      "Örnek Mahallesi’nin nüfusu 2014’te 55 bini aşıyordu; 2015’te Pınar Mahallesi, Örnek ve Merkez mahallelerinin bir bölümünün birleşmesiyle kurulunca Örnek bugünkü sınırlarını aldı. Doğan Araslı Bulvarı, Erzurum Kongre ve Ahmet Arif caddeleri mahalleden geçiyor; belediyenin Temizlik İşleri Müdürlüğü 1342. Sokak’ta. Mahallenin muhtarlığı komşu Çınar Mahallesi’nde; Ataşehir’de de Örnek Mahallesi bulunuyor.",
      "Bulvar üzerindeki binalarda adresinizi yazarken kısa süreli park imkânını belirtmeniz yeterli. Koltuğu vakumlama, leke ön işlemi, makineyle derin yıkama ve son emme fiyata dahil.",
    ],
    nearby: ["cinar", "selahaddin-eyyubi", "ardicli", "merkez-baglarcesme"],
    faq: [
      {
        q: "Esenyurt Örnek Mahallesi’nin her yerine geliyor musunuz?",
        a: "Evet. Doğan Araslı Bulvarı çevresi dahil Örnek Mahallesi’nin tamamına geliyoruz.",
      },
      PARKING,
      DRYING,
      PRICE("Esenyurt Örnek Mahallesi’nde"),
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/%C3%96rnek,_Esenyurt",
    sources: [wiki("Örnek,_Esenyurt"), wiki("Pınar,_Esenyurt"), ESENYURT_MUHTARLIK, nufus("40857", "ornek"), ILETISIM],
  },
  {
    slug: "osmangazi",
    district: D,
    name: "Osmangazi",
    heading: "Esenyurt Osmangazi",
    officialName: "Osmangazi Mahallesi",
    locative: "Esenyurt Osmangazi’de",
    locativeAdj: "Esenyurt Osmangazi’deki",
    dative: "Esenyurt Osmangazi’ye",
    iAmIn: "Esenyurt Osmangazi Mahallesi’ndeyim",
    image: "sahne-evcil-hayvan",
    imageAlt: "Kedili evde koyu gri koltuktaki tüylerin vakumlanması",
    description:
      "Esenyurt Osmangazi’deki evinize geliyoruz. Evcil hayvanlı evlerde koltuktaki tüyleri önce vakumluyor, ardından makineyle yıkıyoruz.",
    summary:
      "Osmangazi, Esenyurt’un batısında, Hadımköy Yolu Caddesi çevresinde, Büyükçekmece Çakmaklı ile komşu ve yaklaşık 30.700 kişinin yaşadığı mahalle (Orhan Gazi Mahallesi ile karıştırılmamalı). Evcil hayvanlı evlerde koltuğu önce vakumlayıp tüyleri alıyor, sonra yıkıyoruz.",
    facts: [
      { label: "Konum", value: "Esenyurt’un batısında; Hadımköy Yolu Caddesi çevresi, Büyükçekmece sınırında" },
      { label: "Komşu mahalleler", value: "Akçaburgaz, Selahaddin Eyyubi, Atatürk, İstiklal, Battalgazi (Büyükçekmece Çakmaklı)" },
      { label: "Nüfus", value: "30.709 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "Hasanbey Parkı, İSKİ Üstü Parkı, İstiklal Mahallesi Gençlik Merkezi Parkı" },
    ],
    about: [
      "Osmangazi Mahallesi, Esenyurt’un 2015’te kurulan mahallelerinden biri; batıda Büyükçekmece’nin Çakmaklı Mahallesi, ilçe içinde Akçaburgaz, Selahaddin Eyyubi, Atatürk, İstiklal ve Battalgazi ile komşu. Hasanbey ve İSKİ Üstü parkları ile adına rağmen “İstiklal Mahallesi Gençlik Merkezi Parkı” bu mahallede. Belediye sayfalarında “Osman Gazi” olarak da yazılıyor; komşu Orhan Gazi ile karıştırılmamalı.",
      "Evcil hayvanlı evlerde yıkamadan önce koltuğu özel başlıkla vakumlayıp tüyleri alıyor, kokuya karşı kumaşa uygun ürünle yıkıyoruz. Koku kumaşın altındaki süngere işlemişse bunu yıkamadan önce açıkça söylüyoruz.",
    ],
    nearby: ["akcaburgaz", "selahaddin-eyyubi", "ataturk", "istiklal", "battalgazi", "buyukcekmece-koltuk-yikama/cakmakli"],
    faq: [
      {
        q: "Osmangazi’ye mi, Orhan Gazi’ye mi geliyorsunuz?",
        a: "İkisine de geliyoruz. Esenyurt’ta Osmangazi ve Orhan Gazi adında iki ayrı mahalle var; adresinizi yazmanız yeterli.",
      },
      {
        q: "Kedi ve köpek tüyü koltuktan çıkar mı?",
        a: "Evet. Yıkamadan önce koltuğu özel başlıkla vakumlayıp tüyleri alıyoruz, ardından makineyle yıkıyoruz.",
      },
      {
        q: "Evcil hayvan kokusu gider mi?",
        a: "Çoğu durumda belirgin şekilde azalır ya da tamamen gider. Koku süngere işlemişse bunu yıkamadan önce söylüyoruz.",
      },
      PRICE("Esenyurt Osmangazi Mahallesi’nde"),
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/Osmangazi,_Esenyurt",
    sources: [wiki("Osmangazi,_Esenyurt"), ESENYURT_MUHTARLIK, nufus("181480", "osmangazi"), proj("hasanbey-parki"), proj("iski-ustu-parki"), proj("istiklal-mh-genclik-merkezi-parki")],
  },
  {
    slug: "pinar",
    district: D,
    name: "Pınar",
    heading: "Esenyurt Pınar",
    officialName: "Pınar Mahallesi",
    locative: "Esenyurt Pınar’da",
    locativeAdj: "Esenyurt Pınar’daki",
    dative: "Esenyurt Pınar’a",
    iAmIn: "Esenyurt Pınar Mahallesi’ndeyim",
    image: "koltuk-yikama-evde",
    imageAlt: "Evde makineyle gri kumaş koltuk yıkama",
    description:
      "Esenyurt Pınar Mahallesi’ndeki evinize geliyoruz. Koltuğunuzu taşımadan, evinizde makineyle derinlemesine yıkıyoruz.",
    summary:
      "Pınar, yaklaşık 42.700 kişiyle Esenyurt’un en kalabalık mahallesi; 2015’te Örnek ve Merkez mahallelerinin bir bölümünün birleşmesiyle kuruldu. 19 Mayıs Bulvarı ve Ahmet Arif Caddesi çevresindeki evlere makinemizle geliyoruz.",
    facts: [
      { label: "Konum", value: "Esenyurt’un ortasında; 19 Mayıs Bulvarı, Ahmet Arif ve Sivas Kongre caddeleri, Haramidere deresi geçiyor" },
      { label: "Komşu mahalleler", value: "Battalgazi, Çınar, Merkez (Bağlarçeşme), Fatih, Yeşilkent, Selahaddin Eyyubi" },
      { label: "Nüfus", value: "42.721 (2025, ADNKS), Esenyurt’un en kalabalık mahallesi" },
      { label: "Bilinen yerler", value: "Bilal Yazkurt Parkı" },
    ],
    about: [
      "Pınar Mahallesi, 2015’te Örnek ve Merkez (Bağlarçeşme) mahallelerinin bir bölümünün birleşmesiyle kuruldu ve bugün Esenyurt’un en kalabalık mahallesi. 19 Mayıs Bulvarı, Ahmet Arif ve Sivas Kongre caddeleri mahalleden geçiyor; Haramidere deresi de mahallenin içinden akıyor. Bilal Yazkurt Parkı mahallenin yeşil alanı. Sarıyer’de de Pınar Mahallesi bulunduğu için adresinizde Esenyurt’u belirtin.",
      "Kalabalık mahallelerde en yakın boş saati birlikte seçiyoruz; WhatsApp’tan fotoğraf ve adres göndermeniz yeterli. Koltuğu vakumlama, leke ön işlemi, makineyle derin yıkama ve son emme fiyata dahil.",
    ],
    nearby: ["battalgazi", "cinar", "merkez-baglarcesme", "fatih", "yesilkent", "selahaddin-eyyubi"],
    faq: [
      {
        q: "Esenyurt Pınar Mahallesi’nin her yerine geliyor musunuz?",
        a: "Evet. 19 Mayıs Bulvarı ve Ahmet Arif Caddesi çevresi dahil Pınar Mahallesi’nin tamamına geliyoruz.",
      },
      PARKING,
      DRYING,
      PRICE("Esenyurt Pınar Mahallesi’nde"),
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/P%C4%B1nar,_Esenyurt",
    sources: [wiki("Pınar,_Esenyurt"), ESENYURT_MUHTARLIK, nufus("40864", "pinar"), proj("bilal-yazkurt-parki")],
  },
  {
    slug: "piri-reis",
    district: D,
    name: "Piri Reis",
    heading: "Piri Reis Mahallesi",
    officialName: "Piri Reis Mahallesi",
    locative: "Piri Reis Mahallesi’nde",
    locativeAdj: "Piri Reis Mahallesi’ndeki",
    dative: "Piri Reis Mahallesi’ne",
    iAmIn: "Esenyurt Piri Reis Mahallesi’ndeyim",
    image: "sahne-cocuk-yatagi",
    imageAlt: "Çocuk odasında tek kişilik yatağın makineyle yıkanması",
    description:
      "Esenyurt Piri Reis Mahallesi’ndeki evinize geliyoruz. Koltuk ve yataklarınızı aynı randevuda, evinizde yıkıyoruz.",
    summary:
      "Piri Reis Mahallesi, Esenyurt’un 2015’te kurulan, Nazım Hikmet Bulvarı çevresindeki iç kesim mahallelerinden biri; nüfusu 2024’ten 2025’e 16.500’den 17.000’e çıktı. Koltuklarla birlikte çocuk ve yetişkin yataklarını da aynı randevuda yıkıyoruz.",
    facts: [
      { label: "Konum", value: "Esenyurt’un güneybatısında, iç kesimde; Nazım Hikmet Bulvarı çevresi" },
      { label: "Komşu mahalleler", value: "Barbaros Hayrettin Paşa, Yeşilkent, Cumhuriyet, Hürriyet" },
      { label: "Nüfus", value: "17.057 (2025, ADNKS)" },
    ],
    about: [
      "Piri Reis Mahallesi, Esenyurt’un 2015’te 43 mahalleye çıkmasıyla kurulan mahallelerinden biri; Barbaros Hayrettin Paşa, Yeşilkent, Cumhuriyet ve Hürriyet mahalleleriyle çevrili. Nazım Hikmet Bulvarı ve Necip Fazıl Kısakürek Caddesi mahalleden geçiyor; aynı adı taşıyan Necip Fazıl Kısakürek Mahallesi ise ayrı bir mahalle.",
      "Koltukların yanında yatak yıkamayı da aynı randevuda yapıyoruz: yatağın iki yüzünü makineyle yıkayıp fazla suyu çekiyoruz. Çocuklu evlerde yıkamanın sonunda durulama yapıyor, kumaşta ürün kalıntısı bırakmıyoruz.",
    ],
    nearby: ["barbaros-hayrettin-pasa", "yesilkent", "cumhuriyet", "hurriyet"],
    faq: [
      {
        q: "Piri Reis Mahallesi’nin her yerine geliyor musunuz?",
        a: "Evet. Nazım Hikmet Bulvarı çevresi dahil Piri Reis Mahallesi’nin tamamına geliyoruz.",
      },
      {
        q: "Yatak yıkamayı koltukla aynı gün yapıyor musunuz?",
        a: "Evet. Tek ve çift kişilik yatakların iki yüzünü koltuklarla aynı randevuda yıkıyoruz.",
      },
      DRYING,
      PRICE("Piri Reis Mahallesi’nde"),
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/Piri_Reis,_Esenyurt",
    sources: [wiki("Piri_Reis,_Esenyurt"), ESENYURT_MUHTARLIK, nufus("181486", "pirireis")],
  },
  {
    slug: "saadetdere",
    district: D,
    name: "Saadetdere",
    heading: "Saadetdere",
    officialName: "Saadetdere Mahallesi",
    locative: "Saadetdere’de",
    locativeAdj: "Saadetdere’deki",
    dative: "Saadetdere’ye",
    iAmIn: "Esenyurt Saadetdere Mahallesi’ndeyim",
    image: "koltuk-yikama-randevuya-gelis",
    imageAlt: "Koltuk yıkama makinesiyle apartmana gelen usta",
    description:
      "Saadetdere’deki evinize makinemizle geliyoruz. İşletmemiz de Saadetdere’de; koltuk ve köşe takımınızı evinizde, yerinde yıkıyoruz.",
    summary:
      "Saadetdere, Özen Koltuk Yıkama’nın da adresinin bulunduğu, Esenyurt’un doğu ucunda Avcılar’ın Firuzköy ve Mustafa Kemal Paşa mahalleleriyle komşu mahallesi; Doğan Araslı Bulvarı mahalleden geçiyor. Adını taşıyan termal tesis, metrobüs durağı ve Torium AVM ise komşu Turgut Özal Mahallesi’nde.",
    facts: [
      { label: "Konum", value: "Esenyurt’un doğu ucunda; Doğan Araslı Bulvarı geçiyor, Avcılar sınırında" },
      { label: "Komşu mahalleler", value: "Namık Kemal, Turgut Özal (Avcılar Firuzköy ve Mustafa Kemal Paşa)" },
      { label: "Nüfus", value: "24.511 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "7. Sokak Parkı, 85. Sokak Parkı; Saadetdere Mahallesi metrobüs durağına yakın" },
    ],
    about: [
      "Saadetdere Mahallesi, Esenyurt’un doğu ucunda, Avcılar’ın Firuzköy ve Mustafa Kemal Paşa mahalleleriyle komşu; ilçe içinde Namık Kemal ve Turgut Özal ile çevrili. 7. Sokak ve 85. Sokak parkları mahallede. Adını taşıyan Saadetdere Termal Kür ve Tedavi Merkezi, “Saadetdere Mahallesi” metrobüs durağı ve Torium AVM ise sınırın öbür yanında, Turgut Özal Mahallesi’nde.",
      "İşletmemizin adresi Saadetdere’de olduğu için mahalleye ve çevresindeki Esenyurt ve Avcılar mahallelerine kısa sürede ulaşabiliyoruz; takvim uygunsa randevuyu yakın bir saate ayarlıyoruz. Koltuğu vakumlama, leke ön işlemi, derin yıkama ve son emme fiyata dahil.",
    ],
    nearby: ["namik-kemal", "turgut-ozal", "avcilar-koltuk-yikama/firuzkoy", "avcilar-koltuk-yikama/mustafa-kemal-pasa"],
    faq: [
      {
        q: "Saadetdere’ye ne kadar sürede gelebiliyorsunuz?",
        a: "İşletmemiz Saadetdere’de olduğu için mahalleye kısa sürede ulaşıyoruz. Takvim uygunsa randevuyu yakın bir saate ayarlıyoruz; WhatsApp’tan fotoğraf ve adres göndermeniz yeterli.",
      },
      {
        q: "Termal tesis ve metrobüs çevresine de geliyor musunuz?",
        a: "Evet. Saadetdere Termal Tesisi ve metrobüs durağı komşu Turgut Özal Mahallesi’nde; iki mahallenin tamamına geliyoruz.",
      },
      DRYING,
      PRICE("Saadetdere’de"),
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/Saadetdere",
    sources: [
      wiki("Saadetdere"),
      ESENYURT_MUHTARLIK,
      nufus("40858", "saadetdere"),
      proj("7-sokak-parki"),
      proj("85sokak-parki"),
      "https://www.gazetebirlik.com/istanbul-haberleri/esenyurt-belediyesi-saadetdere-kaplica-tesisi-haftada-bir-gun-ucretsiz-77937/77937",
    ],
  },
  {
    slug: "sehitler",
    district: D,
    name: "Şehitler",
    heading: "Esenyurt Şehitler",
    officialName: "Şehitler Mahallesi",
    locative: "Esenyurt Şehitler’de",
    locativeAdj: "Esenyurt Şehitler’deki",
    dative: "Esenyurt Şehitler’e",
    iAmIn: "Esenyurt Şehitler Mahallesi’ndeyim",
    image: "mahalle-cumhuriyet",
    imageAlt: "Hardal rengi kumaş koltuktaki lekeye ön işlem uygulanması",
    description:
      "Esenyurt Şehitler Mahallesi (Kıraç) evinize geliyoruz. Koltuktaki lekelere ön işlem yapıp evinizde, makineyle yıkıyoruz.",
    summary:
      "Şehitler Mahallesi, Esenyurt’un batısında, Kıraç bölgesinde, Gazi Caddesi üzerinde 2022’de açılan İBB Gülten Akın Kütüphanesi’nin bulunduğu mahalle; İBB adresinde “Kıraç Şehitler Mahallesi” olarak geçiyor. Lekeli koltuklarda önce kumaşa uygun ürünle ön işlem yapıyoruz.",
    facts: [
      { label: "Konum", value: "Esenyurt’un batısında, Kıraç bölgesinde; Gazi Caddesi üzerinde" },
      { label: "Komşu mahalleler", value: "Necip Fazıl Kısakürek, Battalgazi, İstiklal, Yeşilkent" },
      { label: "Nüfus", value: "16.868 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "İBB Gülten Akın Kütüphanesi" },
    ],
    about: [
      "Şehitler Mahallesi, Esenyurt’un 2015’te kurulan mahallelerinden biri; Kıraç bölgesinde, Gazi Caddesi çevresinde yer alıyor. Gazi Caddesi’ndeki İBB Gülten Akın Kütüphanesi Mart 2022’de açıldı. Adı benzese de Şehitler Parkı bu mahallede değil, Mehmet Akif Ersoy Mahallesi’nde.",
      "Yemek, çay, kahve ve çocuk lekelerinde önce kumaşa uygun ürünle ön işlem yapıyor, ardından makineyle yıkıyoruz. Çok eski lekelerde ne kadarının çıkabileceğini işe başlamadan söylüyoruz.",
    ],
    nearby: ["necip-fazil-kisakurek", "battalgazi", "istiklal", "yesilkent"],
    faq: [
      {
        q: "Kıraç’taki Şehitler Mahallesi’ne geliyor musunuz?",
        a: "Evet. Gülten Akın Kütüphanesi çevresi dahil Şehitler Mahallesi’nin tamamına ve Kıraç’taki komşu mahallelere geliyoruz.",
      },
      STAINS,
      DRYING,
      PRICE("Esenyurt Şehitler Mahallesi’nde"),
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/%C5%9Eehitler,_Esenyurt",
    sources: [wiki("Şehitler,_Esenyurt"), ESENYURT_MUHTARLIK, nufus("181524", "sehitler"), "https://ataturkkitapligi.ibb.gov.tr/en/Kitaplik/Kutuphanelerimiz/IMM-Gulten-Akin-Library/16"],
  },
  {
    slug: "selahaddin-eyyubi",
    district: D,
    name: "Selahaddin Eyyubi",
    heading: "Selahaddin Eyyubi Mahallesi",
    officialName: "Selahaddin Eyyubi Mahallesi",
    locative: "Selahaddin Eyyubi Mahallesi’nde",
    locativeAdj: "Selahaddin Eyyubi Mahallesi’ndeki",
    dative: "Selahaddin Eyyubi Mahallesi’ne",
    iAmIn: "Esenyurt Selahaddin Eyyubi Mahallesi’ndeyim",
    image: "sahne-asansorsuz-merdiven",
    imageAlt: "Asansörsüz apartmanda yıkama makinesinin merdivenle taşınması",
    description:
      "Esenyurt Selahaddin Eyyubi Mahallesi’ndeki evinize geliyoruz. Asansörsüz binalarda makineyi merdivenle kendimiz taşıyoruz.",
    summary:
      "Selahaddin Eyyubi Mahallesi, Esenyurt’un ortasında, TEM otoyolunun ve Haramidere deresinin geçtiği, dokuz Esenyurt mahallesiyle komşu, yaklaşık 30 bin kişinin yaşadığı mahalle. Asansörü olmayan binalarda makinemizi merdivenle kendimiz çıkarıyoruz.",
    facts: [
      { label: "Konum", value: "Esenyurt’un ortasında; TEM ve Haramidere deresi geçiyor, Doğan Araslı Bulvarı" },
      { label: "Komşu mahalleler", value: "Akçaburgaz, Osmangazi, Koza, Battalgazi, Örnek, Orhan Gazi, Ardıçlı, Çınar, Pınar" },
      { label: "Nüfus", value: "29.837 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "Muhsin Yazıcıoğlu Parkı" },
    ],
    about: [
      "Selahaddin Eyyubi Mahallesi, Esenyurt’un 2015’te kurulan mahallelerinden biri; ilçenin ortasında, dokuz Esenyurt mahallesiyle sınır komşusu. TEM otoyolu, Doğan Araslı Bulvarı, Erzurum Kongre ve Uğur Mumcu caddeleri mahalleden geçiyor; 1517. Sokak’taki Muhsin Yazıcıoğlu Parkı mahallenin yeşil alanı.",
      "Apartmanlarda asansör olmayabiliyor; makinemiz taşınabilir, merdivenle kendimiz çıkarıyoruz. Koltuğun çevresini biraz boşaltmanız yeterli; zemini örtüyle koruyor, işi bitirince ortalığı toparlıyoruz.",
    ],
    nearby: ["akcaburgaz", "osmangazi", "koza", "battalgazi", "ornek", "orhan-gazi", "ardicli", "cinar", "pinar"],
    faq: [
      {
        q: "Selahaddin Eyyubi Mahallesi’ne geliyor musunuz?",
        a: "Evet. Selahaddin Eyyubi Mahallesi’nin tamamına ve çevresindeki tüm Esenyurt mahallelerine geliyoruz.",
      },
      {
        q: "Asansörsüz binalara geliyor musunuz?",
        a: "Evet. Makinemiz taşınabilir; merdivenle kendimiz çıkarıyoruz. Sizin bir şey hazırlamanıza gerek yok.",
      },
      DRYING,
      PRICE("Selahaddin Eyyubi Mahallesi’nde"),
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/Selahaddin_Eyyubi,_Esenyurt",
    sources: [wiki("Selahaddin_Eyyubi,_Esenyurt"), ESENYURT_MUHTARLIK, nufus("181516", "selahaddineyyubi"), proj("muhsin-yazicioglu-parki")],
  },
  {
    slug: "suleymaniye",
    district: D,
    name: "Süleymaniye",
    heading: "Esenyurt Süleymaniye",
    officialName: "Süleymaniye Mahallesi",
    locative: "Esenyurt Süleymaniye’de",
    locativeAdj: "Esenyurt Süleymaniye’deki",
    dative: "Esenyurt Süleymaniye’ye",
    iAmIn: "Esenyurt Süleymaniye Mahallesi’ndeyim",
    image: "mahalle-kavakli",
    imageAlt: "Minderli yemek sandalyesinin makineyle yıkanması",
    description:
      "Esenyurt Süleymaniye Mahallesi’ndeki evinize geliyoruz. Koltuk, köşe takımı ve minderli sandalyelerinizi aynı randevuda yıkıyoruz.",
    summary:
      "Esenyurt’un Süleymaniye Mahallesi (Fatih’teki Süleymaniye değil), ilçenin kuzeydoğusunda, Avcılar Yeşilkent sınırında, Avcılar–Haramidere bağlantı yolunun geçtiği ve yaklaşık 34.600 kişinin yaşadığı mahalle. Koltukların yanında minderli sandalyeleri de aynı randevuda yıkıyoruz.",
    facts: [
      { label: "Konum", value: "Esenyurt’un kuzeydoğusunda; Avcılar–Haramidere bağlantı yolu geçiyor, Avcılar Yeşilkent sınırında" },
      { label: "Komşu mahalleler", value: "Ardıçlı, Yenikent, Balıkyolu, Sultaniye (Avcılar Yeşilkent)" },
      { label: "Nüfus", value: "34.649 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "Defne Parkı, Karanfil Parkı, Petunya Parkı" },
    ],
    about: [
      "Süleymaniye Mahallesi, Esenyurt’un 2015’te kurulan mahallelerinden biri; Ispartakule ve Hacı Bektaş Veli caddeleri ile Avcılar–Haramidere bağlantı yolu mahalleden geçiyor. Doğuda Avcılar’ın Yeşilkent Mahallesi ile komşu; Defne, Karanfil ve Petunya parkları mahallenin yeşil alanları.",
      "Kalabalık aile evlerinde koltukların yanında minderli yemek sandalyeleri de çok kullanılıyor. Sandalyeleri koltuklarla aynı randevuda, kumaşın türüne uygun ürünle tek tek yıkıyoruz; fiyatı adet üzerinden veriyoruz.",
    ],
    nearby: ["ardicli", "yenikent", "balikyolu", "sultaniye", "avcilar-koltuk-yikama/yesilkent"],
    faq: [
      {
        q: "Esenyurt Süleymaniye’ye mi, Fatih Süleymaniye’ye mi geliyorsunuz?",
        a: "Biz Esenyurt’taki Süleymaniye Mahallesi’ne geliyoruz. Hizmet bölgemiz Esenyurt, Beylikdüzü, Avcılar ve Büyükçekmece.",
      },
      {
        q: "Yemek sandalyelerini koltukla birlikte yıkıyor musunuz?",
        a: "Evet. Minderli sandalyeleri aynı randevuda yıkıyoruz; fiyatı adet üzerinden veriyoruz.",
      },
      DRYING,
      PRICE("Esenyurt Süleymaniye Mahallesi’nde"),
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/S%C3%BCleymaniye,_Esenyurt",
    sources: [wiki("Süleymaniye,_Esenyurt"), ESENYURT_MUHTARLIK, nufus("181512", "suleymaniye"), proj("defne-parki"), proj("karanfil-parki"), proj("petunya-parki")],
  },
  {
    slug: "sultaniye",
    district: D,
    name: "Sultaniye",
    heading: "Sultaniye",
    officialName: "Sultaniye Mahallesi",
    locative: "Sultaniye’de",
    locativeAdj: "Sultaniye’deki",
    dative: "Sultaniye’ye",
    iAmIn: "Esenyurt Sultaniye Mahallesi’ndeyim",
    image: "bolge-esenyurt",
    imageAlt: "Yıkama öncesi koltuk vakumlama",
    description:
      "Esenyurt Sultaniye’deki evinize geliyoruz. Dar sokaklardaki binalara da makinemizle ulaşıyor, koltuğunuzu evinizde yıkıyoruz.",
    summary:
      "Sultaniye, Esenyurt’un eski belediye binasının (bugün Kreş Müdürlüğü) ve 2022’de açılan İBB İsmail Hakkı Tonguç Kütüphanesi’nin bulunduğu, Doğan Araslı ve 19 Mayıs bulvarlarının geçtiği mahalle. Dar sokaklardaki binalara da makinemizi taşıyarak ulaşıyoruz.",
    facts: [
      { label: "Konum", value: "Esenyurt’un ortasında; Doğan Araslı ve 19 Mayıs bulvarları, Avcılar–Haramidere bağlantı yolu" },
      { label: "Komşu mahalleler", value: "Yenikent, İnönü, Balıkyolu, Üçevler, Fatih" },
      { label: "Nüfus", value: "23.330 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "Eski Esenyurt Belediye Binası, İBB İsmail Hakkı Tonguç Kütüphanesi, Yonca Parkı" },
    ],
    about: [
      "Sultaniye Mahallesi, Esenyurt’un eski belediye binasına ev sahipliği yapıyor; bina bugün Kreş Müdürlüğü olarak kullanılıyor, belediyenin ana binası ise Zafer Mahallesi’nde. 618. Sokak’taki İBB İsmail Hakkı Tonguç Kütüphanesi Ekim 2022’de açıldı; Yonca ve Emin Batmazoğlu parkları da mahallede. Komşu Yenikent Mahallesi’nin muhtarlığı da Sultaniye sınırları içinde.",
      "İstanbul Kent Konseyi’nin raporu, Sultaniye ve Yenikent gibi mahallelerde dar sokakların araç erişimini zorlaştırdığına dikkat çekiyor. Aracı binanın önüne yanaştıramadığımız yerlerde makinemizi kısa bir mesafe taşıyarak evinize ulaşıyoruz.",
    ],
    nearby: ["yenikent", "inonu", "balikyolu", "ucevler", "fatih"],
    faq: [
      {
        q: "Sultaniye’deki dar sokaklara da geliyor musunuz?",
        a: "Evet. Aracı yanaştıramadığımız yerlerde makinemizi taşıyarak evinize ulaşıyoruz; adresinizi yazarken yakın bir park yeri varsa belirtmeniz yeterli.",
      },
      {
        q: "Sultaniye’nin her yerine geliyor musunuz?",
        a: "Evet. Eski belediye binası ve kütüphane çevresi dahil Sultaniye Mahallesi’nin tamamına geliyoruz.",
      },
      DRYING,
      PRICE("Sultaniye’de"),
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/Sultaniye,_Esenyurt",
    sources: [
      wiki("Sultaniye,_Esenyurt"),
      ESENYURT_MUHTARLIK,
      nufus("181508", "sultaniye"),
      ILETISIM,
      "https://ataturkkitapligi.ibb.gov.tr/en/Kitaplik/Kutuphanelerimiz/IMM-Ismail-Hakki-Tonguc-Library-/54",
      proj("yonca-parki"),
      KENT_KONSEYI,
    ],
  },
  {
    slug: "talatpasa",
    district: D,
    name: "Talatpaşa",
    heading: "Esenyurt Talatpaşa",
    officialName: "Talatpaşa Mahallesi",
    locative: "Esenyurt Talatpaşa’da",
    locativeAdj: "Esenyurt Talatpaşa’daki",
    dative: "Esenyurt Talatpaşa’ya",
    iAmIn: "Esenyurt Talatpaşa Mahallesi’ndeyim",
    image: "sahne-u-kose",
    imageAlt: "Geniş salonda gri U köşe koltuğun yıkanması",
    description:
      "Esenyurt Talatpaşa Mahallesi’ndeki evinize geliyoruz. Büyük köşe takımlarını minderleriyle birlikte evinizde, makineyle yıkıyoruz.",
    summary:
      "Esenyurt’un Talatpaşa Mahallesi, ilçenin ortasında, Fatih Sultan Mehmet ve Pazaryolu caddelerinin geçtiği, yaklaşık 29 bin kişinin yaşadığı mahalle. Kağıthane’de de Talatpaşa Mahallesi bulunduğu için adresinizde Esenyurt’u belirtmeniz yeterli. Geniş köşe takımlarını sökmeden yıkıyoruz.",
    facts: [
      { label: "Konum", value: "Esenyurt’un ortasında; Fatih Sultan Mehmet ve Pazaryolu caddeleri" },
      { label: "Komşu mahalleler", value: "Fatih, Akevler, Mehterçeşme, Yeşilkent, Mehmet Akif Ersoy, Üçevler" },
      { label: "Nüfus", value: "29.151 (2025, ADNKS)" },
    ],
    about: [
      "Talatpaşa Mahallesi, Esenyurt’un ortasında, altı Esenyurt mahallesiyle çevrili; Fatih Sultan Mehmet ve Pazaryolu caddeleri mahallenin ana yolları, belediyenin ambulans servisi de 1047. Sokak’ta. Adı benzese de Talatpaşa Caddesi Yürüyüş Parkı Aşık Veysel Mahallesi’nde, Esenyurt Necmi Kadıoğlu Devlet Hastanesi ise komşu Fatih Mahallesi’nde.",
      "Geniş U ve L köşe takımlarını sökmeden, minderleriyle birlikte yerinde yıkıyor, fazla suyu iyice çekiyoruz. Koltuğu vakumlama, leke ön işlemi ve son emme fiyata dahil.",
    ],
    nearby: ["fatih", "akevler", "mehtercesme", "yesilkent", "mehmet-akif-ersoy", "ucevler"],
    faq: [
      {
        q: "Esenyurt Talatpaşa Mahallesi’nin her yerine geliyor musunuz?",
        a: "Evet. Fatih Sultan Mehmet Caddesi çevresi dahil Talatpaşa Mahallesi’nin tamamına geliyoruz.",
      },
      {
        q: "Büyük U köşe takımını evde yıkayabiliyor musunuz?",
        a: "Evet. Köşe takımını sökmeden, minderleriyle birlikte yerinde yıkıyoruz; fotoğrafını gönderirseniz boyutuna göre net fiyat veriyoruz.",
      },
      DRYING,
      PRICE("Esenyurt Talatpaşa Mahallesi’nde"),
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/Talatpa%C5%9Fa,_Esenyurt",
    sources: [wiki("Talatpaşa,_Esenyurt"), ESENYURT_MUHTARLIK, nufus("40859", "talatpasa"), ILETISIM],
  },
  {
    slug: "turgut-ozal",
    district: D,
    name: "Turgut Özal",
    heading: "Turgut Özal Mahallesi",
    officialName: "Turgut Özal Mahallesi",
    locative: "Turgut Özal Mahallesi’nde",
    locativeAdj: "Turgut Özal Mahallesi’ndeki",
    dative: "Turgut Özal Mahallesi’ne",
    iAmIn: "Esenyurt Turgut Özal Mahallesi’ndeyim",
    image: "mahalle-adnan-kahveci",
    imageAlt: "Site dairesinde bej L koltuğun makineyle yıkanması",
    description:
      "Esenyurt Turgut Özal Mahallesi’ndeki ev ve sitelere geliyoruz. Torium ve termal tesis çevresindeki evlerde koltuğunuzu yerinde yıkıyoruz.",
    summary:
      "Turgut Özal Mahallesi, E-5 kenarında, Torium AVM’nin, Saadetdere Termal Kür ve Tedavi Merkezi’nin ve “Saadetdere Mahallesi” metrobüs durağının bulunduğu Esenyurt mahallesi; Avcılar Cihangir ve Beylikdüzü Yakuplu ile komşu. E-5 çevresindeki evlere makinemizle geliyoruz.",
    facts: [
      { label: "Konum", value: "Esenyurt’un güneydoğusunda, E-5 kenarında; “Saadetdere Mahallesi” metrobüs durağı" },
      { label: "Komşu mahalleler", value: "Namık Kemal, Saadetdere (Avcılar Cihangir ve Mustafa Kemal Paşa; Beylikdüzü Yakuplu)" },
      { label: "Nüfus", value: "28.564 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "Torium AVM, Saadetdere Termal Kür ve Tedavi Merkezi, Sümbül Parkı" },
    ],
    about: [
      "Turgut Özal Mahallesi, Esenyurt’un 2015’te kurulan mahallelerinden biri; E-5’in kuzey kenarında, Avcılar’ın Cihangir ve Mustafa Kemal Paşa mahalleleri ile Beylikdüzü’nün Yakuplu Mahallesi’ne komşu. Adını Saadetdere’den alan termal tesis (64. Sokak), “Saadetdere Mahallesi” metrobüs durağı ve Torium AVM bu mahallede; Sümbül ve Sardunya parkları da mahallenin yeşil alanları.",
      "E-5’e yakın site ve apartmanlarda blok ve kat bilgisini önceden alıp gelişimizi planlıyoruz; makinemiz taşınabilir, asansörle dairenize çıkarıyoruz. Köşe takımlarını minderleriyle birlikte yerinde yıkıyoruz.",
    ],
    nearby: ["namik-kemal", "saadetdere", "avcilar-koltuk-yikama/cihangir", "avcilar-koltuk-yikama/mustafa-kemal-pasa", "beylikduzu-koltuk-yikama/yakuplu"],
    faq: [
      {
        q: "Torium ve Saadetdere metrobüs çevresine geliyor musunuz?",
        a: "Evet. Torium AVM, termal tesis ve metrobüs çevresi dahil Turgut Özal Mahallesi’nin tamamına geliyoruz.",
      },
      {
        q: "Avcılar tarafındaki evlere de geliyor musunuz?",
        a: "Evet. Komşu Avcılar Cihangir ve Mustafa Kemal Paşa dahil Avcılar’ın tüm mahallelerine geliyoruz.",
      },
      DRYING,
      PRICE("Turgut Özal Mahallesi’nde"),
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/Turgut_%C3%96zal,_Esenyurt",
    sources: [
      wiki("Turgut_Özal,_Esenyurt"),
      ESENYURT_MUHTARLIK,
      nufus("181502", "turgutozal"),
      "https://www.torium.com.tr/iletisim",
      ILETISIM,
      "https://www.gazetebirlik.com/istanbul-haberleri/esenyurt-belediyesi-saadetdere-kaplica-tesisi-haftada-bir-gun-ucretsiz-77937/77937",
    ],
  },
  {
    slug: "ucevler",
    district: D,
    name: "Üçevler",
    heading: "Üçevler",
    officialName: "Üçevler Mahallesi",
    locative: "Üçevler’de",
    locativeAdj: "Üçevler’deki",
    dative: "Üçevler’e",
    iAmIn: "Esenyurt Üçevler Mahallesi’ndeyim",
    image: "kirli-su-cekimi",
    imageAlt: "Koltuktan kirli suyun makineyle çekilmesi",
    description:
      "Esenyurt Üçevler’deki evinize geliyoruz. Suyu kumaşın içine püskürtüp kirle birlikte geri çekerek koltuğunuzu derinlemesine yıkıyoruz.",
    summary:
      "Üçevler, Esenyurt’un ortasında, Doğan Araslı Bulvarı ve Avcılar–Haramidere bağlantı yolunun geçtiği, Nazım Hikmet Parkı’nın bulunduğu ve yaklaşık 27.900 kişinin yaşadığı mahalle. Yıkamada suyu kumaşın içine püskürtüp kirle birlikte geri çekiyoruz.",
    facts: [
      { label: "Konum", value: "Esenyurt’un ortasında; Doğan Araslı Bulvarı, Bahçe Yolu ve Pazaryolu caddeleri" },
      { label: "Komşu mahalleler", value: "Fatih, Zafer, Sultaniye, Akevler, Talatpaşa" },
      { label: "Nüfus", value: "27.861 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "Nazım Hikmet Parkı" },
    ],
    about: [
      "Üçevler Mahallesi, Esenyurt’un 2015’te kurulan mahallelerinden biri; Doğan Araslı Bulvarı, Bahçe Yolu ve Pazaryolu caddeleri ile Avcılar–Haramidere bağlantı yolu mahalleden geçiyor. 911. Sokak’taki Nazım Hikmet Parkı mahallenin bilinen yeşil alanı. Mahalle muhtarı, İstanbul Kent Konseyi raporunda 1987’de buraya geldiğinde yol ve suyun olmadığını, insanların tarımla geçindiğini anlatıyor.",
      "Yıkamada önce koltuğu vakumluyor, lekelere ön işlem yapıyor, sonra suyu kumaşın içine püskürtüp kirle birlikte geri çekiyoruz. Çekilen kirli suyu iş bitince size gösteriyor, ödemeyi sonucu birlikte kontrol ettikten sonra alıyoruz.",
    ],
    nearby: ["fatih", "zafer", "sultaniye", "akevler", "talatpasa"],
    faq: [
      {
        q: "Üçevler’in her yerine geliyor musunuz?",
        a: "Evet. Nazım Hikmet Parkı çevresi dahil Üçevler Mahallesi’nin tamamına geliyoruz.",
      },
      {
        q: "Makineyle yıkama nasıl yapılıyor?",
        a: "Su ve kumaşa uygun ürün kumaşın içine püskürtülür, aynı anda kirle birlikte geri çekilir. Böylece kir yüzeyde kalmaz, koltuk da daha çabuk kurur.",
      },
      DRYING,
      PRICE("Üçevler’de"),
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/%C3%9C%C3%A7evler,_Esenyurt",
    sources: [wiki("Üçevler,_Esenyurt"), ESENYURT_MUHTARLIK, nufus("181496", "ucevler"), proj("nazim-hikmet-parki"), KENT_KONSEYI],
  },
  {
    slug: "yenikent",
    district: D,
    name: "Yenikent",
    heading: "Yenikent",
    officialName: "Yenikent Mahallesi",
    locative: "Yenikent’te",
    locativeAdj: "Yenikent’teki",
    dative: "Yenikent’e",
    iAmIn: "Esenyurt Yenikent Mahallesi’ndeyim",
    image: "mahalle-baris",
    imageAlt: "Apartman dairesinde gri üçlü koltuğun yıkama öncesi vakumlanması",
    description:
      "Esenyurt Yenikent’teki evinize geliyoruz. Dar sokaklardaki binalara da makinemizle ulaşıyor, koltuğunuzu evinizde yıkıyoruz.",
    summary:
      "Yenikent, Esenyurt’un ortasında, Doğan Araslı Bulvarı ve Hacı Bektaş Veli Caddesi çevresinde, 2015’te bugünkü sınırlarını alan ve yaklaşık 23.500 kişinin yaşadığı mahalle; muhtarlığı komşu Sultaniye’de. Dar sokaklardaki binalara da makinemizi taşıyarak ulaşıyoruz.",
    facts: [
      { label: "Konum", value: "Esenyurt’un ortasında; Doğan Araslı Bulvarı, Hacı Bektaş Veli ve Aşık Şenlik caddeleri" },
      { label: "Komşu mahalleler", value: "Süleymaniye, Sultaniye, Merkez (Bağlarçeşme), Ardıçlı" },
      { label: "Nüfus", value: "23.452 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "Seyhan Kahraman Parkı, Papatya Bilgi Evi Parkı" },
    ],
    about: [
      "Yenikent Mahallesi’nin nüfusu 2014’te 42 bini aşıyordu; 2015’teki yeni düzenlemeyle bugünkü sınırlarını aldı. Doğan Araslı Bulvarı, Hacı Bektaş Veli, Aşık Şenlik ve Gazi Osman Paşa caddeleri mahalleden geçiyor; Seyhan Kahraman ve Papatya Bilgi Evi parkları mahallede. Mahallenin muhtarlığı komşu Sultaniye’de, 75. Yıl Parkı ise Ardıçlı Mahallesi’nde.",
      "İstanbul Kent Konseyi’nin raporu, Yenikent ve Sultaniye gibi mahallelerde dar sokakların araç erişimini zorlaştırdığına dikkat çekiyor. Aracı binanın önüne yanaştıramadığımız yerlerde makinemizi kısa bir mesafe taşıyarak evinize ulaşıyoruz.",
    ],
    nearby: ["suleymaniye", "sultaniye", "merkez-baglarcesme", "ardicli"],
    faq: [
      {
        q: "Yenikent’teki dar sokaklara da geliyor musunuz?",
        a: "Evet. Aracı yanaştıramadığımız yerlerde makinemizi taşıyarak evinize ulaşıyoruz; adresinizi yazarken yakın bir park yeri varsa belirtmeniz yeterli.",
      },
      {
        q: "Yenikent’in her yerine geliyor musunuz?",
        a: "Evet. Doğan Araslı Bulvarı ve Hacı Bektaş Veli Caddesi çevresi dahil Yenikent Mahallesi’nin tamamına geliyoruz.",
      },
      DRYING,
      PRICE("Yenikent’te"),
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/Yenikent,_Esenyurt",
    sources: [wiki("Yenikent,_Esenyurt"), ESENYURT_MUHTARLIK, nufus("40860", "yenikent"), proj("seyhan-kahraman-parki"), KENT_KONSEYI],
  },
  {
    slug: "yesilkent",
    district: D,
    name: "Yeşilkent",
    heading: "Esenyurt Yeşilkent",
    officialName: "Yeşilkent Mahallesi",
    locative: "Esenyurt Yeşilkent’te",
    locativeAdj: "Esenyurt Yeşilkent’teki",
    dative: "Esenyurt Yeşilkent’e",
    iAmIn: "Esenyurt Yeşilkent Mahallesi’ndeyim",
    image: "yikama-sonrasi-koltuk",
    imageAlt: "Yıkama sonrası temiz gri koltuk",
    description:
      "Esenyurt Yeşilkent’teki evinize geliyoruz. Koltuğunuzu taşımadan, evinizde makineyle derinlemesine yıkıyoruz.",
    summary:
      "Esenyurt’un Yeşilkent Mahallesi, Nazım Hikmet Bulvarı boyunca uzanan, Haramidere deresinin geçtiği, yaklaşık 37.400 kişinin yaşadığı mahalle (Avcılar’daki Yeşilkent ayrı bir mahalle). Nazım Hikmet Bulvarı çevresindeki evlere makinemizle geliyoruz.",
    facts: [
      { label: "Konum", value: "Esenyurt’un ortasında; Nazım Hikmet Bulvarı boyunca, Haramidere deresi geçiyor" },
      { label: "Komşu mahalleler", value: "Mehterçeşme, Piri Reis, Necip Fazıl Kısakürek, Pınar, Talatpaşa, Şehitler, Cumhuriyet, Battalgazi, Hürriyet" },
      { label: "Nüfus", value: "37.410 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "Spor Parkı (Nazım Hikmet Bulvarı)" },
    ],
    about: [
      "Yeşilkent Mahallesi, Esenyurt’un ortasında, Nazım Hikmet Bulvarı boyunca uzanıyor; Ahmet Arif ve Hacı Bayram Veli caddeleri ile Haramidere deresi de mahalleden geçiyor. Dokuz Esenyurt mahallesiyle komşu, başka ilçeyle sınırı yok. Avcılar’daki Yeşilkent Mahallesi ayrı bir mahalle ve Esenyurt Yeşilkent’e komşu değil; adresinizde ilçeyi belirtmeniz yeterli.",
      "Kalabalık mahallelerde en yakın boş saati birlikte seçiyoruz; WhatsApp’tan fotoğraf ve adres göndermeniz yeterli. Koltuğu vakumlama, leke ön işlemi, makineyle derin yıkama ve son emme fiyata dahil.",
    ],
    nearby: ["mehtercesme", "piri-reis", "necip-fazil-kisakurek", "pinar", "talatpasa", "sehitler", "cumhuriyet"],
    faq: [
      {
        q: "Esenyurt Yeşilkent’e mi, Avcılar Yeşilkent’e mi geliyorsunuz?",
        a: "İkisine de geliyoruz. Aynı adlı iki mahalle olduğu için WhatsApp’ta adresinizle birlikte ilçeyi yazmanız yeterli.",
      },
      {
        q: "Nazım Hikmet Bulvarı çevresine geliyor musunuz?",
        a: "Evet. Nazım Hikmet Bulvarı boyunca Yeşilkent Mahallesi’nin tamamına geliyoruz.",
      },
      DRYING,
      PRICE("Esenyurt Yeşilkent’te"),
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/Ye%C5%9Filkent,_Esenyurt",
    sources: [wiki("Yeşilkent,_Esenyurt"), ESENYURT_MUHTARLIK, nufus("40866", "yesilkent"), proj("spor-parki")],
  },
  {
    slug: "yunus-emre",
    district: D,
    name: "Yunus Emre",
    heading: "Esenyurt Yunus Emre",
    officialName: "Yunus Emre Mahallesi",
    locative: "Esenyurt Yunus Emre’de",
    locativeAdj: "Esenyurt Yunus Emre’deki",
    dative: "Esenyurt Yunus Emre’ye",
    iAmIn: "Esenyurt Yunus Emre Mahallesi’ndeyim",
    image: "mahalle-marmara",
    imageAlt: "Yatak odasında çift kişilik yatağın makineyle yıkanması",
    description:
      "Esenyurt Yunus Emre Mahallesi’ndeki evinize geliyoruz. Koltuk ve yataklarınızı aynı randevuda, evinizde yıkıyoruz.",
    summary:
      "Esenyurt’un Yunus Emre Mahallesi, 2012’de açılan Esenyurt Necmi Kadıoğlu Stadyumu’nun bulunduğu, Avcılar Yeşilkent ile komşu ve yaklaşık 22.700 kişinin yaşadığı mahalle. Koltuklarla birlikte yatakları da aynı randevuda yıkıyoruz.",
    facts: [
      { label: "Konum", value: "Esenyurt’un doğusunda; Avcılar Yeşilkent sınırında" },
      { label: "Komşu mahalleler", value: "İnönü, İncirtepe, Akşemseddin, Balıkyolu (Avcılar Yeşilkent)" },
      { label: "Nüfus", value: "22.691 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "Esenyurt Necmi Kadıoğlu Stadyumu" },
    ],
    about: [
      "Yunus Emre Mahallesi, Esenyurt’un 2015’te kurulan mahallelerinden biri; doğuda Avcılar’ın Yeşilkent Mahallesi, ilçe içinde İnönü, İncirtepe, Akşemseddin ve Balıkyolu ile komşu. Okurlar Caddesi’ndeki, 23 Nisan 2012’de açılan 4.488 kişilik Esenyurt Necmi Kadıoğlu Stadyumu mahallede. Adı benzese de belediyenin Yunus Emre Parkı Akçaburgaz Mahallesi’nde.",
      "Koltukların yanında yatak yıkamayı da aynı randevuda yapıyoruz: yatağın iki yüzünü makineyle yıkayıp fazla suyu çekiyoruz, yatak da genellikle birkaç saat içinde kurur.",
    ],
    nearby: ["inonu", "incirtepe", "aksemseddin", "balikyolu", "avcilar-koltuk-yikama/yesilkent"],
    faq: [
      {
        q: "Esenyurt Yunus Emre Mahallesi’ne geliyor musunuz?",
        a: "Evet. Stadyum çevresi dahil Yunus Emre Mahallesi’nin tamamına ve komşu Avcılar Yeşilkent’e geliyoruz.",
      },
      {
        q: "Yatak yıkamayı koltukla aynı gün yapıyor musunuz?",
        a: "Evet. Tek ve çift kişilik yatakların iki yüzünü koltuklarla aynı randevuda yıkıyoruz.",
      },
      DRYING,
      PRICE("Esenyurt Yunus Emre Mahallesi’nde"),
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/Yunus_Emre,_Esenyurt",
    sources: [wiki("Yunus_Emre,_Esenyurt"), ESENYURT_MUHTARLIK, nufus("181506", "yunusemre"), "https://en.wikipedia.org/wiki/Esenyurt_Necmi_Kad%C4%B1o%C4%9Flu_Stadium"],
  },
  {
    slug: "zafer",
    district: D,
    name: "Zafer",
    heading: "Esenyurt Zafer",
    officialName: "Zafer Mahallesi",
    locative: "Esenyurt Zafer’de",
    locativeAdj: "Esenyurt Zafer’deki",
    dative: "Esenyurt Zafer’e",
    iAmIn: "Esenyurt Zafer Mahallesi’ndeyim",
    image: "sahne-kirli-su-tanki",
    imageAlt: "Yıkama sonrası makinenin kirli su haznesinin ev sahibine gösterilmesi",
    description:
      "Esenyurt Zafer Mahallesi’ndeki evinize geliyoruz. Koltuğunuzu yerinde yıkıyor, çekilen kirli suyu yıkama sonunda size gösteriyoruz.",
    summary:
      "Esenyurt’un Zafer Mahallesi, Esenyurt Belediyesi’nin ana hizmet binasının, İstanbul Esenyurt Üniversitesi’nin ve Esenyurt Sanat Merkezi’nin bulunduğu, E-5 kenarındaki mahalle; Beylikdüzü Yakuplu ile komşu. Koltuktan çektiğimiz kirli suyu iş bitince size gösteriyoruz.",
    facts: [
      { label: "Konum", value: "Esenyurt’un güneydoğusunda, E-5 kenarında; Doğan Araslı ve Adile Naşit bulvarları" },
      { label: "Komşu mahalleler", value: "Namık Kemal, Akevler, Güzelyurt, Üçevler, İnönü, İncirtepe, Akşemseddin (Beylikdüzü Yakuplu)" },
      { label: "Nüfus", value: "24.513 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "Esenyurt Belediyesi ana binası, İstanbul Esenyurt Üniversitesi, Esenyurt Sanat Merkezi" },
    ],
    about: [
      "Zafer Mahallesi, Doğan Araslı Bulvarı No:79’daki Esenyurt Belediyesi ana hizmet binasına ve Adile Naşit Bulvarı’ndaki İstanbul Esenyurt Üniversitesi’ne ev sahipliği yapıyor; Recep Tayyip Erdoğan Parkı ve içindeki Esenyurt Sanat Merkezi de mahallede. 2015’te 6 bin civarında olan nüfusu 2025’te 24.500’ü geçti. Komşu Namık Kemal Mahallesi’nin muhtarlığı da Zafer’de.",
      "Yıkamada önce koltuğu vakumluyor, lekelere ön işlem yapıyor, sonra suyu kumaşın içine püskürtüp kirle birlikte geri çekiyoruz. Çekilen kirli suyu iş bitince size gösteriyor, ödemeyi sonucu birlikte kontrol ettikten sonra alıyoruz.",
    ],
    nearby: ["namik-kemal", "akevler", "guzelyurt", "ucevler", "inonu", "incirtepe", "aksemseddin", "beylikduzu-koltuk-yikama/yakuplu"],
    faq: [
      {
        q: "Belediye binası ve Esenyurt Üniversitesi çevresine geliyor musunuz?",
        a: "Evet. Belediye binası, İstanbul Esenyurt Üniversitesi ve Sanat Merkezi çevresi dahil Zafer Mahallesi’nin tamamına geliyoruz.",
      },
      {
        q: "Yıkamanın gerçekten temizlediğini nasıl anlarım?",
        a: "Koltuktan çektiğimiz kirli suyu makinenin haznesinde size gösteriyoruz. Ödemeyi de sonucu birlikte kontrol ettikten sonra alıyoruz.",
      },
      DRYING,
      PRICE("Esenyurt Zafer Mahallesi’nde"),
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/Zafer,_Esenyurt",
    sources: [
      wiki("Zafer,_Esenyurt"),
      ESENYURT_MUHTARLIK,
      nufus("181500", "zafer"),
      ILETISIM,
      "https://www.turkiye.gov.tr/istanbul-esenyurt-universitesi",
      proj("recep-tayyip-erdogan-parki"),
      "https://www.karar.com/sehir-haberleri/esenyurt-sanat-merkezi-kultur-ve-sanatin-yeni-adresi-oldu-2062473",
    ],
  },
];
