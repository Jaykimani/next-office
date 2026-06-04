import styles from './contact.module.css'
import { MdPermPhoneMsg } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaRegClock } from "react-icons/fa6";
import { FaTruckFast } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import Contact from '@/components/contact/contact';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact OfficeFlow Kenya | Office Supplies & Restock Services",
  
  description:
    "Contact OfficeFlow Kenya for office supplies, workplace essentials, and office restock services. Reach our team for quotes, business accounts, delivery inquiries, and customer support.",

  keywords: [
    "Contact OfficeFlow",
    "OfficeFlow Kenya contact",
    "office supplies Kenya contact",
    "office restock services Kenya",
    "business office supplies Kenya",
    "office supplies Nairobi contact",
    "workplace supplies Kenya",
    "request office supplies quote",
    "business accounts Kenya",
  ],

  alternates: {
    canonical: "https://www.officeflow.co.ke/contact",
  },

  openGraph: {
    title: "Contact OfficeFlow Kenya",
    description:
      "Get in touch with OfficeFlow for office supplies, workplace essentials, office restock services, and business account inquiries.",
    url: "https://www.officeflow.co.ke/contact",
    siteName: "OfficeFlow",
    locale: "en_KE",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact OfficeFlow Kenya",
    description:
      "Contact OfficeFlow for office supplies, office restock services, quotes, and business account support.",
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
      "@type": "ContactPage",
      "@id": "https://www.officeflow.co.ke/contact",
      url: "https://www.officeflow.co.ke/contact",
      name: "Contact OfficeFlow Kenya",
      description:
        "Contact OfficeFlow for office supplies, office restock services, workplace essentials, business account inquiries, and customer support.",
      about: {
        "@id": "https://www.officeflow.co.ke/#organization",
      },
    },

    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.officeflow.co.ke",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Contact",
          item: "https://www.officeflow.co.ke/contact",
        },
      ],
    },
  ],
};


  return (
    
    <main className={styles.contactMain}>
       <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
      
        <div className={styles.contactInset}>
         <h1>Contact OfficeFlow – An office supplies & restock services company in Kenya</h1>
         <p className={styles.headerP}>OfficeFlow Kenya is a workplace solutions company offering office supplies acquisition and delivery services, as well as office restock services in Nairobi and across Kenya.</p>

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
  OfficeFlow serves customers across Kenya, including Nairobi, Mombasa,
  Kisumu, Nakuru, Eldoret, and surrounding areas.
</p>

        </div>
      <Contact />  


    </main>
  )
}

export default page