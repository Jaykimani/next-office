"use client"

import { useEffect } from 'react';
import styles from './about.module.css'
import { MdCheck } from "react-icons/md";
import Link from 'next/link';

function About() {

      useEffect(()=>{
        window.scrollTo(0, 0);
    
    }, []);


    return (
        <>
        <div id={styles.about}>
        <h1 className={styles.aboutHeading}><span>About OfficeAura</span> – Office Interior Décor Solutions in Kenya</h1>
        <div className={styles.aboutContent}>
         <div className={styles.aboutContentSect}>
         <h2>Your One-Stop Shop for Office Interior Decoration</h2>
         <p><span>Office Aura</span> is a Kenyan-based online store specializing in office interior décor and workspace styling solutions. We help individuals, startups, and businesses across Kenya create beautiful, functional, and inspiring office spaces with ease.
         <br></br>From home offices to corporate workspaces, we provide everything you need to transform your office into a space that reflects professionalism, productivity, and style.</p>
        </div>  
        <div className={styles.aboutContentSect}>
        <h2>Who we are?</h2>
        <p><span>Office Aura</span> was founded with a simple idea:  To make office décor in Kenya easier to find, easier to choose, and easier to afford.<br></br>We noticed that many professionals struggled to source quality office décor, often needing to visit multiple stores or settle for limited options. Office Aura was created to bring office interior decoration solutions under one roof, accessible through a convenient online shopping experience.</p>
        </div> 
        <div className={styles.aboutContentSect}>
            <h2>What we offer?</h2>
            <p>We curate a wide range of office décor products in Kenya, carefully selected to suit modern workspaces, including:</p>
            <ul>
                <li>Desk accessories and organizers</li>
                <li>Wall art and motivational office décor</li>
                <li>Office lighting and accent décor</li>
                <li>Artificial plants and office greenery</li>
                <li>Ready-made office décor bundles and setups</li>
            </ul>
            <p>Our collections are designed for:</p>
            <ul>
                <li>Home offices</li>
                <li>Corporate offices</li>
                <li>Executive offices</li>
                <li>Reception and waiting areas</li>
                <li>Creative workspaces</li>
            </ul>
        </div>
        <div className={styles.aboutContentSect}>
            <h2>Office Interior Decor made SIMPLE!</h2>
            <p>At Office Aura, we go beyond selling products — we provide <span>office styling solutions</span>.<br></br>To make decorating easier, we:</p>
            <ul>
                <li>Organize products by office space and décor style</li>
                <li>Offer complete office décor bundles</li>
                <li>Share inspiration and practical guidance for workspace styling</li>
            </ul>
            <p>This approach helps our customers make confident decisions, save time, and achieve professional results without hiring an interior designer.</p>
        </div>
        <div className={styles.aboutContentSect}>
            <h2>Why choose OfficeAura?</h2>
            <ul className={styles.choiceList}>
                <li><MdCheck style={{color: 'rgb(81, 255, 0)', marginRight: '10px',width: '15px', height: '15px'}}/> Specialized in office interior décor</li>
                <li><MdCheck style={{color: 'rgb(81, 255, 0)', marginRight: '10px', width: '15px', height: '15px'}}/> Curated products designed for productivity and aesthetics</li>
                <li><MdCheck style={{color: 'rgb(81, 255, 0)', marginRight: '10px', width: '15px', height: '15px'}}/> Ideal for individuals, startups, SMEs, and corporate clients</li>
                <li><MdCheck style={{color: 'rgb(81, 255, 0)', marginRight: '10px', width: '15px', height: '15px'}}/> Affordable office décor options in Kenya</li>
                <li><MdCheck style={{color: 'rgb(81, 255, 0)', marginRight: '10px', width: '15px', height: '15px'}}/> Reliable delivery across Nairobi and other parts of Kenya</li>
            </ul>
            <p>Our focus is on creating workspaces that look good, feel comfortable, and support better performance.</p>
        </div>
        <div className={styles.aboutContentSect}>
            <h2>Our Vision</h2>
            <p>Our vision is to become a leading brand for office interior decoration in Kenya, known for quality, reliability, and inspiring workspace solutions.<br></br>
            As we grow, we aim to expand into full office styling services, corporate décor solutions, and workspace consultation.</p>

        </div>
        <div className={styles.aboutContentSect}>
            <h2>Our Commitment to Quality</h2>
            <p>Every product at Office Aura is selected with attention to design, functionality, and value. We work closely with trusted suppliers to ensure our customers receive décor that enhances their workspace and lasts.</p>

        </div>
        <div className={styles.aboutContentSect}>
            <h2>Transform Your Office Today!</h2>
            <p>Your workspace plays a major role in how you work and how your business is perceived.<br></br>Let Office Aura help you create an office environment that inspires confidence and productivity.</p>
            <Link href={'/shop'}>
            <p style={{color: '#ffe100', fontStyle: 'italic'}}>Browse our office décor collections and transform your workspace today</p>
            </Link>
        </div>
        </div>
        </div>
        </>
    )
    
}

export default About;