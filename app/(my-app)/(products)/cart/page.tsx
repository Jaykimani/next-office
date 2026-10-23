"use client"

import styles from './cart.module.css'
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { MdOutlineCancel } from "react-icons/md";
import { MdCalendarMonth } from "react-icons/md";
import Calendar from '@/components/calendar/calendar';
import { useRouter } from 'next/navigation';
import { useCartStore } from '@/app/store';
import { MdCancel } from "react-icons/md";
import { MdCheckBox } from "react-icons/md";


function Cart() {
    const [calendar, setCalendar] = useState(false);
    const [openRestock, setOpenRestock] = useState(false);
    const [shipping, setShipping] = useState('')
    const [shippingDate, setShippingDate] = useState('');
    const [shippingFee, setShippingFee] = useState(0);
    const {user, count, items, subtotal, checkout, removeItem, editSubtotal, deleteAll, updateAddQuantityTotal, updateMinusQuantityTotal, addCheckoutInformation} = useCartStore((state)=> state);
    const specialInstructions = useRef<HTMLTextAreaElement>(null);
    const [caution, setCaution] = useState('');
    const [weekly, setWeekly] = useState(true);
    const [biweekly, setBiweekly] = useState(false);
    const [monthly, setMonthly] = useState(false);
    const [bimonthly, setBimonthly] = useState(false);
    const [frequency, setFrequency] = useState("");
    const [selectedDate, setSelectedDate] = useState<string[]>([]);
    const [isChecked, setIsChecked] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState({message: "", success: false})
    const router = useRouter();

    
    useEffect(()=>{
        if (shipping === 'Within Nairobi') {
            setShippingFee(300)
        }else if (shipping === 'Outside Nairobi') {
            setShippingFee(700)
        }else if (shipping === 'Self pick-up') {
            setShippingFee(0);
        }
      
    }, [shipping]);

    useEffect(() => {

        if (weekly) {
            setFrequency("weekly");
        } else if (biweekly) {
            setFrequency("twice-weekly")
        } else if (monthly) {
            setFrequency("monthly")
        } else if (bimonthly) {
            setFrequency("twice-monthly")
        }

    }, [weekly, biweekly, monthly, bimonthly])
    

    const handleCalendar = ()=>{
        setCalendar(!calendar)
    }

    const handleDeleteItem = (e: any) =>{
        let itemId = Number(e.currentTarget.id);
    
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
        if(items.length === 0){
         setCaution('Your Cart is Empty!');
        }else if(shipping == ''){
            setCaution('Please select delivery location')
        }else{
          
            let total = subtotal + shippingFee;
        
        let newItemArr = items.map((item)=>{
            let newObj = {
                id: item.id,
                name: item.name,
                category: item.category,
                count: item.count,
                total: item.total,
                variant: item.variation
            }
         return newObj
        });

        const data = {
            checkoutItems : newItemArr,
            subtotal : subtotal,
            instructions : specialInstructions.current && specialInstructions.current.value,
            shipping: shipping,
            shippingDate: checkout.shippingDate === '' ? shippingDate : checkout.shippingDate,
            shippingFee: shippingFee,
            total: total
        }

        try {
            addCheckoutInformation(data);
            router.push('/checkout');
        } catch (error) {
            console.log('cart data could not be added:', error);
            
        }
        }
        
       
    }

      const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

      const dates = [
    '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th',
    '11th', '12th', '13th', '14th', '15th', '16th', '17th', '18th', '19th', '20th',
    '21st', '22nd', '23rd', '24th', '25th', '26th', '27th', '28th', '29th', '30th'
  ];

  const handleDayClick = (dateText: string) => {
    console.log(dateText);
    
        if (!selectedDate.includes(dateText)) {


    if (selectedDate.length === 1) {
      
        selectedDate.pop();
        setSelectedDate([...selectedDate, dateText]);
    } else if(selectedDate.length !== 1) {
            setSelectedDate([...selectedDate, dateText]); // Store it in state if you need to use it elsewhere

    }
      
            
        }else{
         var newA = selectedDate.filter(text => text !== dateText);
            setSelectedDate([...newA])
        }
    
   
  };

const handleDaysClick =  (dateText: string) => {
if (!selectedDate.includes(dateText)) {


    if (selectedDate.length === 2) {
      
        selectedDate.pop();
        setSelectedDate([...selectedDate, dateText]);
    } else if(selectedDate.length !== 2) {
            setSelectedDate([...selectedDate, dateText]); // Store it in state if you need to use it elsewhere

    }
      
            
        }else{
         var newA = selectedDate.filter(text => text !== dateText);
            setSelectedDate([...newA])
        }
  }

    const handleDateClick = (dateText: string) => {
        if (!selectedDate.includes(dateText)) {


    if (selectedDate.length === 1) {
      
        selectedDate.pop();
        setSelectedDate([...selectedDate, dateText]);
    } else if(selectedDate.length !== 1) {
            setSelectedDate([...selectedDate, dateText]); // Store it in state if you need to use it elsewhere

    }
      
            
        }else{
         var newA = selectedDate.filter(text => text !== dateText);
            setSelectedDate([...newA])
        }
    
   
  };

  const handleDatesClick = (dateText: string) => {
if (!selectedDate.includes(dateText)) {


    if (selectedDate.length === 2) {
      
        selectedDate.pop();
        setSelectedDate([...selectedDate, dateText]);
    } else if(selectedDate.length !== 2) {
            setSelectedDate([...selectedDate, dateText]); // Store it in state if you need to use it elsewhere

    }
      
            
        }else{
         var newA = selectedDate.filter(text => text !== dateText);
            setSelectedDate([...newA])
        }
  }

  const handleChange = (event) => {
    const checkedStatus = event.target.checked;
    setIsChecked(checkedStatus);
  };

    const handleRestockPlan = async()=>{
        setSubmitting(true);
         let total = subtotal + shippingFee;
        
        let newItemArr = items.map((item)=>{
            let newObj = {
                id: item.id,
                name: item.name,
                category: item.category,
                variant: item.variation,
                price: item.price,
                quantity: item.count,
                subtotal: item.total,
                
            }
         return newObj
        });

        
        
       const response = await fetch('/api/create-restock-plan', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
     frequency,
     deliveryTimeline: selectedDate,
     contactMeBeforeDelivery: isChecked,
     items: newItemArr,
     total: String(total),
  }),
})

