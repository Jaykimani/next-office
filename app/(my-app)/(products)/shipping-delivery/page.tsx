import styles from './shipping.module.css'
import type { Metadata } from "next";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";


export const metadata: Metadata = {
  title: "Shipping & Delivery Policy | Office Aura Kenya",
  description:
    "Office Aura Kenya offers fast and reliable delivery of office décor, desk accessories, and workspace essentials across Nairobi and nationwide. Learn about shipping fees, timelines, and tracking.",

  keywords: [
    "office décor delivery Kenya",
    "shipping policy Nairobi",
    "office accessories delivery",
    "Office Aura shipping",
    "workspace décor Kenya",
    "online office shop Kenya",
  ],

  openGraph: {
    title: "Shipping & Delivery Policy | Office Aura Kenya",
    description:
      "Discover Office Aura Kenya’s delivery timelines, shipping fees, and nationwide courier services for office décor and accessories.",
    url: "https://www.officeaura.co.ke/shipping-delivery",
    siteName: "Office Aura Kenya",
    type: "website",
  },

  alternates: {
    canonical: "https://www.officeaura.co.ke/shipping-delivery",
  },
};


const page = () => {
  return(
    <div className={styles.shippingDelivery}>
     <div className={styles.shippingInset}>
      <h1>Shipping & Delivery Policy — Office Aura Kenya</h1>
      <p>At <span>Office Aura Kenya</span>, we are committed to delivering stylish and high-quality office décor and accessories to customers across Kenya quickly, safely, and reliably.</p>
      <p>This Shipping & Delivery Policy explains our delivery timelines, shipping fees, and what to expect when ordering from www.officeaura.co.ke.</p>
      <div className={styles.divider}></div>
      <h2>Nationwide Shipping Across Kenya</h2>
      <p>Office Aura offers delivery services to customers in:</p>
      <ul>
        <li>Nairobi</li>
        <li>Mombasa</li>
        <li>Kisumu</li>
        <li>Nakuru</li>
        <li>Eldoret</li>
        <li>Thika</li>
        <li>And other towns across Kenya</li>
      </ul>
      <p>Whether you are shopping for <span>home office accessories</span> or furnishing an entire corporate workspace, we deliver nationwide.</p>
      <div className={styles.divider}></div>
      <h2>Delivery Timeframes</h2>
      <p>Delivery times depend on your location:</p>
      <h3>1. Nairobi Delivery</h3>
      <p>Orders within Nairobi are typically delivered within:</p>
      <ul>
        <li><span>Same Day or Next Day Delivery</span> (depending on order time)</li>
      </ul>
      <p>Estimated timeline: <span>1–2 business days</span></p>
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
      <h2>Same-Day Delivery (Nairobi Only)</h2>
      <p>Office Aura may offer same-day delivery within Nairobi for eligible orders placed before a specified cut-off time.</p>
      <p>To confirm availability, contact us via WhatsApp: <span>  0704610605</span></p>
      <div className={styles.divider}></div>
      <h2>Cash on Delivery vs Prepayment</h2>
      <p>To ensure fast and secure delivery, most Office Aura orders require prepayment via:</p>
      <ul>
        <li><span>M-Pesa Paybill / Till</span></li>
        <li>Card payment (if available)</li>
      </ul>
      <p>Cash on Delivery may be available for select locations or special arrangements.</p>
      <div className={styles.divider}></div>
      <h2>Tracking Your Delivery</h2>
      <p>Once your order has been dispatched, we will provide updates via:</p>
       <ul>
        <li>SMS or phone call</li>
        <li>WhatsApp support</li>
        <li>Courier tracking (where available)</li>
      </ul>
      <p>We want every customer in Kenya to feel confident shopping for office décor online.</p>
      <div className={styles.divider}></div>
      <h2>Delivery Address Requirements</h2>
      <p>To avoid delays, please ensure your delivery details include:</p>
      <ul>
        <li>Full name</li>
        <li>Active phone number</li>
        <li>Town/City and County</li>
        <li>Building name or street</li>
        <li>Nearby landmark (optional but helpful)</li>
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
        <li>Missed pickup</li>
      </ul>
      <p>The courier may reschedule delivery or return the package.</p>
      <p>Additional delivery charges may apply for repeated attempts.</p>
      <div className={styles.divider}></div>
      <h2>Damaged Packages During Delivery</h2>
      <p>We take great care in packaging your office décor items.</p>
      <p>If your package arrives damaged, please contact us within <span>48 hours</span> with:</p>
      <ul>
        <li>Order number</li>
        <li>Photos of the item and packaging</li>
        <li>Description of the issue</li>
      </ul>
      <p>We will assist with a replacement or return according to our Return Policy.</p>
      <div className={styles.divider}></div>
      <h2>Corporate & Bulk Office Deliveries</h2>
      <p>For corporate office décor orders, bulk purchases, or workspace setup bundles, Office Aura offers customized delivery arrangements.</p>
      <p>Please contact us for:</p>
       <ul>
        <li>Office delivery scheduling</li>
        <li>Installation coordination (if applicable)</li>
        <li>Bulk shipping discounts</li>
      </ul>
      <div className={styles.divider}></div>
      <h2>Customer Support for Shipping Questions</h2>
      <p>For delivery inquiries, order updates, or support, reach out to us:</p>
      <p><MdEmail style={{marginRight: '10px', color: "green"}}/> Email: <span>support@officeaura.co.ke</span></p>
      <p><FaPhoneAlt style={{marginRight: '10px', color: "green"}}/> Whatsapp: <span>+254 704 610 605</span></p>
      <p><BiWorld style={{marginRight: '10px', color: "green"}}/> Website: <span>www.officeaura.co.ke/contact</span></p>
      <p>Response time: 24–48 hours</p>
      <div className={styles.divider}></div>
      <h2>Office Aura Kenya — Office Décor Delivered Nationwide</h2>
      <p>Thank you for choosing Office Aura, your trusted online destination for:</p>
      <ul>
        <li>Office interior décor in Kenya</li>
        <li>Modern desk accessories</li>
        <li>Executive office styling solutions</li>
        <li>Nationwide delivery of workspace essentials</li>
      </ul>
      <p>We are proud to help you create beautiful and productive workspaces anywhere in Kenya.</p>
     </div>
    </div>
  )
}

export default page