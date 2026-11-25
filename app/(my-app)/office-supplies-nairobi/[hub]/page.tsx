import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { FaWhatsapp } from 'react-icons/fa';
import Restock2 from '@/components/restocktwo/restocktwo';
import ServicesTwo from '@/components/servicestwo/servicestwo';
import HubLogistics from '@/components/hub-logistics/hub-logistics';
import Featured2 from '@/components/featuretwo/featuretwo';
import Quiz2 from '@/components/quiztwo/quiztwo';
import ContactTwo from '@/components/contacttwo/contacttwo';
import Footer from '@/components/footer/footer';
import { NAIROBI_HUBS } from '@/nairobiHubs';

type Props = {
  params: Promise<{ hub: string }>;
};

export async function generateStaticParams() {
  return Object.keys(NAIROBI_HUBS).map((hub) => ({ hub }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { hub: slug } = await params;
  const hub = NAIROBI_HUBS[slug];
  if (!hub) return {};

  const url = `https://officeflow.co.ke/office-supplies-nairobi/${hub.slug}`;

  return {
    title: hub.seoTitle,
    description: hub.seoDescription,
    keywords: hub.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: hub.seoTitle,
      description: hub.seoDescription,
      url,
      siteName: 'OfficeFlow',
      locale: 'en_KE',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: hub.seoTitle,
      description: hub.seoDescription,
    },
    robots: { index: true, follow: true },
  };
}

export default async function NairobiHubPage({ params }: Props) {
  const { hub: slug } = await params;
  const hub = NAIROBI_HUBS[slug];
  if (!hub) notFound();

  const pageUrl = `https://officeflow.co.ke/office-supplies-nairobi/${hub.slug}`;

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: hub.seoTitle,
        description: hub.seoDescription,
        isPartOf: { '@id': 'https://officeflow.co.ke/#website' },
        about: { '@id': 'https://officeflow.co.ke/#organization' },
        mainEntity: { '@id': `${pageUrl}#service` },
        breadcrumb: { '@id': `${pageUrl}#breadcrumb` },
        hasPart: { '@id': `${pageUrl}#faq` },
      },
      {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        name: `Office Supplies and Restock Services in ${hub.name}, Nairobi`,
        serviceType: 'Office Restock Services',
        description: hub.serviceSchemaDescription,
        provider: { '@id': 'https://officeflow.co.ke/#organization' },
        areaServed: {
          '@type': 'Place',
          name: `${hub.name}, Nairobi`,
          containedInPlace: {
            '@type': 'City',
            name: 'Nairobi',
          },
        },
        availableChannel: {
          '@type': 'ServiceChannel',
          serviceUrl: pageUrl,
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://officeflow.co.ke/' },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Office Supplies Nairobi',
            item: 'https://officeflow.co.ke/office-supplies-nairobi',
          },
          { '@type': 'ListItem', position: 3, name: hub.name, item: pageUrl },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        about: { '@id': `${pageUrl}#service` },
        mainEntity: hub.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };

  const floatingWhatsapp = encodeURIComponent(hub.whatsappMessage);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="whatsapp-btn">
        <a
          href={`https://wa.me/254704610605?text=${floatingWhatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', color: 'white', fontSize: '18px' }}
          title={`Chat with OfficeFlow about ${hub.name} delivery`}
        >
          <FaWhatsapp className="whats-logo" />
        </a>
        <p className="chat">Chat with us</p>
      </div>

      <Restock2
        hubName={hub.name}
        customH1={hub.h1}
        customSubheadline={hub.subheadline}
        primaryCtaLabel={hub.primaryCtaLabel}
        primaryCtaHref={hub.primaryCtaHref}
        whatsappMessage={hub.whatsappMessage}
        imageAlt={hub.heroImageAlt}
      />

      <ServicesTwo
        hubName={hub.name}
        sectionHeading={hub.servicesHeading}
        sectionIntro={hub.servicesIntro}
        categoryOrder={hub.categoryOrder}
      />

      <HubLogistics
        currentSlug={hub.slug}
        hubName={hub.name}
        roadsCovered={hub.roadsCovered}
        deliveryTurnaround={hub.deliveryTurnaround}
        buildingAccessNote={hub.buildingAccessNote}
        idealForSectors={hub.idealForSectors}
      />

      <Featured2
        hubName={hub.name}
        whyHeading={hub.whyHeading}
        whyLongBody={hub.whyLongBody}
        whyShortBody={hub.whyShortBody}
        businessPitch={hub.businessPitch}
      />

      <Quiz2
        hubName={hub.name}
        heading={hub.faqHeading}
        faqs={hub.faqs}
      />

      <ContactTwo
        hubName={hub.name}
        heading={hub.contactHeading}
        messagePlaceholder={hub.contactPlaceholder}
      />

      <Footer />
    </>
  );
}