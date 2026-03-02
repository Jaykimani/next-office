import Navbar from "@/components/navbar/navbar"
import './global.css'
import { Playfair, abel, roboto } from "./fonts" 
import ScrollToTop from "@/components/scrollTop"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Office Aura Kenya | Office Décor & Workspace Accessories Online Store",
  description:
    "Office Aura Kenya is your one-stop shop for modern office décor, desk accessories, and workspace styling solutions. Shop minimalist, executive, and professional office interior decorations with delivery across Nairobi and Kenya.",

  keywords: [
    "office décor Kenya",
    "office accessories Nairobi",
    "workspace decoration Kenya",
    "desk accessories Kenya",
    "executive office décor",
    "minimalist office interior",
    "Office Aura Kenya",
    "office interior styling shop",
    "office essentials Kenya"
  ],

  openGraph: {
    title: "Office Aura Kenya | Office Décor & Workspace Accessories",
    description:
      "Shop modern office décor, desk accessories, and workspace styling essentials. Office Aura Kenya delivers across Nairobi and nationwide.",
    url: "https://www.officeaura.co.ke",
    siteName: "Office Aura Kenya",
    type: "website",
    locale: "en_KE",

    images: [
      {
        url: "https://www.officeaura.co.ke/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Office Aura Kenya – Office Décor & Workspace Accessories",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Office Aura Kenya | Office Décor & Desk Accessories",
    description:
      "Your one-stop shop for office décor and workspace accessories delivered across Kenya.",
    images: ["https://www.officeaura.co.ke/og-home.jpg"],
  },

  alternates: {
    canonical: "https://www.officeaura.co.ke",
  },
};
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.officeaura.co.ke/#localbusiness",
      name: "Office Aura",
      url: "https://www.officeaura.co.ke",
      telephone: "+254704610605",
      image: "https://www.officeaura.co.ke/logo.png",
      description:
        "Office Aura is a curated marketplace for modern office décor and workspace accessories based in Nairobi, delivering across Kenya.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nairobi",
        addressCountry: "KE"
      },
      areaServed: {
        "@type": "Country",
        name: "Kenya"
      },
      sameAs: [
        "https://www.instagram.com/officeaura",
        "https://www.linkedin.com/company/officeaura"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.officeaura.co.ke/#website",
      url: "https://www.officeaura.co.ke",
      name: "Office Aura",
      description:
        "Curated modern office décor and accessories marketplace in Nairobi with nationwide delivery.",
      publisher: {
        "@id": "https://www.officeaura.co.ke/#localbusiness"
      },
      potentialAction: {
        "@type": "SearchAction",
        target:
          "https://www.officeaura.co.ke/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  ]
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`${Playfair.variable} ${abel.variable} ${roboto.variable}`}>
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