const result = await response.json();
 
if (result.success) {
 setSubmitting(false);
 setSubmitMessage({message: result.message, success: true})

 setTimeout(() => {
    setOpenRestock(false);
 }, 3000);

} else {
 setSubmitting(false);
 setSubmitMessage({message: result.message, success: false})
  
}

        
    }


    return (
        <>
        <div id={styles.cartMain}>
            <div className={styles.restockplan} style={{display: openRestock ? "block" : "none"}}>
            <div className={styles.restockHeader}>
                <h2>Create Your Restock Schedule</h2>
                <MdCancel style={{width: "30px", height: "30px"}} onClick={()=> setOpenRestock(false)}/>
            </div>
             <div className={styles.restockInset}>
              <div className={styles.restockCategories}>
                <div style={{backgroundColor: weekly ? "#ffe100" : "white"}} onClick={()=>{setWeekly(true); setBiweekly(false); setMonthly(false); setBimonthly(false); setSelectedDate([])}}>
                    <p>WEEKLY</p>
                    <p>(Once per week)</p>
                </div>
                <div style={{backgroundColor: biweekly ? "#ffe100" : "white"}} onClick={()=>{setWeekly(false); setBiweekly(true); setMonthly(false); setBimonthly(false); setSelectedDate([])}}>
                    <p>TWICE-WEEKLY</p>
                    <p>(Twice per week)</p>
                </div>
                <div style={{backgroundColor: monthly ? "#ffe100" : "white"}} onClick={()=>{setWeekly(false); setBiweekly(false); setMonthly(true); setBimonthly(false); setSelectedDate([])}}>
                    <p>MONTHLY</p>
                    <p>(Once per month)</p>
                </div>
                <div style={{backgroundColor: bimonthly ? "#ffe100" : "white"}} onClick={()=>{setWeekly(false); setBiweekly(false); setMonthly(false); setBimonthly(true); setSelectedDate([])}}>
                    <p>TWICE-MONTHLY</p>
                    <p>(Twice per month)</p>
                </div>
              </div>
              <div className={styles.restockContent}>
                <div className={styles.restockContentInset} style={{display: weekly ? "block" : "none"}}>
                    <h4>Please select ONE day of the week to have your supplies delivered!</h4>
                    {days.map((day) => {
                        return (
                           <div className={styles.dayDiv} key={day} onClick={() => handleDayClick(day)}>
                            <MdCheckBox style={{color: selectedDate.includes(day) ? "#1500ff" : '#e1e1e1', width: "25px", height: "25px"}} />
                 <p >{day}</p>
                </div>
                        )
                    })}
                  
                </div>
                <div className={styles.restockContentInset} style={{display: biweekly ? "block" : "none"}}>
                 <h4>Please select TWO days of the week to have your supplies delivered!</h4>
                  
               {days.map((day) => {
                        return (
                           <div className={styles.dayDiv} key={day} onClick={() => handleDaysClick(day)}>
                            <MdCheckBox style={{color: selectedDate.includes(day) ? "#1500ff" : '#e1e1e1', width: "25px", height: "25px"}} />
                 <p >{day}</p>
                </div>
                        )
                    })}
               
                </div>
                <div className={styles.restockContentInset} style={{display: monthly ? "block" : "none"}}>
                <h4>Please Select ONE date of the month to have your supplies delivered!</h4>
                <div className={styles.dates}>
                 {dates.map((date) => (
          <p 
                 key={date} 
                 onClick={() => handleDateClick(date)}
            // Optional: Add a class if this specific date is selected
                 className={selectedDate.includes(date) ? styles.activeDate : ''} 
                 style={{ cursor: 'pointer' }} // Makes it feel clickable
                   >
                 {date}
                 </p>
                  ))}
                </div>
                
                </div>
                  <div className={styles.restockContentInset} style={{display: bimonthly ? "block" : "none"}}>
                <h4>Please Select TWO dates of the month to have your supplies delivered!</h4>
                <div className={styles.dates} >
                 {dates.map((date) => (
          <p 
                 key={date} 
                 onClick={() => handleDatesClick(date)}
            // Optional: Add a class if this specific date is selected
                 className={selectedDate.includes(date) ? styles.activeDate : ''} 
                 style={{ cursor: 'pointer' }} // Makes it feel clickable
                   >
                 {date}
                 </p>
                  ))}
                 
                </div>
                
                </div>
              </div>
             </div>
             <div className={styles.notice}>
              <p><span style={{fontWeight: "bold"}}>Please note:</span> For the <span style={{textDecoration: "underline"}}>MONTHLY</span> and <span style={{textDecoration: "underline"}}>BI-MONTHLY</span> restock plans, if the date selected happens to correspond to a WEEKEND or a PUBLIC HOLIDAY, the deliveries will be moved to the next immediate business day.</p>
             </div>
             <div className={styles.restockConfirm}>
                <label>
                <input type="checkbox" name="weekdays" checked={isChecked}
          onChange={handleChange} style={{width: '15px', height: '15px', marginRight: "20px"}}/>
                 <span>I would like to be contacted each time to confirm delivery.</span>
                </label>
             </div>
              <p className={styles.message} style={{display: submitMessage.message !== "" ? "block" : "none", backgroundColor: submitMessage.success ? "green" : "red"}}>{submitMessage.message}</p>
             <div className={styles.restockSubmit} onClick={handleRestockPlan}>
              {submitting ? <p>Submitting...</p> : <p>Submit Restock Plan</p>}
             </div>
            </div>
        <div className={styles.cartInset}>
            {count == 1 ? <h2>Your Cart has 1 item</h2> : count > 1 ? <h2>Your Cart has {count} items</h2> : <h2>Your Cart is empty</h2>}
            <div className={styles.cartDiv}>
                <div className={styles.cartItems}>
                    {items?.map((item)=>{

                       return(
                    <div key={items.indexOf(item)} className={styles.cartItem}>
                    <Image src={item.image} alt="" width={200} height={200}/>
                    <div className={styles.cartInfo}>
                    <div className={styles.cartInfoPhone}>
                    <div className={styles.cartNameVar}>
                     {item.name?.length > 17 ? <h4>{item.name.substring(0, 13)}...(@{item.price}/=)</h4> : <h4>{item.name} (@{item.price}/=)</h4>}
                     <h5>{item.variation}</h5>
                    </div>
                    <p className={styles.cartPrice}>Ksh {item.total}/=</p>
                     <div className={styles.cartCounter}>
                      <span className={styles.first} onClick={() =>handleCartMinus(item.name)}><FaMinus fontSize='small'/></span>
                      <span>{item.count}</span>
                      <span className={styles.third} onClick={()=>handleCartAdd(item.name)}><FaPlus fontSize='small'/></span>
                     </div>
                    </div>  
                    </div>
                    <MdOutlineCancel id={String(item.id)} style={{color: 'red', width: '35px', height: '35px', marginLeft: '20px'}} onClick={handleDeleteItem}/>
                   </div>
                       )

                    })}
                
                </div>
                <div className={styles.cartPayment}>
                <div className={styles.restockButton} onClick={()=> setOpenRestock(true)} style={{display: user.id !== '' ? "grid" : "none", backgroundColor: submitMessage.success ? "#00ff00" : "#ffe100"}}>
                 {submitMessage.message === '' && !submitMessage.success ? <p>Add these items to a restock plan?</p> : <p>These items have been added to a restock plan!</p>}   
                </div>
                <div className={styles.subtotal}>
                <p className={styles.sub}>SUBTOTAL:</p> 
                <p className={styles.total}>{subtotal.toLocaleString('en-US')}Ksh</p> 
                </div>  
                <div className={styles.orderInstructions}>
                 <p>Add Special Order Instructions (Optional)</p>
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
                </div>
                <div className={styles.cartCalendar} style={{height: calendar ? "auto" : "70px"}}>
                    <div className={styles.cartCalendarInset} onClick={handleCalendar}>
                    <p>Click Here to pick specific delivery/pick-up date! IF ANY!</p>
                    <MdCalendarMonth style={{color: "black", width:'40px', height: '40px'}}/>
                    </div>
                    <Calendar />
                </div>
                {caution && <div className={styles.caution}>
                   <p>{caution}</p>
                </div>}
                
                
                <button type="submit" className={styles.cartCheckout} onClick={handleCheckoutInfo}>PROCEED TO CHECKOUT</button>
        
                <button type="submit" className={styles.cartCancel} onClick={handleCancelOrder}>CANCEL ORDER</button>
                </div>

            </div>

        </div>

        </div>
        </>
    )
}

export default Cart;