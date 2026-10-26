import { notFound } from "next/navigation";
import { AreaAbout } from "@/components/AreaAbout";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { JsonLd } from "@/components/JsonLd";
import { NearbyAreas } from "@/components/NearbyAreas";
import { PageShell } from "@/components/PageShell";
import { Pricing } from "@/components/Pricing";
import { QuickFacts } from "@/components/QuickFacts";
import { Services } from "@/components/Services";
import { TrustStrip } from "@/components/TrustStrip";
import { breadcrumb, districtCopy, neighborhoodCopy } from "@/lib/content";
import { getDistrict } from "@/lib/districts";
import { pageMetadata } from "@/lib/metadata";
import { getNeighborhood, neighborhoodPath, neighborhoods, resolveNearby } from "@/lib/neighborhoods";
import { breadcrumbSchema, faqSchema, neighborhoodServiceSchema } from "@/lib/schema";
import { priceRange, site, whatsappMessages } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return neighborhoods.map((n) => ({ slug: n.district, mahalle: n.slug }));
}

async function load(params: PageProps<"/[slug]/[mahalle]">["params"]) {
  const { slug, mahalle } = await params;
  const district = getDistrict(slug);
  const n = getNeighborhood(slug, mahalle);
  return district && n ? { district, n } : null;
}

export async function generateMetadata({ params }: PageProps<"/[slug]/[mahalle]">) {
  const data = await load(params);
  if (!data) return {};
  const { district, n } = data;
  return pageMetadata({
    title: neighborhoodCopy.metaTitle(n, district),
    description: neighborhoodCopy.metaDescription(n, district),
    path: neighborhoodPath(n),
    ogPage: `${n.district}-${n.slug}`,
  });
}

export default async function NeighborhoodPage({ params }: PageProps<"/[slug]/[mahalle]">) {
  const data = await load(params);
  if (!data) notFound();
  const { district, n } = data;

  const message = whatsappMessages.district(n.iAmIn);
  const pageName = neighborhoodCopy.pageName(n);
  const districtName = districtCopy.pageName(district);
  const crumbs = [
    { name: breadcrumb.home, href: "/" },
    { name: districtName, href: `/${district.slug}` },
    { name: pageName },
  ];

  const labels = neighborhoodCopy.factLabels;
  const values = neighborhoodCopy.factValues;
  const facts = [
    { label: labels.service, value: values.service },
    { label: labels.method, value: values.method },
    { label: labels.stains, value: values.stains },
    { label: labels.fabrics, value: values.fabrics },
    { label: labels.area, value: values.area(n, district) },
    { label: labels.price, value: priceRange() ?? values.price },
    { label: labels.drying, value: values.drying },
    { label: labels.hours, value: site.hours },
    { label: labels.payment, value: values.payment },
  ];

  const faq = neighborhoodCopy.faq(n, district);

  // Başka ilçedeki komşular "<ilçe-slug>/<mahalle-slug>" olarak yazılır; etiketine ilçe adı eklenir.
  const nearby = resolveNearby(n).map((x) => ({
    href: neighborhoodPath(x),
    label:
      x.district === n.district
        ? neighborhoodCopy.pageName(x)
        : `${neighborhoodCopy.pageName(x)} (${getDistrict(x.district)!.name})`,
  }));

  return (
    <PageShell whatsappMessage={message}>
      <Breadcrumb items={crumbs} />
      <Hero
        variant="district"
        badge={neighborhoodCopy.badge(n, district)}
        title={neighborhoodCopy.title(n)}
        description={neighborhoodCopy.description(n, district)}
        image={n.image}
        imageAlt={n.imageAlt}
        whatsappMessage={message}
      />
      <TrustStrip />
      <QuickFacts
        eyebrow={neighborhoodCopy.quickEyebrow}
        title={neighborhoodCopy.quickTitle(n)}
        lead={neighborhoodCopy.quickLead(n, district)}
        facts={facts}
      />
      <AreaAbout eyebrow={n.theme.eyebrow} title={n.theme.title(n)} paragraphs={n.theme.paragraphs(n, district)} />
      <Services title={neighborhoodCopy.servicesTitle(n)} />
      <HowItWorks whatsappMessage={message} />
      <Pricing title={neighborhoodCopy.pricingTitle(n)} whatsappMessage={message} />
      <Faq items={faq} title={neighborhoodCopy.faqTitle(n)} />
      <NearbyAreas
        eyebrow={neighborhoodCopy.nearbyEyebrow}
        title={neighborhoodCopy.nearbyTitle(n)}
        links={nearby}
        parent={{ href: `/${district.slug}`, label: neighborhoodCopy.nearbyAll(district) }}
      />
      <FinalCta title={neighborhoodCopy.finalTitle(n)} whatsappMessage={message} />

      <JsonLd data={faqSchema(faq)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: breadcrumb.home, url: `${site.domain}/` },
          { name: districtName, url: `${site.domain}/${district.slug}` },
          { name: pageName, url: `${site.domain}${neighborhoodPath(n)}` },
        ])}
      />
      <JsonLd data={neighborhoodServiceSchema(n, district)} />
    </PageShell>
  );
}
