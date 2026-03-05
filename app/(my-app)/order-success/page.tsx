import styles from './success.module.css'
import Image from 'next/image'
import { MdStickyNote2 } from "react-icons/md";

const page = () => {
  return (
    <div className={styles.success}>
        <div className={styles.successTop}>
        <Image className={styles.successImg} src="/mark.png" alt="office accent accessories" width={200} height={200}/>
        <h1>Order Successfully Placed!</h1>
        <p>Thank you for shopping with Office Aura. We've received your order and will begin processing it shortly.</p>
        <p>You will receive an order confirmation email with details of your order.</p>
        <div className={styles.orderNumber}><h4>Your ORDER NUMBER is: ORD-0998765546</h4></div>
        <p>Order date: 3-3-2026</p>
        </div>
         <div className={styles.successInset}>
            <div className={styles.orderSummary}>
                <h4><MdStickyNote2 style={{color: 'green', width: '25px', height: '25px', marginRight: '15px'}}/> ORDER SUMMARY</h4>
                <div className={styles.productDetails}>
                    <div className={styles.product}>
                     <h5>Modern Desktop Lamp</h5>
                    <p>Price: 3000KSh</p>
                     <p>Qty: 3</p>
                    </div>
                    <div className={styles.productTotal}>
                     <h5>KSh 9,000/=</h5>
                    </div>
                   
                </div>
            </div>
            <div className={styles.deliveryInfo}>

            </div>
        </div>
    </div>
  )
}

export default page