import {getPayload} from 'payload';
import config from '@payload-config';

export async function getProductReviews (category, productId){
const payload = await getPayload({config});

  try {
    const data = await payload.find({
    collection: 'reviews',
    where: {
      product: {
       equals: {
        relationTo: category,
        value: productId,
      },
      },
      approved: {
        equals: true,
      },
    },
    
  });
   let reviews = data.docs;
   return reviews;
  } catch (error) {
    console.error('Failed to get products list:', error)
    return 
  }
}