import { services } from "@/lib/content";
import { whatsappHref, whatsappMessages } from "@/lib/site";
import { ArrowRightIcon } from "./icons";
import { Picture } from "./Picture";
import { SectionHeading } from "./SectionHeading";

export function Services({ title = services.title }: { title?: string }) {
  return (
    <section id="hizmetler" aria-labelledby="hizmetler-title" className="section-y bg-kum-50">
      <div className="container-site">
        <SectionHeading id="hizmetler-title" eyebrow={services.eyebrow} title={title} tone="sand" />

        <ul className="mt-7 grid grid-cols-2 gap-x-3 gap-y-6 md:mt-10 lg:grid-cols-4 lg:gap-6">
          {services.items.map((s) => (
            <li key={s.name} className="flex flex-col">
              <div className="relative h-[130px] overflow-hidden rounded-2xl sm:h-[180px] lg:h-[220px]">
                <Picture
                  name={s.image}
                  alt={s.imageAlt}
                  sizes={
                    s.rightHalf
                      ? "(min-width: 1024px) 564px, (min-width: 768px) 90vw, calc(100vw - 52px)"
                      : "(min-width: 1024px) 282px, (min-width: 768px) 45vw, calc(50vw - 26px)"
                  }
                  className={`absolute top-0 h-full max-w-none object-cover ${s.rightHalf ? "-left-full w-[200%]" : "left-0 w-full"}`}
                />
              </div>
              <h3 className="mt-2.5 font-heading text-[17px] leading-tight font-semibold text-petrol-900 lg:mt-3.5 lg:text-xl">
                {s.name}
              </h3>
              <p className="mt-1.5 text-sm leading-[1.45] text-kum-600 lg:text-[15px]">{s.text}</p>
              <a
                href={whatsappHref(whatsappMessages.service(s.name.toLocaleLowerCase("tr")))}
                target="_blank"
                rel="noopener"
                data-cta="whatsapp"
                data-location="service"
                className="mt-auto inline-flex min-h-11 items-center gap-1.5 self-start pt-2.5 text-sm font-bold text-petrol-600 hover:text-petrol-800 lg:pt-3.5 lg:text-[15px]"
              >
                {services.linkLabel}
                <span className="sr-only"> – {s.name}</span>
                <ArrowRightIcon className="size-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
