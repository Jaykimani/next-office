import styles from './privacy.module.css'
import type { Metadata } from "next";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";

export const metadata: Metadata = {
  title: "Privacy Policy | OfficeFlow Kenya",
  description:
    "Learn how OfficeFlow Kenya collects, uses, stores, and protects personal information when you use our website, office supply services, and workplace restock solutions.",

  keywords: [
    "OfficeFlow privacy policy",
    "OfficeFlow data protection",
    "office supplies Kenya privacy policy",
    "office restock services privacy policy",
    "workplace supplies Kenya privacy",
    "OfficeFlow customer data policy"
  ],

  alternates: {
    canonical: "https://www.officeflow.co.ke/privacy-policy",
  },

  openGraph: {
    title: "Privacy Policy | OfficeFlow Kenya",
    description:
      "Read OfficeFlow Kenya's Privacy Policy and learn how we collect, use, store, and protect customer information.",
    url: "https://www.officeflow.co.ke/privacy-policy",
    siteName: "OfficeFlow",
    locale: "en_KE",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Privacy Policy | OfficeFlow Kenya",
    description:
      "Learn how OfficeFlow Kenya protects your information and privacy.",
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
    { "@type": "ListItem", "position": 2, "name": "Privacy Policy", "item": "https://www.officeflow.co.ke/privacy-policy" }
  ]
    },
    {
      "@type": "WebPage",
      "@id": "https://www.officeflow.co.ke/privacy-policy",
      "url": "https://www.officeflow.co.ke/privacy-policy",
      "name": "Privacy Policy",
      "isPartOf": {
        "@id": "https://www.officeflow.co.ke/#website"
      },
      "about": {
        "@id": "https://www.officeflow.co.ke/#organization"
      },
      "description":
        "OfficeFlow Kenya's Privacy Policy."
    }
  ]
};

  return (<>
    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(schema),
  }}
