"use client";

import styles from './shopNav.module.css'
import { useState, useRef, useEffect} from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import Link from 'next/link';
import Image from 'next/image';
import { useCartStore } from '@/app/store';
import SearchInput from '../searchInput/search';


const ShopNav = () => {
    const [desk, setDesk] = useState(false);
    const [light, setLight] = useState(false);
    const [wall, setWall] = useState(false);
    const [greenery, setGreenery] = useState(false);
    const [phoneOpt, setPhoneOpt] = useState(false);
    const [shopMenu, setShopMenu] = useState(false);
    const shop2DivInset = useRef<HTMLDivElement | null>(null);
    const count = useCartStore((state)=> state.count);
    const items = useCartStore((state)=> state.items);
    const subtotal = useCartStore((state)=> state.subtotal);

    useEffect(()=>{
      if(phoneOpt){
        if(shop2DivInset.current){
         shop2DivInset.current.scrollTop = 0

        }
      }

    }, [phoneOpt])

    useEffect(()=>{

    }, [items]);

    const handleDesk = ()=>{
        
        setDesk(!desk);
        setLight(false);
        setWall(false);
        setGreenery(false);
    }
    const handleDeskEnter = (e: any)=>{
      
       setDesk(true);
        setLight(false);
        setWall(false);
        setGreenery(false);
    }
    const handleDeskLeave = ()=>{
       setDesk(false);
        setLight(false);
        setWall(false);
        setGreenery(false);
    }
     const handlelighting = ()=>{
       setDesk(false);
        setLight(!light);
        setWall(false);
        setGreenery(false);
    }
    const handleLightingEnter = (e: any)=>{

        setDesk(false);
        setLight(true);
        setWall(false);
        setGreenery(false);
    }
    const handleLightingLeave = (e: any)=>{

        setDesk(false);
        setLight(false);
        setWall(false);
        setGreenery(false);
    }
    const handleWall = (e: any)=>{

        setDesk(false);
        setLight(false);
        setWall(!wall);
        setGreenery(false);
    }
     const handleWallEnter = (e: any)=>{

        setDesk(false);
        setLight(false);
        setWall(true);
        setGreenery(false);
    }
     const handleWallLeave = (e: any)=>{

        setDesk(false);
        setLight(false);
        setWall(false);
        setGreenery(false);
    }
  
    const handleGreenery = (e: any)=>{
        
        setDesk(false);
        setLight(false);
        setWall(false);
        setGreenery(!greenery);
    }
    const handleGreeneryEnter = (e: any)=>{
        
        setDesk(false);
        setLight(false);
        setWall(false);
        setGreenery(true);
    }
    const handleGreeneryLeave = (e: any)=>{
        
        setDesk(false);
        setLight(false);
        setWall(false);
        setGreenery(false);
    }

    const handleOpenOpt = ()=>{
      setPhoneOpt(true);
   
    }
    const handleCloseOpt = ()=>{
      setPhoneOpt(false);
    }

    const handleSubcategory = (e: any) => {
      setDesk(false);
        setLight(false);
        setWall(false);
        setGreenery(false);
      
    }


    return (
        <>
        <div className={styles.shopContact}>
            <p>Email: josephkimani1998@gmail.com / Need help? Whatsapp us on 0704610605</p>
        </div>
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
         </div>
            
            <div className={styles.shopTitle}>
              <HiMenuAlt2 style={{color: "white", width: "35px", height: "35px"}} onClick={()=> setShopMenu(true)}/> 
             <Link href={'/'} style={{textDecoration: "none", color: "black"}}>
             <Image className={styles.svgLogo1} src="/Component 5.svg" alt="" width={100} height={100} />
             </Link>
             <SearchInput />
               <Link href={'/cart'} style={{textDecoration: "none"}}>
               <div className={styles.shopIconDiv}>
               <div className={styles.shopInset}>
               <FaShoppingCart className={styles.shopIcon} />
              <span className={styles.shopCount}>{count}</span>
              </div>
              <p>KSh {subtotal}.00</p>
             </div>
               </Link>
             
            </div>
            <div className={styles.shopLinks}>
             <div className={styles.shopLink} onClick={handleDesk} onMouseEnter={handleDeskEnter} onMouseLeave={handleDeskLeave}>
                <div className={styles.shopLinkTop} >
                <p>Office Interior Décor</p>
                <MdKeyboardArrowDown style={{color: "#ffe100", width:'25px', height: '25px', transform: desk ? 'rotate(180deg)' : 'rotate(0deg)'}} />
                </div>
                <div className={styles.shopLinkBottom} style={{display: desk ? "flex" : "none"}}>
                    <Link href={'/shop/office-interior-decor/office-desk-shelf-decor'} style={{textDecoration: "none", color: "white"}}>
                    <div className={styles.shopSublink} onClick={handleSubcategory}>
                    <p>Office Desk & Shelf Décor</p>
                   </div>
                    </Link>
                    <Link href={'/shop/office-interior-decor/office-ambient-lighting-decorative-lights'} style={{textDecoration: "none", color: "white"}}>
                    <div className={styles.shopSublink}  onClick={handleSubcategory}>
                    <p>Office Ambient Lighting & Decorative Lights</p>
                   </div>
                   </Link>
                   <Link href={'/shop/office-interior-decor/office-wall-decor-accessories'} style={{textDecoration: "none", color: "white"}}>
                   <div className={styles.shopSublink} onClick={handleSubcategory}>
                    <p>Office Wall Décor & Accessories</p>
                   </div>
                   </Link>
                   <Link href={'/shop/office-interior-decor/office-personalized-statement-decor'} style={{textDecoration: "none", color: "white"}}>
                   <div className={styles.shopSublink} >
                    <p>Office Personalized & Statement Décor</p>
                   </div>
                   </Link>
                </div>    
             </div>
             <div className={styles.shopLink}  onMouseEnter={handleLightingEnter} onMouseLeave={handleLightingLeave}>
                <div className={styles.shopLinkTop} onClick={handlelighting}>
                <p>Office Greenery Solutions</p>
                <MdKeyboardArrowDown fontSize='medium' style={{color: "#ffe100", width:'25px', height: '25px', transform: light ? 'rotate(180deg)' : 'rotate(0deg)'}} />
                </div>
                <div className={styles.shopLinkBottom} style={{display: light ? "flex" : "none"}}>
                  <Link href={'/shop/office-greenery/office-desk-greenery'} style={{textDecoration: "none", color: "white"}}>
                   <div className={styles.shopSublink}  onClick={handleSubcategory}>
                    <p>Office Desk Greenery</p>
                   </div>
                   </Link>
                   <Link href={'/shop/office-greenery/office-statement-greenery'} style={{textDecoration: "none", color: "white"}}>
                   <div className={styles.shopSublink} onClick={handleSubcategory}>
                    <p>Office Statement Greenery</p>
                   </div>
                   </Link>
                   <Link href={'/shop/office-greenery/greenery-sets-styled-combos'} style={{textDecoration: "none", color: "white"}}>
                   <div className={styles.shopSublink} onClick={handleSubcategory} >
                    <p>Greenery Sets & Styled Combos</p>
                   </div>
                   </Link>
                </div>    
             </div>
             <div className={styles.shopLink} onMouseEnter={handleWallEnter} onMouseLeave={handleWallLeave}>
                <div className={styles.shopLinkTop} onClick={handleWall}>
                <p>Office Workspace Accessories</p>
                <MdKeyboardArrowDown fontSize='medium' style={{color: "#ffe100", width:'25px', height: '25px', transform: wall ? 'rotate(180deg)' : 'rotate(0deg)'}} />
                </div>
                <div className={styles.shopLinkBottom} style={{display: wall ? "flex" : "none"}}>
                  <Link href={'/shop/office-workspace-accessories/office-ergonomic-comfort-accessories'} style={{textDecoration: "none", color: "white"}}>
                   <div className={styles.shopSublink} onClick={handleSubcategory}>
                    <p>Office Ergonomic/Comfort Accessories</p>
                   </div>
                   </Link>
                   <Link href={'/shop/office-workspace-accessories/office-desk-essentials-utility-tools'} style={{textDecoration: "none", color: "white"}}>
                   <div className={styles.shopSublink} onClick={handleSubcategory}>
                    <p>Office Desk Essentials/Utility Tools</p>
                   </div>
                   </Link>
                   <Link href={'/shop/office-workspace-accessories/office-productivity-writing-tools'} style={{textDecoration: "none", color: "white"}}>
                   <div className={styles.shopSublink} onClick={handleSubcategory}>
                    <p>Office Productivity/Writing Tools</p>
                   </div>
                   </Link>
                    <Link href={'/shop/office-workspace-accessories/office-desk-organizer-storage'} style={{textDecoration: "none", color: "white"}}>
                   <div className={styles.shopSublink} onClick={handleSubcategory}>
                    <p>Office Desk Organizers & Storage</p>
                   </div>
                   </Link>
                </div>    
             </div>
             <div className={styles.shopLink} onMouseEnter={handleGreeneryEnter} onMouseLeave={handleGreeneryLeave}>
                <div className={styles.shopLinkTop} onClick={handleGreenery}>
                <p>Office Electronics</p>
                <MdKeyboardArrowDown fontSize='medium' style={{color: "#ffe100", width:'25px', height: '25px', transform: greenery ? 'rotate(180deg)' : 'rotate(0deg)'}} />
                </div>
                <div className={styles.shopLinkBottom} style={{display: greenery ? "flex" : "none"}}>
                  <Link href={'/shop/office-electronics/office-charging-power-accessories'} style={{textDecoration: "none", color: "white"}}>
                   <div className={styles.shopSublink} onClick={handleSubcategory}>
                    <p>Office Charging & Power Accessories</p>
                   </div>
                   </Link>
                    <Link href={'/shop/office-electronics/office-computer-accessories'} style={{textDecoration: "none", color: "white"}}>
                   <div className={styles.shopSublink} onClick={handleSubcategory}>
                    <p>Office Computer Accessories</p>
                   </div>
                   </Link>
                    <Link href={'/shop/office-electronics/office-cable-management-tech'} style={{textDecoration: "none", color: "white"}}>
                   <div className={styles.shopSublink} onClick={handleSubcategory}>
                    <p>Office Cable Management Tech</p>
                   </div>
                   </Link>
                </div>    
             </div>
             
            </div>

        </div>

        <div id={styles.shop2}>
         <div className={styles.shop2Div} style={{display: phoneOpt ? 'block' : 'none'}}>
            <div ref={shop2DivInset} id={styles.shop2DivInset}>
            <div className={styles.shop2Div1}>
            <Image className={styles.svgLogo2} src="/Component 5.svg" alt="" width={100} height={100} />
            <MdClose className={styles.optClose} style={{color: 'white'}} fontSize='large' onClick={handleCloseOpt}/>

            </div>
            <div className={styles.shopNavLinks} onClick={()=> setPhoneOpt(false)}>
               <Link href={'/'} style={{textDecoration: "none", color: "white"}}>
                <h3>Home</h3>
               </Link>
            </div>
            <div className={styles.shopNavLinks} onClick={()=> setPhoneOpt(false)}>
               <Link href={'/shop'} style={{textDecoration: "none", color: "white"}}>
                <h3>Shop</h3>
               </Link>
            </div>
            <div className={styles.shopNavLinks} onClick={()=> setPhoneOpt(false)}>
               <Link href={'/contact'} style={{textDecoration: "none", color: "white"}}>
                <h3>Contact</h3>
               </Link>
            </div>
            <div className={styles.shopNavLinks} onClick={()=> setPhoneOpt(false)}>
               <Link href={'/about'} style={{textDecoration: "none", color: "white"}}>
                <h3>About us</h3>
               </Link>
            </div>
            </div>
         </div>
         <div className={styles.shop2Options}>
         <HiMenuAlt2 className={styles.shop2MenuIcon} fontSize='large' onClick={handleOpenOpt}/>
         <Link href={'/'} style={{textDecoration: "none", color: "black"}}>
         <Image className={styles.svgLogo2} src="/Component 5.svg" alt="" width={100} height={100} />
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
        </div>
        </>
    )
}

export default ShopNav;