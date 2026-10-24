import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { StickyBar } from "./StickyBar";
import { WhatsAppFab } from "./WhatsAppFab";

// Her sayfada ortak: header, footer, mobil sabit bar ve masaüstü WhatsApp butonu.
export function PageShell({ whatsappMessage, children }: { whatsappMessage: string; children: ReactNode }) {
  return (
    <>
      <a
        href="#icerik"
        className="sr-only z-50 rounded-lg bg-petrol-900 px-4 py-3 font-bold text-kum-0 focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        İçeriğe geç
      </a>
      <Header whatsappMessage={whatsappMessage} />
      <main id="icerik">{children}</main>
      <Footer whatsappMessage={whatsappMessage} />
      <StickyBar whatsappMessage={whatsappMessage} />
      <WhatsAppFab whatsappMessage={whatsappMessage} />
    </>
  );
}
