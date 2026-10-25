import Script from "next/script";
import { site } from "@/lib/site";

// Google Analytics 4 (gtag.js). Ayrıca `data-cta` taşıyan WhatsApp / telefon linklerine
// tıklamaları `whatsapp_click` ve `phone_click` olayı olarak, `data-location` ile birlikte gönderir.
export function Analytics() {
  const id = site.gaMeasurementId;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${id}');

          document.addEventListener('click', function (e) {
            var link = e.target instanceof Element && e.target.closest('a[data-cta]');
            if (!link) return;
            gtag('event', link.dataset.cta + '_click', { cta_location: link.dataset.location });
          });
        `}
      </Script>
    </>
  );
}
