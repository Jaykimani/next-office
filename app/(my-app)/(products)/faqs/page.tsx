import styles from './faqs.module.css'
import type { Metadata } from "next";
import Link from 'next/link';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";

export const metadata: Metadata = {
   title: "Office Aura Kenya FAQs | Office Restock, Employee Kits & Event Packs",
  description:
    "Find answers about Office Aura Kenya’s office restock services, employee experience kits, and corporate event fulfillment packs. Learn how we help businesses in Kenya streamline office supplies and workplace operations.",
  keywords: [
    "office aura kenya faq",
    "office restock services kenya",
    "office supplies nairobi",
    "employee kits kenya",
    "corporate event packs kenya",
    "workplace solutions kenya",
    "office restocking kenya"
  ],
  openGraph: {
    title: "Office Aura Kenya FAQs | Workplace Solutions & Office Restock",
    description:
      "Get answers about Office Aura Kenya’s office restock services, employee kits, and corporate event fulfillment packs for businesses across Kenya.",
    url: "https://yourdomain.co.ke/faqs",
    siteName: "Office Aura Kenya",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: "Office Aura Kenya FAQs | Workplace Solutions",
    description:
      "Learn about Office Aura Kenya’s office restock services, employee kits, and event fulfillment packs for modern workplaces in Kenya."
  },
  alternates: {
    canonical: "https://yourdomain.co.ke/faqs"
  }
};


