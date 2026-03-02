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
    return(<>
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
    
    <Landing />
    <Featured />
    <Quiz />  
    <Testimony /> 
    <Contact /> 
    <Footer />
    </>
        
    )
    
}