import Navbar from "../navbar/navbar";
import styles from './landing.module.css'
import Link from "next/link";

const Landing = () => {
  return (
        <div id={styles.landing}>
          <Navbar />
        <div className={styles.landingContent}>
          <h2>Modern Worksp<span>A</span>ce sol<span>U</span>tions for Kenyan p<span>R</span>offessionals <span>A</span>nd businesses.</h2>
          
        </div>
        </div>
  )    
}

export default Landing