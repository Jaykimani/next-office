import styles from './faqs.module.css'
import type { Metadata } from "next";
import Link from 'next/link';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Office Aura Kenya",
  description:
    "Office Aura Kenya FAQs: Learn about office décor delivery timelines, M-Pesa payments, shipping fees, return policies, and shopping for workspace accessories across Kenya.",

  keywords: [
    "office décor Kenya FAQ",
    "Office Aura FAQs",
    "desk accessories delivery Nairobi",
    "office décor online shop Kenya",
    "M-Pesa office décor payments",
    "returns policy office accessories Kenya",
    "workspace styling Kenya questions",
  ],

  openGraph: {
    title: "FAQs | Office Aura Kenya",
    description:
      "Get answers about Office Aura Kenya delivery, payments, returns, and shopping for office décor and workspace accessories nationwide.",
    url: "https://www.officeaura.co.ke/faqs",
    siteName: "Office Aura Kenya",
    type: "website",
  },

  alternates: {
    canonical: "https://www.officeaura.co.ke/faqs",
  },
};


const page = () => {
  return (
    <div className={styles.faqs}>
     <div className={styles.faqsInset}>
        <h1>Frequently Asked Questions (FAQ) — Office Aura Kenya</h1>
        <p>Welcome to the <span>Office Aura Kenya FAQ page</span>.</p>
        <p>Office Aura Kenya answers common questions about office décor & accessories delivery in Nairobi, M-Pesa payments, workspace styling products, and nationwide shipping across Kenya.</p>
        <p>Here you’ll find answers to the most common questions about shopping for office décor, desk accessories, and workspace interior decoration solutions in Kenya.</p>
        <p>If you need more help, feel free to contact us anytime via WhatsApp or email.</p>
        <div className={styles.divider}></div>
        <h2>1. What is Office Aura Kenya?</h2>
        <p>Office Aura is an online store in Kenya offering a wide range of:</p>
        <ul>
            <li>Office interior décor</li>
            <li>Modern office and desk accessories</li>
            <li>Workspace productivity & organization products</li>
            <li>Office styling essentials</li>
            <li>Office decoration solutions</li>
        </ul>
        <p>We are your one-stop shop for creating a beautiful and productive workspace.</p>
        <div className={styles.divider}></div>
        <h2>2. Do you deliver office décor across Kenya?</h2>
        <p>Yes. Office Aura delivers nationwide across Kenya, including:</p>
        <ul>
        <li>Nairobi</li>
        <li>Mombasa</li>
        <li>Kisumu</li>
        <li>Nakuru</li>
        <li>Eldoret</li>
        <li>Thika</li>
        <li>And other towns across Kenya</li>
      </ul>
      <p>We make it easy to shop for office décor online in Kenya and receive it at your doorstep.</p>
      <div className={styles.divider}></div>
      <h2>3. How long does delivery take in Kenya?</h2>
      <p>Delivery times depend on your location:</p>
      <ul>
            <li>Nairobi: <span>1–2 business days</span></li>
            <li>Other towns: <span>2–5 business days</span></li>
            <li>Remote areas: <span>Up to 7 business days</span></li>  
        </ul>
        <p>We provide updates through WhatsApp or SMS once your order is dispatched.</p>
        <div className={styles.divider}></div>
        <h2>4. How much is shipping within Nairobi and other counties?</h2>
        <p>Shipping fees depend on:</p>
        <ul>
            <li>Your delivery location</li>
            <li>Package size and weight</li>
            <li>Courier partner used</li>  
        </ul>
        <p>Delivery charges are shown at checkout or confirmed by our support team before dispatch.</p>
        <div className={styles.divider}></div>
        <h2>5. Can I pay using M-Pesa?</h2>
        <p>Yes. Office Aura supports <span>M-Pesa payments</span>, making it convenient for customers across Kenya.</p>
        <p>We also support other payment options where available, including cash payments and card payments.</p>
        <div className={styles.divider}></div>
        <h2>6. Do you offer Cash on Delivery in Kenya?</h2>
        <p>Cash on Delivery may be available for select locations or special arrangements.</p>
        <p>Please contact us via WhatsApp to confirm if this option is available for your area.</p>
        <div className={styles.divider}></div>
        <h2>7. What types of office décor products do you sell?</h2>
        <p>Office Aura offers everything you need for office interior styling, including:</p>
        <ul>
            <li>Desk top accessories and gadgets</li>
            <li>Office Wall accessories e.g Wall art and office prints</li>
            <li>Modern office lighting</li> 
            <li>Planters and greenery décor</li>
            <li>Vibe-based workspace essentials e.g Minimalist, Executive</li> 
            <li>Eco-friendly office décor and accessories</li>
        </ul>
        <p>We curate products that match different office vibes and atmospheres.</p>
        <div className={styles.divider}></div>
        <h2>8. Can I shop by office vibe or style?</h2>
        <p>Yes. Office Aura allows you to shop by atmosphere, such as:</p>
         <ul>
            <li>Minimalist office décor</li>
            <li>Executive / CEO office vibes</li>
            <li>Cozy home office setup</li> 
            <li>Modern professional workspace</li>
            <li>Nature-inspired office décor</li>
            <li>Creative studio styling</li> 
        </ul>
        <p>This makes it easier to design an office that matches your personality and brand.</p>
        <div className={styles.divider}></div>
        <h2>9. Do you offer office décor bundles or full workspace setups?</h2>
        <p>Yes. We provide curated office décor bundles for:</p>
         <ul>
            <li>Home offices</li>
            <li>Startups</li>
            <li>Executive offices</li> 
            <li>Corporate workspaces</li>
        </ul>
        <p>Bundles are a great way to upgrade your workspace quickly and affordably.</p>
        <div className={styles.divider}></div>
        <h2>10. Can businesses and corporate offices order in bulk?</h2>
        <p>Absolutely. Office Aura supports corporate and bulk office décor & accessories orders for:</p>
        <ul>
            <li>Office renovations</li>
            <li>Workspace branding projects</li>
            <li>New company setups</li> 
            <li>Boardrooms and executive suites</li>
        </ul>
        <p>Contact us for customized quotations and delivery arrangements.</p>
        <div className={styles.divider}></div>
        <h2>11. What is your return policy?</h2>
        <p>We accept returns within <span>7 days of delivery</span> for eligible items, provided they are:</p>
         <ul>
            <li>Unused</li>
            <li>In original packaging</li>
            <li>Returned with proof of purchase</li> 
        </ul>
        <p>Damaged or incorrect items must be reported within <span>48 hours</span>.</p>
        <p>Please visit our <Link href={'/return-refund'}>Returns & Refund Policy</Link> page for full details.</p>
        <div className={styles.divider}></div>
        <h2>12. What if my order arrives damaged?</h2>
        <p>If your ordered item arrives damaged, contact us within 48 hours with:</p>
         <ul>
            <li>Your order number</li>
            <li>Photos of the product and packaging</li>
        </ul>
        <p>We will arrange a replacement or refund according to our policy.</p>
        <div className={styles.divider}></div>
        <h2>13. Can I cancel or change my order after placing it?</h2>
        <p>Orders can be changed or canceled only if they have not yet been dispatched.</p>
        <p>Please contact our support team as soon as possible after placing your order.</p>
        <div className={styles.divider}></div>
        <h2>14. How do I contact Office Aura Kenya?</h2>
        <p>You can reach us anytime through:</p>
         <p><MdEmail style={{marginRight: '10px', color: "green"}}/> Email: <span>support@officeaura.co.ke</span></p>
         <p><FaPhoneAlt style={{marginRight: '10px', color: "green"}}/> Whatsapp: <span>+254 704 610 605</span></p>
         <p><BiWorld style={{marginRight: '10px', color: "green"}}/> Website: <span>www.officeaura.co.ke/contact</span></p>
         <p>Our team responds within 24–48 hours</p>
         <div className={styles.divider}></div>
         <h2>15. Why should I buy office décor from Office Aura Kenya?</h2>
         <p>Office Aura is trusted by customers across Kenya because we offer:</p>
          <ul>
            <li>Stylish, modern office interior accessories</li>
            <li>Affordable workspace décor solutions</li>
            <li>Fast delivery in Nairobi and nationwide</li> 
            <li>M-Pesa-friendly checkout</li>
            <li>Customer support via WhatsApp</li>
            <li>Curated products for every office vibe</li> 
        </ul>
        <p>We are committed to helping you create an inspiring workspace.</p>
        <div className={styles.divider}></div>
        <h2>16. Do you have a physical shop location?</h2>
        <p>Office Aura currently operates primarily as an online store, allowing us to serve customers across Kenya efficiently.</p>
        <p>Pickup options may be available depending on location — contact us for details.</p>
        <div className={styles.divider}></div>
        <h2>17. How do I stay updated on new arrivals and offers?</h2>
        <p>To stay updated on the latest office décor trends in Kenya, you can:</p>
         <ul>
            <li>•	Follow us on Instagram</li>
            <li>•	Join our WhatsApp updates list</li>
            <li>•	Subscribe to our email newsletter</li> 
        </ul>
        <p>New products and décor bundles are added regularly.</p>
        <div className={styles.divider}></div>
        <h2>Still Have Questions?</h2>
        <p>We’re happy to help.</p>
        <p><MdEmail style={{marginRight: '10px', color: "green"}}/> Email: <span>support@officeaura.co.ke</span></p>
        <p><FaPhoneAlt style={{marginRight: '10px', color: "green"}}/> Whatsapp: <span>+254 704 610 605</span></p>
        <p>Thank you for choosing <span>Office Aura Kenya — your one-stop shop for office décor and workspace accessories delivered nationwide.</span></p>
     </div>

    </div>
  )
}

export default page