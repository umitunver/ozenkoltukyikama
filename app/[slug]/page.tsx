import { notFound } from "next/navigation";
import { Areas } from "@/components/Areas";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Breadcrumb } from "@/components/Breadcrumb";
import { DistrictAbout } from "@/components/DistrictAbout";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { JsonLd } from "@/components/JsonLd";
import { Neighborhoods } from "@/components/Neighborhoods";
import { PageShell } from "@/components/PageShell";
import { Pricing } from "@/components/Pricing";
import { Services } from "@/components/Services";
import { breadcrumb, districtCopy } from "@/lib/content";
import { districts, getDistrict } from "@/lib/districts";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { site, whatsappMessages } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return districts.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[slug]">) {
  const district = getDistrict((await params).slug);
  if (!district) return {};
  return pageMetadata({
    title: districtCopy.metaTitle(district),
    description: districtCopy.metaDescription(district),
    path: `/${district.slug}`,
    ogPage: district.slug,
  });
}

export default async function DistrictPage({ params }: PageProps<"/[slug]">) {
  const district = getDistrict((await params).slug);
  if (!district) notFound();

  const message = whatsappMessages.district(district.iAmIn);
  const pageName = districtCopy.pageName(district);
  const crumbs = [
    { name: breadcrumb.home, href: "/" },
    { name: breadcrumb.areas, href: "/#bolgeler" },
    { name: pageName },
  ];

  return (
    <PageShell whatsappMessage={message}>
      <Breadcrumb items={crumbs} />
      <Hero
        variant="district"
        badge={districtCopy.badge(district)}
        title={districtCopy.title(district)}
        description={district.description}
        image={district.image}
        imageAlt={district.imageAlt}
        whatsappMessage={message}
      />
      <Neighborhoods district={district} />
      <DistrictAbout district={district} />
      <Services title={districtCopy.servicesTitle(district)} />
      <HowItWorks whatsappMessage={message} />
      <Pricing title={districtCopy.pricingTitle(district)} whatsappMessage={message} />
      <BeforeAfter title={districtCopy.beforeAfterTitle(district)} />
      <Gallery exclude={district.image} />
      <Faq items={district.faq} title={districtCopy.faqTitle(district)} />
      <Areas currentSlug={district.slug} />
      <FinalCta title={districtCopy.finalTitle(district)} whatsappMessage={message} />

      <JsonLd data={faqSchema(district.faq)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: breadcrumb.home, url: `${site.domain}/` },
          { name: breadcrumb.areas, url: `${site.domain}/#bolgeler` },
          { name: pageName, url: `${site.domain}/${district.slug}` },
        ])}
      />
      <JsonLd data={serviceSchema(district)} />
    </PageShell>
  );
}
