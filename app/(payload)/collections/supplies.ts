import type { CollectionConfig } from 'payload';


  

  const subcategories = [
              { label: 'Stationery & Writing Supplies', value: 'stationery-writing-supplies' },
              { label: 'Printing & Paper Supplies', value: 'printing-paper-supplies' }, 
              { label: 'Printer & Ink Supplies', value: 'printer-ink-supplies' }, 
              { label: 'Pantry & Hydration Supplies', value: 'pantry-hydration-supplies' },
              { label: 'Cleaning & Hygiene Supplies', value: 'cleaning-hygiene-supplies' },
              { label: 'IT & Tech Supplies', value: 'it-tech-supplies' },
              

  ]
 
export const OfficeSupplies: CollectionConfig = {
  slug: 'office-supplies',

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
     * 
     */
    {
  name: "category",
  type: "text",
  defaultValue: "office-interior-decor",
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
  required: true,
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


