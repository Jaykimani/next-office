import styles from './whatsapp.module.css'
import { usePathname } from 'next/navigation'
import { FaWhatsapp } from "react-icons/fa";
import type { Product } from '@/payload-types';
import { Media } from '@/payload-types';

type WhatsAppCTAProps = {
  product?: Product | null
  phoneNumber: string // international format e.g., 254712345678
}

function mediaIsObject(media: number | Media) : media is Media {
  return typeof media !== 'number'
  
}

const Whatsapp = ({ product, phoneNumber }: WhatsAppCTAProps) => {

  const pathname = usePathname()
//   const cartItems = useCartStore((state) => state.items)

  // Build message dynamically
  const message = encodeURIComponent(
    (() => {
      if (product) {
        
       const imageLine = product.images?.[0] && typeof product.images[0] !== 'number'
       ? `\nImage: ${product.images[0].url}`
      : ''

       return `Hi! I'm interested in this product:\n\n${product.name}\nPrice: KES ${product.price}${imageLine}\nLink: https://yourstore.com${pathname}`      }

    //   if (cartItems.length) {
    //     return `Hi! I want to order the following items:\n\n${cartItems
    //       .map((item) => `${item.name} x${item.qty}`)
    //       .join('\n')}\n\nLink: https://yourstore.com${pathname}`
    //   }

      return 'Hi! I need help with an order.'
    })()
  )

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappCta}
      title="Chat with us on WhatsApp"
    >
      <FaWhatsapp size={28} style={{marginRight: '15px'}}/>
      Order on Whatsapp
    </a>
  )
}

export default Whatsapp