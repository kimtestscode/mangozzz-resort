'use client';

import { useState } from 'react';
import Link from 'next/link';
import MenuModal from '@/components/MenuModal/MenuModal';
import styles from './page.module.css';

const amenities = [
  {
    id: 'alphonso-restaurant',
    icon: '🍽️',
    title: 'Alphonso Multi-Cuisine Restaurant',
    image: '/client-media/reduced/General Photos/Alphonso Restaurant.jpg',
    desc: 'Managed by Shivay Hospitality with curation by Chef Ajit Shetty. Enjoy specialty Maharashtrian cuisines, succulent tandoori kebabs, sizzling Indo-Chinese dishes, coastal seafood, and mocktails inside our air-conditioned dining hall or under mango grove canopies.',
    highlights: [
      'Chef-curated Maharashtrian & North Indian specialties',
      'Extensive pure veg & non-veg menu with Jain options',
      'Service hours: 8:00 AM to 12:00 Midnight (Room Service 222/223)',
      'Lavish breakfast, lunch & dinner buffets',
    ],
    isRestaurant: true,
  },
  {
    id: 'swimming-pool',
    icon: '🏊',
    title: 'Crystal Swimming Pool & Sun Deck',
    image: '/client-media/reduced/General Photos/Pool.jpg',
    desc: 'Take a refreshing swim in our large outdoor swimming pool with loungers and direct cottage access. Ideal for morning swims, family fun, rain dance parties, and relaxing afternoons under the sun.',
    highlights: ['Large outdoor pool', 'Poolside lounger deck', 'Dedicated kids swimming zone', 'Surrounded by lush greens'],
  },
  {
    id: 'woodhouse-cottages',
    icon: '🏡',
    title: 'Authentic Woodhouse & Luxury Cottages',
    image: '/client-media/reduced/General Photos/Both Wood House.jpg',
    desc: 'Experience pure serenity in handcrafted wooden cottages and poolside villas. Every accommodation features air conditioning, private balconies, complimentary breakfast, and scenic views.',
    highlights: ['Authentic Woodhouse villas', 'Pool & river view options', 'Private balconies & decks', 'Ensuite modern bathrooms'],
  },
  {
    id: 'gamezone',
    icon: '🎮',
    title: 'GameZone & Indoor/Outdoor Sports',
    image: '/client-media/reduced/GameZone/2.jpg',
    desc: 'Unleash the fun at our fully-equipped GameZone featuring table tennis, carrom, chess, badminton, foosball, pool table, and outdoor cricket on spacious lawns.',
    highlights: ['Table Tennis & Carrom', 'Pool Table & Foosball', 'Cricket & Football lawn', 'Fun activities for all ages'],
  },
  {
    id: 'weddings',
    icon: '💍',
    title: 'Destination Weddings & Receptions',
    image: '/client-media/reduced/Wedding/WhatsApp Image 2026-09-15 at 3.36.28 PM.jpeg',
    desc: 'Host fairytale destination weddings and ring ceremonies against the Sahyadri backdrop with our 800–1000 Pax Grand Lawn, 300–400 Pax AC Banquet hall, and in-house Alphonso catering.',
    highlights: ['800-1000 Pax open lawn', '300-400 Pax AC Banquet Hall', 'In-house gourmet catering', 'Full resort buyout options'],
  },
  {
    id: 'events',
    icon: '🎉',
    title: 'Corporate Meets & Private Events',
    image: '/client-media/reduced/Event/banner.jpg',
    desc: 'Our versatile event spaces are perfect for corporate offsites, team outings, birthday bashes, and family milestones with complete audio-visual and stage setups.',
    highlights: ['AV & sound systems', 'Custom stage arrangements', 'Group dining packages', 'Event management support'],
  },
];

export default function AmenitiesClient() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className={styles.grid}>
        {amenities.map((item) => (
          <article key={item.title} className={styles.card}>
            {item.image && (
              <div className={styles.imageWrap}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.image} alt={item.title} className={styles.cardImage} loading="lazy" />
              </div>
            )}
            <div className={styles.body}>
              <div className={styles.cardHeader}>
                <span className={styles.icon}>{item.icon}</span>
                <h2 className={styles.title}>{item.title}</h2>
              </div>
              <p className={styles.desc}>{item.desc}</p>
              <ul className={styles.highlights}>
                {item.highlights.map((h) => (
                  <li key={h}><span className={styles.check}>✓</span> {h}</li>
                ))}
              </ul>

              {item.isRestaurant && (
                <div style={{ marginTop: 'auto', paddingTop: '1.25rem', display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => setIsMenuOpen(true)}
                    style={{
                      background: '#d4af37',
                      borderColor: '#d4af37',
                      color: '#0b1710',
                      fontWeight: 700,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)'
                    }}
                  >
                    📜 View Restaurant Menu
                  </button>
                  <Link
                    href="/menu"
                    className="btn btn-outline"
                    style={{ fontSize: '0.85rem' }}
                  >
                    Open Full Menu Page →
                  </Link>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* Interactive Alphonso Restaurant Menu Modal */}
      <MenuModal isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
