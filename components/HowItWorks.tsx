import { howItWorks } from "@/lib/content";
import { whatsappHref } from "@/lib/site";
import { Button } from "./Button";
import { IncludedCard } from "./IncludedCard";
import { Picture } from "./Picture";
import { SectionHeading } from "./SectionHeading";

export function HowItWorks({ whatsappMessage }: { whatsappMessage: string }) {
  return (
    <section id="nasil-calisir" aria-labelledby="nasil-title" className="section-y bg-kum-0">
      <div className="container-site flex flex-col gap-9 lg:flex-row lg:items-center lg:gap-20">
        <div className="flex min-w-0 flex-1 flex-col items-start gap-8">
          <SectionHeading id="nasil-title" eyebrow={howItWorks.eyebrow} title={howItWorks.title} />

          <ol className="w-full border-b border-kum-200">
            {howItWorks.steps.map((step, i) => (
              <li key={step.title} className="flex items-center gap-5 border-t border-kum-200 py-5">
                <span
                  aria-hidden="true"
                  className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-kehribar-50 font-heading text-[22px] font-semibold text-kehribar-600"
                >
                  {i + 1}
                </span>
                <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                  <h3 className="font-heading text-[21px] leading-tight font-semibold text-petrol-900">{step.title}</h3>
                  <p className="leading-[1.5] text-kum-600">{step.text}</p>
                </div>
                <Picture
                  name={step.image}
                  alt={step.imageAlt}
                  sizes="(min-width: 1024px) 120px, 84px"
                  className="size-[84px] shrink-0 rounded-xl object-cover lg:h-[90px] lg:w-[120px]"
                />
              </li>
            ))}
          </ol>

          <Button variant="whatsapp" size="md" href={whatsappHref(whatsappMessage)} location="steps">
            {howItWorks.buttonLabel}
          </Button>
        </div>

        <IncludedCard />
      </div>
    </section>
  );
}
