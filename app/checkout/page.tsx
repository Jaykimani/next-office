import styles from './checkout.module.css';
import Image from 'next/image';

function Checkout() {
    return (
        <>
        <div id={styles.checkout}>
          <div className={styles.checkoutInset}>
            <div className={styles.svgDiv}>
            <Image className={styles.svgLogo3} src="/Component 6.svg" alt="" width={200} height={200} />
            </div>
          <div className={styles.line}></div>
            <div className={styles.checkoutDiv}>
              <div className={styles.billShip}>
                <form className={styles.billingForm}>
                  <h4>BILLING & SHIPPING</h4>
                  <h5>Delivery Information</h5>
                  <input type="text" name="" id="" placeholder='Full Name'/>
                  <input type="text" placeholder='Phone Number'/>
                  <input type="text" placeholder='Email Address'/>
                  <input type="text" placeholder='City / Town'/>
                  <input type="text" placeholder='Area name or Street name'/>
                  <input type="text" placeholder='Building name/Apartment name/Estate name'/>
                  <input type="text" placeholder='Office/Room/Apartment/House number'/>
                  <h5>Additional Information</h5>
                  <textarea name="" id="" cols={30} rows={5}></textarea>
                </form>
                
              </div>
              <div className={styles.customerOrder}>
               <h4 className={styles.customH4}>YOUR ORDER</h4>
               <div className={styles.orderDiv}>
                <div className={styles.orderInformation}>
                  <p>Modern Luxury Desk Lamp</p>
                  <p>x 2</p>
                </div>
                <div className={styles.orderSubtotal}>
                   <h4>KSh 10,000.00</h4>
                </div>
               </div>
               <div className={styles.orderDiv}>
                <div className={styles.orderInformation}>
                  <p>Modern Luxury Desk Lamp</p>
                  <p>x 2</p>
                </div>
                <div className={styles.orderSubtotal}>
                   <h4>KSh 10,000.00</h4>
                </div>
               </div>
               <div className={styles.orderDiv}>
                <div className={styles.orderInformation}>
                  <p>Modern Luxury Desk Lamp</p>
                  <p>x 2</p>
                </div>
                <div className={styles.orderSubtotal}>
                   <h4>KSh 10,000.00</h4>
                </div>
               </div>
               <div className={styles.orderTotal}>
                <h4>SUBTOTAL:</h4>
                <p>KSh 30,000.00</p>
               </div>
               <div className={styles.orderTotal}>
                <h4>Shipping</h4>
                <p>Ksh 0.00</p>
               </div>
               <div className={styles.orderNotice}>
                <input type="checkbox" name="" id="" />
                <p>If you are facing issues placing your order, please check this option and click on “Place Order” and our team will reach out to you A.S.A.P.</p>
               </div>
               <button type="submit" className={styles.placeOrder}>PLACE ORDER</button>
               <button type="submit" className={styles.cancelOrder}>CANCEL ORDER</button>

              </div>
            </div>

          </div>
        </div>

        </>
    )
}

export default Checkout;