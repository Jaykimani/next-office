import styles from './restock.module.css'
import ServiceNav from '@/components/servicenav/servnav';
import Image from 'next/image'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Office Restock Services Kenya | Scheduled Office Supply Delivery",

  description:
    "Office Aura Kenya provides reliable office restock services including stationery, printer supplies, pantry items, cleaning products, and workplace essentials with scheduled delivery across Kenya.",

  keywords: [
    "office restock services Kenya",
    "office supplies Nairobi",
    "scheduled office supply delivery",
    "office stationery Kenya",
    "printer ink Nairobi",
    "office pantry supplies Kenya",
    "workplace solutions Kenya",
    "bulk office supplies Kenya",
    "office consumables Kenya",
    "business office supplies Nairobi"
  ],

  openGraph: {
    title:
      "Office Restock Services Kenya | Office Aura Kenya",

    description:
      "Keep your workplace fully stocked with scheduled office supply deliveries, workplace essentials, pantry supplies, printer ink, stationery, and cleaning products across Kenya.",

    url: "https://www.officeaura.co.ke/restock-services",

    siteName: "Office Aura Kenya",

    locale: "en_KE",

    type: "website"
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Office Restock Services Kenya | Office Aura Kenya",

    description:
      "Reliable recurring office supply and workplace restock services for businesses in Nairobi and across Kenya."
  },

  alternates: {
    canonical:
      "https://www.officeaura.co.ke/restock-services"
  },

  robots: {
    index: true,
    follow: true
  }
};


const page = () => {
  
   const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "@id":
            "https://www.officeaura.co.ke/restock-services/#service",

          "name":
            "Office Restock Services Kenya",

          "serviceType":
            "Office Supply Restocking Service",

          "provider": {
            "@type": "LocalBusiness",
            "@id":
              "https://www.officeaura.co.ke/#localbusiness"
          },

          "areaServed": {
            "@type": "Country",
            "name": "Kenya"
          },

          "description":
            "Scheduled office restock services including stationery supplies, printer ink, pantry items, cleaning products, workplace essentials, and recurring office supply fulfillment for businesses across Kenya.",

          "url":
            "https://www.officeaura.co.ke/restock-services",

          "offers": {
            "@type": "Offer",
            "availability":
              "https://schema.org/InStock",

            "priceCurrency": "KES"
          }
        },

        {
          "@type": "LocalBusiness",

          "@id":
            "https://www.officeaura.co.ke/#localbusiness",

          "name": "Office Aura Kenya",

          "url":
            "https://www.officeaura.co.ke",

          "telephone":
            "+254704610605",

          "image":
            "https://www.officeaura.co.ke/logo.png",

          "description":
            "Office Aura Kenya provides office restock services, employee experience kits, and corporate event fulfillment packs for businesses across Kenya.",

          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Nairobi",
            "addressRegion": "Nairobi County",
            "addressCountry": "KE"
          },

          "areaServed": {
            "@type": "Country",
            "name": "Kenya"
          },

          "sameAs": [
            "https://www.instagram.com/officeaura",
            "https://www.linkedin.com/company/officeaura"
          ]
        },

        {
          "@type": "BreadcrumbList",

          "@id":
            "https://www.officeaura.co.ke/restock-services/#breadcrumb",

          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item":
                "https://www.officeaura.co.ke"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Restock Services",
              "item":
                "https://www.officeaura.co.ke/restock-services"
            }
          ]
        }
      ]
    }
    
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",

      "mainEntity": [
        {
          "@type": "Question",

          "name":
            "What are office restock services?",

          "acceptedAnswer": {
            "@type": "Answer",

            "text":
              "Office restock services help businesses maintain a consistent supply of workplace essentials such as stationery, printer paper, pantry supplies, cleaning products, printer ink, and office consumables through recurring deliveries."
          }
        },

        {
          "@type": "Question",

          "name":
            "Does Office Aura Kenya offer scheduled office supply deliveries?",

          "acceptedAnswer": {
            "@type": "Answer",

            "text":
              "Yes. Office Aura Kenya offers scheduled office restock deliveries for businesses across Nairobi and Kenya. Companies can choose weekly, bi-weekly, or monthly restocking plans based on their workplace needs."
          }
        },

        {
          "@type": "Question",

          "name":
            "What products are included in office restock services?",

          "acceptedAnswer": {
            "@type": "Answer",

            "text":
              "Office restock services may include stationery supplies, notebooks, pens, printing paper, toner and ink cartridges, pantry supplies, cleaning products, tissues, desk accessories, IT consumables, and other workplace essentials."
          }
        },

        {
          "@type": "Question",

          "name":
            "Do you provide office restock services outside Nairobi?",

          "acceptedAnswer": {
            "@type": "Answer",

            "text":
              "Yes. Office Aura Kenya provides office restock and workplace supply delivery services across Nairobi and throughout Kenya."
          }
        },

        {
          "@type": "Question",

          "name":
            "Can businesses customize their office restock plans?",

          "acceptedAnswer": {
            "@type": "Answer",

            "text":
              "Yes. Businesses can customize office restock plans based on team size, office consumption, preferred products, delivery frequency, and operational requirements."
          }
        },

        {
          "@type": "Question",

          "name":
            "Who can benefit from office restock services?",

          "acceptedAnswer": {
            "@type": "Answer",

            "text":
              "Office restock services are ideal for SMEs, startups, NGOs, law firms, coworking spaces, clinics, schools, agencies, and corporate offices looking for reliable recurring workplace supply solutions."
          }
        },

        {
          "@type": "Question",

          "name":
            "Do you offer emergency office restocking support?",

          "acceptedAnswer": {
            "@type": "Answer",

            "text":
              "Yes. Office Aura Kenya offers emergency office restocking support to help businesses quickly replenish essential supplies and minimize workplace disruptions."
          }
        },

        {
          "@type": "Question",

          "name":
            "How do I get started with Office Aura restock services?",

          "acceptedAnswer": {
            "@type": "Answer",

            "text":
              "You can get started by contacting Office Aura Kenya through our website, WhatsApp, or inquiry form to request a quotation and discuss your office supply requirements."
          }
        }
      ]
    }

  return (
    <main>
        <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
       <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
     <div className={styles.navbar}>
     <ServiceNav />
     </div>
     <div className={styles.landing}>
      <div className={styles.landingHero}>
        <div className={styles.heroInset}>
        <h1>NEVER RUN OUT.</h1>
       <h1 style={{color: '#ffe100'}}>WE RESTOCK.</h1>
       <p>Keep your workplace fully stocked with scheduled office restock services for stationery, pantry essentials, printer supplies, cleaning products, and everyday office essentials delivered across Kenya.</p>
       <div className={styles.herocta}>
        <div className={styles.quote}>
            Request a quote
        </div>
        <div className={styles.chat}>
            Talk to us on Whatsapp
        </div>
       </div>
        </div>     
      </div>
      <div className={styles.landingImage}>
        <Image className={styles.landingImg} src="/restock.jpg" alt="fast shipping" width={500} height={500}/>
      </div>
     </div>

    </main>
  )
}

export default page