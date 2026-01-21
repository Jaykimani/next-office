import styles from './contact.module.css'
import Image from 'next/image'


const Contact = () => {
  return (
    <>
        <div id={styles.contact}>
          <h1>Contact Us</h1>
          <div className={styles.contactInset}>
            <div className={styles.contactForm}>
              <form action="" className={styles.contForm}>
                <label>Fill in the form</label>
                <input type="text" name="" id="" placeholder='Full Name'/>
                <input type="text" name="" id="" placeholder='Phone Number'/>
                <input type="text" name="" id="" placeholder='Email Address'/>
                <textarea name="" id="" cols={30} rows={5} placeholder='Write your query, complaint or compliment here.'></textarea>
                <button type="submit">SEND MESSAGE</button>
              </form>
            </div>
            <div className={styles.contactImg}>
              <Image className={styles.contactImage} src="/contact.jpg" alt="" width={500} height={500} />
            </div>
          </div>
        </div>
        </>
  )
}

export default Contact