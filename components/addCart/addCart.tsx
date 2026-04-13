"use client";

import styles from './addCart.module.css'
import { useEffect, useState } from 'react';
import { useCartStore } from '@/app/store';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import type { Product } from '@/payload-types';


interface addcartProps{
 product?: Product | null
}


const AddCart = ({product}: addcartProps) => {
     const [price, setPrice] = useState(product?.price);
     const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0])
     const [cartSuccess, setCartSuccess] = useState(false);
     let [counter , setCounter] = useState(1);
     const {addItem, editSubtotal} = useCartStore((state) => state)

   useEffect(()=>{
    if (product?.variants && product?.variants?.length !== 0) {
      setPrice(product?.variants[0].price)
    } else {
      setPrice(product?.price)
    }
    
   }, [])


   const handleAddCounter = ()=>{
      setCounter(counter+=1);
    }
    const handleMinusCounter = ()=>{
      setCounter(counter-=1);
    }
    
    
     const handleAddToCart = ()=>{
         if (typeof product?.images[0] === 'object' && product.images[0]?.url && price && product.category) {
          const cartObject = {
            id: product?.id,
            name: product?.name,
            category: product?.category,
            price: price,
            total: counter * price,
            image: product?.images[0].url,
            count: counter,
            variation: selectedVariant?.option || ''
          }
          
          try {
            console.log('yeeey');
            
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
         <p className={styles.infoCost}>KSH {price?.toLocaleString('en-US')}.00/=</p>
          {product?.variants && product?.variants?.length !== 0 && (
            <div className={styles.variationsDiv}>
            <h4>{product?.variation} variations</h4>
            <div className={styles.variants}>
              {product?.variants.map((item)=>{
                return (
                  <div key={item.id} className={styles.variant} onClick={() => {setSelectedVariant(item); setPrice(item.price)}}
                  style={{backgroundColor: selectedVariant?.option === item.option ? "white" : "black", color: selectedVariant?.option === item.option ? "black" : "white"}}>
                   <p>{item.option}</p>
                  </div>
                )
              })}
            </div>
          </div>
          )}
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