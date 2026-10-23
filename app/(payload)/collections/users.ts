import type { CollectionConfig } from 'payload'
import type { User } from '@payload-types'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    tokenExpiration: 60 * 60, // 1 hour
  },

  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'role', 'createdAt'],
  },

  access: {
    // Anyone can sign up
    create: () => true,

    // 🔒 THIS CONTROLS WHO CAN ENTER THE ADMIN PANEL
    admin: ({ req }) => {
      const user = req.user as User | null
      return Boolean(req.user?.collection === 'users' && (user?.role === 'admin' || user?.role === 'manager'))
    },

    // Users can read themselves, admins/managers can read all
    read: ({ req }) => {
      const user = req.user as User | null
      if (req.user?.collection === 'users' && (user?.role === 'admin' || user?.role === 'manager')) {
        return true
      }
      return {
        id: {
          equals: user?.id,
        },
      }
    },

    // Users can update themselves, admins/managers can update all
    update: ({ req }) => {
      const user = req.user as User | null
      if (req.user?.collection === 'users' && (user?.role === 'admin' || user?.role === 'manager')) {
        return true
      }
      return {
        id: {
          equals: user?.id,
        },
      }
    },

    // Only admins can delete users
    delete: ({ req }) => {
      const user = req.user as User | null
      return Boolean(req.user?.collection === 'users' && user?.role === 'admin')
    },
  },

  fields: [
    {
      name: 'role',
      type: 'select',
      required: true,
      defaultValue: 'user',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Manager', value: 'manager' },
        { label: 'User', value: 'user' },
      ],
      access: {
        create: ({ req }) => {
          const user = req.user as User | null
          return Boolean(req.user?.collection === 'users' && user?.role === 'admin')
        },
        update: ({ req }) => {
          const user = req.user as User | null
          return Boolean(req.user?.collection === 'users' && user?.role === 'admin')
        },
      },
    },
    {
      name: 'fullName',
      type: 'text',
    },
    {
      name: 'phone',
      type: 'text',
    },
    // ❌ REMOVED the manual email field here because auth: true handles it automatically.
  ],
}