import type { CollectionConfig } from 'payload';

 const categories = [
  {
    label: 'Categories',
    value: 'category',
  },
  {
    label: 'Sub-categories',
    value: 'subcategory',
 
  },
   {
    label: 'Office vibes',
    value: 'vibe',
   
  }
  // ... other categories
];


export const Categories: CollectionConfig = {
  slug: 'categories',

  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'type', 'description'],
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

    {
      name: 'type',
      type: 'select',
      required: true,
      options: categories.map(({ label, value }) => ({ label, value })),
      index: true,
    },

    {
          name: 'description',
          type: 'text',
          required: true
        },
    {
          name: 'page-description',
          type: 'text',
          required: true
        },    

  ],
}

