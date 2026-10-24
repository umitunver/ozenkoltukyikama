import { whatsappHref } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

// Masaüstünde sağ altta sabit 60px WhatsApp butonu.
export function WhatsAppFab({ whatsappMessage }: { whatsappMessage: string }) {
  return (
    <a
      href={whatsappHref(whatsappMessage)}
      target="_blank"
      rel="noopener"
      data-cta="whatsapp"
      data-location="fab"
      aria-label="WhatsApp’tan yazın"
      className="fixed right-8 bottom-8 z-40 hidden size-[60px] items-center justify-center rounded-full bg-whatsapp text-whatsapp-ink shadow-[0_8px_24px_rgba(8,44,51,0.25)] transition hover:brightness-95 md:flex"
    >
      <WhatsAppIcon className="size-8" />
    </a>
  );
}
