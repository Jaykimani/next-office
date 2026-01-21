"use client";
import styles from './quiz.module.css'
import Image from 'next/image';
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
            <div className={styles.quizImg}>
              <Image className={styles.quizImage} src="/quiz.jpg" alt=""  width={500} height={500}/>
            </div>
            <div className={styles.quizInset}>
              <h1>Frequently Asked Questions(FAQs)</h1>
              <div className={styles.quizDiv} onClick={handleQuiz}>
                <div className={styles.quizTop} >
                <h4>What types of office decor and accessories do you sell?</h4>
                <div className='showIcon'>
                <MdAddCircle className={styles.add} fontSize='large'/>
                </div>
                </div>
                <div className={styles.quizBottom}>
                 <p>We offer a wide range of modern office decor and accessories, including office desk accessories, stylish desk organizers, wall art, LED desk lamps, office accents like bean bags and carpets, office plants and greenery and more. Whether you’re looking to enhance productivity or add a touch of elegance to your workspace, we have the perfect items for you.</p>
                </div>
              </div>
              <div className={styles.quizDiv} onClick={handleQuiz}>
                <div className={styles.quizTop}>
                <h4>Do you offer fast shipping on office decor and accessories?</h4>
                 <div className='showIcon'>
                <MdAddCircle className={styles.add} fontSize='large'/>
                </div>              
                </div>
                <div className={styles.quizBottom}>
                 <p>Yes! We provide fast and reliable shipping so you can upgrade your workspace without delays. Our shipping partners ensure quick delivery, and most orders arrive within [X] business days. You can track your order in real-time for added convenience.</p>
                </div>
              </div>
              <div  className={styles.quizDiv} onClick={handleQuiz}>
                <div className={styles.quizTop}>
                <h4>Do you offer discounts on bulk office decor purchases?</h4>
                <div className='showIcon'>
                <MdAddCircle className={styles.add} fontSize='large'/>
                </div>                </div>
                <div className={styles.quizBottom}>
                 <p>Absolutely! We provide bulk discounts for businesses, home offices, and co-working spaces. If you're furnishing an entire office, contact us for special pricing and exclusive deals on large orders.</p>
                </div>
              </div>
              <div  className={styles.quizDiv} onClick={handleQuiz}>
                <div className={styles.quizTop} >
                <h4>How can I choose the right office decor for my workspace?</h4>
                 <div className='showIcon'>
                <MdAddCircle className={styles.add} fontSize='large'/>
                </div>
                </div>
                <div className={styles.quizBottom}>
                 <p>Choosing the right office decor depends on your style, space, and work needs. Consider factors like ergonomics, lighting, color psychology, and storage solutions. Our blog offers expert tips on office design trends and how to create a productive work environment.</p>
                </div>
              </div>
              <div  className={styles.quizDiv} onClick={handleQuiz}>
                <div className={styles.quizTop}>
                <h4>What is your return policy for office furniture and accessories?</h4>
                 <div className='showIcon'>
                <MdAddCircle className={styles.add} fontSize='large'/>
                </div>
                </div>
                <div className={styles.quizBottom}>
                 <p>We want you to love your purchase! If you’re not completely satisfied, we offer a hassle-free return policy within [X] days of delivery. To learn more about our return policy, click here.</p>
                </div>
              </div>
              <div className={styles.quizDiv} onClick={handleQuiz}>
                <div className={styles.quizTop} >
                <h4>Do you offer eco-friendly office decor options?</h4>
                 <div className='showIcon'>
                <MdAddCircle className={styles.add} fontSize='large'/>
                </div>
                </div>
                <div className={styles.quizBottom}>
                 <p>Yes! We care about sustainability and offer a selection of eco-friendly office decor made from recycled materials, bamboo, and sustainable wood. Browse our green office solutions to create a stylish and environmentally friendly workspace.</p>
                </div>
              </div>
              <div  className={styles.quizDiv} onClick={handleQuiz}>
                <div className={styles.quizTop} >
                <h4>How can I stay updated on new office decor trends and promotions?</h4>
                 <div className='showIcon'>
                <MdAddCircle className={styles.add} fontSize='large'/>
                </div>
                </div>
                <div className={styles.quizBottom}>
                 <p>Follow us on [social media links] to receive daily inspiration and workspace ideas as well as updates on the latest office decor trends, exclusive discounts, and special promotions.</p>
                </div>
              </div>
            </div>
        </div>

        <div className={styles.quote}>
         <h1>TRANSFORM YOUR WORKSPACE</h1>
        </div>
        </>
  )
}

export default Quiz