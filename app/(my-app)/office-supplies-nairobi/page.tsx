import Restock2 from "@/components/restocktwo/restocktwo"
import Services from "@/components/services/services"
import Featured2 from "@/components/featuretwo/featuretwo"
import Quiz2 from "@/components/quiztwo/quiztwo"
import Testimony from "@/components/testimony/testimony"
import Contact from "@/components/contact/contact"
import Footer from "@/components/footer/footer"
import { FaWhatsapp } from "react-icons/fa";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Office Supplies in Nairobi | Fast Delivery & Office Restock Services | OfficeFlow",
  description:
    "Get office supplies in Nairobi with fast delivery from OfficeFlow. We supply stationery, printing paper, pantry items, cleaning supplies, and offer office restock services for businesses across Nairobi.",

  keywords: [
    "office supplies Nairobi",
    "office stationery Nairobi",
    "office delivery Nairobi",
    "office restock services Nairobi",
    "business office supplies Nairobi",
    "workplace supplies Nairobi",
    "office consumables Nairobi",
    "corporate office supplies Nairobi"
  ],

  alternates: {
    canonical: "https://officeflow.co.ke/office-supplies-nairobi",
  },

  openGraph: {
    title: "Office Supplies in Nairobi | OfficeFlow Kenya",
    description:
      "Fast and reliable office supplies delivery in Nairobi. OfficeFlow helps businesses stay stocked with stationery, pantry, cleaning, and IT supplies.",
    url: "https://officeflow.co.ke/office-supplies-nairobi",
    siteName: "OfficeFlow",
    locale: "en_KE",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Office Supplies Nairobi | OfficeFlow",
    description:
      "Order office supplies in Nairobi with fast delivery and office restock services for businesses.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const page = () => {

    const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://officeflow.co.ke/office-supplies-nairobi",
      url: "https://officeflow.co.ke/office-supplies-nairobi",
      name: "Office Supplies in Nairobi",
      description:
        "OfficeFlow provides office supplies and office restock services for businesses in Nairobi.",
      isPartOf: {
        "@id": "https://officeflow.co.ke/#website"
      },
      about: {
        "@id": "https://officeflow.co.ke/#organization"
      }
    },

    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://officeflow.co.ke"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Office Supplies Nairobi",
          "item": "https://officeflow.co.ke/office-supplies-nairobi"
        }
      ],
       "about": {
    "@id": "https://officeflow.co.ke/#organization"
  }
    },
    {
        "@type": "FAQPage",
        "about": {
         "@id": "https://officeflow.co.ke/#organization"
           },
        "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you deliver office supplies to all areas of Nairobi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. OfficeFlow delivers office supplies across Nairobi, including CBD, Westlands, Upper Hill, Kilimani, Karen, Lavington, Gigiri, Industrial Area, Parklands, and other business districts. If your office is located within Nairobi, we can arrange delivery directly to your workplace."
      }
    },
    {
      "@type": "Question",
      "name": "Can businesses in Nairobi order office supplies without a restock plan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Businesses can place one-time orders for office supplies whenever needed. Whether you need printing paper, stationery, pantry items, cleaning supplies, or workplace essentials, OfficeFlow allows you to order as required without committing to a recurring restock plan."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can office supplies be delivered in Nairobi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most Nairobi orders are delivered within 1 to 2 business days, depending on product availability and order size. For urgent requirements, our team can advise on the fastest available delivery options."
      }
    },
    {
      "@type": "Question",
      "name": "Do you supply office essentials for large businesses and corporate offices in Nairobi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. OfficeFlow supplies office essentials for businesses of all sizes, including SMEs, startups, NGOs, schools, clinics, and corporate offices. We can support both routine office supply needs and larger bulk orders for growing organizations in Nairobi."
      }
    },
    {
      "@type": "Question",
      "name": "What office supplies are most commonly ordered by Nairobi businesses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Many Nairobi businesses regularly order A4 printing paper, notebooks, pens, envelopes, printer cartridges, pantry supplies, tissue paper, cleaning products, and other workplace essentials. OfficeFlow helps businesses keep these frequently used items readily available through convenient ordering and delivery services."
      }
    }
  ]
    }
  ]
};


  return (
    <>
    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(schema),
  }}
/>
    <div className="whatsapp-btn">
<a
      href={`https://wa.me/254704610605?text=Hello there...`}
      target="_blank"
      rel="noopener noreferrer"
      style={{textDecoration: 'none', color: 'white', fontSize: '18px'}}
      title="Chat with us on WhatsApp"
    >
      <FaWhatsapp className="whats-logo"/>
    </a>
    <p className="chat">Chat with us</p>
    </div>
    

    <Restock2 />
    <Services />
    <Featured2 />
    <Quiz2 />  
    <Testimony /> 
    <Contact /> 
    <Footer />
    </>
  )
}

export default page