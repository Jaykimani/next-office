import styles from './restock.module.css'
import ServiceNav from '../servicenav/servnav';
import Image from 'next/image'
import Link from 'next/link';

const Restock = () => {
  

  return (
    <main>
     <div className={styles.navbar}>
     <ServiceNav />
     </div>
     <div className={styles.landing}>
      <div className={styles.landingHero}>
        <div className={styles.heroInset}>
        <h1 className={styles.heading1}>OfficeFlow -Office supplies & Restock Services in Kenya</h1>
       <p>Reliable office supplies in Kenya delivered fast to your business. High-quality office essentials for businesses, SMEs, corporates, and organizations across Kenya — including stationery, printing supplies, pantry items, cleaning products, and IT consumables.</p>
       <div className={styles.herocta}>
        <Link href={'/shop'} className={styles.quote}>
        <div >
            Shop Now
        </div>
        </Link>
        <div className={styles.chat}>
             <a
                  href={`https://wa.me/254704610605?text=Hello OfficeFlow Kenya...`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{textDecoration: 'none', color: 'black', fontSize: '16px'}}
                  title="Chat with us on WhatsApp"
                >
                  Talk to us on Whatsapp
                </a>
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

export default Restock