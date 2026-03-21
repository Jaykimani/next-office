import styles from './blog.module.css'
import Navbar from '@/components/navbar/navbar';
import Image from 'next/image';
import BlogCTA from '@/components/blogCTA/blogCTA';
import Footer from '@/components/footer/footer';

const page = () => {
  return (<>
  <div className={styles.blogNav}>
   <Navbar />
  </div>
  <div className={styles.blogInset}>
    <div className={styles.blogInsetContent}>
    <div className={styles.published}>
     <p>Published on: <span>21/03/2026</span></p>
     <p>Author: <span>Kimani - Office Aura</span></p>
     <p>Read Time: <span>10 minutes</span></p>
    </div>
     
     <h1>10 Modern Office Desk Setup Ideas in Kenya (2026 Guide)</h1>
     <div className={styles.blogInsetImage}>
        <Image className={styles.blogInsetImg} src="/blogcta.jpg" alt="office aura image" width={500} height={500}/>
     </div>
     <div className={styles.content}>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
     <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?</p>
     </div>
    </div>
    <div className={styles.blogInsetSide}>
      <p className={styles.sideHeading}>MORE INSIGHTS</p>
     <div className={styles.featuredPost}>
          <div className={styles.featuredImg}>
            <Image className={styles.featuredImgImg} src="/lighting.jpg" alt="office aura image" width={300} height={300}/>
          </div>
          <div className={styles.featuredInfo}>
           <span>Published on: 10/02/2026 </span>
           <h2>10 Modern Office Desk Setup Ideas in Kenya (2026 Guide)</h2>
          </div>
       </div>
        <div className={styles.featuredPost}>
          <div className={styles.featuredImg}>
            <Image className={styles.featuredImgImg} src="/lighting.jpg" alt="office aura image" width={300} height={300}/>
          </div>
          <div className={styles.featuredInfo}>
           <span>Published on: 10/02/2026 </span>
           <h2>Best Desk Accessories to Improve Productivity (2026)</h2>
          </div>
       </div>
        <div className={styles.featuredPost}>
          <div className={styles.featuredImg}>
            <Image className={styles.featuredImgImg} src="/lighting.jpg" alt="office aura image" width={300} height={300}/>
          </div>
          <div className={styles.featuredInfo}>
           <span>Published on: 10/02/2026 </span>
           <h2>Best Desk Accessories to Improve Productivity (2026)</h2>
          </div>
       </div>
        <div className={styles.featuredPost}>
          <div className={styles.featuredImg}>
            <Image className={styles.featuredImgImg} src="/lighting.jpg" alt="office aura image" width={300} height={300}/>
          </div>
          <div className={styles.featuredInfo}>
           <span>Published on: 10/02/2026 </span>
           <h2>Best Desk Accessories to Improve Productivity (2026)</h2>
          </div>
       </div>
        <div className={styles.featuredPost}>
          <div className={styles.featuredImg}>
            <Image className={styles.featuredImgImg} src="/lighting.jpg" alt="office aura image" width={300} height={300}/>
          </div>
          <div className={styles.featuredInfo}>
           <span>Published on: 10/02/2026 </span>
           <h2>Best Desk Accessories to Improve Productivity (2026)</h2>
          </div>
       </div>

      
     

    </div>

  </div>
  <BlogCTA />
  <Footer />

  </>
    
  )
}

export default page