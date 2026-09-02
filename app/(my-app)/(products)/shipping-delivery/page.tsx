import styles from './shipping.module.css'
import type { Metadata } from "next";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";


export const metadata: Metadata = {
 title: "Shipping & Delivery | OfficeFlow Office Restock Services Kenya",
  description:
    "Learn about OfficeFlow Kenya’s office restock delivery services in Nairobi and across Kenya. We deliver stationery, printing supplies, pantry items, cleaning products, and IT consumables through fast and reliable workplace supply systems.",
  keywords: [
    "office supplies delivery Kenya",
    "office delivery Nairobi",
    "office restock delivery Kenya",
    "office supplies Nairobi delivery",
    "workplace supplies Kenya delivery",
    "corporate office supplies delivery Kenya",
    "office stationery supplies Kenya",
    "office A4 printing paper supplies Kenya",
    "office printer supplies Kenya",
    "office cleaning supplies Kenya",
    "office pantry supplies Kenya"
  ],

  openGraph: {
    title: "OfficeFlow Shipping & Delivery Kenya | Office Restock Services",
    description:
      "Reliable office supply delivery and restock services in Nairobi and across Kenya. Fast, scheduled workplace deliveries for businesses.",
    url: "https://officeflow.co.ke/shipping-delivery",
    siteName: "OfficeFlow",
    type: "website",
    locale: "en_KE"
  },

  twitter: {
    card: "summary_large_image",
    title: "OfficeFlow Shipping & Delivery Kenya",
    description:
      "Fast and reliable office restock delivery services in Nairobi and Kenya for businesses and workplaces."
  },

  alternates: {
    canonical: "https://officeflow.co.ke/shipping-delivery"
  }
};


const page = () => {
  
  const schema ={
  "@context": "https://schema.org",
  "@graph": [
    {
       "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://officeflow.co.ke" },
    { "@type": "ListItem", "position": 2, "name": "Shipping & Delivery", "item": "https://officeflow.co.ke/shipping-delivery" }
  ]
    },
    {
      "@type": "Service",
      "name": "OfficeFlow Shipping & Delivery",
      "provider": {
        "@type": "Organization",
        "name": "OfficeFlow"
      },
      "serviceType": "Office Supply Delivery and Workplace Restock Services",
      "areaServed": [
        {
          "@type": "City",
          "name": "Nairobi"
        },
        {
          "@type": "Country",
          "name": "Kenya"
        }
      ],
      "description": "OfficeFlow provides reliable office restock delivery services in Nairobi and across Kenya, supplying stationery, pantry items, cleaning products, printing materials, and IT consumables to businesses."
    },
    {
      "@type": "WebPage",
      "name": "Shipping & Delivery - OfficeFlow",
      "url": "https://officeflow.co.ke/shipping-delivery",
      "description": "Information about OfficeFlow office restock delivery services in Kenya."
    }
  ]
}

  return(<>
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(schema),
  }}
