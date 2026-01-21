"use client"

import styles from './cart.module.css'
import Image from 'next/image';
import { useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { MdOutlineCancel } from "react-icons/md";
import { MdCalendarMonth } from "react-icons/md";
import Calendar from '@/components/calendar/calendar';
import Link from 'next/link';


function Cart() {
    const [calendar, setCalendar] = useState(false);


    const handleCalendar = ()=>{
        setCalendar(!calendar)
    }


    return (
        <>
        <div id={styles.cartMain}>
        <div className={styles.cartInset}>
            <h2>Your Cart</h2>
            <div className={styles.cartDiv}>
                <div className={styles.cartItems}>
                   <div className={styles.cartItem}>
                    <Image src="/item2.jpg" alt="" width={200} height={200}/>
                    <div className={styles.cartInfo}>
                    <div className={styles.cartInfoPhone}>
                     <h4>Modern Luxury Lamp</h4>
                    <p className={styles.cartPrice}>Ksh 10,000/=</p>
                     <div className={styles.cartCounter}>
                      <span className={styles.first}><FaMinus fontSize='small'/></span>
                      <span>1</span>
                      <span className={styles.third}><FaPlus fontSize='small'/></span>
                     </div>
                    </div>  
                    </div>
                    <MdOutlineCancel style={{color: 'red', width: '35px', height: '35px', marginLeft: '30px'}}/>
                   </div>
                   <div className={styles.cartItem}>
                    <Image src="/item2.jpg" alt="" width={200} height={200}/>
                    <div className={styles.cartInfo}>
                    <div className={styles.cartInfoPhone}>
                     <h4>Modern Luxury Lamp</h4>
                    <p className={styles.cartPrice}>Ksh 10,000/=</p>
                     <div className={styles.cartCounter}>
                      <span className={styles.first}><FaMinus fontSize='small'/></span>
                      <span>1</span>
                      <span className={styles.third}><FaPlus fontSize='small'/></span>
                     </div>
                    </div>  
                    </div>
                    <MdOutlineCancel style={{color: 'red', width: '35px', height: '35px', marginLeft: '30px'}}/>
                   </div>
                    <div className={styles.cartItem}>
                    <Image src="/item2.jpg" alt="" width={200} height={200}/>
                    <div className={styles.cartInfo}>
                    <div className={styles.cartInfoPhone}>
                     <h4>Modern Luxury Lamp</h4>
                    <p className={styles.cartPrice}>Ksh 10,000/=</p>
                     <div className={styles.cartCounter}>
                      <span className={styles.first}><FaMinus fontSize='small'/></span>
                      <span>1</span>
                      <span className={styles.third}><FaPlus fontSize='small'/></span>
                     </div>
                    </div>  
                    </div>
                    <MdOutlineCancel style={{color: 'red', width: '35px', height: '35px', marginLeft: '30px'}}/>
                   </div>
                   <div className={styles.cartItem}>
                    <Image src="/item2.jpg" alt="" width={200} height={200}/>
                    <div className={styles.cartInfo}>
                    <div className={styles.cartInfoPhone}>
                     <h4>Modern Luxury Lamp</h4>
                    <p className={styles.cartPrice}>Ksh 10,000/=</p>
                     <div className={styles.cartCounter}>
                      <span className={styles.first}><FaMinus fontSize='small'/></span>
                      <span>1</span>
                      <span className={styles.third}><FaPlus fontSize='small'/></span>
                     </div>
                    </div>  
                    </div>
                    <MdOutlineCancel style={{color: 'red', width: '35px', height: '35px', marginLeft: '30px'}}/>
                   </div>
                  <div className={styles.cartItem}>
                    <Image src="/item2.jpg" alt="" width={200} height={200}/>
                    <div className={styles.cartInfo}>
                    <div className={styles.cartInfoPhone}>
                     <h4>Modern Luxury Lamp</h4>
                    <p className={styles.cartPrice}>Ksh 10,000/=</p>
                     <div className={styles.cartCounter}>
                      <span className={styles.first}><FaMinus fontSize='small'/></span>
                      <span>1</span>
                      <span className={styles.third}><FaPlus fontSize='small'/></span>
                     </div>
                    </div>  
                    </div>
                    <MdOutlineCancel style={{color: 'red', width: '35px', height: '35px', marginLeft: '30px'}}/>
                   </div>
                   <div className={styles.cartItem}>
                    <Image src="/item2.jpg" alt="" width={200} height={200}/>
                    <div className={styles.cartInfo}>
                    <div className={styles.cartInfoPhone}>
                     <h4>Modern Luxury Lamp</h4>
                    <p className={styles.cartPrice}>Ksh 10,000/=</p>
                     <div className={styles.cartCounter}>
                      <span className={styles.first}><FaMinus fontSize='small'/></span>
                      <span>1</span>
                      <span className={styles.third}><FaPlus fontSize='small'/></span>
                     </div>
                    </div>  
                    </div>
                    <MdOutlineCancel style={{color: 'red', width: '35px', height: '35px', marginLeft: '30px'}}/>
                   </div>
                </div>
                <div className={styles.cartPayment}>
                <div className={styles.subtotal}>
                <p className={styles.sub}>SUBTOTAL:</p> 
                <p className={styles.total}>8,000Ksh</p> 
                </div>  
                <div className={styles.orderInstructions}>
                 <p>Add Special Order Instructions</p>
                 <textarea name="" id="" rows={5}></textarea>
                </div>
                <div className={styles.cartShipping}>
                    <p className={styles.shippingTitle}>Shipping</p> 
                    <div>
                     <input type="radio" name="shipping-btn" id="soon" />
                     <label htmlFor="soon">Home/Office Delivery</label>
                    </div>
                    <div>
                    <input type="radio" name="shipping-btn" id="date" />
                    <label htmlFor="date">Self Pick-up(within Nairobi)</label>
                    </div>
                </div>
                <div className={styles.cartCalendar} style={{height: calendar ? "auto" : "70px"}}>
                    <div className={styles.cartCalendarInset} onClick={handleCalendar}>
                    <p>Click Here to pick specific delivery/pick-up date! IF ANY!</p>
                    <MdCalendarMonth style={{color: "black", width:'32px', height: '32px'}}/>
                    </div>
                    <Calendar />
                </div>
                <button type="submit" className={styles.cartCheckout}>PROCEED TO CHECKOUT</button>
                </div>

            </div>

        </div>

        </div>
        </>
    )
}

export default Cart;