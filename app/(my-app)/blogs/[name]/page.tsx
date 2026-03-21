import styles from './blog.module.css'
import Navbar from '@/components/navbar/navbar'

const page = () => {
  return (<>
  <div className={styles.blogNav}>
   <Navbar />
  </div>
  <div className={styles.blogInset}>
    <div className={styles.blogInsetContent}>
     <p>yoo</p>
    </div>
    <div className={styles.blogInsetSide}>

    </div>

  </div>
  </>
    
  )
}

export default page