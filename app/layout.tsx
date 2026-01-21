import Navbar from "@/components/navbar/navbar"
import './global.css'
import { Playfair, abel } from "./fonts" 

export const metadata = {
    title : "Office app",
    description: "An office interior decor app in Kenya."
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`${Playfair.variable} ${abel.variable}`}>
      <body>
        {children}
        </body>
    </html>
  )
}