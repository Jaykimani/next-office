import styles from './testimony.module.css';
import Image from 'next/image';


const Testimony = () => {
  return (
    <>
        <div id={styles.testimony}>
         <h1>Customer Feedback</h1>
         <div className={styles.testimonyInset}>
           <div className={styles.testDiv}>
            <Image src="/testimony.jpg" alt="testimony" width={100} height={100} />
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
            <div className={styles.user}> 
            <h4>Joseph Kimani</h4>
            <h5>Senior Manager</h5>
            </div>
           </div>
           <div className={styles.testDiv}>
            <Image src="/testimony.jpg" alt="testimony" width={100} height={100} />
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
            <div className={styles.user}> 
            <h4>Joseph Kimani</h4>
            <h5>Senior Manager</h5>
            </div>
           </div>
           <div className={styles.testDiv}>
            <Image src="/testimony.jpg" alt="testimony" width={100} height={100} />
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
            <div className={styles.user}> 
            <h4>Joseph Kimani</h4>
            <h5>Senior Manager</h5>
            </div>
           </div>
           <div className={styles.testDiv}>
            <Image src="/testimony.jpg" alt="testimony" width={100} height={100} />
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
            <div className={styles.user}> 
            <h4>Joseph Kimani</h4>
            <h5>Senior Manager</h5>
            </div>
           </div>
           <div className={styles.testDiv}>
            <Image src="/testimony.jpg" alt="testimony" width={100} height={100} />
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
            <div className={styles.user}> 
            <h4>Joseph Kimani</h4>
            <h5>Senior Manager</h5>
            </div>
           </div>
         </div>
        </div>
        </>
  )
}

export default Testimony;