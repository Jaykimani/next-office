import type { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',

  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'price', 'stock', 'category'],
  },

  access: {
    read: () => true, // public products
  },

  fields: [
    /**
     * NAME
     */
    {
      name: 'name',
      type: 'text',
      required: true,
      index: true,
    },

    /**
     * IMAGES
     */
    {
      name: 'images',
      type: 'upload',
      relationTo: 'media',
      hasMany: true,
      required: true,
    },

    /**
     * PRICE
     */
    {
      name: 'price',
      type: 'number',
      required: true,
      min: 0,
    },

    /**
     * CATEGORY
     */
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Accessories', value: 'accessories' },
        { label: 'Lighting', value: 'lighting' },
        { label: 'Wall-decor', value: 'wall-decor' },
        { label: 'Greenery', value: 'greenery' },
      ],
      index: true,
    },

    /**
     * STOCK
     */
    {
      name: 'stock',
      type: 'number',
      required: true,
      defaultValue: 0,
      min: 0,
    },

    /**
     * DELIVERY INFORMATION
     */
    {
      name: 'delivery',
      type: 'group',
      fields: [
        {
          name: 'deliveryTime',
          type: 'text',
          required: true,
          defaultValue: '2–5 business days',
        },
        {
          name: 'pickupAvailable',
          type: 'checkbox',
          defaultValue: false,
        },
      ],
    },

    /**
     * TAGS
     */
    {
      name: 'tags',
      type: 'array',
      index: true,
      fields: [
        {
          name: 'tag',
          type: 'text',
          required: true,
        },
      ],
    },

    /**
     * DESCRIPTION
     */
    {
      name: 'description',
      type: 'group',
      fields: [
        {
          name: 'productInformation',
          type: 'richText',
          required: true
        },
        {
          name: 'dimensions',
          type: 'text',
        },
        {
          name: 'structuralMaterial',
          type: 'text',
          required: true
        },
        {
          name: 'color',
          type: 'text',
          required: true
        },
        {
          name: 'careInstructions',
          type: 'text'
        }
      ],
    },

    /**
     * REVIEWS
     */
    {
      name: 'reviews',
      type: 'array',
      fields: [
        {
          name: 'user',
          type: 'relationship',
          relationTo: 'users',
        },
        {
          name: 'rating',
          type: 'number',
          min: 1,
          max: 5,
          required: true,
        },
        {
          name: 'comment',
          type: 'textarea',
        },
      ],
    },

    /**
     * AUTO FIELDS
     */
    {
      name: 'averageRating',
      type: 'number',
      admin: {
        readOnly: true,
      },
    },
  ],
}


export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    mimeTypes: ['image/*'],
  },
  fields: [],
}