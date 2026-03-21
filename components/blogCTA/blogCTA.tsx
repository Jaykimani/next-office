import styles from './blogCTA.module.css';
import Link from 'next/link';

const BlogCTA = () => {
  return (
    <>
    <div className={styles.shopCTA}>
    <div className={styles.shopCTAInfo}>
     <h1>Ready to elevate your workspace<span>?</span></h1>
     <h4>Shop at OFFICE AURA KENYA for stylish office décor and accessories.</h4>
          <Link href={'/shop'} style={{textDecoration : 'none', color: 'black'}}>
          <div className={styles.shoppingBtn}>
          <p>SHOP NOW</p>
          </div>
          </Link>
    </div>
  </div>
    <div className={styles.newsletter}>
    <div className={styles.newsletterInset}>
 <h1>Get workspace inspiration and office setup tips delivered to your inbox.</h1>
    <input type="email" name="" id="" placeholder='Add email address'/>
    <div className={styles.subscribe}>
      <p>SUBSCRIBE</p>
    </div>
    </div>
   
  </div>
    </>
    
  )
}

export default BlogCTA