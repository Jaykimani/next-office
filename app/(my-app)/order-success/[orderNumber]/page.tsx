import styles from './success.module.css'
import Image from 'next/image'
import { MdStickyNote2 } from "react-icons/md";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { FaHouseUser } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import Link from 'next/link';
import { getPayload } from "payload"
import config from "@payload-config"

type Props = {
  params: Promise<{ orderNumber: string }>
}

export default async function OrderSuccess({ params }: Props) {
  const{orderNumber} = await params;
  console.log(orderNumber);
  

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
  })

  if (!order.docs.length) {
    return <div>Order not found.</div>
  }

  const data = order.docs[0]

   const date = new Date(data.createdAt);

const formatted =
  date.toLocaleDateString() +
  " " +
  date.toLocaleTimeString();
  

  return (
    <div className={styles.success}>
        <div className={styles.successTop}>
        <Image className={styles.successImg} src="/mark.png" alt="office accent accessories" width={200} height={200}/>
        <h1>Order Successfully Placed!</h1>
        <p>Thank you for shopping with Office Aura. We've received your order and will begin processing it shortly.</p>
        <p>You will receive an order confirmation email with details of your order.</p>
        <div className={styles.orderNumber}><h4>Your ORDER NUMBER is: {data.orderNumber}</h4></div>
        <p>Order date: {formatted}</p>
        </div>
         <div className={styles.successInset}>
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
            <div className={styles.deliveryInfo}>
             <div className={styles.deliveryInformation}>
             <div className={styles.customer}>
                <h4><BsFillPersonVcardFill style={{color: 'rgb(30, 165, 0)', width: '25px', height: '25px', marginRight: '15px'}}/>Customer Information</h4>
                <p>{data.customer.name}</p>
                <p>{data.customer.phone}</p>
                 <p>{data.customer.email}</p>
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
             <div className={styles.deliveryInformation}>
             <div className={styles.customer}>
                <h4><FaShippingFast style={{color: 'rgb(30, 165, 0)', width: '25px', height: '25px', marginRight: '15px'}}/>Shipping Timeline</h4>
                <p>{data.DeliveryDate}</p>
                
             </div>
             <div className={styles.shipping}>
                <h4><FaRegCreditCard style={{color: 'rgb(30, 165, 0)', width: '25px', height: '25px', marginRight: '15px'}}/>Payment Method</h4>
                <p>Cash on delivery</p>
                
             </div>
             </div>
            <div className={styles.divider}></div>
            <div className={styles.contact}>
                <h4><MdContactPhone style={{color: 'rgb(30, 165, 0)', width: '25px', height: '25px', marginRight: '15px'}}/>You can contact us through:</h4>
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
            
        </div>
    </div>
  )
}

