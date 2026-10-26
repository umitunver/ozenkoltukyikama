// Beylikdüzü mahalle sayfaları. Yerel bilgiler (sınırlar, nüfus, bilinen yerler) `sources` alanındaki
// kaynaklardan doğrulandı; doğrulanamayan bilgiler bilerek kullanılmadı.
// Nüfus: TÜİK ADNKS 2025 (nufusune.com tablosu). Konut yapısı: Beylikdüzü Kent Belleği, 2015 bina/konut verisi.

import type { Neighborhood } from "./neighborhoods";

const KENT_BELLEGI = "http://www.beylikduzukentbellegi.com/icerik/goruntule/327";
const NUFUS = "https://www.nufusune.com/beylikduzu-ilce-nufusu-istanbul";

export const beylikduzuNeighborhoods: Neighborhood[] = [
  {
    slug: "adnan-kahveci",
    district: "beylikduzu-koltuk-yikama",
    name: "Adnan Kahveci",
    heading: "Adnan Kahveci",
    officialName: "Adnan Kahveci Mahallesi",
    locative: "Adnan Kahveci’de",
    locativeAdj: "Adnan Kahveci’deki",
    dative: "Adnan Kahveci’ye",
    iAmIn: "Beylikdüzü Adnan Kahveci Mahallesi’ndeyim",
    image: "mahalle-adnan-kahveci",
    imageAlt: "Site dairesinde bej L koltuğun makineyle yıkanması",
    description:
      "Adnan Kahveci’deki site dairenize makinemizle geliyor, koltuk ve köşe takımınızı yerinde, derinlemesine yıkıyoruz. Fotoğraf gönderin, net fiyatı ve en yakın boş saati yazalım.",
    summary:
      "Adnan Kahveci, yaklaşık 111 bin kişiyle İstanbul’un en kalabalık mahallesi. Evlerin büyük bölümü çok katlı site bloklarında olduğu için randevudan önce blok, kat ve otopark bilgisini alıyor, makineyle doğrudan dairenize çıkıyoruz.",
    facts: [
      { label: "Konum", value: "Beylikdüzü’nün batısında, denize kıyısı olmayan iç kesimde; Büyükçekmece sınırında" },
      { label: "Komşu mahalleler", value: "Cumhuriyet, Barış, Kavaklı, Dereağzı, Gürpınar" },
      { label: "Nüfus", value: "111.164 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "Perlavista AVM, Yaşam Vadisi 2. Etap, Beylik Pazarı" },
    ],
    about: [
      "Adnan Kahveci Mahallesi, 2007’de yaklaşık 23 bin olan nüfusunu 2025’te 111 bine çıkararak İstanbul’un en kalabalık mahallesi oldu. 2015 verisine göre Beylikdüzü’ndeki konutların dörtte biri bu mahallede ve evlerin çoğu çok katlı site bloklarında. Perlavista AVM, Yaşam Vadisi’nin 2. etabı ve kaykay parkı da mahallenin sınırları içinde.",
      "Sitelerde gelişimizi önceden planlıyoruz: güvenliğe isminizi bırakmanız, misafir otoparkı varsa yerini söylemeniz yeterli. Makinemiz taşınabilir, asansörle dairenize çıkarıyoruz; sizin ek bir şey hazırlamanıza gerek yok. Site dairelerinde en sık köşe takımı ve açık renkli kumaş koltuk yıkıyoruz; fazla suyu iyice çektiğimiz için koltuk aynı gün kullanılabilir hâle gelir.",
    ],
    nearby: ["cumhuriyet", "baris", "kavakli", "dereagzi", "gurpinar"],
    faq: [
      {
        q: "Adnan Kahveci’deki sitelere geliyor musunuz?",
        a: "Evet. Perlavista AVM çevresinden Yaşam Vadisi’ne kadar Adnan Kahveci Mahallesi’nin tüm sitelerine geliyoruz. Güvenlikte isim bırakmanız yeterli; makineyle dairenize kadar çıkıyoruz.",
      },
      {
        q: "Yüksek katlı bloklarda makineyi nasıl çıkarıyorsunuz?",
        a: "Makinemiz taşınabilir; asansörle dairenize çıkarıyoruz. Asansör arızalıysa randevu sırasında haber verin, gelişimizi buna göre planlayalım.",
      },
      {
        q: "Köşe takımımın fiyatını nasıl öğrenirim?",
        a: "WhatsApp’tan köşe takımınızın fotoğrafını ve Adnan Kahveci’de olduğunuzu yazın. Kumaşa ve boyuta bakıp net fiyatı ve uygun saatleri ücretsiz iletiyoruz.",
      },
      {
        q: "Yıkadıktan sonra koltuğu ne zaman kullanabilirim?",
        a: "Koltuk kumaşa ve havaya göre genellikle 4–8 saatte kurur. Pencereleri açık tutmanız kurumayı hızlandırır; kuruyana kadar üzerine örtü sermemenizi öneririz.",
      },
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/Adnan_Kahveci,_Beylikd%C3%BCz%C3%BC",
    sources: [
      "https://tr.wikipedia.org/wiki/Adnan_Kahveci,_Beylikdüzü",
      NUFUS,
      KENT_BELLEGI,
      "https://www.perlavista.com/iletisim",
      "https://www.beylikduzu.istanbul/tesis/skate-park-kaykay-parki",
    ],
  },
  {
    slug: "baris",
    district: "beylikduzu-koltuk-yikama",
    name: "Barış",
    heading: "Barış Mahallesi",
    officialName: "Barış Mahallesi",
    locative: "Barış Mahallesi’nde",
    locativeAdj: "Barış Mahallesi’ndeki",
    dative: "Barış Mahallesi’ne",
    iAmIn: "Beylikdüzü Barış Mahallesi’ndeyim",
    image: "mahalle-baris",
    imageAlt: "Apartman dairesinde gri üçlü koltuğun yıkama öncesi vakumlanması",
    description:
      "Beylikdüzü Barış Mahallesi’ndeki apartman ve site dairelerine geliyor, koltuk, köşe takımı ve sandalyelerinizi evinizde yıkıyoruz. Taşıma yok; fotoğrafla ücretsiz fiyat.",
    summary:
      "Barış Mahallesi, E-5’e yakın kuzey kuşakta, küçük bir alana çok sayıda dairenin sığdığı yoğun bir mahalle. Apartman dairelerinde yıkamaya başlamadan önce koltuğu vakumluyor, zemini örtüyle koruyor ve işi bitirince ortalığı topluyoruz.",
    facts: [
      { label: "Konum", value: "Beylikdüzü’nün kuzeyinde, E-5’e yakın; Esenyurt Haramidere sınırında" },
      { label: "Komşu mahalleler", value: "Büyükşehir, Yakuplu, Kavaklı, Adnan Kahveci" },
      { label: "Nüfus", value: "55.725 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "Koral Berkin Kutlu Spor Tesisi ve Yüzme Havuzu, İbrahim Cevahir Camii" },
    ],
    about: [
      "Barış Mahallesi yaklaşık 2,6 km²’lik alanıyla Beylikdüzü’nün küçük mahallelerinden biri, ama ilçe nüfusunun önemli bir bölümünü barındırıyor; 2015 verisine göre ilçenin en yoğun ikinci mahallesi. Rıfat Ilgaz Caddesi’ndeki Koral Berkin Kutlu Spor Tesisi ve Eğitim Vadisi Bulvarı’ndaki İbrahim Cevahir Camii mahallenin bilinen noktaları.",
      "Yoğun apartman bloklarında otopark sınırlı olabiliyor; adresinizi yazarken binanın önünde kısa süreli park imkânı olup olmadığını belirtirseniz gelişimizi ona göre ayarlıyoruz. Dar salonlarda koltuğu yerinden fazla oynatmadan, zemini plastik örtüyle koruyarak çalışıyoruz.",
    ],
    nearby: ["buyuksehir", "yakuplu", "kavakli", "adnan-kahveci"],
    faq: [
      {
        q: "Beylikdüzü Barış Mahallesi’nin her yerine geliyor musunuz?",
        a: "Evet. Rıfat Ilgaz Caddesi’nden Eğitim Vadisi Bulvarı’na kadar Barış Mahallesi’nin tüm apartman ve sitelerine geliyoruz.",
      },
      {
        q: "Küçük bir salonda yıkama yapabiliyor musunuz?",
        a: "Evet. Makinemiz kompakt; koltuğu yerinden fazla oynatmadan, zemini örtüyle koruyarak çalışıyoruz. Koltuğun çevresinde yarım metre kadar boşluk olması yeterli.",
      },
      {
        q: "Binanın önüne park yeri yoksa ne oluyor?",
        a: "Adresinizi yazarken yakında kısa süreli park edilebilecek bir yer olup olmadığını belirtin. Makineyi kısa bir mesafe taşımamız sorun değil.",
      },
      {
        q: "Lekeli koltukta fiyat değişir mi?",
        a: "Fiyatı koltuğun türüne ve boyutuna göre veriyoruz; leke ön işlemi yıkamaya dahil. Çok eski veya boya lekelerinde ne kadarının çıkabileceğini işe başlamadan önce açıkça söylüyoruz.",
      },
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/Bar%C4%B1%C5%9F,_Beylikd%C3%BCz%C3%BC",
    sources: [
      "https://tr.wikipedia.org/wiki/Barış,_Beylikdüzü",
      NUFUS,
      KENT_BELLEGI,
      "https://www.beylikduzu.istanbul/tesis/koral-berkin-kutlu-spor-tesisi-ve-yuzme-havuzu",
      "https://www.gazetebirlik.com/gundem/beylikduzundeki-ibrahim-cevahir-camii-ibadete-acildi/54330",
    ],
  },
  {
    slug: "buyuksehir",
    district: "beylikduzu-koltuk-yikama",
    name: "Büyükşehir",
    heading: "Büyükşehir Mahallesi",
    officialName: "Büyükşehir Mahallesi",
    locative: "Büyükşehir Mahallesi’nde",
    locativeAdj: "Büyükşehir Mahallesi’ndeki",
    dative: "Büyükşehir Mahallesi’ne",
    iAmIn: "Beylikdüzü Büyükşehir Mahallesi’ndeyim",
    image: "mahalle-buyuksehir",
    imageAlt: "Yüksek katlı rezidans dairesinde gri köşe koltuk yıkama",
    description:
      "Beylikdüzü Büyükşehir Mahallesi’ndeki rezidans ve yüksek katlı site dairelerine geliyoruz. Koltuğunuzu taşımadan, evinizde makineyle derinlemesine yıkıyoruz.",
    summary:
      "Büyükşehir Mahallesi, Beylikdüzü Belediyesi ve Beylicium AVM’nin bulunduğu, ilçenin en yoğun ve en yüksek yapılaşmaya sahip mahallesi. Rezidans dairelerinde makinemizi asansörle çıkarıyor, yıkamayı tek ziyarette bitiriyoruz.",
    facts: [
      { label: "Konum", value: "Beylikdüzü’nün kuzeyinde, E-5 ve Esenyurt sınırında; ilçenin yönetim merkezi" },
      { label: "Komşu mahalleler", value: "Barış, Cumhuriyet" },
      { label: "Nüfus", value: "21.125 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "Beylikdüzü Belediyesi, Beylicium AVM, Erol Günaydın Sahnesi" },
    ],
    about: [
      "Büyükşehir, yaklaşık 1 km²’lik alanıyla Beylikdüzü’nün yüzölçümü en küçük ama yapılaşması en yoğun mahallesi; 2015 verisine göre bina başına ortalama 37 konut düşüyor, yani evlerin çoğu yüksek katlı rezidans ve site bloklarında. Beylikdüzü Belediyesi’nin ana binası, Beylicium AVM ve içindeki Erol Günaydın Sahnesi bu mahallede.",
      "Rezidanslarda yönetim ve güvenlik kuralları sıkı olabiliyor. Randevudan önce blok ve kat bilgisini, yük asansörü kullanılması gerekip gerekmediğini sorup gelişimizi buna göre planlıyoruz. Yüksek katlarda pencereler sınırlı açıldığı için yıkamanın sonunda fazla suyu özellikle iyi çekiyoruz.",
    ],
    nearby: ["baris", "cumhuriyet"],
    faq: [
      {
        q: "Rezidanslara ve yüksek katlara geliyor musunuz?",
        a: "Evet. Büyükşehir Mahallesi’ndeki rezidans ve site bloklarına makineyle geliyoruz. Yük asansörü kullanılması gerekiyorsa randevu sırasında haber vermeniz yeterli.",
      },
      {
        q: "Pencereleri az açılan dairede koltuk nasıl kurur?",
        a: "Yıkamanın sonunda fazla suyu iyice çektiğimiz için koltuk genellikle 4–8 saatte kurur. Klima veya vantilatör çalıştırmak ve kapıları açık tutmak kurumayı hızlandırır.",
      },
      {
        q: "Beylicium AVM çevresindeki sitelere de geliyor musunuz?",
        a: "Evet, Beylikdüzü Belediyesi ve Beylicium AVM çevresi dahil Büyükşehir Mahallesi’nin tamamına geliyoruz.",
      },
      {
        q: "Hafta içi akşam saatlerinde gelebilir misiniz?",
        a: `Çalışma saatlerimiz içinde size uyan saati birlikte seçiyoruz. WhatsApp’tan fotoğraf ve adres gönderin, en yakın boş saatleri yazalım.`,
      },
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/B%C3%BCy%C3%BCk%C5%9Fehir,_Beylikd%C3%BCz%C3%BC",
    sources: [
      "https://tr.wikipedia.org/wiki/Büyükşehir,_Beylikdüzü",
      NUFUS,
      KENT_BELLEGI,
      "https://www.beylikduzu.istanbul/iletisim",
      "https://www.beylikduzu.istanbul/tesis/erol-gunaydin-sahnesi",
    ],
  },
  {
    slug: "cumhuriyet",
    district: "beylikduzu-koltuk-yikama",
    name: "Cumhuriyet",
    heading: "Cumhuriyet Mahallesi",
    officialName: "Cumhuriyet Mahallesi",
    locative: "Cumhuriyet Mahallesi’nde",
    locativeAdj: "Cumhuriyet Mahallesi’ndeki",
    dative: "Cumhuriyet Mahallesi’ne",
    iAmIn: "Beylikdüzü Cumhuriyet Mahallesi’ndeyim",
    image: "mahalle-cumhuriyet",
    imageAlt: "Hardal rengi kumaş koltuktaki lekeye ön işlem uygulanması",
    description:
      "Beylikdüzü Cumhuriyet Mahallesi’ndeki evinize gelip koltuklarınızı yerinde yıkıyoruz. Lekelere kumaşa uygun ürünle ön işlem yapıyor, ardından makineyle derinlemesine temizliyoruz.",
    summary:
      "Beylikdüzü’nün Cumhuriyet Mahallesi, E-5 üzerindeki “Cumhuriyet Mahallesi” metrobüs durağının bulunduğu, Yaşam Vadisi’nin başladığı mahalle. Esenyurt ve Büyükçekmece’de de aynı adlı mahalle olduğu için adresinizde Beylikdüzü’nü belirtmeniz yeterli.",
    facts: [
      { label: "Konum", value: "Beylikdüzü’nün kuzeyinde, E-5 kenarında; “Cumhuriyet Mahallesi” metrobüs durağı" },
      { label: "Komşu mahalleler", value: "Büyükşehir, Barış, Adnan Kahveci" },
      { label: "Nüfus", value: "26.174 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "Atatürk Kültür ve Sanat Merkezi, Yaşam Vadisi 1. Etap, Rıfat Ilgaz Eğitim Tarihi Müzesi" },
    ],
    about: [
      "Cumhuriyet Mahallesi, Beylikdüzü’nde E-5’in hemen kenarında yer alıyor ve metrobüsle ulaşımı en kolay mahallelerden biri. Atatürk Bulvarı’ndaki Atatürk Kültür ve Sanat Merkezi ile Yaşam Vadisi’nin 1. etabı burada; 2016 verisine göre ilçedeki park alanlarının en büyük payı da bu mahallede.",
      "Mahallede orta ve yüksek katlı apartmanlar ağırlıkta. Ailelerin uzun yıllar kullandığı koltuklarda yemek, çay ve kahve lekeleri sık görülüyor; bu lekelere önce kumaşa uygun ürünle ön işlem yapıyor, ardından makineyle yıkayıp kirli suyu geri çekiyoruz. Çok eski lekelerde ne kadarının çıkabileceğini işe başlamadan söylüyoruz.",
    ],
    nearby: ["buyuksehir", "baris", "adnan-kahveci"],
    faq: [
      {
        q: "Beylikdüzü Cumhuriyet Mahallesi’ne mi, Esenyurt’takine mi geliyorsunuz?",
        a: "İkisine de geliyoruz. Beylikdüzü, Esenyurt ve Büyükçekmece’de aynı adlı mahalleler olduğu için WhatsApp’ta adresinizle birlikte ilçeyi yazmanız yeterli.",
      },
      {
        q: "Eski çay ve kahve lekeleri çıkar mı?",
        a: "Çoğu çıkar ya da belirgin şekilde açılır. Lekeye önce kumaşa uygun ürünle ön işlem yapıyoruz. Çok eski veya kumaşın rengini almış lekelerde sonucu işe başlamadan önce açıkça söylüyoruz.",
      },
      {
        q: "Atatürk Bulvarı ve Yaşam Vadisi çevresine geliyor musunuz?",
        a: "Evet, Atatürk Kültür ve Sanat Merkezi ile Yaşam Vadisi 1. etap çevresi dahil Cumhuriyet Mahallesi’nin tamamına geliyoruz.",
      },
      {
        q: "Koltuk takımının tamamını aynı gün yıkıyor musunuz?",
        a: "Evet. 3+3+1+1 gibi bir takımı tek randevuda yıkıyoruz. Fotoğrafını gönderirseniz takımın tamamı için net fiyat veriyoruz.",
      },
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/Cumhuriyet,_Beylikd%C3%BCz%C3%BC",
    sources: [
      "https://tr.wikipedia.org/wiki/Cumhuriyet,_Beylikdüzü",
      NUFUS,
      KENT_BELLEGI,
      "https://en.wikipedia.org/wiki/Cumhuriyet_Mahallesi_(Metrobus)",
      "https://www.beylikduzu.istanbul/tesis/ataturk-kultur-sanat-merkezi",
      "https://www.beylikduzu.istanbul/tesis/yasam-vadisi-sanatla-yasam-atolyeleri",
    ],
  },
  {
    slug: "dereagzi",
    district: "beylikduzu-koltuk-yikama",
    name: "Dereağzı",
    heading: "Dereağzı",
    officialName: "Dereağzı Mahallesi",
    locative: "Dereağzı’nda",
    locativeAdj: "Dereağzı’ndaki",
    dative: "Dereağzı’na",
    iAmIn: "Beylikdüzü Dereağzı Mahallesi’ndeyim",
    image: "mahalle-dereagzi",
    imageAlt: "Çocuklu evde açık mavi kumaş koltuğun makineyle yıkanması",
    description:
      "Dereağzı’ndaki müstakil ev, villa ve site dairelerine geliyor, koltuklarınızı evinizde yıkıyoruz. Geniş oturma gruplarını tek randevuda bitiriyoruz.",
    summary:
      "Dereağzı, Beylikdüzü’nün denize kıyısı olan ve Yaşam Vadisi’nin denize ulaştığı mahallesi. 2007’den bu yana nüfusu dört katından fazla artan mahallede müstakil ve az katlı evler ağırlıkta; bahçeli evlerde koltukları da yerinde yıkıyoruz.",
    facts: [
      { label: "Konum", value: "Beylikdüzü’nün güneybatısında, Marmara Denizi kıyısında; Yaşam Vadisi’nin denize çıkışı" },
      { label: "Komşu mahalleler", value: "Adnan Kahveci, Gürpınar, Kavaklı, Sahil" },
      { label: "Nüfus", value: "21.965 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "Gürpınar Su Ürünleri Hali, Yaşam Vadisi sahil çıkışı" },
    ],
    about: [
      "Dereağzı Mahallesi yaklaşık 2,5 km’lik sahil şeridiyle Beylikdüzü’nün kıyı mahallelerinden biri. 2007’de 4.600 civarında olan nüfusu 2025’te 22 bine yaklaştı. 2015 verisine göre bina başına ortalama 1,6 konut düşüyor; yani evlerin çoğu müstakil veya az katlı. Adı Gürpınar olsa da İstanbul’un büyük balık hali Gürpınar Su Ürünleri Hali’nin adresi Dereağzı Mahallesi’nde görünüyor.",
      "Müstakil ve bahçeli evlerde genellikle birden fazla oturma grubu oluyor; salon takımı, bahçe minderleri ve yemek sandalyelerini aynı ziyarette yıkayabiliyoruz. Çocuklu evlerde yıkamadan sonra durulama yapıyor, kumaşta kalıntı bırakmıyoruz.",
    ],
    nearby: ["adnan-kahveci", "gurpinar", "kavakli", "sahil"],
    faq: [
      {
        q: "Dereağzı’ndaki villa ve müstakil evlere geliyor musunuz?",
        a: "Evet. Sahil şeridinden Adnan Kahveci sınırına kadar Dereağzı’nın tüm müstakil ev, villa ve sitelerine geliyoruz.",
      },
      {
        q: "Birden fazla oturma grubunu aynı gün yıkayabilir misiniz?",
        a: "Evet. Salon takımı, köşe koltuk, bahçe minderleri ve sandalyeleri tek randevuda yıkayabiliyoruz. Hepsinin fotoğrafını gönderirseniz toplam fiyatı birlikte veriyoruz.",
      },
      {
        q: "Kullandığınız ürünler çocuklar için güvenli mi?",
        a: "Evlerde kullanıma uygun, kumaşa zarar vermeyen ürünler kullanıyor ve yıkamanın sonunda durulama yapıyoruz; kumaşta ürün kalıntısı bırakmıyoruz.",
      },
      {
        q: "Bahçe minderlerini de yıkıyor musunuz?",
        a: "Kılıfı çıkmayan kumaş bahçe minderlerini yerinde yıkayabiliyoruz. Malzemesini görmek için fotoğrafını göndermeniz yeterli.",
      },
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/Derea%C4%9Fz%C4%B1,_Beylikd%C3%BCz%C3%BC",
    sources: [
      "https://tr.wikipedia.org/wiki/Dereağzı,_Beylikdüzü",
      NUFUS,
      KENT_BELLEGI,
      "https://www.milliyet.com.tr/gundem/bolge-adeta-karavan-mahallesine-dondu-vatandas-isyan-etti-sayilari-700e-dayandi-sahili-kullanamiyoruz-7491879",
      "https://www.ntv.com.tr/turkiye/galeri-beylikduzunde-kanalizasyon-suyu-denize-akti,dA6ZRpUiLEChVKNQbLcSig",
      "https://www.istiklal.com.tr/gundem/istanbulda-en-buyuk-balik-hali-nerede-hangi-balik-hali-toptan-alim-icin-uygun-896758h",
    ],
  },
  {
    slug: "gurpinar",
    district: "beylikduzu-koltuk-yikama",
    name: "Gürpınar",
    heading: "Gürpınar",
    officialName: "Gürpınar Mahallesi",
    locative: "Gürpınar’da",
    locativeAdj: "Gürpınar’daki",
    dative: "Gürpınar’a",
    iAmIn: "Beylikdüzü Gürpınar Mahallesi’ndeyim",
    image: "mahalle-gurpinar",
    imageAlt: "Bahçeli villada krem rengi büyük oturma grubunun yıkanması",
    description:
      "Gürpınar’daki bahçeli ev, villa ve yazlıklara geliyoruz. Büyük oturma gruplarını, köşe takımlarını ve sandalyeleri evinizde, tek randevuda yıkıyoruz.",
    summary:
      "Gürpınar, Büyükçekmece Koyu’na bakan, Beylikdüzü’nün en batıdaki kıyı mahallesi ve ilçenin üç tarihî köy merkezinden biri. Yazın nüfusu artan mahallede sezon açılışında uzun süre kapalı kalmış koltukların toz ve rutubet kokusunu yıkamayla gideriyoruz.",
    facts: [
      { label: "Konum", value: "Beylikdüzü’nün en batısında, Büyükçekmece Koyu ve Marmara Denizi kıyısında" },
      { label: "Komşu mahalleler", value: "Dereağzı, Adnan Kahveci (batıda Büyükçekmece)" },
      { label: "Nüfus", value: "20.388 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "Gürpınar Sahili ve halk plajı, Zübeyde Ana Sosyal Yaşam Merkezi, Aşık Veysel Sahnesi" },
    ],
    about: [
      "1961’e kadar adı Anarşa olan Gürpınar, Kavaklı ve Yakuplu ile birlikte Beylikdüzü’nün üç tarihî köy merkezinden biri; 1987’de belde oldu, 2008’de Beylikdüzü’ne bağlandı. Büyükçekmece Koyu’na bakan sahili ve halk plajıyla bilinen mahallede yapılaşma orta ve az katlı; 2015 verisine göre bina başına ortalama 3,8 konut düşüyor.",
      "Bahçeli evlerde ve yazlıklarda büyük U ve L köşe takımları, bahçe minderleri ve yemek sandalyeleri sık oluyor; hepsini aynı ziyarette yıkayabiliyoruz. Uzun süre kapalı kalan evlerde önce koltuğu iyice vakumluyor, ardından yıkayıp fazla suyu çekiyoruz. Kuruma için pencereleri açık tutmanızı öneriyoruz.",
    ],
    nearby: ["dereagzi", "adnan-kahveci"],
    faq: [
      {
        q: "Gürpınar’daki yazlık evlere geliyor musunuz?",
        a: "Evet. Sezon açılışında veya kapanışında koltuk, minder ve yatakları tek randevuda yıkayabiliyoruz.",
      },
      {
        q: "Uzun süre kapalı kalan koltuktaki rutubet kokusu gider mi?",
        a: "Çoğu durumda belirgin şekilde azalır ya da tamamen gider. Koku süngerin içine işlemişse bunu yıkamadan önce açıkça söylüyoruz.",
      },
      {
        q: "Büyük U köşe takımını evde yıkayabiliyor musunuz?",
        a: "Evet. Köşe takımını sökmeden, minderleriyle birlikte yerinde yıkıyoruz. Fotoğrafını gönderirseniz boyutuna göre net fiyat veriyoruz.",
      },
      {
        q: "Gürpınar sahiline yakın evlere de geliyor musunuz?",
        a: "Evet, sahil şeridi dahil Gürpınar Mahallesi’nin tamamına geliyoruz.",
      },
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/G%C3%BCrp%C4%B1nar,_Beylikd%C3%BCz%C3%BC",
    sources: [
      "https://tr.wikipedia.org/wiki/Gürpınar,_Beylikdüzü",
      NUFUS,
      KENT_BELLEGI,
      "https://www.beylikduzu.istanbul/tesis/5-zubeyde-ana-sosyal-yasam-merkezi",
      "https://www.beylikduzu.istanbul/tesis/asik-veysel-sahnesi",
      "https://www.enuygun.com/bilgi/beylikduzu-nde-gezilecek-yerler/",
    ],
  },
  {
    slug: "kavakli",
    district: "beylikduzu-koltuk-yikama",
    name: "Kavaklı",
    heading: "Kavaklı",
    officialName: "Kavaklı Mahallesi",
    locative: "Kavaklı’da",
    locativeAdj: "Kavaklı’daki",
    dative: "Kavaklı’ya",
    iAmIn: "Beylikdüzü Kavaklı Mahallesi’ndeyim",
    image: "mahalle-kavakli",
    imageAlt: "Minderli yemek sandalyesinin makineyle yıkanması",
    description:
      "Kavaklı’daki site, apartman ve müstakil evlere geliyoruz. Koltuk, köşe takımı ve minderli sandalyelerinizi evinizde, makineyle yıkıyoruz.",
    summary:
      "Kavaklı, Beylikdüzü’nün ilk yerleşim yeri ve son on yılın en hızlı büyüyen büyük mahallesi; nüfusu 2015’ten 2025’e yaklaşık üç katına çıktı. Müstakil evlerden apartman ve sitelere kadar mahalledeki her ev tipine makineyle geliyoruz.",
    facts: [
      { label: "Konum", value: "Beylikdüzü’nün ortasında, Kavaklı Dere vadisi boyunca; kıyıyla arasında Sahil Mahallesi var" },
      { label: "Komşu mahalleler", value: "Barış, Adnan Kahveci, Dereağzı, Sahil, Marmara, Yakuplu" },
      { label: "Nüfus", value: "67.292 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "Fatma Ana Cemevi ve Kültür Merkezi, Öğretmen Fedai Altun Kapalı Spor Salonu, Yaşar Acar Fen Lisesi" },
    ],
    about: [
      "Eski adı Gardan olan Kavaklı, kavak ağaçlarından adını alan ve Beylikdüzü’nün ilk yerleşim yeri sayılan mahalle; 1993’te belde oldu. 2015’te evlerin çoğu müstakil ve az katlıydı; o yıl 20 bin civarında olan nüfus 2025’te 67 bini geçti. Mahalle, altı Beylikdüzü mahallesiyle komşu.",
      "Kavaklı Sahili olarak bilinen kıyı şeridi idari olarak Sahil Mahallesi’ne ait; Kavaklı’nın kendisi iç kesimde. Koltukların yanında minderli yemek sandalyelerini de aynı randevuda, kumaşın türüne uygun ürünle tek tek yıkıyoruz.",
    ],
    nearby: ["baris", "adnan-kahveci", "dereagzi", "sahil", "marmara", "yakuplu"],
    faq: [
      {
        q: "Kavaklı’daki sitelere ve müstakil evlere geliyor musunuz?",
        a: "Evet. Kavaklı Mahallesi’nin tüm sitelerine, apartmanlarına ve müstakil evlerine makineyle geliyoruz.",
      },
      {
        q: "Yemek sandalyelerini koltukla birlikte yıkıyor musunuz?",
        a: "Evet. Minderli sandalyeleri aynı randevuda yıkıyoruz; fiyatı adet üzerinden veriyoruz. Sandalyelerin ve koltuğun fotoğrafını birlikte göndermeniz yeterli.",
      },
      {
        q: "Kavaklı Sahili tarafına da geliyor musunuz?",
        a: "Evet. Sahil şeridi idari olarak Sahil Mahallesi’ne ait; oraya da, Kavaklı’nın iç kesimlerine de geliyoruz.",
      },
      {
        q: "Evcil hayvan tüyü ve kokusu çıkar mı?",
        a: "Yıkamadan önce koltuğu vakumlayıp tüyleri alıyoruz. Koku çoğu durumda belirgin şekilde azalır ya da tamamen gider; süngere işlemişse bunu yıkamadan önce söylüyoruz.",
      },
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/Kavakl%C4%B1,_Beylikd%C3%BCz%C3%BC",
    sources: [
      "https://tr.wikipedia.org/wiki/Kavaklı,_Beylikdüzü",
      NUFUS,
      KENT_BELLEGI,
      "https://www.beylikduzu.istanbul/tesis/beylikduzu-fatma-ana-cemevi-ve-kultur-merkezi",
      "https://www.beylikduzu.istanbul/tesis/ogretmen-fedai-altun-kapali-spor-salonu",
    ],
  },
  {
    slug: "marmara",
    district: "beylikduzu-koltuk-yikama",
    name: "Marmara",
    heading: "Marmara Mahallesi",
    officialName: "Marmara Mahallesi",
    locative: "Marmara Mahallesi’nde",
    locativeAdj: "Marmara Mahallesi’ndeki",
    dative: "Marmara Mahallesi’ne",
    iAmIn: "Beylikdüzü Marmara Mahallesi’ndeyim",
    image: "mahalle-marmara",
    imageAlt: "Yatak odasında çift kişilik yatağın makineyle yıkanması",
    description:
      "Beylikdüzü Marmara Mahallesi’ndeki deniz kenarı site ve evlere geliyoruz. Koltuk, köşe takımı ve yataklarınızı evinizde yıkıyoruz.",
    summary:
      "Marmara Mahallesi, West İstanbul Marina’nın bulunduğu, Ambarlı Limanı’na komşu kıyı mahallesi. Orta ve az katlı yapıların çoğunlukta olduğu mahallede koltukların yanında yatak yıkamayı da aynı ziyarette yapıyoruz.",
    facts: [
      { label: "Konum", value: "Beylikdüzü’nün güneydoğusunda, Marmara Denizi kıyısında; Ambarlı Limanı’na komşu" },
      { label: "Komşu mahalleler", value: "Yakuplu, Kavaklı, Sahil" },
      { label: "Nüfus", value: "31.850 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "West İstanbul Marina, Özgecan Aslan Kültür Merkezi, Yakuplu Sosyal Tesisleri" },
    ],
    about: [
      "Marmara Mahallesi, eski adreslerde “Yakuplu Marmara” olarak da geçen, Beylikdüzü’nün marina ve liman tarafındaki kıyı mahallesi. 2011’den beri hizmet veren West İstanbul Marina ve Özgecan Aslan Kültür Merkezi burada; adına rağmen Yakuplu Sosyal Tesisleri de Marmara Mahallesi sınırları içinde. 2015 verisine göre bina başına ortalama 4,5 konut düşüyor, yani yapılaşma orta ve az katlı.",
      "Deniz kenarındaki evlerde yıkamanın sonunda fazla suyu özellikle iyi çekiyor, kuruma için nasıl havalandırmanız gerektiğini anlatıyoruz. Koltukla birlikte yatak yıkatmak isteyenler için yatağın iki yüzünü de aynı randevuda yıkıyoruz.",
    ],
    nearby: ["yakuplu", "kavakli", "sahil"],
    faq: [
      {
        q: "Beylikdüzü Marmara Mahallesi’nin tamamına geliyor musunuz?",
        a: "Evet. West İstanbul Marina çevresinden Yakuplu sınırına kadar Marmara Mahallesi’nin tüm site ve evlerine geliyoruz.",
      },
      {
        q: "Yatak yıkamayı koltukla aynı gün yapıyor musunuz?",
        a: "Evet. Tek ve çift kişilik yatakların iki yüzünü koltuklarla aynı randevuda yıkıyoruz. Yatak da genellikle birkaç saat içinde kurur.",
      },
      {
        q: "Deniz kenarındaki evde koltuk ne kadar sürede kurur?",
        a: "Genellikle 4–8 saat sürer; hava nemli ve kapalıysa biraz uzayabilir. Pencere açmak, klima ya da nem alma cihazı çalıştırmak kurumayı hızlandırır.",
      },
      {
        q: "Kadife koltuk yıkıyor musunuz?",
        a: "Evet. Kadifede kumaşa uygun ürün kullanıyor, tüylerin yönünü bozmadan çalışıyoruz. Fotoğrafını gönderirseniz kumaşı görüp fiyat veriyoruz.",
      },
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/Marmara,_Beylikd%C3%BCz%C3%BC",
    sources: [
      "https://tr.wikipedia.org/wiki/Marmara,_Beylikdüzü",
      NUFUS,
      KENT_BELLEGI,
      "https://coastguidetr.com/en/marina/500040101/west-istanbul-marina",
      "https://www.beylikduzu.istanbul/tesis/ozgecan-aslan-kultur-merkezi",
      "https://www.beylikduzu.istanbul/tesis/yakuplu-sosyal-tesisleri",
    ],
  },
  {
    slug: "sahil",
    district: "beylikduzu-koltuk-yikama",
    name: "Sahil",
    heading: "Sahil Mahallesi",
    officialName: "Sahil Mahallesi",
    locative: "Sahil Mahallesi’nde",
    locativeAdj: "Sahil Mahallesi’ndeki",
    dative: "Sahil Mahallesi’ne",
    iAmIn: "Beylikdüzü Sahil Mahallesi’ndeyim",
    image: "mahalle-sahil",
    imageAlt: "Deniz manzaralı dairede lacivert kadife koltuğun yıkanması",
    description:
      "Beylikdüzü Sahil Mahallesi’ndeki deniz kenarı ev ve sitelere geliyoruz. Koltuğunuzu taşımadan, evinizde makineyle yıkıyor, kurumaya kadar ne yapmanız gerektiğini anlatıyoruz.",
    summary:
      "Sahil Mahallesi, Kavaklı Sahili olarak bilinen kıyı şeridinin bulunduğu, baştan sona denize kıyısı olan ve 8 bini biraz aşan nüfusuyla Beylikdüzü’nün en az nüfuslu mahallesi. Az katlı ve müstakil evlerin çoğunlukta olduğu mahallede kadife ve açık renkli koltukları da yerinde yıkıyoruz.",
    facts: [
      { label: "Konum", value: "Beylikdüzü’nün güneyinde, kıyı şeridinin orta bölümünde" },
      { label: "Komşu mahalleler", value: "Kavaklı, Dereağzı, Marmara" },
      { label: "Nüfus", value: "8.374 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "Kavaklı Sahili ve sahil parkı" },
    ],
    about: [
      "Sahil Mahallesi, adının hakkını veren bir kıyı mahallesi: Beylikdüzü’nün yaklaşık 12 km’lik sahilinin orta bölümü bu mahallede ve halk arasında Kavaklı Sahili olarak bilinen yürüyüş ve spor alanı da burada. Küçük alanına rağmen 2016 verisine göre ilçedeki park alanlarının yüzde 14’ü bu mahallede. 2015 verisine göre bina başına ortalama 1,4 konut düşüyor; evlerin çoğu müstakil ve az katlı.",
      "Deniz kenarındaki evlerde hava zaman zaman nemli olabiliyor. Bu yüzden yıkamanın sonunda fazla suyu iyice çekiyor, kurumayı hızlandırmak için pencere açmanızı ya da klima, nem alma cihazı çalıştırmanızı öneriyoruz. Kadife ve açık renkli kumaşlarda kumaşa uygun ürünle çalışıyoruz.",
    ],
    nearby: ["kavakli", "dereagzi", "marmara"],
    faq: [
      {
        q: "Kavaklı Sahili’ne yakın evlere geliyor musunuz?",
        a: "Evet. Kavaklı Sahili olarak bilinen kıyı şeridi Sahil Mahallesi’nde; mahallenin tamamına makineyle geliyoruz.",
      },
      {
        q: "Nemli havada koltuk ne kadar sürede kurur?",
        a: "Genellikle 4–8 saat sürer; nemli ve kapalı havalarda biraz uzayabilir. Fazla suyu iyice çektiğimiz için koltuk aynı gün içinde kullanılabilir hâle gelir.",
      },
      {
        q: "Açık renkli koltuklarda iz kalır mı?",
        a: "Yıkamayı koltuğun tamamına eşit yaptığımız için iz ve hare kalmaz. Kuruyana kadar üzerine örtü sermemeniz yeterli.",
      },
      {
        q: "Müstakil eve makineyi nasıl getiriyorsunuz?",
        a: "Makinemiz taşınabilir; bahçe kapısından ya da merdivenle kendimiz taşıyoruz. Sizin bir şey hazırlamanıza gerek yok, koltuğun çevresini biraz boşaltmanız yeterli.",
      },
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/Sahil,_Beylikd%C3%BCz%C3%BC",
    sources: [
      "https://tr.wikipedia.org/wiki/Sahil,_Beylikdüzü",
      NUFUS,
      KENT_BELLEGI,
      "https://www.etstur.com/letsgo/beylikduzunde-gezilecek-yerler/",
    ],
  },
  {
    slug: "yakuplu",
    district: "beylikduzu-koltuk-yikama",
    name: "Yakuplu",
    heading: "Yakuplu",
    officialName: "Yakuplu Mahallesi",
    locative: "Yakuplu’da",
    locativeAdj: "Yakuplu’daki",
    dative: "Yakuplu’ya",
    iAmIn: "Beylikdüzü Yakuplu Mahallesi’ndeyim",
    image: "mahalle-yakuplu",
    imageAlt: "Eski apartman dairesinde kahverengi kumaş berjerin yıkanması",
    description:
      "Yakuplu’daki apartman, müstakil ev ve sitelere geliyoruz. Koltuk, berjer ve köşe takımlarınızı evinizde yıkıyor; asansörsüz binalarda makineyi kendimiz taşıyoruz.",
    summary:
      "Yakuplu, yaklaşık 7,3 km²’lik alanıyla Beylikdüzü’nün en büyük mahallesi; E-5’ten denize kadar uzanıyor ve ilçenin üç tarihî köy merkezinden biri. Eski apartmanlardan yeni sitelere kadar her ev tipine geliyor, asansörsüz binalarda makineyi merdivenle kendimiz çıkarıyoruz.",
    facts: [
      { label: "Konum", value: "Beylikdüzü’nün doğusunda, E-5’ten Marmara Denizi’ne kadar; Esenyurt ve Avcılar sınırında" },
      { label: "Komşu mahalleler", value: "Barış, Kavaklı, Marmara (doğuda Avcılar, kuzeyde Esenyurt)" },
      { label: "Nüfus", value: "58.863 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "Fatih Sultan Mehmet Kültür ve Sanat Merkezi, Rasim Öztekin Sahnesi, Yakuplu Kent Ormanı" },
    ],
    about: [
      "Yakuplu, 1993’te belde olan ve 2008’de Beylikdüzü’ne bağlanan tarihî bir köy merkezi. Alanı en geniş Beylikdüzü mahallesi olan Yakuplu’da 2015 verisine göre ilçedeki binaların dörtte biri bulunuyor; çoğu az katlı apartman ve müstakil ev. Fatih Sultan Mehmet Kültür ve Sanat Merkezi, Şehir Tiyatroları Rasim Öztekin Sahnesi ve İBB’nin Yakuplu Kent Ormanı mahallenin bilinen noktaları.",
      "Eski apartmanlarda asansör olmayabiliyor; makinemiz taşınabilir, merdivenle kendimiz çıkarıyoruz. Uzun yıllar kullanılmış berjer ve koltuklarda önce iyice vakumluyor, lekelere ön işlem yapıyor, sonra makineyle derinlemesine yıkıyoruz. Metrobüsle gelenlerin bildiği Beylikdüzü ve Güzelyurt durakları mahallenin hemen kuzeyinde, Esenyurt tarafında.",
    ],
    nearby: ["baris", "kavakli", "marmara"],
    faq: [
      {
        q: "Yakuplu’nun her yerine geliyor musunuz?",
        a: "Evet. E-5 tarafından sahile kadar Yakuplu Mahallesi’nin tüm apartman, site ve müstakil evlerine geliyoruz.",
      },
      {
        q: "Asansörsüz binalara geliyor musunuz?",
        a: "Evet. Makinemiz taşınabilir; merdivenle kendimiz çıkarıyoruz. Sizin bir şey hazırlamanıza gerek yok.",
      },
      {
        q: "Eski berjer ve koltuklar yıkamaya uygun mu?",
        a: "Çoğu kumaş koltuk ve berjer yerinde yıkanabilir. Kumaşın durumunu görmek için fotoğrafını gönderin; yıkamaya uygun değilse bunu önceden söylüyoruz.",
      },
      {
        q: "Fiyatı nasıl öğrenebilirim?",
        a: "WhatsApp’tan koltuğunuzun fotoğrafını ve Yakuplu’da olduğunuzu yazın; net fiyatı ve uygun saatleri ücretsiz iletelim.",
      },
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/Yakuplu,_Beylikd%C3%BCz%C3%BC",
    sources: [
      "https://tr.wikipedia.org/wiki/Yakuplu,_Beylikdüzü",
      NUFUS,
      KENT_BELLEGI,
      "https://www.beylikduzu.istanbul/tesis/fatih-sultan-mehmet-kultur-ve-sanat-merkezi",
      "https://www.beylikduzu.istanbul/tesis/sehir-tiyatrolari-rasim-oztekin-sahnesi",
      "https://www.gazetebirlik.com/istanbul-haberleri/mesele-kanal-degil-tamamen-duygusal/64480",
      "https://en.wikipedia.org/wiki/Beylikdüzü_(Metrobus)",
    ],
  },
];
