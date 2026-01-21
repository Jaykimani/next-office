import Navbar from "../navbar/navbar";
import styles from './landing.module.css'
import Link from "next/link";

const Landing = () => {
  return (
        <div id={styles.landing}>
          <Navbar />
        <div className={styles.landingContent}>
          <h2>Elevate Your Workspace with Stylish Office Decor & Accessories<span>!!</span></h2>
          <Link href={'/shop'} style={{textDecoration : 'none', color: 'black'}}>
          <div className={styles.landingBtn}>
          <p>SHOP NOW</p>
          </div>
          </Link>
        </div>
        </div>
  )    
}

export default Landing