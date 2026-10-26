import Link from "next/link";
import { ArrowRightIcon } from "./icons";
import { SectionHeading } from "./SectionHeading";

type NearbyAreasProps = {
  eyebrow: string;
  title: string;
  links: { href: string; label: string }[];
  /** Listenin altındaki üst bölge bağlantısı ("Beylikdüzü’nün tüm mahalleleri") */
  parent?: { href: string; label: string };
};

export function NearbyAreas({ eyebrow, title, links, parent }: NearbyAreasProps) {
  return (
    <section id="yakin-mahalleler" aria-labelledby="yakin-title" className="bg-kum-0 py-14 md:py-[72px]">
      <div className="container-site">
        <SectionHeading id="yakin-title" eyebrow={eyebrow} title={title} />
        <ul className="mt-[30px] flex flex-col items-start gap-2.5 sm:flex-row sm:flex-wrap">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="inline-flex min-h-[50px] items-center rounded-full border border-kum-200 bg-kum-50 px-5 py-3.5 font-medium text-petrol-700 transition-colors hover:border-petrol-300 hover:bg-petrol-50 md:text-[17px]"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        {parent && (
          <Link
            href={parent.href}
            className="mt-6 inline-flex min-h-11 items-center gap-1.5 font-bold text-petrol-600 hover:text-petrol-800"
          >
            {parent.label}
            <ArrowRightIcon className="size-4" />
          </Link>
        )}
      </div>
    </section>
  );
}
