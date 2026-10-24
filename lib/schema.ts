// schema.org JSON-LD üreticileri.

import { districtCopy } from "./content";
import type { District, Faq } from "./districts";
import { imageSrc } from "./images";
import { priceRange, site } from "./site";

const businessId = `${site.domain}/#business`;

export function localBusinessSchema() {
  const range = priceRange();
  return {
    "@context": "https://schema.org",
    // LocalBusiness alt türü (Figma SEO notu: HomeAndConstructionBusiness)
    "@type": "HomeAndConstructionBusiness",
    "@id": businessId,
    name: site.name,
    url: site.domain,
    telephone: site.phoneE164,
    email: site.email,
    image: `${site.domain}${imageSrc("koltuk-yikama-evde")}`,
    logo: `${site.domain}/icon.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.neighborhood,
      addressLocality: site.address.district,
      addressRegion: site.address.city,
      addressCountry: site.address.country,
    },
    areaServed: site.areas.map((name) => ({ "@type": "City", name })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: site.openingHours.days,
        opens: site.openingHours.opens,
        closes: site.openingHours.closes,
      },
    ],
    ...(range ? { priceRange: range } : {}),
  };
}

export function faqSchema(items: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function serviceSchema(district: District) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: districtCopy.pageName(district),
    serviceType: districtCopy.serviceType,
    url: `${site.domain}/${district.slug}`,
    description: district.description,
    areaServed: { "@type": "City", name: district.name },
    provider: { "@id": businessId },
  };
}
