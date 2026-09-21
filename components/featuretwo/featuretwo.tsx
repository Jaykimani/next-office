import styles from './featuretwo.module.css';
import { FaBuilding } from "react-icons/fa";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { GiKenya } from "react-icons/gi";
import Link from 'next/link';

const Featured2 = () => {
  return (
    <>

        <div id={styles.choice}>
          <div className={styles.choice1}>
            <div className={styles.choiceInset}>
            <h1>Why Businesses in Nairobi Choose OfficeFlow</h1>
            <p>Businesses across Nairobi choose OfficeFlow for reliable office supplies, fast delivery, and convenient office restock services that help keep workplaces running smoothly. Whether you're a startup in Westlands, a corporate office in Upper Hill, an NGO in Kilimani, or a growing business in Nairobi CBD, OfficeFlow helps reduce procurement stress by providing a dependable source for office stationery, printing paper, printer consumables, pantry supplies, cleaning products, and workplace essentials. Our flexible ordering options, scheduled restock plans, and responsive support make it easier for Nairobi businesses to avoid supply shortages, save time, and maintain productivity without the hassle of managing multiple suppliers. With delivery across Nairobi and a focus on business efficiency, OfficeFlow is a trusted partner for companies looking for professional office supply and workplace restock solutions.</p>
            
          </div>
          </div>
          <div className={styles.choice2}>
          <div className={styles.choiceInset}>
            <h1>Why Businesses in Nairobi Choose OfficeFlow</h1>
            <p>OfficeFlow helps businesses in Nairobi stay stocked with reliable office supplies, workplace essentials, and office restock services. From stationery and printing paper to pantry and cleaning supplies, we provide fast delivery across Nairobi, helping companies save time, reduce procurement stress, and avoid supply shortages.</p>
          </div>
          </div>
          
        </div>

         <div id={styles.businessAdvert}>
          <div className={styles.advInfo}>
        <h1>Business Accounts for<br></br> <span>Smarter Office Procument</span></h1> 
        <p>Create an OfficeFlow Business Account for easier ordering, repeat purchases, restocking requests, and visibility into your office supply spending.</p>
        <div className={styles.advIcons}>
           <div className={styles.advIconsItem}>
            <span><FaBuilding style={{width: '27px', height: '27px'}}/></span>
            <p>Built For Businesses</p>
           </div>
           <div className={styles.advIconsItem}>
            <span><VscWorkspaceTrusted style={{width: '27px', height: '27px'}}/></span>
            <p>Trusted and Reliable</p>
           </div>
           <div className={styles.advIconsItem}>
            <span><GiKenya style={{width: '27px', height: '27px'}}/></span>
            <p>Serving Customers Nationwide</p>
           </div>
        </div>
          </div>
      
        <div className={styles.advctas}>
          <Link href={'/business-accounts'} className={styles.advcta1} >
          <div >
            <p>Learn More ...</p>
            </div>
          </Link>
          <Link href={'/my-account/register'} className={styles.advcta2}>
          <div> 
            <p>Create A Business Account</p>
            </div>
          </Link>
        </div>
        </div>
        </>
  )
}

export default Featured2;