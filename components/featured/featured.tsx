import styles from './featured.module.css';
import { FaBuilding } from "react-icons/fa";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { GiKenya } from "react-icons/gi";
import { LuUserRoundPlus } from "react-icons/lu";
import { FaPersonChalkboard } from "react-icons/fa6";
import Link from 'next/link';


const Featured = () => {
  return (
    <>

        <div id={styles.choice}>
          <div className={styles.choice1}>
            <div className={styles.choiceInset}>
            <h1>Why Choose OfficeFlow Kenya?</h1>
            <p>OfficeFlow Kenya provides reliable office supply and restock services for businesses across Kenya, helping workplaces stay fully stocked and productive. We simplify office procurement by supplying and restocking essential workplace items including stationery, printing paper, pantry supplies, cleaning products, and IT consumables through convenient delivery solutions. Whether you're a startup, SME, NGO, or corporate office, our customized restock services help reduce procurement time, prevent supply shortages, and keep your operations running smoothly. For businesses looking for dependable office supplies in Nairobi and professional workplace support throughout Kenya, OfficeFlow is your trusted office restock partner.</p>
            
          </div>
          </div>
          <div className={styles.choice2}>
          <div className={styles.choiceInset}>
            <h1>Why Choose OfficeFlow Kenya?</h1>
            <p>OfficeFlow Kenya helps businesses across Kenya stay fully stocked with essential workplace supplies through reliable office restock services. From stationery and printing paper to pantry, cleaning, and IT consumables, we simplify procurement, prevent supply shortages, and keep your workplace running smoothly with convenient delivery solutions.</p>
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

export default Featured;