import { CollectionConfig } from 'payload'

export const Reviews: CollectionConfig = {
  slug: 'reviews',
  admin: {
    useAsTitle: 'title', // default title field
    defaultColumns: ['title', 'product', 'rating', 'createdAt'],
  },
  access: {
    // optional: who can read/write reviews
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'product',
      type: 'relationship',
      relationTo: 'products', // your products collection slug
      required: true,
      hasMany: false,
      admin: {
        description: 'Select the product this review belongs to',
      },
    },
    {
      name: 'rating',
      type: 'number',
      required: true,
      min: 1,
      max: 5,
      admin: {
        description: 'Rating out of 5 stars',
      },
    },
    {
      name: 'authorName',
      type: 'text',
      required: true,
    },
    {
      name: 'authorEmail',
      type: 'text',
      required: true,
    },
    {
      name: 'reviewText',
      type: 'textarea',
      required: true,
    },
    {
      name: 'approved',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Check to approve this review before displaying',
      },
    },
  ],
  timestamps: true,
}
