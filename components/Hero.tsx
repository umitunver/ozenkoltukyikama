import { hero } from "@/lib/content";
import type { ImageName } from "@/lib/images";
import { site, whatsappHref } from "@/lib/site";
import { Button } from "./Button";
import { CheckIcon, MapPinIcon, WhatsAppIcon } from "./icons";
import { Picture } from "./Picture";

type HeroProps = {
  badge: string;
  title: string;
  description: string;
  image: ImageName;
  imageAlt: string;
  whatsappMessage: string;
  /** Ana sayfada fotoğraf 540×600, ilçe sayfalarında 540×480. */
  variant?: "home" | "district";
};

export function Hero({ badge, title, description, image, imageAlt, whatsappMessage, variant = "home" }: HeroProps) {
  const isHome = variant === "home";

  return (
    <section
      aria-labelledby="hero-title"
      className={`bg-kum-50 pb-10 lg:pb-20 ${isHome ? "pt-7 lg:pt-16" : "pt-7 lg:pt-10"}`}
    >
      <div className="container-site flex flex-col gap-7 lg:flex-row lg:items-center lg:gap-16">
        <div className="flex min-w-0 flex-1 flex-col items-start">
          <p className="flex w-full items-start gap-2 rounded-xl bg-petrol-50 px-3.5 py-2.5 text-sm leading-[1.4] font-semibold text-petrol-700 lg:w-auto lg:items-center lg:rounded-full lg:py-2">
            <MapPinIcon className="mt-px size-4 shrink-0 lg:mt-0" />
            {badge}
          </p>

          <h1
            id="hero-title"
            className="mt-[22px] font-heading text-[38px] leading-[1.06] font-semibold tracking-[-0.02em] text-balance text-petrol-900 md:text-[54px] lg:text-wrap lg:text-[66px] lg:leading-[1.02]"
          >
            {title}
          </h1>

          <p className="mt-4 text-[17px] leading-[1.55] text-kum-700 lg:mt-[22px] lg:text-[19px]">{description}</p>

          <div className="mt-[30px] flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button variant="whatsapp" href={whatsappHref(whatsappMessage)} location="hero" className="w-full sm:w-auto">
              {hero.whatsappLabel}
            </Button>
            <Button variant="call" href={site.phoneHref} location="hero" className="w-full sm:w-auto">
              <span className="sm:hidden">{hero.callLabelMobile}</span>
              <span className="hidden sm:inline">{site.phoneDisplay}</span>
            </Button>
          </div>

          <ul className="mt-5 flex flex-col gap-2.5 text-[15px] font-medium text-kum-700 sm:flex-row sm:flex-wrap sm:gap-x-[22px] lg:mt-6">
            {hero.bullets.map((b) => (
              <li key={b} className="flex items-center gap-2">
                <CheckIcon className="size-[18px] shrink-0 text-petrol-600" />
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative w-full lg:w-[540px] lg:shrink-0">
          <Picture
            name={image}
            alt={imageAlt}
            sizes="(min-width: 1024px) 540px, calc(100vw - 40px)"
            priority
            className={`h-[300px] w-full rounded-[20px] object-cover md:h-[440px] ${isHome ? "lg:h-[600px]" : "lg:h-[480px]"}`}
          />
          <div className="absolute top-4 right-4 left-4 flex items-center gap-3.5 rounded-2xl border border-kum-200 bg-kum-0 px-3.5 py-3 lg:top-14 lg:right-auto lg:-left-10 lg:px-5 lg:py-4">
            <span className="flex size-[42px] shrink-0 items-center justify-center rounded-xl bg-whatsapp text-whatsapp-ink">
              <WhatsAppIcon className="size-6" />
            </span>
            <span className="flex min-w-0 flex-col gap-0.5">
              <span className="font-bold text-petrol-900">{hero.card.title}</span>
              <span className="text-sm text-kum-600">{hero.card.text}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
