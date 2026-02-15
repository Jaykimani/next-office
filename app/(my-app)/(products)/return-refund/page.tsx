import type { Metadata } from "next";
import styles from './return.module.css'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";

export const metadata: Metadata = {
  title: "Returns & Refund Policy | Office Aura Kenya",
  description:
    "Read Office Aura Kenya’s Returns & Refund Policy for office décor and accessories, including return eligibility, exchanges, damaged item claims, and refund processing across Kenya.",

  keywords: [
    "Office Aura return policy",
    "refund policy Kenya",
    "office décor returns Nairobi",
    "office accessories exchange Kenya",
    "online shop refund M-Pesa",
    "workspace décor returns policy",
  ],

  openGraph: {
    title: "Returns & Refund Policy | Office Aura Kenya",
    description:
      "View Office Aura Kenya’s official returns, exchanges, and refund policy for office décor and workspace accessories delivered nationwide.",
    url: "https://www.officeaura.co.ke/returns-refunds",
    siteName: "Office Aura Kenya",
    type: "website",
  },

  alternates: {
    canonical: "https://www.officeaura.co.ke/returns-refunds",
  },
};

const page = () => {
    return(
        <div className={styles.returns}>
         <div className={styles.returnsInset}>
            <h1>Office Aura Returns & Refund Policy (Kenya)</h1>
            <p>At <span>Office Aura Kenya</span>, we are committed to providing high-quality <span>office décor and office accessories</span> that help you create the perfect workspace.</p>
            <p>If you are not fully satisfied with your purchase, we offer a simple and transparent returns and refunds process.</p>
            <p>This Return Policy applies to all orders placed through www.officeaura.co.ke and delivered across Kenya.</p>
            <div className={styles.divider}></div>
            <h2>Return Policy Overview</h2>
            <p>Office Aura accepts eligible returns within <span>7 days of delivery</span>, subject to the conditions outlined below.</p>
            <p>We aim to make returns easy for customers shopping for:</p>
            <ul>
                <li>Office interior décor</li>
                <li>Desk accessories</li>
                <li>Home office decoration items</li>
                <li>Executive office styling products</li>
                <li>Corporate office décor solutions</li>
            </ul>
            <div className={styles.divider}></div>
            <h2>1. Returns Eligibility (Within 7 Days)</h2>
            <p>You may request a return within <span>7 days</span> after receiving your order if:</p>
             <ul>
                <li>The product is <span>unused and in original condition</span></li>
                <li>The item is returned in its <span>initial packaging</span></li>
                <li>All parts, accessories, and labels are included</li>
                <li>You provide proof of purchase (order number or receipt)</li>
            </ul>
            <p>This helps us maintain quality for all customers shopping for office décor online in Kenya.</p>
            <div className={styles.divider}></div>
            <h2>2. Items Not Eligible for Return</h2>
            <p>For hygiene, quality, and business reasons, we do not accept returns for:</p>
            <ul>
                <li>Clearance or discounted products marked as <span>Final Sale</span></li>
                <li>Custom-made or special-order office décor items</li>
                <li>Items returned after the 7-day return window</li>
                <li>Products that are used, damaged, or missing original packaging</li>
            </ul>
             <div className={styles.divider}></div>
             <h2>3. Damaged, Defective, or Incorrect Items</h2>
             <p>If your order arrives damaged, defective, or incorrect, please notify us within <span>48 hours</span> of delivery.</p>
             <p>To process your request quickly, send:</p>
             <ul>
                <li>Your order number</li>
                <li>Photos of the product and packaging</li>
                <li>A brief explanation of the issue</li>
            </ul>
            <p>Once confirmed, Office Aura Kenya will provide:</p>
            <ul>
                <li>A replacement item</li>
                <li>An exchange</li>
                <li>A full refund (if necessary)</li>
            </ul>
            <div className={styles.divider}></div>
            <h2>4. Exchanges for Office Accessories</h2>
            <p>We offer exchanges within the return period for eligible products.</p>
            <p>You may exchange for:</p>
            <ul>
                <li>Another office décor item of equal value</li>
                <li>A different style or design (subject to availability)</li>
                <li>Store credit for future purchases</li>
            </ul>
            <p>Exchanges are ideal for customers styling their workspace and adjusting their office atmosphere.</p>
             <div className={styles.divider}></div>
             <h2>5. Refund Process (M-Pesa & Bank Transfer)</h2>
             <p>After receiving and inspecting your returned item, we will notify you of approval.</p>
             <p>Approved refunds are processed within <span>5–10 business days</span> via:</p>
              <ul>
                <li><span>M-Pesa refund</span> (for most Kenyan customers)</li>
                <li>Bank transfer (where applicable)</li>
                <li>Store credit (optional)</li>
            </ul>
            <p>Refunds are issued only after the product passes inspection.</p>
             <div className={styles.divider}></div>
             <h2>6. Return Shipping & Delivery Costs in Kenya</h2>
             <p>Return delivery costs depend on the reason for the return:</p>
             <ul>
                <li>Customers cover return shipping costs for change-of-mind returns</li>
                <li>Office Aura covers return shipping for damaged or incorrect items</li>
                <li>Nairobi customers may request pickup assistance (fees may apply)</li>
            </ul>
            <p>Original delivery fees are non-refundable unless the issue was caused by us.</p>
            <div className={styles.divider}></div>
            <h2>7. How to Request a Return or Refund</h2>
            <p>To start a return, exchange, or refund request, contact our support team with:</p>
            <ul>
                <li>Full name</li>
                <li>Order number</li>
                <li>Reason for return</li>
                <li>Photos (if damaged or incorrect)</li>
            </ul>
            <h3>Office Aura Customer Support (Kenya)</h3>
            <p><MdEmail style={{marginRight: '10px', color: "green"}}/> Email: <span>support@officeaura.co.ke</span></p>
            <p><FaPhoneAlt style={{marginRight: '10px', color: "green"}}/> Whatsapp: <span>+254 704 610 605</span></p>
            <p><BiWorld style={{marginRight: '10px', color: "green"}}/> Website: <span>www.officeaura.co.ke/contact</span></p>
            <p>We respond within <span>24–48 hours</span>.</p>
            <div className={styles.divider}></div>
            <h2>8. Corporate & Bulk Office Orders</h2>
            <p>For corporate office décor projects, bulk purchases, or office setup bundles, return terms may vary</p>
            <p>Please contact us before placing large orders so we can provide a tailored corporate return agreement.</p>
            <div className={styles.divider}></div>
            <h2>9. Updates to This Return Policy</h2>
            <p>Office Aura Kenya may update this Returns & Refund Policy from time to time. Any changes will be posted on this page with a revised effective date.</p>
            <div className={styles.divider}></div>
            <h2>Office Aura Kenya – Trusted Office Décor Shopping</h2>
            <p>Thank you for choosing <span>Office Aura</span>, your one-stop shop for:</p>
             <ul>
                <li>Office interior decoration in Kenya</li>
                <li>Modern desk accessories</li>
                <li>Executive office styling</li>
                <li>Workspace décor solutions delivered nationwide</li>
            </ul>
            <p>If you need assistance, our team is always here to help.</p>
         </div>
        </div>
    )
}

export default page;
