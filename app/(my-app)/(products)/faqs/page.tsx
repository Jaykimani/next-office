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

  const structuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Office Aura Kenya?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Office Aura is a Kenyan online store that specializes in office décor, desk accessories, workspace tools, and productivity essentials designed to help professionals create stylish and efficient workspaces. Whether you are setting up a corporate office, startup workspace, or home office in Kenya, Office Aura offers curated products that improve organization, comfort, and workspace aesthetics. We are your one-stop shop for creating a beautiful and productive workspace."
      }
    },
    {
      "@type": "Question",
      "name": "What products can I buy from Office Aura?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Office Aura offers a wide range of office accessories and workspace upgrades, including desk and shelf decorations, wall art and office prints, desk lighting and ambient workspace lights, office plants and greenery, productivity tools like planners and notebooks, and ergonomic comfort accessories. All products are carefully selected to help professionals in Kenya create modern, functional, and inspiring workspaces."
      }
    },
    {
      "@type": "Question",
      "name": "Who are Office Aura products designed for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Office Aura products are designed for anyone looking to improve their workspace, including corporate offices, startups and small businesses, remote workers and freelancers, students setting up study desks, and professionals upgrading their home office. Our goal is to make it easy for people in Kenya to build productive and aesthetically pleasing workspaces."
      }
    },
    {
      "@type": "Question",
      "name": "Do you deliver office décor across Kenya?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Office Aura delivers nationwide across Kenya, including Nairobi, Mombasa, Kisumu, Nakuru, Eldoret, Thika, and other towns. We make it easy to shop for office décor and accessories online in Kenya and receive it at your doorstep."
      }
    },
    {
      "@type": "Question",
      "name": "How long does delivery take in Kenya?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Delivery times depend on your location. Nairobi deliveries take 1 to 2 business days, other towns take 2 to 5 business days, and remote areas may take up to 7 business days. We provide updates through WhatsApp or SMS once your order is dispatched."
      }
    },
    {
      "@type": "Question",
      "name": "How much is shipping within Nairobi and other counties?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Shipping fees depend on your delivery location, package size and weight, and the courier partner used. Delivery charges are shown at checkout or confirmed by our support team before dispatch."
      }
    },
    {
      "@type": "Question",
      "name": "Can I pay using M-Pesa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Office Aura supports M-Pesa payments, making it convenient for customers across Kenya. We also support other payment options where available, including cash payments and card payments."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer Cash on Delivery in Kenya?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cash on Delivery may be available for select locations or special arrangements. Please contact us via WhatsApp to confirm if this option is available for your area."
      }
    },
    {
      "@type": "Question",
      "name": "How can Office Aura help improve my workspace?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Office Aura focuses on products that enhance productivity, organization, and workspace comfort. Our desk accessories, organizers, and décor solutions help reduce desk clutter, improve organization, enhance workspace aesthetics, and create a comfortable and inspiring work environment. A well-designed workspace can boost focus, creativity, and daily productivity."
      }
    },
    {
      "@type": "Question",
      "name": "Can I create a complete desk setup using Office Aura products?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Office Aura offers a variety of products that allow you to build a complete desk setup, including desk organizers, productivity planners, desk lighting, office décor, and workspace greenery. You can mix and match products to create a modern desk setup tailored to your style and workflow."
      }
    },
    {
      "@type": "Question",
      "name": "Can businesses and corporate offices order in bulk?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Office Aura supports corporate and bulk office décor and accessories orders for office renovations, workspace branding projects, new company setups, and boardrooms or executive suites. Contact us for customized quotations and delivery arrangements."
      }
    },
    {
      "@type": "Question",
      "name": "What is your return policy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We accept returns within 7 days of delivery for eligible items, provided they are unused, in original packaging, and returned with proof of purchase. Damaged or incorrect items must be reported within 48 hours. Please visit our Returns and Refund Policy page for full details."
      }
    },
    {
      "@type": "Question",
      "name": "What if my order arrives damaged?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If your order arrives damaged, contact us within 48 hours with your order number and photos of the product and packaging. We will arrange a replacement or refund according to our policy."
      }
    },
    {
      "@type": "Question",
      "name": "Can I cancel or change my order after placing it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Orders can be changed or canceled only if they have not yet been dispatched. Please contact our support team as soon as possible after placing your order."
      }
    },
    {
      "@type": "Question",
      "name": "How do I contact Office Aura Kenya?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can contact Office Aura via email at support@officeaura.co.ke, WhatsApp at +254 704 610 605, or through the contact page on our website. Our team responds within 24 to 48 hours."
      }
    },
    {
      "@type": "Question",
      "name": "Why should I buy office décor from Office Aura Kenya?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Office Aura is trusted by customers across Kenya because we offer stylish and modern office accessories, affordable workspace décor solutions, fast delivery in Nairobi and nationwide, M-Pesa-friendly checkout, responsive customer support via WhatsApp, and curated products designed for every workspace style."
      }
    },
    {
      "@type": "Question",
      "name": "Do you have a physical shop location?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Office Aura currently operates primarily as an online store, allowing us to serve customers across Kenya efficiently. Pickup options may be available depending on location, so please contact us for details."
      }
    },
    {
      "@type": "Question",
      "name": "How do I stay updated on new arrivals and offers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To stay updated on the latest office décor trends in Kenya, you can follow us on Instagram, join our WhatsApp updates list, or subscribe to our email newsletter. New products and décor bundles are added regularly."
      }
    }
  ]
}


  return (
    <div className={styles.faqs}>
      <script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
     <div className={styles.faqsInset}>
        <h1>Frequently Asked Questions (FAQ) — Office Aura Kenya</h1>
        <p>Welcome to the <span>Office Aura Kenya FAQ page</span>.</p>
        <p>Office Aura Kenya answers common questions about office décor & accessories, delivery in Nairobi, M-Pesa payments, workspace styling products, and nationwide shipping across Kenya.</p>
        <p>Here you’ll find answers to the most common questions about shopping for office décor, desk accessories, and workspace interior decoration solutions in Kenya.</p>
        <p>If you need more help, feel free to contact us anytime via WhatsApp or email.</p>
        <div className={styles.divider}></div>
        <h2>1. What is Office Aura Kenya?</h2>
        <p>Office Aura is a Kenyan online store that specializes in <span>office décor, desk accessories, workspace tools, and productivity essentials</span> designed to help professionals create stylish and efficient workspaces. Whether you are setting up a <span>corporate office, startup workspace, or home office</span> in Kenya, Office Aura offers curated products that improve organization, comfort, and workspace aesthetics.</p>
        <p>We are your one-stop shop for creating a beautiful and productive workspace.</p>
        <div className={styles.divider}></div>
        <h2>2. What products can I buy from Office Aura?</h2>
        <p>Office Aura offers a wide range of <span>office accessories and workspace upgrades</span>, including:</p>
        <ul>
            <li>Office desk and shelf decorations and accessories</li>
            <li>Office Wall accessories e.g Wall art and office prints</li>
            <li>Desk lighting and ambient workspace lights</li> 
            <li>Office plants and greenery</li>
            <li>Productivity tools like planners and notebooks</li> 
            <li>Ergonomic comfort accessories</li>
        </ul>
        <p>All products are carefully selected to help professionals in Kenya create <span>modern, functional, and inspiring workspaces.</span></p>
        <div className={styles.divider}></div>
        <h2>3. Who are Office Aura products designed for?</h2>
        <p>Office Aura products are designed for anyone looking to improve their workspace, including:</p>
        <ul>
            <li>Corporate offices</li>
            <li>Startups and small businesses</li>
            <li>Remote workers and freelancers</li> 
            <li>Students setting up study desks</li>
            <li>Professionals upgrading their home office</li> 
        </ul>
        <p>Our goal is to make it easy for people in Kenya to build <span>productive and aesthetically pleasing workspaces</span>.</p>
        <div className={styles.divider}></div>
        <h2>4. Do you deliver office décor across Kenya?</h2>
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
      <p>We make it easy to shop for office décor and accessories online in Kenya and receive it at your doorstep.</p>
      <div className={styles.divider}></div>
      <h2>5. How long does delivery take in Kenya?</h2>
      <p>Delivery times depend on your location:</p>
      <ul>
            <li>Nairobi: <span>1–2 business days</span></li>
            <li>Other towns: <span>2–5 business days</span></li>
            <li>Remote areas: <span>Up to 7 business days</span></li>  
        </ul>
        <p>We provide updates through WhatsApp or SMS once your order is dispatched.</p>
        <div className={styles.divider}></div>
        <h2>6. How much is shipping within Nairobi and other counties?</h2>
        <p>Shipping fees depend on:</p>
        <ul>
            <li>Your delivery location</li>
            <li>Package size and weight</li>
            <li>Courier partner used</li>  
        </ul>
        <p>Delivery charges are shown at checkout or confirmed by our support team before dispatch.</p>
        <div className={styles.divider}></div>
        <h2>7. Can I pay using M-Pesa?</h2>
        <p>Yes. Office Aura supports <span>M-Pesa payments</span>, making it convenient for customers across Kenya.</p>
        <p>We also support other payment options where available, including cash payments and card payments.</p>
        <div className={styles.divider}></div>
        <h2>8. Do you offer Cash on Delivery in Kenya?</h2>
        <p>Cash on Delivery may be available for select locations or special arrangements.</p>
        <p>Please contact us via WhatsApp to confirm if this option is available for your area.</p>
        <div className={styles.divider}></div> 
        <h2>9. How can Office Aura help improve my workspace?</h2>
        <p>Office Aura focuses on products that enhance <span>productivity, organization, and workspace comfort</span>. Our desk accessories, organizers, and décor solutions help you:</p>
         <ul>
            <li>Reduce desk clutter</li>
            <li>Stay organized and focused</li>
            <li>Improve workspace aesthetic</li> 
            <li>Create a comfortable and inspiring work environment</li>
        </ul>
        <p>A well-designed workspace can help boost <span>focus, creativity, and daily productivity.</span></p>
        <div className={styles.divider}></div>
        <h2>10. Can I create a complete desk setup using Office Aura products?</h2>
        <p>Yes. Office Aura offers a variety of products that allow you to <span>build a complete desk setup</span>, including:</p>
         <ul>
            <li>Desk organizers and storage tools</li>
            <li>Productivity planners and writing tools</li>
            <li>Desk lighting and accessories</li> 
            <li>Office décor and wall art</li>
            <li>Workspace greenery</li>
        </ul>
        <p>You can mix and match products to create a <span>modern desk setup tailored to your style and workflow.</span></p>
        <div className={styles.divider}></div>
        <h2>11. Can businesses and corporate offices order in bulk?</h2>
        <p>Absolutely. Office Aura supports corporate and bulk office décor & accessories orders for:</p>
        <ul>
            <li>Office renovations</li>
            <li>Workspace branding projects</li>
            <li>New company setups</li> 
            <li>Boardrooms and executive suites</li>
        </ul>
        <p>Contact us for customized quotations and delivery arrangements.</p>
        <div className={styles.divider}></div>
        <h2>12. What is your return policy?</h2>
        <p>We accept returns within <span>7 days of delivery</span> for eligible items, provided they are:</p>
         <ul>
            <li>Unused</li>
            <li>In original packaging</li>
            <li>Returned with proof of purchase</li> 
        </ul>
        <p>Damaged or incorrect items must be reported within <span>48 hours</span>.</p>
        <p>Please visit our <Link href={'/return-refund'}>Returns & Refund Policy</Link> page for full details.</p>
        <div className={styles.divider}></div>
        <h2>13. What if my order arrives damaged?</h2>
        <p>If your ordered item arrives damaged, contact us within 48 hours with:</p>
         <ul>
            <li>Your order number</li>
            <li>Photos of the product and packaging</li>
        </ul>
        <p>We will arrange a replacement or refund according to our policy.</p>
        <div className={styles.divider}></div>
        <h2>14. Can I cancel or change my order after placing it?</h2>
        <p>Orders can be changed or canceled only if they have not yet been dispatched.</p>
        <p>Please contact our support team as soon as possible after placing your order.</p>
        <div className={styles.divider}></div>
        <h2>15. How do I contact Office Aura Kenya?</h2>
        <p>You can reach us anytime through:</p>
         <p><MdEmail style={{marginRight: '10px', color: "green"}}/> Email: <span>support@officeaura.co.ke</span></p>
         <p><FaPhoneAlt style={{marginRight: '10px', color: "green"}}/> Whatsapp: <span>+254 704 610 605</span></p>
         <p><BiWorld style={{marginRight: '10px', color: "green"}}/> Website: <span>www.officeaura.co.ke/contact</span></p>
         <p>Our team responds within 24–48 hours</p>
         <div className={styles.divider}></div>
         <h2>16. Why should I buy office décor from Office Aura Kenya?</h2>
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
        <h2>17. Do you have a physical shop location?</h2>
        <p>Office Aura currently operates primarily as an online store, allowing us to serve customers across Kenya efficiently.</p>
        <p>Pickup options may be available depending on location — contact us for details.</p>
        <div className={styles.divider}></div>
        <h2>18. How do I stay updated on new arrivals and offers?</h2>
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