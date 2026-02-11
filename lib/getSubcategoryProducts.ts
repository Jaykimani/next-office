import {getPayload} from 'payload';
import config from '@payload-config';

export async function getSubcategoryProducts (category){
const payload = await getPayload({config});

  try {
    const data = await payload.find({
    collection: 'products',
    depth: 1,
    where: {
        subcategory:  { equals: category }
    },
     select:{
      id: true,
      slug: true,
      name: true,
      images: true,
      price: true
    } // The slug of your 
    
  });
   let product = data.docs;
   
   return product ?? 'not found';

  } catch (error) {
    console.error('Failed to get products list:', error)
    return 'not found'
  }
}