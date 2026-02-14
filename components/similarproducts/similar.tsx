import { useEffect, useState } from 'react'
import styles from './similar.module.css'
import { Media } from '@/payload-types';
import Image from 'next/image'
import Link from 'next/link'

type similarProps = {
  id: number
  subcategory: string
}

type URL = {
  url: string
}

type Product = {
  id: number
  name: string
  slug: string
  images: URL[]
  price: number
}

function mediaIsObject(media: number | Media) : media is Media {
  return typeof media !== 'number'
  
}

const Similar = ({id, subcategory}: similarProps) => {

    const [productsList, setProductsList] = useState<Product[]>([]);

    useEffect(()=>{
      
      async function fetchSubproducts(){
      const productsData = await fetch(`/api/subcategory?subcategory=${subcategory}`)
      const products = await productsData.json();

      let productArr = products.filter(item => item.id !== id);

      setProductsList(productArr);

      }

      fetchSubproducts();

    }, [])


  return (
    <div className={styles.otherProducts}>
          <h4>You may also like:</h4>
          <div className={styles.othersInset}>
            {productsList.map((product)=>{
              const image =
              typeof product.images[0] === "object"
               ? product.images[0].url
                   : null;

              return (
                <Link key={product.id} href={`/shop/${product?.id}`} style={{textDecoration: 'none'}}>
               <div className={styles.othersDiv}>
                {
                  product.images[0]?.url &&
                  <Image src={product.images[0].url} alt="" width={500} height={500} />
                }
              
              <h5>{product.name}</h5>
              <p>KSH {product.price.toLocaleString('en-US')}/=</p>
              <button>ADD TO CART</button>
               </div>
                </Link>
              )
            })}
          </div>
         </div>
  )
}

export default Similar