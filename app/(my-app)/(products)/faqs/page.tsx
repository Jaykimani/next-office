import styles from './faqs.module.css'
import type { Metadata } from "next";
import Link from 'next/link';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";


export const metadata: Metadata = {
  title: "Frequently Asked Questions | OfficeFlow Kenya",
  description:
    "Find answers about OfficeFlow Kenya's office supplies, office restock services, delivery across Nairobi and Kenya, custom restock plans, business accounts, payments, and workplace supply solutions.",

  keywords: [
    "OfficeFlow FAQs",
    "office supplies Nairobi FAQ",
    "office restock services Kenya",
    "office supplies Kenya",
    "office delivery Nairobi",
    "custom restock plans Kenya",
    "business office supplies Kenya",
    "workplace supplies Kenya",
    "office consumables Kenya",
    "corporate office supplies Nairobi"
  ],

  alternates: {
    canonical: "https://www.officeflow.co.ke/faqs",
  },

  openGraph: {
    title: "FAQs | OfficeFlow Kenya",
    description:
      "Answers to common questions about office supplies, office restock services, delivery, business accounts, and workplace supply solutions in Kenya.",
    url: "https://www.officeflow.co.ke/faqs",
    siteName: "OfficeFlow",
    locale: "en_KE",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "OfficeFlow Kenya FAQs",
    description:
      "Get answers about OfficeFlow office supplies, custom restock plans, delivery, and business supply solutions across Kenya.",
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
      "@type": "FAQPage",
      "@id": "https://www.officeflow.co.ke/faqs",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is OfficeFlow Kenya?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "OfficeFlow Kenya is a workplace supply and office restock company that helps businesses stay fully stocked with office supplies, printing materials, pantry items, cleaning products, and workplace essentials."
          }
        },
        {
          "@type": "Question",
          "name": "Do you deliver office supplies in Nairobi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. OfficeFlow provides office supply delivery throughout Nairobi including CBD, Westlands, Upper Hill, Kilimani, Karen, Gigiri, Industrial Area, and surrounding business districts."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer office supply delivery outside Nairobi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. OfficeFlow delivers office supplies and workplace essentials across Kenya including Mombasa, Kisumu, Nakuru, Eldoret, Thika, and other towns."
          }
        },
        {
          "@type": "Question",
          "name": "What office supplies do you provide?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We supply stationery, printing paper, printer consumables, pantry supplies, cleaning products, IT consumables, and workplace safety essentials."
          }
        },
        {
          "@type": "Question",
          "name": "How does OfficeFlow work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Businesses can either order office essentials as needed or create a custom restock plan with scheduled deliveries and ongoing workplace supply management."
          }
        },
        {
          "@type": "Question",
          "name": "What is a custom restock plan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A custom restock plan is a personalized office supply program based on your business requirements and usage patterns, helping prevent supply shortages and simplify procurement."
          }
        },
        {
          "@type": "Question",
          "name": "How do I create a custom restock plan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Contact OfficeFlow, share your office requirements and frequently used products, choose a delivery schedule, and our team will create a tailored restock program."
          }
        },
        {
          "@type": "Question",
          "name": "Can I set up recurring office deliveries?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Businesses can choose weekly, bi-weekly, monthly, or customized delivery schedules through a custom restock plan."
          }
        },
        {
          "@type": "Question",
          "name": "Who can use OfficeFlow services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "OfficeFlow serves SMEs, startups, corporate offices, NGOs, schools, clinics, hospitals, law firms, agencies, and coworking spaces."
          }
        },
        {
          "@type": "Question",
          "name": "How long does delivery take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Delivery within Nairobi typically takes 1–2 business days while deliveries outside Nairobi generally take 2–5 business days depending on location."
          }
        },
        {
          "@type": "Question",
          "name": "What payment methods do you accept?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We accept M-Pesa, bank transfers, and invoice-based payments for approved business accounts."
          }
        },
        {
          "@type": "Question",
          "name": "What are Business Accounts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Business Accounts provide benefits such as monthly invoicing, scheduled deliveries, recurring supply management, and dedicated account support."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if an item is out of stock?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We may recommend an alternative product, adjust the order with approval, or provide a refund where applicable."
          }
        },
        {
          "@type": "Question",
          "name": "What if I receive a damaged or incorrect item?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Contact us within 48 hours of delivery with your order details and supporting photos. We will review the issue and arrange a replacement, correction, or refund where appropriate."
          }
        },
       
        {
          "@type": "Question",
          "name": "How do I place an order?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Orders can be placed through our website, inquiry forms, WhatsApp, email, or by requesting a custom quotation."
          }
        },
        {
          "@type": "Question",
          "name": "Why should businesses choose OfficeFlow?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "OfficeFlow helps businesses save time, reduce procurement stress, avoid supply shortages, and simplify workplace supply management through reliable delivery and custom restock solutions."
          }
        }
      ]
    },
    {
       "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.officeflow.co.ke" },
    { "@type": "ListItem", "position": 2, "name": "FAQs", "item": "https://www.officeflow.co.ke/faqs" }
  ]
    }
  ]
};


  return (<>
 
    <script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
    <div className={styles.faqs}>
      
     <div className={styles.faqsInset}>
        <h1>Frequently Asked Questions (FAQs) — OfficeFlow Kenya</h1>
        <p><span>Last Updated: 31/05/2026</span></p>
        <p>Find answers to common questions about OfficeFlow Kenya's office supplies, workplace restock services, delivery options, business accounts, and workplace supply solutions for businesses in Nairobi and across Kenya.</p>
        <div className={styles.divider}></div>
        <h2>1. What is OfficeFlow Kenya?</h2>
        <p>OfficeFlow Kenya is a workplace supply and office restock company that helps businesses stay fully stocked with essential office supplies. We provide office stationery, printing materials, pantry supplies, cleaning products, IT consumables, and other workplace essentials to businesses across Nairobi and Kenya.</p>
        <div className={styles.divider}></div>
        <h2>2. Do you deliver office supplies in Nairobi?</h2>
        <p>Yes. We provide office supply delivery throughout Nairobi, including areas such as CBD, Westlands, Upper Hill, Kilimani, Karen, Gigiri, Industrial Area, and surrounding business districts.</p>
        <div className={styles.divider}></div>
        <h2>3. Do you offer office supply delivery outside Nairobi?</h2>
        <p>Yes. OfficeFlow delivers office supplies and workplace essentials across Kenya, including Mombasa, Kisumu, Nakuru, Eldoret, Thika, and other towns and business hubs.</p>
        <div className={styles.divider}></div>
        <h2>4. What office supplies do you provide?</h2>
        <p>We supply everything a modern workplace needs, including:</p>
        <ul>
          <li>Office stationery (pens, notebooks, files)</li>
          <li>Printing paper and envelopes</li>
          <li>Printer ink and toner</li>
          <li>Pantry supplies (tea, coffee, sugar, water)</li>
          <li>Cleaning and hygiene products</li>
          <li>IT consumables (cables, adapters, batteries)</li>
        </ul>
      <div className={styles.divider}></div>
      <h2>5. How does OfficeFlow work?</h2>
      <p>OfficeFlow is designed to make it easy for businesses to get the office supplies they need.</p>
      <p>You can either:</p>
      <ul>
        <li>Order office essentials as needed through our website, similar to a traditional office supplies store.</li>
        <li>Create a custom restock plan for scheduled deliveries and ongoing workplace supply management.</li>
      </ul>
      <p>Whether you need a one-time purchase or a long-term restock solution, OfficeFlow helps businesses stay supplied with stationery, printing materials, pantry items, cleaning products, and IT consumables.</p>
        <div className={styles.divider}></div>
        <h2>6. What is a custom restock plan?</h2>
        <p>A custom restock plan is a personalized office supply program designed around your business's specific needs and usage patterns.</p>
        <p>Instead of placing orders every time supplies run low, we help you create a recurring supply schedule for the products your workplace uses most often.</p>
        <p>A custom restock plan may include:</p>
        <ul>
          <li>Stationery and office supplies</li>
          <li>Printing paper and printer consumables</li>
          <li>Pantry and beverage supplies</li>
          <li>Cleaning and hygiene products</li>
          <li>IT consumables and accessories</li>
        </ul>
        <p>The goal is to reduce procurement workload and ensure your office never runs out of essential supplies.</p>
        <div className={styles.divider}></div>
        <h2>7. How do I create a custom restock plan?</h2>
        <p>Creating a custom restock plan is simple:</p>
        <ol>
          <li>Contact the OfficeFlow team.</li>
          <li>Tell us about your office size and supply requirements.</li>
          <li>Share the products your workplace uses regularly.</li>
          <li>Choose a delivery schedule that works for your business.</li>
          <li>We create a tailored restock plan and delivery program.</li>
        </ol>
        <p>Our team can recommend suitable products, quantities, and delivery frequencies based on your business needs.</p>
        <div className={styles.divider}></div>
        <h2>8. Can I set up recurring office deliveries?</h2>
        <p>Yes. Businesses using a custom restock plan can choose:</p>
        <ul>
          <li>Weekly deliveries</li>
          <li>Bi-weekly deliveries</li>
          <li>Monthly deliveries</li>
          <li>Customized delivery schedules</li>
        </ul>
        <p>Recurring deliveries help ensure your workplace remains fully stocked without the need for constant reordering.</p>
        <div className={styles.divider}></div> 
        <h2>9. Who can use OfficeFlow services?</h2>
        <p>Our services are designed for:</p>
        <ul>
          <li>SMEs</li>
          <li>Startups</li>
          <li>Corporate offices</li>
          <li>NGOs</li>
          <li>Schools and educational institutions</li>
          <li>Clinics and hospitals</li>
          <li>Law firms</li>
          <li>Agencies and coworking spaces</li>
        </ul>
        <p>Whether you're a small team or a large organization, OfficeFlow can support your workplace supply needs.</p>
        <div className={styles.divider}></div>
        <h2>10. How long does delivery take?</h2>
        <p>Delivery times depend on your location:</p>
        <h3>Nairobi</h3>
        <ul>
          <li>Same-day or next-day delivery may be available for eligible orders.</li>
          <li>Standard delivery typically takes 1–2 business days.</li>
        </ul>
        <h3>Outside Nairobi</h3>
        <ul>
          <li>Most deliveries take 2–5 business days.</li>
        </ul>
        <h3>Remote Areas</h3>
        <ul>
          <li>Delivery may take 4–7 business days depending on location.</li>
        </ul>
        <div className={styles.divider}></div>
        <h2>11. What payment methods do you accept?</h2>
        <p>We currently support:</p>
        <ul>
          <li>Cash on delivery</li>
          <li>M-Pesa</li>
          <li>Bank transfers</li>
          <li>Invoice-based payments for approved business accounts</li>
        </ul>
        <p>Additional payment options may be introduced in the future.</p>
        <div className={styles.divider}></div>
        <h2>12. What are Business Accounts?</h2>
        <p>Business Accounts are designed for organizations that require ongoing workplace supplies.</p>
        <p>Benefits may include:</p>
        <ul>
          <li>Monthly invoicing</li>
          <li>Scheduled deliveries</li>
          <li>Simplified procurement</li>
          <li>Recurring supply management</li>
          <li>Dedicated account support</li>
        </ul>
        <p>Business Accounts help companies manage office supplies more efficiently.</p>
        <div className={styles.divider}></div>
        <h2>13. What happens if an item is out of stock?</h2>
        <p>If a product becomes unavailable, we may:</p>
        <ul>
          <li>Recommend a suitable alternative</li>
          <li>Adjust the order with your approval</li>
          <li>Provide a refund where applicable</li>
        </ul>
        <p>We always aim to find the best solution with minimal disruption.</p>
        <div className={styles.divider}></div>
        <h2>14. What if I receive a damaged or incorrect item?</h2>
        <p>If you receive a damaged, defective, or incorrect item:</p>
        <ul>
          <li>Contact us within 48 hours of delivery.</li>
          <li>Provide your order details.</li>
          <li>Share photographs of the item and packaging if applicable.</li>
        </ul>
        <p>Our team will review the issue and arrange a replacement, correction, or refund where appropriate.</p>
        <div className={styles.divider}></div>
        <h2>15. How do I place an order?</h2>
        <p>You can place an order by:</p>
        <ul>
          <li>Ordering through our website</li>
          <li>Submitting an inquiry form</li>
          <li>Contacting us via WhatsApp</li>
          <li>Emailing our team</li>
          <li>Requesting a custom quotation</li>
        </ul>
        <p>For businesses with ongoing requirements, we recommend discussing a custom restock plan.</p>
        <div className={styles.divider}></div>
         <h2>16. Why should businesses choose OfficeFlow?</h2>
         <p>OfficeFlow helps businesses save time, reduce procurement stress, and avoid supply shortages through reliable workplace supply solutions.</p>
         <p>Businesses choose OfficeFlow because we offer:</p>
         <ul>
          <li>Office supplies delivery across Nairobi and Kenya</li>
          <li>Custom restock plans</li>
          <li>Recurring supply management</li>
          <li>Workplace convenience</li>
          <li>Bulk office supply fulfillment</li>
          <li>Business-friendly procurement solutions</li>
         </ul>
         <p>Whether you need a one-time order or a complete workplace restock system, OfficeFlow provides a reliable solution for keeping your business fully supplied.</p>
        <div className={styles.divider}></div>
        <h2>Still Have Questions?</h2>
        <p>We’re happy to help.</p>
        <p><MdEmail style={{marginRight: '10px', color: "green"}}/> Email: <span>support@officeflow.co.ke</span></p>
         <p><FaPhoneAlt style={{marginRight: '10px', color: "green"}}/> Whatsapp: <span>+254 704 610 605</span></p>
         <p><BiWorld style={{marginRight: '10px', color: "green"}}/> Website: <Link href={'/contact'}><span>www.officeflow.co.ke/contact</span></Link></p>
         <p>Our team responds A.S.A.P</p>
        <p>Thank you for choosing <span>OfficeFlow Kenya.</span></p>
     </div>

    </div>
     </>
  )
}

export default page