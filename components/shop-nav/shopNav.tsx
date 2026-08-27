"use client";

import styles from './shopNav.module.css'
import { useState, useRef, useEffect} from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import Link from 'next/link';
import Image from 'next/image';
import { useCartStore } from '@/app/store';
import SearchInput from '../searchInput/search';
import { FaUserTie } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdInformationCircle } from "react-icons/io";
import { FaNewspaper } from "react-icons/fa6";
import { Categories, Subcategory, shopPopularity, shopPrice } from '@/categories';

const ShopNav = () => {
    
    const [phoneOpt, setPhoneOpt] = useState(false);
    const [shopMenu, setShopMenu] = useState(false);
    const shop2DivInset = useRef<HTMLDivElement | null>(null);
    const count = useCartStore((state)=> state.count);
    const items = useCartStore((state)=> state.items);
    const subtotal = useCartStore((state)=> state.subtotal);
    const [login, setLogin] = useState(false);
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

    useEffect(()=>{
      if(phoneOpt){
        if(shop2DivInset.current){
         shop2DivInset.current.scrollTop = 0

        }
      }

    }, [phoneOpt])

    useEffect(()=>{

    }, [items]);


    const handleOpenOpt = ()=>{
      setPhoneOpt(true);
   
    }
    const handleCloseOpt = ()=>{
      setPhoneOpt(false);
    }

  


    return (
        <>
       
        <div id={styles.shop1}>
         <div className={styles.shopNavMenu} style={{display: shopMenu ? "block" : "none"}}>
          <MdClose style={{color: "white", width: "45px", height: "45px", marginBottom: "10px"}} onClick={()=> setShopMenu(false)}/>
           <Link href={'/'} style={{textDecoration: "none", color: "white"}} onClick={()=>{setShopMenu(false)}}>
           <h1>Home</h1>
           </Link> 
           <Link href={'/shop'} style={{textDecoration: "none", color: "white"}} onClick={()=>{setShopMenu(false)}}>
           <h1>Shop</h1>
           </Link>
           <Link href={'/contact'} style={{textDecoration: "none", color: "white"}} onClick={()=>{setShopMenu(false)}}>
           <h1>Contact</h1>
           </Link>
            <Link href={'/about'} style={{textDecoration: "none", color: "white"}} onClick={()=>{setShopMenu(false)}}>
           <h1>About us</h1>
           </Link>
            <Link href={'/blogs'} style={{textDecoration: "none", color: "white"}} onClick={()=>{setShopMenu(false)}}>
           <h1>Blogs</h1>
           </Link>
         </div>
            
            <div className={styles.shopTitle}>
              <HiMenuAlt2 style={{color: "white", width: "35px", height: "35px"}} onClick={()=> setShopMenu(true)}/> 
             <Link href={'/'} style={{textDecoration: "none", color: "black"}}>
             <Image className={styles.svgLogo1} src="/Component 2.svg" alt="" width={100} height={100} />
             </Link>
             <SearchInput />
          
             <div className={styles.login} onClick={() => setLogin(!login)} onMouseEnter={() => setLogin(true)}>
              <div className={styles.loginTop}>
              <Link href={'/my-account/sign-in'} style={{display: 'flex', color: 'white'}}>
              <FaUserTie style={{color : '#ffe100', width: '35px', height: '35px'}}/>
              <div className={styles.welcome}>
                <p>WELCOME</p>
                <p>Sign in/Register</p>
              </div>
              </Link>
              </div>
              <div className={styles.loginDropdown} style={{display: login ? "block" : "none"}}  onMouseLeave={() => setLogin(false)}>
              <Link href={'/my-account/sign-in'} style={{textDecoration: 'none', color: 'black'}}>
              <div>Sign In</div>
              </Link>
              
              <Link href={'/my-account/register'} style={{textDecoration: 'none', color: 'black'}}>
              <div>Register</div>
              </Link>
              
              </div>
              </div>
               <Link href={'/cart'} style={{textDecoration: "none"}} className={styles.shopIconDiv}>
               <div className={styles.shopInset}>
               <FaShoppingCart className={styles.shopIcon} />
              <span className={styles.shopCount}>{count}</span>
              </div>
              <p>KSh {subtotal}.00</p>
             
               </Link>
      
            </div>
            <div className={styles.shopLinks}>
              {Subcategory.map((category) => {
                return (
                    <Link key={category.id} href={category.url}>
                    <div className={styles.shopLink}>
                <p>{category.id}</p>
                </div>
                    </Link>
                )
              })}
  
            </div>

        </div>

        <div id={styles.shop2}>
         <div className={styles.shop2Div} style={{display: phoneOpt ? 'block' : 'none'}}>
            <div ref={shop2DivInset} id={styles.shop2DivInset}>
            <div className={styles.shop2Div1}>
            <Image className={styles.svgLogo2} src="/Component 2.svg" alt="" width={100} height={100} />
            <MdClose className={styles.optClose} style={{color: 'white'}} fontSize='large' onClick={handleCloseOpt}/>

            </div>
            <Link href={'/my-account/sign-in'} style={{textDecoration: "none", color: "white"}}>
            <div className={styles.shopNavLinks} onClick={()=> setPhoneOpt(false)}>
               <FaUserTie style={{color: '#ffe100', width: '27px', height: '27px'}}/>
                <h3>Sign In/Register</h3>  
            </div>
             </Link>
             <Link href={'/'} style={{textDecoration: "none", color: "white"}}>
            <div className={styles.shopNavLinks} onClick={()=> setPhoneOpt(false)}>
               <IoHome style={{color: '#ffe100', width: '27px', height: '27px'}}/>
                <h3>Home</h3>  
            </div>
            </Link>
            <Link href={'/shop'} style={{textDecoration: "none", color: "white"}}>
            <div className={styles.shopNavLinks} onClick={()=> setPhoneOpt(false)}>
               <FaShoppingCart style={{color: '#ffe100', width: '27px', height: '27px'}}/>
                <h3>Shop</h3>
            </div>
            </Link>
            <Link href={'/contact'} style={{textDecoration: "none", color: "white"}}>
            <div className={styles.shopNavLinks} onClick={()=> setPhoneOpt(false)}>
               <FaPhoneAlt style={{color: '#ffe100', width: '27px', height: '27px'}}/>
                <h3>Contact</h3>
            </div>
             </Link>
             <Link href={'/about'} style={{textDecoration: "none", color: "white"}}>
            <div className={styles.shopNavLinks} onClick={()=> setPhoneOpt(false)}>
                <IoMdInformationCircle style={{color: '#ffe100', width: '27px', height: '27px'}}/>
                <h3>About us</h3>
               
            </div>
            </Link>
             <Link href={'/blogs'} style={{textDecoration: "none", color: "white"}}>
             <div className={styles.shopNavLinks} onClick={()=> setPhoneOpt(false)}>
              <FaNewspaper style={{color: '#ffe100', width: '27px', height: '27px'}}/>
                <h3>Blogs</h3>
              
            </div>
             </Link>
            </div>
         </div>
         <div className={styles.shop2Options}>
         <HiMenuAlt2 className={styles.shop2MenuIcon} fontSize='large' onClick={handleOpenOpt}/>
         <Link href={'/'} style={{textDecoration: "none", color: "black"}}>
         <Image className={styles.svgLogo2} src="/Component 2.svg" alt="" width={100} height={100} />
         </Link>
         <div className={styles.shopIconDiv}>
            <Link href={'/cart'} style={{textDecoration: "none", color: "white"}}>
            <div className={styles.shopInset}>
              <FaShoppingCart className={styles.shop2Icon} />
              <span className={styles.shop2Count}>{count}</span>
              </div>
              <p>KSH 0.00</p>
            </Link>
             
         </div>
         </div>
         <SearchInput />
            <div className={styles.shopListHeader}>
                <div className={styles.listCateg}>
                 <p>Browse Categories</p>
                 <MdKeyboardArrowDown/>
                </div>
                <div className={styles.listCateg}>
                 <p>Shop by:</p>
                 <MdKeyboardArrowDown/>
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
                <div key={item.title.id} className={styles.categSection2}>
              <Link href={`${item.title.url}`} style={{textDecoration: "none", color: "#ffe100"}}>
              <h4>{item.title.id}</h4>
              </Link>  
               
               {item.links?.map((link)=>{
                
                return (
               <Link key={link.id} href={`${link.url}`} style={{textDecoration: "none", color: "white"}}>
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
              <div className={styles.shopCateg2Close}>
              <MdClose style={{color: 'white', width: '35px', height: '35px'}} onClick={()=>{setShopsort(false)}}/>
              <p>close</p>
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
        </div>
        </>
    )
}

export default ShopNav;