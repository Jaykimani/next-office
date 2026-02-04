"use client";

import styles from './list.module.css';
import Image from 'next/image';
import { useState } from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdClose } from "react-icons/md";
import Categories from '@/categories';
import type { Product } from '@/payload-types';
import { Media } from '@/payload-types';
import Link from 'next/link';

interface ProductsProps {
allProducts : Product[];
}

function mediaIsObject(media: number | Media) : media is Media {
  return typeof media !== 'number'
  
}

function List({ allProducts }: ProductsProps) {
    const [sort, setSort] = useState(false);
    const [categSort, setCategSort] = useState(false);

    const handleSort = ()=>{
        setSort(!sort);
        setCategSort(false);
    }

    const handleCategSort = ()=>{
      setCategSort(!categSort);
      setSort(false);
    }

    return(
        <>
        <div id={styles.shopList}>
            <div className={styles.shopListHeader}>
                <p className={styles.topLink}>Home / Shop</p>
                <div className={styles.listCateg} onClick={handleCategSort}>
                 <p>Browse Categories</p>
                 <MdKeyboardArrowDown style={{transform: categSort ? 'rotate(180deg)' : 'rotate(0deg)', marginLeft: '20px'}}/>
                </div>
                <div className={styles.sortDiv}>
                    <div className={styles.sortTop} onClick={handleSort}>
                     <p>Sort by: </p>
                     <MdKeyboardArrowDown style={{transform: sort ? 'rotate(180deg)' : 'rotate(0deg)'}}/>
                    </div>
                    <div className={styles.sortBottom} style={{display: sort ? 'block' : 'none'}}>
                      <p>Sort by Popularity</p>
                      <p>Sort by Ratings</p>
                      <p>Sort by price: Low to High</p>
                      <p>Sort by price: High to Low</p>
                    </div>
                </div>

            </div>
            <div className={styles.shopListInset}>
             <div className={styles.shopCateg}>
              {Categories?.map((item)=>{
                return (
                <div key={item.id} className={styles.categSection}>
               <h4>{item.title}</h4>
               {item.links?.map((link)=>{
                return (
               <div key={link} className={styles.categLink}>
               <MdKeyboardArrowRight style={{color: '#ffe100'}}/>
               <p>{link}</p>
               </div>
                )
               })}
               
              </div>
                )
              })}
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
               <div key={link} className={styles.categLink2}>
               <MdKeyboardArrowRight style={{color: '#ffe100'}}/>
               <p style={{color: 'white'}}>{link}</p>
               </div>
                )
               })}
               
              </div>
                )
              })}
              </div>
             </div>
             <div className={styles.shopListItem}>
              <div className={styles.shopListItemInset}>
b             {allProducts?.map((item)=>{
                if(!mediaIsObject(item.images[0]))  return null
               

               return (
                    <Link key={item.id} href={`/shop/${item.slug}`} style={{textDecoration: 'none'}}>
                     <div className={styles.listItem}>
                    <div className={styles.itemImg}>
                      {item.images[0]?.url && (
                      <Image className={styles.itemImage} src={item.images[0].url} alt="" width={200} height={200} />
                      )}
                    </div>
                    <div className={styles.itemInfo}>
                      <h4>{item.name?.length > 30 ? item.name.substring(0, 27) + '...' : item.name}</h4>
                      <p>KSh {item.price.toLocaleString('en-US')}/=</p>
                      <button>View Item</button> 
                    </div>
                </div>
                    </Link>
                   
              )})}
               
              </div>
              <div className={styles.pagesDiv}>
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
                  <div className={styles.next}><MdKeyboardDoubleArrowRight style={{color:"black"}}/></div>

                </div>

               

             </div>
              
            </div>
            
        </div>
        </>
    )
}

export default List;