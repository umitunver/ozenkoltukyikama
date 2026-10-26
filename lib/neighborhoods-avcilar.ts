// Avcılar mahalle sayfaları. Mahalle listesi Avcılar Belediyesi, TÜİK (ADNKS) ve Vikipedi ile doğrulandı (10 mahalle).
// Sınırlar OSM idari sınırları + Vikipedi; parklar belediyenin mahalle sayfalarından. Doğrulanamayan bilgiler
// (ör. Murat Kölük Devlet Hastanesi'nin mahallesi, Ambarlı Limanı — Beylikdüzü'nde) bilerek kullanılmadı.
// Nüfus: TÜİK ADNKS 2025 (nufusune.com).

import type { Neighborhood } from "./neighborhoods";

const D = "avcilar-koltuk-yikama";
const BELEDIYE = "https://www.avcilar.bel.tr/mahalleler";
const NUFUS = "https://www.nufusune.com/avcilar-ilce-nufusu-istanbul";
const TARIH = "https://www.avcilar.bel.tr/sayfa/avcilar-tarihi";

export const avcilarNeighborhoods: Neighborhood[] = [
  {
    slug: "ambarli",
    district: D,
    name: "Ambarlı",
    heading: "Ambarlı",
    officialName: "Ambarlı Mahallesi",
    locative: "Ambarlı’da",
    locativeAdj: "Ambarlı’daki",
    dative: "Ambarlı’ya",
    iAmIn: "Avcılar Ambarlı Mahallesi’ndeyim",
    image: "mahalle-sahil",
    imageAlt: "Deniz manzaralı dairede lacivert kadife koltuğun yıkanması",
    description:
      "Avcılar Ambarlı’daki evinize makinemizle geliyor, koltuk ve köşe takımınızı yerinde yıkıyoruz. Fotoğraf gönderin, net fiyatı ve uygun saati yazalım.",
    summary:
      "Ambarlı, Avcılar’ın Marmara Denizi’ne kıyısı olan, Avcılar Belediyesi’nin ve Atatürk Evi’nin bulunduğu mahallesi; batıda Beylikdüzü’nün Yakuplu Mahallesi’yle komşu. Deniz kenarındaki evlerde yıkamanın sonunda fazla suyu iyice çekiyor, kuruma için nasıl havalandırmanız gerektiğini anlatıyoruz.",
    facts: [
      { label: "Konum", value: "Avcılar’ın güneybatısında, Marmara Denizi kıyısında; batıda Beylikdüzü sınırı" },
      { label: "Komşu mahalleler", value: "Cihangir, Merkez, Denizköşkler (batıda Beylikdüzü Yakuplu)" },
      { label: "Nüfus", value: "32.888 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "Avcılar Belediyesi, Atatürk Evi, Ulusal Egemenlik Parkı, Mübadele Anıtı Parkı" },
    ],
    about: [
      "Ambarlı, 1924 mübadelesinden önce küçük bir Rum köyüydü; mübadeleyle Selanik çevresinden gelen ailelerin yerleştiği köy, adını burada kurulan askerî ambarlardan alıyor ve 1934’te Avcılar köyüyle birleşti. Bugün Avcılar Belediyesi’nin hizmet binası, 2000 yılında açılan Atatürk Evi ve Mübadele Anıtı Parkı bu mahallede.",
      "Adı ona benzese de Ambarlı Limanı ve limanla ilgili tesislerin büyük kısmı komşu Beylikdüzü’nün Marmara Mahallesi’nde; Ambarlı Mahallesi ise sahil boyunca uzanan bir yerleşim. Deniz kenarındaki evlerde koltuğu yıkadıktan sonra fazla suyu özellikle iyi çekiyor, kurumayı hızlandırmak için pencere açmanızı ya da klima çalıştırmanızı öneriyoruz.",
    ],
    nearby: ["cihangir", "merkez", "denizkoskler", "beylikduzu-koltuk-yikama/yakuplu"],
    faq: [
      {
        q: "Avcılar Ambarlı’nın her yerine geliyor musunuz?",
        a: "Evet. Sahil şeridinden Cihangir sınırına kadar Ambarlı Mahallesi’nin tüm apartman ve sitelerine makinemizle geliyoruz.",
      },
      {
        q: "Deniz kenarındaki evde koltuk ne kadar sürede kurur?",
        a: "Genellikle 4–8 saat sürer; nemli ve kapalı havalarda biraz uzayabilir. Fazla suyu iyice çektiğimiz için koltuk aynı gün kullanılabilir hâle gelir.",
      },
      {
        q: "Beylikdüzü sınırındaki evlere de geliyor musunuz?",
        a: "Evet. Ambarlı’nın komşusu Beylikdüzü Yakuplu dahil Beylikdüzü’nün tüm mahallelerine de geliyoruz.",
      },
      {
        q: "Fiyatı nasıl öğrenebilirim?",
        a: "WhatsApp’tan koltuğunuzun fotoğrafını ve Ambarlı’da olduğunuzu yazın; net fiyatı ve uygun saatleri ücretsiz iletelim.",
      },
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/Ambarl%C4%B1,_Avc%C4%B1lar",
    sources: [
      "https://tr.wikipedia.org/wiki/Ambarlı,_Avcılar",
      BELEDIYE,
      NUFUS,
      TARIH,
      "https://www.avcilar.bel.tr/sayfa/ataturk-evi",
      "https://www.avcilar.bel.tr/mahalle/ambarli-mahallesi",
    ],
  },
  {
    slug: "cihangir",
    district: D,
    name: "Cihangir",
    heading: "Avcılar Cihangir",
    officialName: "Cihangir Mahallesi",
    locative: "Avcılar Cihangir’de",
    locativeAdj: "Avcılar Cihangir’deki",
    dative: "Avcılar Cihangir’e",
    iAmIn: "Avcılar Cihangir Mahallesi’ndeyim",
    image: "sahne-ogrenci-evi",
    imageAlt: "Küçük kiralık dairede çekyatın makineyle yıkanması",
    description:
      "Avcılar Cihangir’deki ev ve dairelere geliyor, koltuk, çekyat ve köşe takımlarınızı yerinde yıkıyoruz. Taşıma yok; fotoğrafla ücretsiz fiyat.",
    summary:
      "Avcılar’ın Cihangir Mahallesi, E-5 üzerinde, Cihangir–Üniversite Mahallesi metrobüs durağının bulunduğu ve İstanbul Gelişim Üniversitesi’nin yer aldığı kalabalık bir mahalle (Beyoğlu’ndaki Cihangir değil). Aile evlerine de öğrenci ve kiralık dairelere de geliyor; çekyat ve küçük koltukları da yıkıyoruz.",
    facts: [
      { label: "Konum", value: "Avcılar’ın batısında, E-5 (D-100) üzerinde; Cihangir–Üniversite Mahallesi metrobüs durağı sınırında" },
      { label: "Komşu mahalleler", value: "Ambarlı, Merkez, Üniversite, Mustafa Kemal Paşa (Beylikdüzü Yakuplu ve Esenyurt Turgut Özal sınırı)" },
      { label: "Nüfus", value: "60.632 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "İstanbul Gelişim Üniversitesi, Ahmet Dicle Parkı, Uğur Mumcu Parkı" },
    ],
    about: [
      "Cihangir, yaklaşık 61 bin kişilik nüfusuyla Avcılar’ın kalabalık mahallelerinden biri. E-5’in kenarında yer alıyor; Cihangir–Üniversite Mahallesi ve Mustafa Kemalpaşa metrobüs durakları mahallenin sınırında. İstanbul Gelişim Üniversitesi’nin rektörlük binası bu mahallede; batıda Beylikdüzü Yakuplu, kuzeyde Esenyurt Turgut Özal ile komşu.",
      "Üniversiteye yakın olduğu için mahallede kiralık ve öğrenci evleri de var. Taşınma öncesi ya da sonrası çekyat, kanepe ve yatak yıkatmak isteyenler için makinemizle geliyor, küçük dairelerde koltuğu fazla oynatmadan, zemini örtüyle koruyarak çalışıyoruz.",
    ],
    nearby: ["ambarli", "merkez", "universite", "mustafa-kemal-pasa", "beylikduzu-koltuk-yikama/yakuplu", "esenyurt-koltuk-yikama/turgut-ozal"],
    faq: [
      {
        q: "Avcılar Cihangir ile Beyoğlu Cihangir’e mi geliyorsunuz?",
        a: "Biz Avcılar’daki Cihangir Mahallesi’ne geliyoruz. Hizmet bölgemiz Avcılar, Beylikdüzü, Esenyurt ve Büyükçekmece.",
      },
      {
        q: "Kiralık daireden çıkarken koltuk ve yatak yıkatabilir miyim?",
        a: "Evet. Çekyat, kanepe, köşe takımı ve yatakları aynı randevuda yıkıyoruz. Fotoğraflarını gönderirseniz toplam fiyatı birlikte veriyoruz.",
      },
      {
        q: "Gelişim Üniversitesi çevresine geliyor musunuz?",
        a: "Evet, Gelişim Üniversitesi ve metrobüs çevresi dahil Cihangir Mahallesi’nin tamamına geliyoruz.",
      },
      {
        q: "Küçük bir dairede yıkama yapabiliyor musunuz?",
        a: "Evet. Makinemiz kompakt; koltuğun çevresinde yarım metre kadar boşluk olması yeterli.",
      },
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/Cihangir,_Avc%C4%B1lar",
    sources: [
      "https://tr.wikipedia.org/wiki/Cihangir,_Avcılar",
      BELEDIYE,
      NUFUS,
      "https://www.avcilar.bel.tr/mahalle/cihangir-mahallesi",
    ],
  },
  {
    slug: "denizkoskler",
    district: D,
    name: "Denizköşkler",
    heading: "Denizköşkler",
    officialName: "Denizköşkler Mahallesi",
    locative: "Denizköşkler’de",
    locativeAdj: "Denizköşkler’deki",
    dative: "Denizköşkler’e",
    iAmIn: "Avcılar Denizköşkler Mahallesi’ndeyim",
    image: "sahne-kirli-su-tanki",
    imageAlt: "Yıkama sonrası makinenin kirli su haznesinin ev sahibine gösterilmesi",
    description:
      "Avcılar Denizköşkler’deki evinize geliyor, koltuklarınızı yerinde, derinlemesine yıkıyoruz. Yıkama bitince çekilen kirli suyu size gösteriyoruz.",
    summary:
      "Denizköşkler, Avcılar’ın Marmara Denizi kıyısındaki, sahil parkı ve İBB Avcılar Sosyal Tesisi’nin bulunduğu mahallesi; kuzeyinde E-5 ve İBB Sosyal Tesisleri metrobüs durağı var. Koltuğu yıkarken kirle birlikte geri çektiğimiz suyu yıkama sonunda size gösteriyoruz.",
    facts: [
      { label: "Konum", value: "Avcılar’ın güneydoğusunda, Marmara Denizi kıyısında; Küçükçekmece Gölü’nün denize açıldığı yere yakın" },
      { label: "Komşu mahalleler", value: "Gümüşpala, Merkez, Ambarlı (doğuda Küçükçekmece)" },
      { label: "Nüfus", value: "39.439 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "İBB Avcılar Sosyal Tesisi, Avcılar Sahil Parkı, Alma Ata Parkı" },
    ],
    about: [
      "Denizköşkler, Avcılar’ın sahil mahallelerinden biri; güneyi Marmara Denizi, doğusu Küçükçekmece Gölü’nün denize açıldığı yerin karşısında Küçükçekmece ilçesi. 2008’de açılan İBB Avcılar Sosyal Tesisi ve sahil parkı bu mahallede; kuzey sınırını oluşturan E-5 üzerinde İBB Sosyal Tesisleri metrobüs durağı var.",
      "Yıkamada önce koltuğu vakumluyor, lekelere ön işlem yapıyor, sonra suyu kumaşın içine püskürtüp kirle birlikte geri çekiyoruz. Çekilen kirli suyu iş bitince size gösteriyoruz; deniz kenarındaki evlerde kurumayı hızlandırmak için nasıl havalandırmanız gerektiğini de anlatıyoruz.",
    ],
    nearby: ["gumuspala", "merkez", "ambarli"],
    faq: [
      {
        q: "Denizköşkler’in sahil tarafına da geliyor musunuz?",
        a: "Evet. Sahil şeridinden E-5’e kadar Denizköşkler Mahallesi’nin tamamına geliyoruz.",
      },
      {
        q: "Yıkamanın gerçekten temizlediğini nasıl anlarım?",
        a: "Koltuktan çektiğimiz kirli suyu makinenin haznesinde size gösteriyoruz. Ödemeyi de sonucu birlikte kontrol ettikten sonra alıyoruz.",
      },
      {
        q: "Nemli havada koltuk ne kadar sürede kurur?",
        a: "Genellikle 4–8 saat sürer; nemli ve kapalı havalarda biraz uzayabilir. Pencere açmak, klima ya da nem alma cihazı çalıştırmak kurumayı hızlandırır.",
      },
      {
        q: "Hangi koltukları yıkıyorsunuz?",
        a: "Tekli, ikili ve üçlü koltuklar, berjer, köşe takımı, minderli sandalye ve yatak yıkıyoruz. Kumaş, kadife ve keten kumaşlara uygun ürün kullanıyoruz.",
      },
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/Denizk%C3%B6%C5%9Fkler",
    sources: [
      "https://tr.wikipedia.org/wiki/Denizköşkler",
      BELEDIYE,
      NUFUS,
      "https://www.avcilar.bel.tr/mahalle/denizkoskler-mahallesi",
    ],
  },
  {
    slug: "firuzkoy",
    district: D,
    name: "Firuzköy",
    heading: "Firuzköy",
    officialName: "Firuzköy Mahallesi",
    locative: "Firuzköy’de",
    locativeAdj: "Firuzköy’deki",
    dative: "Firuzköy’e",
    iAmIn: "Avcılar Firuzköy Mahallesi’ndeyim",
    image: "sahne-gol-manzara",
    imageAlt: "Göl manzaralı dairede bej köşe koltuğun yıkanması",
    description:
      "Avcılar Firuzköy’deki evinize geliyoruz. Koltuk ve köşe takımlarınızı makinemizle evinizde yıkıyor, fazla suyu çekerek çabuk kurumasını sağlıyoruz.",
    summary:
      "Firuzköy, Küçükçekmece Gölü kıyısının büyük bölümünün bulunduğu, 1928’de Bulgaristan’dan gelen göçmenlerin kurduğu Avcılar mahallesi. Bathonea antik liman kazıları ve Atatürk Stadyumu da Firuzköy’de; göl kenarındaki evlere de makinemizle geliyoruz.",
    facts: [
      { label: "Konum", value: "Avcılar’ın doğusunda, Küçükçekmece Gölü kıyısında; Firuzköy Bulvarı üzerinde" },
      { label: "Komşu mahalleler", value: "Yeşilkent, Tahtakale, Mustafa Kemal Paşa, Üniversite (Esenyurt Akşemseddin, Namık Kemal, Saadetdere)" },
      { label: "Nüfus", value: "24.099 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "Bathonea antik liman kazıları, Atatürk Stadyumu ve Spor Kompleksi, Deli Orman Parkı" },
    ],
    about: [
      "Firuzköy, Mayıs 1928’de Bulgaristan’ın Balcıbük köyünden gelen göçmenlerin Firuz çiftliğini satın almasıyla kuruldu; 1930’da 72 hanede 365 kişinin yaşadığı köy, 1980’e kadar köy statüsündeydi. Küçükçekmece Gölü’ne uzanan yarımadada 2009’dan bu yana kazısı süren Bathonea antik liman yerleşimi ve 2012’de açılan Atatürk Stadyumu ve Spor Kompleksi mahallenin bilinen noktaları.",
      "Göl kıyısındaki evlerde nem zaman zaman yüksek olabiliyor; yıkamanın sonunda fazla suyu iyice çekiyor, kurumayı hızlandırmak için nasıl havalandırmanız gerektiğini anlatıyoruz. Firuzköy Bulvarı çevresindeki apartmanlardan göl tarafındaki evlere kadar mahallenin her yerine geliyoruz.",
    ],
    nearby: ["yesilkent", "tahtakale", "mustafa-kemal-pasa", "universite", "esenyurt-koltuk-yikama/saadetdere", "esenyurt-koltuk-yikama/aksemseddin"],
    faq: [
      {
        q: "Firuzköy’ün göl tarafındaki evlere geliyor musunuz?",
        a: "Evet. Firuzköy Bulvarı’ndan Küçükçekmece Gölü kıyısına kadar Firuzköy Mahallesi’nin tamamına geliyoruz.",
      },
      {
        q: "Göl kenarındaki evde koltuk ne kadar sürede kurur?",
        a: "Genellikle 4–8 saat sürer; nemli havalarda biraz uzayabilir. Fazla suyu iyice çektiğimiz için koltuk aynı gün kullanılabilir hâle gelir.",
      },
      {
        q: "Esenyurt sınırındaki evlere de geliyor musunuz?",
        a: "Evet. Firuzköy’ün komşusu Esenyurt’un Akşemseddin, Namık Kemal ve Saadetdere mahalleleri dahil Esenyurt’un tamamına geliyoruz.",
      },
      {
        q: "Ödemeyi ne zaman yapıyorum?",
        a: "Ödemeyi iş bittikten ve sonucu birlikte kontrol ettikten sonra yapıyorsunuz. Nakit veya havale/EFT kabul ediyoruz.",
      },
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/Firuzk%C3%B6y,_Avc%C4%B1lar",
    sources: [
      "https://tr.wikipedia.org/wiki/Firuzköy,_Avcılar",
      BELEDIYE,
      NUFUS,
      TARIH,
      "https://www.avcilar.bel.tr/sayfa/ataturk-stadyum-ve-spor-kompleksi",
      "https://www.avcilar.bel.tr/mahalle/firuzkoy-mahallesi",
    ],
  },
  {
    slug: "gumuspala",
    district: D,
    name: "Gümüşpala",
    heading: "Gümüşpala",
    officialName: "Gümüşpala Mahallesi",
    locative: "Gümüşpala’da",
    locativeAdj: "Gümüşpala’daki",
    dative: "Gümüşpala’ya",
    iAmIn: "Avcılar Gümüşpala Mahallesi’ndeyim",
    image: "sahne-asansorsuz-merdiven",
    imageAlt: "Asansörsüz apartmanda yıkama makinesinin merdivenle taşınması",
    description:
      "Avcılar Gümüşpala’daki evinize geliyoruz. Asansörsüz binalarda makineyi merdivenle kendimiz taşıyor, koltuğunuzu evinizde yıkıyoruz.",
    summary:
      "Gümüşpala, Avcılar’da E-5 üzerinde Şükrübey ve İBB Sosyal Tesisleri metrobüs duraklarının sınırında, Küçükçekmece Gölü kıyısına uzanan mahalle. Asansörü olmayan binalarda makinemizi merdivenle kendimiz çıkarıyoruz; sizin bir şey hazırlamanıza gerek yok.",
    facts: [
      { label: "Konum", value: "Avcılar’ın doğusunda, E-5 üzerinde; Küçükçekmece Gölü kıyısına uzanıyor" },
      { label: "Komşu mahalleler", value: "Merkez, Üniversite, Denizköşkler (doğuda Küçükçekmece)" },
      { label: "Nüfus", value: "36.857 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "Taşkent Parkı, Adnan Menderes Parkı, Şükrübey metrobüs durağı" },
    ],
    about: [
      "Gümüşpala, Avcılar’ın E-5 üzerindeki mahallelerinden biri; mahallenin sınırında Şükrübey ve İBB Sosyal Tesisleri olmak üzere iki metrobüs durağı var ve mahalle Küçükçekmece Gölü kıyısına kadar uzanıyor. Taşkent Parkı ve Adnan Menderes Parkı mahallenin bilinen yeşil alanları.",
      "Apartmanlarda asansör olmayabiliyor; makinemiz taşınabilir, merdivenle kendimiz çıkarıyoruz. Koltuğun çevresini biraz boşaltmanız yeterli; zemini plastik örtüyle koruyor, işi bitirince ortalığı toparlıyoruz.",
    ],
    nearby: ["merkez", "universite", "denizkoskler"],
    faq: [
      {
        q: "Gümüşpala’da asansörsüz binalara geliyor musunuz?",
        a: "Evet. Makinemiz taşınabilir; merdivenle kendimiz çıkarıyoruz. Sizin bir şey hazırlamanıza gerek yok.",
      },
      {
        q: "Metrobüs çevresindeki sitelere de geliyor musunuz?",
        a: "Evet. Şükrübey ve İBB Sosyal Tesisleri durakları çevresi dahil Gümüşpala Mahallesi’nin tamamına geliyoruz.",
      },
      {
        q: "Yıkama ne kadar sürüyor?",
        a: "Üçlü bir koltuk genellikle bir saat civarında yıkanır; köşe takımı ve takımlarda süre artar. Kuruma kumaşa ve havaya göre 4–8 saat sürer.",
      },
      {
        q: "Fiyatı nasıl öğrenebilirim?",
        a: "WhatsApp’tan koltuğunuzun fotoğrafını ve Gümüşpala’da olduğunuzu yazın; net fiyatı ve uygun saatleri ücretsiz iletelim.",
      },
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/G%C3%BCm%C3%BC%C5%9Fpala,_Avc%C4%B1lar",
    sources: [
      "https://tr.wikipedia.org/wiki/Gümüşpala,_Avcılar",
      BELEDIYE,
      NUFUS,
      "https://www.avcilar.bel.tr/mahalle/gumuspala-mahallesi",
    ],
  },
  {
    slug: "merkez",
    district: D,
    name: "Merkez",
    heading: "Avcılar Merkez",
    officialName: "Merkez Mahallesi",
    locative: "Avcılar Merkez’de",
    locativeAdj: "Avcılar Merkez’deki",
    dative: "Avcılar Merkez’e",
    iAmIn: "Avcılar Merkez Mahallesi’ndeyim",
    image: "sahne-berjer",
    imageAlt: "Desenli kumaş berjerin oturma yerinin makineyle yıkanması",
    description:
      "Avcılar Merkez Mahallesi’ndeki evinize geliyor, koltuk, berjer ve köşe takımlarınızı yerinde yıkıyoruz. Fotoğraf gönderin, net fiyatı yazalım.",
    summary:
      "Avcılar Merkez Mahallesi, ilçenin ortasında, Avcılar Merkez–Üniversite Kampüsü ve Şükrübey metrobüs duraklarının sınırında yer alan, denize ve göle kıyısı olmayan mahalle. Klasik berjer ve desenli koltuklarda kumaşa uygun ürünle, rengi korumaya özen göstererek çalışıyoruz.",
    facts: [
      { label: "Konum", value: "Avcılar’ın ortasında, E-5 kenarında; Avcılar Merkez–Üniversite Kampüsü metrobüs durağı sınırında" },
      { label: "Komşu mahalleler", value: "Ambarlı, Denizköşkler, Üniversite, Cihangir, Gümüşpala" },
      { label: "Nüfus", value: "26.592 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "Atatürk Parkı, Erol Mumcu Parkı, Birsen Sokak Parkı" },
    ],
    about: [
      "Merkez Mahallesi, Avcılar’ın tam ortasında, dört bir yanı başka Avcılar mahalleleriyle çevrili; kuzeydoğu sınırı E-5. Avcılar Merkez–Üniversite Kampüsü ve Şükrübey metrobüs durakları mahallenin sınırında olduğu için ilçenin ulaşımı en kolay yerlerinden biri. İstanbul’un birçok ilçesinde “Merkez Mahallesi” bulunduğundan adresinizde Avcılar’ı belirtmeniz yeterli.",
      "Uzun yıllar kullanılan berjer, desenli kumaş koltuk ve takımlarda önce iyice vakumluyor, lekelere kumaşa uygun ürünle ön işlem yapıyor, sonra makineyle yıkıyoruz. Desenli kumaşlarda rengin akmaması için ürünü önce görünmeyen bir yerde deniyoruz.",
    ],
    nearby: ["ambarli", "denizkoskler", "universite", "cihangir", "gumuspala"],
    faq: [
      {
        q: "Avcılar Merkez Mahallesi’nin tamamına geliyor musunuz?",
        a: "Evet. Atatürk Parkı çevresinden metrobüs duraklarına kadar Merkez Mahallesi’nin tüm apartman ve sitelerine geliyoruz.",
      },
      {
        q: "Desenli koltuklarda renk akar mı?",
        a: "Ürünü önce koltuğun görünmeyen bir yerinde deniyoruz; kumaşa uygun ürünle çalıştığımız için renk akmaz. Riskli bir kumaşsa bunu yıkamadan önce söylüyoruz.",
      },
      {
        q: "Berjer ve tekli koltukları yıkıyor musunuz?",
        a: "Evet. Berjer, tekli koltuk ve puf gibi parçaları takımla birlikte ya da tek başına yıkıyoruz; fiyatı adet üzerinden veriyoruz.",
      },
      {
        q: "Ödemeyi ne zaman yapıyorum?",
        a: "Ödemeyi iş bittikten ve sonucu gördükten sonra yapıyorsunuz. Nakit veya havale/EFT kabul ediyoruz.",
      },
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/Merkez,_Avc%C4%B1lar",
    sources: [
      "https://tr.wikipedia.org/wiki/Merkez,_Avcılar",
      BELEDIYE,
      NUFUS,
      "https://www.avcilar.bel.tr/mahalle/merkez-mahallesi",
    ],
  },
  {
    slug: "mustafa-kemal-pasa",
    district: D,
    name: "Mustafa Kemal Paşa",
    heading: "Mustafa Kemal Paşa Mahallesi",
    officialName: "Mustafa Kemal Paşa Mahallesi",
    locative: "Mustafa Kemal Paşa Mahallesi’nde",
    locativeAdj: "Mustafa Kemal Paşa Mahallesi’ndeki",
    dative: "Mustafa Kemal Paşa Mahallesi’ne",
    iAmIn: "Avcılar Mustafa Kemal Paşa Mahallesi’ndeyim",
    image: "sahne-cocuklu-ev",
    imageAlt: "Bej kumaş koltuktaki keçeli kalem lekesine ön işlem uygulanması",
    description:
      "Avcılar Mustafa Kemal Paşa Mahallesi’ndeki evinize geliyoruz. Çocuklu evlerde kalem, meyve suyu ve yemek lekelerine ön işlem yapıp koltuğunuzu yerinde yıkıyoruz.",
    summary:
      "Mustafa Kemal Paşa (resmî kayıtlarda Mustafa Kemalpaşa) Mahallesi, Avcılar’ın kuzeyinde, Parseller semtinde, Firuzköy Bulvarı ve Mareşal Caddesi çevresinde yer alıyor. Çocuklu evlerde kalem ve yiyecek lekelerine kumaşa uygun ürünle ön işlem yapıp makineyle yıkıyoruz.",
    facts: [
      { label: "Konum", value: "Avcılar’ın kuzeyinde, Parseller semtinde; Firuzköy Bulvarı ve Mareşal Caddesi çevresi" },
      { label: "Komşu mahalleler", value: "Cihangir, Üniversite, Firuzköy (Esenyurt Saadetdere ve Turgut Özal)" },
      { label: "Nüfus", value: "45.252 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "İBB Sabahattin Eyüboğlu Kütüphanesi, Kemalpaşa Camii, Mehmet Akif Ersoy Parkı" },
    ],
    about: [
      "Adını Mustafa Kemal Atatürk’ten alan mahalle, yaklaşık 0,93 km²’lik küçük alanında 45 bini aşan nüfusuyla Avcılar’ın yoğun mahallelerinden biri. Parseller semtinde, Firuzköy Bulvarı, Yıldırım Beyazıt Caddesi ve yayalaştırılan Mareşal Caddesi çevresinde yer alıyor; 2022’de açılan İBB Sabahattin Eyüboğlu Kütüphanesi de Firuzköy Bulvarı üzerinde, bu mahallede. Kuzeyde Esenyurt’un Saadetdere ve Turgut Özal mahalleleriyle komşu.",
      "Çocuklu evlerde koltuklarda keçeli kalem, meyve suyu ve yemek lekeleri sık görülüyor. Bu lekelere önce kumaşa uygun ürünle ön işlem yapıyor, ardından makineyle yıkıyor ve durulayarak kumaşta ürün kalıntısı bırakmıyoruz.",
    ],
    nearby: ["cihangir", "universite", "firuzkoy", "esenyurt-koltuk-yikama/saadetdere", "esenyurt-koltuk-yikama/turgut-ozal"],
    faq: [
      {
        q: "Parseller tarafındaki evlere geliyor musunuz?",
        a: "Evet. Parseller semti, Firuzköy Bulvarı ve Mareşal Caddesi çevresi dahil Mustafa Kemal Paşa Mahallesi’nin tamamına geliyoruz.",
      },
      {
        q: "Keçeli kalem lekesi çıkar mı?",
        a: "Çoğu durumda çıkar ya da belirgin şekilde açılır. Lekeye kumaşa uygun ürünle ön işlem yapıyoruz; kalemin türüne ve ne kadar beklediğine göre sonucu işe başlamadan önce söylüyoruz.",
      },
      {
        q: "Kullandığınız ürünler çocuklar için güvenli mi?",
        a: "Evlerde kullanıma uygun ürünler kullanıyor ve yıkamanın sonunda durulama yapıyoruz; kumaşta ürün kalıntısı bırakmıyoruz.",
      },
      {
        q: "Esenyurt Saadetdere sınırına da geliyor musunuz?",
        a: "Evet. Komşu Esenyurt Saadetdere ve Turgut Özal mahalleleri dahil Esenyurt’un tamamına geliyoruz.",
      },
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/Mustafa_Kemalpa%C5%9Fa,_Avc%C4%B1lar",
    sources: [
      "https://tr.wikipedia.org/wiki/Mustafa_Kemalpaşa,_Avcılar",
      BELEDIYE,
      NUFUS,
      "https://ataturkkitapligi.ibb.gov.tr/en/Kitaplik/Kutuphanelerimiz/IMM-Sabahattin-Eyuboglu-Library/40",
    ],
  },
  {
    slug: "tahtakale",
    district: D,
    name: "Tahtakale",
    heading: "Avcılar Tahtakale",
    officialName: "Tahtakale Mahallesi",
    locative: "Avcılar Tahtakale’de",
    locativeAdj: "Avcılar Tahtakale’deki",
    dative: "Avcılar Tahtakale’ye",
    iAmIn: "Avcılar Tahtakale Mahallesi’ndeyim",
    image: "sahne-havuzlu-site",
    imageAlt: "Havuzlu site dairesinde krem rengi koltuğun yıkanması",
    description:
      "Avcılar Tahtakale ve Ispartakule’deki site dairelerine geliyoruz. Koltuk ve köşe takımınızı taşımadan, evinizde makineyle yıkıyoruz.",
    summary:
      "Avcılar’ın Tahtakale Mahallesi, TEM otoyolunun geçtiği, Ispartakule bölgesindeki toplu konut ve site projelerinin bulunduğu mahalle (Eminönü’ndeki Tahtakale değil). Sitelerde gelişimizi güvenlik ve otopark bilgisine göre planlıyor, makineyle dairenize çıkıyoruz.",
    facts: [
      { label: "Konum", value: "Avcılar’ın kuzeyinde, Ispartakule bölgesinde; TEM (O-3) geçiyor, Küçükçekmece Gölü’nün kuzey kıyısına uzanıyor" },
      { label: "Komşu mahalleler", value: "Firuzköy (Başakşehir Bahçeşehir, Şamlar, Şahintepe; Küçükçekmece Yarımburgaz)" },
      { label: "Nüfus", value: "68.599 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "Tahtakale Gençlik Parkı, Tahtakale Kent Parkı, Şükriye Yoluç Merkez Camii" },
    ],
    about: [
      "Tahtakale, eskiden Firuzköy’ün tarım arazilerinin bir parçasıyken 1990’larda mahalle oldu; bugün yaklaşık 69 bin kişiyle Avcılar’ın en kalabalık ikinci mahallesi. TEM otoyolunun geçtiği mahallede Ispartakule bölgesindeki toplu konut ve site projeleri yer alıyor; kuzeyde Başakşehir’in Bahçeşehir ve Şamlar, batıda Küçükçekmece’nin Yarımburgaz mahalleleriyle komşu.",
      "Sitelerde güvenliğe isminizi bırakmanız, misafir otoparkının yerini söylemeniz yeterli; makinemiz taşınabilir, asansörle dairenize çıkarıyoruz. Site dairelerinde sık rastladığımız açık renkli köşe takımlarında kumaşa uygun ürünle çalışıp fazla suyu iyice çekiyoruz.",
    ],
    nearby: ["firuzkoy", "yesilkent"],
    faq: [
      {
        q: "Ispartakule’deki sitelere geliyor musunuz?",
        a: "Evet. Avcılar Tahtakale Mahallesi sınırları içindeki Ispartakule sitelerine geliyoruz. Bahçeşehir tarafındaki (Başakşehir) adresler için önce WhatsApp’tan adresinizi yazın.",
      },
      {
        q: "Eminönü Tahtakale’ye de geliyor musunuz?",
        a: "Hayır. Biz Avcılar’daki Tahtakale Mahallesi’ne geliyoruz; hizmet bölgemiz Avcılar, Beylikdüzü, Esenyurt ve Büyükçekmece.",
      },
      {
        q: "Sitede güvenlik izni gerekiyorsa ne yapmalıyım?",
        a: "Randevu sırasında haber vermeniz yeterli; isminizi bırakır, makineyle dairenize çıkarız.",
      },
      {
        q: "Köşe takımımın fiyatını nasıl öğrenirim?",
        a: "WhatsApp’tan köşe takımınızın fotoğrafını ve sitenizin adını yazın; net fiyatı ve uygun saatleri ücretsiz iletelim.",
      },
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/Tahtakale,_Avc%C4%B1lar",
    sources: [
      "https://tr.wikipedia.org/wiki/Tahtakale,_Avcılar",
      BELEDIYE,
      NUFUS,
      "https://www.avcilar.bel.tr/mahalle/tahtakale-mahallesi",
    ],
  },
  {
    slug: "universite",
    district: D,
    name: "Üniversite",
    heading: "Üniversite Mahallesi",
    officialName: "Üniversite Mahallesi",
    locative: "Üniversite Mahallesi’nde",
    locativeAdj: "Üniversite Mahallesi’ndeki",
    dative: "Üniversite Mahallesi’ne",
    iAmIn: "Avcılar Üniversite Mahallesi’ndeyim",
    image: "mahalle-baris",
    imageAlt: "Apartman dairesinde gri üçlü koltuğun yıkama öncesi vakumlanması",
    description:
      "Avcılar Üniversite Mahallesi’ndeki apartman ve site dairelerine geliyoruz. Koltuk, çekyat ve köşe takımlarınızı evinizde, makineyle yıkıyoruz.",
    summary:
      "Avcılar’ın Üniversite Mahallesi, İstanbul Üniversitesi-Cerrahpaşa Avcılar Yerleşkesi, Pelican Mall AVM ve Avcılar metrobüs aktarma noktasının bulunduğu, Küçükçekmece Gölü kıyısına uzanan mahalle. Nüfusu 2007’den bu yana iki katına çıkan mahallede her ev tipine makineyle geliyoruz.",
    facts: [
      { label: "Konum", value: "Avcılar’ın ortasında, E-5’in kuzeyinde; Küçükçekmece Gölü kıyısına uzanıyor, Avcılar metrobüs aktarma noktası" },
      { label: "Komşu mahalleler", value: "Merkez, Cihangir, Mustafa Kemal Paşa, Firuzköy, Gümüşpala" },
      { label: "Nüfus", value: "32.302 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "İÜ-Cerrahpaşa Avcılar Yerleşkesi, Pelican Mall AVM, Pelikan Parkı" },
    ],
    about: [
      "Üniversite Mahallesi adını, eski köy arazileri üzerinde kurulan İstanbul Üniversitesi (bugün İÜ-Cerrahpaşa) Avcılar Yerleşkesi’nden alıyor. Pelican Mall AVM ve birçok otobüs hattının son durağı olan Avcılar metrobüs aktarma noktası bu mahallede; Avcılar Merkez–Üniversite Kampüsü ve Cihangir–Üniversite Mahallesi metrobüs durakları da sınırında. Nüfusu 2007’de 16 bin civarındayken 2025’te 32 bini geçti.",
      "Kampüse yakın olduğu için mahallede kiralık daireler de çok. Taşınma öncesi ya da sonrası koltuk, çekyat ve yatak yıkatmak isteyenlere makinemizle geliyor, hepsini aynı randevuda yıkıyoruz.",
    ],
    nearby: ["merkez", "cihangir", "mustafa-kemal-pasa", "firuzkoy", "gumuspala"],
    faq: [
      {
        q: "Pelican Mall ve kampüs çevresine geliyor musunuz?",
        a: "Evet. Pelican Mall AVM, İÜ-Cerrahpaşa Avcılar Yerleşkesi ve metrobüs çevresi dahil Üniversite Mahallesi’nin tamamına geliyoruz.",
      },
      {
        q: "Taşınırken koltuk ve yatağı birlikte yıkatabilir miyim?",
        a: "Evet. Koltuk, çekyat ve yatakları aynı randevuda yıkıyoruz. Fotoğraflarını gönderirseniz toplam fiyatı birlikte veriyoruz.",
      },
      {
        q: "Yıkadıktan sonra koltuğu ne zaman kullanabilirim?",
        a: "Kumaşa ve havaya göre genellikle 4–8 saat içinde kurur. Pencereleri açık tutmanız kurumayı hızlandırır.",
      },
      {
        q: "Fiyatı nasıl öğrenebilirim?",
        a: "WhatsApp’tan koltuğunuzun fotoğrafını ve Üniversite Mahallesi’nde olduğunuzu yazın; net fiyatı ücretsiz iletelim.",
      },
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/%C3%9Cniversite,_Avc%C4%B1lar",
    sources: [
      "https://tr.wikipedia.org/wiki/Üniversite,_Avcılar",
      BELEDIYE,
      NUFUS,
      TARIH,
      "https://www.avcilar.bel.tr/mahalle/universite-mahallesi",
    ],
  },
  {
    slug: "yesilkent",
    district: D,
    name: "Yeşilkent",
    heading: "Avcılar Yeşilkent",
    officialName: "Yeşilkent Mahallesi",
    locative: "Avcılar Yeşilkent’te",
    locativeAdj: "Avcılar Yeşilkent’teki",
    dative: "Avcılar Yeşilkent’e",
    iAmIn: "Avcılar Yeşilkent Mahallesi’ndeyim",
    image: "sahne-evcil-hayvan",
    imageAlt: "Kedili evde koyu gri koltuktaki tüylerin vakumlanması",
    description:
      "Avcılar Yeşilkent’teki evinize geliyoruz. Evcil hayvanlı evlerde koltuktaki tüyleri önce vakumluyor, ardından makineyle derinlemesine yıkıyoruz.",
    summary:
      "Avcılar’ın Yeşilkent Mahallesi, yaklaşık 74 bin kişiyle ilçenin en kalabalık mahallesi; kuzeyinden TEM geçiyor ve Esenyurt’la uzun bir sınırı var (Esenyurt’taki Yeşilkent Mahallesi ayrı bir mahalle). Evcil hayvanlı evlerde koltuğu önce vakumlayıp tüyleri alıyor, sonra yıkıyoruz.",
    facts: [
      { label: "Konum", value: "Avcılar’ın kuzeybatısında; TEM (O-3) ve Bahçeşehir kavşağı yakınında, Esenyurt sınırında" },
      { label: "Komşu mahalleler", value: "Firuzköy (Esenyurt Ardıçlı, Esenkent, Akşemseddin, Balıkyolu, Süleymaniye, Yunus Emre; Başakşehir Bahçeşehir)" },
      { label: "Nüfus", value: "74.003 (2025, ADNKS)" },
      { label: "Bilinen yerler", value: "İBB Fakir Baykurt Kütüphanesi, Milli Egemenlik Parkı, Prof. Dr. Aziz Sancar Parkı" },
    ],
    about: [
      "Yeşilkent, yaklaşık 5,1 km²’lik alanı ve 74 bini aşan nüfusuyla Avcılar’ın en kalabalık mahallesi. Kazım Karabekir Caddesi üzerinde 2021’de açılan İBB Fakir Baykurt Kütüphanesi ile Milli Egemenlik ve Prof. Dr. Aziz Sancar parkları mahallenin bilinen noktaları. Avcılar içinde yalnızca Firuzköy’le komşu; geri kalan sınırları Esenyurt ve Başakşehir’le.",
      "Esenyurt’ta da aynı adlı bir mahalle olduğu için adresinizde Avcılar’ı belirtmeniz yeterli; iki Yeşilkent’e de geliyoruz. Evcil hayvanlı evlerde koltuğu önce vakumlayıp tüyleri alıyor, kokuya karşı kumaşa uygun ürünle yıkıyoruz; koku süngere işlemişse bunu önceden söylüyoruz.",
    ],
    nearby: [
      "firuzkoy",
      "tahtakale",
      "esenyurt-koltuk-yikama/ardicli",
      "esenyurt-koltuk-yikama/esenkent",
      "esenyurt-koltuk-yikama/aksemseddin",
      "esenyurt-koltuk-yikama/yunus-emre",
      "esenyurt-koltuk-yikama/balikyolu",
      "esenyurt-koltuk-yikama/suleymaniye",
    ],
    faq: [
      {
        q: "Avcılar Yeşilkent’e mi, Esenyurt Yeşilkent’e mi geliyorsunuz?",
        a: "İkisine de geliyoruz. Aynı adlı iki mahalle olduğu için WhatsApp’ta adresinizle birlikte ilçeyi yazmanız yeterli.",
      },
      {
        q: "Kedi ve köpek tüyü koltuktan çıkar mı?",
        a: "Evet. Yıkamadan önce koltuğu özel başlıkla vakumlayıp tüyleri alıyoruz, ardından makineyle yıkıyoruz.",
      },
      {
        q: "Evcil hayvan kokusu gider mi?",
        a: "Çoğu durumda belirgin şekilde azalır ya da tamamen gider. Koku kumaşın altındaki süngere işlemişse bunu yıkamadan önce açıkça söylüyoruz.",
      },
      {
        q: "Fiyatı nasıl öğrenebilirim?",
        a: "WhatsApp’tan koltuğunuzun fotoğrafını ve Avcılar Yeşilkent’te olduğunuzu yazın; net fiyatı ücretsiz iletelim.",
      },
    ],
    wikipedia: "https://tr.wikipedia.org/wiki/Ye%C5%9Filkent,_Avc%C4%B1lar",
    sources: [
      "https://tr.wikipedia.org/wiki/Yeşilkent,_Avcılar",
      BELEDIYE,
      NUFUS,
      "https://ataturkkitapligi.ibb.gov.tr/en/Kitaplik/Kutuphanelerimiz/IMM-Fakir-Baykurt-Library/14",
    ],
  },
];
