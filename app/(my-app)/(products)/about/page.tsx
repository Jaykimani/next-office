
import styles from './about.module.css'
import { MdCheck } from "react-icons/md";
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About OfficeFlow Kenya | Office Restock & Workplace Supply Services",
  description:
    "Learn about OfficeFlow Kenya, a workplace restock service helping businesses in Nairobi and across Kenya stay fully stocked with office supplies, pantry items, cleaning products, and IT consumables through reliable delivery systems.",
  keywords: [
    "office supplies Kenya",
    "office restock services Kenya",
    "office supplies Nairobi",
    "workplace supplies Kenya",
    "corporate office supplies Nairobi",
    "office pantry supplies Kenya",
    "office consumables Kenya"
  ],

  openGraph: {
    title: "About OfficeFlow Kenya | Workplace Restock Services",
    description:
      "OfficeFlow Kenya provides reliable office restock services in Nairobi and across Kenya, helping businesses stay fully stocked and productive.",
    url: "https://your-domain.com/about-us",
    siteName: "OfficeFlow",
    type: "website",
    locale: "en_KE"
  },

  twitter: {
    card: "summary_large_image",
    title: "About OfficeFlow Kenya | Office Restock Services",
    description:
      "Learn how OfficeFlow Kenya keeps businesses fully stocked with essential workplace supplies through reliable restock services."
  },

  alternates: {
    canonical: "https://your-domain.com/about-us"
  }
};

