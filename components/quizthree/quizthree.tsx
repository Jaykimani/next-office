"use client";
import styles from './quizthree.module.css'
import { MdAddCircle } from "react-icons/md";


const Quiz3 = () => {
  

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
              <h1>Frequently Asked Questions(FAQs)</h1>
              <div className={styles.quizDiv} onClick={handleQuiz}>
                <div className={styles.quizTop} >
                <h4>What is an OfficeFlow Business Account?</h4>
                <div className='showIcon'>
                <MdAddCircle className={styles.add} fontSize='large'/>
                </div>
                </div>
                <div className={styles.quizBottom}>
                 <p>An OfficeFlow Business Account is designed for businesses and organizations that regularly purchase office supplies. It makes it easier to manage your workplace supply needs, place repeat orders, track purchases, and work with OfficeFlow for ongoing office restocking.</p>
                </div>
              </div>
              <div className={styles.quizDiv} onClick={handleQuiz}>
              <div className={styles.quizTop} >
                <h4>What are the benefits of an OfficeFlow Business Account?</h4>
                <div className='showIcon'>
                <MdAddCircle className={styles.add} fontSize='large'/>
                </div>
                </div>
                <div className={styles.quizBottom}>
                 <p>An OfficeFlow Business Account helps simplify office procurement by making repeat ordering easier, keeping your business information organized, providing visibility into office supply expenditure, and giving your business access to ongoing restocking support.</p>
                </div>
              </div>
              <div className={styles.quizDiv} onClick={handleQuiz}>
                <div className={styles.quizTop}>
                <h4>Can my business order office supplies online through OfficeFlow?</h4>
                 <div className='showIcon'>
                <MdAddCircle className={styles.add} fontSize='large'/>
                </div>              
                </div>
                <div className={styles.quizBottom}>
                 <p>Yes. Businesses can use OfficeFlow to source and order a wide range of workplace essentials, including stationery, printing and paper supplies, pantry and hydration products, cleaning supplies, IT consumables, and other office essentials.</p>
                </div>
              </div>
              <div  className={styles.quizDiv} onClick={handleQuiz}>
                <div className={styles.quizTop}>
                <h4>Can OfficeFlow help my business with regular office restocking?</h4>
                <div className='showIcon'>
                <MdAddCircle className={styles.add} fontSize='large'/>
                </div>                </div>
                <div className={styles.quizBottom}>
                 <p>Yes. OfficeFlow provides office restocking solutions for businesses that need supplies on a recurring basis. Depending on your requirements, you can arrange scheduled or recurring restocking to help prevent essential workplace supplies from running out.</p>
                </div>
              </div>
              <div  className={styles.quizDiv} onClick={handleQuiz}>
                <div className={styles.quizTop} >
                <h4>Can I track my business's office supply expenditure?</h4>
                 <div className='showIcon'>
                <MdAddCircle className={styles.add} fontSize='large'/>
                </div>
                </div>
                <div className={styles.quizBottom}>
                 <p>Yes. Business account features can provide visibility into your office supply purchases and expenditure, helping you understand how much your business spends across different supply categories and make better procurement decisions.</p>
                </div>
              </div>
              <div  className={styles.quizDiv} onClick={handleQuiz}>
                <div className={styles.quizTop} >
                <h4>Who can create an OfficeFlow Business Account?</h4>
                 <div className='showIcon'>
                <MdAddCircle className={styles.add} fontSize='large'/>
                </div>
                </div>
                <div className={styles.quizBottom}>
                 <p>OfficeFlow Business Accounts are suitable for a wide range of organizations, including SMEs, startups, corporate offices, NGOs, law firms, agencies, clinics, schools, coworking spaces, and other professional workplaces.</p>
                </div>
              </div>
              <div  className={styles.quizDiv} onClick={handleQuiz}>
                <div className={styles.quizTop} >
                <h4>Does OfficeFlow provide office supplies in Nairobi and across Kenya?</h4>
                 <div className='showIcon'>
                <MdAddCircle className={styles.add} fontSize='large'/>
                </div>
                </div>
                <div className={styles.quizBottom}>
                 <p>OfficeFlow primarily serves businesses in Nairobi and can support businesses in other parts of Kenya depending on their location, product requirements, and delivery needs. Our goal is to make sourcing workplace supplies easier for businesses across Kenya.</p>
                </div>
              </div>
              <div  className={styles.quizDiv} onClick={handleQuiz}>
                <div className={styles.quizTop} >
                <h4>How do I create an OfficeFlow Business Account?</h4>
                 <div className='showIcon'>
                <MdAddCircle className={styles.add} fontSize='large'/>
                </div>
                </div>
                <div className={styles.quizBottom}>
                 <p>To create an OfficeFlow Business Account, submit your business details through the Business Account registration form. Provide your contact information, business location, and office supply requirements, and the OfficeFlow team can review your request and help you get started.</p>
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

export default Quiz3