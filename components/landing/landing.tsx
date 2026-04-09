import Navbar from "../navbar/navbar";
import styles from './landing.module.css'
import Link from "next/link";

const Landing = () => {
  return (
        <div id={styles.landing}>
          <Navbar />
        <div className={styles.landingContent}>
          <h2>Elev<span>A</span>te Yo<span>U</span>r Workspace with Stylish Office Déco<span>R</span> & <span>A</span>ccessories<span>!!</span></h2>
          
        </div>
        </div>
  )    
}

export default Landing