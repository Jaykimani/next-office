import type { CollectionConfig } from 'payload';

export const Blogs: CollectionConfig = {
  slug: 'blogs',

  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'publishedDate'],
  },

  access: {
    read: () => true, // public access
  },

  fields: [
    // 📝 Title
    {
      name: 'title',
      type: 'text',
      required: true,
    },

    // 🔗 Slug (for URL)
    {
  name: 'slug',
  type: 'text',
  admin: {
    position: 'sidebar',
  },
  hooks: {
    beforeValidate: [
      ({ data }) => {
        if (!data?.slug && data?.title) {
          data.slug = data.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');
        }
      },
    ],
  },
},

    // 🖼️ Featured Image
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media', // assuming you have a media collection
      required: true,
    },

    // 📂 Category
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
         { label: 'Office Setup Ideas', value: 'office-setup' },
         { label: 'Office Styling & Decor Tips', value: 'office-styling' },
        { label: 'Productivity Tips', value: 'productivity' },
        { label: 'Buying Guides', value: 'buying-guides' },
        { label: 'Startup & Corporate Office Solutions', value: 'startup-corporate-solutions' },
        { label: 'Workspace Tech & Tools', value: 'workspace-tech-tools' },
      ],
    },

    // ✍️ Author
    {
      name: 'author',
      type: 'text',
      defaultValue: 'Kimani - Office Aura',
    },

    // 📅 Published Date
    {
      name: 'publishedDate',
      type: 'date',
      required: true,
      defaultValue: () => new Date(),
    },

    // 📄 Excerpt (for previews)
    {
      name: 'excerpt',
      type: 'textarea',
      required: true,
      maxLength: 200,
    },

    // 🧠 Main Content (Rich Text)
    {
      name: 'content',
      type: 'richText',
      required: true,
    },

    // ⭐ Featured Post Toggle
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: true,
    },

    // 👁️ Read Time (optional but nice UX)
    {
      name: 'readTime',
      type: 'text',
      admin: {
        description: 'Example: 5 minutes',
      },
    },

    // 🔍 SEO Group
    {
      name: 'seo',
      type: 'group',
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
        },
        {
          name: 'keywords',
          type: 'text',
          admin: {
            description: 'Comma separated keywords',
          },
        },
      ],
    },
  ],

  timestamps: true,
};

