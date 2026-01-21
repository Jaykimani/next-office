"use client"

import { useState, useRef, useEffect } from 'react';
import styles from './navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { FaShoppingCart } from "react-icons/fa";
import { MdClose } from "react-icons/md";


const Navbar = () => {
    const [phoneOption, setPhoneOption] = useState(false);
    const shop2DivInsetHome = useRef<HTMLDivElement | null>(null);

    useEffect(()=>{
          if(phoneOption){
            if(shop2DivInsetHome.current){
             shop2DivInsetHome.current.scrollTop = 0
    
            }
          }
    
        }, [phoneOption])

     const handleOpenOpt = ()=>{
      setPhoneOption(true);
   
    }
    const handleCloseOpt = ()=>{
      setPhoneOption(false);
      window.scrollTo(0,0);
    }    
    

  return (
    <>
        <div id={styles.navbar}>
            <div className={styles.navLinks}>
            <Image className={styles.svgLogo} src="/Component 5.svg" alt="office aura image" width={30} height={30}/>
            <div className={styles.navbarLinks}>
                <div className={styles.navbarLink}>
                  <p>Home</p>
                </div>
                <div className={styles.navbarLink}>
                  <p>Shop</p>
                </div>
                <div className={styles.navbarLink}>
                  <Link href={'/about'} style={{textDecoration: 'none', color: 'white'}}>
                  <p>About</p>
                  </Link>
                </div>
                <div className={styles.navbarLink}>
                  <p>Contact</p>
                </div>
            </div>
            </div>
            <div className={styles.shopping}> 
              <div className={styles.shoppingInset}>
              <FaShoppingCart style={{color : '#ffe100', width: '35px', height: '35px'}}/>  
              <span className={styles.shoppingCount}>0</span>
              </div>
              <p>KSH 100000.00</p>
            </div>
        </div>

        <div id={styles.navbar2}>
            <div className={styles.shop2Div} style={{display: phoneOption ? 'block' : 'none'}}>
            <div ref={shop2DivInsetHome} id={styles.shop2DivInset}>
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
        <div className={styles.navbarInset2}>
             <Image className={styles.svgLogo} src="/Component 5.svg" alt="office aura image" width={500} height={300}/>
        <div className={styles.shopping}> 
              <div className={styles.shoppingInset}>
              <FaShoppingCart style={{color : '#ffe100', width: '28px', height: '28px'}}/>  
              <span className={styles.shoppingCount}>5</span>
              </div>
              
            </div>
        </div>    
            <div className={styles.homeMenu} onClick={handleOpenOpt}>
               <div className={styles.div1}></div>
               <div className={styles.div2}></div>
               <div className={styles.div3}></div>
              </div>
        </div>
        </>
  )
}

export default Navbar