function About() {


    const schema = {
  "@context": "https://schema.org",
  "@graph" : [
    {
      "@type": "AboutPage",
  "name": "About OfficeFlow Kenya",
  "description": "OfficeFlow Kenya is a workplace restock service helping businesses in Nairobi and across Kenya stay fully stocked with essential office supplies and consumables.",
  "url": "https://your-domain.com/about-us",
  "publisher": {
    "@type": "Organization",
    "name": "OfficeFlow",
    "url": "https://your-domain.com"
  }
    },
    {
      "@type": "BreadcrumbList",
     "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.officeflow.co.ke" },
    { "@type": "ListItem", "position": 2, "name": "About Us", "item": "https://www.officeflow.co.ke/about" }
  ]
    }
  ]
  
}


    return (
        <>
         <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema)
        }}
      />
        <main id={styles.about}>
        <h1 className={styles.aboutHeading}>About OfficeFlow – A workspace solutions partner in Kenya</h1>
        <div className={styles.aboutContent}>
         <div className={styles.aboutContentSect}>
         <h2>A smarter way to keep Kenyan workplaces fully stocked and running efficiently.</h2>
         <p>OfficeFlow Kenya is a workplace supplies and restock service provider offering office supplies and structured supply management solutions for businesses in Nairobi and across Kenya. We help organizations maintain uninterrupted operations by providing stationery, printing supplies, pantry items, cleaning products, and IT consumables through scheduled and reliable delivery systems.</p>
        </div>  
        <div className={styles.aboutContentSect}>
        <h2>Who we are?</h2>
        <p><span>A Workplace Restock Partner, Not Just a Supplier</span></p>
        <p>OfficeFlow was built to solve a simple problem faced by many businesses in Kenya — running out of essential office supplies and wasting time on repetitive procurement.<br></br> Instead of operating as a traditional office supplies store, we focus on workplace continuity.
        </p>
        </div> 
        <div className={styles.aboutContentSect}>
            <h2>What we offer?</h2>
            <p>We help businesses stay stocked with everything they need to operate smoothly, including:</p>
            <ul>
                  <li>Stationery supplies</li>
                  <li>Printing papers & printer essentials</li>
                  <li>Pantry and Hydration essentials</li>
                  <li>Hygiene and Cleaning products</li>
                  <li>IT consumables</li>
                  <li>Other workspace essentials</li>
                 </ul>
            <p>Our goal is to become the invisible system that keeps your office running.</p>
            
        </div>
        <div className={styles.aboutContentSect}>
            <h2>OUR MISSION</h2>
            <p><span>Keeping Workplaces in Kenya Running Without Interruptions</span></p>
            <p>Our mission is to simplify office procurement for businesses in Nairobi and across Kenya by providing reliable, structured restock services that eliminate supply shortages and improve workplace efficiency.</p>
            <p>We believe businesses should focus on growth — not managing office supplies.</p>
        </div>
        <div className={styles.aboutContentSect}>
            <h2>WHAT WE DO</h2>
            <p><span>End-to-End Office Restock Services</span></p>
            <p>OfficeFlow provides structured workplace supply solutions including:</p>
            <ul className={styles.choiceList} style={{listStyleType: 'none'}}>
                <li><MdCheck style={{color: 'rgb(81, 255, 0)', marginRight: '10px',width: '15px', height: '15px'}}/> Office supply mapping</li>
                <li><MdCheck style={{color: 'rgb(81, 255, 0)', marginRight: '10px', width: '15px', height: '15px'}}/> Customized restock planning</li>
                <li><MdCheck style={{color: 'rgb(81, 255, 0)', marginRight: '10px', width: '15px', height: '15px'}}/> Scheduled deliveries</li>
                <li><MdCheck style={{color: 'rgb(81, 255, 0)', marginRight: '10px', width: '15px', height: '15px'}}/> Recurring supply management</li>
                <li><MdCheck style={{color: 'rgb(81, 255, 0)', marginRight: '10px', width: '15px', height: '15px'}}/> Business account systems</li>
            </ul>
            <p>We combine multiple office supply needs into one simple system, so businesses no longer have to manage multiple vendors.</p>
        </div>
        <div className={styles.aboutContentSect}>
            <h2>WHERE WE OPERATE</h2>
            <p>OfficeFlow serves businesses across:</p>
            <ul>
                  <li>Nairobi (Westlands, CBD, Upper Hill, Kilimani, Karen, Industrial Area, Gigiri)</li>
                  <li>Mombasa</li>
                  <li>Nakuru</li>
                  <li>Kisumu</li>
                  <li>Eldoret</li>
                  <li>And other regions across Kenya</li>
                 </ul>
                 <p>We are expanding to support businesses nationwide with reliable workplace restock services.</p>
        </div>
        <div className={styles.aboutContentSect}>
            <h2>WHY WE EXIST</h2>
            <p><span>Fixing Broken Office Procurement in Kenya</span></p>
            <p>Many businesses in Kenya face:</p>
             <ul>
                  <li>Unpredictable office supply shortages</li>
                  <li>Time-consuming procurement processes</li>
                  <li>Multiple suppliers for different items</li>
                  <li>Lack of structured restocking systems</li>
                 </ul>
                 <p>OfficeFlow was created to solve this by offering a <span>centralized workplace supply system</span> that ensures consistency, reliability, and convenience.</p>
        </div>
        <div className={styles.aboutContentSect}>
            <h2>WHO WE SERVE</h2>
            <p>We support:</p>
            <ul>
                  <li>SMEs</li>
                  <li>Startups</li>
                  <li>Corporate offices</li>
                  <li>NGOs</li>
                  <li>Law firms</li>
                  <li>Clinics & Hospitals</li>
                  <li>Schools & Institutions</li>
                  <li>Agencies & coworking spaces</li>
                 </ul>
                 <p>Whether you're a small team or a large organization, we help keep your workplace running smoothly.</p>
        </div>
        <div className={styles.aboutContentSect}>
            <h2>WHY BUSINESSES CHOOSE OFFICEFLOW</h2>
            <p>Offices and businesses in Nairobi and across Kenya trust us because:</p>
            <ul>
                  <li>Reliable office restock services in Nairobi and Kenya</li>
                  <li>One partner for all workplace supplies</li>
                  <li>Predictable and structured delivery system</li>
                  <li>Reduced procurement workload</li>
                  <li>Better office efficiency and organization</li>
                  <li>Scalable solutions for growing businesses</li>
                 </ul>
        </div>
        <div className={styles.aboutContentSect}>
            <p><span>Let’s Build Your Office Restock System</span></p>
            <p>Stop managing office supply problems manually.</p>
            <p>OfficeFlow helps you build a reliable workplace supply system that keeps your business fully stocked and running efficiently.</p>
            <Link href={'/'}>
            <p style={{color: '#b700ff', fontStyle: 'italic'}}>Visit our home page to explore restock options or talk to us on Whatsapp</p>
            </Link>
        </div>
        </div>
        </main>
        </>
    )
    
}

export default About;