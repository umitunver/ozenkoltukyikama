import { faq } from "@/lib/content";
import type { Faq as FaqItem } from "@/lib/districts";
import { MinusIcon, PlusIcon } from "./icons";
import { SectionHeading } from "./SectionHeading";

// Native <details>/<summary> akordeon; aynı `name` sayesinde aynı anda tek soru açık kalır. İlki açık başlar.
export function Faq({ items, title = faq.title }: { items: FaqItem[]; title?: string }) {
  return (
    <section id="sss" aria-labelledby="sss-title" className="section-y bg-kum-50">
      <div className="container-site flex flex-col gap-7 lg:flex-row lg:gap-20">
        <SectionHeading
          id="sss-title"
          eyebrow={faq.eyebrow}
          title={title}
          text={faq.text}
          tone="sand"
          className="lg:w-[360px] lg:shrink-0"
        />

        <div className="flex-1 border-t border-kum-200">
          {items.map((item, i) => (
            <details key={item.q} name="sss" open={i === 0} className="group border-b border-kum-200">
              <summary className="flex items-center gap-4 rounded-md py-[22px]">
                <h3 className="flex-1 text-[17px] leading-[1.35] font-medium text-kum-900 md:text-[19px]">{item.q}</h3>
                <PlusIcon className="size-[22px] shrink-0 text-petrol-600 group-open:hidden" />
                <MinusIcon className="hidden size-[22px] shrink-0 text-petrol-600 group-open:block" />
              </summary>
              <p className="-mt-2.5 pb-[22px] leading-[1.6] text-kum-600">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
