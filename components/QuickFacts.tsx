import { SectionHeading } from "./SectionHeading";

type QuickFactsProps = {
  eyebrow: string;
  title: string;
  /** Soruya doğrudan cevap veren giriş paragrafları (arama motorları ve yapay zekâ aramaları için). */
  lead: string[];
  facts: { label: string; value: string }[];
};

// Sayfanın özeti: kısa cevap paragrafı + etiket/değer listesi.
export function QuickFacts({ eyebrow, title, lead, facts }: QuickFactsProps) {
  return (
    <section id="kisa-bilgi" aria-labelledby="kisa-bilgi-title" className="section-y bg-kum-0">
      <div className="container-site flex flex-col gap-8 lg:flex-row lg:gap-20">
        <div className="flex flex-col gap-5 lg:flex-1">
          <SectionHeading id="kisa-bilgi-title" eyebrow={eyebrow} title={title} />
          {lead.map((p) => (
            <p key={p.slice(0, 32)} className="text-[17px] leading-[1.65] text-kum-700 lg:text-lg">
              {p}
            </p>
          ))}
        </div>

        <dl className="grid w-full self-start overflow-hidden rounded-[20px] border border-kum-200 bg-kum-50 lg:w-[460px] lg:shrink-0">
          {facts.map((f, i) => (
            <div
              key={f.label}
              className={`grid gap-1 px-5 py-4 sm:grid-cols-[150px_1fr] sm:gap-4 ${i > 0 ? "border-t border-kum-200" : ""}`}
            >
              <dt className="text-sm font-bold text-petrol-800">{f.label}</dt>
              <dd className="text-[15px] leading-[1.5] text-kum-700">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
