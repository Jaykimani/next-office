import { Access } from "payload"

export const adminAccess: Access = ({ req: { user } }) => {
  return user?.role === "admin" || user?.role === "manager"
}