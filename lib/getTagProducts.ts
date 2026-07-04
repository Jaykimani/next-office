import {getPayload} from 'payload';
import config from '@payload-config';

type ProductCollection =
  | "office-supplies"
  | "office-pantry-hydration"
  | "office-cleaning-hygiene"
  | "office-workspace-accessories"
  | "office-electronics"

const productCollections: ProductCollection[]  = [
  "office-supplies",
  "office-pantry-hydration",
  "office-cleaning-hygiene",
  "office-workspace-accessories",
  "office-electronics",
]

export async function getTagProducts(tag){
const payload = await getPayload({config});
let newTag = tag.replace(/-/g, " ");



   if (!tag) return []
  try {
     const results = await Promise.all(
    productCollections.map((collection) =>
      payload.find({
        collection,
        where: {
              tags: { contains: newTag },
        },
        limit: 1000,
        select:{
      id: true,
      slug: true,
      name: true,
      images: true,
      price: true,
      category: true,
      subcategory: true
      }
      })
    )
  )
     
   let product = results.flatMap((r) => r.docs);
  
   
   return product ?? 'not found';

  } catch (error) {
    console.error('Failed to get products list:', error)
    return 'not found'
  }
}