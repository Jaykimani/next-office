"use client";

import styles from './shopNav.module.css'
import { useState, useRef, useEffect} from 'react';
import { MdOutlineSearch } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import Link from 'next/link';
import Image from 'next/image';



const ShopNav = () => {
    const [desk, setDesk] = useState(false);
    const [light, setLight] = useState(false);
    const [wall, setWall] = useState(false);
    const [accent, setAccent] = useState(false);
    const [greenery, setGreenery] = useState(false);
    const [phoneOpt, setPhoneOpt] = useState(false);
    const search = useRef(null);
    const shop2DivInset = useRef<HTMLDivElement | null>(null);
   
    useEffect(()=>{
      if(phoneOpt){
        if(shop2DivInset.current){
         shop2DivInset.current.scrollTop = 0

        }
      }

    }, [phoneOpt])

    const handleDesk = ()=>{
        
        setDesk(!desk);
        setLight(false);
        setWall(false);
        setAccent(false);
        setGreenery(false);
    }
    const handleLighting = (e: any)=>{

        setDesk(false);
        setLight(!light);
        setWall(false);
        setAccent(false);
        setGreenery(false);
    }
    const handleWall = (e: any)=>{

        setDesk(false);
        setLight(false);
        setWall(!wall);
        setAccent(false);
        setGreenery(false);
    }
    const handleAccent = (e: any)=>{

        setDesk(false);
        setLight(false);
        setWall(false);
        setAccent(!accent);
        setGreenery(false);
    }
    const handleGreenery = (e: any)=>{
        
        setDesk(false);
        setLight(false);
        setWall(false);
        setAccent(false);
        setGreenery(!greenery);
    }

    const handleOpenOpt = ()=>{
      setPhoneOpt(true);
   
    }
    const handleCloseOpt = ()=>{
      setPhoneOpt(false);
      window.scrollTo(0,0);
    }


    return (
        <>
        <div className={styles.shopContact}>
            <p>Email: josephkimani1998@gmail.com / Need help? Whatsapp us on 0704610605</p>
        </div>
        <div id={styles.shop1}>
            
            <div className={styles.shopTitle}>
             <Link href={'/'} style={{textDecoration: "none", color: "black"}}>
             <Image className={styles.svgLogo1} src="/Component 5.svg" alt="" width={100} height={100} />
             </Link>
             <div className={styles.shopSearchIcon}>
               <input type="text" name="" id="" placeholder="I'm looking for ...." ref={search}/>
               <MdOutlineSearch style={{color: "black", width: '35px', height: '35px'}}/>
               </div>
               <Link href={'/cart'} style={{textDecoration: "none"}}>
               <div className={styles.shopIconDiv}>
               <div className={styles.shopInset}>
               <FaShoppingCart className={styles.shopIcon} />
              <span className={styles.shopCount}>10</span>
              </div>
              <p>KSH 100000.00</p>
             </div>
               </Link>
             
            </div>
            <div className={styles.shopLinks}>
             <div className={styles.shopLink}>
                <div className={styles.shopLinkTop}>
                <p>Office Desk Accessories</p>
                <MdKeyboardArrowDown style={{color: "#ffe100", width:'25px', height: '25px', transform: desk ? 'rotate(180deg)' : 'rotate(0deg)'}} onClick={handleDesk}/>
                </div>
                <div className={styles.shopLinkBottom} style={{height: desk ? "auto" : "0"}}>
                   <div className={styles.shopSublink}>
                    <p>Desk Organizers</p>
                   </div>
                   <div className={styles.shopSublink}>
                    <p>Productivity & Writing tools</p>
                   </div>
                   <div className={styles.shopSublink}>
                    <p>Ergonomics & Comfort Accessories</p>
                   </div>
                   <div className={styles.shopSublink}>
                    <p>Aesthetic & Personalized Items</p>
                   </div>
                   <div className={styles.shopSublink}>
                    <p>Office Desk Gadgets</p>
                   </div>
                </div>    
             </div>
             <div className={styles.shopLink}>
                <div className={styles.shopLinkTop}>
                <p>Office Lighting Solutions</p>
                <MdKeyboardArrowDown fontSize='medium' style={{color: "#ffe100", width:'25px', height: '25px', transform: light ? 'rotate(180deg)' : 'rotate(0deg)'}}  onClick={handleLighting}/>
                </div>
                <div className={styles.shopLinkBottom} style={{height: light ? "auto" : "0"}}>
                   <div className={styles.shopSublink}>
                    <p>Desk Lamps</p>
                   </div>
                   <div className={styles.shopSublink}>
                    <p>Overhead fixtures</p>
                   </div>
                   <div className={styles.shopSublink}>
                    <p>Wall-mounted fixtures</p>
                   </div>
                   <div className={styles.shopSublink}>
                    <p>Stand-alone fixtures</p>
                   </div>
                </div>    
             </div>
             <div className={styles.shopLink}>
                <div className={styles.shopLinkTop}>
                <p>Office Wall Accessories</p>
                <MdKeyboardArrowDown fontSize='medium' style={{color: "#ffe100", width:'25px', height: '25px', transform: wall ? 'rotate(180deg)' : 'rotate(0deg)'}} onClick={handleWall}/>
                </div>
                <div className={styles.shopLinkBottom} style={{height: wall ? "auto" : "0"}}>
                   <div className={styles.shopSublink}>
                    <p>Wall Art & Posters</p>
                   </div>
                   <div className={styles.shopSublink}>
                    <p>Wall Clocks</p>
                   </div>
                   <div className={styles.shopSublink}>
                    <p>Wall Mounted Shelves</p>
                   </div>
                   <div className={styles.shopSublink}>
                    <p>Wall Mounted Planters</p>
                   </div>
                </div>    
             </div>
             <div className={styles.shopLink}>
                <div className={styles.shopLinkTop}>
                <p>Office Accents</p>
                <MdKeyboardArrowDown fontSize='medium' style={{color: "#ffe100", width:'25px', height: '25px', transform: accent ? 'rotate(180deg)' : 'rotate(0deg)'}} onClick={handleAccent}/>
                </div>
                <div className={styles.shopLinkBottom} style={{height: accent ? "auto" : "0"}}>
                   <div className={styles.shopSublink}>
                    <p>Rugs & Carpets</p>
                   </div>
                   <div className={styles.shopSublink}>
                    <p>Wall papers</p>
                   </div>
                   <div className={styles.shopSublink}>
                    <p>Desk mats</p>
                   </div>
                   <div className={styles.shopSublink}>
                    <p>Bean bags</p>
                   </div>
                   <div className={styles.shopSublink}>
                    <p>Throw pillows</p>
                   </div>
                
                </div>    
             </div>
             <div className={styles.shopLink}>
                <div className={styles.shopLinkTop}>
                <p>Office Greenery Solutions</p>
                <MdKeyboardArrowDown fontSize='medium' style={{color: "#ffe100", width:'25px', height: '25px', transform: greenery ? 'rotate(180deg)' : 'rotate(0deg)'}} onClick={handleGreenery}/>
                </div>
                <div className={styles.shopLinkBottom} style={{height: greenery ? "auto" : "0"}}>
                   <div className={styles.shopSublink}>
                    <p>Potted Plants</p>
                   </div>
                   <div className={styles.shopSublink}>
                    <p>Wall & Vertical Greenery</p>
                   </div>
                   <div className={styles.shopSublink}>
                    <p>Artificial Greenery</p>
                   </div>
                   <div className={styles.shopSublink}>
                    <p>Outdoor Office Greenery</p>
                   </div>
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
            <div className={styles.shopNavLinks}>
               <h3>Home</h3>
            </div>
            <div className={styles.shopNavLinks}>
               <h3>Shop</h3>
            </div>
            <div className={styles.shopNavLinks}>
               <h3>Contact</h3>
            </div>
            <div className={styles.shopNavLinks}>
               <h3>About us</h3>
            </div>
            </div>
         </div>
         <div className={styles.shop2Options}>
         <HiMenuAlt2 className={styles.shop2MenuIcon} fontSize='large' onClick={handleOpenOpt}/>
         <Link href={'/'} style={{textDecoration: "none", color: "black"}}>
         <Image className={styles.svgLogo2} src="/Component 5.svg" alt="" width={100} height={100} />
         </Link>
         <div className={styles.shopIconDiv}>
             <div className={styles.shopInset}>
              <FaShoppingCart className={styles.shop2Icon} />
              <span className={styles.shop2Count}>0</span>
              </div>
              <p>KSH 0.00</p>
         </div>
         </div>
         <div className={styles.shopSearchIcon}>
               <input type="text" name="" id="" placeholder="I'm looking for ...." ref={search}/>
               <MdOutlineSearch fontSize='large' style={{color: "black"}}/>
        </div>
        </div>
        </>
    )
}

export default ShopNav;