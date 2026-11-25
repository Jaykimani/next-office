'use client';
import styles from './quiztwo.module.css';
import { MdAddCircle } from 'react-icons/md';

export interface FaqItem {
  question: string;
  answer: string;
}

export const DEFAULT_NAIROBI_FAQS: FaqItem[] = [
  {
    question: 'Do you deliver office supplies to all areas of Nairobi?',
    answer:
      'Yes. OfficeFlow delivers office supplies across Nairobi, including CBD, Westlands, Upper Hill, Kilimani, Karen, Lavington, Gigiri, Industrial Area, Parklands, and other business districts. If your office is located within Nairobi, we can arrange delivery directly to your workplace.',
  },
  {
    question: 'Can businesses in Nairobi order office supplies without a restock plan?',
    answer:
      'Absolutely. Businesses can place one-time orders for office supplies whenever needed. Whether you need printing paper, stationery, pantry items, cleaning supplies, or workplace essentials, OfficeFlow allows you to order as required without committing to a recurring restock plan.',
  },
  {
    question: 'How quickly can office supplies be delivered in Nairobi?',
    answer:
      'Most Nairobi orders are delivered within 1–2 business days, depending on product availability and order size. For urgent requirements, our team can advise on the fastest available delivery options.',
  },
  {
    question: 'Do you supply office essentials for large businesses and corporate offices in Nairobi?',
    answer:
      'Yes. OfficeFlow supplies office essentials for businesses of all sizes, including SMEs, startups, NGOs, schools, clinics, and corporate offices. We can support both routine office supply needs and larger bulk orders for growing organizations in Nairobi.',
  },
  {
    question: 'What office supplies are most commonly ordered by Nairobi businesses?',
    answer:
      'Many Nairobi businesses regularly order A4 printing paper, notebooks, pens, envelopes, printer cartridges, pantry supplies, tissue paper, cleaning products, and other workplace essentials. OfficeFlow helps businesses keep these frequently used items readily available through convenient ordering and delivery services.',
  },
];

export interface Quiz2Props {
  hubName?: string;
  heading?: string;
  faqs?: FaqItem[];
}

const Quiz2 = ({
  hubName,
  heading,
  faqs = DEFAULT_NAIROBI_FAQS,
}: Quiz2Props) => {
  const handleQuiz = (e: React.MouseEvent<HTMLDivElement>) => {
    const quizCurrent = e.currentTarget;
    const add = quizCurrent.querySelector('.showIcon') as HTMLElement | null;

    if (quizCurrent.classList.contains(`${styles.quizActive}`)) {
      if (add) add.style.transform = 'rotate(0deg)';
      quizCurrent.classList.remove(`${styles.quizActive}`);
    } else {
      if (add) add.style.transform = 'rotate(45deg)';
      quizCurrent.classList.add(`${styles.quizActive}`);
    }
  };

  return (
    <>
      <div id={styles.quiz}>
        <div className={styles.quizInset}>
          <h2>
            {heading || `Frequently Asked Questions (FAQs) About OfficeFlow ${hubName}`}
          </h2>

          {faqs.map((item) => (
            <div key={item.question} className={styles.quizDiv} onClick={handleQuiz}>
              <div className={styles.quizTop}>
                <h3>{item.question}</h3>
                <div className="showIcon">
                  <MdAddCircle className={styles.add} fontSize="large" />
                </div>
              </div>
              <div className={styles.quizBottom}>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.quote}>
        <p className={styles.quoteTagline}>SIMPLIFY. SUPPORT. SUCCEED</p>
      </div>
    </>
  );
};

export default Quiz2;