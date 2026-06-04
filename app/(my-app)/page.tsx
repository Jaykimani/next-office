import Restock from "@/components/restock/restock"
import Services from "@/components/services/services"
import Featured from "@/components/featured/featured"
import Quiz from "@/components/quiz/quiz"
import Testimony from "@/components/testimony/testimony"
import Contact from "@/components/contact/contact"
import Footer from "@/components/footer/footer"
import { FaWhatsapp } from "react-icons/fa";
import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "OfficeFlow Kenya | Office Supplies & Office Restock Services in Nairobi",
  description:
    "OfficeFlow provides office supplies and office restock services in Nairobi and across Kenya. We supply stationery, printing paper, pantry items, cleaning products, and workplace essentials for businesses.",

  keywords: [
    "office supplies Nairobi",
    "office supplies Kenya",
    "office restock services Kenya",
    "workplace supplies Kenya",
    "office consumables Nairobi",
    "business office supplies Kenya",
    "corporate office supplies Nairobi",
    "office delivery Nairobi",
    "office stationery Kenya",
    "office pantry supplies Kenya"
  ],

  alternates: {
    canonical: "https://www.officeflow.co.ke",
  },

  openGraph: {
    title: "OfficeFlow Kenya | Office Supplies & Restock Services",
    description:
      "Reliable office supplies and restock services for businesses in Nairobi and across Kenya. Keep your workplace fully stocked with OfficeFlow.",
    url: "https://www.officeflow.co.ke",
    siteName: "OfficeFlow",
    locale: "en_KE",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "OfficeFlow Kenya",
    description:
      "Office supplies and office restock services in Nairobi and Kenya for modern businesses.",
  },

  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1
    }
  },

  metadataBase: new URL("https://www.officeflow.co.ke"),
};



export default function Home(){

  const faqData = {
  "@context": "https://schema.org",
  "@graph" :[
    {
      "@type": "WebPage",
  "@id": "https://www.officeflow.co.ke/#homepage",
  url: "https://www.officeflow.co.ke",
  name: "OfficeFlow Kenya",
   about: {
    "@id": "https://www.officeflow.co.ke/#organization"
  }
    },
    {
       "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.officeflow.co.ke"
    }
  ],
   "about": {
    "@id": "https://www.officeflow.co.ke/#organization"
  }
    },
  {
  "@type": "FAQPage",
   "about": {
    "@id": "https://www.officeflow.co.ke/#organization"
  },
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is OfficeFlow Kenya?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "OfficeFlow Kenya is a workplace supply and office restock company that helps businesses stay fully stocked with office supplies. We provide office stationery, printing materials, pantry supplies, cleaning products, IT consumables, and other workplace essentials to businesses across Nairobi and Kenya."
      }
    },
    {
      "@type": "Question",
      "name": "Do you deliver office supplies in Nairobi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We provide office supply delivery throughout Nairobi, including CBD, Westlands, Upper Hill, Kilimani, Karen, Gigiri, Industrial Area, and surrounding business districts."
      }
    },
    {
      "@type": "Question",
      "name": "What office supplies do you provide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We supply a wide range of workplace essentials, including stationery and writing supplies, printing paper and envelopes, printer ink and toner, pantry and beverage supplies, cleaning and hygiene products, IT consumables and accessories, and workplace safety supplies."
      }
    },
    {
      "@type": "Question",
      "name": "How does OfficeFlow work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "OfficeFlow is designed to make it easy for businesses to get the office supplies they need. Customers can either order office essentials as needed through our website or create a custom restock plan for scheduled deliveries and ongoing workplace supply management."
      }
    },
    {
      "@type": "Question",
      "name": "What is a custom restock plan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A custom restock plan is a personalized office supply program based on your business requirements and usage patterns. Instead of manually reordering supplies every time stock runs low, OfficeFlow helps create a structured supply schedule tailored to your workplace."
      }
    },
     {
      "@type": "Question",
      "name": "How can I request an office restock plan from OfficeFlow?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can contact OfficeFlow through our website, WhatsApp, or quote request form to discuss your office requirements and receive a customized workplace restock plan."
      }
    },
    {
      "@type": "Question",
      "name": "Can I set up recurring office deliveries?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Businesses using custom restock plans can choose weekly, bi-weekly, monthly, or customized delivery schedules based on their office requirements."
      }
    },
    {
      "@type": "Question",
      "name": "How long does delivery take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Delivery within Nairobi typically takes 1 to 2 business days. Deliveries outside Nairobi generally take 2 to 5 business days depending on location."
      }
    },
     {
      "@type": "Question",
      "name": "Who can use OfficeFlow's office restock services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our services are ideal for startups, SMEs, corporate offices, NGOs, schools, clinics, law firms, agencies, and coworking spaces in Nairobi and across Kenya."
      }
    },
    {
      "@type": "Question",
      "name": "Why should businesses choose OfficeFlow?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "OfficeFlow helps businesses save time, reduce procurement stress, and avoid supply shortages through reliable workplace supply solutions. Whether you need a one-time order or a complete workplace restock system, OfficeFlow provides a reliable solution for keeping your business fully supplied."
      }
    }
  ]
}
  ]
}


    return(<>
    <div className="whatsapp-btn">
      <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqData),
      }}
    />
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
    

    <Restock />
    <Services />
    <Featured />
    <Quiz />  
    <Testimony /> 
    <Contact /> 
    <Footer />
    </>
        
    )
    
}