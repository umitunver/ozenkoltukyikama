import Link from "next/link";
import { footer, services } from "@/lib/content";
import { districts } from "@/lib/districts";
import { site, whatsappHref } from "@/lib/site";
import { FacebookIcon } from "./icons";
import { Logo } from "./Logo";

const linkClass = "inline-block py-0.5 text-[15px] text-kum-700 hover:text-petrol-600";

function Column({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2.5">
      <p className="font-heading text-base font-semibold text-petrol-900">{title}</p>
      <ul className="flex flex-col gap-1.5">{children}</ul>
    </div>
  );
}

export function Footer({ whatsappMessage }: { whatsappMessage: string }) {
  const year = new Date().getFullYear();
  const { address } = site;

  return (
    <footer className="bg-kum-0">
      <div className="container-site">
        <div className="flex flex-col gap-7 pt-11 pb-7 lg:flex-row lg:gap-16 lg:pt-16 lg:pb-10">
          <div className="flex flex-col gap-4 lg:flex-1">
            <Link href="/" aria-label={`${site.name} – ana sayfa`} className="self-start rounded-md">
              <Logo className="h-11 w-auto" />
            </Link>
            <p className="max-w-[320px] text-[15px] leading-[1.55] text-kum-600">{footer.description}</p>
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener"
              aria-label={footer.facebookLabel}
              title={footer.facebookLabel}
              data-cta="facebook"
              data-location="footer"
              className="inline-flex size-10 items-center justify-center self-start rounded-full bg-petrol-50 text-petrol-700 transition-colors hover:bg-petrol-100 hover:text-petrol-800"
            >
              <FacebookIcon className="size-5" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-7 sm:grid-cols-3 lg:flex lg:gap-16">
            <div className="lg:w-[170px]">
              <Column title={footer.servicesTitle}>
                {services.items.map((s) => (
                  <li key={s.name}>
                    <Link href="/#hizmetler" className={linkClass}>
                      {s.name}
                    </Link>
                  </li>
                ))}
              </Column>
            </div>

            <div className="lg:w-[170px]">
              <Column title={footer.areasTitle}>
                {districts.map((d) => (
                  <li key={d.slug}>
                    <Link href={`/${d.slug}`} className={linkClass}>
                      {d.name}
                    </Link>
                  </li>
                ))}
              </Column>
            </div>

            <div className="col-span-2 sm:col-span-1 lg:w-[300px]">
              <Column title={footer.contactTitle}>
                <li>
                  <a href={site.phoneHref} data-cta="phone" data-location="footer" className={linkClass}>
                    {site.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a
                    href={whatsappHref(whatsappMessage)}
                    target="_blank"
                    rel="noopener"
                    data-cta="whatsapp"
                    data-location="footer"
                    className={linkClass}
                  >
                    {footer.whatsappLabel}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${site.email}`} className={`${linkClass} break-all`}>
                    {site.email}
                  </a>
                </li>
                <li>
                  <address className="py-0.5 text-[15px] text-kum-700 not-italic">
                    {address.neighborhood}, {address.district} / {address.city}
                  </address>
                </li>
              </Column>
            </div>
          </div>
        </div>

        <p className="border-t border-kum-200 py-[22px] text-sm text-kum-600">
          © {year} {site.name} · {site.domain.replace("https://", "")}
        </p>
      </div>
    </footer>
  );
}
