import styles from './blogs.module.css';
import Navbar from '@/components/navbar/navbar';
import Image from 'next/image';
import Link from 'next/link';

const page = () => {
  return (<>
  <div className={styles.blogsMain}>
    <Navbar />
    <div className={styles.mainContent}>
      <h1>Office<span>Aura</span> Insights!</h1>
        <p>Workspace inspiration, productivity tips, and office décor ideas in Kenya.</p>
    </div>
  </div>
  <div className={styles.blogsInset}>
     <div className={styles.insetTitle}>
       <h4>Latest Post</h4>
       <div className={styles.divider}></div>
     </div>
     <div className={styles.latest}>
     <div className={styles.latestImg}>
       <Image className={styles.latestImgImg} src="/lighting.jpg" alt="office aura image" width={300} height={300}/>
     </div>
     <div className={styles.latestInfo}>
      <p className={styles.latestPublished}>Published on: 18/03/2026 15:36hrs</p>
      <div className={styles.latestInfoInfo}>
      <h2>Best Desk Lamps for Office Work in Kenya (2026 Guide)</h2>
      <p>Lighting plays a major role in productivity. Poor lighting can cause eye strain, headaches, and reduced focus. Here are the best desk lamps for office work in Kenya...</p>
       <button className={styles.latestInfoBtn}>Read More...</button>
      </div>
     
     </div>
     </div>
     <div className={styles.insetTitle}>
       <h4>Featured Posts</h4>
       <div className={styles.divider}></div>
     </div>
     <div className={styles.featured}>
       <div className={styles.featuredPost}>
          <div className={styles.featuredImg}>
            <Image className={styles.featuredImgImg} src="/lighting.jpg" alt="office aura image" width={300} height={300}/>
          </div>
          <div className={styles.featuredInfo}>
           <span>Published on: 10/02/2026 </span>
           <h2>Best Desk Accessories to Improve Productivity (2026)</h2>
           <p>A cluttered desk leads to a cluttered mind. The right desk accessories can significantly ...</p>
           <div className={styles.featuredInfoBtn}>Read More...</div>
          </div>
       </div>
          <div className={styles.featuredPost}>
          <div className={styles.featuredImg}>
            <Image className={styles.featuredImgImg} src="/greenery.jpg" alt="office aura image" width={300} height={300}/>
          </div>
          <div className={styles.featuredInfo}>
           <span>Published on: 10/02/2026 </span>
           <h2>Best Desk Accessories to Improve Productivity (2026)</h2>
           <p>A cluttered desk leads to a cluttered mind. The right desk accessories can significantly ...</p>
           <div className={styles.featuredInfoBtn}>Read More...</div>
          </div>
       </div>
          <div className={styles.featuredPost}>
          <div className={styles.featuredImg}>
            <Image className={styles.featuredImgImg} src="/wall3.jpg" alt="office aura image" width={300} height={300}/>
          </div>
          <div className={styles.featuredInfo}>
           <span>Published on: 10/02/2026 </span>
           <h2>Best Desk Accessories to Improve Productivity (2026)</h2>
           <p>A cluttered desk leads to a cluttered mind. The right desk accessories can significantly ...</p>
           <div className={styles.featuredInfoBtn}>Read More...</div>
          </div>
       </div>
          <div className={styles.featuredPost}>
          <div className={styles.featuredImg}>
            <Image className={styles.featuredImgImg} src="/landing.png" alt="office aura image" width={300} height={300}/>
          </div>
          <div className={styles.featuredInfo}>
           <span>Published on: 10/02/2026 </span>
           <h2>Best Desk Accessories to Improve Productivity (2026)</h2>
           <p>A cluttered desk leads to a cluttered mind. The right desk accessories can significantly ...</p>
           <div className={styles.featuredInfoBtn}>Read More...</div>
          </div>
       </div>
          <div className={styles.featuredPost}>
          <div className={styles.featuredImg}>
            <Image className={styles.featuredImgImg} src="/lighting.jpg" alt="office aura image" width={300} height={300}/>
          </div>
          <div className={styles.featuredInfo}>
           <span>Published on: 10/02/2026 </span>
           <h2>Best Desk Accessories to Improve Productivity (2026)</h2>
           <p>A cluttered desk leads to a cluttered mind. The right desk accessories can significantly ...</p>
           <div className={styles.featuredInfoBtn}>Read More...</div>
          </div>
       </div>
          <div className={styles.featuredPost}>
          <div className={styles.featuredImg}>
            <Image className={styles.featuredImgImg} src="/lighting.jpg" alt="office aura image" width={300} height={300}/>
          </div>
          <div className={styles.featuredInfo}>
           <span>Published on: 10/02/2026 </span>
           <h2>Best Desk Accessories to Improve Productivity (2026)</h2>
           <p>A cluttered desk leads to a cluttered mind. The right desk accessories can significantly ...</p>
           <div className={styles.featuredInfoBtn}>Read More...</div>
          </div>
       </div>
          <div className={styles.featuredPost}>
          <div className={styles.featuredImg}>
            <Image className={styles.featuredImgImg} src="/lighting.jpg" alt="office aura image" width={300} height={300}/>
          </div>
          <div className={styles.featuredInfo}>
           <span>Published on: 10/02/2026 </span>
           <h2>Best Desk Accessories to Improve Productivity (2026)</h2>
           <p>A cluttered desk leads to a cluttered mind. The right desk accessories can significantly ...</p>
           <div className={styles.featuredInfoBtn}>Read More...</div>
          </div>
       </div>

     </div>
  </div>
  <div className={styles.shopCTA}>
    <div className={styles.shopCTAImg}>
      <Image className={styles.shopCTAImgImg} src="/landing.png" alt="office aura image" width={300} height={300}/>
    </div>
    <div className={styles.shopCTAInfo}>
     <h2>Elevate Your Workspace with Stylish Office Decor & Accessories<span>!!</span></h2>
          <Link href={'/shop'} style={{textDecoration : 'none', color: 'black'}}>
          <div className={styles.shoppingBtn}>
          <p>SHOP NOW</p>
          </div>
          </Link>
    </div>
  </div>
  </>
    
  )
}

export default page