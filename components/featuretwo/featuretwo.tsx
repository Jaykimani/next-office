import styles from './featuretwo.module.css';
import Image from 'next/image';
import { MdArrowForward } from "react-icons/md";
import Link from 'next/link';

const Featured2 = () => {
  return (
    <>

        <div id={styles.choice}>
          <div className={styles.choice1}>
            <div className={styles.choiceInset}>
            <h1>Why Businesses in Nairobi Choose OfficeFlow</h1>
            <p>Businesses across Nairobi choose OfficeFlow for reliable office supplies, fast delivery, and convenient office restock services that help keep workplaces running smoothly. Whether you're a startup in Westlands, a corporate office in Upper Hill, an NGO in Kilimani, or a growing business in Nairobi CBD, OfficeFlow helps reduce procurement stress by providing a dependable source for office stationery, printing paper, printer consumables, pantry supplies, cleaning products, and workplace essentials. Our flexible ordering options, scheduled restock plans, and responsive support make it easier for Nairobi businesses to avoid supply shortages, save time, and maintain productivity without the hassle of managing multiple suppliers. With delivery across Nairobi and a focus on business efficiency, OfficeFlow is a trusted partner for companies looking for professional office supply and workplace restock solutions.</p>
            
          </div>
          </div>
          <div className={styles.choice2}>
          <div className={styles.choiceInset}>
            <h1>Why Businesses in Nairobi Choose OfficeFlow</h1>
            <p>OfficeFlow helps businesses in Nairobi stay stocked with reliable office supplies, workplace essentials, and office restock services. From stationery and printing paper to pantry and cleaning supplies, we provide fast delivery across Nairobi, helping companies save time, reduce procurement stress, and avoid supply shortages.</p>
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

export default Featured2;