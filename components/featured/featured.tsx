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
            <h1>Why Choose officeflow Kenya?</h1>
            <p>OfficeFlow Kenya provides reliable office supply and restock services for businesses across Kenya, helping workplaces stay fully stocked and productive. We simplify office procurement by supplying and restocking essential workplace items including stationery, printing paper, pantry supplies, cleaning products, and IT consumables through convenient delivery solutions. Whether you're a startup, SME, NGO, or corporate office, our customized restock services help reduce procurement time, prevent supply shortages, and keep your operations running smoothly. For businesses looking for dependable office supplies in Nairobi and professional workplace support throughout Kenya, OfficeFlow is your trusted office restock partner.</p>
            
          </div>
          </div>
          <div className={styles.choice2}>
          <div className={styles.choiceInset}>
            <h1>Why Choose OfficeFlow Kenya?</h1>
            <p>OfficeFlow Kenya helps businesses across Kenya stay fully stocked with essential workplace supplies through reliable office restock services. From stationery and printing paper to pantry, cleaning, and IT consumables, we simplify procurement, prevent supply shortages, and keep your workplace running smoothly with convenient delivery solutions.</p>
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