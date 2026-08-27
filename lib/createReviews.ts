"use server"
import { getPayloadClient } from '@/payloadClient'

type ProductReference =
  | {
      relationTo: "office-supplies";
      value: number;
    }
  | {
      relationTo: "office-electronics";
      value: number;
    }
  | {
      relationTo: "office-pantry-hydration";
      value: number;
    }
  | {
      relationTo: "office-workspace-accessories";
      value: number;
    };

    
export async function submitReview(data: {
  product: ProductReference
  title: string
  rating: number
  authorName: string
  authorEmail: string
  reviewText: string
}) {

  const payload = await getPayloadClient()

  try {
    let newReview = payload.create({
    collection: 'reviews',
    data
  });

   return {success: true}
  } catch (error) {
     console.log(error);
     return {success: false}
  }
  
}
