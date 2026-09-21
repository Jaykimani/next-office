import styles from './business.module.css';
import ServiceNav from '@/components/servicenav/servnav';
import Quiz3 from '@/components/quizthree/quizthree';
import Footer from '@/components/footer/footer';
import Image from 'next/image';
import Link from 'next/link';
import { LuUserRoundPlus } from "react-icons/lu";
import { FiPhone } from "react-icons/fi";
import { BsLightningCharge } from "react-icons/bs";
import { LuCalendarClock } from "react-icons/lu";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { LuPackageCheck } from "react-icons/lu";
import { BsFileEarmarkBarGraph } from "react-icons/bs";
import { BsShop } from "react-icons/bs";
import { BsBuildings } from "react-icons/bs";
import { TbPlant } from "react-icons/tb";
import { LuHandHelping } from "react-icons/lu";
import { LuSchool } from "react-icons/lu";
import { MdOutlineSchool } from "react-icons/md";
import { GiInjustice } from "react-icons/gi";
import { LuHospital } from "react-icons/lu";
import { BsBank2 } from "react-icons/bs";
import { FaBuildingFlag } from "react-icons/fa6";
import { LuClipboardList } from "react-icons/lu";

const page = () => {

  const businessAccountFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is an OfficeFlow Business Account?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An OfficeFlow Business Account is designed for businesses and organizations that regularly purchase office supplies. It makes it easier to manage your workplace supply needs, place repeat orders, track purchases, and work with OfficeFlow for ongoing office restocking."
      }
    },
    {
      "@type": "Question",
      "name": "What are the benefits of an OfficeFlow Business Account?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An OfficeFlow Business Account helps simplify office procurement by making repeat ordering easier, keeping your business information organized, providing visibility into office supply expenditure, and giving your business access to ongoing restocking support."
      }
    },
    {
      "@type": "Question",
      "name": "Can my business order office supplies online through OfficeFlow?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Businesses can use OfficeFlow to source and order a wide range of workplace essentials, including stationery, printing and paper supplies, pantry and hydration products, cleaning supplies, IT consumables, and other office essentials."
      }
    },
    {
      "@type": "Question",
      "name": "Can OfficeFlow help my business with regular office restocking?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. OfficeFlow provides office restocking solutions for businesses that need supplies on a recurring basis. Depending on your requirements, you can arrange scheduled or recurring restocking to help prevent essential workplace supplies from running out."
      }
    },
    {
      "@type": "Question",
      "name": "Can I track my business's office supply expenditure?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Business account features can provide visibility into your office supply purchases and expenditure, helping you understand how much your business spends across different supply categories and make better procurement decisions."
      }
    },
    {
      "@type": "Question",
      "name": "Who can create an OfficeFlow Business Account?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "OfficeFlow Business Accounts are suitable for a wide range of organizations, including SMEs, startups, corporate offices, NGOs, law firms, agencies, clinics, schools, coworking spaces, and other professional workplaces."
      }
    },
    {
      "@type": "Question",
      "name": "Does OfficeFlow provide office supplies in Nairobi and across Kenya?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "OfficeFlow primarily serves businesses in Nairobi and can support businesses in other parts of Kenya depending on their location, product requirements, and delivery needs. Our goal is to make sourcing workplace supplies easier for businesses across Kenya."
      }
    },
    {
      "@type": "Question",
      "name": "How do I create an OfficeFlow Business Account?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To create an OfficeFlow Business Account, submit your business details through the Business Account registration form. Provide your contact information, business location, and office supply requirements, and the OfficeFlow team can review your request and help you get started."
      }
    }
  ]
};


  return (
    <>
     <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(businessAccountFaqSchema),
  }}