const page = () => {

  const structuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Office Aura Kenya?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Office Aura Kenya is a modern workplace solutions company that provides office restock services, employee experience kits, event fulfillment packs, and office accessories for businesses across Kenya. We help companies keep their workplaces productive, organized, and fully equipped through reliable supply and fulfillment solutions."
      }
    },
    {
      "@type": "Question",
      "name": "What office restock services do you offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We provide recurring office restocking services for businesses, including stationery supplies, printing paper, printer ink, pantry essentials, cleaning products, IT consumables, and other workplace essentials. Our services are designed to help companies avoid shortages and improve operational efficiency."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer scheduled office supply deliveries in Kenya?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Office Aura offers scheduled office supply deliveries for businesses in Nairobi and across Kenya. Companies can choose weekly, bi-weekly, or monthly restock plans depending on their workplace needs."
      }
    },
    {
      "@type": "Question",
      "name": "What are employee experience kits?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Employee experience kits are professionally curated workplace packages designed to improve onboarding, productivity, and employee satisfaction. These kits may include notebooks, pens, branded merchandise, desk accessories, water bottles, laptop accessories, and customized packaging."
      }
    },
    {
      "@type": "Question",
      "name": "Can employee kits be customized with company branding?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We offer customized employee kits with company logos, branded packaging, personalized employee names, branded merchandise, and tailored product selections to match your company culture and branding requirements."
      }
    },
    {
      "@type": "Question",
      "name": "What are event fulfillment packs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Event fulfillment packs are curated kits prepared for conferences, workshops, seminars, trainings, corporate events, and product launches. These packs may include notebooks, pens, lanyards, tote bags, event materials, branded merchandise, and attendee essentials."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide branded corporate event kits in Kenya?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We provide branded corporate event kits and fulfillment solutions for businesses, NGOs, startups, schools, agencies, and organizations across Kenya. We can customize event packs to match your brand identity and event objectives."
      }
    },
    {
      "@type": "Question",
      "name": "Can I order office supplies in bulk for my company?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Office Aura specializes in bulk office supply fulfillment for businesses of all sizes, including SMEs, startups, NGOs, coworking spaces, clinics, schools, and corporate offices with reliable bulk supply solutions."
      }
    },
    {
      "@type": "Question",
      "name": "Do you deliver office supplies outside Nairobi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We offer delivery services within Nairobi and nationwide shipping across Kenya for office supplies, employee kits, and event fulfillment packs."
      }
    },
    {
      "@type": "Question",
      "name": "How do I place an order with Office Aura Kenya?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can place an order by contacting us through our website, inquiry forms, WhatsApp, email, or phone. Our team will guide you through product selection, quotations, customization options, and delivery arrangements."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer emergency office restocking services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Office Aura provides emergency office restock support to help businesses quickly replenish essential supplies and avoid operational disruptions."
      }
    },
    {
      "@type": "Question",
      "name": "Who can benefit from Office Aura’s services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our services are ideal for SMEs, startups, NGOs, law firms, agencies, clinics, schools, coworking spaces, and corporate organizations looking for reliable workplace supply and fulfillment solutions in Kenya."
      }
    },
    {
      "@type": "Question",
      "name": "What types of products are included in office restock services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Office restock services include stationery supplies, notebooks, pens, printer paper, toner and ink cartridges, pantry supplies, drinking water, tissues, cleaning products, desk accessories, cables, batteries, and other workplace essentials."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer subscription-based office supply services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Office Aura offers flexible subscription-based office restock services that allow businesses to receive recurring deliveries based on their consumption and operational needs."
      }
    },
    {
      "@type": "Question",
      "name": "Why should businesses choose Office Aura Kenya?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Office Aura Kenya combines office restocking, employee experience kits, and event fulfillment services under one modern workplace solutions brand. We focus on quality, reliability, customization, and helping businesses maintain productive work environments."
      }
    },
    {
      "@type": "Question",
      "name": "Can you support corporate onboarding for multiple employees?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We can prepare and fulfill onboarding kits for teams of all sizes, including personalized packaging, branded materials, and coordinated delivery for new employee onboarding programs."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide workplace solutions for remote and hybrid teams?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Office Aura offers remote work kits and hybrid workspace solutions designed to help employees stay productive whether they are working from home, remotely, or in-office."
      }
    },
    {
      "@type": "Question",
      "name": "How can Office Aura help improve workplace productivity?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "By ensuring businesses always have the supplies, tools, and employee support materials they need, Office Aura helps reduce operational interruptions, improve organization, enhance employee experience, and create more efficient workplaces."
      }
    }
  ]
}


  return (
    <div className={styles.faqs}>
      <script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
     <div className={styles.faqsInset}>
        <h1>Frequently Asked Questions (FAQs) — Office Aura Kenya</h1>
        
        <h2>1. What is Office Aura Kenya?</h2>
        <p>Office Aura Kenya is a modern workplace solutions company that provides <span>office restock services, employee experience kits, event fulfillment packs, and office accessories</span> for businesses across Kenya. We help companies keep their workplaces productive, organized, and fully equipped through reliable supply and fulfillment solutions.</p>
        <div className={styles.divider}></div>
        <h2>2. What office restock services do you offer?</h2>
        <p>We provide recurring office restocking services for businesses, including:</p>
                 <ul>
                  <li>Stationery supplies</li>
                  <li>Printing papers & printer essentials</li>
                  <li>Pantry and Hydration essentials</li>
                  <li>Hygiene and Cleaning products</li>
                  <li>IT consumables</li>
                  <li>Other workspace essentials</li>
                 </ul>
                 <p>Our services are designed to help companies avoid shortages and improve operational efficiency.</p>
        <div className={styles.divider}></div>
        <h2>3. Do you offer scheduled office supply deliveries in Kenya?</h2>
        <p>Yes. Office Aura offers scheduled office supply deliveries for businesses in Nairobi and across Kenya. Companies can schedule when to receive their supplies or subscribe to our weekly, bi-weekly, or monthly restock plans depending on their workplace needs.</p>
        <div className={styles.divider}></div>
        <h2>4. What are employee experience kits?</h2>
        <p>Employee experience kits are professionally curated workplace packages designed to improve onboarding, productivity, and employee satisfaction. These kits may include notebooks, pens, branded merchandise, desk accessories, water bottles, laptop accessories, and customized packaging.</p>
      <div className={styles.divider}></div>
      <h2>5. Can employee kits be customized with company branding?</h2>
      <p>Yes. We offer customized employee kits with company logos, branded packaging, personalized employee names, branded merchandise, and tailored product selections to match your company culture and branding requirements.</p>
        <div className={styles.divider}></div>
        <h2>6. What are event fulfillment packs?</h2>
        <p>Event fulfillment packs are curated kits prepared for conferences, workshops, seminars, trainings, corporate events, and product launches. These packs may include notebooks, pens, lanyards, tote bags, event materials, branded merchandise, and attendee essentials.</p>
        <div className={styles.divider}></div>
        <h2>7. Do you provide branded corporate event kits in Kenya?</h2>
        <p>Yes. We provide branded corporate event kits and fulfillment solutions for businesses, NGOs, startups, schools, agencies, and organizations across Kenya. We can customize event packs to match your brand identity and event objectives.</p>
        <div className={styles.divider}></div>
        <h2>8. Can I order office supplies in bulk for my company?</h2>
        <p>Absolutely. Office Aura specializes in bulk office supply fulfillment for businesses of all sizes. We support SMEs, startups, NGOs, coworking spaces, clinics, schools, and corporate offices with reliable bulk supply solutions.</p>
        <div className={styles.divider}></div> 
        <h2>9. Do you deliver office supplies outside Nairobi?</h2>
        <p>Yes. We offer delivery services within Nairobi and nationwide shipping across Kenya for office supplies, employee kits, and event fulfillment packs.</p>
        <div className={styles.divider}></div>
        <h2>10. How do I place an order with Office Aura Kenya?</h2>
        <p>You can place an order by contacting us through our website, inquiry forms, WhatsApp, email, or phone. Our team will guide you through product selection, quotations, customization options, and delivery arrangements.</p>
        <div className={styles.divider}></div>
        <h2>11. Do you offer emergency office restocking services?</h2>
        <p>Yes. We understand that businesses sometimes run out of essential supplies unexpectedly. Office Aura provides emergency office restock support to help minimize disruptions and keep your operations running smoothly.</p>
        <div className={styles.divider}></div>
        <h2>12. Who can benefit from Office Aura’s services?</h2>
        <p>Our services are ideal for SMEs, startups, NGOs, law firms, agencies, clinics, schools, coworking spaces, and corporate organizations looking for reliable workplace supply and fulfillment solutions in Kenya.</p>
        <div className={styles.divider}></div>
        <h2>13. What types of products are included in office restock services?</h2>
        <p>Our office restock services may include stationery supplies, notebooks, pens, printer paper, toner and ink cartridges, pantry supplies, drinking water, tissues, cleaning products, desk accessories, cables, batteries, and other workplace essentials..</p>
        <div className={styles.divider}></div>
        <h2>14. Do you offer subscription-based office supply services?</h2>
        <p>Yes. We are building flexible office restock subscription plans that allow businesses to receive recurring deliveries based on their workplace consumption and operational needs.</p>
        <div className={styles.divider}></div>
        <h2>15. Why should businesses choose Office Aura Kenya?</h2>
        <p>Office Aura Kenya combines office restocking, employee experience kits, and event fulfillment services under one modern workplace solutions brand. We focus on quality products, dependable delivery, customized solutions, and helping businesses create productive and professional work environments.</p>
        <div className={styles.divider}></div>
         <h2>16. Can you support corporate onboarding for multiple employees?</h2>
         <p>Yes. We can prepare and fulfill onboarding kits for teams of all sizes, including personalized packaging, branded materials, and coordinated delivery for new employee onboarding programs.</p>
        <div className={styles.divider}></div>
        <h2>17. Do you provide workplace solutions for remote and hybrid teams?</h2>
        <p>Yes. Office Aura offers remote work kits and hybrid workspace solutions designed to help employees stay productive whether they are working from home, remotely, or in-office.</p>
        <div className={styles.divider}></div>
        <h2>18. How can Office Aura help improve workplace productivity?</h2>
        <p>By ensuring businesses always have the supplies, tools, and employee support materials they need, Office Aura helps reduce operational interruptions, improve organization, enhance employee experience, and create more efficient workplaces.</p>
        <div className={styles.divider}></div>
        <h2>Still Have Questions?</h2>
        <p>We’re happy to help.</p>
        <p><MdEmail style={{marginRight: '10px', color: "green"}}/> Email: <span>support@officeaura.co.ke</span></p>
         <p><FaPhoneAlt style={{marginRight: '10px', color: "green"}}/> Whatsapp: <span>+254 704 610 605</span></p>
         <p><BiWorld style={{marginRight: '10px', color: "green"}}/> Website: <Link href={'/contact'}><span>www.officeaura.co.ke/contact</span></Link></p>
         <p>Our team responds A.S.A.P</p>
        <p>Thank you for choosing <span>Office Aura Kenya.</span></p>
     </div>

    </div>
  )
}

export default page