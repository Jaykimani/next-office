import styles from './restocktwo.module.css'
import ServiceNav from '../servicenav/servnav';
import Image from 'next/image'


const Restock2 = () => {
  

  return (
    <main>
     <div className={styles.navbar}>
     <ServiceNav />
     </div>
     <div className={styles.landing}>
      <div className={styles.landingHero}>
        <div className={styles.heroInset}>
        <h1 className={styles.heading1}>Office Supplies and Restocking Services in Nairobi</h1>
       <p>OfficeFlow provides reliable office supplies in Nairobi for businesses that need fast, consistent, and hassle-free workplace restocking. We supply stationery, printing materials, pantry items, cleaning supplies, and IT consumables with quick delivery across Nairobi.</p>
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
        <Image className={styles.landingImg} src="/restock5.jpg" alt="fast shipping" width={500} height={500}/>
      </div>
     </div>

    </main>
  )
}

export default Restock2