import { beforeAfter } from "@/lib/content";
import { site } from "@/lib/site";
import { Picture } from "./Picture";
import { SectionHeading } from "./SectionHeading";

// Görsel tek dosyada yan yana "önce | sonra" olarak duruyor; etiketler iki yarının üstüne yerleşir.
export function BeforeAfter({ title = beforeAfter.title }: { title?: string }) {
  if (!site.showBeforeAfter) return null;

  return (
    <section id="once-sonra" aria-labelledby="once-sonra-title" className="section-y bg-kum-0">
      <div className="container-site">
        <SectionHeading id="once-sonra-title" eyebrow={beforeAfter.eyebrow} title={title} />

        <ul className="mt-7 grid gap-5 md:mt-9 lg:grid-cols-3 lg:gap-6">
          {beforeAfter.items.map((item) => (
            <li key={item.image}>
              <figure className="flex flex-col gap-3">
                <div className="relative overflow-hidden rounded-[18px]">
                  <Picture
                    name={item.image}
                    alt={item.imageAlt}
                    sizes="(min-width: 1024px) 384px, calc(100vw - 40px)"
                    className="h-[200px] w-full object-cover lg:h-[260px]"
                  />
                  <span className="absolute top-3 left-3 rounded-lg bg-kum-0 px-2.5 py-[5px] text-[13px] font-bold text-kum-900">
                    {beforeAfter.before}
                  </span>
                  <span className="absolute top-3 left-[calc(50%+12px)] rounded-lg bg-kum-0 px-2.5 py-[5px] text-[13px] font-bold text-petrol-700">
                    {beforeAfter.after}
                  </span>
                </div>
                <figcaption className="flex justify-between gap-3 text-[15px]">
                  <span className="font-bold text-kum-900">{item.title}</span>
                  <span className="text-kum-600">{item.location}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
