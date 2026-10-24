import Link from "next/link";
import { nav } from "@/lib/content";
import { site, whatsappHref } from "@/lib/site";
import { Button } from "./Button";
import { PhoneIcon } from "./icons";
import { Logo } from "./Logo";

export function Header({ whatsappMessage }: { whatsappMessage: string }) {
  return (
    <header className="sticky top-0 z-40 border-b border-kum-200 bg-kum-0">
      <div className="container-site flex h-16 items-center justify-between gap-6 lg:h-20">
        <Link href="/" aria-label={`${site.name} – ana sayfa`} className="shrink-0 rounded-md">
          <Logo className="h-9 w-auto lg:h-11" />
        </Link>

        <nav aria-label="Ana menü" className="hidden lg:block">
          <ul className="flex gap-8 text-[15px] font-medium text-kum-700">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="rounded-sm py-3 transition-colors hover:text-petrol-600">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={site.phoneHref}
            data-cta="phone"
            data-location="header"
            className="inline-flex min-h-11 items-center gap-2 rounded-md font-bold text-petrol-800 hover:text-petrol-600"
          >
            <PhoneIcon className="size-[18px] text-petrol-600" />
            {site.phoneDisplay}
          </a>
          <Button variant="whatsapp" size="sm" href={whatsappHref(whatsappMessage)} location="header">
            WhatsApp
          </Button>
        </div>

        <a
          href={site.phoneHref}
          data-cta="phone"
          data-location="header"
          aria-label={`Telefonla arayın: ${site.phoneDisplay}`}
          className="flex size-11 items-center justify-center rounded-xl border-[1.5px] border-kum-200 text-petrol-800 lg:hidden"
        >
          <PhoneIcon className="size-5" />
        </a>
      </div>
    </header>
  );
}
