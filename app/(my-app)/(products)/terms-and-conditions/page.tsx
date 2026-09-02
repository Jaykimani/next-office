import styles from './terms.module.css'
import type { Metadata } from "next";
import Link from 'next/link';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";

export const metadata: Metadata = {
  title: "Terms & Conditions | OfficeFlow Kenya",
  description:
    "Read the Terms & Conditions governing the use of OfficeFlow Kenya's website, office restock services, deliveries, payments, business accounts, and workplace supply solutions.",
  keywords: [
    "OfficeFlow terms and conditions",
    "office restock services terms Kenya",
    "office supplies delivery terms Kenya",
    "OfficeFlow policies",
    "business account terms Kenya"
  ],

  alternates: {
    canonical: "https://officeflow.co.ke/terms-and-conditions",
  },

  openGraph: {
    title: "Terms & Conditions | OfficeFlow Kenya",
    description:
      "Terms & Conditions for using OfficeFlow Kenya's website and office restock services.",
    url: "https://officeflow.co.ke/terms-and-conditions",
    siteName: "OfficeFlow",
    locale: "en_KE",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Terms & Conditions | OfficeFlow Kenya",
    description:
      "Review the Terms & Conditions for OfficeFlow Kenya's website and workplace restock services.",
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
      "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://officeflow.co.ke" },
    { "@type": "ListItem", "position": 2, "name": "Terms & Conditions", "item": "https://officeflow.co.ke/terms-and-conditions" }
  ]
    },
    {
      "@type": "WebPage",
      "@id": "https://officeflow.co.ke/terms-and-conditions",
      name: "Terms & Conditions",
      url: "https://officeflow.co.ke/terms-and-conditions",
      description:
        "Terms & Conditions governing the use of OfficeFlow Kenya's website and office restock services."
    },
  ]
};


  return (<>

  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(schema),
  }}
