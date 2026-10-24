import Link from "next/link";
import { areas } from "@/lib/content";
import { districts } from "@/lib/districts";
import { SectionHeading } from "./SectionHeading";

type AreasProps = {
  /** İlçe sayfasında: o ilçe hariç diğer bölgeler ("Yakındaki diğer hizmet bölgelerimiz"). */
  currentSlug?: string;
};

export function Areas({ currentSlug }: AreasProps) {
  const isOther = Boolean(currentSlug);
  const list = districts.filter((d) => d.slug !== currentSlug);

  return (
    <section
      id={isOther ? "diger-bolgeler" : "bolgeler"}
      aria-labelledby="bolgeler-title"
      className={`bg-kum-0 ${isOther ? "py-14 md:py-[72px]" : "section-y"}`}
    >
      <div className="container-site">
        <SectionHeading
          id="bolgeler-title"
          eyebrow={isOther ? areas.otherEyebrow : areas.eyebrow}
          title={isOther ? areas.otherTitle : areas.title}
          text={isOther ? undefined : areas.text}
          textClassName="max-w-[560px]"
        />
        <ul className="mt-[30px] flex flex-col items-start gap-2.5 sm:flex-row sm:flex-wrap">
          {list.map((d) => (
            <li key={d.slug}>
              <Link
                href={`/${d.slug}`}
                className="inline-flex min-h-[50px] items-center rounded-full border border-kum-200 bg-kum-50 px-5 py-3.5 font-medium text-petrol-700 transition-colors hover:border-petrol-300 hover:bg-petrol-50 md:text-[17px]"
              >
                {d.name} {areas.chipSuffix}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
