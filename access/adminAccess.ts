import { Access } from "payload"

export const adminAccess: Access = ({ req: { user } }) => {
  if (!user) return false

  if (user.collection !== 'users') {
    return false
  }

  return user.role === 'admin' || user.role === 'manager'
}