// components/ScrollToTop.jsx
'use client'; // Required for Next.js App Router

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const ScrollToTop = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Scroll to top on every route change
    window.scrollTo(0, 0);
  }, [pathname]); // Depend on the pathname to re-run effect when it changes

  return null; // This component doesn't render anything
};

export default ScrollToTop;
