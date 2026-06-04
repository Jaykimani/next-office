"use client";
import styles from './quiz.module.css'
import { MdAddCircle } from "react-icons/md";


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
              <h1>Frequently Asked Questions(FAQs) About OfficeFlow Kenya</h1>
              <div className={styles.quizDiv} onClick={handleQuiz}>
                <div className={styles.quizTop} >
                <h4>What is OfficeFlow Kenya?</h4>
                <div className='showIcon'>
                <MdAddCircle className={styles.add} fontSize='large'/>
                </div>
                </div>
                <div className={styles.quizBottom}>
                 <p>OfficeFlow Kenya is a workplace supply and office restock company that helps businesses stay fully stocked with office supplies. We provide office stationery, printing materials, pantry supplies, cleaning products, IT consumables, and other workplace essentials to businesses across Nairobi and Kenya.</p>
                </div>
              </div>
              <div className={styles.quizDiv} onClick={handleQuiz}>
              <div className={styles.quizTop} >
                <h4>Do you deliver office supplies in Nairobi?</h4>
                <div className='showIcon'>
                <MdAddCircle className={styles.add} fontSize='large'/>
                </div>
                </div>
                <div className={styles.quizBottom}>
                 <p>Yes. We provide office supply delivery throughout Nairobi, including CBD, Westlands, Upper Hill, Kilimani, Karen, Gigiri, Industrial Area, and surrounding business districts.</p>
                </div>
              </div>
              <div className={styles.quizDiv} onClick={handleQuiz}>
                <div className={styles.quizTop}>
                <h4>What office supplies do you provide?</h4>
                 <div className='showIcon'>
                <MdAddCircle className={styles.add} fontSize='large'/>
                </div>              
                </div>
                <div className={styles.quizBottom}>
                 <p>We supply a wide range of workplace essentials, including:</p>
                 <ul>
                  <li>Stationery and writing supplies</li>
                  <li>Printing paper and envelopes</li>
                  <li>Printer ink and toner</li>
                  <li>Pantry and beverage supplies</li>
                  <li>Cleaning and hygiene products</li>
                  <li>IT consumables and accessories</li>
                  <li>Other workspace essentials</li>
                 </ul>
                 <p>Our services are designed to help companies avoid shortages and improve operational efficiency.</p>
                </div>
              </div>
              <div  className={styles.quizDiv} onClick={handleQuiz}>
                <div className={styles.quizTop}>
                <h4>How does OfficeFlow work?</h4>
                <div className='showIcon'>
                <MdAddCircle className={styles.add} fontSize='large'/>
                </div>                </div>
                <div className={styles.quizBottom}>
                 <p>OfficeFlow is designed to make it easy for businesses to get the office supplies they need.</p>
                 <p>You can either:</p>
                 <ul>
                  <li>Order office essentials as needed through our website.</li>
                  <li>Create a custom restock plan for scheduled deliveries and ongoing workplace supply management.</li>
                 </ul>
                 <p>Whether you need a one-time purchase or a long-term supply solution, OfficeFlow helps businesses stay stocked and productive.</p>
                </div>
              </div>
              <div  className={styles.quizDiv} onClick={handleQuiz}>
                <div className={styles.quizTop} >
                <h4>What is a custom restock plan?</h4>
                 <div className='showIcon'>
                <MdAddCircle className={styles.add} fontSize='large'/>
                </div>
                </div>
                <div className={styles.quizBottom}>
                 <p>A custom restock plan is a personalized office supply program based on your business's specific requirements and usage patterns.</p>
                 <p>Instead of manually reordering supplies every time stock runs low, OfficeFlow helps you create a structured supply schedule tailored to your workplace.</p>
                </div>
              </div>
               <div  className={styles.quizDiv} onClick={handleQuiz}>
                <div className={styles.quizTop} >
                <h4>How can I request an office restock plan from OfficeFlow?</h4>
                 <div className='showIcon'>
                <MdAddCircle className={styles.add} fontSize='large'/>
                </div>
                </div>
                <div className={styles.quizBottom}>
                 <p>You can contact OfficeFlow through our website, WhatsApp, or quote request form to discuss your office requirements and receive a customized workplace restock plan.</p>
                 
                </div>
              </div>
              <div  className={styles.quizDiv} onClick={handleQuiz}>
                <div className={styles.quizTop} >
                <h4>Can I set up recurring office deliveries?</h4>
                 <div className='showIcon'>
                <MdAddCircle className={styles.add} fontSize='large'/>
                </div>
                </div>
                <div className={styles.quizBottom}>
                 <p>Yes. Businesses using custom restock plans can choose weekly, bi-weekly, monthly, or customized delivery schedules based on their office requirements.</p>
                </div>
              </div>
               <div  className={styles.quizDiv} onClick={handleQuiz}>
                <div className={styles.quizTop} >
                <h4>How long does delivery take?</h4>
                 <div className='showIcon'>
                <MdAddCircle className={styles.add} fontSize='large'/>
                </div>
                </div>
                <div className={styles.quizBottom}>
                 <p>Delivery times depend on your location:</p>
        <h3>Nairobi</h3>
        <ul>
          <li>Same-day or next-day delivery may be available for eligible orders.</li>
          <li>Standard delivery typically takes 1–2 business days.</li>
        </ul>
        <h3>Outside Nairobi</h3>
        <ul>
          <li>Most deliveries take 2–5 business days.</li>
        </ul>
        <h3>Remote Areas</h3>
        <ul>
          <li>Delivery may take 4–7 business days depending on location.</li>
        </ul>
                 
                </div>
              </div>
              <div  className={styles.quizDiv} onClick={handleQuiz}>
                <div className={styles.quizTop}>
                <h4>Who can use OfficeFlow's office restock services?</h4>
                 <div className='showIcon'>
                <MdAddCircle className={styles.add} fontSize='large'/>
                </div>
                </div>
                <div className={styles.quizBottom}>
                 <p>Our services are ideal for <span>startups, SMEs, corporate offices, NGOs, schools, clinics, law firms, agencies, and coworking spaces</span> in Nairobi and across Kenya.</p>   
                </div>
              </div>
              <div className={styles.quizDiv} onClick={handleQuiz}>
                <div className={styles.quizTop} >
                <h4>Why should businesses choose OfficeFlow?</h4>
                 <div className='showIcon'>
                <MdAddCircle className={styles.add} fontSize='large'/>
                </div>
                </div>
                <div className={styles.quizBottom}>
                 <p>OfficeFlow helps businesses save time, reduce procurement stress, and avoid supply shortages through reliable workplace supply solutions.</p>     
                 <p>Whether you need a one-time order or a complete workplace restock system, OfficeFlow provides a reliable solution for keeping your business fully supplied.</p> 
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