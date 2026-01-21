import styles from './footer.module.css'

const Footer = () => {
  return (<>
         <div id={styles.footer}>
            <div className={styles.footerInset}>
            <div className={styles.footerLeft}>
             <h1>Quick Links</h1>
             <p>&copy; 2025 <span>Perfect</span>OfficeKE. All rights reserved.</p>
            </div>
            <div className={styles.footerRight}>
             <p>Home</p>
             <p>Shop</p>
             <p>About US</p>
             <p>Contact</p>
            </div>   
            </div>
            
        </div>
        </>
  )
}

export default Footer;