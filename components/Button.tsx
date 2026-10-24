import type { ReactNode } from "react";
import { PhoneIcon, WhatsAppIcon } from "./icons";

export type CtaLocation = "hero" | "header" | "pricing" | "final" | "sticky" | "fab" | "service" | "steps";

type Variant = "whatsapp" | "call" | "callInverse";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  whatsapp: "bg-whatsapp text-whatsapp-ink hover:brightness-95",
  call: "border-[1.5px] border-petrol-700 bg-kum-0 text-petrol-800 hover:bg-petrol-50",
  callInverse: "border-[1.5px] border-kum-0 text-kum-0 hover:bg-kum-0/10",
};

// Figma: 44 / 52 / 58px yükseklik
const sizes: Record<Size, { box: string; wa: string; phone: string }> = {
  sm: { box: "h-11 px-[18px] text-[15px]", wa: "size-[22px]", phone: "size-[18px]" },
  md: { box: "h-[52px] px-[22px] text-base", wa: "size-[22px]", phone: "size-[18px]" },
  lg: { box: "h-[58px] px-[26px] text-[17px]", wa: "size-[22px]", phone: "size-[18px]" },
};

type ButtonProps = {
  variant: Variant;
  href: string;
  location: CtaLocation;
  size?: Size;
  className?: string;
  children: ReactNode;
  "aria-label"?: string;
};

export function Button({ variant, href, location, size = "lg", className = "", children, ...rest }: ButtonProps) {
  const isWhatsApp = variant === "whatsapp";
  const Icon = isWhatsApp ? WhatsAppIcon : PhoneIcon;
  const s = sizes[size];

  return (
    <a
      href={href}
      data-cta={isWhatsApp ? "whatsapp" : "phone"}
      data-location={location}
      {...(isWhatsApp ? { target: "_blank", rel: "noopener" } : {})}
      className={`inline-flex items-center justify-center gap-2.5 rounded-xl font-bold whitespace-nowrap transition ${variants[variant]} ${s.box} ${className}`}
      {...rest}
    >
      <Icon className={`shrink-0 ${isWhatsApp ? s.wa : s.phone}`} />
      {children}
    </a>
  );
}
