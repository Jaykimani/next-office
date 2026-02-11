import { Playfair_Display } from 'next/font/google';
import { Abel } from 'next/font/google';
import { Roboto } from 'next/font/google';
// Example Google Font
export const Playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair', // Define a CSS variable name
});

export const abel = Abel({
  weight: '400', // Abel is only available in 400 weight
  subsets: ['latin'], // Specify the necessary subsets
  display: 'swap', // 'swap' ensures fallback font is used until Abel loads
  variable: '--font-abel', // Optional: Define a CSS variable for use with Tailwind CSS
});

export const roboto = Roboto({
  weight: '400', // Abel is only available in 400 weight
  subsets: ['latin'], // Specify the necessary subsets
  display: 'swap', // 'swap' ensures fallback font is used until Abel loads
  variable: '--font-roboto', 
})