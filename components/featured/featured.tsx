import styles from './featured.module.css';
import Image from 'next/image';
import { MdArrowForward } from "react-icons/md";
import Link from 'next/link';

const Featured = () => {
  return (
    <>
        <div id={styles.featured}>
            <div className={styles.featureInset}>
                <h4>Our Shop</h4>
                <div className={styles.featureOptions1}>
                    <div className={styles.featureOpt1}>
                      <div className={styles.optImg}> 
                      <Image className={styles.optImgImg} src="/accessories3.jpg" alt="office wall accessories" width={500} height={500}/>
                      </div>
                        <div className={styles.optDiv}>
                        <h3>Office Workspace Accessories</h3>
                        <div>
                          <Link href={'/shop/office-workspace-accessories/office-ergonomic-comfort-accessories'} style={{textDecoration: "none", color: "white"}}>
                          <p>Ergonomic & Comfort Accessories</p>
                          </Link>
                          <Link href={'/shop/office-workspace-accessories/office-desk-essentials-utility-tools'} style={{textDecoration: "none", color: "white"}}>
                          <p>Desk Essentials & Utility Tools</p>
                          </Link>
                          <Link href={'/shop/office-workspace-accessories/office-productivity-writing-tools'} style={{textDecoration: "none", color: "white"}}>
                          <p>Productivity & Writing Tools</p>
                          </Link>
                          
                        </div>
                         <Link className={styles.featuredLink} href={'/shop/office-workspace-accessories'} style={{textDecoration: 'none'}}>
                        <div>SHOP ALL</div>
                        </Link>
                        </div>
                    </div> 
                    <div className={styles.featureOpt1}>
                       <div className={styles.optImg}> 
                      <Image className={styles.optImgImg} src="/lighting2.jpg" alt="office accent accessories" width={500} height={500}/>
                      </div>
                        <div className={styles.optDiv}>
                        <h3>Office Electronics Solutions</h3>
                       <div>
                        <Link href={'/shop/office-electronics/office-charging-power-accessories'} style={{textDecoration: "none", color: "white"}}>
                        <p>Office Charging & Power Accessories</p>
                        </Link>
                        <Link href={'/shop/office-electronics/office-computer-accessories'} style={{textDecoration: "none", color: "white"}}>
                        <p>Office Computer Accessories</p>
                        </Link>
                        <Link href={'/shop/office-electronics/office-cable-management-tech'} style={{textDecoration: "none", color: "white"}}>
                        <p>Office Cable Management Tech</p>
                        </Link>
                          
                        </div>
                         <Link className={styles.featuredLink} href={'/shop/office-electronics'} style={{textDecoration: 'none'}}>
                        <div>SHOP ALL</div>
                        </Link>
                        </div>
                     
                    </div>
                </div>
                <div className={styles.featureOptions2}>
                    <div className={styles.featureOpt} style={{height: '440px'}}>
                      <div className={styles.optImg} style={{height: '370px'}}> 
                         <Image className={styles.optImgPhone} src="/wall3.jpg" alt="office wall accessories" width={500} height={500} />
                         <div className={styles.optInfo}>
                         <h4> Office Workspace Accessories</h4>
                         <div>
                          <Link href={'/shop/office-workspace-accessories/office-ergonomic-comfort-accessories'} style={{textDecoration: "none", color: "white"}}>
                          <p>Ergonomic & Comfort Accessories</p>
                          </Link>
                          <Link href={'/shop/office-workspace-accessories/office-desk-essentials-utility-tools'} style={{textDecoration: "none", color: "white"}}>
                          <p>Desk Essentials & Utility Tools</p>
                          </Link>
                          <Link href={'/shop/office-workspace-accessories/office-productivity-writing-tools'} style={{textDecoration: "none", color: "white"}}>
                          <p>Productivity & Writing Tools</p>
                          </Link>
                          
                        </div>
                         
                          </div>
                      </div>
                     <Link href={'/shop/office-workspace-accessories'} style={{textDecoration: 'none', color: 'black'}}>
                       <div className={styles.optBtn}>
                        <p>SHOP ALL</p>
                      </div>
                      </Link>
                    </div>
                    <div className={styles.featureOpt} style={{height: '440px'}}>
                      <div className={styles.optImg} style={{height: '370px'}}> 
                         <Image className={styles.optImgPhone} src="/greenery.jpg" alt="office plants and greenery solutions" width={500} height={500}/>
                          <div className={styles.optInfo}>
                         <h4>Office Electronic Solutions</h4>
                        <div>
                        <Link href={'/shop/office-electronics/office-charging-power-accessories'} style={{textDecoration: "none", color: "white"}}>
                        <p>Office Charging & Power Accessories</p>
                        </Link>
                        <Link href={'/shop/office-electronics/office-computer-accessories'} style={{textDecoration: "none", color: "white"}}>
                        <p>Office Computer Accessories</p>
                        </Link>
                        <Link href={'/shop/office-electronics/office-cable-management-tech'} style={{textDecoration: "none", color: "white"}}>
                        <p>Office Cable Management Tech</p>
                        </Link>
                          
                        </div>
                          </div>
                      </div>
                    <Link href={'/shop/office-electronics'} style={{textDecoration: 'none', color: 'black'}}>
                       <div className={styles.optBtn}>
                        <p>SHOP ALL</p>
                      </div>
                      </Link>
                    </div>

                </div>
            </div>
        </div>

        <div id={styles.choice}>
          <div className={styles.choice1}>
            <div className={styles.choiceInset}>
            <h1>Why Choose Office Aura Kenya?</h1>
            <p>Office Aura Kenya is your trusted partner for modern workspace solutions, offering professional office restock services, employee workspace kits, and event fulfillment packs for businesses, startups, and corporate teams across Kenya. From branded onboarding kits and productivity-focused workspace essentials to curated seminar and conference packs, we help businesses create organized, professional, and engaging workplace experiences. Whether you need recurring office supplies in Nairobi, customized employee experience kits, or fully branded corporate event packs in Kenya, Office Aura delivers reliable service, modern presentation, fast delivery, convenient M-Pesa payment options, and responsive WhatsApp support to help your team stay productive, prepared, and professionally equipped.</p>
            
          </div>
          </div>
          <div className={styles.choice2}>
          <div className={styles.choiceInset}>
            <h1>Why Choose Office Aura Kenya?</h1>
            <p>Office Aura Kenya provides modern workspace solutions for businesses and professionals through office restock services, employee workspace kits, and event fulfillment packs. From branded onboarding kits to recurring office essentials and corporate event packs, we help teams stay productive, organized, and professionally equipped across Kenya.</p>
          </div>
          </div>
          
        </div>

        <div id={styles.proof}>
          <div className={styles.proofInset}>
            <div className={styles.proofTitle}>
             <p>Exceptional Customer Service</p>
            </div>
            <div className={styles.proofImg}>
             <Image className={styles.proofImgImg} src="/customer2.jpg" alt="customer service" width={500} height={500}/>
            </div>
            <div className={styles.proofDesc}>
              <p>Our friendly and knowledgeable support team is always ready to assist you.</p>
            </div>

          </div>
          <div className={styles.proofInset}>
            <div className={styles.proofTitle}>
             <p>On-time, Every time.</p>
            </div>
            <div className={styles.proofImg}>
             <Image className={styles.proofImgImg} src="/shipping.jpg" alt="fast shipping" width={500} height={500}/>
            </div>
            <div className={styles.proofDesc}>
              <p>Experience smooth and reliable delivery, prioritizing speed, safety, and consistency.</p>
            </div>

          </div>
          <div className={styles.proofInset}>
            <div className={styles.proofTitle}>
             <p>Quality Assured</p>
            </div>
            <div className={styles.proofImg}>
             <Image className={styles.proofImgImg} src="/quality.jpg" alt="competitive pricing" width={500} height={500}/>
            </div>
            <div className={styles.proofDesc}>
              <p>It's simple: uncompromising quality and service you can trust.</p>
            </div>

          </div>


        </div>
        </>
  )
}

export default Featured;