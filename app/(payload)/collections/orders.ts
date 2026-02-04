import type { CollectionConfig } from 'payload'

export const Orders: CollectionConfig = {
  slug: 'orders',

  admin: {
    useAsTitle: 'orderNumber',
    defaultColumns: ['orderNumber', 'status', 'total', 'createdAt'],
  },

  access: {
    create: () => true, // allow checkout
    read: ({ req }) => {
      // admins can see all, users only their own
      if (req.user?.role === 'admin') return true
      return {
        user: {
          equals: req.user?.id,
        },
      }
    },
    update: ({ req }) => req.user?.role === 'admin',
    delete: ({ req }) => req.user?.role === 'admin',
  },

  fields: [
    // ─────────── Meta ───────────
    {
      name: 'orderNumber',
      type: 'text',
      required: true,
      unique: true,
      admin: { readOnly: true },
    },

    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'pending',
      options: [
        { label: 'Pending', value: 'pending' },
        { label: 'Processing', value: 'processing' },
        { label: 'Shipped', value: 'shipped' },
        { label: 'Delivered', value: 'delivered' },
        { label: 'Cancelled', value: 'cancelled' },
      ],
    },

    // ─────────── User ───────────
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: false, // guest checkout allowed
    },

    // ─────────── Items ───────────
    {
      name: 'items',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'product',
          type: 'relationship',
          relationTo: 'products',
          required: true,
        },
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'price',
          type: 'number',
          required: true,
        },
        {
          name: 'quantity',
          type: 'number',
          required: true,
          min: 1,
        },
      ],
    },

    // ─────────── Totals ───────────
    {
      name: 'subtotal',
      type: 'number',
      required: true,
    },
    {
      name: 'deliveryFee',
      type: 'number',
      defaultValue: 0,
    },
    {
      name: 'total',
      type: 'number',
      required: true,
    },

    // ─────────── Delivery Info ───────────
    {
      name: 'delivery',
      type: 'group',
      fields: [
        { name: 'fullName', type: 'text', required: true },
        { name: 'phone', type: 'text', required: true },
        { name: 'address', type: 'text', required: true },
        { name: 'city', type: 'text', required: true },
        { name: 'notes', type: 'textarea' },
      ],
    },

    // ─────────── Payment ───────────
    {
      name: 'paymentMethod',
      type: 'select',
      options: [
        { label: 'Card', value: 'card' },
        { label: 'Mobile Money', value: 'mobile_money' },
        { label: 'Cash on Delivery', value: 'cod' },
      ],
    },

    {
      name: 'paymentReference',
      type: 'text',
    },
  ],
}
