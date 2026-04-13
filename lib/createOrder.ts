
export async function createOrder(formData : FormData) {

    const name = formData.get("full-name") as string;
    const number = formData.get("phone-number") as string;
    const email = formData.get("email-address") as string;
    const areaStreet = formData.get("area-street") as string;
    const building = formData.get("building-name") as string;
    const officeNumber = formData.get("office-number") as string;
    const landmark = formData.get("landmark") as string;
    const additional =  formData.get("additional-info") as string;

    let customerInfo = {
        name: name,
        email: email,
        phone: number,
       
    }

    let deliveryInfo = {
        areaStreet: areaStreet,
        building: building,
        officeNumber: officeNumber,
        landmark: landmark,
        AdditionalDeliveryInformation: additional
    }


    return {customer: customerInfo, delivery: deliveryInfo}
    
}