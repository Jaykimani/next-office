'use client';

import styles from './contacttwo.module.css';
import Image from 'next/image';
import { createMessage } from '@/lib/createMessage';
import { useState } from 'react';

export interface ContactProps {
  hubName?: string;
  heading?: string;
  messagePlaceholder?: string;
}

const ContactTwo = ({
  hubName = 'Nairobi',
  heading,
  messagePlaceholder,
}: ContactProps) => {
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const result = await createMessage(formData);

    if (result.success) {
      setStatus('Message delivered');
    } else {
      setStatus('Something went wrong, please try again.');
    }
  };

  return (
    <div id={styles.contact}>
      <h2>{heading || `Contact Our ${hubName} Supply Team`}</h2>
      <div className={styles.contactInset}>
        <div className={styles.contactForm}>
          <form onSubmit={handleSubmit} className={styles.contForm}>
            <label>Fill in the form</label>
            <input type="hidden" name="source-hub" value={hubName} />
            <input type="text" name="full-name" placeholder="Full Name" required />
            <input type="text" name="phone-number" placeholder="Phone Number" required />
            <input type="email" name="email" placeholder="Email Address" required />
            <textarea
              name="content"
              cols={30}
              rows={5}
              placeholder={
                messagePlaceholder ||
                `Tell us about your ${hubName} office supply needs, quantities, or preferred restock schedule.`
              }
              required
            />
            <button type="submit">{status !== null ? status : 'SEND MESSAGE'}</button>
          </form>
        </div>
        <div className={styles.contactImg}>
          <Image
            className={styles.contactImage}
            src="/contact.jpg"
            alt={`OfficeFlow B2B office supply support for ${hubName} businesses`}
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactTwo;