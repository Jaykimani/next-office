import type { CollectionConfig } from 'payload'

const isAdmin = (user: any) => user?.collection === 'users' && user?.role === 'admin';
 
const isActiveBusinessAccount = (user: any) => user?.collection === 'business-accounts' && user?.accountStatus === 'active';
 


export const RestockPlans: CollectionConfig = {
  slug: 'restock-plans',

  admin: {
    useAsTitle: 'frequency',
    defaultColumns:[
      'planName',          
      'frequency',         
      'status',        
      'total',             
      'createdAt',

    ],
    description:
      'Manage recurring restock plans created by OfficeFlow business customers.',
  },

  access: {
  create: ({ req }) => {
    if (!req.user) return false

    return (
      isAdmin(req.user) ||
      isActiveBusinessAccount(req.user)
    )
  },

  read: ({ req }) => {
    if (!req.user) return false

    if (isAdmin(req.user)) return true

    if (isActiveBusinessAccount(req.user)) {
      return {
        businessAccount: {
          equals: req.user.id,
        },
      }
    }

    return false
    
  },

  update: ({ req }) => {
    if (!req.user) return false

    if (isAdmin(req.user)) return true

    if (isActiveBusinessAccount(req.user)) {
      return {
        businessAccount: {
          equals: req.user.id,
        },
      }
    }

    return false
  },

  delete: ({ req }) => isAdmin(req.user),
},
    
  fields: [
    {
      name: 'businessAccount',
      type: 'relationship',
      relationTo: 'business-accounts',
      required: true,
      index: true,
      label: 'Business Account',
      access: {
        update: () => false,
      },
    },
    
    {
      name: "planName",
      type: "text",
      required: true
    },
     {
      name: 'frequency',
      type: 'select',
      required: true,
      label: 'Restocking Frequency',
      options: [
        {
          label: 'Weekly',
          value: 'weekly',
        },
        {
          label: 'Twice a Week',
          value: 'twice-weekly',
        },
        {
          label: 'Monthly',
          value: 'monthly',
        },
        {
          label: 'Twice a Month',
          value: 'twice-monthly',
        },
      ],
    },


    {
      name: 'deliveryTimeline',
      type: 'array',
      label: 'Delivery Dates',
      minRows: 1,
      maxRows: 2,
      fields: [
        {
          name: 'day',
          type: 'text',
          required: true,
          label: 'Day',
        },
      ],
   
    },

   {
      name: "contactPerson",
      type: "group",
      fields: [
        {name: "name", type: "text"},
        {name: "phone", type: "text"},
        {name: "email", type: "text"},
      ]
    },
   {
      name: 'ContactMeBeforeDelivery',
      type: 'checkbox',
      defaultValue: false,
    },
     {
      name: 'contactMethod',
      type: 'select',
      required: true,
      hasMany: true,
      label: 'What is your preferred contact method?',
      options: [
        {
          label: 'Email Address',
          value: 'email-address',
        },
        {
          label: 'Phone Call',
          value: 'phone-call',
        },
        {
          label: 'Direct Messaging',
          value: 'direct-messaging',
        },
        {
          label: 'Whatsapp',
          value: 'whatsapp',
        }
      ],
    },

  {
      name: "deliveryAddress",
      type: "group",
      fields: [
        {name: "businessName", type: "text"},
        { name: "areaStreet", type: "text" },
        { name: "building", type: "text" },
        { name: "officeNumber", type: "text" },
      ],
    },
    {
      name: 'items',
      type: 'array',
      required: true,
      minRows: 1,
      label: 'Restock Products',
      fields: [
        {
         name: 'productId',
         type: 'number',
         required: true
        },
        {
          name: 'productName',
          type: 'text',
          label: "Product Name"
        },
        {
          name: 'productCategory',
          type: 'text',
          label: 'Product Category'
        },
        {
          name: 'variant',
          type: 'text',
          label: 'Product Variant'
        },
        {
          name: 'price',
          type: 'number',
          label: 'Product Price'
        },
        {
          name: 'quantity',
          type: 'number',
          required: true,
          min: 1,
          label: 'Regular Quantity',
        },
          {
          name: 'subtotal',
          type: 'number',
          label: 'Product Subtotal'
        },
      ],
    },

   {
    name: 'total',
    type: "text",
    label: 'Restock Total',
    required: true
   },
    

    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'active',
      label: 'Plan Status',
      options: [
        { label: 'Active', value: 'active' },
        { label: 'Paused', value: 'paused' },
        { label: 'Cancelled', value: 'cancelled' },
      ],
    },

   
  ],
}