/>
    <div className={styles.businessLanding}>
    <ServiceNav />
    <div className={styles.landingContent}>
      <h1>Business Accounts for <span>Smarter Office Procument</span></h1>
      <p className={styles.landingParagraph}>Simplify your office purchasing with an OfficeFlow Business Account. Enjoy One-click reordering, recurring office restock services,
        dedicated support and bulk pricing designed for businesses in Nairobi and across Kenya.
      </p>
      <div className={styles.landingButtons}>
        <Link href={'/my-account/register'} className={styles.addBtn}>
         <LuUserRoundPlus style={{width: '25px', height: '25px'}}/>
         <p>Apply for a Business Account</p>
        </Link>
        <Link href={'/contact'} className={styles.talkBtn}>
         <FiPhone style={{width: '30px', height: '30px', color: '#ffe100'}}/>
         <p>Speak To Our Team</p>
        </Link>
      </div>
    </div>
    </div>
    <div className={styles.businesswhy}>
        <h2><span>Why</span> choose an OfficeFlow Business Account?</h2>
        <div className={styles.whyinset}>
          <div className={styles.insetInfo}>
               <div className={styles.insetEmoji}>
                <BsFileEarmarkBarGraph style={{color: '#ffe100', width: '40px', height: '40px'}}/>
               </div>
               <h3>Track your spending</h3>
               <p>Monitor your expenditure, understand your purchasing pattern and plan your workplace supply budget.</p>
            </div>
            <div className={styles.insetInfo}>
               <div className={styles.insetEmoji}>
                <BsLightningCharge style={{color: '#ffe100', width: '40px', height: '40px'}}/>
               </div>
               <h3>Faster Ordering</h3>
               <p>Save time reordering frequently used products instead of scrolling through our whole catalogue</p>
            </div>
            {/* <div className={styles.divider}></div> */}
             <div className={styles.insetInfo}>
               <div className={styles.insetEmoji}>
                <LuCalendarClock style={{color: '#ffe100', width: '40px', height: '40px'}}/>
               </div>
               <h3>Recurring Office Restocking</h3>
               <p>Never run out of essential office supplies with schedule deliveries tailored to your business</p>
            </div>
             <div className={styles.insetInfo}>
               <div className={styles.insetEmoji}>
                <RiCustomerService2Fill style={{color: '#ffe100', width: '40px', height: '40px'}}/>
               </div>
               <h3>Dedicated Business Support</h3>
               <p>Work with a team that understands your workplace requirements and responds quickly</p>
            </div>
             <div className={styles.insetInfo}>
               <div className={styles.insetEmoji}>
                <LuPackageCheck style={{color: '#ffe100', width: '40px', height: '40px'}}/>
               </div>
               <h3>One Trusted Supplier</h3>
               <p>Source Stationery, Printing supplies, Pantry items, cleaning products and IT consumables from one partner</p>
            </div>
             <div className={styles.insetInfo}>
               <div className={styles.insetEmoji}>
                <MdOutlineAddShoppingCart style={{color: '#ffe100', width: '40px', height: '40px'}}/>
               </div>
               <h3>Bulk Purchasing</h3>
               <p>Access competitive pricing when purchasing office supplies for your business</p>
            </div>
             


        </div>

    </div>
    <div className={styles.businesswho}>
     <h2><span>Who</span> Is It For?</h2>
     <div className={styles.whoInset}>
      <div className={styles.whoInsetInfo}>
      <BsShop style={{width: '40px', height: '40px'}}/>
      <p>SMEs</p>
      </div>
      <div className={styles.whoInsetInfo}>
      <BsBuildings style={{width: '40px', height: '40px'}}/>
      <p>Corporate Offices</p>
      </div>
      <div className={styles.whoInsetInfo}>
      <TbPlant style={{width: '40px', height: '40px'}}/>
      <p>Startups</p>
      </div>
      <div className={styles.whoInsetInfo}>
      <LuHandHelping style={{width: '40px', height: '40px'}}/>
      <p>NGOs</p>
      </div>
      <div className={styles.whoInsetInfo}>
      <LuSchool style={{width: '40px', height: '40px'}}/>
      <p>Schools</p>
      </div>
      <div className={styles.whoInsetInfo}>
      <MdOutlineSchool style={{width: '40px', height: '40px'}}/>
      <p>Universities</p>
      </div>
      <div className={styles.whoInsetInfo}>
      <GiInjustice style={{width: '40px', height: '40px'}}/>
      <p>Law Firms</p>
      </div>
      <div className={styles.whoInsetInfo}>
      <LuHospital style={{width: '40px', height: '40px'}}/>
      <p>Hospitals</p>
      </div>
      <div className={styles.whoInsetInfo}>
      <BsBank2 style={{width: '40px', height: '40px'}}/>
      <p>Financial Institutions</p>
      </div>
      <div className={styles.whoInsetInfo}>
      <FaBuildingFlag style={{width: '40px', height: '40px'}}/>
      <p>Government Offices</p>
      </div>
     </div>
    </div>
    <div className={styles.businesswhat}>
      <h2><span>What</span> You Can Order</h2>
      <div className={styles.whatInset}>
       <div className={styles.whatInsetInfo}>
        <Image className={styles.whatImg} src="/statitionery4.jpg" alt="fast shipping" width={500} height={500}/>
        <div className={styles.whatContent}>
         <h3>Stationery & Writing Supplies</h3>
        <p>Pens, Pencils, Sticky notes,arch files, Makers, Highlighters, Erasers e.t.c</p>
        </div>
       </div>
         <div className={styles.whatInsetInfo}>
        <Image className={styles.whatImg} src="/paper4.jpg" alt="fast shipping" width={500} height={500}/>
        <div className={styles.whatContent}>
         <h3>Printing & Paper supplies</h3>
        <p>A4 printing paper, Notebooks, Counter books, diaries, Colored paper, Photo paper, Envelopes, Manila papers e.t.c</p>
        </div>
       </div>
         <div className={styles.whatInsetInfo}>
        <Image className={styles.whatImg} src="/BAPrinter.jpg" alt="fast shipping" width={500} height={500}/>
        <div className={styles.whatContent}>
         <h3>Printer Consumables</h3>
        <p>PInk cartridges, Toner cartridges, Printer ribbons, Maintenance kits, Refilling Services e.t.c</p>
        </div>
       </div>
         <div className={styles.whatInsetInfo}>
        <Image className={styles.whatImg} src="/consumable.jpg" alt="fast shipping" width={500} height={500}/>
        <div className={styles.whatContent}>
         <h3>IT & Tech Consumables</h3>
        <p>HDMI adapters, USB drives, Ethernet cables, Charging cables, Laptop chargers, Extension cables e.t.c</p>
        </div>
       </div>
         <div className={styles.whatInsetInfo}>
        <Image className={styles.whatImg} src="/pantry2.jpg" alt="fast shipping" width={500} height={500}/>
        <div className={styles.whatContent}>
         <h3>Pantry & Hydration supplies</h3>
        <p>Drinking water, Dispenser water, Coffee, Tea, Sugar, Disposable cups, Stirrers, Snacks, Milk e.t.c</p>
        </div>
       </div>
         <div className={styles.whatInsetInfo}>
        <Image className={styles.whatImg} src="/cleaning1.jpg" alt="fast shipping" width={500} height={500}/>
        <div className={styles.whatContent}>
         <h3>Cleaning & Hygiene supplies</h3>
        <p>Disinfectant sprays, Hand sanitizers, Air fresheners, Hand towels, Tissue papers, Cleaning detergents e.t.c</p>
        </div>
       </div>
      </div>
    </div>
    <div className={styles.readyDiv}>
      <div className={styles.readyDiv1}>
       <h1>Ready to <span>Simplify Your Office Procurement</span>?</h1>
       <p>Open an Officeflow Business Account and let us help you keep your workplace stocked with the supplies your team relies on everyday.</p>
      </div>
      <div className={styles.readyDiv2}>
        <div className={styles.readyBtn1}>
        <LuUserRoundPlus style={{width: '25px', height: '25px'}}/>
         <p>Apply for a Business Account</p>
        </div>
        <div className={styles.readyBtn2}>
        <LuClipboardList style={{width: '25px', height: '25px'}}/>
         <p>Request A Quote</p>
        </div>
      </div>
    </div>
    <Quiz3 />
    <Footer />
    </>
  )
}

export default page