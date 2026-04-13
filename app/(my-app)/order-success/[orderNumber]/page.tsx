import styles from './success.module.css'
import Image from 'next/image'
import { MdStickyNote2 } from "react-icons/md";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { FaHouseUser } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import { FaRoute } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";
import Link from 'next/link';
import { getPayload } from "payload"
import config from "@payload-config"
import twilio from "twilio"
import { createCustomerConfirmationMessage } from '@/lib/createConfirmationMessage';



type Props = {
  params: Promise<{ orderNumber: string }>
}

function formatKenyanNumber(phone) {
  phone = phone.replace(/\s+/g, "")

  if (phone.startsWith("+254")) {
    return phone.slice(1)
  }

  if (phone.startsWith("254")) {
    return phone
  }

  if (phone.startsWith("0")) {
    return "254" + phone.slice(1)
  }

  if (phone.length === 9) {
    return "254" + phone
  }

  return phone
}

export default async function OrderSuccess({ params }: Props) {
  const{orderNumber} = await params;
  

  if (!orderNumber) {
    return <div>Invalid order.</div>
  }

  const payload = await getPayload({ config })

  const order = await payload.find({
    collection: "orders",
    where: {
      orderNumber: {
        equals: orderNumber,
      },
    },
    depth: 2,
  });
 

  if (!order.docs.length) {
    return <div>Order not found.</div>
  }

  const data = order.docs[0]
  

  const date = new Date(data.createdAt);
  const formatted =
  date.toLocaleDateString() +
  " " +
  date.toLocaleTimeString();

  const location =  data.deliveryAddress.building && data.deliveryAddress.officeNumber ? `${data.deliveryAddress.city}, ${data.deliveryAddress.areaStreet}, ${data.deliveryAddress.building}, ${data.deliveryAddress.officeNumber}` : `${data.deliveryAddress.city}, ${data.deliveryAddress.areaStreet}`;

  const whatsappPhone = formatKenyanNumber(data.customer.phone);
 const ordermessage = {
    orderNumber: data.orderNumber,
    customerName: data.customer.name,
    items: data.items,
    total: data.total,
    location: location,
    timeline: data.DeliveryDate,
    payment : data.paymentMethod
   }

  const customerMessage = createCustomerConfirmationMessage(ordermessage)

  
try {
     const items = data.items.map((item) => `• ${item.name}(@${item.price}/=) × ${item.quantity}`)
    .join("\n");;

    const whatsappConfirm = `https://wa.me/${whatsappPhone}?text=${customerMessage}`
     
    const message = `Hello Admin 👋

You have a new order.

Order Number: ${orderNumber}

Items Ordered:
${items}

Total: KSh ${data.total.toLocaleString('en-us')}/=

Delivery Location is ${location}.

Your delivery timeline is ${data.DeliveryDate}.

Thank you.

Cutomer whatsapp confirmation: ${whatsappConfirm}
`

  
   

    const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTHTOKEN)

   client.messages
    .create({
        body: message,
        from: 'whatsapp:+14155238886',
        to: 'whatsapp:+254704610605'
    })
    .then(message => console.log(message.sid))
    .catch((error) => console.error('Error:', error));
    
    
  } catch (error) {
    console.log("error sending message");
    
  }



 

  return (
    <div className={styles.success}>
        <div className={styles.successTop}>
        <Image className={styles.successImg} src="/mark.png" alt="office accent accessories" width={200} height={200}/>
        <h1>Order Successfully Placed!</h1>
        <p>Thank you for shopping with Office Aura. We've received your order and will begin processing it shortly.</p>
        <p>You will receive an order confirmation message on whatsapp and email with details of your order.</p>
        <div className={styles.orderNumber}><h4>Your ORDER NUMBER is:<br className={styles.breaker}></br> {data.orderNumber}</h4></div>
        <p>Order date: {formatted}</p>
        </div>
         <div className={styles.successInset}>
           <div className={styles.deliveryInfo}>
             <div className={styles.deliveryInformation}>
             <div className={styles.customer}>
                <h4><BsFillPersonVcardFill style={{color: 'rgb(30, 165, 0)', width: '25px', height: '25px', marginRight: '15px'}}/>Customer Information</h4>
                <p>{data.customer.name}</p>
                <p>{data.customer.phone}</p>
                 <p>{data.customer.email}</p>
             </div>
             <div className={styles.shipping}>
               <h4><FaRegCreditCard style={{color: 'rgb(30, 165, 0)', width: '25px', height: '25px', marginRight: '15px'}}/>Payment Method</h4>
                <p>{data.paymentMethod == 'cod' ? 'Cash On Delivery' : data.paymentMethod == 'mpesa' ? 'M-pesa till number' : data.paymentMethod == 'airtel' ? 'Airtel Money' : data.paymentMethod == 'card' ? 'Credit Card' : 'Bank Transfer'}</p>
                
             </div>
             </div>
             <div className={styles.deliveryInformation}>
             <div className={styles.customer}>
              <h4><IoIosInformationCircle style={{color: 'rgb(30, 165, 0)', width: '25px', height: '25px', marginRight: '15px'}}/>Shipping Type</h4>
                <p>{data.ShippingType}</p>
                
                
             </div>
             <div className={styles.shipping}>
               <h4><FaHouseUser style={{color: 'rgb(30, 165, 0)', width: '25px', height: '25px', marginRight: '15px'}}/>Shipping Address</h4>
                <p>{data.deliveryAddress.city}</p>

                <p>{data.deliveryAddress.areaStreet}</p>
                <p>{data.deliveryAddress.building}</p>
                <p>{data.deliveryAddress.officeNumber}</p>
                <p>{data.deliveryAddress.landmark}</p>
                
             </div>
             </div>
             <div className={styles.additionalShippingInfo}>
              <div className={styles.addShipInfo}>
                <h4><FaShippingFast style={{color: 'rgb(30, 165, 0)', width: '25px', height: '25px', marginRight: '15px'}}/>Shipping Timeline</h4>
                <p>{data.DeliveryDate}</p>
              </div>
              <div className={styles.addShipInfo}>
                <h4><FaRoute style={{color: 'rgb(30, 165, 0)', width: '25px', height: '25px', marginRight: '15px'}}/>Additional Shipping Information</h4>
                <p>{data.deliveryAddress.route}</p>
              </div>
             </div>
             <div className={styles.divider1}></div>
            </div>
             
            <div className={styles.orderSummary}>
                <h4><MdStickyNote2 style={{color: 'rgb(30, 165, 0)', width: '25px', height: '25px', marginRight: '15px'}}/> ORDER SUMMARY</h4>
                {data.items?.map((item)=>{
                    return(
                <div key={item.id} className={styles.productDetails}>
                    <div className={styles.product}>
                     <h5>{item.name}</h5>
                    <p>Price: {item.price.toLocaleString('en-US')}KSh</p>
                     <p>Qty: 3</p>
                    </div>
                    <div className={styles.productTotal}>
                     <h5>KSh {item.subtotal.toLocaleString('en-US')}/=</h5>
                    </div> 
                </div>
                    )
                })}
                
                <div className={styles.productSubtotal}>
                    <div className={styles.productSubtotalTitles}>
                    <p>Subtotal:</p>
                    <p>Shipping & Handling:</p>
                    <p>Tax:</p>
                    <h3>Grand Total:</h3>
                    </div>
                    <div className={styles.productSubtotalCosts}>
                    <p>KSh {data.subtotal.toLocaleString('en-US')}.00</p>
                    <p>KSh {data.shipping?.toLocaleString('en-US')}.00</p>
                    <p>KSh 00.00</p>
                    <h3>KSh {data.total.toLocaleString('en-US')}.00</h3>
                    </div>   
                </div>
            </div>
           
        </div>
          <div className={styles.divider}></div>
        <div className={styles.contact}>
                <h4><MdContactPhone style={{color: 'rgb(30, 165, 0)', width: '25px', height: '25px', marginRight: '15px'}}/>For enquiries, contact us through:</h4>
                <div className={styles.contactInfo}>
                 <div>
                    <p>Telephone:</p>
                    <p>Whatsapp:</p>
                    <p>Email:</p>
                    <p>Website:</p>
                 </div>
                 <div>
                    <p>+254 704 610 605</p>
                    <p>+254 704 610 605</p>
                    <p>support@officeaura.co.ke</p>
                    <Link href={'/contact'}><p>www.officeaura.co.ke/contact</p></Link>
                 </div>
                </div>
                
            </div>
            <Link href={'/shop'} style={{ textDecoration: 'none'}}>
            <p style={{margin: '30px 15px'}}>Resume Shopping?</p>
            </Link>
    </div>
  )
}