/>
    <main className={styles.shippingDelivery}>
     <div className={styles.shippingInset}>
      <h1>Shipping & Delivery — OfficeFlow Kenya</h1>
      <p><span>Last Updated: 31/05/2026</span></p>
      <p>At OfficeFlow Kenya, we provide reliable office restock delivery services for businesses in Nairobi and across Kenya. We ensure workplaces stay fully stocked with essential office supplies including stationery, printing materials, pantry items, cleaning products, and IT consumables through fast and structured delivery systems.</p>
      <p>This page explains how our office supply delivery and restock system works, including timelines, coverage, and what businesses can expect when partnering with OfficeFlow.</p>
      <div className={styles.divider}></div>
      <h2>Nationwide Office Supply Delivery in Kenya</h2>
      <p>OfficeFlow delivers office restock supplies to businesses across Kenya, including:</p>
      <ul>
        <li>Nairobi</li>
        <li>Mombasa</li>
        <li>Kisumu</li>
        <li>Nakuru</li>
        <li>Eldoret</li>
        <li>Thika</li>
        <li>And other towns across Kenya</li>
      </ul>
      <p>Whether you run a small office, SME, NGO, or corporate headquarters, we ensure your workplace stays consistently supplied through our structured restock system.</p>
      <div className={styles.divider}></div>
      <h2>Delivery Timeframes</h2>
      <p>Delivery times depend on your location:</p>
      <h3>1. Nairobi Delivery</h3>
      <p>For businesses in Nairobi, OfficeFlow offers:</p>
      <ul>
        <li>Same-day or next-day delivery (depending on restock schedule)</li>
        <li>Standard delivery within 1–2 business days</li>
      </ul>
      <h3>2. Delivery Outside Nairobi</h3>
      <p>For towns and counties outside Nairobi, delivery usually takes:</p>
      <p>Estimated timeline: <span>2–5 business days</span></p>
      <p>Delivery times may vary depending on courier schedules and distance.</p>
      <h3>3. Remote Areas</h3>
      <p>For remote or hard-to-reach locations, delivery may take slightly longer:</p>
      <p>Estimated timeline: <span>4–7 business days</span></p>
      <p>We will keep you updated throughout the process.</p>
      <div className={styles.divider}></div>
      <h2>Order Processing Time</h2>
      <p>All orders are processed within:</p>
      <ul>
        <li><span>24–48 hours</span> after confirmation</li>
      </ul>
      <p>Orders placed on weekends or public holidays are processed the next business day.</p>
      <div className={styles.divider}></div>
      <h2>Shipping Fees in Kenya</h2>
      <p>Shipping costs depend on:</p>
      <ul>
        <li>Your delivery location</li>
        <li>Package size and weight</li>
        <li>Courier service used</li>
      </ul>
      <p>Delivery fees are calculated at checkout or confirmed via customer support.</p>
      <h3>Typical Shipping Options:</h3>
      <ul>
        <li>Nairobi Standard Delivery</li>
        <li>Upcountry Courier Delivery</li>
        <li>Pickup Option (if available)</li>
      </ul>
      <div className={styles.divider}></div>
      <h2>Priority & Scheduled Restock Delivery</h2>
      <p>OfficeFlow offers:</p>
      <h3>Nairobi Priority Delivery</h3>
      <p>Fast delivery for urgent office supply needs in Nairobi.</p>
      <p>To confirm availability, contact us via WhatsApp: <span>  0704610605</span></p>
      <h3>Scheduled Restock Delivery</h3>
      <p>Weekly, bi-weekly, or monthly delivery based on your office usage.</p>
      <h3>Corporate Delivery Plans</h3>
      <p>Custom delivery schedules for SMEs, corporates, NGOs, and institutions.</p>
      <div className={styles.divider}></div>
      <h2>Payment Options</h2>
      <p>To ensure smooth delivery operations, OfficeFlow supports:</p>
      <ul>
        <li>Cash on-delivery</li>
        <li>M-Pesa payments</li>
        <li>Card payment (if available)</li>
        <li>Invoice-based monthly billing (Business Accounts)</li>
      </ul>
      <p>For corporate clients, we offer monthly invoicing and consolidated procurement billing.</p>
      <div className={styles.divider}></div>
      <h2>Tracking Your Delivery</h2>
      <p>Once your order has been dispatched, we will provide updates via:</p>
       <ul>
        <li>SMS or phone call</li>
        <li>WhatsApp support</li>
        <li>Courier tracking (where available)</li>
      </ul>
      <p>We want every customer in Kenya to feel confident shopping with officeflow Kenya.</p>
      <div className={styles.divider}></div>
      <h2>Delivery Address Requirements</h2>
      <p>To avoid delays, please ensure your delivery details include:</p>
      <ul>
        <li>Business name</li>
        <li>Contact person's Full name</li>
        <li>Active phone number</li>
        <li>Town/City and County</li>
        <li>Office location (building, floor, landmark)</li>
        <li>Nearby landmark (optional but helpful)</li>
        <li>Delivery instructions (if any)</li>
      </ul>
      <p>Example:</p>
      <p>“Westlands, near Sarit Centre, ABC Plaza, 3rd Floor”</p>
      <p>Accurate information helps ensure smooth delivery.</p>
      <div className={styles.divider}></div>
       <h2>Missed Deliveries</h2>
       <p>If a delivery attempt is unsuccessful due to:</p>
        <ul>
        <li>Incorrect address</li>
        <li>Customer unreachable</li>
        <li>Restricted access to office</li>
      </ul>
      <p>The courier may reschedule delivery or return the package.</p>
      <p>Additional delivery charges may apply for repeated attempts.</p>
      <div className={styles.divider}></div>
      <h2>Damaged or Incorrect Supplies</h2>
      <p>We take care to ensure all office supplies are properly packed and delivered.</p>
      <p>If your package arrives damaged, please contact us within <span>48 hours</span> with:</p>
      <ul>
        <li>Order number</li>
        <li>Photos of the item and packaging</li>
        <li>Description of the issue</li>
      </ul>
      <p>We will assist with a replacement or return according to our Return Policy.</p>
      <div className={styles.divider}></div>
      <h2>Support and Delivery inquiries</h2>
      <p>For delivery inquiries, order updates, or support, reach out to us:</p>
      <p><MdEmail style={{marginRight: '10px', color: "green"}}/> Email: <span>support@officeflow.co.ke</span></p>
      <p><FaPhoneAlt style={{marginRight: '10px', color: "green"}}/> Whatsapp: <span>+254 704 610 605</span></p>
      <p><BiWorld style={{marginRight: '10px', color: "green"}}/> Website: <span>www.officeflow.co.ke/contact</span></p>
      <p>Response time: 24–48 hours</p>
      <div className={styles.divider}></div>
      <h2>OfficeFlow Kenya — Office Supplies Delivered Nationwide</h2>
      <p>OfficeFlow provides reliable office supply delivery and office restock services in Nairobi and across Kenya. We help businesses maintain uninterrupted operations by delivering stationery, printing materials, pantry supplies, cleaning products, and IT consumables through structured and scheduled delivery systems designed for modern workplace.</p>
      
     </div>
    </main>
    </>
  )
}

export default page