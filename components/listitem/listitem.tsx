import styles from './listitem.module.css'
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdAdd } from "react-icons/md";
import { FaMinus } from "react-icons/fa6";
import Image from 'next/image';
import { Media } from '@/payload-types';
import type { Product } from '@/payload-types';
import Link from 'next/link';
import { useState } from 'react';
import { useCartStore } from '@/app/store';



interface ProductsProps {
 iteminfo : Product;
}

function mediaIsObject(media: number | Media) : media is Media {
  return typeof media !== 'number'
  
}


const ListItem = ({ iteminfo }: ProductsProps) => {

    const [price, setPrice] = useState(iteminfo?.price);
    const [selectedVariant, setSelectedVariant] = useState(iteminfo?.variants?.[0]);
    let [counter, setCounter] = useState(1);
    const {addItem, editSubtotal} = useCartStore((state) => state)
     const [cartSuccess, setCartSuccess] = useState(false);

  
      if(!mediaIsObject(iteminfo.images[0]))  return null
      console.log(iteminfo.images[0].url);
      
       const handleAddToCart = ()=>{
         if (typeof iteminfo?.images[0] === 'object' && iteminfo.images[0]?.url && price && iteminfo.category) {
          const cartObject = {
            id: iteminfo?.id,
            name: iteminfo?.name,
            category: iteminfo?.category,
            price: price,
            total: counter * price,
            image: iteminfo?.images[0].url,
            count: counter,
            variation: selectedVariant?.option || ''
          }
          
          try {
            
             addItem(cartObject);
             editSubtotal();
             setCartSuccess(true);
    
             setTimeout(() => {
              setCartSuccess(false);
             }, 5000);
          } catch (error) {
             console.log(error);
             
          }
           
         }
         
        }

         const message = encodeURIComponent(
    (() => {
      if (iteminfo) {
        
       const imageLine = iteminfo.images?.[0] && typeof iteminfo.images[0] !== 'number'
       ? `\nImage: ${iteminfo.images[0].url}`
      : ''

       return `Hi! I'm interested in this product:\n\n${iteminfo.name}\nPrice: KES ${iteminfo.price}${imageLine}\nLink: https://officeflow.co.ke/shop/${iteminfo.category}/${iteminfo.subcategory}/${iteminfo.id}/${iteminfo.slug}`      }

    //   if (cartItems.length) {
    //     return `Hi! I want to order the following items:\n\n${cartItems
    //       .map((item) => `${item.name} x${item.qty}`)
    //       .join('\n')}\n\nLink: https://yourstore.com${pathname}`
    //   }

      return 'Hi! I need help with an order.'
    })()
  )

  return (<>
  <div className={styles.listItem}>
                    <Link href={`/shop/${iteminfo.category}/${iteminfo.subcategory}/${iteminfo.id}/${iteminfo.slug}`} style={{textDecoration: 'none'}}>
                    <div className={styles.itemImg}>
                      {iteminfo.images[0]?.url && (
                      <Image className={styles.itemImage} src={iteminfo.images[0].url} alt="" width={200} height={200} />
                      )}
                    </div>
                    </Link>
                    <div className={styles.itemInfo}>
                      <h4>{iteminfo.name}</h4>
                      <h6><span>KSh</span> {price.toLocaleString('en-US')}/=</h6>
                      <div className={styles.itemInfoCounter}>
                       <div onClick={() => setCounter(counter-=1)}><FaMinus style={{width: "20px", color: "white"}}/></div>
                       <div>{counter}</div>
                       <div onClick={() => setCounter(counter+=1)}><MdAdd style={{width: "25px", height: "25px", color: "white"}}/></div>
                      </div>
                      <div className={styles.variants}>
                       {iteminfo?.variants?.map((item)=>{
                        return (
                          <div key={item.id} className={styles.variant} onClick={() => {setSelectedVariant(item); setPrice(item.price)}}
                           style={{backgroundColor: selectedVariant?.option === item.option ? "white" : "black", color: selectedVariant?.option === item.option ? "black" : "white"}}>
                            <p>{item.option}</p>
                         </div>
                         )
                        })}
                      </div>
                      <div className={styles.itemBtns}>
                        <div className={styles.itemCartDiv} onClick={handleAddToCart}>
                             {cartSuccess ? <p>ITEM ADDED!</p> : <div className={styles.itemCartDivInset}>
                           <MdOutlineAddShoppingCart className={styles.itemCartImg2}/>
                          <p>Add to Cart</p>
                          </div>}
                          
                        </div> 
                        <div className={styles.itemWhatsappDiv}>
                         <a
      href={`https://wa.me/254704610605?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappCta}
      title="Chat with us on WhatsApp"
    >
                          <IoLogoWhatsapp className={styles.itemWhatsappImg}/>
                          </a>
                        </div>
                      </div>
                      
                    </div>
                </div>

                <div className={styles.listItem2}>
                    <Link href={`/shop/${iteminfo.category}/${iteminfo.subcategory}/${iteminfo.id}/${iteminfo.slug}`} style={{textDecoration: 'none'}}>
                    <div className={styles.itemImg2}>
                      {iteminfo.images[0]?.url && (
                      <Image className={styles.itemImage2} src={iteminfo.images[0].url} alt="" width={200} height={200} />
                      )}
                    </div>
                    </Link>
                    <div className={styles.itemInfo2}>
                      <h4>{iteminfo.name}</h4>
                      <h6><span>KSh</span> {price.toLocaleString('en-US')}/=</h6>
                      <div className={styles.itemInfoCounter2}>
                       <div onClick={() => setCounter(counter-=1)} style={{backgroundColor: "#282828"}}><FaMinus style={{width: "20px", color: "white"}}/></div>
                       <div>{counter}</div>
                       <div onClick={() => setCounter(counter+=1)} style={{backgroundColor: "#282828"}}><MdAdd style={{width: "25px", height: "25px", color: "white"}}/></div>
                      </div>
                      <div className={styles.variants2}>
                       {iteminfo?.variants?.map((item)=>{
                        return (
                          <div key={item.id} className={styles.variant2} onClick={() => {setSelectedVariant(item); setPrice(item.price)}}
                           style={{backgroundColor: selectedVariant?.option === item.option ? "white" : "black", color: selectedVariant?.option === item.option ? "black" : "white"}}>
                            <p>{item.option}</p>
                         </div>
                         )
                        })}
                      </div>
                      <div className={styles.itemBtns2}>
                        <div className={styles.itemCartDiv2} onClick={handleAddToCart}>
                            {cartSuccess ? <p>ITEM ADDED!</p> : <div className={styles.itemCartDiv2Inset}>
                           <MdOutlineAddShoppingCart className={styles.itemCartImg2}/>
                          <p>Add to Cart</p>
                          </div>}
                          
                          
                        </div> 
                        <div className={styles.itemWhatsappDiv2}>
                             <a
      href={`https://wa.me/254704610605?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappCta}
      title="Chat with us on WhatsApp"
      >
                          <IoLogoWhatsapp className={styles.itemWhatsappImg2}/>
                          </a>
                        </div>
                      </div>
                      
                    </div>
                </div>
        </>
         
  )
}

export default ListItem