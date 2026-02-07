
export async function createOrder(formData : FormData) {

    const title = formData.get("full-name") as string;
    console.log(title);
    
    
}