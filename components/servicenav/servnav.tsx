"use client"

import { useState, useRef, useEffect } from 'react';
import styles from './servnav.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { FaShoppingCart } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { useCartStore } from '@/app/store';
import { FaUserTie } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdInformationCircle } from "react-icons/io";
import { FaNewspaper } from "react-icons/fa6";


const ServiceNav = () => {
    const [phoneOption, setPhoneOption] = useState(false);
    const [login, setLogin] = useState(false);
    const shop2DivInsetHome = useRef<HTMLDivElement | null>(null);
    const {count, subtotal} = useCartStore((state) => state);

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
        <nav id={styles.navbar}>
            <div className={styles.navLinks}>
             <Link href={'/'} style={{textDecoration: 'none'}}>
              <Image className={styles.svgLogo} src="/Component 1.svg" alt="office aura image" width={30} height={30}/>
             </Link> 
            <div className={styles.navbarLinks}>
                  <Link className={styles.navbarLink} href={'/'} style={{textDecoration: 'none'}}>
                  <p>Home</p>
                  </Link>
                  <Link className={styles.navbarLink} href={'/shop'} style={{textDecoration: 'none'}}>
                  <p>Shop</p>
                  </Link>
                  <Link className={styles.navbarLink} href={'/about'} style={{textDecoration: 'none'}}>
                  <p>About</p>
                  </Link>
                  <Link className={styles.navbarLink} href={'/contact'} style={{textDecoration: 'none'}}>
                  <p>Contact</p>
                  </Link>
              <Link className={styles.navbarLink} href={'/blogs'} style={{textDecoration: 'none'}}>
               <p>Blogs</p>
              </Link>
            </div>
             <div className={styles.shopping}> 
              <div className={styles.login} onClick={() => setLogin(!login)} onMouseEnter={() => setLogin(true)}>
              <Link href={'/my-account/sign-in'} style={{display: 'flex'}}>
              <div className={styles.loginTop}>
              <FaUserTie className={styles.userTie}/>
              <div>
                <p>Business Account</p>
                <p>Sign in/Register</p>
              </div>
              </div>
              </Link>
              <div className={styles.loginDropdown} style={{display: login ? "block" : "none"}}  onMouseLeave={() => setLogin(false)}>
              <Link href={'/my-account/sign-in'} style={{textDecoration: 'none', color: 'white'}}>
              <div>Sign In</div>
              </Link>
              
              <Link href={'/my-account/register'} style={{textDecoration: 'none', color: 'white'}}>
              <div>Register</div>
              </Link>
              
              </div>
              </div>
               <Link href={'/cart'} style={{textDecoration: 'none'}}>
              <div className={styles.outerShopping}>
              <div className={styles.shoppingInset}>
              <FaShoppingCart className={styles.shopCart}/>  
              <span className={styles.shoppingCount}>{count}</span>
              </div>
              <p>KSh {subtotal}.00/=</p>
              </div>
              </Link>
              </div>
            </div>
           
             
              
            
        </nav>
        

        <nav id={styles.navbar2}>
            <div className={styles.shop2Div} style={{display: phoneOption ? 'block' : 'none'}}>
            <div ref={shop2DivInsetHome} id={styles.shop2DivInset}>
            <div className={styles.shop2Div1}>
            <Image className={styles.svgLogo2} src="/Component 2.svg" alt="" width={100} height={100} />
            <MdClose className={styles.optClose} style={{color: 'white'}} fontSize='large' onClick={handleCloseOpt}/>

            </div>
              <Link href={'/my-account/sign-in'} style={{textDecoration: "none", color: "white"}}>
            <div className={styles.shopNavLinks}>
               <FaUserTie style={{color: '#ffe100', width: '27px', height: '27px'}}/>
                <h3>Sign In/Register</h3>  
            </div>
             </Link>
            <Link href={'/'} style={{textDecoration: "none", color: "white"}}>
            <div className={styles.shopNavLinks}>
               <IoHome style={{color: '#ffe100', width: '27px', height: '27px'}}/>
                <h3>Home</h3>  
            </div>
            </Link>
            <Link href={'/shop'} style={{textDecoration: "none", color: "white"}}>
            <div className={styles.shopNavLinks}>
               <FaShoppingCart style={{color: '#ffe100', width: '27px', height: '27px'}}/>
                <h3>Shop</h3>
            </div>
            </Link>
            <Link href={'/contact'} style={{textDecoration: "none", color: "white"}}>
            <div className={styles.shopNavLinks}>
               <FaPhoneAlt style={{color: '#ffe100', width: '27px', height: '27px'}}/>
                <h3>Contact</h3>
            </div>
             </Link>
             <Link href={'/about'} style={{textDecoration: "none", color: "white"}}>
            <div className={styles.shopNavLinks}>
                <IoMdInformationCircle style={{color: '#ffe100', width: '27px', height: '27px'}}/>
                <h3>About us</h3>
               
            </div>
            </Link>
             <Link href={'/blogs'} style={{textDecoration: "none", color: "white"}}>
             <div className={styles.shopNavLinks}>
              <FaNewspaper style={{color: '#ffe100', width: '27px', height: '27px'}}/>
                <h3>Blogs</h3>
              
            </div>
             </Link>
            </div>
         </div>
        <div className={styles.navbarInset2}>
        <Link href={'/'}>
            <Image className={styles.svgLogo} src="/Component 1.svg" alt="office aura image" width={500} height={300}/>
        </Link>
        <div className={styles.shopping}> 
          <div className={styles.login} onClick={() => setLogin(!login)} onMouseEnter={() => setLogin(true)}>
              <Link href={'/my-account/sign-in'} style={{display: 'flex'}}>
              <div className={styles.loginTop}>
              <FaUserTie className={styles.userTie}/>
              <div className={styles.logInfo}>
                <p>WELCOME</p>
                <p>Sign in/Register</p>
              </div>
              </div>
              </Link>
              </div>
          <Link href={'/cart'} style={{textDecoration: 'none', color: 'white'}}>
           <div className={styles.shoppingInset}>
              <FaShoppingCart style={{color : '#ffe100', width: '28px', height: '28px'}}/>  
              <span className={styles.shoppingCount}>{count}</span>
              </div>
          </Link>
             
              
          </div>
        </div>    
            <div className={styles.homeMenu} onClick={handleOpenOpt}>
               <div className={styles.div1}></div>
               <div className={styles.div2}></div>
               <div className={styles.div3}></div>
              </div>
        </nav>
        </>
  )
}

export default ServiceNav