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
                <h4>What is Office Aura?</h4>
                <div className='showIcon'>
                <MdAddCircle className={styles.add} fontSize='large'/>
                </div>
                </div>
                <div className={styles.quizBottom}>
                 <p><span>Office Aura</span> is a Kenyan online store that specializes in <span>office décor, desk accessories, workspace tools, and productivity essentials</span> designed to help professionals create stylish and efficient workspaces. Whether you are setting up a <span>corporate office, startup workspace, or home office</span> in Kenya, Office Aura offers curated products that improve organization, comfort, and workspace aesthetics.</p>
                </div>
              </div>
              <div className={styles.quizDiv} onClick={handleQuiz}>
                <div className={styles.quizTop}>
                <h4>What products can I buy from Office Aura?</h4>
                 <div className='showIcon'>
                <MdAddCircle className={styles.add} fontSize='large'/>
                </div>              
                </div>
                <div className={styles.quizBottom}>
                 <p>Office Aura offers a wide range of <span>office accessories and workspace upgrades</span>, including:</p>
                 <ul>
                  <li>Desk organizers and storage solutions</li>
                  <li>Office wall art and posters</li>
                  <li>Artificial office plants and greenery</li>
                  <li>Desk lighting and ambient workspace lights</li>
                  <li>Productivity tools like planners and notebooks</li>
                  <li>Ergonomic comfort accessories</li>
                 </ul>
                 <p>All products are carefully selected to help professionals in Kenya create <span>modern, functional, and inspiring workspaces.</span></p>
                </div>
              </div>
              <div  className={styles.quizDiv} onClick={handleQuiz}>
                <div className={styles.quizTop}>
                <h4>Do you deliver office accessories across Kenya?</h4>
                <div className='showIcon'>
                <MdAddCircle className={styles.add} fontSize='large'/>
                </div>                </div>
                <div className={styles.quizBottom}>
                 <p>Yes. <span>Office Aura delivers office décor and workspace accessories across Kenya.</span></p>
                 <p>Our primary delivery area is <span>Nairobi</span>, where orders are fulfilled quickly. We also ship to other towns and cities across the country so professionals everywhere can upgrade their <span>home office or workplace setup.</span></p>
                 <p>Delivery times and options may vary depending on your location.</p>
                </div>
              </div>
              <div  className={styles.quizDiv} onClick={handleQuiz}>
                <div className={styles.quizTop} >
                <h4>Who are Office Aura products designed for?</h4>
                 <div className='showIcon'>
                <MdAddCircle className={styles.add} fontSize='large'/>
                </div>
                </div>
                <div className={styles.quizBottom}>
                 <p>Office Aura products are designed for anyone looking to improve their workspace, including:</p>
                 <ul>
                  <li>Corporate offices</li>
                  <li>Startups and small businesses</li>
                  <li>Remote workers and freelancers</li>
                  <li>Students setting up study desks</li>
                  <li>Professionals upgrading their home office</li>
                 </ul>
                 <p>Our goal is to make it easy for people in Kenya to <span>build productive and aesthetically pleasing workspaces.</span></p>
                </div>
              </div>
              <div  className={styles.quizDiv} onClick={handleQuiz}>
                <div className={styles.quizTop}>
                <h4>How can Office Aura help improve my workspace?</h4>
                 <div className='showIcon'>
                <MdAddCircle className={styles.add} fontSize='large'/>
                </div>
                </div>
                <div className={styles.quizBottom}>
                 <p>Office Aura focuses on products that <span>enhance productivity, organization, and workspace comfort</span>. Our desk accessories, organizers, and décor solutions help you:</p>
                 <ul>
                  <li>Reduce desk clutter</li>
                  <li>Stay organized and focused</li>
                  <li>Improve workspace aesthetics</li>
                  <li>Create a comfortable and inspiring work environment</li>
                 </ul>
                 <p>A well-designed workspace can help boost <span>focus, creativity, and daily productivity.</span></p>
                </div>
              </div>
              <div className={styles.quizDiv} onClick={handleQuiz}>
                <div className={styles.quizTop} >
                <h4>Can I create a complete desk setup using Office Aura products?</h4>
                 <div className='showIcon'>
                <MdAddCircle className={styles.add} fontSize='large'/>
                </div>
                </div>
                <div className={styles.quizBottom}>
                 <p>Yes. Office Aura offers a variety of products that allow you to build a <span>complete desk setup</span>, including:</p>
                 <ul>
                  <li>Desk organizers and storage tools</li>
                  <li>Productivity planners and writing tools</li>
                  <li>Desk lighting and accessories</li>
                  <li>Office décor and wall art</li>
                  <li>Workspace greenery</li>
                 </ul>
                 <p>You can mix and match products to create a <span>modern desk setup tailored to your style and workflow.</span></p>
                </div>
              </div>
              <div  className={styles.quizDiv} onClick={handleQuiz}>
                <div className={styles.quizTop} >
                <h4>What makes Office Aura different from other office accessory stores in Kenya?</h4>
                 <div className='showIcon'>
                <MdAddCircle className={styles.add} fontSize='large'/>
                </div>
                </div>
                <div className={styles.quizBottom}>
                 <p>Office Aura focuses on <span>curated workspace solutions rather than random office supplies</span>. Our store is designed to help customers easily find products that improve both <span>workspace productivity and aesthetics.</span></p>
                 <p>We focus on:</p>
                 <ul>
                  <li>Modern office décor and accessories</li>
                  <li>Practical desk organization tools</li>
                  <li>Workspace upgrades for professionals in Kenya</li>
                  <li>Curated products that work well together</li>
                 </ul>
                 <p>This approach makes it easier to build a <span>clean, organized, and inspiring workspace.</span></p>
                </div>
              </div>
                   <div  className={styles.quizDiv} onClick={handleQuiz}>
                <div className={styles.quizTop} >
                <h4>How do I choose the right office accessories for my desk?</h4>
                 <div className='showIcon'>
                <MdAddCircle className={styles.add} fontSize='large'/>
                </div>
                </div>
                <div className={styles.quizBottom}>
                 <p>When selecting office accessories, consider the following:</p>
                 <ul>
                  <li><span>Organization</span>: Use desk organizers and storage tools to reduce clutter.</li>
                  <li><span>Productivity</span>: Add planners, notebooks, and writing tools.</li>
                  <li><span>Comfort</span>: Include ergonomic accessories like wrist rests or laptop stands.</li>
                  <li><span>Aesthetics</span>: Use wall art, desk décor, and plants to personalize your workspace.</li>
                 </ul>
                 <p>This approach makes it easier to build a <span>clean, organized, and inspiring workspace.</span></p>
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