"use client";

import styles from './addCart.module.css'
import { useState } from 'react';
import { useCartStore } from '@/app/store';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import type { Product } from '@/payload-types';


interface addcartProps{
 product?: Product | null
}


const AddCart = ({product}: addcartProps) => {
     const [cartSuccess, setCartSuccess] = useState(false);
     let [counter , setCounter] = useState(1);
     const {addItem, editSubtotal} = useCartStore((state) => state)




   const handleAddCounter = ()=>{
      setCounter(counter+=1);
    }
    const handleMinusCounter = ()=>{
      setCounter(counter-=1);
    }
    
    
     const handleAddToCart = ()=>{
         if (typeof product?.images[0] === 'object' && product.images[0]?.url) {
          const cartObject = {
            id: product?.id,
            name: product?.name,
            price: product?.price,
            total: product?.price && counter * product?.price,
            image: product?.images[0].url,
            count: counter,
          }
          
          try {
             addItem(cartObject);
             editSubtotal();
             setCartSuccess(true);
    
             setTimeout(() => {
              setCartSuccess(false);
             }, 3000);
          } catch (error) {
             console.log(error);
             
          }
           
         }
         
        }
  return (
    <>
    <div className={styles.infoCounter}>
            <span onClick={handleMinusCounter}><FaMinus style={{color: "white"}} /></span>
            <span>{counter}</span>
            <span onClick={handleAddCounter}><FaPlus style={{color: "white"}} /></span>
          </div>
          <div className={styles.infoCart} style={{backgroundColor: cartSuccess ? "black" : "#ffe100", color: cartSuccess ? "#ffe100" : "black"}} onClick={handleAddToCart}>
           {cartSuccess ? <p>ITEM ADDED!</p> : <p>ADD TO CART</p>}
          </div>
    </>
  )
}

export default AddCart