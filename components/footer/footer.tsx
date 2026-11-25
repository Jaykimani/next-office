import styles from './footer.module.css';
import Link from 'next/link';

const NAIROBI_HUB_LINKS = [
    {
    href: '/office-supplies-nairobi',
    label: 'Office Supplies Nairobi City',
  },
  {
    href: '/office-supplies-nairobi/westlands',
    label: 'Office Supplies Westlands',
  },
  {
    href: '/office-supplies-nairobi/upper-hill',
    label: 'Office Supplies Upper Hill',
  },
  {
    href: '/office-supplies-nairobi/nairobi-cbd',
    label: 'Office Supplies Nairobi CBD',
  },
];

const Footer = () => {
  return (
    <footer id={styles.footer}>
      <div className={styles.footerInset}>
        <div className={styles.footerLeft}>
          <h2>Quick Links</h2>
          <p>
            &copy; 2026 Office<span>Flow</span>. All rights reserved.
          </p>
        </div>

        <div className={styles.footerRight}>
          <div className={styles.footerRightInset}>
            <p className={styles.hubColumnTitle}>Internal Links</p>
            <Link href={'/my-account/sign-in'} className={styles.footerLink}>
              <p>Sign in/Register</p>
            </Link>
            <Link href={'/'} className={styles.footerLink}>
              <p>Home</p>
            </Link>
            <Link href={'/shop'} className={styles.footerLink}>
              <p>Shop</p>
            </Link>
            <Link href={'/contact'} className={styles.footerLink}>
              <p>Contact</p>
            </Link>
            <Link href={'/about'} className={styles.footerLink}>
              <p>About us</p>
            </Link>
            <Link href={'/blogs'} className={styles.footerLink}>
              <p>Blogs</p>
            </Link>
          </div>

          <div className={styles.footerRightInset}>
            <p className={styles.hubColumnTitle}>Website Policies</p>
            <Link href={'/shipping-delivery'} className={styles.footerLink}>
              <p>Shipping & Delivery</p>
            </Link>
            <Link href={'/terms-and-conditions'} className={styles.footerLink}>
              <p>Terms & Conditions</p>
            </Link>
            <Link href={'/return-refund'} className={styles.footerLink}>
              <p>Returns & Refunds policy</p>
            </Link>
            <Link href={'/faqs'} className={styles.footerLink}>
              <p>Frequently Asked Questions(FAQS)</p>
            </Link>
            <Link href={'/privacy-policy'} className={styles.footerLink}>
              <p>Privacy Policy</p>
            </Link>
          </div>

          <div className={styles.footerRightInset}>
            <p className={styles.hubColumnTitle}>Nairobi Hubs</p>
            {NAIROBI_HUB_LINKS.map((hub) => (
              <Link key={hub.href} href={hub.href} className={styles.footerLink}>
                <p>{hub.label}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;