// schema.org JSON-LD üreticileri.

import { districtCopy, neighborhoodCopy } from "./content";
import type { District, Faq } from "./districts";
import { imageSrc } from "./images";
import { neighborhoodPath, type Neighborhood } from "./neighborhoods";
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
    logo: `${site.domain}/web-app-manifest-512x512.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.neighborhood,
      addressLocality: site.address.district,
      addressRegion: site.address.city,
      addressCountry: site.address.country,
    },
    areaServed: site.areas.map((name) => ({ "@type": "City", name })),
    sameAs: Object.values(site.social),
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

export function neighborhoodServiceSchema(n: Neighborhood, district: District) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: neighborhoodCopy.pageName(n),
    serviceType: districtCopy.serviceType,
    url: `${site.domain}${neighborhoodPath(n)}`,
    description: neighborhoodCopy.description(n, district),
    areaServed: {
      "@type": "Place",
      name: n.officialName,
      ...(n.wikipedia ? { sameAs: encodeURI(n.wikipedia) } : {}),
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: district.name,
        containedInPlace: { "@type": "City", name: site.address.city },
      },
    },
    provider: { "@id": businessId },
  };
}
