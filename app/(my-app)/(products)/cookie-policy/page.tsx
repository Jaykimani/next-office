import styles from './cookie.module.css'
import type { Metadata } from "next";
import Link from 'next/link';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";

export const metadata: Metadata = {
  title: "Cookie Policy | Office Aura Kenya",
  description:
    "Review Office Aura Kenya’s Cookie Policy to learn how we use cookies for essential site functionality, analytics, marketing, and improving your online office décor shopping experience in Kenya.",

  keywords: [
    "Office Aura cookie policy",
    "cookies policy Kenya e-commerce",
    "office décor website cookies",
    "tracking technologies Office Aura",
    "Supabase cookies compliance",
    "Payload CMS cookie usage",
    "online store cookie policy Kenya",
  ],

  openGraph: {
    title: "Cookie Policy | Office Aura Kenya",
    description:
      "Learn how Office Aura Kenya uses cookies and similar technologies to enhance your shopping experience for office décor and workspace accessories online.",
    url: "https://www.officeaura.co.ke/cookie-policy",
    siteName: "Office Aura Kenya",
    type: "website",
  },

  alternates: {
    canonical: "https://www.officeaura.co.ke/cookie-policy",
  },
};


const page = () => {
  return (
    <div className={styles.cookies}>
        <div className={styles.cookiesInset}>
            <h1>Cookie Policy — Office Aura Kenya</h1>
            <p>This Cookie Policy explains how <span>Office Aura Kenya</span> (“we”, “our”, or “us”) uses cookies and similar technologies on our website <span>www.officeaura.co.ke</span>.</p>
            <p>By continuing to browse or use our website, you agree to our use of cookies as described in this policy.</p>
            <p>This Cookie Policy should be read together with our <Link href={'/privacy-policy'}>Privacy Policy</Link>.</p>
            <div className={styles.divider}></div>
            <h2>1. What Are Cookies?</h2>
            <p>Cookies are small text files stored on your device (phone, tablet, or computer) when you visit a website.</p>
            <p>Cookies help websites:</p>
            <ul>
                <li>Function properly</li>
                <li>Remember user preferences</li>
                <li>Improve browsing experience</li>
                <li>Analyze traffic and performance</li>
            </ul>
            <p>Cookies do not give us direct access to your device or personal files.</p>
            <div className={styles.divider}></div>
            <h2>2. Why Office Aura Uses Cookies</h2>
            <p>Office Aura Kenya uses cookies to enhance your shopping experience when browsing for:</p>
             <ul>
                <li>Office décor in Kenya</li>
                <li>Desk accessories and organizers</li>
                <li>Workspace interior styling products</li>
                <li>Corporate office decoration solutions</li>
            </ul>
            <p>Cookies help us ensure the website works smoothly and efficiently.</p>
            <div className={styles.divider}></div>
            <h2>3. Types of Cookies We Use</h2>
            <h3>a) Essential Cookies (Strictly Necessary)</h3>
            <p>These cookies are required for the website to function properly.</p>
            <p>They support features such as:</p>
             <ul>
                <li>Shopping cart functionality</li>
                <li>Secure checkout process</li>
                <li>Page navigation</li>
                <li>Order session management</li>
            </ul>
            <p>Without these cookies, the website may not operate correctly.</p>
            <h3>b) Performance & Analytics Cookies</h3>
            <p>These cookies help us understand how visitors interact with our website.</p>
            <p>They allow us to measure:</p>
             <ul>
                <li>Website traffic</li>
                <li>Popular product pages</li>
                <li>User behavior and browsing patterns</li>
                <li>Site performance improvements</li>
            </ul>
            <p>Example tools may include Google Analytics or similar services.</p>
            <h3>c) Functional Cookies</h3>
            <p>Functional cookies help remember your preferences, such as:</p>
             <ul>
                <li>Saved cart items</li>
                <li>Language or location settings</li>
                <li>User experience customization</li>
            </ul>
            <p>These cookies improve convenience while shopping online.</p>
            <h3>d) Marketing & Advertising Cookies (Optional)</h3>
            <p>Marketing cookies may be used to deliver relevant advertisements and promotions, such as:</p>
             <ul>
                <li>Facebook/Instagram Ads</li>
                <li>Google Ads retargeting</li>
                <li>Promotional campaign tracking</li>
            </ul>
            <p>These cookies help us reach customers interested in office décor and workspace accessories in Kenya.</p>
            <p>Office Aura will only use these cookies where applicable and permitted.</p>
             <div className={styles.divider}></div>
             <h2>4. Cookies Used by Third-Party Services</h2>
             <p>Office Aura uses trusted platforms to operate our e-commerce website, including:</p>
             <h3>Payload CMS</h3>
             <p>Used to manage product content and website administration.</p>
             <h3>Supabase</h3>
             <p>Used for secure storage of customer orders, website records, and database management.</p>
             <p>Third-party tools may place cookies to ensure proper functionality and security.</p>
             <p>We recommend reviewing third-party privacy practices where relevant.</p>
             <div className={styles.divider}></div>
             <h2>5. How You Can Control Cookies</h2>
             <p>You have the right to manage or disable cookies.</p>
             <p>You can control cookies through:</p>
             <h3>Browser Settings</h3>
             <p>Most browsers allow you to:</p>
              <ul>
                <li>View stored cookies</li>
                <li>Delete cookies</li>
                <li>Block all cookies</li>
                <li>Block specific websites</li>
            </ul>
            <p>Please note: disabling cookies may affect your ability to use certain features such as checkout or cart saving.</p>
            <div className={styles.divider}></div>
            <h2>6. Consent and Cookie Preferences</h2>
            <p>When you visit our website, you may see a cookie notice or banner requesting consent.</p>
            <p>By using the website, you consent to the use of cookies unless you disable them through browser settings.</p>
            <p>For full compliance, Office Aura may implement cookie preference controls in the future.</p>
            <div className={styles.divider}></div>
            <h2>7. Updates to This Cookie Policy</h2>
            <p>Office Aura Kenya may update this Cookie Policy to reflect:</p>
             <ul>
                <li>Legal requirements</li>
                <li>Website improvements</li>
                <li>New analytics or marketing tools</li>
            </ul>
            <p>Updates will be posted on this page with a revised effective date.</p>
            <div className={styles.divider}></div>
            <h2>8. Contact Us</h2>
            <p>If you have questions about this Cookie Policy or how we use cookies, contact us:</p>
            <h3>Office Aura Kenya Support</h3>
            <p><MdEmail style={{marginRight: '10px', color: "green"}}/> Email: <span>support@officeaura.co.ke</span></p>
            <p><FaPhoneAlt style={{marginRight: '10px', color: "green"}}/> Whatsapp: <span>+254 704 610 605</span></p>
            <p><BiWorld style={{marginRight: '10px', color: "green"}}/> Website: <span>www.officeaura.co.ke/contact</span></p>
        </div>
    </div>
  )
}

export default page