"use client";

import styles from './list.module.css';
import Image from 'next/image';
import { useState } from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdClose } from "react-icons/md";
import {Categories, Subcategory, shopVibe, shopCategory, shopPopularity, shopPrice} from '@/categories';
import type { Product } from '@/payload-types';
import { Media } from '@/payload-types';
import Link from 'next/link';

interface ProductsProps {
productsArr : Product[];
}

function mediaIsObject(media: number | Media) : media is Media {
  return typeof media !== 'number'
  
}

function List({ productsArr }: ProductsProps) {
    const [shopSort, setShopsort] = useState(false);
    const [categSort, setCategSort] = useState(false);

    const handleSort = ()=>{
        setShopsort(!shopSort);
        setCategSort(false);
    }

    const handleCategSort = ()=>{
      setCategSort(!categSort);
      setShopsort(false);
    }

    return(
        <>
        <div id={styles.shopList}>
            <div className={styles.shopListHeader}>
                <div className={styles.listCateg} onClick={handleCategSort}>
                 <p>Browse Categories</p>
                 <MdKeyboardArrowDown style={{transform: categSort ? 'rotate(180deg)' : 'rotate(0deg)', marginLeft: '20px'}}/>
                </div>
                <div className={styles.listCateg} onClick={handleSort}>
                 <p>Shop by:</p>
                 <MdKeyboardArrowDown style={{transform: categSort ? 'rotate(180deg)' : 'rotate(0deg)', marginLeft: '20px'}}/>
                </div>
            </div>
            <div className={styles.shopListInset}>
             <div className={styles.shopCateg}>
              
              <div className={styles.categSection}>
               <h4>Shop by Category</h4>
               {shopCategory.map((link)=>{
                return (
               <Link key={link.name}  href={`/shop/category/${link.url}`} style={{textDecoration: 'none'}}>
               <div className={styles.categLink}>
               <MdKeyboardArrowRight style={{color: '#ffe100', marginRight: '10px'}}/>
               <p>{link.name}</p>
               </div>
               </Link>   
               
                )
               })}
               
              </div>
              <div className={styles.categSection}>
               <h4>Shop by Vibe</h4>
               {shopVibe.map((link)=>{
                return (
                <Link key={link.name} href={`/shop/vibe/${link.url}`} style={{textDecoration: 'none'}}>
               <div className={styles.categLink}>
               <MdKeyboardArrowRight style={{color: '#ffe100', marginRight: '10px'}}/>
               <p>{link.name}</p>
               </div>
               </Link>
                )
               })}
               
              </div>
              <div className={styles.categSection}>
               <h4>Shop by Popularity</h4>
               {shopPopularity.map((link)=>{
                return (
               <div key={link} className={styles.categLink}>
               <MdKeyboardArrowRight style={{color: '#ffe100', marginRight: '10px'}}/>
               <p>{link}</p>
               </div>
                )
               })}
               
              </div>
              <div className={styles.categSection}>
               <h4>Shop by Price</h4>
               {shopPrice.map((link)=>{
                return (
               <div key={link} className={styles.categLink}>
               <MdKeyboardArrowRight style={{color: '#ffe100', marginRight: '10px'}}/>
               <p>{link}</p>
               </div>
                )
               })}
               
              </div>
              
             </div>
             <div className={styles.shopCateg2} style={{display: categSort ? 'block' : 'none'}}>
              <div className={styles.shopCateg2Inset}>
              <div className={styles.shopCateg2Close} >
              <MdClose style={{color: 'white', width: '35px', height: '35px'}} onClick={()=>{setCategSort(false)}}/>
              <p>close</p>
              </div>
             {Categories?.map((item)=>{
                return (
                <div key={item.id} className={styles.categSection2}>
               <h4>{item.title}</h4>
               {item.links?.map((link)=>{
                
                return (
               <Link key={link.id} href={`/shop/subcategory/${link.name}`} style={{textDecoration: "none", color: "white"}}>
               <div className={styles.categLink2}>
               <MdKeyboardArrowRight style={{color: '#ffe100', marginRight: '10px'}}/>
               <p style={{color: 'white'}}>{link.id}</p>
               </div>
               </Link>
               
                )
               })}
               
              </div>
                )
              })}
              </div>
             </div>
             <div className={styles.shopCateg2} style={{display: shopSort ? 'block' : 'none'}}>
              <div className={styles.shopCateg2Inset}>
              <div className={styles.shopCateg2Close} >
              <MdClose style={{color: 'white', width: '35px', height: '35px'}} onClick={()=>{setShopsort(false)}}/>
              <p>close</p>
              </div>
               <div className={styles.categSection2}>
               <h4>Shop by Vibe</h4>
               {shopVibe.map((link)=>{
            
                return (
               <Link key={link.name} href={`/shop/vibe/${link.url}`} style={{textDecoration: 'none'}}>
                <div className={styles.categLink2}>
               <MdKeyboardArrowRight style={{color: '#ffe100', marginRight: '10px'}}/>
               <p style={{color: 'white'}}>{link.name}</p>
               </div>
               </Link>
              
                )
               })}
               
              </div>
               <div className={styles.categSection2}>
               <h4>Shop by Popularity</h4>
               {shopPopularity.map((link)=>{
            
                return (
               <div key={link} className={styles.categLink2}>
               <MdKeyboardArrowRight style={{color: '#ffe100', marginRight: '10px'}}/>
               <p style={{color: 'white'}}>{link}</p>
               </div>
               
                )
               })}
               
              </div>
               <div className={styles.categSection2}>
               <h4>Shop by Price </h4>
               {shopPrice.map((link)=>{
            
                return (
               <div key={link} className={styles.categLink2}>
               <MdKeyboardArrowRight style={{color: '#ffe100', marginRight: '10px'}}/>
               <p style={{color: 'white'}}>{link}</p>
               </div>
               
                )
               })}
               
              </div>
             
              </div>
             </div>
             <div className={styles.shopListItem}>
              <div className={styles.shopListItemInset}>
            {productsArr?.map((item)=>{
                if(!mediaIsObject(item.images[0]))  return null
               
                  
               return (
                    <Link key={item.id} href={`/shop/${item.category}/${item.id}/${item.slug}`} style={{textDecoration: 'none'}}>
                     <div className={styles.listItem}>
                    <div className={styles.itemImg}>
                      {item.images[0]?.url && (
                      <Image className={styles.itemImage} src={`${process.env.NEXT_PUBLIC_SERVER_URL}${item.images[0].url}`} alt="" width={200} height={200} />
                      )}
                    </div>
                    <div className={styles.itemInfo}>
                      <h4>{item.name?.length > 30 ? item.name.substring(0, 67) + '...' : item.name}</h4>
                      <p><span>KSh</span> {item.price.toLocaleString('en-US')}/=</p>
                      <button>View Item</button> 
                    </div>
                </div>
                    </Link>
                   
              )})}
               
              </div>
            
             </div>
              
            </div>
            
        </div>
        </>
    )
}

export default List;