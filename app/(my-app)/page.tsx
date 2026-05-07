import Landing from "@/components/landing/landing"
import Featured from "@/components/featured/featured"
import Quiz from "@/components/quiz/quiz"
import Testimony from "@/components/testimony/testimony"
import Contact from "@/components/contact/contact"
import Footer from "@/components/footer/footer"
import { FaWhatsapp } from "react-icons/fa";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Office Aura | Modern Office Décor & Accessories Nairobi",
  description:
    "Shop curated modern office décor and workspace accessories in Nairobi. Office Aura delivers stylish office furniture and décor across Kenya.",
  
  keywords: [
    "office décor Nairobi",
    "office accessories Kenya",
    "modern office decor & accessories Kenya",
    "corporate office accessories Kenya",
    "workspace décor Nairobi",
    "corporate office décor Kenya",
    "minimalist office décor Nairobi",
  ],

  alternates: {
    canonical: "https://www.officeaura.co.ke",
  },

  openGraph: {
    title: "Office Aura – Curated Office Décor Marketplace",
    description:
      "Discover modern office décor, executive desk setups, and workspace accessories in Nairobi. Delivered across Kenya.",
    url: "https://www.officeaura.co.ke",
    siteName: "Office Aura",
    locale: "en_KE",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Office Aura | Modern Office Décor Nairobi",
    description:
      "Curated office décor and workspace accessories delivered in Nairobi and across Kenya.",
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

  metadataBase: new URL("https://www.officeaura.co.ke"),
};



export default function Home(){

  const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Office Aura?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Office Aura is a Kenyan online store that specializes in office decor, desk accessories, workspace tools, and productivity essentials designed to help professionals create stylish and efficient workspaces. Whether you are setting up a corporate office, startup workspace, or home office in Kenya, Office Aura offers curated products that improve organization, comfort, and workspace aesthetics."
      }
    },
    {
      "@type": "Question",
      "name": "What products can I buy from Office Aura?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Office Aura offers a wide range of office accessories and workspace upgrades including desk organizers, office wall art and posters, artificial office plants, desk lighting, productivity tools like planners and notebooks, and ergonomic comfort accessories designed to improve workspace organization and productivity."
      }
    },
    {
      "@type": "Question",
      "name": "Do you deliver office accessories across Kenya?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Office Aura delivers office decor and workspace accessories across Kenya. Our primary delivery area is Nairobi where orders are fulfilled quickly, but we also ship to other cities and towns so professionals across Kenya can upgrade their home offices and workspaces."
      }
    },
    {
      "@type": "Question",
      "name": "Who are Office Aura products designed for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Office Aura products are designed for corporate offices, startups, remote workers, freelancers, students, and professionals who want to improve their desk setup or create a modern and productive home office in Kenya."
      }
    },
    {
      "@type": "Question",
      "name": "How can Office Aura help improve my workspace?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Office Aura provides desk accessories, organizers, workspace decor, and productivity tools that help reduce clutter, improve organization, increase focus, and create a comfortable and inspiring workspace environment."
      }
    },
    {
      "@type": "Question",
      "name": "Can I create a complete desk setup using Office Aura products?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Office Aura offers desk organizers, productivity planners, desk lighting, workspace decor, and office greenery that can be combined to create a complete desk setup for offices, startups, or home workspaces."
      }
    },
    {
      "@type": "Question",
      "name": "What makes Office Aura different from other office accessory stores in Kenya?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Office Aura focuses on curated workspace solutions rather than generic office supplies. Our store helps customers find modern office decor, desk accessories, and productivity tools that work together to create organized, stylish, and efficient workspaces."
      }
    },
    {
      "@type": "Question",
      "name": "How do I choose the right office accessories for my desk?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To choose the right office accessories, focus on organization, productivity, comfort, and workspace aesthetics. Desk organizers help reduce clutter, planners and notebooks improve productivity, ergonomic accessories increase comfort, and decor like wall art or plants personalize your workspace."
      }
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
    
    <Landing />
    <Featured />
    <Quiz />  
    <Testimony /> 
    <Contact /> 
    <Footer />
    </>
        
    )
    
}