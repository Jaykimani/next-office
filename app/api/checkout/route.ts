// app/api/checkout/route.ts

import { NextRequest, NextResponse } from "next/server";
import { getPayload } from "payload";
import config from "@/payload.config";
import { sendTelegramMessage } from "@/lib/telegram";
import { createCustomerConfirmationMessage } from '@/lib/createConfirmationMessage';


type ProductCollection =
  | "office-supplies"
  | "office-pantry-hydration"
  | "office-cleaning-hygiene"
  | "office-electronics"

type CartItem = {
  id: number;
  category: ProductCollection;
  count: number;
  variant: string;
};
type PaymentMethod =
  | "mpesa"
  | "airtel"
  | "card"
  | "bank"
  | "cod"

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


export async function POST(req: NextRequest) {
  try {
    const payload = await getPayload({ config });

    const body = await req.json();
    const { customer, delivery, items, orderInstructions, shipping, deliveryDate, shippingType, paymentMethod } = body as {
      customer: {
        name: string;
        email: string;
        phone: string;
        
      };
      delivery: {
       city: string;
       route: string;
        areaStreet: string;
        building: string;
        officeNumber: string;
        landmart: string;
        AdditionalDeliveryInformation: string
      };
       items: CartItem[];
       orderInstructions: string;
       shipping: number,
       deliveryDate: string,
       shippingType: string,
       paymentMethod: PaymentMethod
    };

    if (!items || items.length === 0) {
      return NextResponse.json(
        { error: "Cart is empty." },
        { status: 400 }
      );
    }

    console.log(items);
    

   const results = await Promise.all(
      items.map(async (item) => {
        const product = await payload.findByID({
          collection: item.category,
          id: item.id,
        })
        
      if (!product) return null

        // 🔐 Validate variant
        let selectedVariant

        if (item.variant && product.variants?.length !== 0) {
          selectedVariant = product?.variants?.find(
            (v: any) => v.option === item.variant
          )
        }

        return {
          id: product.id,
          category: product.category,
          name: product.name,
          slug: product.slug,
          variant: selectedVariant?.option || '',
          price: selectedVariant?.price || product.price,
          stock: product.stock
          // Use variant price if exists, else fallback
        }
      })
    )

  
    let subtotal = 0;
    const orderItems: any[] = [];

    // 🔐 2️⃣ Validate & recalculate totals
    for (const item of items) {
      const product = results.find(
        (p: any) => p.category === item.category && p.id === item.id
      );

      if (!product) {
        return NextResponse.json(
          { error: "Product not found." },
          { status: 400 }
        );
      }

      if (product.stock !== undefined && product.stock < item.count) {
        return NextResponse.json(
          { error: `${product.name} is out of stock.` },
          { status: 400 }
        );
      }

      const itemTotal = product.price * item.count;
      subtotal += itemTotal;

      orderItems.push({
        product: {
             relationTo: product.category,
             value: product.id
        },
       name: product.name,
        price: product.price,
        variant: product.variant || '',
        quantity: item.count,
        subtotal: itemTotal,
      });
    }

    const total = subtotal + shipping;

    // // 🧾 3️⃣ Create Order
    const orderNumber = `Ord-${Date.now()}`;

    const createdOrder = await payload.create({
      collection: "orders",
      data: {
        orderNumber,
        DeliveryDate: deliveryDate,
        ShippingType: shippingType,
        status: "pending",
        paymentStatus: "unpaid",
        paymentMethod,
        customer,
        deliveryAddress: delivery,
        items: orderItems,
        AdditionalOrderInformation: orderInstructions,
        subtotal,
        shipping,
        total,
      },
    });

  
    const location =  delivery.building && delivery.officeNumber ? `${delivery.city}, ${delivery.areaStreet}, ${delivery.building}, ${delivery.officeNumber}` : `${delivery.city}, ${delivery.areaStreet}`;
  
    const whatsappPhone = formatKenyanNumber(customer.phone);
   const ordermessage = {
      orderNumber: orderNumber,
      customerName: customer.name,
      items: orderItems,
      subtotal: subtotal,
      shipping: shipping,
      total: total,
      location: location,
      timeline: deliveryDate,
      payment : paymentMethod
     }
  
    const customerMessage = createCustomerConfirmationMessage(ordermessage)
     const whatsappConfirm = `https://wa.me/${whatsappPhone}?text=${customerMessage}`
    
    const telegramItems = orderItems
  .map(
    (item) =>
      `• ${item.name}${item.variant ? ` (${item.variant})` : ""} × ${item.quantity} @ KSh ${item.price.toLocaleString("en-US")}`
  )
  .join("\n");

const telegramMessage = `🛒 NEW OFFICEFLOW ORDER

Order Number: ${orderNumber}

Customer:
${customer.name}

Phone:
${customer.phone}

Email:
${customer.email}

Delivery:
${delivery.city}, ${delivery.areaStreet}${
  delivery.building ? `, ${delivery.building}` : ""
}${delivery.officeNumber ? `, ${delivery.officeNumber}` : ""}

Items:
${telegramItems}

Subtotal: KSh ${subtotal.toLocaleString("en-US")}

Shipping: KSh ${shipping.toLocaleString("en-US")}

Total: KSh ${total.toLocaleString("en-US")}

Payment Method:
${paymentMethod}

Delivery Date:
${deliveryDate}

Shipping Type:
${shippingType}

Order Instructions:
${orderInstructions || "None"}

Cutomer whatsapp confirmation: ${whatsappConfirm}
`;

try {
  await sendTelegramMessage(telegramMessage);
} catch (telegramError) {
  console.error("Telegram notification failed:", telegramError);
}

    return NextResponse.json({
      success: true,
      orderNumber: orderNumber,
      total,
    });

  } catch (error) {
    console.error("Checkout Error:", error);

    return NextResponse.json(
      { error: "Something went wrong during checkout." },
      { status: 500 }
    );
  }
}