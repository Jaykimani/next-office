"use client"

import styles from './cart.module.css'
import Image from 'next/image';
import { useRef, useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { MdOutlineCancel } from "react-icons/md";
import { MdCalendarMonth } from "react-icons/md";
import Calendar from '@/components/calendar/calendar';
import Link from 'next/link';
import { useCartStore } from '@/app/store';
import { log } from 'console';


function Cart() {
    const [calendar, setCalendar] = useState(false);
    const [shipping, setShipping] = useState('')
    const [shippingDate, setShippingDate] = useState('');
    const {count, items, subtotal, checkout, removeItem, editSubtotal, deleteAll, updateAddQuantityTotal, updateMinusQuantityTotal, addCheckoutInformation} = useCartStore((state)=> state);
    const specialInstructions = useRef<HTMLTextAreaElement>(null);


    const handleCalendar = ()=>{
        setCalendar(!calendar)
    }

    const handleDeleteItem = (e: any) =>{
        let itemId = e.currentTarget.id;
    
        let newCart = items?.filter((item)=>{
          return item.id !== itemId
        });
                
        removeItem(newCart);
        editSubtotal();
        
    }

    const handleCancelOrder = ()=>{
         deleteAll();
    }

    const handleCartMinus = (name)=>{
         updateMinusQuantityTotal(name);
         editSubtotal();
    }
     const handleCartAdd = (name)=>{
         updateAddQuantityTotal(name);
        editSubtotal();
    }

    const handleCheckoutInfo = ()=>{
        let newItemArr = items.map((item)=>{
            let newObj = {
                name: item.name,
                count: item.count,
                total: item.total
            }
         return newObj
        });

        const data = {
            checkoutItems : newItemArr,
            subtotal : subtotal,
            instructions : specialInstructions.current && specialInstructions.current.value,
            shipping: shipping,
            shippingDate: checkout.shippingDate === '' ? shippingDate : checkout.shippingDate
        }

        try {
            addCheckoutInformation(data);
        } catch (error) {
            console.log('cart data could not be added:', error);
            
        }
           
        
    }




    return (
        <>
        <div id={styles.cartMain}>
        <div className={styles.cartInset}>
            {count == 1 ? <h2>Your Cart has 1 item</h2> : count > 1 ? <h2>Your Cart has {count} items</h2> : <h2>Your Cart is empty</h2>}
            <div className={styles.cartDiv}>
                <div className={styles.cartItems}>
                    {items?.map((item)=>{

                       return(
                    <div key={item.id} className={styles.cartItem}>
                    <Image src={item.image} alt="" width={200} height={200}/>
                    <div className={styles.cartInfo}>
                    <div className={styles.cartInfoPhone}>
                     {item.name?.length > 17 ? <h4>{item.name.substring(0, 15)}...<span>(@{item.price}/=)</span></h4> : <h4>{item.name} <span>(@{item.price}/=)</span></h4>}
                    <p className={styles.cartPrice}>Ksh {item.total}/=</p>
                     <div className={styles.cartCounter}>
                      <span className={styles.first} onClick={() =>handleCartMinus(item.name)}><FaMinus fontSize='small'/></span>
                      <span>{item.count}</span>
                      <span className={styles.third} onClick={()=>handleCartAdd(item.name)}><FaPlus fontSize='small'/></span>
                     </div>
                    </div>  
                    </div>
                    <MdOutlineCancel id={item.id} style={{color: 'red', width: '35px', height: '35px', marginLeft: '30px'}} onClick={handleDeleteItem}/>
                   </div>
                       )

                    })}
                
                </div>
                <div className={styles.cartPayment}>
                <div className={styles.subtotal}>
                <p className={styles.sub}>SUBTOTAL:</p> 
                <p className={styles.total}>{subtotal.toLocaleString('en-US')}Ksh</p> 
                </div>  
                <div className={styles.orderInstructions}>
                 <p>Add Special Order Instructions</p>
                 <textarea ref={specialInstructions} name="" id="" rows={5}></textarea>
                </div>
                <div className={styles.cartShipping}>
                    <p className={styles.shippingTitle}>Delivery</p> 
                    <div>
                     <input type="radio" name="shipping-btn" id="nairobi" onChange={()=> {setShipping('Within Nairobi'); setShippingDate('same/next day')}}/>
                     <label htmlFor="nairobi">Within Nairobi</label>
                    </div>
                     <div>
                     <input type="radio" name="shipping-btn" id="outside" onChange={()=> {setShipping('Outside Nairobi'); setShippingDate('2 - 4 days')}}/>
                     <label htmlFor="outside">Outside Nairobi</label>
                    </div>
                    <div>
                    <input type="radio" name="shipping-btn" id="self"  onChange={()=> {setShipping('Self pick-up'); setShippingDate('same/next day')}}/>
                    <label htmlFor="self">Self Pick-up</label>
                    </div>
                </div>
                <div className={styles.cartCalendar} style={{height: calendar ? "auto" : "70px"}}>
                    <div className={styles.cartCalendarInset} onClick={handleCalendar}>
                    <p>Click Here to pick specific delivery/pick-up date! IF ANY!</p>
                    <MdCalendarMonth style={{color: "black", width:'32px', height: '32px'}}/>
                    </div>
                    <Calendar />
                </div>
                <Link href={'/checkout'} style={{textDecoration: 'none'}}>
                <button type="submit" className={styles.cartCheckout} onClick={handleCheckoutInfo}>PROCEED TO CHECKOUT</button>
                </Link>
                <button type="submit" className={styles.cartCancel} onClick={handleCancelOrder}>CANCEL ORDER</button>
                </div>

            </div>

        </div>

        </div>
        </>
    )
}

export default Cart;