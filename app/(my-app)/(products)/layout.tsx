import ShopNav from "@/components/shop-nav/shopNav";
import Footer from "@/components/footer/footer";
import { FaWhatsapp } from "react-icons/fa";
import styles from './layout2.module.css'
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


const Layout = ({children} : {children : React.ReactNode}) => {
  return (
    <div style={{background: "black"}}>
       <div className={styles.whatsappBtn}>
<a
      href={`https://wa.me/254704610605?text=Hello there...`}
      target="_blank"
      rel="noopener noreferrer"
      style={{textDecoration: 'none', color: 'white', fontSize: '18px'}}
      title="Chat with us on WhatsApp"
    >
      <FaWhatsapp className={styles.whatsLogo}/>
    </a>
    <p className={styles.chat}>Chat with us</p>
    </div>
      <ShopNav />
       {children}
      <Footer /> 
    </div>
  )
}

export default Layout;