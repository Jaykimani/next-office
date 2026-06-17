import type { Metadata } from "next";
import styles from './return.module.css'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";

export const metadata: Metadata = {
  title: "Returns & Refunds Policy | OfficeFlow Kenya",
  description:
    "Read OfficeFlow Kenya's Returns & Refunds Policy, including information about damaged items, incorrect deliveries, replacements, refunds, and workplace supply orders.",
  keywords: [
    "OfficeFlow returns policy",
    "OfficeFlow refunds",
    "office supplies returns Kenya",
    "office restock refunds Kenya",
    "workplace supplies returns policy",
    "OfficeFlow customer support"
  ],

  alternates: {
    canonical: "https://www.officeflow.co.ke/returns-refunds",
  },

  openGraph: {
    title: "Returns & Refunds Policy | OfficeFlow Kenya",
    description:
      "Learn about OfficeFlow Kenya's policy for returns, replacements, and refunds for office restock and workplace supply orders.",
    url: "https://www.officeflow.co.ke/returns-refunds",
    siteName: "OfficeFlow",
    locale: "en_KE",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Returns & Refunds Policy | OfficeFlow Kenya",
    description:
      "Information on returns, replacements, and refunds for OfficeFlow Kenya customers.",
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
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.officeflow.co.ke" },
    { "@type": "ListItem", "position": 2, "name": "Returns & Refunds", "item": "https://www.officeflow.co.ke/return-refund" }
  ]
    },
    {
      "@type": "WebPage",
      "@id": "https://www.officeflow.co.ke/returns-refunds",
      "name": "Returns & Refunds Policy",
      "url": "https://www.officeflow.co.ke/returns-refunds",
      "description":
        "OfficeFlow Kenya's Returns & Refunds Policy covering replacements, refunds, damaged items, and delivery issues."
    }
  ]
};


    return(<>
    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(schema),
  }}
