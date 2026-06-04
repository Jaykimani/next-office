"use client";
import styles from './quiztwo.module.css'
import { MdAddCircle } from "react-icons/md";


const Quiz2 = () => {
  

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
              <h1>Frequently Asked Questions(FAQs) About OfficeFlow Nairobi</h1>
              <div className={styles.quizDiv} onClick={handleQuiz}>
                <div className={styles.quizTop} >
                <h4>Do you deliver office supplies to all areas of Nairobi?</h4>
                <div className='showIcon'>
                <MdAddCircle className={styles.add} fontSize='large'/>
                </div>
                </div>
                <div className={styles.quizBottom}>
                 <p>Yes. OfficeFlow delivers office supplies across Nairobi, including CBD, Westlands, Upper Hill, Kilimani, Karen, Lavington, Gigiri, Industrial Area, Parklands, and other business districts. If your office is located within Nairobi, we can arrange delivery directly to your workplace.</p>
                </div>
              </div>
              <div className={styles.quizDiv} onClick={handleQuiz}>
              <div className={styles.quizTop} >
                <h4>Can businesses in Nairobi order office supplies without a restock plan?</h4>
                <div className='showIcon'>
                <MdAddCircle className={styles.add} fontSize='large'/>
                </div>
                </div>
                <div className={styles.quizBottom}>
                 <p>Absolutely. Businesses can place one-time orders for office supplies whenever needed. Whether you need printing paper, stationery, pantry items, cleaning supplies, or workplace essentials, OfficeFlow allows you to order as required without committing to a recurring restock plan.</p>
                </div>
              </div>
              <div className={styles.quizDiv} onClick={handleQuiz}>
                <div className={styles.quizTop}>
                <h4>How quickly can office supplies be delivered in Nairobi?</h4>
                 <div className='showIcon'>
                <MdAddCircle className={styles.add} fontSize='large'/>
                </div>              
                </div>
                <div className={styles.quizBottom}>
                 <p>Most Nairobi orders are delivered within 1–2 business days, depending on product availability and order size. For urgent requirements, our team can advise on the fastest available delivery options.</p>
                </div>
              </div>
              <div  className={styles.quizDiv} onClick={handleQuiz}>
                <div className={styles.quizTop}>
                <h4>Do you supply office essentials for large businesses and corporate offices in Nairobi?</h4>
                <div className='showIcon'>
                <MdAddCircle className={styles.add} fontSize='large'/>
                </div>                </div>
                <div className={styles.quizBottom}>
                 <p>Yes. OfficeFlow supplies office essentials for businesses of all sizes, including SMEs, startups, NGOs, schools, clinics, and corporate offices. We can support both routine office supply needs and larger bulk orders for growing organizations in Nairobi.</p>
                </div>
              </div>
              <div  className={styles.quizDiv} onClick={handleQuiz}>
                <div className={styles.quizTop} >
                <h4>What office supplies are most commonly ordered by Nairobi businesses?</h4>
                 <div className='showIcon'>
                <MdAddCircle className={styles.add} fontSize='large'/>
                </div>
                </div>
                <div className={styles.quizBottom}>
                 <p>Many Nairobi businesses regularly order A4 printing paper, notebooks, pens, envelopes, printer cartridges, pantry supplies, tissue paper, cleaning products, and other workplace essentials. OfficeFlow helps businesses keep these frequently used items readily available through convenient ordering and delivery services.</p>
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

export default Quiz2