import styles from './contact.module.css'
import { MdPermPhoneMsg } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaRegClock } from "react-icons/fa6";
import { FaTruckFast } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import Contact from '@/components/contact/contact';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Office Aura Kenya | Office Restock & Workplace Solutions",
  description:
    "Get in touch with Office Aura Kenya for office restock services, employee experience kits, and corporate event fulfillment packs across Kenya.",
  keywords: [
    "office aura contact",
    "office supplies kenya contact",
    "office restock kenya",
    "workplace solutions kenya contact",
    "employee kits kenya",
    "corporate event packs kenya"
  ],
  openGraph: {
    title: "Contact Office Aura Kenya",
    description:
      "Reach Office Aura Kenya for workplace solutions including office restocking, employee kits, and event fulfillment services.",
    url: "https://yourdomain.co.ke/contact",
    siteName: "Office Aura Kenya",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: "Contact Office Aura Kenya",
    description:
      "Get in touch for office restock services, employee kits, and corporate event packs in Kenya."
  },
  alternates: {
    canonical: "https://yourdomain.co.ke/contact"
  }
};


const page = () => {

   const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://www.officeaura.co.ke/#localbusiness",
        name: "Office Aura Kenya",
        url: "https://www.officeaura.co.ke",
        telephone: "+254704610605",
        image: "https://www.officeaura.co.ke/logo.png",
        description:
          "Office Aura Kenya is a workplace solutions company offering office restock services, employee kits, and event fulfillment packs across Kenya.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Nairobi",
          addressRegion: "Nairobi County",
          addressCountry: "KE"
        },
        areaServed: {
          "@type": "Country",
          name: "Kenya"
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+254704610605",
            contactType: "customer support",
            areaServed: "KE",
            availableLanguage: ["English", "Swahili"]
          },
          {
            "@type": "ContactPoint",
            telephone: "+254704610605",
            contactType: "sales",
            areaServed: "KE",
            availableLanguage: ["English", "Swahili"]
          }
        ]
      }
    ]
  };


  return (
    
    <main className={styles.contactMain}>
       <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
      
        <div className={styles.contactInset}>
         <h1>Contact OfficeAura – A workspace solutions company in Kenya</h1>
         <p className={styles.headerP}>Office Aura Kenya is a workplace solutions company offering office restock services, employee kits, and event fulfillment packs across Kenya.</p>

        <h2>Reach out</h2>
        <div className={styles.contactInformation}>
          <div className={styles.contactName}>
            <MdPermPhoneMsg className={styles.contactIcon} style={{color: 'rgb(2, 255, 2)', width: "30px", height: "30px"}}/>
            <p>Call/Message:</p>
          </div>
          <div className={styles.contactDetails}>
            <p>+254 704 610 605</p>
          </div>

        </div>
        <div className={styles.contactInformation}>
          <div className={styles.contactName}>
            <MdEmail className={styles.contactIcon} style={{color: 'rgb(2, 255, 2)', width: "30px", height: "30px"}}/>
            <p>Email:</p>
          </div>
          <div className={styles.contactDetails}>
            <p>josephkimani1998@gmail.com</p>
          </div>

        </div>
        <div className={styles.contactInformation}>
          <div className={styles.contactName}>
            <FaRegClock className={styles.contactIcon} style={{color: 'rgb(2, 255, 2)', width: "30px", height: "30px"}}/>
            <p>Working hours:</p>
          </div>
          <div className={styles.contactDetails}>
            <p>Mon - Sat:  9am to 6pm</p>
          </div>

        </div>
         <div className={styles.contactInformation}>
          <div className={styles.contactName}>
            <FaTruckFast className={styles.contactIcon} style={{color: 'rgb(2, 255, 2)', width: "30px", height: "30px"}}/>
            <p>Deliveries:</p>
          </div>
          <div className={styles.contactDetails}>
            <p>Nationwide delivery across Kenya.</p>
          </div>

        </div>
        <div className={styles.contactWhatsapp}>
          <FaWhatsapp style={{color: 'black', width: "30px", height: "30px"}}/>
         <a
         href="https://wa.me/254704610605"
         target="_blank">
          Chat with us on WhatsApp
          </a>
        </div>
        <h2 style={{color: "white"}}>Our Service Area</h2>
<p style={{color: "white", fontSize: "17px"}}>
  Office Aura serves customers across Kenya, including Nairobi, Mombasa,
  Kisumu, Nakuru, Eldoret, and surrounding areas.
</p>

        </div>
      <Contact />  


    </main>
  )
}

export default page