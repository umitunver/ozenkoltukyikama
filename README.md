# Özen Koltuk Yıkama — ozenkoltukyikama.com

Next.js (App Router, TypeScript, Tailwind CSS v4) ile tamamen statik üretilen site. Backend yok; `npm run build` çıktısı (`out/`) herhangi bir statik hostinge yüklenebilir.

Tasarım kaynağı: [Figma](https://www.figma.com/design/KDxcBtcXrXw1wQm7GfjAtx) (ana sayfa `19:3` / `20:2`, ilçe sayfaları `37:3` …).

## Kurulum

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # statik çıktı → out/
```

Node 20.9+ gerekir.

## Sayfalar

| Route | Kaynak |
|---|---|
| `/` | `app/page.tsx` |
| `/beylikduzu-koltuk-yikama`, `/esenyurt-koltuk-yikama`, `/avcilar-koltuk-yikama`, `/buyukcekmece-koltuk-yikama` | `app/[slug]/page.tsx` + `lib/districts.ts` (`generateStaticParams`) |
| `/beylikduzu-koltuk-yikama/yakuplu` gibi mahalle sayfaları | `app/[slug]/[mahalle]/page.tsx` + `lib/neighborhoods.ts` (veri: `lib/neighborhoods-beylikduzu.ts`) |
| `/llms.txt` | `app/llms.txt/route.ts` — yapay zekâ arama motorları için düz metin site özeti |
| `/sitemap.xml`, `/robots.txt` | `app/sitemap.ts`, `app/robots.ts` |
| `/og/<sayfa>.png` | `app/og/[file]/route.tsx` — Open Graph / Twitter görselleri (`next/og`, build sırasında) |

## Nereden ne düzenlenir?

| Ne | Dosya |
|---|---|
| Telefon, WhatsApp, e-posta, adres, çalışma saati | `lib/site.ts` → `site` |
| **Fiyatlar** | `lib/site.ts` → `prices`. `price: null` iken sitede "Fiyat için yazın" görünür. Sayı girince (ör. `price: 1500`) "1.500 ₺" olarak gösterilir ve JSON-LD'ye otomatik `priceRange` eklenir. |
| WhatsApp hazır mesajları | `lib/site.ts` → `whatsappMessages` |
| İlçe metinleri, mahalleler, ilçe SSS | `lib/districts.ts` (Türkçe ekler elle yazılı: `genitive`, `locative`, `locativeAdj`, `iAmIn`) |
| Ana sayfa bölüm metinleri, SSS, galeri, ilçe sayfası şablon başlıkları | `lib/content.ts` |
| Mahalle sayfaları (yerel bilgiler, SSS, komşu mahalleler, görsel) | `lib/neighborhoods-<ilçe>.ts`. Yeni kayıt eklemek sayfayı, sitemap'i, OG görselini, ilçe sayfasındaki bağlantıyı ve llms.txt'yi otomatik oluşturur. Yerel bilgileri yalnızca kaynaklı yazın (`sources` alanı); aynı metni mahalle adını değiştirerek kopyalamayın. |
| Renk / font token'ları | `app/globals.css` (`:root` değişkenleri + Tailwind `@theme`) |

### Önce / sonra bölümü (`showBeforeAfter`)

`lib/site.ts` içindeki `site.showBeforeAfter` şu an **`false`**. Mevcut önce/sonra görselleri yapay zekâ ile üretildi, gerçek iş sonucu değildir. Gerçek fotoğraflar hazır olunca:

1. Fotoğrafları `assets/raw-images/` klasörüne koyun (ör. `beylikduzu-kadife-koltuk-once-sonra.png`).
2. `npm run images` çalıştırın.
3. `lib/content.ts` → `beforeAfter.items` listesini yeni dosya adları, başlık ve ilçe ile güncelleyin.
4. `site.showBeforeAfter = true` yapın.

### Kalan TODO'lar

`TODO` aramasıyla bulunur:

- `lib/site.ts` — fiyatlar (`prices`, hepsi `null`) ve çalışma saati (`hours` + JSON-LD için `openingHours`)
- `lib/districts.ts` — işletme sahibinin onaylayacağı SSS cevapları (`// TODO: onayla`): yol ücreti, hafta sonu, aynı gün randevu, asansörsüz bina
- Gerçek önce/sonra fotoğrafları (yukarıya bakın)

## Görseller

Ham fotoğraflar (Figma "Üretilen görseller" çerçevesinden dışa aktarıldı) `assets/raw-images/` klasöründe durur. Bu klasör `public/` dışında tutulur, böylece ~35 MB'lık PNG'ler sitenin çıktısına girmez (git'e de eklenmez, bkz. `.gitignore`; orijinaller Figma'da).

```bash
npm run images                       # assets/raw-images → public/images
node scripts/optimize-images.mjs ./baska-klasor
```

`scripts/optimize-images.mjs` (sharp):

- her görseli WebP'ye çevirir ve 320 / 480 / 640 / 768 / 1080 / 1600 px genişliklerde üretir (kaynaktan geniş boy üretmez, büyütmez),
- `public/images/<ad>-<genişlik>.webp` dosyalarını yazar,
- `lib/images.generated.json` manifestini günceller. `components/Picture.tsx` bu manifestten `srcset`, `width` ve `height` değerlerini okur (CLS olmaz). Hero görseli `priority` ile eager + preload, diğerleri lazy yüklenir.

Yeni görsel eklerken dosya adını açıklayıcı verin (`beylikduzu-kadife-koltuk-yikama-once.webp` gibi); ad, kodda `ImageName` tipi olarak kullanılır.

### Logo ve favicon

`npm run brand` (`scripts/build-brand.mjs`) Figma'dan dışa aktarılan logo parçalarından (`assets/logo/`) şunları üretir:

- `public/logo-yatay.svg`, `public/logo-koyu.svg`, `public/logo-dikey.svg`
- `app/favicon.ico` (16/32/48), `app/icon.png` (512), `app/apple-icon.png` (180) — "İkon 160" katmanından
- `lib/logo-paths.generated.ts` — header/footer'daki inline SVG logo bileşeninin (`components/Logo.tsx`) yol verisi

## Dönüşüm takibi

Tüm WhatsApp ve telefon bağlantılarında `data-cta="whatsapp|phone"` ve `data-location="hero|header|pricing|final|sticky|fab|service|steps|footer"` nitelikleri var. Google Analytics / Google Tag Manager'da "tıklama — tüm öğeler" tetikleyicisini bu niteliklere göre filtreleyerek Google Ads dönüşümü tanımlanabilir.

## SEO

- Her sayfada tek H1, Figma katman adlarına göre H2/H3 hiyerarşisi
- Metadata API: title, description, canonical, Open Graph, Twitter kartı (`lib/metadata.ts`)
- JSON-LD (`lib/schema.ts`): her sayfada `HomeAndConstructionBusiness` (LocalBusiness alt türü), SSS'li sayfalarda `FAQPage`, ilçe sayfalarında `BreadcrumbList` ve `Service`
- `sitemap.xml` (5 URL) ve `robots.txt`

## Yayınlama

### Vercel

Depoyu Vercel'e bağlayın; framework otomatik "Next.js" seçilir, ek ayar gerekmez. `output: 'export'` sayesinde site tamamen statik sunulur.

### Herhangi bir statik hosting (Netlify, Cloudflare Pages, GitHub Pages, cPanel …)

```bash
npm run build
```

`out/` klasörünün **içeriğini** sunucunun kök dizinine yükleyin. Netlify / Cloudflare Pages için build komutu `npm run build`, yayın klasörü `out`.

Sayfalar `out/beylikduzu-koltuk-yikama.html` biçiminde üretilir. Netlify, Cloudflare Pages, Vercel ve GitHub Pages `/beylikduzu-koltuk-yikama` adresini bu dosyaya otomatik eşler. Nginx veya Apache kullanıyorsanız:

```nginx
location / {
  try_files $uri $uri.html $uri/ =404;
}
error_page 404 /404.html;
```

```apache
# .htaccess
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME}.html -f
RewriteRule ^(.*)$ $1.html [L]
ErrorDocument 404 /404.html
```

`/_next/static/` ve `/images/` altındaki dosyalar için uzun süreli önbellek (`Cache-Control: public, max-age=31536000, immutable`) ve gzip/brotli sıkıştırma açılması önerilir.
