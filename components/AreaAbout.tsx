import { Eyebrow } from "./SectionHeading";

// İlçe ve mahalle sayfalarındaki "Bölge hakkında" bölümü: solda başlık, sağda bölgeye özel paragraflar.
export function AreaAbout({ eyebrow, title, paragraphs }: { eyebrow: string; title: string; paragraphs: string[] }) {
  return (
    <section aria-labelledby="bolge-title" className="section-y border-t border-kum-100 bg-kum-0">
      <div className="container-site flex flex-col gap-6 lg:flex-row lg:gap-20">
        <div className="flex flex-col gap-3 lg:w-[440px] lg:shrink-0">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2
            id="bolge-title"
            className="font-heading text-[30px] leading-[1.1] font-semibold tracking-[-0.01em] text-balance lg:text-wrap text-petrol-900 md:text-[44px]"
          >
            {title}
          </h2>
        </div>
        <div className="flex flex-1 flex-col gap-[18px] text-[17px] leading-[1.65] text-kum-700 lg:text-lg">
          {paragraphs.map((p) => (
            <p key={p.slice(0, 32)}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
