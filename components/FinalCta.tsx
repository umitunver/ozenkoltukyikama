import { finalCta } from "@/lib/content";
import { site, whatsappHref } from "@/lib/site";
import { Button } from "./Button";

export function FinalCta({ title = finalCta.title, whatsappMessage }: { title?: string; whatsappMessage: string }) {
  return (
    <section aria-labelledby="son-cagri-title" className="on-dark bg-petrol-900 py-14 md:py-[88px]">
      <div className="container-site flex flex-col items-center gap-[30px]">
        <h2
          id="son-cagri-title"
          className="max-w-[760px] text-center font-heading text-[30px] leading-[1.1] font-semibold tracking-[-0.01em] text-balance lg:text-wrap text-kum-0 md:text-[44px]"
        >
          {title}
        </h2>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button variant="whatsapp" href={whatsappHref(whatsappMessage)} location="final" className="w-full sm:w-auto">
            {finalCta.whatsappLabel}
          </Button>
          <Button variant="callInverse" href={site.phoneHref} location="final" className="w-full sm:w-auto">
            {site.phoneDisplay}
          </Button>
        </div>
      </div>
    </section>
  );
}
