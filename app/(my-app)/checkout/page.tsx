"use client"

import styles from './checkout.module.css';
import Image from 'next/image';
import { useCartStore } from '@/app/store';
import { useEffect } from 'react';
import { createOrder } from '@/lib/createOrder';

function Checkout() {
    const {checkout} = useCartStore((state) => state);

    useEffect(()=>{
       console.log(checkout.shippingDate);
       
    }, [])


    return (
        <>
        <div id={styles.checkout}>
          <div className={styles.checkoutInset}>
            <div className={styles.svgDiv}>
            <Image className={styles.svgLogo3} src="/Component 6.svg" alt="" width={200} height={200} />
            </div>
          <div className={styles.line}></div>
            <form action={createOrder} className={styles.checkoutDiv}>
              <div className={styles.billShip}>
                <div className={styles.billingForm}>
                  <h4>BILLING & SHIPPING</h4>
                  <h5>Delivery Information</h5>
                  <input type="text" name="full-name" id="" placeholder='Full Name'/>
                  <input type="text" name='phone-number' placeholder='Phone Number'/>
                  <input type="text" name='email-address' placeholder='Email Address'/>
                  <input type="text" name='city-town' placeholder='City / Town'/>
                  <input type="text" name='area-street' placeholder='Area name or Street name'/>
                  <input type="text" name='building-name' placeholder='Building name/Apartment name/Estate name'/>
                  <input type="text" name='office-number' placeholder='Office/Room/Apartment/House number'/>
                  <input type="text" name='landmark' placeholder='Optional: Nearby landmark e.g opposite sarit centre'/>
                  <h5>Additional Information(Optional)</h5>
                  <textarea name="additional-info" id="" cols={30} rows={5}></textarea>
                </div>
                
              </div>
              <div className={styles.customerOrder}>
               <h4 className={styles.customH4}>YOUR ORDER</h4>
               {checkout?.checkoutItems.map((item)=>{
                  return(
                    <div key={item.name} className={styles.orderDiv}>
                <div className={styles.orderInformation}>
                  <p>{item.name}</p>
                  <p>x {item.count}</p>
                </div>
                <div className={styles.orderSubtotal}>
                   <h4>KSh {item.total.toLocaleString('en-US')}</h4>
                </div>
               </div>
               )
                })}
               
               <div className={styles.orderTotal}>
                <h4>Subtotal:</h4>
                <p style={{fontWeight: '600', fontSize: '18px'}}>KSh {checkout.subtotal.toLocaleString('en-US')}.00</p>
               </div>
               <div className={styles.orderTotal}>
                <h4>Shipping Fee:</h4>
                <p>Ksh 0.00</p>
               </div>
               <div className={styles.orderTotal}>
                <h4>TOTAL:</h4>
                <p style={{fontWeight: '600', fontSize: '20px'}}>Ksh 0.00</p>
               </div>
               <div className={styles.orderTotal}>
                <h4>Delivery:</h4>
                <p style={{color: 'gray', fontFamily: 'Times New Roman, Times, serif', fontWeight: '400', fontSize: '18px'}}>{checkout.shipping}</p>
               </div>
               <div className={styles.orderTotal}>
                <h4>Delivery Date:</h4>
                <p style={{color: 'gray', fontFamily: 'Times New Roman, Times, serif', fontWeight: '400', fontSize: '18px'}}>{checkout.shippingDate}</p>
               </div>
               <div className={styles.checkoutPayments}>
               <h4>PAYMENT:</h4>
               <div className={styles.paymentInset}>
                <div className={styles.paymentDiv}>
                  <Image className={styles.paymentImg} src="/cash-in-hand.jpg" alt="cash-payment" width={100} height={100}/>
                  <p>Cash payment</p>
                </div>
                <div className={styles.paymentDiv}>
                  <Image className={styles.paymentImg} src="/mpesa3.jpg" alt="cash-payment" width={100} height={100}/>
                  <p>M-pesa till number</p>
                </div>
                  <div className={styles.paymentDiv}>
                     <Image className={styles.paymentImg} src="/airtel.jpg" alt="cash-payment" width={100} height={100}/>
                     <p>Airtel money</p>
                  </div>
                  <div className={styles.paymentDiv}>
                    <Image className={styles.paymentImg} src="/card.png" alt="cash-payment" width={100} height={100}/>
                    <p>Credit card</p>
                  </div>
                  
               </div>
               </div>
               <div className={styles.orderNotice}>
                <input type="checkbox" name="" id="" />
                <p>If you are facing issues placing your order, please check this option and click “Place Order”. Our team will reach out to you A.S.A.P.</p>
               </div>
               <button type="submit" className={styles.placeOrder}>PLACE ORDER</button>
               <button type="submit" className={styles.cancelOrder}>CANCEL ORDER</button>

              </div>
            </form>

          </div>
        </div>

        </>
    )
}

export default Checkout;