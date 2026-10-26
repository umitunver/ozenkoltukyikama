// Büyükçekmece mahalle sayfaları. Mahalle listesi TÜİK (ADNKS 2025), Büyükçekmece Belediyesi muhtarlık listesi ve
// Vikipedi ile doğrulandı (24 mahalle, köy yok). Sınırlar OSM idari sınırları + Vikipedi; adresler belediye
// (bcekmece.bel.tr), TÜYAP, Sağlık Bakanlığı ve KAP sayfalarından. Doğrulanamayan konut tipi / yer bilgisi kullanılmadı.
// Tuzaklar: Mimar Sinan Köprüsü Dizdariye'de (Mimarsinan'da değil); "Beylikdüzü Devlet Hastanesi" Pınartepe'de;
// OSM "Kumburgaz Plajı"nı Kamiloba'da gösteriyor (kullanılmadı); Tepekent Türkoba'da (Arel Üniversitesi adresi).

import type { Neighborhood } from "./neighborhoods";

const D = "buyukcekmece-koltuk-yikama";
const MUHTARLIK = "https://www.bcekmece.bel.tr/buyukcekmece/muhtarliklar";
const TARIH = "https://www.bcekmece.bel.tr/icerik/kurumsal/tarihimiz";
const nufus = (id: string, slug: string) => `https://www.nufusune.com/${id}-istanbul-buyukcekmece-${slug}-mahallesi-nufusu`;

// Genel hizmet cevapları (mahalleye göre ilk cümleleri değişiyor)
const PRICE = (where: string) => ({
  q: "Fiyatı nasıl öğrenebilirim?",
  a: `WhatsApp’tan koltuğunuzun fotoğrafını ve ${where} olduğunuzu yazın; net fiyatı ve uygun saatleri ücretsiz iletelim.`,
});

