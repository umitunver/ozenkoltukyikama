import { about } from "@/lib/content";
import { CheckIcon } from "./icons";
import { Picture } from "./Picture";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="hakkimizda" aria-labelledby="hakkimizda-title" className="section-y bg-kum-100">
      <div className="container-site flex flex-col gap-7 lg:flex-row lg:items-center lg:gap-20">
        <Picture
          name={about.image}
          alt={about.imageAlt}
          sizes="(min-width: 1024px) 480px, calc(100vw - 40px)"
          className="h-[360px] w-full rounded-[20px] object-cover md:h-[480px] lg:h-[540px] lg:w-[480px] lg:shrink-0"
        />
        <div className="flex min-w-0 flex-1 flex-col gap-[18px]">
          <SectionHeading id="hakkimizda-title" eyebrow={about.eyebrow} title={about.title} tone="sand" />
          <p className="text-[17px] leading-[1.6] text-kum-700 lg:text-lg">{about.text}</p>
          <ul className="flex flex-col gap-3.5 text-[15px] font-medium text-kum-700">
            {about.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2">
                <CheckIcon className="mt-px size-[18px] shrink-0 text-petrol-600" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
