import sharp from 'sharp'
import { FixedToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { buildConfig } from 'payload'
import { Products } from './app/(payload)/collections/products'
import { OfficeElectronics } from './app/(payload)/collections/electronics'
import { OfficeInteriorDecor } from './app/(payload)/collections/decor'
import { OfficeGreenery} from './app/(payload)/collections/greenery'
import { OfficeWorkspaceAccessories } from './app/(payload)/collections/accessories'
import { Media } from './app/(payload)/collections/media'
import { Users } from './app/(payload)/collections/users'
import { Orders } from './app/(payload)/collections/orders'
import { Messages } from './app/(payload)/collections/messages'
import { Reviews } from './app/(payload)/collections/reviews'
import { Categories } from './app/(payload)/collections/categories'
import { Blogs } from './app/(payload)/collections/blogs'

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
// serverURL: process.env.NEXT_PUBLIC_SERVER_URL,
  // Define and configure your collections in this array
  collections: [Users, Messages, Categories, Products, OfficeInteriorDecor, OfficeGreenery, OfficeWorkspaceAccessories, OfficeElectronics, Media, Orders, Reviews, Blogs],

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