export const buyukcekmeceNeighborhoods: Neighborhood[] = [
  {
    slug: "19-mayis",
    district: D,
    name: "19 Mayıs",
    heading: "Büyükçekmece 19 Mayıs",
    officialName: "19 Mayıs Mahallesi",
    locative: "Büyükçekmece 19 Mayıs’ta",
    locativeAdj: "Büyükçekmece 19 Mayıs’taki",
    dative: "Büyükçekmece 19 Mayıs’a",
    iAmIn: "Büyükçekmece 19 Mayıs Mahallesi’ndeyim",
    image: "sahne-gol-manzara",
    imageAlt: "Göl manzaralı dairede bej köşe koltuğun yıkanması",
    description:
      "Büyükçekmece 19 Mayıs Mahallesi’ndeki evinize makinemizle geliyor, koltuk ve köşe takımınızı yerinde yıkıyoruz. Fotoğrafla ücretsiz fiyat.",
    summary:
      "19 Mayıs, Büyükçekmece Gölü’nün doğu kıyısında, ilçe merkezine yakın, yaklaşık 8.500 kişinin yaşadığı mahalle. Göl kenarındaki evlerde yıkamanın sonunda fazla suyu iyice çekiyor, koltuğun aynı gün kurumasını sağlıyoruz.",
    facts: [
      { label: "Konum", value: "Büyükçekmece Gölü’nün doğu kıyısında, ilçe merkezine yakın; D-100 geçiyor" },
      { label: "Komşu mahalleler", value: "Fatih, Dizdariye, Çakmaklı, Alkent 2000, Cumhuriyet" },
      { label: "Nüfus", value: "8.483 (2025, ADNKS)" },
    ],
    about: [
      "19 Mayıs Mahallesi batıda Büyükçekmece Gölü’ne kıyısı olan, kuzeyde Alkent 2000, doğuda Çakmaklı, güneyde Fatih ve Dizdariye, güneydoğuda Cumhuriyet mahalleleriyle çevrili bir mahalle. Kadıköy ve Şişli’de de aynı adlı mahalleler olduğu için adresinizde Büyükçekmece’yi belirtmeniz yeterli.",
      "Göl kenarındaki evlerde hava zaman zaman nemli olabiliyor; yıkamanın sonunda fazla suyu iyice çekiyor, kurumayı hızlandırmak için pencere açmanızı ya da klima çalıştırmanızı öneriyoruz. Koltuk, köşe takımı, sandalye ve yatakları aynı randevuda yıkayabiliyoruz.",
    ],
    nearby: ["fatih", "dizdariye", "cakmakli", "alkent-2000", "cumhuriyet"],
    faq: [
      {
        q: "Büyükçekmece 19 Mayıs Mahallesi’nin tamamına geliyor musunuz?",
        a: "Evet. Göl kıyısından Çakmaklı sınırına kadar 19 Mayıs Mahallesi’nin tüm ev ve sitelerine geliyoruz.",
      },
      {
        q: "Göl kenarındaki evde koltuk ne kadar sürede kurur?",
        a: "Genellikle 4–8 saat sürer; nemli havalarda biraz uzayabilir. Fazla suyu iyice çektiğimiz için koltuk aynı gün kullanılabilir hâle gelir.",
      },
      {
        q: "Koltuk ve yatağı aynı gün yıkıyor musunuz?",
        a: "Evet. Koltuk, köşe takımı, sandalye ve yatakları aynı randevuda yıkıyoruz; fotoğraflarını gönderirseniz toplam fiyatı birlikte veriyoruz.",
      },
      PRICE("19 Mayıs Mahallesi’nde"),
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/19_May%C4%B1s,_B%C3%BCy%C3%BCk%C3%A7ekmece",
    sources: ["https://tr.wikipedia.org/wiki/19_Mayıs,_Büyükçekmece", MUHTARLIK, nufus("40850", "19mayis")],
  },
  {
    slug: "ahmediye",
    district: D,
    name: "Ahmediye",
    heading: "Büyükçekmece Ahmediye",
    officialName: "Ahmediye Mahallesi",
    locative: "Büyükçekmece Ahmediye’de",
    locativeAdj: "Büyükçekmece Ahmediye’deki",
    dative: "Büyükçekmece Ahmediye’ye",
    iAmIn: "Büyükçekmece Ahmediye Mahallesi’ndeyim",
    image: "sahne-koy-evi",
    imageAlt: "Geleneksel oturma odasında sedir minderlerinin makineyle yıkanması",
    description:
      "Büyükçekmece Ahmediye’deki evinize makinemizle geliyoruz. Koltuk, sedir minderi ve köşe takımlarınızı evinizde yıkıyoruz.",
    summary:
      "Ahmediye, Büyükçekmece Gölü’nün kuzeybatı kıyısında, Çatalca sınırında yer alan, yaklaşık 1.100 kişiyle ilçenin en az nüfuslu mahallesi. Merkeze uzak olsa da Ahmediye’ye de makinemizle geliyor, koltuk ve minderleri evinizde yıkıyoruz.",
    facts: [
      { label: "Konum", value: "Büyükçekmece’nin kuzeyinde, Büyükçekmece Gölü kıyısında; Çatalca sınırında" },
      { label: "Komşu mahalleler", value: "Hürriyet, Ulus (Çatalca Muratbey Merkez)" },
      { label: "Nüfus", value: "1.075 (2025, ADNKS), ilçenin en az nüfuslu mahallesi" },
    ],
    about: [
      "Ahmediye Mahallesi, Büyükçekmece’nin kuzey ucunda, doğusunda Büyükçekmece Gölü, batısında Çatalca ilçesinin Muratbey Merkez Mahallesi ile komşu. Yaklaşık 1.100 kişilik nüfusuyla ilçenin en küçük mahallesi; ilçe içinde Hürriyet ve Ulus mahalleleriyle sınır komşusu.",
      "Merkeze uzak mahallelerde de randevuyu size uyan saate göre planlıyoruz. Koltukların yanında sedir ve oturma minderlerini de yerinde yıkayabiliyoruz; minderin kılıfı çıkmıyorsa makineyle kumaşın içinden temizliyoruz.",
    ],
    nearby: ["hurriyet", "ulus"],
    faq: [
      {
        q: "Ahmediye’ye geliyor musunuz?",
        a: "Evet. Büyükçekmece’nin tüm mahallelerine geldiğimiz gibi Ahmediye Mahallesi’ne de makinemizle geliyoruz.",
      },
      {
        q: "Sedir ve oturma minderlerini yıkıyor musunuz?",
        a: "Evet. Kılıfı çıkmayan sedir ve oturma minderlerini yerinde yıkıyoruz. Malzemesini görmek için fotoğrafını göndermeniz yeterli.",
      },
      {
        q: "Merkeze uzak mahallede randevu nasıl ayarlanıyor?",
        a: "WhatsApp’tan adresinizi yazın; size uyan gün ve saati birlikte seçiyoruz.",
      },
      PRICE("Ahmediye’de"),
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/Ahmediye,_B%C3%BCy%C3%BCk%C3%A7ekmece",
    sources: ["https://tr.wikipedia.org/wiki/Ahmediye,_Büyükçekmece", MUHTARLIK, nufus("40891", "ahmediye")],
  },
  {
    slug: "alkent-2000",
    district: D,
    name: "Alkent 2000",
    heading: "Alkent 2000",
    officialName: "Alkent 2000 Mahallesi",
    locative: "Alkent 2000’de",
    locativeAdj: "Alkent 2000’deki",
    dative: "Alkent 2000’e",
    iAmIn: "Büyükçekmece Alkent 2000 Mahallesi’ndeyim",
    image: "mahalle-gurpinar",
    imageAlt: "Bahçeli villada krem rengi büyük oturma grubunun yıkanması",
    description:
      "Alkent 2000’deki villa ve dairelere makinemizle geliyoruz. Büyük oturma gruplarını, köşe takımlarını ve sandalyeleri evinizde, tek randevuda yıkıyoruz.",
    summary:
      "Alkent 2000, Alarko’nun 1994–2006 arasında Büyükçekmece Gölü kıyısında etaplar hâlinde inşa ettiği, yaklaşık 800 villa ve 200 daireden oluşan yerleşimin adını taşıyan mahalle. Villalarda geniş oturma gruplarını ve bahçe minderlerini aynı ziyarette yıkıyoruz.",
    facts: [
      { label: "Konum", value: "Büyükçekmece Gölü’nün doğu kıyısında; Esenyurt sınırında" },
      { label: "Komşu mahalleler", value: "Karaağaç, Çakmaklı, 19 Mayıs (Esenyurt Akçaburgaz)" },
      { label: "Nüfus", value: "8.400 (2025, ADNKS)" },
      { label: "Konut yapısı", value: "Alarko’nun Alkent 2000 projesi: yaklaşık 800 villa ve 200 daire" },
      { label: "Bilinen yerler", value: "Alkent 2000 Çarşı" },
    ],
    about: [
      "Alkent 2000, Alarko’nun yaklaşık 3 milyon m² alan üzerinde 1994–2006 yılları arasında etaplar hâlinde inşa ettiği villa ve apartman yerleşiminin bulunduğu mahalle; projede yaklaşık 800 villa ve 200 daire var. Batısında Büyükçekmece Gölü, doğusunda Esenyurt’un Akçaburgaz Mahallesi bulunuyor; mahallenin alışveriş noktası Alkent 2000 Çarşı.",
      "Villalarda genellikle salon takımı, köşe koltuk, yemek sandalyeleri ve bahçe minderleri birlikte oluyor; hepsini aynı ziyarette yıkayabiliyoruz. Site girişinde güvenliğe isminizi bırakmanız yeterli; makinemizle doğrudan evinize geliyoruz.",
    ],
    nearby: ["karaagac", "cakmakli", "19-mayis", "esenyurt-koltuk-yikama/akcaburgaz"],
    faq: [
      {
        q: "Alkent 2000’deki villalara ve dairelere geliyor musunuz?",
        a: "Evet. Alkent 2000 Mahallesi’ndeki tüm villa ve dairelere geliyoruz. Site girişinde güvenliğe isim bırakmanız yeterli.",
      },
      {
        q: "Birden fazla oturma grubunu aynı gün yıkayabilir misiniz?",
        a: "Evet. Salon takımı, köşe koltuk, sandalyeler ve bahçe minderlerini tek randevuda yıkıyoruz; hepsinin fotoğrafını gönderirseniz toplam fiyatı veriyoruz.",
      },
      {
        q: "Bahçe minderlerini de yıkıyor musunuz?",
        a: "Kılıfı çıkmayan kumaş bahçe minderlerini yerinde yıkayabiliyoruz. Malzemesini görmek için fotoğrafını göndermeniz yeterli.",
      },
      PRICE("Alkent 2000’de"),
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/Alkent_2000,_B%C3%BCy%C3%BCk%C3%A7ekmece",
    sources: [
      "https://tr.wikipedia.org/wiki/Alkent_2000,_Büyükçekmece",
      MUHTARLIK,
      nufus("40844", "alkent2000"),
      "https://alarko.com.tr/en/projects/alkent-istanbul-2000/",
    ],
  },
  {
    slug: "ataturk",
    district: D,
    name: "Atatürk",
    heading: "Büyükçekmece Atatürk",
    officialName: "Atatürk Mahallesi",
    locative: "Büyükçekmece Atatürk’te",
    locativeAdj: "Büyükçekmece Atatürk’teki",
    dative: "Büyükçekmece Atatürk’e",
    iAmIn: "Büyükçekmece Atatürk Mahallesi’ndeyim",
    image: "mahalle-dereagzi",
    imageAlt: "Açık mavi kumaş koltuğun makineyle yıkanması",
    description:
      "Büyükçekmece Atatürk Mahallesi’ndeki evinize geliyor, koltuk ve köşe takımlarınızı yerinde yıkıyoruz. Taşıma yok; fotoğrafla ücretsiz fiyat.",
    summary:
      "Büyükçekmece’nin Atatürk Mahallesi, Marmara Denizi kıyısında, ilçe merkezinin doğusunda yer alan ve yaklaşık 17 bin kişinin yaşadığı mahalle. Esenyurt’ta da aynı adlı bir mahalle olduğu için adresinizde Büyükçekmece’yi belirtmeniz yeterli; iki mahalleye de geliyoruz.",
    facts: [
      { label: "Konum", value: "Büyükçekmece merkezinin doğusunda, Marmara Denizi kıyısında" },
      { label: "Komşu mahalleler", value: "Pınartepe, Cumhuriyet, Fatih" },
      { label: "Nüfus", value: "17.157 (2025, ADNKS)" },
    ],
    about: [
      "Atatürk Mahallesi batıda Marmara Denizi, kuzeyde Fatih ve Cumhuriyet, doğu ve güneyde Pınartepe mahalleleriyle çevrili. Esenyurt, Arnavutköy ve Çatalca’da da Atatürk Mahallesi bulunuyor; Esenyurt’taki, Büyükçekmece Cumhuriyet ve Çakmaklı mahallelerine komşu olduğu için iki mahalle sık karıştırılıyor.",
      "Deniz kenarındaki evlerde yıkamanın sonunda fazla suyu iyice çekiyor, kurumayı hızlandırmak için nasıl havalandırmanız gerektiğini anlatıyoruz. Koltuğu vakumlama, leke ön işlemi, makineyle derin yıkama ve son emme fiyata dahil.",
    ],
    nearby: ["pinartepe", "cumhuriyet", "fatih"],
    faq: [
      {
        q: "Büyükçekmece Atatürk ile Esenyurt Atatürk’e mi geliyorsunuz?",
        a: "İkisine de geliyoruz. Aynı adlı iki mahalle olduğu için WhatsApp’ta adresinizle birlikte ilçeyi yazmanız yeterli.",
      },
      {
        q: "Deniz kenarındaki evde koltuk ne kadar sürede kurur?",
        a: "Genellikle 4–8 saat sürer; nemli havalarda biraz uzayabilir. Pencere açmak ya da klima çalıştırmak kurumayı hızlandırır.",
      },
      {
        q: "Yıkamaya neler dahil?",
        a: "Vakumlama, leke ön işlemi, makineyle derin yıkama, koku giderme ve son emme fiyata dahil. Minderler, kollar ve sırt kısmı da yıkanır.",
      },
      PRICE("Büyükçekmece Atatürk Mahallesi’nde"),
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/Atat%C3%BCrk,_B%C3%BCy%C3%BCk%C3%A7ekmece",
    sources: ["https://tr.wikipedia.org/wiki/Atatürk,_Büyükçekmece", MUHTARLIK, nufus("40845", "ataturk")],
  },
  {
    slug: "bahcelievler",
    district: D,
    name: "Bahçelievler",
    heading: "Büyükçekmece Bahçelievler",
    officialName: "Bahçelievler Mahallesi",
    locative: "Büyükçekmece Bahçelievler’de",
    locativeAdj: "Büyükçekmece Bahçelievler’deki",
    dative: "Büyükçekmece Bahçelievler’e",
    iAmIn: "Büyükçekmece Bahçelievler Mahallesi’ndeyim",
    image: "sahne-cocuk-yatagi",
    imageAlt: "Çocuk odasında tek kişilik yatağın makineyle yıkanması",
    description:
      "Büyükçekmece Bahçelievler Mahallesi’ndeki evinize geliyor, koltuk ve yataklarınızı evinizde yıkıyoruz. Fotoğraf gönderin, net fiyatı yazalım.",
    summary:
      "Büyükçekmece’nin Bahçelievler Mahallesi (İstanbul’un Bahçelievler ilçesi değil), Marmara Denizi kıyısında, Kumburgaz ile Güzelce arasında yer alan mahalle. Koltukla birlikte çocuk ve yetişkin yataklarını da aynı randevuda yıkıyoruz.",
    facts: [
      { label: "Konum", value: "Büyükçekmece’nin batı kesiminde, Marmara Denizi kıyısında; D-100 geçiyor" },
      { label: "Komşu mahalleler", value: "Yenimahalle, Kumburgaz, Güzelce, Kamiloba, Türkoba" },
      { label: "Nüfus", value: "4.600 (2025, ADNKS)" },
    ],
    about: [
      "Bahçelievler Mahallesi güneyde Marmara Denizi, batıda Yenimahalle ve Kumburgaz, doğuda Güzelce, kuzeyde Kamiloba ve Türkoba mahalleleriyle çevrili. Aynı adı taşıyan bir İstanbul ilçesi ve Pendik ile Üsküdar’da aynı adlı mahalleler olduğu için adresinizde Büyükçekmece’yi belirtmeniz yeterli.",
      "Koltukların yanında yatak yıkamayı da aynı randevuda yapıyoruz: yatağın iki yüzünü makineyle yıkayıp fazla suyu çekiyoruz, yatak da genellikle birkaç saat içinde kurur. Çocuklu evlerde yıkamanın sonunda durulama yapıyor, kumaşta ürün kalıntısı bırakmıyoruz.",
    ],
    nearby: ["yenimahalle", "kumburgaz", "guzelce", "kamiloba", "turkoba"],
    faq: [
      {
        q: "Büyükçekmece Bahçelievler’e mi, Bahçelievler ilçesine mi geliyorsunuz?",
        a: "Biz Büyükçekmece’deki Bahçelievler Mahallesi’ne geliyoruz. Hizmet bölgemiz Büyükçekmece, Beylikdüzü, Esenyurt ve Avcılar.",
      },
      {
        q: "Yatak yıkamayı koltukla aynı gün yapıyor musunuz?",
        a: "Evet. Tek ve çift kişilik yatakların iki yüzünü koltuklarla aynı randevuda yıkıyoruz.",
      },
      {
        q: "Kullandığınız ürünler çocuklar için güvenli mi?",
        a: "Evlerde kullanıma uygun ürünler kullanıyor ve yıkamanın sonunda durulama yapıyoruz; kumaşta ürün kalıntısı bırakmıyoruz.",
      },
      PRICE("Büyükçekmece Bahçelievler’de"),
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/Bah%C3%A7elievler,_B%C3%BCy%C3%BCk%C3%A7ekmece",
    sources: ["https://tr.wikipedia.org/wiki/Bahçelievler,_Büyükçekmece", MUHTARLIK, nufus("40882", "bahcelievler")],
  },
  {
    slug: "cakmakli",
    district: D,
    name: "Çakmaklı",
    heading: "Çakmaklı",
    officialName: "Çakmaklı Mahallesi",
    locative: "Çakmaklı’da",
    locativeAdj: "Çakmaklı’daki",
    dative: "Çakmaklı’ya",
    iAmIn: "Büyükçekmece Çakmaklı Mahallesi’ndeyim",
    image: "mahalle-cumhuriyet",
    imageAlt: "Hardal rengi kumaş koltuktaki lekeye ön işlem uygulanması",
    description:
      "Büyükçekmece Çakmaklı’daki evinize geliyoruz. Koltuktaki lekelere kumaşa uygun ürünle ön işlem yapıp evinizde, makineyle yıkıyoruz.",
    summary:
      "Çakmaklı, Büyükçekmece’nin Esenyurt sınırındaki iç kesim mahallesi; doğusunda Esenyurt’un Atatürk ve Osmangazi mahalleleri var. Lekeli koltuklarda önce kumaşa uygun ürünle ön işlem yapıyor, ardından makineyle yıkıyoruz.",
    facts: [
      { label: "Konum", value: "Büyükçekmece’nin doğusunda, iç kesimde; Esenyurt sınırında" },
      { label: "Komşu mahalleler", value: "19 Mayıs, Alkent 2000, Cumhuriyet (Esenyurt Atatürk ve Osmangazi)" },
      { label: "Nüfus", value: "5.778 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "Çakmaklı Eğitim ve Sanat Merkezi" },
    ],
    about: [
      "Çakmaklı Mahallesi kuzeyde Alkent 2000, batıda 19 Mayıs, güneyde Cumhuriyet mahalleleriyle, doğuda ise Esenyurt’un Atatürk ve Osmangazi mahalleleriyle komşu; denize ve göle kıyısı yok. Belediyenin Hicaz Sokak’taki Çakmaklı Eğitim ve Sanat Merkezi mahallede. Nüfusu 2024’ten 2025’e 5.500’den 5.800’e yükseldi.",
      "Yemek, çay, kahve ve çocuk lekelerinde önce kumaşa uygun ürünle ön işlem yapıyor, ardından suyu kumaşın içine püskürtüp kirle birlikte geri çekiyoruz. Çok eski lekelerde ne kadarının çıkabileceğini işe başlamadan söylüyoruz.",
    ],
    nearby: ["19-mayis", "alkent-2000", "cumhuriyet", "esenyurt-koltuk-yikama/ataturk", "esenyurt-koltuk-yikama/osmangazi"],
    faq: [
      {
        q: "Çakmaklı’nın her yerine geliyor musunuz?",
        a: "Evet. Çakmaklı Mahallesi’nin tamamına ve komşu Esenyurt mahallelerine makinemizle geliyoruz.",
      },
      {
        q: "Her leke çıkar mı?",
        a: "Yemek, içecek, ter ve toz lekelerinin büyük çoğunluğu çıkar. Çok eski, boya veya mürekkep lekelerinde sonucu işe başlamadan önce açıkça söylüyoruz.",
      },
      {
        q: "Yıkama ne kadar sürüyor?",
        a: "Üçlü bir koltuk genellikle bir saat civarında yıkanır; kuruma kumaşa ve havaya göre 4–8 saat sürer.",
      },
      PRICE("Çakmaklı’da"),
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/%C3%87akmakl%C4%B1,_B%C3%BCy%C3%BCk%C3%A7ekmece",
    sources: [
      "https://tr.wikipedia.org/wiki/Çakmaklı,_Büyükçekmece",
      MUHTARLIK,
      nufus("99334", "cakmakli"),
      "https://kultursanat.bcekmece.bel.tr/mekan/cakmakli-egitim-ve-sanat-merkezi",
    ],
  },
  {
    slug: "celaliye",
    district: D,
    name: "Celaliye",
    heading: "Celaliye",
    officialName: "Celaliye Mahallesi",
    locative: "Celaliye’de",
    locativeAdj: "Celaliye’deki",
    dative: "Celaliye’ye",
    iAmIn: "Büyükçekmece Celaliye Mahallesi’ndeyim",
    image: "sahne-yazlik",
    imageAlt: "Sezon açılışında yazlık evde açık mavi koltuğun yıkanması",
    description:
      "Celaliye’deki yazlık ve evlere makinemizle geliyoruz. Sezon açılışında koltuk, minder ve yatakları tek randevuda, evinizde yıkıyoruz.",
    summary:
      "Celaliye, Büyükçekmece’nin en batısında, Silivri ve Çatalca sınırında, Marmara Denizi kıyısındaki mahalle; sahil kesiminde yazlıklar bulunuyor ve yazın nüfusu belirgin şekilde artıyor. Sezon açılışında uzun süre kapalı kalmış koltukların toz ve rutubet kokusunu yıkamayla gideriyoruz.",
    facts: [
      { label: "Konum", value: "Büyükçekmece’nin en batısında, Marmara Denizi kıyısında; E-5 ve TEM geçiyor, Silivri ve Çatalca sınırında" },
      { label: "Komşu mahalleler", value: "Kamiloba (Silivri Selimpaşa, Çatalca Ovayenice)" },
      { label: "Nüfus", value: "8.562 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "Celaliye Sosyal Tesisi, Yahya Kemal Beyatlı Sosyal Tesisi, Yaşar Kemal Kültür Sanat ve Eğitim Merkezi" },
    ],
    about: [
      "Bizans döneminde Heksastros adıyla bilinen Celaliye, 1924 mübadelesinden sonra göçmenlerin yerleştiği, adını Balkan Savaşları’nda şehit düşen Binbaşı Celal’den alan bir yerleşim. 1968’de Kamiloba ile birlikte Celaliye-Kamiloba beldesi oldu; 2009’da Silivri’den Büyükçekmece’ye bağlandı. E-5 yan yolundaki deniz kenarı Celaliye Sosyal Tesisi ve Yaşar Kemal Kültür Sanat ve Eğitim Merkezi mahallede.",
      "Sahil kesimindeki yazlıklarda koltuklar kış boyunca kapalı kalabiliyor. Sezon açılışında önce koltuğu iyice vakumluyor, sonra yıkayıp fazla suyu çekiyoruz; koltuk, minder ve yatakları aynı randevuda bitiriyoruz.",
    ],
    nearby: ["kamiloba"],
    faq: [
      {
        q: "Celaliye’deki yazlıklara geliyor musunuz?",
        a: "Evet. Sezon açılışında veya kapanışında Celaliye’deki yazlıklara gelip koltuk, minder ve yatakları tek randevuda yıkıyoruz.",
      },
      {
        q: "Uzun süre kapalı kalan koltuktaki rutubet kokusu gider mi?",
        a: "Çoğu durumda belirgin şekilde azalır ya da tamamen gider. Koku süngerin içine işlemişse bunu yıkamadan önce açıkça söylüyoruz.",
      },
      {
        q: "Celaliye merkeze uzak, yine de geliyor musunuz?",
        a: "Evet. Büyükçekmece’nin tüm mahallelerine geliyoruz; WhatsApp’tan adresinizi yazın, uygun gün ve saati birlikte seçelim.",
      },
      PRICE("Celaliye’de"),
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/Celaliye,_B%C3%BCy%C3%BCk%C3%A7ekmece",
    sources: [
      "https://tr.wikipedia.org/wiki/Celaliye,_Büyükçekmece",
      MUHTARLIK,
      nufus("40928", "celaliye"),
      TARIH,
      "https://www.bcekmece.bel.tr/belediye/sosyal-tesisler/celaliye-sosyal-tesisi",
      "https://kultursanat.bcekmece.bel.tr/mekan/celaliye-yasar-kemal-kultur-sanat-ve-egitim-merkezi",
    ],
  },
  {
    slug: "cumhuriyet",
    district: D,
    name: "Cumhuriyet",
    heading: "Büyükçekmece Cumhuriyet",
    officialName: "Cumhuriyet Mahallesi",
    locative: "Büyükçekmece Cumhuriyet’te",
    locativeAdj: "Büyükçekmece Cumhuriyet’teki",
    dative: "Büyükçekmece Cumhuriyet’e",
    iAmIn: "Büyükçekmece Cumhuriyet Mahallesi’ndeyim",
    image: "sahne-site-giris",
    imageAlt: "Yıkama makinesiyle site girişinden geçen usta",
    description:
      "Büyükçekmece Cumhuriyet Mahallesi ve Beykent’teki ev ve sitelere geliyoruz. Koltuk ve köşe takımınızı taşımadan, evinizde yıkıyoruz.",
    summary:
      "Büyükçekmece’nin Cumhuriyet Mahallesi, TÜYAP Fuar ve Kongre Merkezi’nin bulunduğu, Beykent semtini kapsayan, E-5 üzerinde Beylikdüzü ve Esenyurt sınırındaki mahalle. Beylikdüzü ve Esenyurt’ta da Cumhuriyet Mahallesi olduğu için adresinizde ilçeyi belirtmeniz yeterli; üçüne de geliyoruz.",
    facts: [
      { label: "Konum", value: "Büyükçekmece’nin doğusunda, E-5 (D-100) üzerinde; Beylikdüzü ve Esenyurt sınırında, Beykent semti" },
      { label: "Komşu mahalleler", value: "Atatürk, Fatih, 19 Mayıs, Pınartepe, Çakmaklı (Beylikdüzü Adnan Kahveci; Esenyurt Atatürk ve Gökevler)" },
      { label: "Nüfus", value: "8.632 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "TÜYAP Fuar ve Kongre Merkezi, Muazzez İlmiye Çığ Eğitim Merkezi" },
    ],
    about: [
      "Cumhuriyet Mahallesi, Eski Hadımköy Yolu Caddesi’ndeki TÜYAP Fuar ve Kongre Merkezi’ne ev sahipliği yapıyor; Beykent semti de bu mahallede. TÜYAP adıyla bilinen Beylikdüzü Sondurak metrobüs durağına yakın olan mahalle, Beylikdüzü’nün Adnan Kahveci ve Esenyurt’un Atatürk ve Gökevler mahalleleriyle komşu.",
      "Beykent’teki sitelerde güvenliğe isminizi bırakmanız, misafir otoparkının yerini söylemeniz yeterli; makinemizle doğrudan dairenize çıkıyoruz. Köşe takımlarında minderleri ve kolları da yıkıyor, fazla suyu iyice çekerek koltuğun aynı gün kurumasını sağlıyoruz.",
    ],
    nearby: [
      "ataturk",
      "fatih",
      "19-mayis",
      "pinartepe",
      "cakmakli",
      "beylikduzu-koltuk-yikama/adnan-kahveci",
      "esenyurt-koltuk-yikama/gokevler",
    ],
    faq: [
      {
        q: "Beykent’teki sitelere geliyor musunuz?",
        a: "Evet. Beykent dahil Büyükçekmece Cumhuriyet Mahallesi’nin tüm site ve apartmanlarına makinemizle geliyoruz.",
      },
      {
        q: "Büyükçekmece, Beylikdüzü ve Esenyurt Cumhuriyet mahallelerinin hangisine geliyorsunuz?",
        a: "Üçüne de geliyoruz. Aynı adlı mahalleler olduğu için WhatsApp’ta adresinizle birlikte ilçeyi yazmanız yeterli.",
      },
      {
        q: "TÜYAP çevresine de geliyor musunuz?",
        a: "Evet, TÜYAP ve Beylikdüzü Sondurak metrobüs durağı çevresindeki evlere de geliyoruz.",
      },
      PRICE("Büyükçekmece Cumhuriyet Mahallesi’nde"),
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/Cumhuriyet,_B%C3%BCy%C3%BCk%C3%A7ekmece",
    sources: [
      "https://tr.wikipedia.org/wiki/Cumhuriyet,_Büyükçekmece",
      MUHTARLIK,
      nufus("40846", "cumhuriyet"),
      "https://tuyap.com.tr/iletisim",
      "https://kultursanat.bcekmece.bel.tr/mekan/muazzez-ilmiye-cig-egitim-merkezi",
    ],
  },
  {
    slug: "dizdariye",
    district: D,
    name: "Dizdariye",
    heading: "Dizdariye",
    officialName: "Dizdariye Mahallesi",
    locative: "Dizdariye’de",
    locativeAdj: "Dizdariye’deki",
    dative: "Dizdariye’ye",
    iAmIn: "Büyükçekmece Dizdariye Mahallesi’ndeyim",
    image: "mahalle-yakuplu",
    imageAlt: "Eski apartman dairesinde kahverengi kumaş berjerin yıkanması",
    description:
      "Büyükçekmece’nin tarihî merkezi Dizdariye’deki evinize geliyoruz. Koltuk, berjer ve takımlarınızı evinizde, makineyle yıkıyoruz.",
    summary:
      "Dizdariye, Mimar Sinan’ın imzasını taşıyan tek eseri olan Kanuni Sultan Süleyman (Mimar Sinan) Köprüsü’nün, Sokullu Mehmet Paşa Camii’nin ve Kültürpark’ın bulunduğu, Büyükçekmece Gölü’nün denize açıldığı yerdeki tarihî merkez mahallesi. Eski evlerdeki berjer ve takımları da makinemizle yerinde yıkıyoruz.",
    facts: [
      { label: "Konum", value: "Büyükçekmece’nin tarihî merkezinde, Büyükçekmece Gölü’nün denize açıldığı yerde; D-100 geçiyor" },
      { label: "Komşu mahalleler", value: "19 Mayıs, Fatih, Mimarsinan" },
      { label: "Nüfus", value: "6.426 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "Kanuni Sultan Süleyman (Mimar Sinan) Köprüsü, Sokullu Mehmet Paşa Camii, Kültürpark, Barış Manço Kültür Merkezi" },
    ],
    about: [
      "Dizdariye, 1566–67’de yapılan, 636 metre uzunluğundaki Kanuni Sultan Süleyman (Mimar Sinan) Köprüsü’ne ev sahipliği yapıyor; köprü, Mimar Sinan’ın imzasını taşıyan tek eseri. Sokullu Mehmet Paşa Camii, Kemal Sunal Amfi Tiyatrosu’nun bulunduğu Kültürpark ve Barış Manço Kültür Sanat ve Eğitim Merkezi de bu mahallede. Köprü Mimar Sinan’ın adını taşısa da komşu Mimarsinan Mahallesi’nde değil, Dizdariye’de.",
      "Tarihî merkezdeki eski evlerde uzun yıllar kullanılmış berjer ve takımlar sık oluyor. Önce iyice vakumluyor, lekelere ön işlem yapıyor, ardından makineyle yıkıyoruz; desenli kumaşlarda ürünü önce görünmeyen bir yerde deniyoruz.",
    ],
    nearby: ["19-mayis", "fatih", "mimarsinan"],
    faq: [
      {
        q: "Dizdariye’ye, köprü ve Kültürpark çevresine geliyor musunuz?",
        a: "Evet. Mimar Sinan Köprüsü ve Kültürpark çevresi dahil Dizdariye Mahallesi’nin tamamına geliyoruz.",
      },
      {
        q: "Eski berjer ve koltuklar yıkamaya uygun mu?",
        a: "Çoğu kumaş berjer ve koltuk yerinde yıkanabilir. Kumaşın durumunu görmek için fotoğrafını gönderin; uygun değilse önceden söylüyoruz.",
      },
      {
        q: "Desenli koltuklarda renk akar mı?",
        a: "Ürünü önce görünmeyen bir yerde deniyoruz; kumaşa uygun ürünle çalıştığımız için renk akmaz. Riskli bir kumaşsa yıkamadan önce söylüyoruz.",
      },
      PRICE("Dizdariye’de"),
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/Dizdariye",
    sources: [
      "https://tr.wikipedia.org/wiki/Dizdariye",
      MUHTARLIK,
      nufus("40847", "dizdariye"),
      "https://kulturenvanteri.com/en/yer/buyukcekmece-koprusu/",
      "https://www.bcekmece.bel.tr/belediye/tarihi-mekanlar/kanuni-sultan-suleyman-mimar-sinan-koprusu",
      "https://kulturenvanteri.com/en/yer/sokullu-mehmet-pasa-mescidi/",
      "https://kultursanat.bcekmece.bel.tr/mekan/baris-manco-kultur-sanat-ve-egitim-merkezi",
    ],
  },
  {
    slug: "ekinoba",
    district: D,
    name: "Ekinoba",
    heading: "Ekinoba",
    officialName: "Ekinoba Mahallesi",
    locative: "Ekinoba’da",
    locativeAdj: "Ekinoba’daki",
    dative: "Ekinoba’ya",
    iAmIn: "Büyükçekmece Ekinoba Mahallesi’ndeyim",
    image: "mahalle-baris",
    imageAlt: "Apartman dairesinde gri üçlü koltuğun yıkama öncesi vakumlanması",
    description:
      "Büyükçekmece Ekinoba’daki evinize geliyoruz. Koltuğunuzu önce vakumluyor, ardından makineyle evinizde derinlemesine yıkıyoruz.",
    summary:
      "Ekinoba, Büyükçekmece’nin Marmara Denizi kıyısındaki, Mimarsinan ile Mimaroba arasında yer alan ve yaklaşık 14.600 kişinin yaşadığı mahalle. Yıkamadan önce koltuğu vakumlayıp toz ve kırıntıları alıyor, ardından makineyle yıkıyoruz.",
    facts: [
      { label: "Konum", value: "Büyükçekmece’nin batı kesiminde, Marmara Denizi kıyısında; D-100 geçiyor" },
      { label: "Komşu mahalleler", value: "Mimaroba, Mimarsinan, Murat Çeşme" },
      { label: "Nüfus", value: "14.594 (2025, ADNKS)" },
    ],
    about: [
      "Ekinoba Mahallesi güneyde Marmara Denizi’ne kıyısı olan, Mimarsinan, Mimaroba ve Murat Çeşme mahalleleriyle çevrili bir sahil mahallesi; D-100 mahalleden geçiyor. Yaklaşık 14.600 kişilik nüfusuyla ilçenin orta büyüklükteki mahallelerinden biri.",
      "Deniz kenarındaki evlerde yıkamanın sonunda fazla suyu iyice çekiyor, kurumayı hızlandırmak için nasıl havalandırmanız gerektiğini anlatıyoruz. Vakumlama, leke ön işlemi, derin yıkama ve son emme fiyata dahil.",
    ],
    nearby: ["mimaroba", "mimarsinan", "murat-cesme"],
    faq: [
      {
        q: "Ekinoba’nın her yerine geliyor musunuz?",
        a: "Evet. Sahil tarafından D-100’e kadar Ekinoba Mahallesi’nin tüm ev ve sitelerine geliyoruz.",
      },
      {
        q: "Deniz kenarındaki evde koltuk ne kadar sürede kurur?",
        a: "Genellikle 4–8 saat sürer; nemli havalarda biraz uzayabilir. Fazla suyu iyice çektiğimiz için koltuk aynı gün kullanılabilir hâle gelir.",
      },
      {
        q: "Köşe takımını sökmeden yıkayabiliyor musunuz?",
        a: "Evet. Köşe takımını minderleriyle birlikte yerinde yıkıyoruz; fotoğrafını gönderirseniz boyutuna göre net fiyat veriyoruz.",
      },
      PRICE("Ekinoba’da"),
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/Ekinoba,_B%C3%BCy%C3%BCk%C3%A7ekmece",
    sources: ["https://tr.wikipedia.org/wiki/Ekinoba,_Büyükçekmece", MUHTARLIK, nufus("40886", "ekinoba")],
  },
  {
    slug: "fatih",
    district: D,
    name: "Fatih",
    heading: "Büyükçekmece Fatih",
    officialName: "Fatih Mahallesi",
    locative: "Büyükçekmece Fatih’te",
    locativeAdj: "Büyükçekmece Fatih’teki",
    dative: "Büyükçekmece Fatih’e",
    iAmIn: "Büyükçekmece Fatih Mahallesi’ndeyim",
    image: "sahne-kirli-su-tanki",
    imageAlt: "Yıkama sonrası makinenin kirli su haznesinin ev sahibine gösterilmesi",
    description:
      "Büyükçekmece merkezdeki Fatih Mahallesi’nde evinize geliyor, koltuklarınızı yerinde yıkıyoruz. Çekilen kirli suyu yıkama sonunda size gösteriyoruz.",
    summary:
      "Büyükçekmece’nin Fatih Mahallesi, Büyükçekmece Belediyesi’nin, Kent Meydanı’nın ve Atatürk Kültür Merkezi’nin bulunduğu, Marmara Denizi kıyısındaki ilçe merkezi (İstanbul’un Fatih ilçesi değil). Koltuktan çektiğimiz kirli suyu iş bitince size gösteriyoruz.",
    facts: [
      { label: "Konum", value: "Büyükçekmece merkezinde, Marmara Denizi kıyısında; D-100 geçiyor" },
      { label: "Komşu mahalleler", value: "19 Mayıs, Dizdariye, Cumhuriyet, Atatürk" },
      { label: "Nüfus", value: "17.857 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "Büyükçekmece Belediyesi ve Kent Meydanı, Atatürk Kültür Merkezi, Kuba Camii, Orhan Veli Sosyal Tesisi" },
    ],
    about: [
      "Fatih Mahallesi, Şehremini Sokak’taki Büyükçekmece Belediyesi merkez binası ve Kent Meydanı ile ilçenin yönetim merkezi. Kuba Camii’nin yanındaki Atatürk Kültür Merkezi, Kordonboyu’ndaki Orhan Veli Sosyal Tesisi, Atatürk Devrimleri Müzesi ve Değirmenpark Sanat Merkezi de bu mahallede. İstanbul’un Fatih ilçesi ve Esenyurt, Silivri, Çatalca’daki aynı adlı mahallelerle karışmaması için adresinizde Büyükçekmece’yi belirtin.",
      "Yıkamada önce koltuğu vakumluyor, lekelere ön işlem yapıyor, sonra suyu kumaşın içine püskürtüp kirle birlikte geri çekiyoruz. Çekilen kirli suyu iş bitince size gösteriyor, ödemeyi sonucu birlikte kontrol ettikten sonra alıyoruz.",
    ],
    nearby: ["19-mayis", "dizdariye", "cumhuriyet", "ataturk"],
    faq: [
      {
        q: "Büyükçekmece Fatih’e mi, Fatih ilçesine mi geliyorsunuz?",
        a: "Biz Büyükçekmece’deki Fatih Mahallesi’ne geliyoruz. Esenyurt’taki Fatih Mahallesi’ne de geliyoruz; adresinizde ilçeyi yazmanız yeterli.",
      },
      {
        q: "Yıkamanın gerçekten temizlediğini nasıl anlarım?",
        a: "Koltuktan çektiğimiz kirli suyu makinenin haznesinde size gösteriyoruz. Ödemeyi de sonucu birlikte kontrol ettikten sonra alıyoruz.",
      },
      {
        q: "Merkezdeki apartmanlarda otopark sorunu olursa?",
        a: "Adresinizi yazarken yakında kısa süreli park edilebilecek bir yer olup olmadığını belirtin; makineyi kısa bir mesafe taşımamız sorun değil.",
      },
      PRICE("Büyükçekmece Fatih Mahallesi’nde"),
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/Fatih,_B%C3%BCy%C3%BCk%C3%A7ekmece",
    sources: [
      "https://tr.wikipedia.org/wiki/Fatih,_Büyükçekmece",
      MUHTARLIK,
      nufus("40848", "fatih"),
      "https://www.bcekmece.bel.tr/kurumsal/liste/hizmet-noktalari",
      "https://kultursanat.bcekmece.bel.tr/mekan/ataturk-kultur-merkezi-akm",
      "https://www.bcekmece.bel.tr/belediye/sosyal-tesisler/orhan-veli-sosyal-tesisi",
    ],
  },
  {
    slug: "guzelce",
    district: D,
    name: "Güzelce",
    heading: "Güzelce",
    officialName: "Güzelce Mahallesi",
    locative: "Güzelce’de",
    locativeAdj: "Güzelce’deki",
    dative: "Güzelce’ye",
    iAmIn: "Büyükçekmece Güzelce Mahallesi’ndeyim",
    image: "sahne-bahce-minder",
    imageAlt: "Bahçe terasındaki oturma grubunun minderlerinin yıkanması",
    description:
      "Büyükçekmece Güzelce’deki ev ve sitelere geliyoruz. Koltuk, köşe takımı ve bahçe minderlerinizi evinizde, makineyle yıkıyoruz.",
    summary:
      "Güzelce, Büyükçekmece’nin Marmara Denizi kıyısındaki, 2009’da mahalle olan eski köy; her ağustos leyleklerin göç yolunda yer alıyor ve Güzelce ile Tepekent arasında bir günde 237 bin leylek sayıldığı kaydedildi. Bahçeli evlerde koltukla birlikte bahçe minderlerini de yıkıyoruz.",
    facts: [
      { label: "Konum", value: "Büyükçekmece’nin batı kesiminde, Marmara Denizi kıyısında" },
      { label: "Komşu mahalleler", value: "Bahçelievler, Türkoba, Murat Çeşme, Mimaroba, Sinanoba" },
      { label: "Nüfus", value: "10.765 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "Güzelce Sanat Merkezi, kapalı semt pazarı" },
    ],
    about: [
      "Güzelce, eskiden köy olan, 1989’da Kumburgaz beldesine bağlanan ve 2009’da Büyükçekmece’nin mahallesi olan bir sahil yerleşimi. Her ağustos leyleklerin göç yolu üzerinde bulunuyor; Güzelce ile Tepekent arasında bir günde 237 bin leylek sayıldığı haberlere konu oldu. Yoğurthane Caddesi’ndeki Güzelce Sanat Merkezi, yeni kapalı pazarın yanında.",
      "Bahçeli evlerde koltukların yanında kılıfı çıkmayan bahçe minderlerini de yerinde yıkayabiliyoruz. Deniz kenarındaki evlerde fazla suyu iyice çekiyor, kuruma için havalandırma önerilerini de iletiyoruz.",
    ],
    nearby: ["bahcelievler", "turkoba", "murat-cesme", "mimaroba", "sinanoba"],
    faq: [
      {
        q: "Güzelce’nin her yerine geliyor musunuz?",
        a: "Evet. Sahil şeridinden Türkoba sınırına kadar Güzelce Mahallesi’nin tüm ev ve sitelerine geliyoruz.",
      },
      {
        q: "Bahçe minderlerini de yıkıyor musunuz?",
        a: "Kılıfı çıkmayan kumaş bahçe minderlerini yerinde yıkıyoruz. Malzemesini görmek için fotoğrafını göndermeniz yeterli.",
      },
      {
        q: "Deniz kenarındaki evde koltuk ne kadar sürede kurur?",
        a: "Genellikle 4–8 saat sürer; nemli havalarda biraz uzayabilir. Pencere açmak ya da klima çalıştırmak kurumayı hızlandırır.",
      },
      PRICE("Güzelce’de"),
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/G%C3%BCzelce,_B%C3%BCy%C3%BCk%C3%A7ekmece",
    sources: [
      "https://tr.wikipedia.org/wiki/Güzelce,_Büyükçekmece",
      MUHTARLIK,
      nufus("40883", "guzelce"),
      "https://kultursanat.bcekmece.bel.tr/mekan/guzelce-sanat-merkezi",
      "https://www.aksam.com.tr/yasam/istanbul-guzelce-tepekent-arasinda-bir-gunde-237-bin-leylek-sayildi/haber-767253",
    ],
  },
  {
    slug: "hurriyet",
    district: D,
    name: "Hürriyet",
    heading: "Büyükçekmece Hürriyet",
    officialName: "Hürriyet Mahallesi",
    locative: "Büyükçekmece Hürriyet’te",
    locativeAdj: "Büyükçekmece Hürriyet’teki",
    dative: "Büyükçekmece Hürriyet’e",
    iAmIn: "Büyükçekmece Hürriyet Mahallesi’ndeyim",
    image: "sahne-asansorsuz-merdiven",
    imageAlt: "Asansörsüz apartmanda yıkama makinesinin merdivenle taşınması",
    description:
      "Büyükçekmece Hürriyet Mahallesi’ndeki evinize geliyoruz. Asansörsüz binalarda makineyi merdivenle kendimiz taşıyor, koltuğunuzu evinizde yıkıyoruz.",
    summary:
      "Büyükçekmece’nin Hürriyet Mahallesi, Tepecik bölgesinde, yaklaşık 23 bin kişiyle ilçenin en kalabalık ikinci mahallesi; kuzeyde Çatalca ile komşu. Asansörü olmayan binalarda makinemizi merdivenle kendimiz çıkarıyoruz.",
    facts: [
      { label: "Konum", value: "Büyükçekmece’nin kuzeyinde, Tepecik bölgesinde, iç kesimde; Çatalca sınırında" },
      { label: "Komşu mahalleler", value: "Ulus, Türkoba, Murat Çeşme, Ahmediye (Çatalca Muratbey Merkez)" },
      { label: "Nüfus", value: "22.881 (2025, ADNKS), ilçenin en kalabalık ikinci mahallesi" },
    ],
    about: [
      "Hürriyet Mahallesi, eski Tepecik beldesinin bulunduğu bölgede, Büyükçekmece Gölü’ne birkaç yüz metre mesafede ama kıyısı olmayan bir iç kesim mahallesi. Doğuda Ulus, batıda Türkoba, güneyde Murat Çeşme, kuzeyde Ahmediye ve Çatalca’nın Muratbey Merkez Mahallesi ile komşu. Esenyurt’ta da Hürriyet Mahallesi bulunduğu için adresinizde ilçeyi belirtin.",
      "Apartmanlarda asansör olmayabiliyor; makinemiz taşınabilir, merdivenle kendimiz çıkarıyoruz. Koltuğun çevresini biraz boşaltmanız yeterli; zemini örtüyle koruyor, işi bitirince ortalığı toparlıyoruz.",
    ],
    nearby: ["ulus", "turkoba", "murat-cesme", "ahmediye"],
    faq: [
      {
        q: "Tepecik’teki Hürriyet Mahallesi’ne geliyor musunuz?",
        a: "Evet. Tepecik bölgesindeki Hürriyet Mahallesi’nin tamamına geliyoruz. Esenyurt Hürriyet’e de geliyoruz; adresinizde ilçeyi yazın.",
      },
      {
        q: "Asansörsüz binalara geliyor musunuz?",
        a: "Evet. Makinemiz taşınabilir; merdivenle kendimiz çıkarıyoruz. Sizin bir şey hazırlamanıza gerek yok.",
      },
      {
        q: "Yıkadıktan sonra koltuğu ne zaman kullanabilirim?",
        a: "Kumaşa ve havaya göre genellikle 4–8 saat içinde kurur. Pencereleri açık tutmanız kurumayı hızlandırır.",
      },
      PRICE("Büyükçekmece Hürriyet Mahallesi’nde"),
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/H%C3%BCrriyet,_B%C3%BCy%C3%BCk%C3%A7ekmece",
    sources: ["https://tr.wikipedia.org/wiki/Hürriyet,_Büyükçekmece", MUHTARLIK, nufus("40889", "hurriyet")],
  },
  {
    slug: "kamiloba",
    district: D,
    name: "Kamiloba",
    heading: "Kamiloba",
    officialName: "Kamiloba Mahallesi",
    locative: "Kamiloba’da",
    locativeAdj: "Kamiloba’daki",
    dative: "Kamiloba’ya",
    iAmIn: "Büyükçekmece Kamiloba Mahallesi’ndeyim",
    image: "koltuk-yikama-evde",
    imageAlt: "Evde makineyle gri kumaş koltuk yıkama",
    description:
      "Büyükçekmece Kamiloba’daki evinize makinemizle geliyor, koltuk ve köşe takımınızı yerinde, derinlemesine yıkıyoruz.",
    summary:
      "Kamiloba, eski adı Yaloz olan, 1969’da Celaliye ile birlikte belde olup 2009’da Silivri’den Büyükçekmece’ye bağlanan mahalle; TEM otoyolu mahalleden geçiyor ve Çatalca ile komşu. İlçenin batısındaki bu mahalleye de makinemizle geliyoruz.",
    facts: [
      { label: "Konum", value: "Büyükçekmece’nin batısında; TEM (Avrupa Otoyolu) geçiyor, Çatalca sınırında" },
      { label: "Komşu mahalleler", value: "Celaliye, Kumburgaz, Bahçelievler, Türkoba (Çatalca Muratbey Merkez, Çakıl, Ovayenice)" },
      { label: "Nüfus", value: "9.506 (2025, ADNKS)" },
    ],
    about: [
      "Eski adı Yaloz olan Kamiloba, adını Binbaşı Kâmil’den alıyor. Silivri’ye bağlı bir köyken 1969’da Celaliye ile birleşerek Celaliye-Kamiloba beldesini oluşturdu, 2009’da Büyükçekmece’ye bağlandı. TEM otoyolunun geçtiği mahalle, ilçe içinde Celaliye, Kumburgaz, Bahçelievler ve Türkoba ile, kuzeyde ise Çatalca’nın üç mahallesiyle komşu.",
      "İlçenin batısındaki mahallelere de randevuyu size uyan saate göre planlıyoruz. Koltuk, köşe takımı, sandalye ve yatakları aynı ziyarette yıkayabiliyoruz; fotoğraflarını gönderirseniz toplam fiyatı birlikte veriyoruz.",
    ],
    nearby: ["celaliye", "kumburgaz", "bahcelievler", "turkoba"],
    faq: [
      {
        q: "Kamiloba’ya geliyor musunuz?",
        a: "Evet. Kamiloba Mahallesi’nin tamamına ve komşu Celaliye ile Kumburgaz’a makinemizle geliyoruz.",
      },
      {
        q: "Koltuk, sandalye ve yatağı aynı gün yıkıyor musunuz?",
        a: "Evet. Hepsini aynı randevuda yıkıyoruz; fotoğraflarını gönderirseniz toplam fiyatı veriyoruz.",
      },
      {
        q: "Yıkadıktan sonra koltuğu ne zaman kullanabilirim?",
        a: "Kumaşa ve havaya göre genellikle 4–8 saat içinde kurur. Kuruyana kadar üzerine örtü sermemenizi öneririz.",
      },
      PRICE("Kamiloba’da"),
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/Kamiloba,_B%C3%BCy%C3%BCk%C3%A7ekmece",
    sources: ["https://tr.wikipedia.org/wiki/Kamiloba,_Büyükçekmece", MUHTARLIK, nufus("40929", "kamiloba"), TARIH],
  },
  {
    slug: "karaagac",
    district: D,
    name: "Karaağaç",
    heading: "Büyükçekmece Karaağaç",
    officialName: "Karaağaç Mahallesi",
    locative: "Büyükçekmece Karaağaç’ta",
    locativeAdj: "Büyükçekmece Karaağaç’taki",
    dative: "Büyükçekmece Karaağaç’a",
    iAmIn: "Büyükçekmece Karaağaç Mahallesi’ndeyim",
    image: "sahne-evcil-hayvan",
    imageAlt: "Kedili evde koyu gri koltuktaki tüylerin vakumlanması",
    description:
      "Büyükçekmece Karaağaç’taki evinize geliyoruz. Koltuğunuzu taşımadan evinizde yıkıyor, evcil hayvan tüyü ve kokusuna karşı özel işlem yapıyoruz.",
    summary:
      "Karaağaç, Büyükçekmece’nin kuzeydoğu ucunda, Büyükçekmece Gölü kıyısında, TEM otoyolunun geçtiği ve Esenyurt ile Arnavutköy’e komşu mahalle; nüfusu 2007’deki 884 kişiden 2025’te 6.480’e yükseldi. Evcil hayvanlı evlerde koltuğu önce vakumlayıp tüyleri alıyor, sonra yıkıyoruz.",
    facts: [
      { label: "Konum", value: "Büyükçekmece’nin kuzeydoğu ucunda, Büyükçekmece Gölü kıyısında; TEM geçiyor" },
      { label: "Komşu mahalleler", value: "Alkent 2000 (Esenyurt Akçaburgaz ve Orhan Gazi; Arnavutköy Ömerli ve Yeşilbayır)" },
      { label: "Nüfus", value: "6.480 (2025, ADNKS)" },
    ],
    about: [
      "Karaağaç Mahallesi, Büyükçekmece’nin kuzeydoğu köşesinde, Büyükçekmece Gölü’ne kıyısı olan ve TEM otoyolunun geçtiği bir mahalle. İlçe içinde yalnızca Alkent 2000 ile komşu; doğusunda Esenyurt’un Akçaburgaz ve Orhan Gazi, kuzeyinde Arnavutköy’ün Ömerli ve Yeşilbayır mahalleleri var. Nüfusu 2007’de 884 iken 2025’te 6.480’e çıktı.",
      "Evcil hayvanlı evlerde yıkamadan önce koltuğu özel başlıkla vakumlayıp tüyleri alıyor, kokuya karşı kumaşa uygun ürünle yıkıyoruz. Koku kumaşın altındaki süngere işlemişse bunu yıkamadan önce açıkça söylüyoruz.",
    ],
    nearby: ["alkent-2000", "esenyurt-koltuk-yikama/akcaburgaz", "esenyurt-koltuk-yikama/orhan-gazi"],
    faq: [
      {
        q: "Büyükçekmece Karaağaç’a geliyor musunuz?",
        a: "Evet. Karaağaç Mahallesi’nin tamamına ve komşu Alkent 2000 ile Esenyurt Akçaburgaz’a makinemizle geliyoruz.",
      },
      {
        q: "Kedi ve köpek tüyü koltuktan çıkar mı?",
        a: "Evet. Yıkamadan önce koltuğu özel başlıkla vakumlayıp tüyleri alıyoruz, ardından makineyle yıkıyoruz.",
      },
      {
        q: "Evcil hayvan kokusu gider mi?",
        a: "Çoğu durumda belirgin şekilde azalır ya da tamamen gider. Koku süngere işlemişse bunu yıkamadan önce söylüyoruz.",
      },
      PRICE("Büyükçekmece Karaağaç’ta"),
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/Karaa%C4%9Fa%C3%A7,_B%C3%BCy%C3%BCk%C3%A7ekmece",
    sources: ["https://tr.wikipedia.org/wiki/Karaağaç,_Büyükçekmece", MUHTARLIK, nufus("40849", "karaagac")],
  },
  {
    slug: "kumburgaz",
    district: D,
    name: "Kumburgaz",
    heading: "Kumburgaz",
    officialName: "Kumburgaz Mahallesi",
    locative: "Kumburgaz’da",
    locativeAdj: "Kumburgaz’daki",
    dative: "Kumburgaz’a",
    iAmIn: "Büyükçekmece Kumburgaz Mahallesi’ndeyim",
    image: "sahne-havuzlu-site",
    imageAlt: "Havuzlu site dairesinde krem rengi koltuğun yıkanması",
    description:
      "Kumburgaz’daki tatil siteleri, yazlık ve evlere makinemizle geliyoruz. Sezon açılışında koltuk, minder ve yatakları tek randevuda yıkıyoruz.",
    summary:
      "Kumburgaz, Büyükçekmece’nin yaklaşık 8 km’lik sahiliyle bilinen, Marmara kıyısı boyunca tatil sitelerinin bulunduğu mahallesi; 1986’dan 2009’a kadar belde olarak yönetildi. Sezon açılışında uzun süre kapalı kalan koltukları, minderleri ve yatakları aynı ziyarette yıkıyoruz.",
    facts: [
      { label: "Konum", value: "Büyükçekmece’nin batı kesiminde, yaklaşık 8 km Marmara Denizi kıyısı; D-100 geçiyor" },
      { label: "Komşu mahalleler", value: "Kamiloba, Bahçelievler, Yenimahalle" },
      { label: "Nüfus", value: "9.799 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "Kumburgaz Sanat Merkezi, belediye Kumburgaz ek hizmet binası" },
    ],
    about: [
      "1334 tarihli kayıtlarda adı geçen Kumburgaz, 1986’da belde oldu ve 2009’da Büyükçekmece’nin mahallesi hâline geldi. Yaklaşık 8 km’lik Marmara sahili boyunca tatil siteleri bulunuyor; İmrahor Caddesi’ndeki Kumburgaz Sanat Merkezi ve belediyenin Kumburgaz ek hizmet binası mahallede.",
      "Tatil sitelerindeki ve yazlıklardaki koltuklar kış boyunca kapalı kalabiliyor. Sezon açılışında önce koltuğu iyice vakumluyor, ardından yıkayıp fazla suyu çekiyoruz; site girişinde güvenliğe isminizi bırakmanız yeterli.",
    ],
    nearby: ["kamiloba", "bahcelievler", "yenimahalle"],
    faq: [
      {
        q: "Kumburgaz’daki tatil sitelerine geliyor musunuz?",
        a: "Evet. Kumburgaz Mahallesi’ndeki tatil siteleri, yazlıklar ve evlerin tamamına geliyoruz. Site girişinde güvenliğe isim bırakmanız yeterli.",
      },
      {
        q: "Sezon açılışında hangi eşyaları yıkıyorsunuz?",
        a: "Koltuk, köşe takımı, minderler, sandalyeler ve yatakları aynı randevuda yıkayabiliyoruz; hepsinin fotoğrafını gönderirseniz toplam fiyatı veriyoruz.",
      },
      {
        q: "Uzun süre kapalı kalan koltuktaki rutubet kokusu gider mi?",
        a: "Çoğu durumda belirgin şekilde azalır ya da tamamen gider. Koku süngerin içine işlemişse bunu yıkamadan önce açıkça söylüyoruz.",
      },
      PRICE("Kumburgaz’da"),
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/Kumburgaz",
    sources: [
      "https://tr.wikipedia.org/wiki/Kumburgaz",
      MUHTARLIK,
      nufus("40884", "kumburgaz"),
      "https://www.milliyet.com.tr/gundem/yazlikcilar-virus-nedeniyle-istanbula-donmuyor-6338674",
      "https://kultursanat.bcekmece.bel.tr/mekan/kumburgaz-sanat-merkezi",
    ],
  },
  {
    slug: "mimaroba",
    district: D,
    name: "Mimaroba",
    heading: "Mimaroba",
    officialName: "Mimaroba Mahallesi",
    locative: "Mimaroba’da",
    locativeAdj: "Mimaroba’daki",
    dative: "Mimaroba’ya",
    iAmIn: "Büyükçekmece Mimaroba Mahallesi’ndeyim",
    image: "mahalle-adnan-kahveci",
    imageAlt: "Site dairesinde bej L koltuğun makineyle yıkanması",
    description:
      "Mimaroba’daki site ve toplu konut dairelerine makinemizle geliyor, koltuk ve köşe takımlarınızı evinizde yıkıyoruz.",
    summary:
      "Mimaroba, 1998’de tamamlanan, büyük bölümü Emlak Bankası, KİPTAŞ ve TOKİ konutlarından oluşan uydukentin bulunduğu, üç yanı denizle çevrili mahalle; 265 bin m²’lik Büyük Atatürk Parkı da burada. Site ve toplu konut dairelerinde makinemizle doğrudan dairenize çıkıyoruz.",
    facts: [
      { label: "Konum", value: "Büyükçekmece’nin batı kesiminde, üç yanı Marmara Denizi ile çevrili" },
      { label: "Komşu mahalleler", value: "Sinanoba, Ekinoba, Güzelce, Murat Çeşme" },
      { label: "Nüfus", value: "20.010 (2025, ADNKS)" },
      { label: "Konut yapısı", value: "1998’de tamamlanan Mimaroba uydukenti: Emlak Bankası, KİPTAŞ ve TOKİ konutları" },
      { label: "Bilinen yerler", value: "Büyük Atatürk Parkı, Türkan Saylan Sosyal Tesisi, Zübeyde Hanım Kültür Merkezi" },
    ],
    about: [
      "Mimaroba, 1998’de tamamlanan ve büyük bölümü Emlak Bankası, KİPTAŞ ve TOKİ konutlarından oluşan uydukentin bulunduğu mahalle; Sinanoba ile birlikte tek bir yerleşim gibi. 2008’e kadar Mimarsinan beldesine bağlıydı, 2013’ten beri TÜİK kayıtlarında ayrı mahalle. Yaklaşık 265 bin m²’lik Büyük Atatürk Parkı ve içindeki Türkan Saylan Sosyal Tesisi mahallenin simgesi.",
      "Toplu konut ve site dairelerinde blok ve kat bilgisini önceden alıp gelişimizi planlıyoruz; makinemiz taşınabilir, asansörle dairenize çıkarıyoruz. Köşe takımlarını minderleriyle birlikte yerinde yıkıyor, fazla suyu iyice çekiyoruz.",
    ],
    nearby: ["sinanoba", "ekinoba", "guzelce", "murat-cesme"],
    faq: [
      {
        q: "Mimaroba’daki toplu konut ve sitelere geliyor musunuz?",
        a: "Evet. Büyük Atatürk Parkı çevresi dahil Mimaroba Mahallesi’nin tüm site ve toplu konut bloklarına geliyoruz.",
      },
      {
        q: "Yüksek katlara makineyi nasıl çıkarıyorsunuz?",
        a: "Makinemiz taşınabilir; asansörle dairenize çıkarıyoruz. Asansör arızalıysa randevu sırasında haber verin, ona göre planlayalım.",
      },
      {
        q: "Köşe takımımın fiyatını nasıl öğrenirim?",
        a: "WhatsApp’tan köşe takımınızın fotoğrafını ve Mimaroba’da olduğunuzu yazın; boyutuna ve kumaşına göre net fiyat veriyoruz.",
      },
      {
        q: "Yıkadıktan sonra koltuğu ne zaman kullanabilirim?",
        a: "Kumaşa ve havaya göre genellikle 4–8 saat içinde kurur. Pencereleri açık tutmanız kurumayı hızlandırır.",
      },
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/Mimaroba",
    sources: [
      "https://tr.wikipedia.org/wiki/Mimaroba",
      MUHTARLIK,
      nufus("140376", "mimaroba"),
      "https://www.bcekmece.bel.tr/belediye/sosyal-tesisler/turkan-saylan-sosyal-tesisi",
    ],
  },
  {
    slug: "mimarsinan",
    district: D,
    name: "Mimarsinan",
    heading: "Mimarsinan",
    officialName: "Mimarsinan Mahallesi",
    locative: "Mimarsinan’da",
    locativeAdj: "Mimarsinan’daki",
    dative: "Mimarsinan’a",
    iAmIn: "Büyükçekmece Mimarsinan Mahallesi’ndeyim",
    image: "mahalle-kavakli",
    imageAlt: "Minderli yemek sandalyesinin makineyle yıkanması",
    description:
      "Büyükçekmece Mimarsinan’daki evinize geliyoruz. Koltuk, köşe takımı ve minderli sandalyelerinizi aynı randevuda, evinizde yıkıyoruz.",
    summary:
      "Mimarsinan (resmî adreslerde Mimar Sinan Merkez Mahallesi), Büyükçekmece Gölü ile Marmara Denizi arasında, D-100 üzerinde, Büyükçekmece Mimar Sinan Devlet Hastanesi’nin bulunduğu mahalle. Koltukların yanında minderli yemek sandalyelerini de aynı randevuda yıkıyoruz.",
    facts: [
      { label: "Konum", value: "Büyükçekmece Gölü ile Marmara Denizi arasında, D-100 üzerinde" },
      { label: "Komşu mahalleler", value: "Murat Çeşme, Ulus, Ekinoba, Dizdariye" },
      { label: "Nüfus", value: "9.502 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "Büyükçekmece Mimar Sinan Devlet Hastanesi, Mimarsinan Gülcemal Sosyal Tesisleri" },
    ],
    about: [
      "Antik çağda Kallikráteia adıyla bilinen Mimarsinan, 1988’de belde oldu ve 2009’da Büyükçekmece’nin mahallesi hâline geldi; bugün Mimaroba ve Sinanoba da bir zamanlar bu beldeye bağlıydı. D-100 üzerindeki Büyükçekmece Mimar Sinan Devlet Hastanesi ve İskele Caddesi’ndeki Gülcemal Sosyal Tesisleri mahallede. Adını taşısa da Mimar Sinan Köprüsü komşu Dizdariye Mahallesi’nde.",
      "Göl ile deniz arasındaki evlerde yıkamanın sonunda fazla suyu iyice çekiyor, kurumayı hızlandırmak için havalandırma öneriyoruz. Minderli yemek sandalyelerini koltuklarla aynı randevuda, kumaşına uygun ürünle tek tek yıkıyoruz.",
    ],
    nearby: ["murat-cesme", "ulus", "ekinoba", "dizdariye"],
    faq: [
      {
        q: "Mimarsinan’ın göl ve deniz tarafına geliyor musunuz?",
        a: "Evet. Göl kıyısından sahile kadar Mimarsinan Mahallesi’nin tamamına geliyoruz.",
      },
      {
        q: "Yemek sandalyelerini koltukla birlikte yıkıyor musunuz?",
        a: "Evet. Minderli sandalyeleri aynı randevuda yıkıyoruz; fiyatı adet üzerinden veriyoruz.",
      },
      {
        q: "Mimar Sinan Köprüsü çevresine de geliyor musunuz?",
        a: "Evet. Köprü komşu Dizdariye Mahallesi’nde; Dizdariye dahil Büyükçekmece’nin tüm mahallelerine geliyoruz.",
      },
      PRICE("Mimarsinan’da"),
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/Mimarsinan,_B%C3%BCy%C3%BCk%C3%A7ekmece",
    sources: [
      "https://tr.wikipedia.org/wiki/Mimarsinan,_Büyükçekmece",
      MUHTARLIK,
      nufus("40887", "mimarsinan"),
      "https://buyukcekmecedh.saglik.gov.tr/TR-186318/iletisimulasim.html",
      "https://www.bcekmece.bel.tr/belediye/sosyal-tesisler/mimarsinan-gulcemal-sosyal-tesisleri",
    ],
  },
  {
    slug: "murat-cesme",
    district: D,
    name: "Murat Çeşme",
    heading: "Murat Çeşme",
    officialName: "Murat Çeşme Mahallesi",
    locative: "Murat Çeşme’de",
    locativeAdj: "Murat Çeşme’deki",
    dative: "Murat Çeşme’ye",
    iAmIn: "Büyükçekmece Murat Çeşme Mahallesi’ndeyim",
    image: "sahne-cocuklu-ev",
    imageAlt: "Bej kumaş koltuktaki keçeli kalem lekesine ön işlem uygulanması",
    description:
      "Büyükçekmece Murat Çeşme’deki evinize geliyoruz. Çocuklu evlerde kalem ve yiyecek lekelerine ön işlem yapıp koltuğunuzu yerinde yıkıyoruz.",
    summary:
      "Murat Çeşme (belediye kayıtlarında Muratçeşme), Büyükçekmece Gölü’nün batısında, D-100’ün kuzeyinde, yaklaşık 19.500 kişinin yaşadığı ve birçok okulun bulunduğu mahalle. Çocuklu evlerde kalem, meyve suyu ve yemek lekelerine kumaşa uygun ürünle ön işlem yapıyoruz.",
    facts: [
      { label: "Konum", value: "Büyükçekmece Gölü’nün batısında, D-100’ün kuzeyinde; denize ve göle kıyısı yok" },
      { label: "Komşu mahalleler", value: "Mimarsinan, Hürriyet, Güzelce, Türkoba, Ekinoba, Ulus, Mimaroba" },
      { label: "Nüfus", value: "19.532 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "Büyükçekmece Mesleki ve Teknik Anadolu Lisesi, Aşiret Dalcı İlk ve Ortaokulu" },
    ],
    about: [
      "Murat Çeşme, Büyükçekmece Gölü’nün batısında ve D-100’ün kuzeyinde yer alan, yedi Büyükçekmece mahallesiyle komşu, ilçenin ortasındaki bir mahalle. Büyükçekmece Mesleki ve Teknik Anadolu Lisesi ve Aşiret Dalcı İlk ve Ortaokulu gibi okullar mahallede. Çatalca’daki Muratbey ile karıştırılmamalı.",
      "Çocuklu evlerde koltuklarda kalem, meyve suyu ve yemek lekeleri sık görülüyor. Bu lekelere önce kumaşa uygun ürünle ön işlem yapıyor, ardından makineyle yıkıyor ve durulayarak kumaşta ürün kalıntısı bırakmıyoruz.",
    ],
    nearby: ["mimarsinan", "hurriyet", "guzelce", "turkoba", "ekinoba", "ulus", "mimaroba"],
    faq: [
      {
        q: "Murat Çeşme’nin her yerine geliyor musunuz?",
        a: "Evet. Murat Çeşme Mahallesi’nin tamamına ve çevresindeki tüm Büyükçekmece mahallelerine geliyoruz.",
      },
      {
        q: "Keçeli kalem lekesi çıkar mı?",
        a: "Çoğu durumda çıkar ya da belirgin şekilde açılır. Kalemin türüne ve ne kadar beklediğine göre sonucu işe başlamadan önce söylüyoruz.",
      },
      {
        q: "Kullandığınız ürünler çocuklar için güvenli mi?",
        a: "Evlerde kullanıma uygun ürünler kullanıyor ve yıkamanın sonunda durulama yapıyoruz; kumaşta ürün kalıntısı bırakmıyoruz.",
      },
      PRICE("Murat Çeşme’de"),
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/Murat_%C3%87e%C5%9Fme",
    sources: ["https://tr.wikipedia.org/wiki/Murat_Çeşme", MUHTARLIK, nufus("40888", "muratcesme")],
  },
  {
    slug: "pinartepe",
    district: D,
    name: "Pınartepe",
    heading: "Pınartepe",
    officialName: "Pınartepe Mahallesi",
    locative: "Pınartepe’de",
    locativeAdj: "Pınartepe’deki",
    dative: "Pınartepe’ye",
    iAmIn: "Büyükçekmece Pınartepe Mahallesi’ndeyim",
    image: "sahne-u-kose",
    imageAlt: "Geniş salonda gri U köşe koltuğun yıkanması",
    description:
      "Büyükçekmece Pınartepe’deki ev ve sitelere geliyoruz. Büyük köşe takımlarını minderleriyle birlikte evinizde, makineyle yıkıyoruz.",
    summary:
      "Pınartepe, yaklaşık 23.400 kişiyle Büyükçekmece’nin en kalabalık mahallesi; Beylikdüzü sınırında, Marmara kıyısında yer alıyor ve “Beylikdüzü Devlet Hastanesi” aslında bu mahallede. 2009’a kadar Gürpınar beldesine bağlıydı. Geniş köşe takımlarını minderleriyle birlikte yerinde yıkıyoruz.",
    facts: [
      { label: "Konum", value: "Büyükçekmece’nin doğusunda, Marmara Denizi kıyısında; Beylikdüzü sınırında" },
      { label: "Komşu mahalleler", value: "Atatürk, Cumhuriyet (Beylikdüzü Gürpınar ve Adnan Kahveci)" },
      { label: "Nüfus", value: "23.435 (2025, ADNKS), ilçenin en kalabalık mahallesi" },
      { label: "Bilinen yerler", value: "Beylikdüzü Devlet Hastanesi, WorldPoint Yaşam Merkezi, Atatepe Sosyal Tesisi, Alamara Sanat Merkezi" },
    ],
    about: [
      "Pınartepe, 2009’a kadar Gürpınar beldesine bağlıydı; bugün Büyükçekmece’nin en kalabalık mahallesi. Adına rağmen Beylikdüzü Devlet Hastanesi Yavuz Sultan Selim Bulvarı’nda, bu mahallede. WorldPoint Yaşam Merkezi ve içindeki, deniz ve göl manzaralı Atatepe Sosyal Tesisi ile Alamara Sanat Merkezi de Pınartepe’de; batıda Beylikdüzü’nün Gürpınar ve Adnan Kahveci mahalleleriyle komşu.",
      "Site ve yaşam merkezlerinde güvenliğe isminizi bırakmanız yeterli; makinemizle doğrudan dairenize çıkıyoruz. Geniş U ve L köşe takımlarını sökmeden, minderleriyle birlikte yerinde yıkıyor, fazla suyu iyice çekiyoruz.",
    ],
    nearby: ["ataturk", "cumhuriyet", "beylikduzu-koltuk-yikama/gurpinar", "beylikduzu-koltuk-yikama/adnan-kahveci"],
    faq: [
      {
        q: "WorldPoint ve Pınartepe’deki sitelere geliyor musunuz?",
        a: "Evet. WorldPoint Yaşam Merkezi dahil Pınartepe Mahallesi’nin tüm site ve evlerine geliyoruz.",
      },
      {
        q: "Büyük U köşe takımını evde yıkayabiliyor musunuz?",
        a: "Evet. Köşe takımını sökmeden, minderleriyle birlikte yerinde yıkıyoruz; fotoğrafını gönderirseniz boyutuna göre net fiyat veriyoruz.",
      },
      {
        q: "Beylikdüzü tarafındaki evlere de geliyor musunuz?",
        a: "Evet. Komşu Gürpınar ve Adnan Kahveci dahil Beylikdüzü’nün tüm mahallelerine de geliyoruz.",
      },
      PRICE("Pınartepe’de"),
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/P%C4%B1nartepe,_B%C3%BCy%C3%BCk%C3%A7ekmece",
    sources: [
      "https://tr.wikipedia.org/wiki/Pınartepe,_Büyükçekmece",
      MUHTARLIK,
      nufus("40868", "pinartepe"),
      "https://beylikduzudh.saglik.gov.tr/TR-201467/iletisim-amp-ulasim.html",
      "https://www.bcekmece.bel.tr/belediye/sosyal-tesisler/atatepe-sosyal-tesisi",
      "https://kultursanat.bcekmece.bel.tr/mekan/alamara-sanat-merkezi",
    ],
  },
  {
    slug: "sinanoba",
    district: D,
    name: "Sinanoba",
    heading: "Sinanoba",
    officialName: "Sinanoba Mahallesi",
    locative: "Sinanoba’da",
    locativeAdj: "Sinanoba’daki",
    dative: "Sinanoba’ya",
    iAmIn: "Büyükçekmece Sinanoba Mahallesi’ndeyim",
    image: "mahalle-sahil",
    imageAlt: "Deniz manzaralı dairede lacivert kadife koltuğun yıkanması",
    description:
      "Büyükçekmece Sinanoba’daki deniz kenarı ev ve sitelere geliyoruz. Kadife ve açık renkli koltukları da evinizde, kumaşa uygun ürünle yıkıyoruz.",
    summary:
      "Sinanoba, Büyükçekmece’nin uzun bir Marmara sahiline sahip, Mimaroba ile birlikte tek bir yerleşim oluşturan mahallesi; Zülfü Livaneli Kültür Sanat ve Eğitim Merkezi burada. Deniz kenarındaki evlerde yıkamanın sonunda fazla suyu iyice çekip kuruma için havalandırma öneriyoruz.",
    facts: [
      { label: "Konum", value: "Büyükçekmece’nin batı kesiminde, uzun bir Marmara Denizi kıyısıyla" },
      { label: "Komşu mahalleler", value: "Mimaroba, Güzelce" },
      { label: "Nüfus", value: "15.778 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "Zülfü Livaneli Kültür Sanat ve Eğitim Merkezi" },
    ],
    about: [
      "Sinanoba, Mimaroba uydukentiyle birlikte tek bir yerleşim gibi gelişen, 2008’e kadar Mimarsinan beldesine bağlı olan ve 2013’ten beri TÜİK kayıtlarında ayrı mahalle olarak geçen bir sahil mahallesi. Çarmıklı Caddesi’ndeki Zülfü Livaneli Kültür Sanat ve Eğitim Merkezi mahallenin bilinen noktası; mahalle ilçe içinde yalnızca Mimaroba ve Güzelce ile komşu.",
      "Deniz kenarındaki evlerde hava zaman zaman nemli olabiliyor; yıkamanın sonunda fazla suyu iyice çekiyor, kurumayı hızlandırmak için pencere açmanızı ya da klima çalıştırmanızı öneriyoruz. Kadife ve açık renkli kumaşlarda kumaşa uygun ürünle çalışıyoruz.",
    ],
    nearby: ["mimaroba", "guzelce"],
    faq: [
      {
        q: "Sinanoba’nın sahil tarafına geliyor musunuz?",
        a: "Evet. Sahil şeridi dahil Sinanoba Mahallesi’nin tamamına geliyoruz.",
      },
      {
        q: "Kadife koltuk yıkıyor musunuz?",
        a: "Evet. Kadifede kumaşa uygun ürün kullanıyor, tüylerin yönünü bozmadan çalışıyoruz.",
      },
      {
        q: "Nemli havada koltuk ne kadar sürede kurur?",
        a: "Genellikle 4–8 saat sürer; nemli ve kapalı havalarda biraz uzayabilir. Pencere açmak, klima ya da nem alma cihazı çalıştırmak kurumayı hızlandırır.",
      },
      PRICE("Sinanoba’da"),
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/Sinanoba,_B%C3%BCy%C3%BCk%C3%A7ekmece",
    sources: [
      "https://tr.wikipedia.org/wiki/Sinanoba,_Büyükçekmece",
      "https://tr.wikipedia.org/wiki/Mimaroba",
      MUHTARLIK,
      nufus("140374", "sinanoba"),
      "https://kultursanat.bcekmece.bel.tr/mekan/sinanoba-zulfu-livaneli-kultur-sanat-ve-egt-m",
    ],
  },
  {
    slug: "turkoba",
    district: D,
    name: "Türkoba",
    heading: "Türkoba",
    officialName: "Türkoba Mahallesi",
    locative: "Türkoba’da",
    locativeAdj: "Türkoba’daki",
    dative: "Türkoba’ya",
    iAmIn: "Büyükçekmece Türkoba Mahallesi’ndeyim",
    image: "sahne-ogrenci-evi",
    imageAlt: "Küçük kiralık dairede çekyatın makineyle yıkanması",
    description:
      "Büyükçekmece Türkoba ve Tepekent’teki evlere makinemizle geliyoruz. Koltuk, çekyat ve yataklarınızı evinizde yıkıyoruz.",
    summary:
      "Türkoba, İstanbul Arel Üniversitesi Kemal Gözükara (Tepekent) Yerleşkesi’nin bulunduğu, Tepekent uydukentini kapsayan, Tepecik bölgesindeki iç kesim mahallesi. Aile evlerine de öğrenci ve kiralık dairelere de geliyor; çekyat ve yatakları da yıkıyoruz.",
    facts: [
      { label: "Konum", value: "Büyükçekmece’nin kuzeybatısında, Tepecik bölgesinde, iç kesimde; Çatalca sınırında" },
      { label: "Komşu mahalleler", value: "Hürriyet, Bahçelievler, Güzelce, Murat Çeşme, Kamiloba (Çatalca Muratbey Merkez)" },
      { label: "Nüfus", value: "15.138 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "İstanbul Arel Üniversitesi Tepekent Yerleşkesi, Tepekent uydukenti" },
    ],
    about: [
      "Türkoba, Erguvan Sokak’taki İstanbul Arel Üniversitesi Kemal Gözükara (Tepekent) Yerleşkesi’nin bulunduğu mahalle; üniversite yerleşkesini “Tepekent uydukenti içinde” olarak tanımlıyor. Denize kıyısı olmayan mahalle, ilçe içinde beş mahalleyle, kuzeyde ise Çatalca’nın Muratbey Merkez Mahallesi ile komşu.",
      "Üniversiteye yakın olduğu için mahallede kiralık daireler de var. Taşınma öncesi ya da sonrası koltuk, çekyat ve yatak yıkatmak isteyenlere makinemizle geliyor, hepsini aynı randevuda yıkıyoruz.",
    ],
    nearby: ["hurriyet", "bahcelievler", "guzelce", "murat-cesme", "kamiloba"],
    faq: [
      {
        q: "Tepekent’teki evlere geliyor musunuz?",
        a: "Evet. Tepekent uydukenti ve Arel Üniversitesi çevresi dahil Türkoba Mahallesi’nin tamamına geliyoruz.",
      },
      {
        q: "Taşınırken koltuk ve yatağı birlikte yıkatabilir miyim?",
        a: "Evet. Koltuk, çekyat ve yatakları aynı randevuda yıkıyoruz; fotoğraflarını gönderirseniz toplam fiyatı veriyoruz.",
      },
      {
        q: "Küçük bir dairede yıkama yapabiliyor musunuz?",
        a: "Evet. Makinemiz kompakt; koltuğun çevresinde yarım metre kadar boşluk olması yeterli.",
      },
      PRICE("Türkoba’da"),
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/T%C3%BCrkoba,_B%C3%BCy%C3%BCk%C3%A7ekmece",
    sources: [
      "https://tr.wikipedia.org/wiki/Türkoba,_Büyükçekmece",
      MUHTARLIK,
      nufus("40892", "turkoba"),
      "https://kalite.arel.edu.tr/wp-content/uploads/2025/02/2017-–-Kurum-Ic-Degerlendirme-Raporu.pdf",
    ],
  },
  {
    slug: "ulus",
    district: D,
    name: "Ulus",
    heading: "Büyükçekmece Ulus",
    officialName: "Ulus Mahallesi",
    locative: "Büyükçekmece Ulus’ta",
    locativeAdj: "Büyükçekmece Ulus’taki",
    dative: "Büyükçekmece Ulus’a",
    iAmIn: "Büyükçekmece Ulus Mahallesi’ndeyim",
    image: "sahne-berjer",
    imageAlt: "Desenli kumaş berjerin oturma yerinin makineyle yıkanması",
    description:
      "Büyükçekmece Ulus Mahallesi ve Tepecik’teki evinize geliyoruz. Koltuk, berjer ve takımlarınızı evinizde, makineyle yıkıyoruz.",
    summary:
      "Büyükçekmece’nin Ulus Mahallesi, 1988’de belde olan Tepecik’in merkezi; Büyükçekmece Gölü kıyısında, Büyükçekmece–Çatalca yolu üzerinde yer alıyor. Tepepark AVM ve Tepecik Nejat Uygur Eğitim ve Kültür Merkezi bu mahallede; berjer ve takımları da yerinde yıkıyoruz.",
    facts: [
      { label: "Konum", value: "Büyükçekmece’nin kuzeyinde, Büyükçekmece Gölü kıyısında; Tepecik semtinin merkezi, Çatalca yolu üzerinde" },
      { label: "Komşu mahalleler", value: "Hürriyet, Mimarsinan, Murat Çeşme, Ahmediye" },
      { label: "Nüfus", value: "16.280 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "Tepepark AVM, Tepecik Nejat Uygur Eğitim ve Kültür Merkezi" },
    ],
    about: [
      "Ulus Mahallesi, 8 Aralık 1988’de belde olan Tepecik’in merkezi; Büyükçekmece Gölü kıyısında, Büyükçekmece–Çatalca yolu üzerinde yer alıyor. Tepepark AVM ve Tepecik Nejat Uygur Eğitim ve Kültür Merkezi mahallenin bilinen noktaları. Beşiktaş’ta da Ulus Mahallesi bulunduğu için adresinizde Büyükçekmece’yi belirtin.",
      "Uzun yıllar kullanılan berjer ve desenli takımlarda önce iyice vakumluyor, lekelere ön işlem yapıyor, sonra makineyle yıkıyoruz. Göl kenarındaki evlerde fazla suyu iyice çekiyor, kuruma için havalandırma öneriyoruz.",
    ],
    nearby: ["hurriyet", "mimarsinan", "murat-cesme", "ahmediye"],
    faq: [
      {
        q: "Tepecik’teki evlere geliyor musunuz?",
        a: "Evet. Tepepark AVM çevresi dahil Tepecik’teki Ulus Mahallesi’nin tamamına ve komşu Hürriyet Mahallesi’ne geliyoruz.",
      },
      {
        q: "Eski berjer ve koltuklar yıkamaya uygun mu?",
        a: "Çoğu kumaş berjer ve koltuk yerinde yıkanabilir. Fotoğrafını gönderin; kumaş uygun değilse önceden söylüyoruz.",
      },
      {
        q: "Göl kenarındaki evde koltuk ne kadar sürede kurur?",
        a: "Genellikle 4–8 saat sürer; nemli havalarda biraz uzayabilir. Pencere açmak ya da klima çalıştırmak kurumayı hızlandırır.",
      },
      PRICE("Büyükçekmece Ulus Mahallesi’nde"),
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/Ulus,_B%C3%BCy%C3%BCk%C3%A7ekmece",
    sources: [
      "https://tr.wikipedia.org/wiki/Ulus,_Büyükçekmece",
      MUHTARLIK,
      nufus("40890", "ulus"),
      "https://kultursanat.bcekmece.bel.tr/mekan/tepecik-nejat-uygur-egitim-ve-kultur-merkezi",
      "https://www.bcekmece.bel.tr/kurumsal/liste/hizmet-noktalari",
    ],
  },
  {
    slug: "yenimahalle",
    district: D,
    name: "Yenimahalle",
    heading: "Büyükçekmece Yenimahalle",
    officialName: "Yenimahalle Mahallesi",
    locative: "Büyükçekmece Yenimahalle’de",
    locativeAdj: "Büyükçekmece Yenimahalle’deki",
    dative: "Büyükçekmece Yenimahalle’ye",
    iAmIn: "Büyükçekmece Yenimahalle Mahallesi’ndeyim",
    image: "bolge-avcilar",
    imageAlt: "Kumaş koltukta leke ön işlemi",
    description:
      "Büyükçekmece Yenimahalle’deki evinize geliyoruz. Koltuğunuzdaki lekelere ön işlem yapıp evinizde, makineyle yıkıyoruz.",
    summary:
      "Büyükçekmece’nin Yenimahalle’si, Marmara Denizi kıyısında, Kumburgaz ile Bahçelievler arasında yer alan, yaklaşık 2.600 kişilik küçük bir sahil mahallesi. Küçük mahallelere de makinemizle geliyor, koltuğunuzu evinizde yıkıyoruz.",
    facts: [
      { label: "Konum", value: "Büyükçekmece’nin batı kesiminde, Marmara Denizi kıyısında" },
      { label: "Komşu mahalleler", value: "Bahçelievler, Kumburgaz" },
      { label: "Nüfus", value: "2.569 (2025, ADNKS)" },
    ],
    about: [
      "Yenimahalle, güneyde Marmara Denizi, batıda Kumburgaz, doğu ve kuzeyde Bahçelievler mahalleleriyle çevrili küçük bir sahil mahallesi; yaklaşık 2.600 kişilik nüfusuyla ilçenin en az nüfuslu mahallelerinden biri. Bakırköy, Bağcılar, Küçükçekmece ve Gaziosmanpaşa’da da aynı adlı mahalleler olduğu için adresinizde Büyükçekmece’yi belirtin.",
      "Deniz kenarındaki evlerde yıkamanın sonunda fazla suyu iyice çekiyor, kuruma için havalandırma öneriyoruz. Lekelere önce kumaşa uygun ürünle ön işlem yapıyor, ardından makineyle yıkıyoruz.",
    ],
    nearby: ["bahcelievler", "kumburgaz"],
    faq: [
      {
        q: "Büyükçekmece Yenimahalle’ye geliyor musunuz?",
        a: "Evet. Yenimahalle’nin tamamına ve komşu Kumburgaz ile Bahçelievler’e makinemizle geliyoruz.",
      },
      {
        q: "Deniz kenarındaki evde koltuk ne kadar sürede kurur?",
        a: "Genellikle 4–8 saat sürer; nemli havalarda biraz uzayabilir. Fazla suyu iyice çektiğimiz için koltuk aynı gün kullanılabilir hâle gelir.",
      },
      {
        q: "Her leke çıkar mı?",
        a: "Yemek, içecek, ter ve toz lekelerinin büyük çoğunluğu çıkar. Çok eski, boya veya mürekkep lekelerinde sonucu işe başlamadan önce söylüyoruz.",
      },
      PRICE("Büyükçekmece Yenimahalle’de"),
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/Yenimahalle,_B%C3%BCy%C3%BCk%C3%A7ekmece",
    sources: ["https://tr.wikipedia.org/wiki/Yenimahalle,_Büyükçekmece", MUHTARLIK, nufus("40885", "yenimahalle")],
  },
];
