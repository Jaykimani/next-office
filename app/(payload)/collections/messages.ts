import type { CollectionConfig } from 'payload';

export const Messages: CollectionConfig = {
  slug: 'messages',

  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'phone', 'email', 'content'],
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
      name: 'phone',
      type: 'text',
      required: true
    },

    {
      name: 'email',
      type: 'text',
      required: true
    },

    {
      name: 'content',
      type: 'text',
      required: true
    }
   
  ],
}