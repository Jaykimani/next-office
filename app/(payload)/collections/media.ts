import type { CollectionConfig } from 'payload';


export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    mimeTypes: ['image/*'],
  },
  fields: [],
    access: {
     read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
}
