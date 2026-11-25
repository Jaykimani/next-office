// data/nairobiHubs.ts
import type { SupplyCategoryKey } from './components/servicestwo/servicestwo';
import type { FaqItem } from '@/components/quiztwo/quiztwo';

export interface NairobiHubConfig {
  slug: string;
  name: string;
  // Next.js Metadata & JSON-LD
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  serviceSchemaDescription: string;

  // 1. Restock2 (Hero)
  h1: string;
  subheadline: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  whatsappMessage: string;
  heroImageAlt: string;

  // 2. Services (Categories)
  servicesHeading: string;
  servicesIntro: string;
  categoryOrder: SupplyCategoryKey[];

  // 3. HubLogistics (New Local Coverage Section)
  roadsCovered: string[];
  deliveryTurnaround: string;
  buildingAccessNote: string;
  idealForSectors: string[];

  // 4. Featured2 (Why Choose OfficeFlow + Business Account Pitch)
  whyHeading: string;
  whyLongBody: string;
  whyShortBody: string;
  businessPitch: string;

  // 5. Quiz2 (Visible FAQs + FAQPage JSON-LD)
  faqHeading: string;
  faqs: FaqItem[];

  // 6. Contact
  contactHeading: string;
  contactPlaceholder: string;
}

export const NAIROBI_HUBS: Record<string, NairobiHubConfig> = {
  nairobi: {
    slug: 'nairobi',
    name: 'Nairobi',
    seoTitle: 'Scheduled Office Supply Delivery & Restock Across Nairobi | OfficeFlow',
    seoDescription:
      'Consolidate your Nairobi office procurement with OfficeFlow. Scheduled delivery of bulk A4 paper, pantry essentials, hygiene consumables, toners & stationery across all Nairobi business hubs.',
    keywords: [
      'office supply delivery Nairobi',
      'scheduled office restock Nairobi',
      'corporate stationery supplier Nairobi',
      'bulk office consumables Nairobi',
      'B2B office procurement Nairobi',
      'office pantry and hygiene delivery Nairobi',
    ],
    serviceSchemaDescription:
      'Scheduled B2B office supply delivery and automated workplace replenishment across Nairobi business districts, covering bulk printing paper, pantry stock, hygiene consumables, printer toners, and stationery.',

    // Restock2 — Distinct from the main homepage H1
    h1: 'Scheduled Office Supply Delivery & Workplace Restocks Across Nairobi',
    subheadline:
      'Consolidate your Nairobi office procurement into one reliable supplier. OfficeFlow delivers bulk printing paper, breakroom pantry essentials, washroom hygiene products, printer toners, and everyday stationery across every major Nairobi business corridor—backed by single-invoice KRA eTIMS billing.',
    primaryCtaLabel: 'Explore Nairobi Supply Catalog',
    primaryCtaHref: '/shop',
    whatsappMessage:
      "Hello OfficeFlow, we're a company in Nairobi looking to consolidate our office supplies and set up scheduled delivery.",
    heroImageAlt:
      'Scheduled B2B delivery of bulk printing paper, pantry items, and office consumables across Nairobi business districts',

    // Services — Leads with high-frequency corporate restock categories (Paper, Pantry, Cleaning) instead of default Stationery-first
    servicesHeading: 'Core Workplace Consumables Delivered Across Nairobi',
    servicesIntro:
      'Grouped around the recurring consumables Nairobi operations teams reorder most—so your printing, breakroom, and washroom stock never runs dry.',
    categoryOrder: ['paper', 'pantry', 'cleaning', 'stationery', 'printer', 'tech'],

    // HubLogistics
    roadsCovered: [
      'Westlands & Waiyaki Way',
      'Upper Hill',
      'Nairobi CBD',
      'Kilimani & Ngong Road',
      'Karen & Langata',
      'Lavington',
      'Gigiri & UN Avenue',
      'Industrial Area',
      'Parklands & Mombasa Road',
    ],
    deliveryTurnaround:
      'Standard Nairobi metro deliveries arrive within 24 to 48 hours, with morning dispatch windows available for recurring restock accounts and urgent bulk paper or toner orders.',
    buildingAccessNote:
      'Our Nairobi dispatch fleet handles commercial tower security clearances, visitor gate passes, and loading bay handoffs directly to your office floor.',
    idealForSectors: [
      'Multi-Department Corporate Offices',
      'SMEs & High-Growth Tech Teams',
      'NGOs, Embassies & Institutions',
      'Clinics, Schools & Coworking Spaces',
    ],

    // Featured2
    whyHeading: 'Why Nairobi Operations Teams Consolidate With OfficeFlow',
    whyLongBody:
      'Managing separate vendors for A4 printing paper, drinking water, breakroom coffee, washroom tissue, and printer toners drains hours from Nairobi office administrators every month. Whether your team operates in Westlands, Upper Hill, Kilimani, Karen, Lavington, Gigiri, Industrial Area, or Nairobi CBD, OfficeFlow unifies your recurring workplace orders into one scheduled delivery and one clean KRA eTIMS tax invoice—giving you predictable monthly spend and zero emergency retail runs.',
    whyShortBody:
      'Nairobi operations teams use OfficeFlow to replace fragmented stationery, pantry, and hygiene vendors with one scheduled Nairobi delivery and a single consolidated KRA eTIMS invoice.',
    businessPitch:
      'Open an OfficeFlow Business Account to lock in recurring Nairobi delivery slots, repeat-order templates, and centralized procurement visibility.',

    // Quiz2
    faqHeading: 'Frequently Asked Questions: Nairobi Office Supply Delivery',
    faqs: [
      {
        question: 'Which Nairobi business districts do you deliver office supplies to?',
        answer:
          'OfficeFlow delivers across all major Nairobi commercial zones, including Westlands, Upper Hill, Nairobi CBD, Kilimani, Karen, Lavington, Gigiri, Parklands, Mombasa Road, and Industrial Area.',
      },
      {
        question: 'Can we combine stationery, printing paper, pantry, and cleaning items in one Nairobi order?',
        answer:
          'Yes. Instead of dealing with separate vendors for drinking water, A4 paper, toners, and washroom tissue, you can bundle all workplace categories into a single scheduled delivery and one KRA eTIMS invoice.',
      },
      {
        question: 'Do we have to sign up for a recurring restock plan to order in Nairobi?',
        answer:
          'No. You can place on-demand B2B orders whenever stock runs low, or switch to an automated weekly, bi-weekly, or monthly restock schedule once you know your usage.',
      },
      {
        question: 'How fast is B2B delivery within Nairobi?',
        answer:
          'Most in-stock Nairobi orders are delivered within 1 to 2 business days, with same-day dispatch options available for urgent paper, toner, or pantry requests confirmed before midday.',
      },
      {
        question: 'Do you support corporate procurement requirements like LPOs and KRA eTIMS invoices?',
        answer:
          'Yes. We work with corporate LPOs, provide signed delivery notes upon drop-off, and issue valid KRA eTIMS tax invoices for every order.',
      },
    ],

    // Contact
    contactHeading: 'Request a Nairobi Office Supply Quote',
    contactPlaceholder:
      'Share your Nairobi district, team size, and the supply categories you want to consolidate...',
  },

  westlands: {
    slug: 'westlands',
    name: 'Westlands',
    seoTitle: 'Office Supplies & Recurring Restock in Westlands | OfficeFlow',
    seoDescription:
      'Scheduled B2B office supplies in Westlands, Nairobi. Automated delivery of pantry items, printing paper, stationery, hygiene products & IT consumables with one eTIMS invoice.',
    keywords: [
      'office supplies Westlands',
      'stationery shop Westlands Nairobi',
      'office pantry delivery Westlands',
      'bulk printing paper Westlands',
      'office restock service Westlands',
      'coworking space supplies Westlands',
    ],
    serviceSchemaDescription:
      'Scheduled B2B office supplies, pantry replenishment, printing paper, hygiene consumables, and workplace restock services for offices and coworking spaces in Westlands, Nairobi.',

    // Restock2
    h1: 'B2B Office Supplies & Recurring Restock in Westlands',
    subheadline:
      'Keep your Westlands office or coworking space fully stocked without sending staff into Waiyaki Way traffic or juggling multiple vendors. OfficeFlow delivers pantry essentials, printing paper, stationery, cleaning supplies, and IT consumables on an automated weekly or monthly schedule.',
    primaryCtaLabel: 'Shop Westlands Supplies',
    primaryCtaHref: '/shop',
    whatsappMessage:
      "Hello OfficeFlow, we're an office in Westlands looking to set up office supplies and recurring restocking.",
    heroImageAlt:
      'B2B office supplies, pantry items, and printing paper delivered to offices in Westlands, Nairobi',

    // Services (Prioritizes Pantry & Cleaning for high-turnover agencies & coworking spaces)
    servicesHeading: 'Workplace Essentials Supplied Across Westlands',
    servicesIntro:
      'Built for fast-moving Westlands tech teams, agencies, and coworking hubs—leading with high-turnover pantry, hygiene, and daily printing consumables.',
    categoryOrder: ['pantry', 'cleaning', 'paper', 'stationery', 'tech', 'printer'],

    // HubLogistics
    roadsCovered: [
      'Waiyaki Way',
      'Rhapta Road',
      'Muthithi Road',
      'Woodvale Grove',
      'Ring Road Westlands / Parklands',
      'School Lane',
      'Mpaka Road',
      'Chiromo Lane',
      'Peponi Road',
    ],
    deliveryTurnaround:
      'Orders confirmed before 11:00 AM qualify for same-day dispatch within Westlands; recurring restocks arrive during your chosen morning delivery window.',
    buildingAccessNote:
      'Our dispatch team coordinates rider/driver details directly with commercial tower receptionists, security desks, and basement loading bays across Westlands.',
    idealForSectors: [
      'Tech Startups & Regional Headquarters',
      'Coworking Spaces & Serviced Offices',
      'Creative, PR & Digital Agencies',
      'Management & Financial Consultancies',
    ],

    // Featured2
    whyHeading: 'Why Westlands Workplaces Choose OfficeFlow',
    whyLongBody:
      'Fast-growing companies and coworking spaces in Westlands choose OfficeFlow to eliminate ad-hoc supermarket runs, petty-cash headaches, and unexpected stockouts. Whether your team operates out of commercial towers along Waiyaki Way, Rhapta Road, Muthithi Road, or Woodvale Grove, we consolidate your breakroom pantry stock, washroom hygiene supplies, A4 printing paper, stationery, and IT accessories into one predictable delivery schedule. Instead of chasing four separate suppliers, your operations lead gets reliable doorstep replenishment and a single monthly KRA eTIMS invoice.',
    whyShortBody:
      'Westlands teams rely on OfficeFlow for scheduled pantry, hygiene, printing paper, and stationery deliveries along Waiyaki Way, Rhapta Road, and Muthithi Road—eliminating traffic runs and consolidating all workplace supplies into one monthly invoice.',
    businessPitch:
      'Open an OfficeFlow Business Account for your Westlands office to automate weekly pantry restocks, manage repeat orders, and track departmental supply spend in one place.',

    // Quiz2
    faqHeading: 'FAQs: Office Supplies & Restocks in Westlands',
    faqs: [
      {
        question: 'Do you offer same-day office supply delivery in Westlands?',
        answer:
          'Yes. Orders placed before 11:00 AM for in-stock stationery, A4 paper, pantry items, and cleaning consumables are eligible for same-day delivery across Westlands, including Waiyaki Way, Rhapta Road, Muthithi Road, and Woodvale Grove.',
      },
      {
        question: 'Can coworking spaces and offices in Westlands set up weekly pantry restocks?',
        answer:
          'Yes. Many Westlands offices and coworking spaces use our automated weekly or bi-weekly schedule for drinking water, coffee, tea, sugar, snacks, tissue paper, and hand wash—consolidated into a single monthly invoice.',
      },
      {
        question: 'How do you handle building security and loading bay access in Westlands?',
        answer:
          'We share rider and vehicle details ahead of arrival with your office administrator or building security desk so bulk cartons of A4 paper and dispenser water reach your floor smoothly.',
      },
      {
        question: 'Can we order one-off supplies in Westlands without a recurring contract?',
        answer:
          'Absolutely. You can place on-demand orders whenever your team needs stationery, printer toner, or breakroom stock, or switch to an automated restock plan at any time.',
      },
      {
        question: 'Do you issue KRA eTIMS-compliant invoices for corporate accounts?',
        answer:
          'Yes. Every B2B order and recurring restock plan includes valid KRA eTIMS/ETR tax documentation for seamless accounting and procurement compliance.',
      },
    ],

    // Contact
    contactHeading: 'Contact Our Westlands Supply Team',
    contactPlaceholder:
      'Tell us your building/road in Westlands, estimated headcount, or the stationery & pantry items you need...',
  },

  'upper-hill': {
    slug: 'upper-hill',
    name: 'Upper Hill',
    seoTitle: 'Corporate Office Supplies & Restock Upper Hill | OfficeFlow',
    seoDescription:
      'Reliable corporate stationery, bulk A4 paper, printer toner & pantry restock services in Upper Hill, Nairobi. Consolidated eTIMS billing & scheduled delivery.',
    keywords: [
      'office supplies Upper Hill Nairobi',
      'corporate stationery supplier Upper Hill',
      'bulk A4 printing paper Upper Hill',
      'printer toner delivery Upper Hill',
      'office procurement partner Upper Hill',
      'law firm office supplies Upper Hill',
    ],
    serviceSchemaDescription:
      'Corporate B2B office supplies, bulk A4 printing paper, printer toners, archiving stationery, and scheduled restock services for enterprises, banks, law firms, and NGOs in Upper Hill, Nairobi.',

    // Restock2
    h1: 'Corporate Office Supplies & Scheduled Restock in Upper Hill',
    subheadline:
      'Upper Hill’s financial institutions, law firms, and corporate headquarters run on strict operational standards. OfficeFlow consolidates bulk printing paper, printer toners, filing stationery, pantry stock, and hygiene supplies into one reliable, eTIMS-compliant supply schedule.',
    primaryCtaLabel: 'Explore Corporate Supplies',
    primaryCtaHref: '/shop',
    whatsappMessage:
      "Hello OfficeFlow, we're an organization in Upper Hill looking to set up corporate office supplies / recurring restock.",
    heroImageAlt:
      'Bulk A4 printing paper, printer toner, and corporate office supplies delivered in Upper Hill, Nairobi',

    // Services (Prioritizes Bulk Paper, Printer Consumables & Archiving Stationery)
    servicesHeading: 'Corporate & Enterprise Supplies for Upper Hill Offices',
    servicesIntro:
      'Engineered for document-intensive law firms, banks, insurance HQs, and NGOs across Upper Hill—prioritizing bulk A4 paper, toners, and archiving stationery.',
    categoryOrder: ['paper', 'printer', 'stationery', 'cleaning', 'pantry', 'tech'],

    // HubLogistics
    roadsCovered: [
      'Hospital Road',
      'Mara Road',
      'Elgon Road',
      'Kiambere Road',
      'Ragati Road',
      'Bishop Road',
      'Chyulu Road',
      'Upper Hill Link Road',
      'Britam / Prism / KCB Towers Zone',
    ],
    deliveryTurnaround:
      'Scheduled corporate deliveries arrive within 24 hours, with priority early-morning drop-offs before peak Upper Hill traffic.',
    buildingAccessNote:
      'Experienced with corporate tower security clearances, visitor gate passes, delivery note sign-offs, and multi-department store deliveries across Upper Hill complexes.',
    idealForSectors: [
      'Banks & Insurance Headquarters',
      'Corporate Law & Audit Firms',
      'NGOs & International Organizations',
      'Medical & Specialist Clinics',
    ],

    // Featured2
    whyHeading: 'Why Upper Hill Organizations Choose OfficeFlow',
    whyLongBody:
      'Banks, law firms, NGOs, and corporate offices along Hospital Road, Mara Road, Elgon Road, and Kiambere Road depend on uninterrupted print and operational workflows. Running out of 80gsm A4 paper, genuine printer toner, lever arch files, or washroom consumables slows down entire departments. OfficeFlow replaces fragmented local vendors with a single, dependable procurement partner—offering bulk corporate pricing, scheduled monthly replenishment, clear delivery notes, and full KRA eTIMS invoicing.',
    whyShortBody:
      'Upper Hill enterprises, law firms, and NGOs choose OfficeFlow for dependable bulk A4 paper, printer toners, filing stationery, and pantry restocks—delivered directly to your office tower with consolidated eTIMS invoicing.',
    businessPitch:
      'Set up an OfficeFlow Corporate Business Account for your Upper Hill office to streamline repeat requisitions, bulk paper contracts, and monthly spend reporting.',

    // Quiz2
    faqHeading: 'FAQs: Corporate Procurement & Supplies in Upper Hill',
    faqs: [
      {
        question: 'Can Upper Hill companies open a recurring corporate supply account?',
        answer:
          'Yes. Corporate offices in Upper Hill can set up a recurring monthly or bi-weekly restock schedule covering A4 printing paper, toners, archiving files, pantry items, and washroom hygiene supplies under one consolidated account.',
      },
      {
        question: 'Do you supply bulk A4 printing paper and archiving files for law firms?',
        answer:
          'Absolutely. We supply cartons of 80gsm A4 printing paper, lever arch files, box files, spring files, envelopes, and genuine or compatible printer toners in bulk quantities tailored to legal and financial teams.',
      },
      {
        question: 'Can we adjust item quantities before each scheduled Upper Hill delivery?',
        answer:
          'Yes. Before every scheduled restock date, your office administrator or procurement officer can add, pause, or adjust quantities via WhatsApp or email so you never overstock.',
      },
      {
        question: 'How do you handle security clearances at Upper Hill office towers?',
        answer:
          'Our logistics team provides driver ID and vehicle details in advance where required by building management, ensuring smooth access to loading bays and corporate reception desks.',
      },
      {
        question: 'Are your invoices compliant with corporate procurement and KRA eTIMS requirements?',
        answer:
          'Yes. We provide complete KRA eTIMS tax invoices, signed delivery notes, and itemized statements to match your internal procurement and audit workflows.',
      },
    ],

    // Contact
    contactHeading: 'Contact Our Upper Hill Corporate Team',
    contactPlaceholder:
      'Share your Upper Hill building/road, monthly paper or supply requirements, or request a corporate quote...',
  },

  'nairobi-cbd': {
    slug: 'nairobi-cbd',
    name: 'Nairobi CBD',
    seoTitle: 'Bulk Office Stationery & Supplies Nairobi CBD | OfficeFlow',
    seoDescription:
      'Skip downtown vendor runs. Order bulk office stationery, A4 printing paper, receipt books, POS rolls, toner & pantry supplies delivered straight to your Nairobi CBD office.',
    keywords: [
      'office supplies Nairobi CBD',
      'wholesale office stationery Nairobi CBD',
      'bulk A4 paper supplier CBD Nairobi',
      'receipt books and POS rolls Nairobi CBD',
      'office delivery Nairobi CBD',
      'stationery delivery Kenyatta Avenue Moi Avenue',
    ],
    serviceSchemaDescription:
      'Wholesale and B2B office stationery, A4 printing paper, receipt books, POS consumables, pantry, and hygiene supply delivery in Nairobi Central Business District.',

    // Restock2
    h1: 'Bulk Office Supplies & Recurring Delivery in Nairobi CBD',
    subheadline:
      'Stop losing admin hours walking between downtown shops or reconciling petty-cash receipts. OfficeFlow delivers bulk stationery, A4 printing paper, receipt books, printer toner, pantry items, and cleaning supplies straight to your Nairobi CBD office floor.',
    primaryCtaLabel: 'Order CBD Office Supplies',
    primaryCtaHref: '/shop',
    whatsappMessage:
      "Hello OfficeFlow, we're an office in Nairobi CBD looking to order bulk office supplies / set up restocking.",
    heroImageAlt:
      'Wholesale office stationery, A4 paper, receipt books, and pantry supplies delivered in Nairobi CBD',

    // Services (Prioritizes Bulk Stationery, Paper & Printer/POS Consumables)
    servicesHeading: 'Wholesale & B2B Supplies Delivered Across Nairobi CBD',
    servicesIntro:
      'Tailored for CBD legal chambers, SACCOs, clinics, colleges, and commercial offices—combining wholesale stationery pricing with doorstep delivery.',
    categoryOrder: ['stationery', 'paper', 'printer', 'pantry', 'cleaning', 'tech'],

    // HubLogistics
    roadsCovered: [
      'Kenyatta Avenue',
      'Mama Ngina Street',
      'Kimathi Street',
      'Wabera Street',
      'Standard Street',
      'Moi Avenue',
      'Haile Selassie Avenue',
      'University Way',
      'Harambee Avenue',
    ],
    deliveryTurnaround:
      'Fast dispatch across Nairobi CBD within 1 business day, with same-day drop-offs available for urgent A4 paper, toner, and POS roll orders.',
    buildingAccessNote:
      'We handle downtown parking and offloading logistics, delivering cartons directly to your office suite or reception desk without your staff stepping outside.',
    idealForSectors: [
      'Legal Chambers & Advocates',
      'SACCOs & Financial Institutions',
      'Training Colleges & Outpatient Clinics',
      'Retail & Commercial Head Offices',
    ],

    // Featured2
    whyHeading: 'Why Nairobi CBD Offices Choose OfficeFlow',
    whyLongBody:
      'Even when your office is in the center of Nairobi CBD, sending staff out to compare prices across downtown shops wastes productive hours and creates scattered petty-cash receipts. Whether your office is along Kenyatta Avenue, Mama Ngina Street, Kimathi Street, Wabera Street, or Moi Avenue, OfficeFlow brings wholesale B2B pricing straight to your door—covering A4 printing paper, counter books, receipt and invoice books, printer toners, pantry supplies, and washroom hygiene items on one consolidated eTIMS invoice.',
    whyShortBody:
      'Nairobi CBD businesses skip crowded vendor runs by ordering bulk stationery, A4 paper, receipt books, toner, and pantry items from OfficeFlow—delivered directly to your building with one clean eTIMS invoice.',
    businessPitch:
      'Create an OfficeFlow Business Account for your Nairobi CBD office to replace petty-cash stationery runs with scheduled deliveries and transparent spend tracking.',

    // Quiz2
    faqHeading: 'FAQs: Office Supplies & Delivery in Nairobi CBD',
    faqs: [
      {
        question: 'Why order online instead of buying from walk-in stationery shops in Nairobi CBD?',
        answer:
          'With OfficeFlow, you get wholesale B2B pricing without sending staff out into CBD crowds, one consolidated eTIMS invoice instead of scattered petty-cash receipts, and doorstep delivery right to your floor.',
      },
      {
        question: 'Do you supply receipt books, invoice books, and POS thermal rolls in the CBD?',
        answer:
          'Yes. Alongside A4 printing paper, pens, and files, we stock counter books, duplicate/triplicate receipt and invoice books, and thermal POS rolls for front-desk and retail operations.',
      },
      {
        question: 'How do you handle offloading in buildings without parking along Kenyatta Avenue or Moi Avenue?',
        answer:
          'Our dispatch team uses designated CBD drop-off zones and courier handoffs from our nearest staging point so cartons reach your reception smoothly without your staff stepping outside.',
      },
      {
        question: 'How fast is delivery for urgent restocks in Nairobi CBD?',
        answer:
          'Standard CBD orders arrive within 1 business day, and urgent requests for in-stock A4 paper, toner cartridges, or POS rolls placed before midday can be dispatched the same day.',
      },
      {
        question: 'Can we place one-off bulk orders as well as monthly restocks in Nairobi CBD?',
        answer:
          'Yes. You can order on-demand whenever stock runs low or lock in a predictable monthly restock schedule for your office.',
      },
    ],

    // Contact
    contactHeading: 'Contact Our Nairobi CBD Supply Team',
    contactPlaceholder:
      'Let us know your building/street in Nairobi CBD and the stationery, paper, or pantry items you need...',
  },
};