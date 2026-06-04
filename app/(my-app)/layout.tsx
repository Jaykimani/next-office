
import './global.css';
import { Playfair, abel, roboto, oswald} from "./fonts" 
import ScrollToTop from "@/components/scrollTop"
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.officeflow.co.ke"),

   title: "OfficeFlow Kenya | Office Restock & Workplace Supply Services",
  description:
    "OfficeFlow Kenya provides reliable office restock services in Nairobi and across Kenya. We supply stationery, printing paper, pantry items, cleaning products, and IT consumables through scheduled workplace delivery systems.",
  keywords: [
    "office restock services Kenya",
    "office supplies Nairobi",
    "office supplies Kenya",
    "workplace supplies Kenya",
    "corporate office supplies Nairobi",
    "office stationery supplies Kenya",
    "office printing paper supplies Kenya",
    "office printer supplies Kenya",
    "office pantry supplies Kenya",
    "office cleaning supplies Kenya",
    "office consumables Kenya",
    "business office supplies Kenya"
  ],

  openGraph: {
    title: "OfficeFlow Kenya | Office Restock Services",
    description:
      "Keep your workplace fully stocked with OfficeFlow Kenya. Reliable office restock services for businesses in Nairobi and across Kenya.",
    url: "https://officeflow.co.ke",
    siteName: "OfficeFlow",
    type: "website",
    locale: "en_KE"
  },

  twitter: {
    card: "summary_large_image",
    title: "OfficeFlow Kenya | Office Restock Services",
    description:
      "Reliable office restock services in Nairobi and Kenya for stationery, pantry, cleaning, and IT consumables."
  },

  robots: {
    index: true,
    follow: true
  },

  alternates: {
    canonical: "https://www.officeflow.co.ke"
  }
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "name": "OfficeFlow",
      "url": "https://officeflow.co.ke",
      "description": "OfficeFlow Kenya provides workplace restock services for businesses in Nairobi and across Kenya, supplying stationery, pantry items, cleaning products, and IT consumables.",
      "areaServed": "Kenya",
      "sameAs": []
    },
    {
      "@type": "WebSite",
      "name": "OfficeFlow",
      "url": "https://officeflow.co.ke",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://officeflow.co.ke/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "Service",
      "name": "Office Restock Services",
      "provider": {
        "@type": "Organization",
        "name": "OfficeFlow"
      },
      "serviceType": "Workplace Supply & Office Restocking",
      "areaServed": [
        {
          "@type": "Country",
          "name": "Kenya"
        },
        {
          "@type": "City",
          "name": "Nairobi"
        }
      ],
      "description": "OfficeFlow provides scheduled office restock services in Kenya including stationery, printing supplies, pantry items, cleaning products, and IT consumables for businesses."
    },
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": "https://www.officeflow.co.ke/#organization",

  name: "OfficeFlow",
  url: "https://www.officeflow.co.ke",
  image: "https://www.officeflow.co.ke/logo.png",

  description:
    "OfficeFlow Kenya provides office restock services and workplace supply solutions for businesses in Nairobi and across Kenya.",

  telephone: "+254704610605",
  email: "support@officeflow.co.ke",

  priceRange: "$$",

  address: {
    "@type": "PostalAddress",
    addressLocality: "Nairobi",
    addressCountry: "KE"
  },

  areaServed: [
    {
      "@type": "City",
      name: "Nairobi"
    },
    {
      "@type": "Country",
      name: "Kenya"
    }
  ]
    }  
  ]
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`${Playfair.variable} ${abel.variable} ${roboto.variable} ${oswald.variable}`}>
      <body>
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(schema),
  }}
/>
        <ScrollToTop />
        {children}
        </body>
    </html>
  )
}