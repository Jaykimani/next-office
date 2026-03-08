// app/api/checkout/route.ts

import { NextRequest, NextResponse } from "next/server";
import { getPayload } from "payload";
import config from "@/payload.config";

type CartItem = {
  id: number;
  count: number;
};
type PaymentMethod =
  | "mpesa"
  | "airtel"
  | "card"
  | "bank"
  | "cod"

export async function POST(req: NextRequest) {
  try {
    const payload = await getPayload({ config });

    const body = await req.json();
    const { customer, delivery, items, orderInstructions, shipping, deliveryDate, paymentMethod } = body as {
      customer: {
        name: string;
        email: string;
        phone: string;
        
      };
      delivery: {
       city: string;
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
       paymentMethod: PaymentMethod
    };

    if (!items || items.length === 0) {
      return NextResponse.json(
        { error: "Cart is empty." },
        { status: 400 }
      );
    }

    // 🔎 1️⃣ Fetch products securely from DB
    const productIDs = items.map((item) => item.id);

    const products = await payload.find({
      collection: "products",
      where: {
        id: {
          in: productIDs,
        },
      },
      limit: 100,
    });

    let subtotal = 0;
    const orderItems: any[] = [];

    // 🔐 2️⃣ Validate & recalculate totals
    for (const item of items) {
      const product = products.docs.find(
        (p: any) => p.id === item.id
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
        product: product.id,
        name: product.name,
        price: product.price,
        quantity: item.count,
        subtotal: itemTotal,
      });
    }

    const total = subtotal + shipping;

    // 🧾 3️⃣ Create Order
    const orderNumber = `Ord-${Date.now()}`;

    const createdOrder = await payload.create({
      collection: "orders",
      data: {
        orderNumber,
        DeliveryDate: deliveryDate,
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

    

    // 📦 4️⃣ Optional: Reduce Stock
    for (const item of orderItems) {
      await payload.update({
        collection: "products",
        id: item.product,
        data: {
          stock: undefined, // remove if you don’t track stock
        },
      });
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