"use client";

import styles from './list.module.css';
import { MdKeyboardArrowRight } from "react-icons/md";
import {Categories, shopPopularity, shopPrice} from '@/categories';
import type { Product } from '@/payload-types';
import { Media } from '@/payload-types';
import Link from 'next/link';
import ListItem from '../listitem/listitem';
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 4,
    1400: 4,
    1025: 4,
    800: 3,
    600: 2
   
};

interface ProductsProps {
productsArr : Product[];
}

function mediaIsObject(media: number | Media) : media is Media {
  return typeof media !== 'number'
  
}

function List({ productsArr }: ProductsProps) {
 

    return(
        <>
        <div id={styles.shopList}>
         
            <div className={styles.shopListInset}>
             <div className={styles.shopCateg}>
              <div className={styles.categSection}>
               {Categories?.map((item)=>{
                return (
               <div key={item.title.id} className={styles.categoriesDiv}>
               <Link href={`${item.title.url}`} style={{textDecoration: "none", color: "#ffe100"}}>
               <h4>{item.title.id}</h4>
               </Link>
               
               {item.links?.map((link)=>{
                
                return (
               <Link key={link.id} href={`${link.url}`} style={{textDecoration: "none", color: "white"}}>
               <div className={styles.categLink}>
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
             
             <div className={styles.shopListItem}>
              <div className={styles.shopListItemInset}>
               <Masonry
    breakpointCols={breakpointColumnsObj}
    className={styles.masonryGrid}
    columnClassName={styles.masonryColumn}
> 
            {productsArr?.map((item)=>{
                if(!mediaIsObject(item.images[0]))  return null
               
                  
               return (
                     
                    <ListItem key={item.id}  iteminfo = {item}/>
                   
              )})}
               </Masonry>
              </div>
            
             </div>
              
            </div>
            
        </div>
        </>
    )
}

export default List;