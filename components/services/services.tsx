import styles from './services.module.css'
import Image from 'next/image'
import { TiShoppingCart } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa6";
import Link from 'next/link';

const Services = () => {
  return (
    <div className={styles.servicesMain}>
        <h1>What We Supply</h1>
        <div className={styles.servicesInset}>
            <div className={styles.feature}>
                <div className={styles.featureImage}>
                  <Image className={styles.featureImg} src="/stationery.jpg" alt="fast shipping" width={500} height={500}/>
                </div>
                <div className={styles.featureInfo}>
                  <h4>Stationery & Writing supplies</h4>
                  <p className={styles.featureList}>Pens, Pencils, Sticky notes,arch files, Makers, Highlighters, Erasers, Correction fluid/tape, Staplers, Staples, Paper Clips and more ...</p>
                  <div>
                  <Link href={'/shop/office-supplies/stationery-writing-supplies'}>
                  <div className={styles.shopbtn}>
                  <TiShoppingCart style={{width: '30px', height: '30px', marginRight: '15px'}}/>
                  <p>Visit our online shop</p>
                  </div>
                  </Link>
                  <a
                  className={styles.whatsappbtn}
                  href={`https://wa.me/254704610605?text=Hello OfficeFlow Kenya,...`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{textDecoration: 'none', color: 'black', fontSize: '18px'}}
                  title="Chat with us on WhatsApp"
                >
                  <FaWhatsapp style={{width: '30px', height: '30px', marginRight: '15px'}}/>
                  <p className={styles.whatsappbtnp}>Order from Whatsapp</p>
                </a>
                    </div>
                </div>

            </div>
            <div className={styles.feature}>
              <div className={styles.featureImage}>
                  <Image className={styles.featureImg} src="/paper.jpg" alt="fast shipping" width={500} height={500}/>
                </div>
              <div className={styles.featureInfo}>
                  <h4>Printing & Paper supplies</h4>
                  <p className={styles.featureList}>A4 printing paper, Notebooks, Counter books, diaries, Colored paper, Photo paper, Envelopes, Manila papers, Flipchart papers, Receipt books, Invoice books, Labels e.t.c</p>
                  <div>
                  <Link href={'/shop/office-supplies/printing-paper-supplies'}>
                  <div className={styles.shopbtn}>
                  <TiShoppingCart style={{width: '30px', height: '30px', marginRight: '15px'}}/>
                  <p>Visit our online shop</p>
                  </div>
                  </Link>
                   <a
                  className={styles.whatsappbtn}
                  href={`https://wa.me/254704610605?text=Hello OfficeFlow Kenya,...`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{textDecoration: 'none', color: 'black', fontSize: '18px'}}
                  title="Chat with us on WhatsApp"
                >
                  <FaWhatsapp style={{width: '30px', height: '30px', marginRight: '15px'}}/>
                  <p className={styles.whatsappbtnp}>Order from Whatsapp</p>
                </a>
                  </div>
                </div>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureImage}>
                  <Image className={styles.featureImg} src="/printer2.jpg" alt="fast shipping" width={500} height={500}/>
                </div>
              <div className={styles.featureInfo}>
                  <h4>Printer Consumables</h4>
                  <p className={styles.featureList}>Ink cartridges, Toner cartridges, Printer ribbons, Maintenance kits, Refilling Services, Thermal paper rolls, POS printer rolls</p>
                  <div>
                  <Link href={'/shop/office-supplies/printer-ink-supplies'}>
                   <div className={styles.shopbtn}>
                  <TiShoppingCart style={{width: '30px', height: '30px', marginRight: '15px'}}/>
                  <p>Visit our online shop</p>
                  </div>
                  </Link>
                 
                    <a
                  className={styles.whatsappbtn}
                  href={`https://wa.me/254704610605?text=Hello OfficeFlow Kenya,...`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{textDecoration: 'none', color: 'black', fontSize: '18px'}}
                  title="Chat with us on WhatsApp"
                >
                  <FaWhatsapp style={{width: '30px', height: '30px', marginRight: '15px'}}/>
                  <p className={styles.whatsappbtnp}>Order from Whatsapp</p>
                </a>
                  </div>
                </div>  
            </div>
            <div className={styles.feature}>
                 <div className={styles.featureImage}>
                  <Image className={styles.featureImg} src="/tech.jpg" alt="fast shipping" width={500} height={500}/>
                </div>
                <div className={styles.featureInfo}>
                  <h4>IT & Tech Consumables</h4>
                  <p className={styles.featureList}>HDMI adapters, USB drives, Ethernet cables, Charging cables, Laptop chargers, Extension cables, Surge protectors, Mouse batteries, Keyboard batteries e.t.c</p>
                  <div>
                  <Link href={'/shop/office-electronics'}>
                  <div className={styles.shopbtn}>
                  <TiShoppingCart style={{width: '30px', height: '30px', marginRight: '15px'}}/>
                  <p>Visit our online shop</p>
                  </div>
                  </Link>
                  
                    <a
                  className={styles.whatsappbtn}
                  href={`https://wa.me/254704610605?text=Hello OfficeFlow Kenya,...`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{textDecoration: 'none', color: 'black'}}
                  title="Chat with us on WhatsApp"
                >
                  <FaWhatsapp style={{width: '30px', height: '30px', marginRight: '15px'}}/>
                  <p className={styles.whatsappbtnp}>Order from Whatsapp</p>
                </a>
                  </div>
                </div>
            </div>
            <div className={styles.feature}>
                 <div className={styles.featureImage}>
                  <Image className={styles.featureImg} src="/pantry.jpg" alt="fast shipping" width={500} height={500}/>
                </div>
                <div className={styles.featureInfo}>
                  <h4>Pantry & Hydration supplies</h4>
                  <p className={styles.featureList}>Drinking water, Dispenser water, Coffee, Tea, Sugar, Disposable cups, Stirrers, Snacks, Milk, Plates, Cutlery, Napkins e.t.c</p>
                  <div>
                    <Link href={'/shop/office-pantry-hydration'}>
                  <div className={styles.shopbtn}>
                  <TiShoppingCart style={{width: '30px', height: '30px', marginRight: '15px'}}/>
                  <p>Visit our online shop</p>
                  </div>
                  </Link>
                   <a
                  className={styles.whatsappbtn}
                  href={`https://wa.me/254704610605?text=Hello OfficeFlow Kenya,...`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{textDecoration: 'none', color: 'black', fontSize: '18px'}}
                  title="Chat with us on WhatsApp"
                >
                  <FaWhatsapp style={{width: '30px', height: '30px', marginRight: '15px'}}/>
                  <p className={styles.whatsappbtnp}>Order from Whatsapp</p>
                </a>
                  </div>
                </div>
            </div>
            <div className={styles.feature}>
                <div className={styles.featureImage}>
                  <Image className={styles.featureImg} src="/cleaning.jpg" alt="fast shipping" width={500} height={500}/>
                </div>
                <div className={styles.featureInfo}>
                  <h4>Cleaning & Hygiene supplies</h4>
                  <p className={styles.featureList}>Disinfectant sprays, Hand sanitizers, Air fresheners, Hand towels, Tissue papers, Cleaning detergents, Surface disinfectants, Mops & Brushes e.t.c</p>
                  <div>
                  <Link href={'/shop/office-cleaning-hygiene'}>
                   <div className={styles.shopbtn}>
                  <TiShoppingCart style={{width: '30px', height: '30px', marginRight: '15px'}}/>
                  <p>Visit our online shop</p>
                  </div>
                  </Link>
                 
                   <a
                  className={styles.whatsappbtn}
                  href={`https://wa.me/254704610605?text=Hello OfficeFlow Kenya,...`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{textDecoration: 'none', color: 'black', fontSize: '18px'}}
                  title="Chat with us on WhatsApp"
                >
                  <FaWhatsapp style={{width: '30px', height: '30px', marginRight: '15px'}}/>
                  <p className={styles.whatsappbtnp}>Order from Whatsapp</p>
                </a>
                  </div>
                </div>

            </div>
            
        

        </div>
    </div>
  )
}

export default Services