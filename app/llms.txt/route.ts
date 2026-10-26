// /llms.txt — yapay zekâ arama motorları için sitenin düz metin özeti (https://llmstxt.org).
// Google bu dosyayı kullanmaz; ChatGPT, Perplexity gibi araçlar için bilgi kaynağıdır.

import { districtCopy, faq, neighborhoodCopy, seo, services } from "@/lib/content";
import { districts } from "@/lib/districts";
import { neighborhoodPath, neighborhoodsOf } from "@/lib/neighborhoods";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const { address } = site;
  const lines = [
    `# ${site.name}`,
    "",
    `> ${seo.homeDescription}`,
    "",
    `${site.name}, İstanbul Avrupa Yakası’nda ${site.areas.join(", ")} ilçelerinde koltuk, köşe takımı, sandalye ve yatak yıkamayı müşterinin evinde, profesyonel makineyle yapan bir hizmet işletmesidir. Koltuk taşınmaz; fiyat WhatsApp’tan gönderilen fotoğrafa göre ücretsiz verilir, ödeme iş bitince alınır.`,
    "",
    "## İletişim",
    "",
    `- Telefon: ${site.phoneDisplay}`,
    `- WhatsApp: https://wa.me/${site.whatsapp}`,
    `- E-posta: ${site.email}`,
    `- Adres: ${address.neighborhood}, ${address.district} / ${address.city}`,
    `- Çalışma saatleri: ${site.hours}`,
    "",
    "## Hizmetler",
    "",
    ...services.items.map((s) => `- ${s.name}: ${s.text}`),
    "",
    "## Hizmet bölgeleri",
    "",
    ...districts.flatMap((d) => [
      `- [${districtCopy.pageName(d)}](${site.domain}/${d.slug}): ${d.neighborhoods.length} mahallenin tamamı`,
      ...neighborhoodsOf(d.slug).map(
        (n) => `  - [${neighborhoodCopy.pageName(n)}](${site.domain}${neighborhoodPath(n)}): ${n.officialName}, ${d.name}`,
      ),
    ]),
    "",
    "## Sık sorulan sorular",
    "",
    ...faq.items.flatMap((f) => [`### ${f.q}`, "", f.a, ""]),
  ];

  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
