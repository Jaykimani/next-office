// payload/collections/Orders.ts

import { CollectionConfig } from "payload";

export const Orders: CollectionConfig = {
  slug: "orders",

  admin: {
    useAsTitle: "orderNumber",
    defaultColumns: ["orderNumber", "customer.fullName", "total", "status", "paymentStatus", "createdAt"],
  },

  access: {
    read: ({ req }) => {
      // Allow admin to read all
      if (req.user) return true;

      // Allow users to read their own orders (if auth added later)
      return {
        email: {
          equals: req.user?.email,
        },
      };
    },
    create: () => true, // created via API
    update: ({ req }) => !!req.user, // admin only
    delete: ({ req }) => !!req.user,
  },

  fields: [
    // ============================
    // ORDER IDENTIFICATION
    // ============================

    {
      name: "orderNumber",
      type: "text",
      unique: true,
      required: true,
    },
     {
      name: "DeliveryDate",
      type: "text",
      required: true,
    },

    {
      name: "status",
      type: "select",
      required: true,
      defaultValue: "pending",
      options: [
        { label: "Pending", value: "pending" },
        { label: "Processing", value: "processing" },
        { label: "Shipped", value: "shipped" },
        { label: "Delivered", value: "delivered" },
        { label: "Cancelled", value: "cancelled" },
      ],
    },

    // ============================
    // PAYMENT
    // ============================

    {
      name: "paymentStatus",
      type: "select",
      required: true,
      defaultValue: "unpaid",
      options: [
        { label: "Unpaid", value: "unpaid" },
        { label: "Paid", value: "paid" },
        { label: "Failed", value: "failed" },
        { label: "Refunded", value: "refunded" },
      ],
    },

    {
      name: "paymentMethod",
      type: "select",
      options: [
        { label: "M-Pesa", value: "mpesa" },
        {label: "Airtel-money", value: "airtel"},
        { label: "Card", value: "card" },
        { label: "Bank Transfer", value: "bank" },
        { label: "Cash on Delivery", value: "cod" },
      ],
    },

    {
      name: "transactionId",
      type: "text",
    },

    // ============================
    // CUSTOMER INFORMATION
    // ============================

    {
      name: "customer",
      type: "group",
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
        },
        {
          name: "email",
          type: "email",
          required: true,
        },
        {
          name: "phone",
          type: "text",
          required: true,
        },
      ],
    },

    // ============================
    // DELIVERY ADDRESS
    // ============================

    {
      name: "deliveryAddress",
      type: "group",
      fields: [
        { name: "city", type: "text", required: true },
        { name: "areaStreet", type: "text", required: true },
        { name: "building", type: "text" },
        { name: "officeNumber", type: "text" },
        { name: "landmark", type: "text" },
        { name: "AdditionalDeliveryInformation", type: "textarea" },
      ],
    },

    // ============================
    // ORDER ITEMS
    // ============================

    {
      name: "items",
      type: "array",
      required: true,
      fields: [
        {
          name: "product",
          type: "relationship",
          relationTo: "products",
          required: true,
        },
        {
          name: "name",
          type: "text",
          required: true,
        },
        {
          name: "price",
          type: "number",
          required: true,
        },
        {
          name: "quantity",
          type: "number",
          required: true,
        },
        {
          name: "subtotal",
          type: "number",
          required: true,
        },
      ],
    },
    { name: "AdditionalOrderInformation", type: "textarea" },
    // ============================
    // TOTALS
    // ============================

    {
      name: "subtotal",
      type: "number",
      required: true,
    },
    {
      name: "shipping",
      type: "number",
      defaultValue: 0,
    },
    {
      name: "total",
      type: "number",
      required: true,
    },

    // ============================
    // INTERNAL NOTES
    // ============================

    {
      name: "adminNotes",
      type: "textarea",
    },
  ],

  timestamps: true,
};