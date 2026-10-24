import { included } from "@/lib/content";
import { CheckIcon } from "./icons";
import { Eyebrow } from "./SectionHeading";

export function IncludedCard() {
  return (
    <aside
      aria-labelledby="dahil-title"
      className="flex w-full flex-col gap-5 rounded-3xl border border-kum-200 bg-kum-50 px-[23px] py-[29px] lg:w-[440px] lg:shrink-0 lg:px-8 lg:py-9"
    >
      <div className="flex flex-col gap-2">
        <Eyebrow tone="sand">
          <span className="text-[13px]">{included.eyebrow}</span>
        </Eyebrow>
        <h3 id="dahil-title" className="font-heading text-xl leading-[1.2] font-semibold text-petrol-900 lg:text-2xl">
          {included.title}
        </h3>
      </div>

      <ul className="flex flex-col">
        {included.items.map((item, i) => (
          <li key={item.title} className={`flex items-start gap-3.5 py-3.5 ${i > 0 ? "border-t border-kum-200" : ""}`}>
            <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-petrol-50 text-petrol-600">
              <CheckIcon className="size-3.5" />
            </span>
            <span className="flex flex-col gap-[3px]">
              <span className="font-bold text-kum-900">{item.title}</span>
              <span className="text-[15px] leading-[1.45] text-kum-600">{item.text}</span>
            </span>
          </li>
        ))}
      </ul>

      <p className="rounded-xl bg-petrol-50 px-4 py-3.5 text-sm font-medium text-petrol-600">{included.note}</p>
    </aside>
  );
}
