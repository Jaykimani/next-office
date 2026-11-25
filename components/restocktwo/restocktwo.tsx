import styles from './restocktwo.module.css';
import ServiceNav from '../servicenav/servnav';
import Image from 'next/image';
import Link from 'next/link';

export interface Restock2Props {
  hubName?: string;
  customH1?: string;
  customSubheadline?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  whatsappMessage?: string;
  imageSrc?: string;
  imageAlt?: string;
}

const Restock2 = ({
  hubName,
  customH1,
  customSubheadline,
  primaryCtaLabel,
  primaryCtaHref,
  whatsappMessage,
  imageSrc = '/restock5.jpg',
  imageAlt,
}: Restock2Props) => {
  const encodedWhatsapp = encodeURIComponent(
    whatsappMessage ||
      `Hello OfficeFlow, we're an office in ${hubName} looking for office supplies and recurring restocking.`
  );

  const resolvedAlt =
    imageAlt ||
    `Office supplies, stationery, and workplace restock delivery in ${hubName}`;

  return (
    <main>
      <div className={styles.navbar}>
        <ServiceNav />
      </div>
      <div className={styles.landing}>
        <div className={styles.landingHero}>
          <div className={styles.heroInset}>
            <h1 className={styles.heading1}>{customH1}</h1>
            <p>{customSubheadline}</p>
            <div className={styles.herocta}>
              <Link href={'/shop'} className={styles.quote}>
                <div>{primaryCtaLabel}</div>
              </Link>
              <div className={styles.chat}>
                <a
                  href={`https://wa.me/254704610605?text=${encodedWhatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: 'black', fontSize: '16px' }}
                  title={`Chat with OfficeFlow about ${hubName} delivery`}
                >
                  Talk to us on Whatsapp
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.landingImage}>
          <Image
            className={styles.landingImg}
            src={imageSrc}
            alt={resolvedAlt}
            width={500}
            height={500}
            priority
          />
        </div>
      </div>
    </main>
  );
};

export default Restock2;