/>
        <main className={styles.returns}>
         <div className={styles.returnsInset}>
            <h1>Returns & Refund Policy (Kenya)</h1>
            <p><span>Last Updated: 31/05/2026</span></p>
            <p>At OfficeFlow Kenya, we are committed to providing reliable office restock services and quality workplace supplies to businesses across Nairobi and Kenya. We take great care to ensure that all products are supplied accurately and in good condition.</p>
            <p>This Returns & Refunds Policy outlines the circumstances under which returns, replacements, and refunds may be requested.</p>
            <p>This Return Policy applies to all orders placed through www.officeflow.co.ke and delivered across Kenya.</p>
            <div className={styles.divider}></div>
            <h2>Overview</h2>
            <p>OfficeFlow supplies workplace essentials including stationery, printing materials, pantry supplies, cleaning products, IT consumables, and other office-related items.</p>
            <p>If you receive damaged, defective, incorrect, or incomplete items, we will work with you to resolve the issue promptly and fairly.</p>
            <div className={styles.divider}></div>
            <h2>1. Eligible Returns</h2>
            <p>You may request a return, replacement, or refund if:</p>
             <ul>
                <li>The item delivered is damaged.</li>
                <li>The item delivered is defective.</li>
                <li>The wrong item was supplied.</li>
                <li>The quantity delivered does not match the confirmed order.</li>
                <li>The product is unusable due to a verified supplier or delivery issue.</li>
            </ul>
            <p>All requests must be submitted within 48 hours of receiving your delivery.</p>
            <div className={styles.divider}></div>
            <h2>2. Non-Returnable Items</h2>
            <p>OfficeFlow may not accept returns for:</p>
            <ul>
                <li>Products damaged after delivery due to misuse or improper handling.</li>
                <li>Items that have already been opened, used, or consumed unless defective.</li>
                <li>Customized, special-order, or client-specific products.</li>
                <li>Perishable pantry items where quality concerns are not reported immediately upon delivery.</li>
                <li>Change-of-mind purchases after order confirmation and fulfillment.</li>
            </ul>
             <div className={styles.divider}></div>
             <h2>3. Reporting a Delivery Issue</h2>
             <p>If you receive a damaged, defective, or incorrect item, please contact OfficeFlow within <span>48 hours</span> of delivery and provide:</p>
             <ul>
                <li>Your order or invoice number</li>
                <li>A description of the issue</li>
                <li>Clear photographs of the affected item(s)</li>
                <li>Photographs of any damaged packaging where applicable</li>
            </ul>
            <p>This information helps us investigate and resolve the matter quickly.</p>
            <div className={styles.divider}></div>
            <h2>4. Replacements</h2>
            <p>Where a claim is approved, OfficeFlow may offer a replacement item at no additional cost.</p>
            <p>Replacement timelines may vary depending on product availability and delivery location.</p>
             <div className={styles.divider}></div>
             <h2>5. Refunds</h2>
             <p>Refunds may be issued where:</p>
              <ul>
                <li>A replacement is unavailable.</li>
                <li>The item cannot be supplied as ordered.</li>
                <li>OfficeFlow determines that a refund is the most appropriate resolution.</li>
            </ul>
            <p>Approved refunds will be processed using the original payment method where possible.</p>
            <p>Refund processing times may vary depending on the payment provider or financial institution involved.</p>
             <div className={styles.divider}></div>
             <h2>6. Product Availability</h2>
             <p>Occasionally, a product may become unavailable after an order has been confirmed.</p>
             <p>In such cases, OfficeFlow may:</p>
             <ul>
                <li>Offer a suitable alternative product.</li>
                <li>Adjust the order with customer approval.</li>
                <li>Provide a refund for unavailable items where appropriate.</li>
            </ul>
            <div className={styles.divider}></div>
            <h2>7. Business Accounts & Scheduled Restock Clients</h2>
            <p>For businesses enrolled in recurring restock plans or Business Accounts:</p>
            <ul>
                <li>Any delivery discrepancies should be reported within 48 hours of delivery.</li>
                <li>OfficeFlow will prioritize resolution of issues affecting ongoing restock schedules.</li>
                <li>Adjustments may be applied to future deliveries where appropriate.</li>
            </ul>
           
            <div className={styles.divider}></div>
            <h2>8. Return Shipping & Collection</h2>
            <p>Where a return is approved due to an OfficeFlow error, defective product, or delivery issue:</p>
            <ul>
              <li>OfficeFlow may arrange collection of the affected item.</li>
              <li>Reasonable return logistics costs may be covered by OfficeFlow.</li>
            </ul>
            <p>Customers should not dispose of disputed items until advised by our support team.</p>
            <div className={styles.divider}></div>
            <h2>9. Limitation of Liability</h2>
            <p>OfficeFlow's responsibility is limited to replacement, correction, or refund of affected products.</p>
            <p>We are not liable for indirect losses, business interruption, or consequential damages resulting from product defects, delivery delays, or supply shortages.</p>
            <div className={styles.divider}></div>
            <h2>Contact Us</h2>
            <p>For returns, replacements, or refund requests, please contact:</p>
            <p><MdEmail style={{marginRight: '10px', color: "green"}}/> Email: <span>support@officeflow.co.ke</span></p>
            <p><FaPhoneAlt style={{marginRight: '10px', color: "green"}}/> Whatsapp: <span>+254 704 610 605</span></p>
            <p><BiWorld style={{marginRight: '10px', color: "green"}}/> Website: <span>www.officeflow.co.ke/contact</span></p>
            <p>We respond within <span>24–48 hours</span>.</p>
            <div className={styles.divider}></div>
            <h2>OfficeFlow Kenya</h2>
            <p>Helping businesses in Nairobi and across Kenya stay fully stocked through reliable office restock services, workplace supply solutions, and dependable delivery support.</p>
         </div>
        </main>
        </>
    )
}

export default page;
