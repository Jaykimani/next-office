import styles from './privacy.module.css'
import type { Metadata } from "next";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";

export const metadata: Metadata = {
  title: "Privacy Policy | Office Aura Kenya",
  description:
    "Review Office Aura Kenya’s Privacy Policy covering customer data collection, cookies, secure payments, and how we protect your information when shopping for office décor and accessories online in Kenya.",

  keywords: [
    "Office Aura privacy policy",
    "office décor shop Kenya privacy",
    "customer data protection Kenya",
    "Supabase privacy compliance",
    "Payload CMS privacy policy",
    "cookies policy office accessories",
    "online store privacy Kenya",
  ],

  openGraph: {
    title: "Privacy Policy | Office Aura Kenya",
    description:
      "Learn how Office Aura Kenya collects, uses, and protects your personal information when shopping for office décor and workspace accessories online.",
    url: "https://www.officeaura.co.ke/privacy-policy",
    siteName: "Office Aura Kenya",
    type: "website",
  },

  alternates: {
    canonical: "https://www.officeaura.co.ke/privacy-policy",
  },
};


const page = () => {
  return (
    <div className={styles.privacy}>
        <div className={styles.privacyInset}>
            <h1>Privacy Policy — Office Aura Kenya</h1>
            <p>At <span>Office Aura Kenya</span>, we value your privacy and are committed to protecting your personal information.</p>
            <p>This Privacy Policy explains how we collect, use, store, and protect customer data when you visit or shop on <span>www.officeaura.co.ke</span>.</p>
            <div className={styles.divider}></div>
            <h2>1. About Office Aura Kenya</h2>
            <p>Office Aura is an online store providing:</p>
            <ul>
                <li>Office décor and interior accessories</li>
                <li>Desk organization solutions</li>
                <li>Workspace styling products</li>
                <li>Corporate office decoration essentials</li>
            </ul>
            <p>We deliver across Kenya, including Nairobi and other major towns.</p>
            <div className={styles.divider}></div>
            <h2>2. Information We Collect</h2>
            <p>When you browse our website or place an order, we may collect the following personal information:</p>
            <h3>a) Customer Information</h3>
             <ul>
                <li>Full name</li>
                <li>Phone number</li>
                <li>Email address (optional)</li>
                <li>Delivery address and location details</li>
            </ul>
            <h3>b) Order Information</h3>
             <ul>
                <li>Products purchased</li>
                <li>Order history</li>
                <li>Delivery preferences</li>
            </ul>
            <h3>c) Payment Information</h3>
            <p>Payments are processed securely through third-party providers such as M-Pesa or card payment platforms.</p>
            <p>Office Aura does <span>not</span> store your full payment details.</p>
            <h3>d) Technical Data</h3>
            <p>We may automatically collect:</p>
             <ul>
                <li>IP address</li>
                <li>Browser type</li>
                <li>Device information</li>
                <li>Pages visited on our website</li>
            </ul>
            <p>This helps us improve your shopping experience.</p>
            <div className={styles.divider}></div>
            <h2>3. How We Use Your Information</h2>
            <p>We use customer information to:</p>
            <ul>
                <li>Process and deliver orders across Kenya</li>
                <li>Provide customer support via email or WhatsApp</li>
                <li>Send order confirmations and delivery updates</li>
                <li>Improve our products, services, and website performance</li>
                <li>Prevent fraud and unauthorized activity</li>
            </ul>
            <p>We do not sell or rent your personal information to third parties.</p>
            <div className={styles.divider}></div>
            <h2>4. Cookies & Tracking Technologies</h2>
            <p>Office Aura uses cookies to enhance your browsing experience.</p>
            <p>Cookies help us:</p>
             <ul>
                <li>Remember items in your cart</li>
                <li>Understand how visitors use our site</li>
                <li>Improve website speed and functionality</li>
                <li>Support analytics and marketing efforts</li>
            </ul>
            <p>You can disable cookies in your browser settings, but some features of the website may not function properly.</p>
            <div className={styles.divider}></div>
            <h2>5. Data Storage & Website Technology</h2>
            <p>To operate our e-commerce platform, we use trusted tools including:</p>
            <h3>Payload CMS</h3>
            <p>Payload is used to manage website content, product listings, and order-related information.</p>
            <h3>Supabase</h3>
            <p>Supabase is used as a secure database for storing customer orders, account data (if applicable), and website records</p>
            <p>Both services follow modern security standards to protect user information.</p>
            <div className={styles.divider}></div>
            <h2>6. Sharing of Personal Information</h2>
            <p>We may share limited customer information only with trusted service providers such as:</p>
            <ul>
                <li>Delivery and courier partners</li>
                <li>Payment processing providers</li>
                <li>Website hosting and analytics tools</li>
            </ul>
            <p>These partners are only given the information necessary to complete their services.</p>
            <div className={styles.divider}></div>
            <h2>7. Data Protection & Security</h2>
            <p>Office Aura Kenya takes appropriate measures to safeguard your information, including:</p>
             <ul>
                <li>Secure HTTPS encryption</li>
                <li>Restricted access to customer records</li>
                <li>Secure third-party payment processing</li>
                <li>Modern cloud security practices through Supabase</li>
            </ul>
            <p>However, no online platform can guarantee 100% security</p>
            <div className={styles.divider}></div>
            <h2>8. Your Rights Under Data Protection Laws</h2>
            <p>In line with the <span>Kenya Data Protection Act (2019)</span>, you have the right to:</p>
            <ul>
                <li>Request access to your personal data</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your data (where applicable)</li>
                <li>Withdraw consent for marketing communications</li>
            </ul>
            <p>To make such requests, contact us using the details below.</p>
            <div className={styles.divider}></div>
            <h2>9. Marketing Communications</h2>
            <p>We may occasionally send updates about:</p>
            <ul>
                <li>New office décor arrivals</li>
                <li>Discounts or promotions</li>
                <li>Workspace styling tips</li>
            </ul>
            <p>You may opt out at any time by contacting us or using an unsubscribe option where available.</p>
            <div className={styles.divider}></div>
            <h2>10. Third-Party Links</h2>
            <p>Our website may contain links to third-party platforms such as payment providers or social media pages.</p>
            <p>Office Aura Kenya is not responsible for the privacy practices of external websites.</p>
            <div className={styles.divider}></div>
            <h2>11. Children’s Privacy</h2>
            <p>Office Aura does not knowingly collect personal information from children under the age of 18.</p>
            <p>If you believe a child has provided data, please contact us for removal.</p>
            <div className={styles.divider}></div>
            <h2>12. Policy Updates</h2>
            <p>We may update this Privacy Policy from time to time to reflect changes in our services or legal requirements.</p>
            <p>Updates will be posted on this page with a revised effective date.</p>
            <div className={styles.divider}></div>
            <h2>13. Contact Office Aura Kenya</h2>
            <p>If you have questions about this Privacy Policy or how we handle your data, please contact us:</p>
            <h3>Office Aura Kenya Support</h3>
             <p><MdEmail style={{marginRight: '10px', color: "green"}}/> Email: <span>support@officeaura.co.ke</span></p>
            <p><FaPhoneAlt style={{marginRight: '10px', color: "green"}}/> Whatsapp: <span>+254 704 610 605</span></p>
            <p><BiWorld style={{marginRight: '10px', color: "green"}}/> Website: <span>www.officeaura.co.ke/contact</span></p>
        </div>
    </div>
  )
}

export default page