import {getPayload} from 'payload';
import config from '@payload-config';

export async function getCategoryProducts (category){
const payload = await getPayload({config});

  try {
    const data = await payload.find({
    collection: category,
    depth: 1,
     select:{
      id: true,
      slug: true,
      name: true,
      images: true,
      price: true,
      category: true,
      subcategory: true
    },
    limit: 100 // The slug of your 
    
  });
   let product = data.docs;
   
   return product ?? 'not found';

  } catch (error) {
    return 'not found'
  }
}