import type { CollectionConfig } from 'payload'

export const BusinessAccounts: CollectionConfig = {
  slug: 'business-accounts',

  auth: {
    verify: false,
    maxLoginAttempts: 5,
    lockTime: 600 * 1000,
  },

  hooks: {
    beforeChange: [
      async ({ data, operation }) => {
        if (operation === 'create') {
          data.accountStatus = 'active'
        }

        return data
      },
    ],

    beforeLogin: [
      async ({ user }) => {
        if (user.accountStatus === 'pending') {
          throw new Error(
            'Your business account is still pending approval. Please wait for OfficeFlow to activate your account.',
          )
        }

        if (user.accountStatus === 'suspended') {
          throw new Error(
            'Your business account has been suspended. Please contact OfficeFlow for assistance.',
          )
        }

        if (user.accountStatus === 'rejected') {
          throw new Error(
            'Your business account request was not approved. Please contact OfficeFlow if you need assistance.',
          )
        }

        if (user.accountStatus !== 'active') {
          throw new Error(
            'Your business account is not currently active.',
          )
        }

        return user
      },
    ],
  },

  admin: {
    useAsTitle: 'businessName',

    defaultColumns: [
      'businessName',
      'contactPerson',
      'email',
      'businessType',
      'accountStatus',
    ],
  },

  access: {
    create: () => true,

    read: ({ req }) => {
      if (!req.user) {
        return false
      }

      if (
        req.user.collection === 'users' &&
        req.user.role === 'admin'
      ) {
        return true
      }

      if (req.user.collection === 'business-accounts') {
        return {
          id: {
            equals: req.user.id,
          },
        }
      }

      return false
    },

    update: ({ req }) => {
      if (!req.user) {
        return false
      }

      if (
        req.user.collection === 'users' &&
        req.user.role === 'admin'
      ) {
        return true
      }

      if (req.user.collection === 'business-accounts') {
        return {
          id: {
            equals: req.user.id,
          },
        }
      }

      return false
    },

    delete: ({ req }) => {
      return (
        req.user?.collection === 'users' &&
        req.user.role === 'admin'
      )
    },
  },

  fields: [
    // ---------------------------------------------------
    // BUSINESS INFORMATION
    // ---------------------------------------------------

    {
      name: 'businessName',
      type: 'text',
      required: true,
      label: 'Business / Company Name',
    },

    {
      name: 'businessType',
      type: 'select',
      required: true,
      options: [
        {
          label: 'SME',
          value: 'sme',
        },
        {
          label: 'Startup',
          value: 'startup',
        },
        {
          label: 'Corporate',
          value: 'corporate',
        },
        {
          label: 'NGO',
          value: 'ngo',
        },
        {
          label: 'School / University',
          value: 'school-university',
        },
        {
          label: 'Government Institution',
          value: 'government',
        },
        {
          label: 'Law Firm',
          value: 'law-firm',
        },
        {
          label: 'Healthcare / Clinic',
          value: 'healthcare',
        },
        {
          label: 'Coworking Space',
          value: 'coworking-space',
        },
        {
          label: 'Other',
          value: 'other',
        },
      ],
    },

    {
      name: 'businessLocation',
      type: 'text',
      required: true,
      label: 'Business / Office Location',
    },


    // ---------------------------------------------------
    // CONTACT INFORMATION
    // ---------------------------------------------------

    {
      name: 'contactPerson',
      type: 'text',
      required: true,
      label: 'Contact Person',
    },

    {
      name: 'position',
      type: 'select',
      label: 'Position / Role',
      options: [
        {
          label: 'Procurement',
          value: 'procurement',
        },
        {
          label: 'Office Manager',
          value: 'office-manager',
        },
        {
          label: 'Administration',
          value: 'administration',
        },
        {
          label: 'HR',
          value: 'hr',
        },
        {
          label: 'Operations',
          value: 'operations',
        },
        {
          label: 'Business Owner',
          value: 'business-owner',
        },
        {
          label: 'Other',
          value: 'other',
        },
      ],
    },
    
     {
      name: 'phone',
      type: 'text',
      required: true,
      label: 'Phone / WhatsApp Number',
    },


    // ---------------------------------------------------
    // OFFICE SUPPLY REQUIREMENTS
    // ---------------------------------------------------
      {
      name: 'preferredContactMethod',
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
      name: 'supplyCategories',
      type: 'select',
      required: true,
      hasMany: true,
      label: 'Office Supply Categories',
      options: [
        {
          label: 'Stationery & Writing Supplies',
          value: 'stationery-writing-supplies',
        },
        {
          label: 'Printing & Paper Supplies',
          value: 'printing-paper-supplies',
        },
        {
          label: 'Printer & Ink Supplies',
          value: 'printer-ink-supplies',
        },
        {
          label: 'IT & Tech Consumables',
          value: 'it-tech-consumables',
        },
        {
          label: 'Pantry & Hydration Supplies',
          value: 'pantry-hydration-supplies',
        },
        {
          label: 'Cleaning & Hygiene Supplies',
          value: 'cleaning-hygiene-supplies',
        },
        {
          label: 'Other',
          value: 'other',
        },
      ],
    },

    {
      name: 'purchaseFrequency',
      type: 'select',
      required: true,
      hasMany: true,
      label: 'How Often Do You Purchase Office Supplies?',
      options: [
        {
          label: 'Weekly',
          value: 'weekly',
        },
        {
          label: 'Bi-weekly',
          value: 'bi-weekly',
        },
        {
          label: 'Monthly',
          value: 'monthly',
        },
        {
          label: 'Occasionally',
          value: 'occasionally',
        },
        {
          label: 'As Needed',
          value: 'as-needed',
        },
      ],
    },

    {
      name: 'interestedInRestocking',
      type: 'select',
      required: true,
      label: 'Interested in Regular Office Restocking?',
      options: [
        {
          label: 'Yes',
          value: 'yes',
        },
        {
          label: 'No',
          value: 'no',
        },
        {
          label: 'I would like to learn more',
          value: 'learn-more',
        },
      ],
    },

    // ---------------------------------------------------
    // ACCOUNT STATUS
    // ---------------------------------------------------

    {
      name: 'accountStatus',
      type: 'select',
      defaultValue: 'active',
      required: true,
      label: 'Account Status',
      options: [
        {
          label: 'Pending',
          value: 'pending',
        },
        {
          label: 'Active',
          value: 'active',
        },
        {
          label: 'Suspended',
          value: 'suspended',
        },
        {
          label: 'Rejected',
          value: 'rejected',
        },
      ],
    },
  ],
}