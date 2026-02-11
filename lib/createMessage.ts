"use server"

import { getPayloadClient } from '@/payloadClient'


export async function createMessage(formData : FormData) {

    const title = formData.get("full-name") as string;
    const phone = formData.get("phone-number") as string;
    const email = formData.get("email") as string;
    const content = formData.get("content") as string;

    let payload = await getPayloadClient();

    try {
    const newMessage = await payload.create({
    collection: 'messages',
    data: {
      name: title,
      phone: phone,
      email: email,
      content: content
    },
  })
    return {success: true}
    } catch (error) {
       console.log(error);
     return {success: false}       
        
    }
}