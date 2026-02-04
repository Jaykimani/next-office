import type { CollectionConfig } from 'payload';

  const categoriesAndSubcats = [
  {
    label: 'Accessories',
    value: 'accessories',
  },
  {
    label: 'Lighting Solutions',
    value: 'lighting-solutions',
 
  },
   {
    label: 'Wall Accessories',
    value: 'wall-accessories',
   
  },
  {
    label: 'Office Greenery',
    value: 'office-greenery',
  },
  // ... other categories
];

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
  unique: true,
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
      options: categoriesAndSubcats.map(({ label, value }) => ({ label, value })),
      index: true,
    },

    {
  name: 'Accessories Subcategory',
  type: 'select',
  options: [{ label: 'Desk Organisers', value: 'desk-organisers' }, 
              { label: 'Desk Gadgets', value: 'desk-gadgets' },
              { label: 'Productivity/Writing Tools', value: 'productivity-writing-tools' },
              { label: 'Ergonomic/Comfort Accessories', value: 'ergonomic-comfort-accessories' },
              { label: 'Aesthetics/Personalized Items', value: 'aesthetics-personalized' }],
  admin: {
    condition: (_, siblingData) =>
      siblingData?.category === 'accessories',
  },
},  
   {
  name: 'Lighting Solutions Subcategory',
  type: 'select',
  options: [{ label: 'Desk Lamps', value: 'desk-lamps' }, 
              { label: 'Overhead Fixtures', value: 'overhead-fixtures' },
              { label: 'Wall-mounted Fixtures', value: 'wall-mounted-fixtures' },
              { label: 'Stand-alone Fixtures', value: 'stand-alone-fixtures' }],
  admin: {
    condition: (_, siblingData) =>
      siblingData?.category === 'lighting-solutions',
  },
},
       {
  name: 'Wall Accessories Subcategory',
  type: 'select',
  options: [{ label: 'Wall Art/Posters', value: 'wall-art-posters' }, 
              { label: 'Wall Clocks', value: 'wall-clocks' },
              { label: 'Wall-mounted Shelves', value: 'wall-mounted-Shelves' }],
  admin: {
    condition: (_, siblingData) =>
      siblingData?.category === 'wall-accessories',
  },
},
    {
  name: 'Office Greenery Subcategory',
  type: 'select',
  options: [{ label: 'Potted Plants', value: 'potted-plants' }, 
              { label: 'Wall/Vertical Greenery', value: 'wall-vertical-greenery' },
              { label: 'Artifial Greenery', value: 'artificial-greenery' },
              { label: 'Outdoor Greenery', value: 'outdoor-greenery' }],
  admin: {
    condition: (_, siblingData) =>
      siblingData?.category === 'office-greenery',
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