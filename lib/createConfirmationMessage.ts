export function createCustomerConfirmationMessage(order: {
  orderNumber: string
  customerName: string
  items: { name: string; price: number; quantity: number }[]
  subtotal: number;
  shipping: number | null | undefined;
  total: number
  location: string
  timeline: string
  payment: string | null | undefined
}) {
  const items = order.items
    .map((item) => `• ${item.name}(@${item.price}/=) × ${item.quantity}`)
    .join("\n")

  const message = `
Hello ${order.customerName} 👋

Thank you for ordering with OfficeFlow Kenya.

We have successfully received your order and it is now being processed.

Your Order Number: ${order.orderNumber}

Items Ordered:
${items}

Subtotal: KSh ${order.subtotal.toLocaleString('en-us')}/=

Shipping Fee: KSh ${order.shipping && order.shipping.toLocaleString('en-us')}/=

Grand Total: KSh ${order.total.toLocaleString('en-us')}/=

Your delivery location is ${order.location}

Your shipping timeline is ${order.timeline}

Mode of payment is ${order.payment == 'cod' ? 'Cash On Delivery' : order.payment == 'mpesa' ? 'M-pesa till number' : order.payment == 'airtel' ? 'Airtel Money' : order.payment == 'card' ? 'Credit Card' : 'Bank Transfer'}

Our team will contact you to confirm delivery details.

Thank you for choosing OfficeFlow Kenya. 
Your one stop shop for Office Supplies and Restock needs!
`

  return encodeURIComponent(message)
}