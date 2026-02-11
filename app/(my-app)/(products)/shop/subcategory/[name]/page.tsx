import styles from './subcategory.module.css'
import List from '@/components/list/list'
import { getSubcategoryProducts } from '@/lib/getSubcategoryProducts';

const Category = async({
  params,
}: {
  params: Promise<{ name: string }>
}) => {

   const { name } = await params
  

  const Products = await getSubcategoryProducts(name);
  

 const allProducts =
  typeof Products === 'string'
    ? []
    : Products;
  

  return (<>
   <div id={styles.shopOuter}>
    <List allProducts = {allProducts}/>
        <div className={styles.shopInfo}>
            <h4>Why invest in the right office decor?</h4>
            <p>Beyond mere aesthetics, the right office setup significantly impacts your daily work experience. A well-organized and visually appealing office environment can boost morale, reduce stress, and enhance focus, ultimately leading to increased efficiency. From ergonomic accessories that promote comfort, to stylish decor that reflects your personal or company brand, investing in your office space is an investment in your success. Explore our wide range of office solutions including office desk accessories, office lighting solutions, office wall accessories and office greenery solutions today and discover how the perfect blend of functionality and style can create a workspace you'll love. Elevate your office, elevate your work. Find the ideal office decor and office accessories to optimize your workspace and achieve peak performance.</p>
        </div>
        </div>
        <div className={styles.quote}>
         <h1>TRANSFORM YOUR WORKSPACE</h1>
        </div>
  </>
  
  )
}

export default Category