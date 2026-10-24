import { trust, type IconName } from "@/lib/content";
import { ClockIcon, HouseLineIcon, MoneyIcon, PawPrintIcon } from "./icons";

const icons: Record<IconName, typeof ClockIcon> = {
  house: HouseLineIcon,
  money: MoneyIcon,
  paw: PawPrintIcon,
  clock: ClockIcon,
};

export function TrustStrip() {
  return (
    <section aria-label="Neden biz" className="border-y border-kum-200 bg-kum-0 py-5 lg:py-7">
      <ul className="container-site grid grid-cols-2 gap-x-0 gap-y-[18px] lg:flex lg:justify-between">
        {trust.map(({ icon, title, text }) => {
          const Icon = icons[icon];
          return (
            <li key={title} className="flex items-center gap-2.5 lg:gap-3.5">
              <Icon className="size-[22px] shrink-0 text-petrol-600 lg:size-7" />
              <span className="flex flex-col gap-0.5">
                <span className="text-[15px] font-bold text-petrol-900 lg:text-base">{title}</span>
                <span className="text-[13px] text-kum-600 lg:text-sm">{text}</span>
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
