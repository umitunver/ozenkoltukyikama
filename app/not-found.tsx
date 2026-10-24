import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { whatsappMessages } from "@/lib/site";

export const metadata = { title: "Sayfa bulunamadı", robots: { index: false } };

export default function NotFound() {
  return (
    <PageShell whatsappMessage={whatsappMessages.home}>
      <section className="section-y">
        <div className="container-site flex flex-col items-start gap-5">
          <h1 className="font-heading text-[38px] leading-[1.06] font-semibold text-petrol-900 md:text-[54px]">
            Aradığınız sayfa bulunamadı
          </h1>
          <p className="text-[17px] text-kum-700">Adres değişmiş ya da yanlış yazılmış olabilir.</p>
          <Link href="/" className="inline-flex h-[52px] items-center rounded-xl bg-petrol-800 px-[22px] font-bold text-kum-0">
            Ana sayfaya dön
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
