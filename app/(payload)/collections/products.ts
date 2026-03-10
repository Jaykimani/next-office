import type { CollectionConfig } from 'payload';


  const categories = [
  {
    label: 'Office Accessories',
    value: 'office-accessories',
  },
  {
    label: 'Office Lighting Solutions',
    value: 'office-lighting-solutions',
 
  },
   {
    label: 'Office Wall Accessories',
    value: 'office-wall-accessories',
   
  },
  {
    label: 'Office Greenery',
    value: 'office-greenery',
  },
  // ... other categories
];

  const subcategories = [
              { label: 'Office Desk Organisers', value: 'office-desk-organisers' }, 
              { label: 'Office Desk Gadgets', value: 'office-desk-gadgets' },
              { label: 'Office Productivity/Writing Tools', value: 'office-productivity-writing-tools' },
              { label: 'Office Ergonomic/Comfort Accessories', value: 'office-ergonomic-comfort-accessories' },
              { label: 'Office Aesthetics/Personalized Items', value: 'office-aesthetics-personalized-accessories' },
              { label: 'Office Desk Lamps', value: 'office-desk-lamps' }, 
              { label: 'Office Overhead Lighting', value: 'office-overhead-lighting' },
              { label: 'Office Wall-mounted Lighting', value: 'office-wall-mounted-lighting' },
              { label: 'Office Stand-alone Lighting', value: 'office-stand-alone-lighting' },
              { label: 'Office Wall Art/Posters', value: 'office-wall-art-posters' }, 
              { label: 'Office Wall Clocks', value: 'office-wall-clocks' },
              { label: 'Office Wall-mounted Shelves', value: 'office-wall-mounted-Shelves' },
              { label: 'Office Desk Greenery', value: 'office-desk-greenery' }, 
              { label: 'Artificial Office Greenery', value: 'artificial-office-greenery' },
              { label: 'Natural Office Greenery', value: 'natural-office-greenery' },
              { label: 'Office Planters and Pots', value: 'office-planters-and-pots' }

  ]
  const vibes = [
              { label: 'Minimalist Offfice Vibe', value: 'minimalist-office-vibe' }, 
              { label: 'Executive/CEO Office Vibe', value: 'executive-office-vibe' },
              { label: 'Modern Professional Office Vibe', value: 'modern-professional-office-vibe' },
              { label: 'Creative Studio Office Vibe', value: 'creative-studio-office-vibe' },
              { label: 'Nature Inspired Office Vibe', value: 'nature-inspired-office-vibe' },          
  ]

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

    {
  name: 'slug',
  type: 'text',
  admin: {
    position: 'sidebar',
  },
  hooks: {
    beforeValidate: [
      ({ data }) => {
        if (!data?.slug && data?.name) {
          data.slug = data.name
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');
        }
      },
    ],
  },
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
      options: categories.map(({ label, value }) => ({ label, value })),
      index: true,
    },

    {
  name: 'subcategories',
  type: 'select',
  hasMany: true,
  required: true,
  options: subcategories.map(({ label, value }) => ({ label, value })),
  admin: {
    description: 'Select one or more subcategories',
  },
},  

 {
  name: 'vibe',
  type: 'select',
  hasMany: true,
  required: true,
  options: vibes.map(({ label, value }) => ({ label, value })),
  admin: {
    description: 'Select one or more subcategories',
  },
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
        },
        {
          name: 'color',
          type: 'text',
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
  type: 'relationship',
  relationTo: 'reviews',
  hasMany: true,
  admin: {
    description: 'All reviews for this product',
  },
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

