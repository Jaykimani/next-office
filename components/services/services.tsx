import styles from './services.module.css'
import Image from 'next/image'
import { FaWhatsapp } from "react-icons/fa";

const Services = () => {
  return (
    <div className={styles.servicesMain}>
      <div className={styles.servicesInset}>
         <h2>Our Services</h2>
         <div className={styles.offers}>
          <div className={styles.offersImage}>
           <Image className={styles.offersImg} src="/restock.jpg" alt="office restock services" width={500} height={500} />
          </div>
           <div className={styles.offersInfo}>
            <h3>Office Restock services</h3>
            <p>We provide reliable supply solutions for your <span>stationery requirements, printing essentials, pantry and hydration essentials, cleaning & hygiene products, IT consumables, and workplace safety supplies</span>. Whether you’re managing a startup, corporate office, coworking space, or growing team, our scheduled office restocking services help reduce procurement stress, prevent shortages, and ensure your employees always have the essentials they need to stay productive.</p>
            <div className={styles.offerButtons}>
              <div className={styles.offerBtn1}>
                <p>Learn more...</p>
              </div>
              <div className={styles.offerBtn2}>
                <FaWhatsapp style={{width: '30px', height: '30px', marginRight: '12px'}}/>
               <p>Chat on whatsapp</p>
              </div>
            </div>
           </div>
         </div>
         <div className={styles.offers} style={{marginTop: '20px', marginBottom: '20px'}}>
           <div className={styles.offersInfo}>
            <h3>Employee Experience Kits</h3>
            <p>Empower your team with curated employee workspace kits designed for modern professionals in Kenya. Office Aura provides ready-to-work workspace essentials kits that enhance productivity, organization, and comfort for <span>new hires, interns, remote employees, customer care/call centre employees and sales teams</span>. Each kit can be customized with your company logo, colours, messaging and packaging. Made just for you.</p>
            <div className={styles.offerButtons}>
              <div className={styles.offerBtn1}>
                <p>Learn more...</p>
              </div>
              <div className={styles.offerBtn2}>
                <FaWhatsapp style={{width: '30px', height: '30px', marginRight: '12px'}}/>
               <p>Chat on whatsapp</p>
              </div>
            </div>
           </div>
           <div className={styles.offersImage}>
           <Image className={styles.offersImg} src="/employee2.jpg" alt="office restock services" width={500} height={500} />
          </div>
         </div>
         <div className={styles.offers}>
          <div className={styles.offersImage}>
           <Image className={styles.offersImg} src="/events.jpg" alt="office restock services" width={500} height={500} />
          </div>
           <div className={styles.offersInfo}>
           <h3>Event Fulfillment Packs</h3>
            <p>Make your corporate events more engaging with our complimentary office events fulfillment packs. Whether it's <span>seminars, conferences, workshops or team building events</span>, each pack is thoughtfully curated with useful items to support productivity, comfort, and convenience throughout the event. Each pack can be customized and branded to reflect your company’s identity, ensuring a polished and consistent experience for your attendees.</p>
            <div className={styles.offerButtons}>
              <div className={styles.offerBtn1}>
                <p>Learn more...</p>
              </div>
              <div className={styles.offerBtn2}>
                <FaWhatsapp style={{width: '30px', height: '30px', marginRight: '12px'}}/>
               <p>Chat on whatsapp</p>
              </div>
            </div>
           </div>
         </div>
      </div>
    </div>
  )
}

export default Services