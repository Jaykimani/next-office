import type { CollectionConfig } from 'payload';


  const subcategories = [
              { label: 'Office Ergonomic/Comfort Accessories', value: 'office-ergonomic-comfort-accessories' },
              { label: 'Office Desk Essentials/Utility Tools', value: 'office-desk-essentials-utility-tools' },
              { label: 'Office Productivity/Writing Tools', value: 'office-productivity-writing-tools' },
              { label: 'Office Desk Organizers & Storage', value: 'office-desk-organizer-storage' },
              

  ]
  const vibes = [
              { label: 'Minimalist Offfice Vibe', value: 'minimalist-office-vibe' }, 
              { label: 'Executive/CEO Office Vibe', value: 'executive-office-vibe' },
              { label: 'Modern Professional Office Vibe', value: 'modern-professional-office-vibe' },
              { label: 'Creative Studio Office Vibe', value: 'creative-studio-office-vibe' },
              { label: 'Nature Inspired Office Vibe', value: 'nature-inspired-office-vibe' },          
  ]

export const OfficeWorkspaceAccessories: CollectionConfig = {
  slug: 'office-workspace-accessories',

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
  name: "category",
  type: "text",
  defaultValue: "office-workspace-accessories",
  admin: {
    readOnly: true,
    hidden: true,
  },
},
    {
      name: 'name',
      type: 'text',
      required: true,
      index: true,
    },
 {
  name: 'subcategory',
  type: 'select',
  required: true,
  options: subcategories.map(({ label, value }) => ({ label, value })),
  admin: {
    description: 'Select one subcategories',
  },
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
  name: "variation",
  type: "select",
  required: false,
  options: [
    { label: "Color", value: "color" },
    { label: "Size", value: "size" },
  ],
  admin: {
    description: "Select the type of variation for this product(Optional)",
  },
},
{
  name: "variants",
  type: "array",
  required: false,
  fields: [
    {
      name: "option",
      type: "text",
      required: true,
      admin: {
        description: "e.g. Small, Medium, Large, Black, White",
      },
    },
    {
      name: "price",
      type: "number",
      required: true,
    },
    {
      name: "stock",
      type: "number",
      required: false,
    },
  ],
},
   

 {
  name: 'vibe',
  type: 'select',
  hasMany: true,
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
  name: "tags",
  type: "text",
  hasMany: true,
  index: true
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

  ],
}


