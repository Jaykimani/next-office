import Navbar from "@/components/navbar/navbar"
import './global.css'
import { Playfair, abel } from "./fonts" 
import ScrollToTop from "@/components/scrollTop"

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
        <ScrollToTop />
        {children}
        </body>
    </html>
  )
}