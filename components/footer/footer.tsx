import styles from './footer.module.css'
import Link from 'next/link';

const Footer = () => {
  return (<>
         <div id={styles.footer}>
            <div className={styles.footerInset}>
            <div className={styles.footerLeft}>
             <h1>Quick Links</h1>
             <p>&copy; 2025 <span>Perfect</span>OfficeKE. All rights reserved.</p>
            </div>
            <div className={styles.footerRight}>
            <Link href={'/home'} style={{textDecoration: 'none', color: 'white'}}>
            <p>Home</p>
            </Link>
            <Link href={'/shop'} style={{textDecoration: 'none', color: 'white'}}>
            <p>Shop</p>
            </Link>
             <Link href={'/contact'} style={{textDecoration: 'none', color: 'white'}}>
            <p>Contact</p>
            </Link>
             <Link href={'/about'} style={{textDecoration: 'none', color: 'white'}}>
            <p>About us</p>
            </Link>
            </div>   
            </div>
            
        </div>
        </>
  )
}

export default Footer;