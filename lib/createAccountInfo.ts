

export async function createAccountInfo(formData : FormData) {

    const businessName = formData.get("business-name") as string;
    const businessType = formData.get("business-type") as string;
    const businessLocation = formData.get("business-location") as string;
    const contactName = formData.get("contact-name") as string;
    const contactPosition = formData.get("contact-position") as string;
    const phoneNumber = formData.get("phone-number") as string;
    const emailAddress = formData.get("email-address") as string;
    const contactMethods =  formData.getAll("contact-methods");
    const categories =  formData.getAll("categories");
    const periods = formData.getAll("periods");
    const restocking = formData.get("restocking");
    const password1 = formData.get("password1") as string;
    const password2 = formData.get("password2") as string;


    let accountInfo = {
        businessName,
        businessType,
        businessLocation,
        contactName,
        contactPosition,
        phoneNumber,
        emailAddress,
        contactMethods,
        categories,
        periods,
        restocking,
        password1,
        password2   
    }



    return {accountInfo}
    
}