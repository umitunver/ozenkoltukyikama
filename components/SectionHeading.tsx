import type { ReactNode } from "react";

type Tone = "light" | "sand" | "dark";

// Kehribar-600, kum-50/100 zeminde 4.5:1 kontrastın altında kaldığı için orada kehribar-700 kullanılıyor.
const eyebrowTone: Record<Tone, string> = {
  light: "text-kehribar-600",
  sand: "text-kehribar-700",
  dark: "text-kehribar-300",
};

export function Eyebrow({ children, tone = "light" }: { children: ReactNode; tone?: Tone }) {
  return (
    <p className={`font-heading text-sm font-medium tracking-[0.12em] uppercase ${eyebrowTone[tone]}`}>{children}</p>
  );
}

type SectionHeadingProps = {
  eyebrow: ReactNode;
  title: ReactNode;
  text?: ReactNode;
  tone?: Tone;
  id?: string;
  className?: string;
  textClassName?: string;
};

export function SectionHeading({ eyebrow, title, text, tone = "light", id, className = "", textClassName = "" }: SectionHeadingProps) {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2
        id={id}
        className={`font-heading text-[30px] leading-[1.1] font-semibold tracking-[-0.01em] text-balance lg:text-wrap md:text-[44px] ${
          tone === "dark" ? "text-kum-0" : "text-petrol-900"
        }`}
      >
        {title}
      </h2>
      {text && (
        <p
          className={`text-[17px] leading-[1.55] ${tone === "dark" ? "text-petrol-100" : "text-kum-600"} ${textClassName}`}
        >
          {text}
        </p>
      )}
    </div>
  );
}
