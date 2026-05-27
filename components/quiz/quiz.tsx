"use client";
import styles from './quiz.module.css'
import Image from 'next/image';
import { MdAddCircle } from "react-icons/md";
import Link from 'next/link';

const Quiz = () => {
  

  const handleQuiz = (e: any)=>{
        const quizCurrent = e.currentTarget;
        let add = quizCurrent.querySelector('.showIcon');
     
        if (quizCurrent.classList.contains(`${styles.quizActive}`)) {
        add.style.transform = 'rotate(0deg)';
        quizCurrent.classList.remove(`${styles.quizActive}`);
        } else if(!quizCurrent.classList.contains(`${styles.quizActive}`)) {
        add.style.transform = 'rotate(45deg)';  
        quizCurrent.classList.add(`${styles.quizActive}`);
        }
   
        
    }

   

  return (
    <>
        <div id={styles.quiz}>
            
            <div className={styles.quizInset}>
              <h1>Frequently Asked Questions(FAQs) About Office Aura in Kenya</h1>
              <div className={styles.quizDiv} onClick={handleQuiz}>
                <div className={styles.quizTop} >
                <h4>What is Office Aura Kenya?</h4>
                <div className='showIcon'>
                <MdAddCircle className={styles.add} fontSize='large'/>
                </div>
                </div>
                <div className={styles.quizBottom}>
                 <p>Office Aura Kenya is a modern workplace solutions company that provides <span>office restock services, employee experience kits, event fulfillment packs, and office accessories</span> for businesses across Kenya. We help companies keep their workplaces productive, organized, and fully equipped through reliable supply and fulfillment solutions.</p>
                </div>
              </div>
              <div className={styles.quizDiv} onClick={handleQuiz}>
                <div className={styles.quizTop}>
                <h4>What office restock services do you offer?</h4>
                 <div className='showIcon'>
                <MdAddCircle className={styles.add} fontSize='large'/>
                </div>              
                </div>
                <div className={styles.quizBottom}>
                 <p>We provide recurring office restocking services for businesses, including:</p>
                 <ul>
                  <li>Stationery supplies</li>
                  <li>Printing papers & printer essentials</li>
                  <li>Pantry and Hydration essentials</li>
                  <li>Hygiene and Cleaning products</li>
                  <li>IT consumables</li>
                  <li>Other workspace essentials</li>
                 </ul>
                 <p>Our services are designed to help companies avoid shortages and improve operational efficiency.</p>
                </div>
              </div>
              <div  className={styles.quizDiv} onClick={handleQuiz}>
                <div className={styles.quizTop}>
                <h4>Do you offer scheduled office supply deliveries in Kenya?</h4>
                <div className='showIcon'>
                <MdAddCircle className={styles.add} fontSize='large'/>
                </div>                </div>
                <div className={styles.quizBottom}>
                 <p>Yes. Office Aura offers scheduled office supply deliveries for businesses in Nairobi and across Kenya. Companies can schedule when to receive their supplies or subscribe to our weekly, bi-weekly, or monthly restock plans depending on their workplace needs.</p>
                </div>
              </div>
              <div  className={styles.quizDiv} onClick={handleQuiz}>
                <div className={styles.quizTop} >
                <h4>What are employee experience kits?</h4>
                 <div className='showIcon'>
                <MdAddCircle className={styles.add} fontSize='large'/>
                </div>
                </div>
                <div className={styles.quizBottom}>
                 <p>Employee experience kits are professionally curated workplace packages designed to improve onboarding, productivity, and employee satisfaction. These kits may include notebooks, pens, branded merchandise, desk accessories, water bottles, laptop accessories, and customized packaging.</p>
                </div>
              </div>
              <div  className={styles.quizDiv} onClick={handleQuiz}>
                <div className={styles.quizTop}>
                <h4>Can employee kits be customized with company branding?</h4>
                 <div className='showIcon'>
                <MdAddCircle className={styles.add} fontSize='large'/>
                </div>
                </div>
                <div className={styles.quizBottom}>
                 <p>Yes. We offer customized employee kits with company logos, branded packaging, personalized employee names, branded merchandise, and tailored product selections to match your company culture and branding requirements.</p>   
                </div>
              </div>
              <div className={styles.quizDiv} onClick={handleQuiz}>
                <div className={styles.quizTop} >
                <h4>What are event fulfillment packs?</h4>
                 <div className='showIcon'>
                <MdAddCircle className={styles.add} fontSize='large'/>
                </div>
                </div>
                <div className={styles.quizBottom}>
                 <p>Event fulfillment packs are curated kits prepared for conferences, workshops, seminars, trainings, corporate events, and product launches. These packs may include notebooks, pens, lanyards, tote bags, event materials, branded merchandise, and attendee essentials.</p>      
                </div>
              </div>
              <div  className={styles.quizDiv} onClick={handleQuiz}>
                <div className={styles.quizTop} >
                <h4>Do you provide branded corporate event kits in Kenya?</h4>
                 <div className='showIcon'>
                <MdAddCircle className={styles.add} fontSize='large'/>
                </div>
                </div>
                <div className={styles.quizBottom}>
                 <p>Yes. We provide branded corporate event kits and fulfillment solutions for businesses, NGOs, startups, schools, agencies, and organizations across Kenya. We can customize event packs to match your brand identity and event objectives.</p>
                 
                </div>
              </div>
                   <div  className={styles.quizDiv} onClick={handleQuiz}>
                <div className={styles.quizTop} >
                <h4>How do I place an order with Office Aura Kenya?</h4>
                 <div className='showIcon'>
                <MdAddCircle className={styles.add} fontSize='large'/>
                </div>
                </div>
                <div className={styles.quizBottom}>
                 <p>You can place an order by contacting us through our website, inquiry forms, WhatsApp, email, or phone. Our team will guide you through product selection, quotations, customization options, and delivery arrangements.</p>
                 
                </div>
              </div>
            </div>
        </div>

        <div className={styles.quote}>
         <h1>SIMPLIFY. SUPPORT. SUCCEED</h1>
        </div>
        </>
  )
}

export default Quiz