/>
    <main className={styles.privacy}>
        <div className={styles.privacyInset}>
            <h1>Privacy Policy — OfficeFlow Kenya</h1>
            <p><span>Last Updated: 01/06/2026</span></p>
            <p>At OfficeFlow Kenya ("OfficeFlow", "we", "our", or "us"), we respect your privacy and are committed to protecting the personal information you share with us.</p>
            <p>This Privacy Policy explains how we collect, use, store, and protect information when you visit our website, place an order, request a quotation, contact us, or use our office restock services.</p>
            <p>By using our website or services, you agree to the practices described in this Privacy Policy.</p>
            <div className={styles.divider}></div>
            <h2>1. Information We Collect</h2>
            <p>We may collect information that you voluntarily provide, including:</p>
            <h3>a) Personal Information</h3>
            <ul>
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company or organization name</li>
                <li>Delivery address</li>
                <li>Billing information</li>
                <li>Communication preferences</li>
            </ul>
            <h3>b) Business Information</h3>
            <p>For business customers and Business Accounts, we may collect:</p>
            <ul>
              <li>Company details</li>
              <li>Procurement requirements</li>
              <li>Delivery schedules</li>
              <li>Office supply preferences</li>
              <li>Account management information</li>
            </ul>
            <h3>c) Website Usage Information</h3>
            <p>When you visit our website, certain information may be collected automatically, including:</p>
            <ul>
              <li>IP address</li>
              <li>Browser type</li>
              <li>Device information</li>
              <li>Pages visited</li>
              <li>Time spent on the website</li>
              <li>Referring websites</li>
            </ul>
            <p>This information helps us improve our services and website experience.</p>
            <div className={styles.divider}></div>
            <h2>2. How We Use Your Information</h2>
            <p>We use information collected to:</p>
             <ul>
                <li>Process and fulfill orders</li>
                <li>Deliver office supplies and workplace essentials</li>
                <li>Respond to inquiries and support requests</li>
                <li>Provide quotations and business proposals</li>
                <li>Manage Business Accounts and custom restock plans</li>
                <li>Improve our website and services</li>
                <li>Send service-related communications</li>
                <li>Prevent fraud and unauthorized activity</li>
                <li>Comply with legal obligations</li>
            </ul>
            <div className={styles.divider}></div>
            <h2>3. Marketing Communications</h2>
            <p>With your consent, we may send:</p>
            <ul>
                <li>Service updates</li>
                <li>Promotional offers</li>
                <li>Product announcements</li>
                <li>Business solutions and workplace supply recommendations</li>
            </ul>
            <p>You may unsubscribe from marketing communications at any time by contacting us or following the unsubscribe instructions provided in our messages.</p>
            <div className={styles.divider}></div>
            <h2>4. Cookies and Similar Technologies</h2>
            <p>Our website may use cookies and similar technologies to:</p>
             <ul>
                <li>Improve website functionality</li>
                <li>Remember user preferences</li>
                <li>Analyze website performance</li>
                <li>Understand visitor behavior</li>
            </ul>
            <p>You can modify your browser settings to refuse cookies; however, some website features may not function properly.</p>
            <div className={styles.divider}></div>
            <h2>5. Sharing of Information</h2>
            <p>OfficeFlow does not sell, rent, or trade your personal information to third parties.</p>
            <p>We may share information with trusted service providers when necessary to:</p>
            <ul>
              <li>Process payments</li>
              <li>Deliver products</li>
              <li>Host our website</li>
              <li>Provide technical support</li>
              <li>Comply with legal requirements</li>
            </ul>
            <p>These service providers are only permitted to use information for the specific services they perform on our behalf.</p>
            <div className={styles.divider}></div>
            <h2>6. Data Security</h2>
            <p>We take reasonable administrative, technical, and organizational measures to protect your information against unauthorized access, loss, misuse, disclosure, or alteration.</p>  
            <p>However, no internet transmission or electronic storage system can be guaranteed to be completely secure.</p>
            <div className={styles.divider}></div>
            <h2>7. Data Retention</h2>
            <p>We retain information for as long as necessary to:</p>
             <ul>
                <li>Fulfill orders and services</li>
                <li>Maintain business records</li>
                <li>Support Business Accounts</li>
                <li>Meet legal, accounting, and regulatory obligations</li>
            </ul>
            <p>When information is no longer required, we will securely delete or anonymize it where appropriate.</p>
            <div className={styles.divider}></div>
            <h2>8. Your Privacy Rights</h2>
            <p>You may request to:</p>
            <ul>
                <li>Access the information we hold about you</li>
                <li>Correct inaccurate information</li>
                <li>Update your contact details</li>
                <li>Request deletion of information where legally permissible</li>
                <li>Withdraw consent for marketing communications</li>
            </ul>
            <p>Requests may be submitted using the contact information provided below.</p>
            <div className={styles.divider}></div>
            <h2>9. Third-Party Links</h2>
            <p>Our website may contain links to third-party websites.</p>
            <p>OfficeFlow is not responsible for the privacy practices, content, or policies of external websites. We encourage users to review the privacy policies of any third-party sites they visit.</p>
            <div className={styles.divider}></div>
            <h2>10. Children's Privacy</h2>
            <p>OfficeFlow's services are intended for businesses and individuals aged 18 years or older.</p>
            <p>We do not knowingly collect personal information from children.</p>
            <div className={styles.divider}></div>
            <h2>11. International Data Transfers</h2>
            <p>Where necessary, information may be processed or stored using trusted service providers located outside Kenya.</p>
            <p>We take reasonable measures to ensure that appropriate safeguards are in place to protect personal information.</p>
            <div className={styles.divider}></div>
            <h2>12. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time to reflect changes in our services or legal requirements.</p>
            <p>Any changes will be published on this page together with the updated revision date.</p>
            <p>Continued use of our website or services after changes are posted constitutes acceptance of the revised policy.</p>
            <div className={styles.divider}></div>
            <h2>13. Contact OfficeFlow Kenya</h2>
            <p>If you have questions about this Privacy Policy or how we handle your data, please contact us:</p>
            <h3>OfficeFlow Kenya Support</h3>
             <p><MdEmail style={{marginRight: '10px', color: "green"}}/> Email: <span>support@officeflow.co.ke</span></p>
            <p><FaPhoneAlt style={{marginRight: '10px', color: "green"}}/> Whatsapp: <span>+254 704 610 605</span></p>
            <p><BiWorld style={{marginRight: '10px', color: "green"}}/> Website: <span>www.officeflow.co.ke/contact</span></p>
        </div>
    </main>
      </>
  )
}

export default page