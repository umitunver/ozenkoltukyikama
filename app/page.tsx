import { About } from "@/components/About";
import { Areas } from "@/components/Areas";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/PageShell";
import { Pricing } from "@/components/Pricing";
import { Services } from "@/components/Services";
import { TrustStrip } from "@/components/TrustStrip";
import { faq, hero, seo } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
import { faqSchema } from "@/lib/schema";
import { whatsappMessages } from "@/lib/site";

export const metadata = pageMetadata({ title: seo.homeTitle, description: seo.homeDescription, path: "/", ogPage: "home" });

export default function HomePage() {
  const message = whatsappMessages.home;

  return (
    <PageShell whatsappMessage={message}>
      <Hero
        badge={hero.badge}
        title={hero.title}
        description={hero.description}
        image={hero.image}
        imageAlt={hero.imageAlt}
        whatsappMessage={message}
      />
      <TrustStrip />
      <Services />
      <HowItWorks whatsappMessage={message} />
      <Pricing whatsappMessage={message} />
      <BeforeAfter />
      <Gallery />
      <About />
      <Areas />
      <Faq items={faq.items} />
      <FinalCta whatsappMessage={message} />
      <JsonLd data={faqSchema(faq.items)} />
    </PageShell>
  );
}
