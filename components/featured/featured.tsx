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
                        <Image className={styles.optImgImg} src="/accessories2.jpg" alt="office aura image" width={500} height={500}/>
                      </div>
                        <div className={styles.optDiv}>
                        <h3>Office Desk Accessories</h3>
                        <ul>
                          <li>Desk Organizers</li>
                          <li>Productivity & Writing tools</li>
                          <li>Ergonomics & Comfort Accessories</li>
                          <li>Aesthetics & Personalized Items</li>
                          <li>Office Desk Gadgets & Mats</li>
                        </ul>
                        <Link className={styles.featuredLink} href={'/shop/category/accessories'} style={{textDecoration: 'none'}}>
                        <div>SHOP NOW</div>
                        </Link>
                        </div>
                    </div>
                    <div className={styles.featureOpt1}>
                        <div className={styles.optDiv}>
                        <h3>Office Lighting Solutions</h3>
                        <ul>
                          <li>Desk Lamps</li>
                          <li>Overhead fixtures</li>
                          <li>Wall-mounted fixtures</li>
                          <li>Stand-alone fixtures</li>
                        </ul>
                         <Link className={styles.featuredLink} href={'/shop/category/lighting-solutions'} style={{textDecoration: 'none'}}>
                        <div>SHOP NOW</div>
                        </Link>
                        </div>
                      
                      <div className={styles.optImg}> 
                      <Image className={styles.optImgImg} src="/lighting.jpg" alt="office lighting solutions" width={500} height={500}/>
                      </div>
                    </div>
                    <div className={styles.featureOpt1}>
                      <div className={styles.optImg}> 
                      <Image className={styles.optImgImg} src="/wall3.jpg" alt="office wall accessories" width={500} height={500}/>
                      </div>
                        <div className={styles.optDiv}>
                        <h3>Office Wall Accessories</h3>
                        <ul>
                          <li>Wall Art & Poasters</li>
                          <li>Wall Clocks</li>
                          <li>Wall Mounted Shelves</li>
                          <li>Wall Mounted Planters</li>
                        </ul>
                         <Link className={styles.featuredLink} href={'/shop/category/wall-accessories'} style={{textDecoration: 'none'}}>
                        <div>SHOP NOW</div>
                        </Link>
                        </div>
                    </div> 
                    <div className={styles.featureOpt1}>
                        <div className={styles.optDiv}>
                        <h3>Office Greenery Solutions</h3>
                        <ul>
                          <li>Potted plants</li>
                          <li>Wall & Vertical greenery</li>
                          <li>Artificial greenery</li>
                          <li>Outdoor Office greenery</li>
                        </ul>
                         <Link className={styles.featuredLink} href={'/shop/category/office-greenery'} style={{textDecoration: 'none'}}>
                        <div>SHOP NOW</div>
                        </Link>
                        </div>
                      <div className={styles.optImg}> 
                      <Image className={styles.optImgImg} src="/greenery.jpg" alt="office accent accessories" width={500} height={500}/>
                      </div>
                    </div>
                </div>
                <div className={styles.featureOptions2}>
                    <div className={styles.featureOpt}>
                      <div className={styles.optImg}> 
                         <Image className={styles.optImgPhone} src="/accessories2.jpg" alt="office desk accessories" width={500} height={500} />
                         <p className={styles.optInfo}>Office Desk Accessories</p>
                      </div>
                      <Link href={'/shop/category/accessories'} style={{textDecoration: 'none', color: 'black'}}>
                       <div className={styles.optBtn}>
                        <p>SHOP NOW</p>
                      </div>
                      </Link>
                    </div>
                    <div className={styles.featureOpt}>
                      <div className={styles.optImg}> 
                         <Image className={styles.optImgPhone} src="/lighting.jpg" alt="office lighting solutions" width={500} height={500}/>
                         <p className={styles.optInfo}>Office Lighting Solutions</p>
                      </div>
                     <Link href={'/shop/category/lighting-solutions'} style={{textDecoration: 'none', color: 'black'}}>
                       <div className={styles.optBtn}>
                        <p>SHOP NOW</p>
                      </div>
                      </Link>
                    </div>
                    <div className={styles.featureOpt}>
                      <div className={styles.optImg}> 
                         <Image className={styles.optImgPhone} src="/wall3.jpg" alt="office wall accessories" width={500} height={500} />
                         <p className={styles.optInfo}>Office Wall Accessories</p>
                      </div>
                     <Link href={'/shop/category/wall-accessories'} style={{textDecoration: 'none', color: 'black'}}>
                       <div className={styles.optBtn}>
                        <p>SHOP NOW</p>
                      </div>
                      </Link>
                    </div>
                    <div className={styles.featureOpt}>
                      <div className={styles.optImg}> 
                         <Image className={styles.optImgPhone} src="/greenery.jpg" alt="office plants and greenery solutions" width={500} height={500}/>
                         <p className={styles.optInfo}>Office Greenery Solutions</p>
                      </div>
                    <Link href={'/shop/category/office-greenery'} style={{textDecoration: 'none', color: 'black'}}>
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
            <p>At Office<span>Aura</span> KENYA, we believe that your office should be a reflection of your style, productivity, and professionalism. That's why we offer high-quality office decor and handpicked office accessories that transform any office space into a professional and inspiring environment. With exceptional customer service, fast shipping and competitive pricing, we make upgrading your workspace effortless. Shop now and create an office that works for you!</p>
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