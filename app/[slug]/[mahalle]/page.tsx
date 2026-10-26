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
import { breadcrumb, districtCopy, neighborhoodCopy } from "@/lib/content";
import { getDistrict } from "@/lib/districts";
import { pageMetadata } from "@/lib/metadata";
import { getNeighborhood, neighborhoodPath, neighborhoods } from "@/lib/neighborhoods";
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
    { label: labels.area, value: values.area(n, district) },
    ...n.facts,
    { label: labels.price, value: priceRange() ?? values.price },
    { label: labels.drying, value: values.drying },
    { label: labels.hours, value: site.hours },
    { label: labels.payment, value: values.payment },
  ];

  const nearby = n.nearby
    .map((slug) => neighborhoods.find((x) => x.district === n.district && x.slug === slug))
    .filter((x) => x !== undefined)
    .map((x) => ({ href: neighborhoodPath(x), label: neighborhoodCopy.pageName(x) }));

  return (
    <PageShell whatsappMessage={message}>
      <Breadcrumb items={crumbs} />
      <Hero
        variant="district"
        badge={neighborhoodCopy.badge(n, district)}
        title={neighborhoodCopy.title(n)}
        description={n.description}
        image={n.image}
        imageAlt={n.imageAlt}
        whatsappMessage={message}
      />
      <QuickFacts
        eyebrow={neighborhoodCopy.quickEyebrow}
        title={neighborhoodCopy.quickTitle(n)}
        lead={[neighborhoodCopy.quickLead(n, district), n.summary]}
        facts={facts}
      />
      <AreaAbout eyebrow={n.officialName} title={neighborhoodCopy.aboutTitle(n)} paragraphs={n.about} />
      <Services title={neighborhoodCopy.servicesTitle(n)} />
      <HowItWorks whatsappMessage={message} />
      <Pricing title={neighborhoodCopy.pricingTitle(n)} whatsappMessage={message} />
      <Faq items={n.faq} title={neighborhoodCopy.faqTitle(n)} />
      <NearbyAreas
        eyebrow={neighborhoodCopy.nearbyEyebrow}
        title={neighborhoodCopy.nearbyTitle(n)}
        links={nearby}
        parent={{ href: `/${district.slug}`, label: neighborhoodCopy.nearbyAll(district) }}
      />
      <FinalCta title={neighborhoodCopy.finalTitle(n)} whatsappMessage={message} />

      <JsonLd data={faqSchema(n.faq)} />
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
