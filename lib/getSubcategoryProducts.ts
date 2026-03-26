import {getPayload} from 'payload';
import config from '@payload-config';

export async function getSubcategoryProducts (category){
const payload = await getPayload({config});


  try {
    const data = await payload.find({
    collection: 'products',
    depth: 1,
    pagination: false,
    where: {
        subcategories: {
            equals: category,
        }
    },
     select:{
      id: true,
      slug: true,
      name: true,
      images: true,
      price: true,
      category: true
    },
    limit: 100 // The slug of your 
    
  });
   let product = data.docs;
   
   return product ?? 'not found';

  } catch (error) {
    console.error('Failed to get products list:', error)
    return 'not found'
  }
}