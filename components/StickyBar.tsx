import { stickyBar } from "@/lib/content";
import { site, whatsappHref } from "@/lib/site";
import { Button } from "./Button";

// Yalnızca mobilde (md altı) ekranın altına yapışık arama / WhatsApp barı.
export function StickyBar({ whatsappMessage }: { whatsappMessage: string }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-kum-200 bg-kum-0 px-4 pt-3 pb-[calc(16px+env(safe-area-inset-bottom))] md:hidden">
      <div className="flex gap-2.5">
        <Button variant="call" size="md" href={site.phoneHref} location="sticky" className="w-[110px] shrink-0">
          {stickyBar.call}
        </Button>
        <Button variant="whatsapp" size="md" href={whatsappHref(whatsappMessage)} location="sticky" className="min-w-0 flex-1">
          {stickyBar.whatsapp}
        </Button>
      </div>
    </div>
  );
}
