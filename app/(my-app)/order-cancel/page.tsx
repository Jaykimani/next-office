import styles from './cancel.module.css';
import { MdOutlineCancel } from "react-icons/md";
import Link from 'next/link';

function page() {
  return (
    <div className={styles.cancelMain}>
        <div className={styles.cancelInset}>
         <MdOutlineCancel style={{color: "red", width: "120px", height: "120px"}}/>
         <h1>Order cancelled!</h1>
         <p>Thank you for shopping with OFFICE AURA. Your one stop shop for office décor, accessories and essentials.</p>
         <p>Your order has been cancelled😥</p>
         <div className={styles.cancelBtnDiv}>
          <Link href={'/checkout'} className={styles.cancelBtn}>
           <div>
            <p>Try Checkout Again</p>
           </div>
          </Link>
          <Link href={'/shop'} className={styles.cancelBtn}>
          <div>
            <p>Continue shopping</p>
           </div>
          </Link>
           
         </div>
         <div className={styles.divider}></div>
         <div className={styles.cancelQuiz}>
            <h2>Why choose Office Aura?</h2>
            <ul>
              <li>Fast delivery in Nairobi & Kenya</li>
              <li>Premium office décor & accessories</li>
              <li>Secure checkout</li>
            </ul>
         </div>
         <Link href={'/contact'}>
                  <h4 className={styles.contact}>Need Help? Contact us</h4>

         </Link>
        </div>

    </div>
  )
}

export default page

