import type { CollectionConfig } from 'payload'
import type { User } from '@payload-types'
// import { adminAccess } from '@/access/adminAccess'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    tokenExpiration: 60 * 60 * 24, // 1 hour
  }, // ✅ enables login, password hashing, sessions

  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'role', 'createdAt'],
  },

  access: {
    // Anyone can create a user (signup)
    create: () => true,

    // Users can read themselves, admins can read all
    read: ({ req }) => {
    const user = req.user as User | null
      if (user?.role === 'admin' || user?.role === 'manager') return true

      return {
        id: {
          equals: req.user?.id,
        },
      }
    },

    // Users can update themselves, admins can update all
    update: ({ req }) => {
      if (req.user?.role === 'admin' || req.user?.role === 'manager') return true

      return {
        id: {
          equals: req.user?.id,
        },
      }
    },

    // Only admins can delete users
    delete: ({ req }) => req.user?.role === 'admin',
  },

  fields: [
    // ─────────── Role ───────────
    {
      name: 'role',
      type: 'select',
      required: true,
      defaultValue: 'user',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Manager', value: 'manager' },
        { label: 'User', value: 'user' }
      ],
      access: {
        create: ({ req }) => req.user?.role === 'admin',
        update: ({ req }) => req.user?.role === 'admin',
      },
    },

    // ─────────── Profile Info ───────────
    {
      name: 'fullName',
      type: 'text',
    },

    {
      name: 'phone',
      type: 'text',
    },

    {
        name: "email",
        type: 'text'
    }

    // ─────────── Addresses (Optional) ─────────
  ],
}
