import type { CollectionConfig } from 'payload'

export const BusinessAccounts: CollectionConfig = {
  slug: 'business-accounts',

  auth: {
    verify: false,
    maxLoginAttempts: 5,
    lockTime: 600 * 1000,
  },

  admin: {
    useAsTitle: 'businessName',
    defaultColumns: [
      'businessName',
      'contactPerson',
      'businessEmail',
      'businessType',
      'accountStatus',
    ],
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

     {
      name: 'email',
      type: 'text',
      required: true,
      label: 'Business Email',
    },
    // ---------------------------------------------------
    // OFFICE SUPPLY REQUIREMENTS
    // ---------------------------------------------------
      {
      name: 'contactMethod',
      type: 'select',
      required: true,
      hasMany: true,
      label: 'What is your preferred contact method?',
      options: [
        {
          label: 'Business Email',
          value: 'business-email',
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
          value: 'stationery-writing',
        },
        {
          label: 'Printing & Paper Supplies',
          value: 'printing-paper',
        },
        {
          label: 'Printer & Ink Supplies',
          value: 'printer-ink',
        },
        {
          label: 'Pantry & Hydration Supplies',
          value: 'pantry-hydration',
        },
        {
          label: 'Cleaning & Hygiene Supplies',
          value: 'cleaning-hygiene',
        },
        {
          label: 'IT & Tech Consumables',
          value: 'it-tech',
        },
        {
          label: 'Safety & Compliance Supplies',
          value: 'safety-compliance',
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

    {
      name: 'additionalRequirements',
      type: 'textarea',
      label: 'Additional Requirements',
    },

    // ---------------------------------------------------
    // CONTACT PREFERENCE
    // ---------------------------------------------------

    {
      name: 'preferredContactMethod',
      type: 'select',
      required: true,
      label: 'Preferred Contact Method',
      options: [
        {
          label: 'Email',
          value: 'email',
        },
        {
          label: 'Phone',
          value: 'phone',
        },
        {
          label: 'WhatsApp',
          value: 'whatsapp',
        },
      ],
    },

    // ---------------------------------------------------
    // ACCOUNT STATUS
    // ---------------------------------------------------

    {
      name: 'accountStatus',
      type: 'select',
      defaultValue: 'pending',
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