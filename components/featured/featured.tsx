import styles from './featured.module.css';
import Image from 'next/image';
import { MdArrowForward } from "react-icons/md";
import Link from 'next/link';

const Featured = () => {
  return (
    <>
        <div id={styles.featured}>
            <div className={styles.featureInset}>
                <h4>Featured</h4>
                <div className={styles.featureOptions1}>
                <div className={styles.featureOpt1}>
                      <div className={styles.optImg}> 
                        <Image className={styles.optImgImg} src="/wall3.jpg" alt="office aura image" width={500} height={500}/>
                      </div>
                        <div className={styles.optDiv}>
                        <h3>Office Interior Décor</h3>
                        <div>
                          <p>Office Desk & Shelf Décor</p>
                          <p>Office Ambient Lighting & Decorative Lights</p>
                          <p>Office Wall Décor & Accessories</p>
                          <p>Office Personalized & Statement Décor</p>
                        </div>
                         
                        <Link className={styles.featuredLink} href={'/shop/office-interior-decor'} style={{textDecoration: 'none'}}>
                        <div>SHOP NOW</div>
                        </Link>
                        </div>
                    </div>
                    <div className={styles.featureOpt1}>
                      <div className={styles.optImg}> 
                      <Image className={styles.optImgImg} src="/greenery.jpg" alt="office lighting solutions" width={500} height={500}/>
                      </div>
                        <div className={styles.optDiv}>
                        <h3>Office Greenery</h3>
                        <div>
                          <p>Office Desk Greenery</p>
                          <p>Office Statement Greenery</p>
                          <p>Office Greenery Sets & Styled Combos</p>
                        </div>
                         <Link className={styles.featuredLink} href={'/shop/office-greenery'} style={{textDecoration: 'none'}}>
                        <div>SHOP NOW</div>
                        </Link>
                        </div>
                      
                      
                    </div>
                    <div className={styles.featureOpt1}>
                      <div className={styles.optImg}> 
                      <Image className={styles.optImgImg} src="/accessories2.jpg" alt="office wall accessories" width={500} height={500}/>
                      </div>
                        <div className={styles.optDiv}>
                        <h3>Workspace Accessories</h3>
                        <div>
                          <p>Ergonomic & Comfort Accessories</p>
                          <p>Desk Essentials & Utility Tools</p>
                          <p>Productivity & Writing Tools</p>
                          <p>Office Desk Organizers & Storage</p>
                        </div>
                         <Link className={styles.featuredLink} href={'/shop/office-workspace-accessories'} style={{textDecoration: 'none'}}>
                        <div>SHOP NOW</div>
                        </Link>
                        </div>
                    </div> 
                    <div className={styles.featureOpt1}>
                       <div className={styles.optImg}> 
                      <Image className={styles.optImgImg} src="/lighting2.jpg" alt="office accent accessories" width={500} height={500}/>
                      </div>
                        <div className={styles.optDiv}>
                        <h3>Office Electronics</h3>
                       <div>
                          <p>Office Charging & Power Accessories</p>
                          <p>Office Computer Accessories</p>
                          <p>Office Cable Management Tech</p>
                        </div>
                         <Link className={styles.featuredLink} href={'/shop/office-electronics'} style={{textDecoration: 'none'}}>
                        <div>SHOP NOW</div>
                        </Link>
                        </div>
                     
                    </div>
                </div>
                <div className={styles.featureOptions2}>
                    <div className={styles.featureOpt}>
                      <div className={styles.optImg}> 
                         <Image className={styles.optImgPhone} src="/decor.jpg" alt="office desk accessories" width={500} height={500} />
                         <div className={styles.optInfo}>
                           <h4>Office Interior Décor</h4>
                           <ul>
                          <li>Office Desk & Shelf Décor</li>
                          <li>Office Ambient Lighting & Decorative Lights</li>
                          <li>Office Wall Décor & Accessories</li>
                          <li>Office Personalized & Statement Décor</li> 
                           </ul>
                          
                         </div>
                         
                      </div>
                      <Link href={'/shop/office-interior-decor'} style={{textDecoration: 'none', color: 'black'}}>
                       <div className={styles.optBtn}>
                        <p>SHOP NOW</p>
                      </div>
                      </Link>
                    </div>
                    <div className={styles.featureOpt}>
                      <div className={styles.optImg}> 
                         <Image className={styles.optImgPhone} src="/lighting.jpg" alt="office lighting solutions" width={500} height={500}/>
                         <div className={styles.optInfo}>
                           <h4>Office Greenery</h4>
                           <ul>
                           <li>Office Desk Greenery</li>
                          <li>Office Statement Greenery</li>
                          <li>Office Greenery Sets & Styled Combos</li>
                           </ul>
                         

                         </div>
                      </div>
                     <Link href={'/shop/office-greenery'} style={{textDecoration: 'none', color: 'black'}}>
                       <div className={styles.optBtn}>
                        <p>SHOP NOW</p>
                      </div>
                      </Link>
                    </div>
                    <div className={styles.featureOpt}>
                      <div className={styles.optImg}> 
                         <Image className={styles.optImgPhone} src="/wall3.jpg" alt="office wall accessories" width={500} height={500} />
                         <div className={styles.optInfo}>
                         <h4>Workspace Accessories</h4>
                         <ul>
                          <li>Ergonomic & Comfort Accessories</li>
                          <li>Desk Essentials & Utility Tools</li>
                          <li>Productivity & Writing Tools</li>
                          <li>Office Desk Organizers & Storage</li>
                         </ul>
                         
                          </div>
                      </div>
                     <Link href={'/shop/office-workspace-accessories'} style={{textDecoration: 'none', color: 'black'}}>
                       <div className={styles.optBtn}>
                        <p>SHOP NOW</p>
                      </div>
                      </Link>
                    </div>
                    <div className={styles.featureOpt}>
                      <div className={styles.optImg}> 
                         <Image className={styles.optImgPhone} src="/greenery.jpg" alt="office plants and greenery solutions" width={500} height={500}/>
                          <div className={styles.optInfo}>
                         <h4>Office Electronics</h4>
                         <ul>
                          <li>Office Charging & Power Accessories</li>
                          <li>Office Computer Accessories</li>
                          <li>Office Cable Management Tech</li>
                         </ul>
                          </div>
                      </div>
                    <Link href={'/shop/category/office-electronics'} style={{textDecoration: 'none', color: 'black'}}>
                       <div className={styles.optBtn}>
                        <p>SHOP NOW</p>
                      </div>
                      </Link>
                    </div>

                </div>
            </div>
        </div>

        <div id={styles.choice}>
          <div className={styles.choiceInset}>
            <h1>Why Choose Us?</h1>
            <p>At Office<span>Aura</span> KENYA, we believe that your office should be a reflection of your style, productivity, and professionalism. That's why we offer high-quality office décor and handpicked office accessories that transform any office space into a professional and inspiring environment. With exceptional customer service, fast shipping and competitive pricing, we make upgrading your workspace effortless. Shop now and create an office that works for you!</p>
            <Link href={'/shop'} style={{textDecoration: 'none', color: 'black'}}>
            <div className={styles.choiceBtn}>
              <p>VISIT SHOP</p>
              <MdArrowForward style={{width: '40px', height: '40px'}}/>
            </div>
            </Link>
          </div>
        </div>

        <div id={styles.proof}>
          <div className={styles.proofInset}>
            <div className={styles.proofTitle}>
             <p>Exceptional Customer Service</p>
            </div>
            <div className={styles.proofImg}>
             <Image className={styles.proofImgImg} src="/customer.jpg" alt="customer service" width={500} height={500}/>
            </div>
            <div className={styles.proofDesc}>
              <p>Our friendly and knowledgeable support team is always ready to assist you.</p>
            </div>

          </div>
          <div className={styles.proofInset}>
            <div className={styles.proofTitle}>
             <p>Reliably Fast Delivery</p>
            </div>
            <div className={styles.proofImg}>
             <Image className={styles.proofImgImg} src="/shipping.jpg" alt="fast shipping" width={500} height={500}/>
            </div>
            <div className={styles.proofDesc}>
              <p>Time is valuable. We strive to deliver your orders as quickly as possible.</p>
            </div>

          </div>
          <div className={styles.proofInset}>
            <div className={styles.proofTitle}>
             <p>Competitive Pricing</p>
            </div>
            <div className={styles.proofImg}>
             <Image className={styles.proofImgImg} src="/pricing.jpg" alt="competitive pricing" width={500} height={500}/>
            </div>
            <div className={styles.proofDesc}>
              <p>Transforming you office space doesn't have to cost a fortune!</p>
            </div>

          </div>


        </div>
        </>
  )
}

export default Featured;