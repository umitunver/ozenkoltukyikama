import { districtCopy } from "@/lib/content";
import type { District } from "@/lib/districts";
import { SectionHeading } from "./SectionHeading";

export function Neighborhoods({ district }: { district: District }) {
  return (
    <section id="mahalleler" aria-labelledby="mahalleler-title" className="section-y bg-kum-0">
      <div className="container-site">
        <SectionHeading
          id="mahalleler-title"
          eyebrow={districtCopy.neighborhoodsEyebrow}
          title={districtCopy.neighborhoodsTitle(district)}
          text={districtCopy.neighborhoodsText(district)}
          textClassName="max-w-[560px]"
        />
        <ul className="mt-[30px] flex flex-wrap gap-2.5">
          {district.neighborhoods.map((n) => (
            <li
              key={n}
              className="rounded-full border border-kum-200 bg-kum-50 px-4 py-2.5 text-[15px] font-medium text-petrol-700"
            >
              {n}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
