import Link from "next/link";
import { districtCopy } from "@/lib/content";
import type { District } from "@/lib/districts";
import { findNeighborhoodByName, neighborhoodPath } from "@/lib/neighborhoods";
import { SectionHeading } from "./SectionHeading";

const chip = "rounded-full border border-kum-200 bg-kum-50 px-4 py-2.5 text-[15px] font-medium text-petrol-700";

// Detay sayfası olan mahalleler bağlantı, olmayanlar düz çip olarak listelenir.
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
          {district.neighborhoods.map((name) => {
            const page = findNeighborhoodByName(district.slug, name);
            return (
              <li key={name} className="flex">
                {page ? (
                  <Link
                    href={neighborhoodPath(page)}
                    className={`${chip} inline-flex min-h-11 items-center underline-offset-4 transition-colors hover:border-petrol-300 hover:bg-petrol-50 hover:underline`}
                  >
                    {name}
                  </Link>
                ) : (
                  <span className={chip}>{name}</span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
