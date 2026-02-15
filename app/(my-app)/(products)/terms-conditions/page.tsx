import styles from './terms.module.css'
import type { Metadata } from "next";
import Link from 'next/link';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";

export const metadata: Metadata = {
  title: "Terms & Conditions | Office Aura Kenya",
  description:
    "Review Office Aura Kenya’s Terms & Conditions covering online purchases, payments, nationwide delivery, returns, refunds, and website usage for office décor and workspace accessories.",

  keywords: [
    "Office Aura terms and conditions",
    "office décor shop Kenya policies",
    "online shopping terms Kenya",
    "office accessories Nairobi store terms",
    "e-commerce terms Kenya",
  ],

  openGraph: {
    title: "Terms & Conditions | Office Aura Kenya",
    description:
      "Read Office Aura Kenya’s official Terms & Conditions for shopping, delivery, payments, and returns across Kenya.",
    url: "https://www.officeaura.co.ke/terms-conditions",
    siteName: "Office Aura Kenya",
    type: "website",
  },

  alternates: {
    canonical: "https://www.officeaura.co.ke/terms-conditions",
  },
};


const page = () => {
  return (
    <div className={styles.terms}>
      <div className={styles.termsInset}>
       <h1>Terms & Conditions — Office Aura Kenya</h1>
       <p>Welcome to <span>Office Aura Kenya</span>. These Terms and Conditions govern your use of our website and services, including all purchases made through www.officeaura.co.ke.</p>
       <p>By accessing our website or placing an order, you agree to comply with these Terms. Please read them carefully before shopping with us.</p>
       <div className={styles.divider}></div>
       <h2>1. About Office Aura</h2>
       <p>Office Aura is an online store offering high-quality:</p>
       <ul>
        <li>Office décor and interior accessories</li>
        <li>Desk organization products</li>
        <li>Workspace styling solutions</li>
        <li>Corporate office decoration essentials</li>
       </ul>
       <p>We deliver across Kenya, including Nairobi and other major towns.</p>
       <div className={styles.divider}></div>
       <h2>2. Use of Our Website</h2>
       <p>By using this website, you agree that:</p>
       <ul>
        <li>You are at least 18 years old or have permission from a guardian</li>
        <li>You will provide accurate personal and delivery information</li>
        <li>You will not misuse the website for fraudulent or unlawful activity</li>
       </ul>
       <p>We reserve the right to restrict access if these Terms are violated.</p>
       <div className={styles.divider}></div>
       <h2>3. Product Information & Availability</h2>
       <p>We strive to ensure that all product descriptions, prices, and images are accurate.</p>
       <p>However:</p>
        <ul>
        <li>Product colors may vary slightly due to screen differences</li>
        <li>Availability may change without notice</li>
        <li>We may update or discontinue products at any time</li>
       </ul>
       <p>Office Aura Kenya reserves the right to correct any errors on the website.</p>
        <div className={styles.divider}></div>
       <h2>4. Pricing & Payments</h2>
       <p>All prices displayed on our website are in <span>Kenyan Shillings (KES)</span>.</p>
       <p>We accept payments via:</p>
        <ul>
        <li>M-Pesa</li>
        <li>Bank transfer (where applicable)</li>
        <li>Card payments (if available)</li>
       </ul>
       <p>Orders are confirmed only after successful payment, unless otherwise stated.</p>
        <div className={styles.divider}></div>
        <h2>5. Order Confirmation</h2>
        <p>Once you place an order, you will receive an order confirmation via:</p>
        <ul>
        <li>Email (if provided)</li>
        <li>SMS or WhatsApp communication</li>
       </ul>
       <p>Office Aura reserves the right to cancel or refuse orders in cases such as:</p>
       <ul>
        <li>Incorrect pricing</li>
        <li>Stock unavailability</li>
        <li>Suspected fraudulent activity</li>
       </ul>
       <p>If an order is canceled after payment, a full refund will be issued.</p>
        <div className={styles.divider}></div>
        <h2>6. Shipping & Delivery in Kenya</h2>
        <p>Office Aura delivers to customers nationwide.</p>
        <p>Delivery timelines depend on location:</p>
        <ul>
        <li>Nairobi: 1–2 business days</li>
        <li>Other towns: 2–5 business days</li>
        <li>Remote areas: up to 7 business days</li>
       </ul>
       <p>Delivery fees are displayed at checkout or communicated before dispatch.</p>
       <p>For full details, please refer to our <Link href={'/shipping-delivery'}>Shipping & Delivery Policy</Link> page.</p>
       <div className={styles.divider}></div>
       <h2>7. Returns & Refunds</h2>
       <p>We want you to be satisfied with your purchase.</p>
       <p>Returns are accepted within <span>7 days of delivery</span>, provided items are unused and in original packaging.</p>
       <p>Damaged or incorrect items must be reported within <span>48 hours</span>.</p>
       <p>For full details, please refer to our <Link href={'/returns-refund'}>Returns & Refund Policy</Link> page.</p>
      <div className={styles.divider}></div>
       <h2>8. Customer Responsibilities</h2>
       <p>Customers are responsible for:</p>
       <ul>
        <li>Providing correct delivery details</li>
        <li>Being available to receive the order</li>
        <li>Ensuring safe handling of products after delivery</li>
       </ul>
       <p>Office Aura is not liable for delays caused by incorrect addresses or unreachable contacts.</p>
       <div className={styles.divider}></div>
       <h2>9. Intellectual Property</h2>
       <p>All content on this website, including:</p>
        <ul>
        <li>Logos</li>
        <li>Product images</li>
        <li>Text descriptions</li>
        <li>Branding and design</li>
       </ul>
       <p>is the property of Office Aura Kenya and may not be copied, reproduced, or used without written permission.</p>
       <div className={styles.divider}></div>
       <h2>10. Limitation of Liability</h2>
       <p>Office Aura Kenya is not liable for:</p>
        <ul>
        <li>Indirect or consequential losses</li>
        <li>Delivery delays beyond our control</li>
        <li>Misuse of products after purchase</li>
       </ul>
       <p>Our liability is limited to the value of the product purchased.</p>
       <div className={styles.divider}></div>
       <h2>11. Privacy & Data Protection</h2>
       <p>We respect your privacy and are committed to protecting your personal information.</p>
       <p>Customer data is used only for:</p>
       <ul>
        <li>Order processing</li>
        <li>Delivery communication</li>
        <li>Customer support</li>
       </ul>
       <p>For more information, please refer to our <Link href={'/privacy-policy'}>Privacy Policy</Link> page.</p>
       <div className={styles.divider}></div>
       <h2>12. External Links</h2>
       <p>Our website may contain links to third-party services (e.g., payment providers or couriers).</p>
       <p>Office Aura is not responsible for the content or policies of external websites.</p>
       <div className={styles.divider}></div>
       <h2>13. Changes to These Terms</h2>
       <p>Office Aura Kenya reserves the right to update these Terms & Conditions at any time.</p>
       <p>Changes will be posted on this page, and continued use of the website indicates acceptance of updated Terms.</p>
       <div className={styles.divider}></div>
       <h2>14. Governing Law (Kenya)</h2>
       <p>These Terms & Conditions are governed by the laws of the <span>Republic of Kenya</span></p>
       <p>Any disputes arising from the use of this website or purchases made through Office Aura shall be handled under Kenyan jurisdiction.</p>
       <div className={styles.divider}></div>
       <h2>15. Contact Information</h2>
       <p>For questions about these Terms, orders, or customer support, please contact us:</p>
       <p><MdEmail style={{marginRight: '10px', color: "green"}}/> Email: <span>support@officeaura.co.ke</span></p>
      <p><FaPhoneAlt style={{marginRight: '10px', color: "green"}}/> Whatsapp: <span>+254 704 610 605</span></p>
      <p><BiWorld style={{marginRight: '10px', color: "green"}}/> Website: <span>www.officeaura.co.ke/contact</span></p>
      <p>Response time: 24–48 hours</p>
      </div>
    </div>
  )
}

export default page