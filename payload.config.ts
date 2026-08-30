import sharp from 'sharp'
import { FixedToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { s3Storage } from '@payloadcms/storage-s3'
import { buildConfig } from 'payload'
import { Products } from './app/(payload)/collections/products'
import { OfficeElectronics } from './app/(payload)/collections/electronics'
import { OfficeWorkspaceAccessories } from './app/(payload)/collections/accessories'
import { Media } from './app/(payload)/collections/media'
import { Users } from './app/(payload)/collections/users'
import { Orders } from './app/(payload)/collections/orders'
import { Messages } from './app/(payload)/collections/messages'
import { Reviews } from './app/(payload)/collections/reviews'
import { Categories } from './app/(payload)/collections/categories'
import { Blogs } from './app/(payload)/collections/blogs'
import { OfficeSupplies } from './app/(payload)/collections/supplies'
import { OfficePantryHydration } from './app/(payload)/collections/pantry'
import { OfficeCleaningHygiene } from './app/(payload)/collections/cleaning'


export default buildConfig({
  admin:{
      user: Users.slug,
  },

  // 👇 THIS IS IMPORTANT
  typescript: {
    outputFile: './payload-types.ts',
  },
  // If you'd like to use Rich Text, pass your editor here
  editor: lexicalEditor({
    features: ({defaultFeatures}) => [
      ...defaultFeatures,
      FixedToolbarFeature()
    ]
}),


plugins: [
  s3Storage({
    collections: {
    media: {
      disablePayloadAccessControl: true,
      generateFileURL: ({ filename, prefix }) => {
        const key = prefix ? `${prefix}/${filename}` : filename

        return `${process.env.S3_PUBLIC_URL}/${key}`
      },
    },
    },

    bucket: process.env.S3_BUCKET!,

    config: {
      credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY_ID!,
        secretAccessKey: process.env.S3_SECRET_ACCESS_KEY!,
      },

      region: process.env.S3_REGION,
      endpoint: process.env.S3_ENDPOINT,

      forcePathStyle: true,
    },
  }),
],

// serverURL: process.env.NEXT_PUBLIC_SERVER_URL,
  // Define and configure your collections in this array
  collections: [Users, Messages, Categories, Products, OfficeSupplies, OfficePantryHydration, OfficeCleaningHygiene,  OfficeWorkspaceAccessories, OfficeElectronics, Orders, Reviews, Media, Blogs],

  // Your Payload secret - should be a complex and secure string, unguessable
  secret: process.env.PAYLOAD_SECRET || '',
  // Whichever Database Adapter you're using should go here
  // Mongoose is shown as an example, but you can also use Postgres
  
   db: postgresAdapter({
    // Postgres-specific arguments go here.
    // `pool` is required.
    pool: {
      connectionString: process.env.DATABASE_URL,
    },
  }),
  // If you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.
  // This is optional - if you don't need to do these things,
  // you don't need it!
  sharp,
})