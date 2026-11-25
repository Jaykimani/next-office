'use client';
import styles from './servicestwo.module.css';
import Image from 'next/image';
import { TiShoppingCart } from 'react-icons/ti';
import { FaWhatsapp } from 'react-icons/fa6';
import Link from 'next/link';
import { useState } from 'react';

export type SupplyCategoryKey =
  | 'stationery'
  | 'paper'
  | 'printer'
  | 'tech'
  | 'pantry'
  | 'cleaning';

interface SupplyCategory {
  key: SupplyCategoryKey;
  title: string;
  items: string;
  shopHref: string;
  imageSrc: string;
  imageAlt: string;
}

const SUPPLY_CATEGORIES: Record<SupplyCategoryKey, SupplyCategory> = {
  stationery: {
    key: 'stationery',
    title: 'Stationery & Writing Supplies',
    items:
      'Pens, Pencils, Sticky notes, Arch files, Markers, Highlighters, Erasers, Correction fluid/tape, Staplers, Staples, Paper Clips and more...',
    shopHref: '/shop/office-supplies/stationery-writing-supplies',
    imageSrc: '/stationery.jpg',
    imageAlt: 'Bulk office stationery, pens, arch files, and desk supplies',
  },
  paper: {
    key: 'paper',
    title: 'Printing & Paper Supplies',
    items:
      'A4 printing paper, Notebooks, Counter books, Diaries, Colored paper, Photo paper, Envelopes, Manila papers, Flipchart papers, Receipt books, Invoice books, Labels etc.',
    shopHref: '/shop/office-supplies/printing-paper-supplies',
    imageSrc: '/paper.jpg',
    imageAlt: 'A4 printing paper reams, notebooks, envelopes, and receipt books',
  },
  printer: {
    key: 'printer',
    title: 'Printer Consumables',
    items:
      'Ink cartridges, Toner cartridges, Printer ribbons, Maintenance kits, Refilling Services, Thermal paper rolls, POS printer rolls',
    shopHref: '/shop/office-supplies/printer-ink-supplies',
    imageSrc: '/printer2.jpg',
    imageAlt: 'Office printer toner cartridges, ink, and POS thermal paper rolls',
  },
  tech: {
    key: 'tech',
    title: 'IT & Tech Consumables',
    items:
      'HDMI adapters, USB drives, Ethernet cables, Charging cables, Laptop chargers, Extension cables, Surge protectors, Mouse batteries, Keyboard batteries etc.',
    shopHref: '/shop/office-electronics',
    imageSrc: '/tech.jpg',
    imageAlt: 'Office IT cables, surge protectors, adapters, and tech accessories',
  },
  pantry: {
    key: 'pantry',
    title: 'Pantry & Hydration Supplies',
    items:
      'Drinking water, Dispenser water, Coffee, Tea, Sugar, Disposable cups, Stirrers, Snacks, Milk, Plates, Cutlery, Napkins etc.',
    shopHref: '/shop/office-pantry-hydration',
    imageSrc: '/pantry.jpg',
    imageAlt: 'Office breakroom coffee, tea, drinking water, and pantry supplies',
  },
  cleaning: {
    key: 'cleaning',
    title: 'Cleaning & Hygiene Supplies',
    items:
      'Disinfectant sprays, Hand sanitizers, Air fresheners, Hand towels, Tissue papers, Cleaning detergents, Surface disinfectants, Mops & Brushes etc.',
    shopHref: '/shop/office-cleaning-hygiene',
    imageSrc: '/cleaning.jpg',
    imageAlt: 'Commercial washroom tissue, sanitizers, and office cleaning supplies',
  },
};

const DEFAULT_ORDER: SupplyCategoryKey[] = [
  'stationery',
  'paper',
  'printer',
  'tech',
  'pantry',
  'cleaning',
];

export interface ServicesProps {
  hubName?: string;
  sectionHeading?: string;
  sectionIntro?: string;
  categoryOrder?: SupplyCategoryKey[];
}

const ServicesTwo = ({
  hubName,
  sectionHeading,
  sectionIntro,
  categoryOrder = DEFAULT_ORDER,
}: ServicesProps) => {
  const orderedCategories = categoryOrder.map((key) => SUPPLY_CATEGORIES[key]);

  const [showdots, setShowDots] = useState(false);

  return (
    <section className={styles.servicesMain}>
      <h2>{sectionHeading || `What We Supply to ${hubName} Offices`}</h2>
      {sectionIntro && (
        <p className={styles.serviceIntro}>
          {sectionIntro}
        </p>
      )}

      <div className={styles.servicesInset}>
        {orderedCategories.map((cat) => {
          const whatsappText = encodeURIComponent(
            `Hello OfficeFlow, we're an office in ${hubName} and would like to order ${cat.title}.`
          );

          return (
            <div key={cat.key} className={styles.feature}>
              <div className={styles.featureImage}>
                <Image
                  className={styles.featureImg}
                  src={cat.imageSrc}
                  alt={`${cat.imageAlt} delivered in ${hubName}`}
                  width={500}
                  height={500}
                />
              </div>

              <div className={styles.featureInfo}>
                <h3>{cat.title}</h3>
                <p className={styles.featureList}>{cat.items}</p>
                <div>
                  <Link href={cat.shopHref}>
                    <div className={styles.shopbtn}>
                      <TiShoppingCart
                        style={{ width: '30px', height: '30px', marginRight: '15px' }}
                      />
                      <p>Visit our online shop</p>
                    </div>
                  </Link>

                  <a
                    className={styles.whatsappbtn}
                    href={`https://wa.me/254704610605?text=${whatsappText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', color: 'black', fontSize: '18px' }}
                    title={`Order ${cat.title} via WhatsApp for ${hubName} delivery`}
                  >
                    <FaWhatsapp
                      style={{ width: '30px', height: '30px', marginRight: '15px' }}
                    />
                    <p className={styles.whatsappbtnp}>Order from Whatsapp</p>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesTwo;