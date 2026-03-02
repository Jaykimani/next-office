import styles from './shop.module.css'
import List from '@/components/list/list'
import Pagination from '@/components/pagination/pagination';
import { getProductsList } from '@/lib/getProducts';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop Office Décor & Accessories | Office Aura Kenya",
  
  description:
    "Browse curated modern office décor, accessories, and workspace essentials at Office Aura. Shop stylish office products in Nairobi with nationwide delivery across Kenya.",
  
  keywords: [
    "shop office décor Nairobi",
    "office accessories Kenya",
    "modern office furniture Kenya",
    "workspace essentials Nairobi",
    "corporate office décor Kenya",
    "buy office décor online Kenya",
  ],

  alternates: {
    canonical: "https://www.officeaura.co.ke/shop",
  },

  openGraph: {
    title: "Shop Modern Office Décor | Office Aura Kenya",
    description:
      "Explore curated office décor, executive desk setups, and workspace accessories. Delivered in Nairobi and across Kenya.",
    url: "https://www.officeaura.co.ke/shop",
    siteName: "Office Aura",
    locale: "en_KE",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Shop Office Décor & Accessories | Office Aura",
    description:
      "Curated office décor and workspace accessories available in Nairobi with nationwide delivery across Kenya.",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1
    }
  },

  metadataBase: new URL("https://www.officeaura.co.ke"),
};

type Props = {
  searchParams: Promise<{
    page?: string
  }>
}

const Shop = async({ searchParams }: Props) => {
  const params = await searchParams

  const page = Number(params.page) || 1
 
  const allProducts = await getProductsList(page, 7);
  const productsArr = allProducts?.docs;
  

  return (<>
   <div id={styles.shopOuter}>
   {productsArr && <List productsArr = {productsArr}/>} 
    {allProducts?.page && <Pagination
        currentPage={allProducts.page}
        totalPages={allProducts.totalPages}
      />}
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

export default Shop