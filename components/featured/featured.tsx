import styles from './featured.module.css';
import Image from 'next/image';
import { MdArrowForward } from "react-icons/md";
import Link from 'next/link';

const Featured = () => {
  return (
    <>

        <div id={styles.choice}>
          <div className={styles.choice1}>
            <div className={styles.choiceInset}>
            <h1>Why Choose OfficeFlow Kenya?</h1>
            <p>OfficeFlow Kenya provides reliable office supply and restock services for businesses across Kenya, helping workplaces stay fully stocked and productive. We simplify office procurement by supplying and restocking essential workplace items including stationery, printing paper, pantry supplies, cleaning products, and IT consumables through convenient delivery solutions. Whether you're a startup, SME, NGO, or corporate office, our customized restock services help reduce procurement time, prevent supply shortages, and keep your operations running smoothly. For businesses looking for dependable office supplies in Nairobi and professional workplace support throughout Kenya, OfficeFlow is your trusted office restock partner.</p>
            
          </div>
          </div>
          <div className={styles.choice2}>
          <div className={styles.choiceInset}>
            <h1>Why Choose OfficeFlow Kenya?</h1>
            <p>OfficeFlow Kenya helps businesses across Kenya stay fully stocked with essential workplace supplies through reliable office restock services. From stationery and printing paper to pantry, cleaning, and IT consumables, we simplify procurement, prevent supply shortages, and keep your workplace running smoothly with convenient delivery solutions.</p>
          </div>
          </div>
          
        </div>

        <div id={styles.proof}>
          <div className={styles.proofInset}>
            <div className={styles.proofTitle}>
             <p>Exceptional Customer Service</p>
            </div>
            <div className={styles.proofImg}>
             <Image className={styles.proofImgImg} src="/customer2.jpg" alt="customer service" width={500} height={500}/>
            </div>
            <div className={styles.proofDesc}>
              <p>Our friendly and knowledgeable support team is always ready to assist you.</p>
            </div>

          </div>
          <div className={styles.proofInset}>
            <div className={styles.proofTitle}>
             <p>On-time, Every time.</p>
            </div>
            <div className={styles.proofImg}>
             <Image className={styles.proofImgImg} src="/shipping.jpg" alt="fast shipping" width={500} height={500}/>
            </div>
            <div className={styles.proofDesc}>
              <p>Experience smooth and reliable delivery, prioritizing speed, safety, and consistency.</p>
            </div>

          </div>
          <div className={styles.proofInset}>
            <div className={styles.proofTitle}>
             <p>Quality Assured</p>
            </div>
            <div className={styles.proofImg}>
             <Image className={styles.proofImgImg} src="/quality.jpg" alt="competitive pricing" width={500} height={500}/>
            </div>
            <div className={styles.proofDesc}>
              <p>It's simple: uncompromising quality and service you can trust.</p>
            </div>

          </div>


        </div>
        </>
  )
}

export default Featured;