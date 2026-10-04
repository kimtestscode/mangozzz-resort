'use client';

import { useState } from 'react';
import styles from './page.module.css';

const faqs = [
  {
    q: 'What is the guest capacity for weddings at Mangozzz Magical World Resort?',
    a: 'Mangozzz Magical World Resort accommodates gatherings of all sizes: our Grand Open Lawn hosts 800 to 1,000+ guests, our climate-controlled AC Banquet Hall hosts 300 to 400 guests, our Poolside Deck hosts 100 to 250 guests for Haldi/Mehendi, and our Budget-Friendly Garden setup hosts intimate weddings of 50 to 150 guests.',
  },
  {
    q: 'Where is Mangozzz Magical World Resort located and how accessible is it for guests?',
    a: 'The resort is located along the scenic river in Asarewadi, Chouk, Khalapur (near Karjat), Maharashtra. It is just 1.5 hours from Mumbai / Navi Mumbai via the Mumbai-Pune Expressway and 1.5 hours from Pune, making it an ideal destination wedding location for guests from both metropolitan areas.',
  },
  {
    q: 'Can our wedding guests stay overnight at the resort?',
    a: 'Yes! We offer a full resort buyout option with 8 authentic accommodation categories including Authentic Woodhouse Villas, Pool View Cottages, River View Cottages, Mountain View Rooms, and Spacious Family Suites that comfortably accommodate 150+ wedding guests overnight.',
  },
  {
    q: 'What dining and catering options are available for wedding events?',
    a: 'Our Alphonso Restaurant in-house culinary masterchefs prepare lavish Maharashtrian wedding feasts, North Indian buffets, Gujarati / Pure Jain food counters, live chaat stalls, continental courses, and custom mocktail bars.',
  },
  {
    q: 'Can we host pre-wedding ceremonies like Haldi, Mehendi, and Sangeet?',
    a: 'Absolutely! Our resort is purpose-built for multi-day destination celebrations. You can host Haldi & Rain Dance by the turquoise swimming pool, an open-air sunset Mehendi in the mango groves, a high-energy Sangeet in the AC Banquet Hall, and the grand Mandap ceremony under the stars on the 1000-pax lawn.',
  },
  {
    q: 'Is ample parking and power backup available for large weddings?',
    a: 'Yes, we provide dedicated parking for over 100+ vehicles with valet support, 24/7 heavy-duty generator backup for uninterrupted lighting and sound, and bridal green rooms for the couple.',
  },
];

export default function WeddingFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <div className={styles.faqList}>
      {faqs.map((faq, idx) => (
        <div key={faq.q} className={styles.faqItem}>
          <button
            type="button"
            className={styles.faqQuestion}
            onClick={() => toggle(idx)}
            aria-expanded={openIndex === idx}
          >
            <span>{faq.q}</span>
            <span style={{ fontSize: '1.25rem', transform: openIndex === idx ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
              ▾
            </span>
          </button>
          {openIndex === idx && (
            <div className={styles.faqAnswer}>
              <p>{faq.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