/>
  
    <main className={styles.terms}>
      <div className={styles.termsInset}>
       <h1>Terms & Conditions — OfficeFlow Kenya</h1>
       <p><span>Last Updated: 31/05/2026</span></p>
       <p>Welcome to OfficeFlow Kenya. These Terms & Conditions govern your access to and use of our website and office restock services. By using our website or engaging our services, you agree to be bound by these Terms & Conditions.</p>
       <p>If you do not agree with any part of these terms, please refrain from using our website or services.</p>
       <div className={styles.divider}></div>
       <h2>1. About OfficeFlow</h2>
       <p>OfficeFlow Kenya provides office restock and workplace supply solutions for businesses in Nairobi and across Kenya. Our services may include the supply and delivery of workplace essentials such as stationery, printing materials, pantry supplies, cleaning products, IT consumables, and other office-related items.</p>
       <div className={styles.divider}></div>
       <h2>2. Eligibility</h2>
       <p>By using our services, you confirm that::</p>
       <ul>
        <li>You are at least 18 years old.</li>
        <li>You have the authority to act on behalf of a business or organization where applicable.</li>
        <li>The information you provide is accurate and complete.</li>
       </ul>
       <p>We reserve the right to restrict access if these Terms are violated.</p>
       <div className={styles.divider}></div>
       <h2>3. Quotations and Pricing</h2>
       <p>All quotations provided by OfficeFlow are subject to availability and may change without prior notice.</p>
       <p>While we strive to maintain accurate pricing, prices may vary due to supplier costs, product availability, market conditions, or changes in taxes and fees.</p>
       <p>A quotation does not constitute a binding agreement until confirmed by both parties.</p>
        <div className={styles.divider}></div>
       <h2>4. Orders and Restock Requests</h2>
       <p>Orders may be placed through:</p>
        <ul>
        <li>Our website</li>
        <li>Email communication</li>
        <li>WhatsApp communication</li>
        <li>Direct consultation with our team</li>
       </ul>
       <p>OfficeFlow reserves the right to accept, decline, modify, or cancel any order where necessary.</p>
        <div className={styles.divider}></div>
        <h2>5. Business Accounts and Recurring Restock Plans</h2>
        <p>OfficeFlow may offer Business Accounts and recurring office restock arrangements.</p>
        <p>For recurring restock services:</p>
        <ul>
        <li>Delivery schedules will be agreed upon in advance.</li>
        <li>Businesses are responsible for notifying OfficeFlow of significant changes in supply requirements.</li>
        <li>OfficeFlow may adjust recommended supply quantities based on availability and operational requirements.</li>
       </ul>
       <p>Specific account terms may be outlined separately in service agreements where applicable.</p>
      
        <div className={styles.divider}></div>
        <h2>6. Payment Terms</h2>
        <p>Payment methods may include:</p>
        <ul>
        <li>Cash on delivery</li>
        <li>M-Pesa</li>
        <li>Bank transfer</li>
        <li>Approved invoicing arrangements</li>
       </ul>
       <p>Payment terms will be communicated before order fulfillment.</p>
       <p>For invoice-based clients:</p>
       <ul>
        <li>Payments must be made within the agreed payment period.</li>
        <li>Late payments may result in delayed deliveries or suspension of services.</li>
       </ul>
       <p>OfficeFlow reserves the right to charge applicable recovery costs for overdue balances where permitted by law.</p>
       <div className={styles.divider}></div>
       <h2>7. Delivery and Fulfillment</h2>
       <p>OfficeFlow delivers office supplies and workplace essentials to businesses in Nairobi and across Kenya.</p>
       <p>Delivery timelines are estimates and may be affected by:</p>
       <ul>
        <li>Courier delays</li>
        <li>Weather conditions</li>
        <li>Public holidays</li>
        <li>Supply chain disruptions</li>
        <li>Circumstances beyond our reasonable control</li>
       </ul>
       <p>While we strive to meet estimated delivery schedules, we do not guarantee delivery times.</p>
      <div className={styles.divider}></div>
       <h2>8. Product Availability</h2>
       <p>Product availability may vary from time to time.</p>
       <p>Where a requested product is unavailable, OfficeFlow may:</p>
       <ul>
        <li>Recommend a suitable alternative</li>
        <li>Adjust the order with customer approval</li>
        <li>Issue a refund where applicable</li>
       </ul>
       <p>We reserve the right to discontinue products without notice.</p>
       <div className={styles.divider}></div>
       <h2>9. Returns and Replacements</h2>
       <p>Customers should inspect deliveries upon receipt.</p>
       <p>If an item arrives damaged, defective, or incorrect:</p>
        <ul>
        <li>Notify OfficeFlow within 48 hours of delivery.</li>
        <li>Provide supporting information and photographs where applicable.</li>
       </ul>
       <p>Approved claims may qualify for replacement, correction, or refund in accordance with our return procedures.</p>
       <div className={styles.divider}></div>
       <h2>10. Customer Responsibilities</h2>
       <p>Customers are responsible for:</p>
        <ul>
        <li>Providing accurate delivery information.</li>
        <li>Ensuring authorized personnel are available to receive deliveries.</li>
        <li>Communicating changes to restock requirements promptly.</li>
       </ul>
       <p>OfficeFlow shall not be responsible for delays caused by inaccurate information provided by customers.</p>
       <div className={styles.divider}></div>
       <h2>11. Intellectual Property</h2>
       <p>All website content, including text, graphics, branding, logos, designs, and other materials, is the property of OfficeFlow or its licensors and is protected by applicable intellectual property laws.</p>
       <p>You may not reproduce, distribute, modify, or use any content without prior written permission.</p>
       <div className={styles.divider}></div>
       <h2>12. Limitation of Liability</h2>
       <p>To the maximum extent permitted by law, OfficeFlow shall not be liable for:</p>
       <ul>
        <li>Indirect or consequential losses</li>
        <li>Loss of profits</li>
        <li>Loss of business opportunities</li>
        <li>Operational interruptions resulting from circumstances beyond our control</li>
       </ul>
       <p>Our total liability relating to any order shall not exceed the amount paid for the relevant order or service.</p>
       <div className={styles.divider}></div>
       <h2>13. Website Availability</h2>
       <p>We aim to keep our website available and functioning properly at all times. However, we do not guarantee uninterrupted access and may suspend or modify website functionality for maintenance, upgrades, or operational reasons.</p>
       <div className={styles.divider}></div>
       <h2>14. Privacy</h2>
       <p>Your use of our website is also governed by our Privacy Policy, which explains how we collect, use, and protect your information.</p>
       <div className={styles.divider}></div>
       <h2>15. Changes to These Terms</h2>
       <p>OfficeFlow reserves the right to update these Terms & Conditions at any time.</p>
       <p>Changes become effective upon publication on this page. Continued use of our website or services constitutes acceptance of the updated terms.</p>
       <div className={styles.divider}></div>
       <h2>16. Governing Law</h2>
       <p>These Terms & Conditions shall be governed by and interpreted in accordance with the laws of Kenya.</p>
       <p>Any disputes arising from the use of our website or services shall be subject to the jurisdiction of the courts of Kenya.</p>
       <div className={styles.divider}></div>
       <h2>17. Contact Information</h2>
       <p>For questions about these Terms, orders, or customer support, please contact us:</p>
       <p><MdEmail style={{marginRight: '10px', color: "green"}}/> Email: <span>support@officeflow.co.ke</span></p>
      <p><FaPhoneAlt style={{marginRight: '10px', color: "green"}}/> Whatsapp: <span>+254 704 610 605</span></p>
      <p><BiWorld style={{marginRight: '10px', color: "green"}}/> Website: <span>www.officeflow.co.ke/contact</span></p>
      <p>Response time: 24–48 hours</p>
      </div>
    </main>
    </>
  )
}

export default page