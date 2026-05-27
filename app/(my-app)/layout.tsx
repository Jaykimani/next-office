import Navbar from "@/components/navbar/navbar"
import './global.css';
import { Playfair, abel, roboto, oswald} from "./fonts" 
import ScrollToTop from "@/components/scrollTop"
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.officeaura.co.ke"),

  title: {
    default: "Office Aura Kenya | Workplace Solutions & Office Restock Services",
    template: "%s | Office Aura Kenya",
  },

  description:
    "Office Aura Kenya provides office restock services, employee experience kits, and corporate event fulfillment packs. We help businesses stay productive with reliable workplace solutions in Kenya.",

  keywords: [
    "office supplies Kenya",
    "office restock Nairobi",
    "workplace solutions Kenya",
    "employee kits Kenya",
    "corporate event packs Kenya",
    "office supplies delivery Kenya"
  ],

  openGraph: {
    title: "Office Aura Kenya | Workplace Solutions",
    description:
      "Office restock services, employee kits, and event fulfillment packs for modern Kenyan businesses.",
    url: "https://www.officeaura.co.ke",
    siteName: "Office Aura Kenya",
    type: "website",
    locale: "en_KE"
  },

  twitter: {
    card: "summary_large_image",
    title: "Office Aura Kenya",
    description:
      "Workplace solutions: office restocking, employee kits, and corporate event packs in Kenya."
  },

  robots: {
    index: true,
    follow: true
  },

  alternates: {
    canonical: "https://www.officeaura.co.ke"
  }
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.officeaura.co.ke/#localbusiness",
      "name": "Office Aura Kenya",
      "url": "https://www.officeaura.co.ke",
      "telephone": "+254704610605",
      "image": "https://www.officeaura.co.ke/logo.png",
      "description": "Office Aura Kenya is a workplace solutions company offering office restock services, employee experience kits, and corporate event fulfillment packs for businesses across Kenya.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Nairobi",
        "addressRegion": "Nairobi County",
        "addressCountry": "KE"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Kenya"
      },
      "priceRange": "KES",
      "sameAs": [
        "https://www.instagram.com/officeaura",
        "https://www.linkedin.com/company/officeaura"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.officeaura.co.ke/#website",
      "url": "https://www.officeaura.co.ke",
      "name": "Office Aura Kenya",
      "description": "Workplace solutions company in Kenya offering office restocking, employee kits, and corporate event fulfillment services.",
      "publisher": {
        "@id": "https://www.officeaura.co.ke/#localbusiness"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.officeaura.co.ke/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },

    {
      "@type": "Service",
      "@id": "https://www.officeaura.co.ke/#restock-service",
      "name": "Office Restock Services",
      "provider": {
        "@id": "https://www.officeaura.co.ke/#localbusiness"
      },
      "areaServed": "Kenya",
      "description": "Scheduled office supply restocking service including stationery, printer ink, pantry items, cleaning supplies, and IT consumables for businesses in Kenya."
    },
    {
      "@type": "Service",
      "@id": "https://www.officeaura.co.ke/#employee-kits",
      "name": "Employee Experience Kits",
      "provider": {
        "@id": "https://www.officeaura.co.ke/#localbusiness"
      },
      "areaServed": "Kenya",
      "description": "Custom employee onboarding kits, remote work kits, and branded corporate kits designed to improve workplace experience and productivity."
    },
    {
      "@type": "Service",
      "@id": "https://www.officeaura.co.ke/#event-packs",
      "name": "Corporate Event Fulfillment Packs",
      "provider": {
        "@id": "https://www.officeaura.co.ke/#localbusiness"
      },
      "areaServed": "Kenya",
      "description": "End-to-end corporate event kits for conferences, workshops, seminars, training sessions, and product launches across Kenya."
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