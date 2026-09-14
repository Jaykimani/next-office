import styles from './dashboard.module.css'
import Image from 'next/image'
import { MdHome } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import { FaBoxOpen } from "react-icons/fa";
import { FaRedo } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { FaWallet } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { MdArrowRightAlt } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
import SearchInput from '@/components/searchInput/search';

const page = () => {
  const emoji2 = "\u{1F44B}";
  return (<>
       <main className={styles.overallMain}>
        <div className={styles.dashboardMenu}>
          <div className={styles.svgImage}>
            <Image className={styles.svgLogo1} src="/Component 2.svg" alt="" width={100} height={100} />
          </div>
          <div className={styles.dashboardMenuLinks}>
            <div className={styles.menuLink} id={styles.active}>
              <MdHome style={{color: '#ffe100', width: '35px', height: '35px'}}/>
              <p>Dashboard</p>
            </div>
            <div className={styles.menuLink}>
              <MdShoppingCart style={{color: '#ffe100', width: '35px', height: '35px'}}/>
              <p>Shop</p>
            </div>
            <div className={styles.menuLink}>
              <FaBoxOpen style={{color: '#ffe100', width: '30px', height: '30px'}}/>
              <p>My Orders</p>
            </div>
            <div className={styles.menuLink}>
              <FaRedo style={{color: '#ffe100', width: '30px', height: '30px'}}/>
              <p>Restock Requests</p>
            </div>
            <div className={styles.menuLink}>
              <FaUserAlt style={{color: '#ffe100', width: '30px', height: '30px'}}/>
              <p>Account</p>
            </div>
          </div>
        </div>
        <div className={styles.dashboardContent}>
         <div className={styles.contentHeader}>
          <SearchInput />
          <div className={styles.contentHeaderInset}>
            <div className={styles.inset1}>
             <MdOutlineShoppingCart style={{width: '30px', height: '30px'}}/>
             <span className={styles.insetSpan}>0</span>
            </div>
            <div className={styles.inset1}>
             <FaRegBell style={{width: '28px', height: '28px'}}/>
             <span className={styles.insetSpan}>0</span>
            </div>
            <div className={styles.inset2}>
              <div className={styles.inset2Img}>
               <FaCircleUser style={{width: '50px', height: '50px'}}/>
              </div>
              <div className={styles.inset2Info}>
               <h4>Joseph Kimani</h4>
               <p>OfficeFlow Kenya</p>
              </div>
              <div className={styles.insetActive} style={{backgroundColor: "rgba(0, 255, 0, 0.5)"}}>
                <GoDotFill style={{marginRight: '7px'}}/>
               <p style={{fontSize: '14px'}}>Active</p>         
              </div>
            </div>
            
          </div>
         </div>
         <h1 className={styles.greeting}>Hello, Joseph {emoji2}</h1>
         <p className={styles.greetingP}>Here's what's happening in your OfficeFlow Account.</p>
         <div className={styles.contentStats}>
           <div className={styles.stat}>
            <div className={styles.statImage}>
             <FaWallet  style={{width: '30px', height: '30px', color: '#ffe100'}}/>
            </div>
            <div className={styles.statInfo}>
             <h4 style={{marginBottom: '12px'}}>Monthly Spending</h4>
             <h2 style={{marginBottom: '20px'}}>48,970/=</h2>
             <p style={{color: 'gray'}}>12% up from last month</p>
            </div>

           </div>
            <div className={styles.stat}>
            <div className={styles.statImage} style={{backgroundColor: '#ffe100'}}>
             <FaClipboardList style={{width: '30px', height: '30px', color: 'black'}}/>
            </div>
            <div className={styles.statInfo}>
             <h4 style={{marginBottom: '12px'}}>Pending Orders</h4>
             <h2 style={{marginBottom: '20px'}}>3</h2>
             <p style={{color: 'gray', display: 'flex', alignItems: 'center'}}>view orders <MdArrowRightAlt /></p>
            </div>

           </div>
            <div className={styles.stat}>
            <div className={styles.statImage}>
             <FaShippingFast style={{width: '30px', height: '30px', color: '#ffe100'}}/>
            </div>
            <div className={styles.statInfo}>
             <h4 style={{marginBottom: '12px'}}>Scheduled Deliveries</h4>
             <h2 style={{marginBottom: '20px'}}>2</h2>
             <p style={{color: 'gray', display: 'flex', alignItems: 'center'}}>view schedule <MdArrowRightAlt /></p>
            </div>

           </div>
         </div>
        </div>
       </main>
  </>
    
  )
}

export default page