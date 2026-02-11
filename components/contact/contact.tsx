"use client"

import styles from './contact.module.css'
import Image from 'next/image';
import { createMessage } from '@/lib/createMessage';
import { useState } from 'react';


const  Contact = () => {
  const [status, setStatus] = useState<string | null>(null);
 
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();

    const formData = new FormData(e.currentTarget)
    const result = await createMessage(formData)

    if (result.success) {
      setStatus("Message delivered")
    } else {
      setStatus("Something went wrong, please try again.")
    }

  }
   

  return (
    <>
        <div id={styles.contact}>
          <h1>Contact Us</h1>
          <div className={styles.contactInset}>
            <div className={styles.contactForm}>
              <form onSubmit={handleSubmit} className={styles.contForm}>
                <label>Fill in the form</label>
                <input type="text" name="full-name" id="" placeholder='Full Name'/>
                <input type="text" name="phone-number" id="" placeholder='Phone Number'/>
                <input type="text" name="email" id="" placeholder='Email Address'/>
                <textarea name="content" id="" cols={30} rows={5} placeholder='Write your query, complaint or compliment here.'></textarea>
                <button type="submit">{status !== null ? status : "SEND MESSAGE"}</button>
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