import { pricing } from "@/lib/content";
import { formatPrice, prices, site, whatsappHref } from "@/lib/site";
import { Button } from "./Button";
import { ClockIcon } from "./icons";
import { SectionHeading } from "./SectionHeading";

export function Pricing({ title = pricing.title, whatsappMessage }: { title?: string; whatsappMessage: string }) {
  return (
    <section id="fiyatlar" aria-labelledby="fiyatlar-title" className="section-y bg-kum-50">
      <div className="container-site flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16">
        <div className="flex min-w-0 flex-1 flex-col gap-8">
          <SectionHeading
            id="fiyatlar-title"
            eyebrow={pricing.eyebrow}
            title={title}
            text={pricing.text}
            tone="sand"
            textClassName="max-w-[560px]"
          />

          <div className="overflow-hidden rounded-[20px] border border-kum-200 bg-kum-0">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">{pricing.tableCaption}</caption>
              <tbody>
                {prices.map((p) => (
                  <tr key={p.name} className="border-b border-kum-100 last:border-b-0">
                    <th scope="row" className="py-4 pr-3 pl-[18px] font-normal lg:py-[18px] lg:pl-6">
                      <span className="block text-[17px] font-bold text-kum-900">{p.name}</span>
                      <span className="mt-0.5 block text-sm text-kum-600">{p.note}</span>
                    </th>
                    <td className="py-4 pr-[18px] pl-3 text-right lg:py-[18px] lg:pr-6">
                      {p.price === null ? (
                        <span className="text-[15px] font-semibold whitespace-nowrap text-petrol-700">
                          {pricing.pricePlaceholder}
                        </span>
                      ) : (
                        <span className="font-heading text-xl font-semibold whitespace-nowrap text-petrol-800">
                          {formatPrice(p.price)}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="on-dark flex w-full flex-col gap-3.5 rounded-3xl bg-petrol-800 p-[22px] py-7 lg:w-[420px] lg:shrink-0 lg:p-9">
          <h3 className="font-heading text-[26px] leading-[1.2] font-semibold text-kum-0">{pricing.card.title}</h3>
          <p className="leading-[1.55] text-petrol-100">{pricing.card.text}</p>
          <Button variant="whatsapp" href={whatsappHref(whatsappMessage)} location="pricing" className="w-full">
            {pricing.card.whatsappLabel}
          </Button>
          <Button variant="callInverse" href={site.phoneHref} location="pricing" className="w-full">
            <span>
              {pricing.card.callLabel}
              <span className="hidden sm:inline">: {site.phoneDisplay}</span>
            </span>
          </Button>
          <p className="flex items-center gap-2 text-sm text-petrol-200">
            <ClockIcon className="size-4 shrink-0" />
            {site.hours}
          </p>
        </div>
      </div>
    </section>
  );
}
