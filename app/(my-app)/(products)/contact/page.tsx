import styles from './contact.module.css'
import { MdPermPhoneMsg } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaRegClock } from "react-icons/fa6";
import { FaTruckFast } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import Contact from '@/components/contact/contact';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Office Aura Kenya | Office Décor Support & Delivery Help",
  description:
    "Reach Office Aura Kenya for customer support, office décor inquiries, delivery assistance across Nairobi and Kenya, corporate orders, and workspace styling solutions.",

  keywords: [
    "contact Office Aura Kenya",
    "office décor shop Nairobi contact",
    "workspace accessories Kenya support",
    "office interior décor customer service",
    "Office Aura WhatsApp number",
    "corporate office décor Kenya",
  ],

  openGraph: {
    title: "Contact Us | Office Aura Kenya",
    description:
      "Get in touch with Office Aura Kenya for office décor support, delivery questions, corporate orders, and workspace styling assistance.",
    url: "https://www.officeaura.co.ke/contact",
    siteName: "Office Aura Kenya",
    type: "website",
  },

  alternates: {
    canonical: "https://www.officeaura.co.ke/contact",
  },
};


const page = () => {
  return (
    <main className={styles.contactMain}>
      <Contact />
        <div className={styles.contactInset}>
         <h1>Contact OfficeAura – Office Interior Décor in Kenya</h1>
         <p className={styles.headerP}>Looking for professional office interior décor and office accessories in Kenya?
Contact Office Aura for expert guidance, décor bundles, and nationwide delivery.
We serve home offices, startups, and corporate spaces across Kenya.</p>

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
        


    </main>
  )
}

export default page