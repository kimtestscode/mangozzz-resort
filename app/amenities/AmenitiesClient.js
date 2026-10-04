'use client';

import { useState } from 'react';
import Link from 'next/link';
import MenuModal from '@/components/MenuModal/MenuModal';
import styles from './page.module.css';

const coreAmenities = [
  {
    id: 'alphonso-restaurant',
    icon: '🍽️',
    title: 'Alphonso Multi-Cuisine Restaurant',
    image: '/client-media/reduced/General Photos/Alphonso Restaurant.jpg',
    desc: 'Managed by Shivay Hospitality with curation by Chef Ajit Shetty. Enjoy specialty Maharashtrian dishes, tandoori kebabs, sizzling Indo-Chinese items, coastal seafood, and mocktails inside our air-conditioned dining hall or under mango grove canopies.',
    highlights: [
      'Specialty Maharashtrian & North Indian dining',
      'Pure Veg & Non-Veg with dedicated Jain options',
      'Service hours: 8:00 AM – 12:00 Midnight (Room Service 222/223)',
      'Lavish breakfast, lunch & dinner buffets',
    ],
    isRestaurant: true,
  },
  {
    id: 'swimming-pool',
    icon: '🏊',
    title: 'Crystal Swimming Pool & Rain Dance',
    image: '/client-media/reduced/General Photos/Pool.jpg',
    desc: 'Take a refreshing dip in our large crystal-clear outdoor swimming pool with poolside loungers, kids zone, and a vibrant sound-synced Rain Dance arena.',
    highlights: [
      'Large outdoor swimming pool',
      'Sound-synced Rain Dance with DJ beats',
      'Poolside lounger sun deck',
      'Surrounded by tranquil riverside breeze',
    ],
  },
  {
    id: 'woodhouse-cottages',
    icon: '🪵',
    title: 'Authentic Woodhouse Villas & Luxury Cottages',
    image: '/client-media/reduced/General Photos/Wood house big.jpg',
    desc: 'Experience pure serenity in handcrafted wooden cottages and poolside villas. Every accommodation features air conditioning, private balconies, complimentary breakfast, and scenic views.',
    highlights: [
      'Authentic Woodhouse 1 & 2 villas',
      'Pool & River View Supreme cottages',
      'Private balconies & riverside decks',
      'Complimentary breakfast included with every stay',
    ],
  },
  {
    id: 'grand-lawn-banquet',
    icon: '🎪',
    title: 'Grand Event Lawn & AC Banquet Hall',
    image: '/client-media/reduced/Wedding/WhatsApp Image 2026-09-15 at 3.36.28 PM.jpeg',
    desc: 'Host fairytale destination weddings, corporate galas, and family milestones with our 800–1,000 Pax Grand Open Lawn and 300–400 Pax AC Banquet hall.',
    highlights: [
      '800 – 1,000 Pax Grand Open Lawn',
      '300 – 400 Pax AC Banquet Hall',
      'Poolside Mehendi & Haldi setup zone',
      'In-house catering by Alphonso culinary team',
    ],
  },
  {
    id: 'gamezone',
    icon: '🎮',
    title: 'All-In-One Recreation GameZone',
    image: '/client-media/reduced/GameZone/2.jpg',
    desc: 'A complete family gaming hub with indoor table sports, classic board games, and manicured outdoor playing fields for cricket, badminton, and volleyball.',
    highlights: [
      'Table Tennis, Pool Table & Foosball',
      'Carrom, Chess, Housie & Uno cards',
      'Lawn Cricket, Volleyball & Badminton',
      'Fun for children, families & corporate groups',
    ],
  },
  {
    id: 'nature-parking',
    icon: '🚗',
    title: 'Riverfront Deck, Orchard & Ample Parking',
    image: '/client-media/reduced/General Photos/River View 2.jpg',
    desc: 'Spread across acres of lush mango trees along the scenic river in Khalapur. Features peaceful river walks, shaded seating, and spacious free vehicle parking.',
    highlights: [
      'Riverside panorama & seating decks',
      'Dense organic Alphonso mango groves',
      'Spacious on-site secure parking',
      'Easy access from Mumbai-Pune Expressway',
    ],
  },
];

// Official Complimentary Activities from Current Rates.jpeg
const complimentaryActivities = [
  { icon: '🏊', name: 'Swimming Pool', desc: 'Large crystal outdoor pool for adults & kids' },
  { icon: '🌧️', name: 'Rain Dance', desc: 'High-energy rain dance floor with music' },
  { icon: '🏐', name: 'Volleyball', desc: 'Outdoor lawn volleyball court' },
  { icon: '🏸', name: 'Badminton', desc: 'Shuttle court with rackets & nets' },
  { icon: '🎯', name: 'Carrom Board', desc: 'Championship wooden carrom boards' },
  { icon: '🏏', name: 'Cricket', desc: 'Open grounds cricket set with pitch' },
  { icon: '🎱', name: 'Pool Table', desc: 'Full-size indoor billiards table' },
  { icon: '⚽', name: 'Foosball', desc: 'Exciting table football matches' },
  { icon: '🏓', name: 'Table Tennis', desc: 'Indoor tournament table tennis setup' },
  { icon: '♟️', name: 'Chess', desc: 'Classic strategic board gaming' },
  { icon: '🎟️', name: 'Housie / Tambola', desc: 'Fun family & group numbers game' },
  { icon: '🃏', name: 'Uno & Cards', desc: 'Card games and board entertainment' },
];

// Official Paid Adventure Activities from Current Rates.jpeg
const paidAdventures = [
  {
    icon: '🔄',
    name: '360° Cycling',
    badge: 'Thrilling Gyro',
    desc: 'Defy gravity on our 360-degree rotating loop cycle — an exhilarating adventure experience with safety harness.',
    image: '/client-media/reduced/Adventures/360 cycling.jpg',
  },
  {
    icon: '🎯',
    name: 'Target Shooting',
    badge: 'Air Gun Range',
    desc: 'Test your aim and focus at our dedicated target shooting range guided by trained instructors.',
    image: '/client-media/reduced/Adventures/shooting.jpg',
  },
  {
    icon: '🏹',
    name: 'Archery Arena',
    badge: 'Bullseye Focus',
    desc: 'Master the traditional bow and arrow with precision target targets in an open green setting.',
    image: '/client-media/reduced/Adventures/archery.jpg',
  },
  {
    icon: '🌲',
    name: 'High-Tree Zipline',
    badge: 'Aerial Rush',
    desc: 'Glide across the lush tree canopy and enjoy panoramic aerial vistas of the Sahyadri landscape.',
    image: '/client-media/reduced/Adventures/zipline.jpg',
  },
  {
    icon: '🌉',
    name: 'Brahma Bridge & Rope Course',
    badge: 'Obstacle Trail',
    desc: 'Balance and cross suspended wooden planks high above the ground on our thrilling rope obstacle course.',
    image: '/client-media/reduced/Adventures/brahma bridge.jpg',
  },
];

export default function AmenitiesClient() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* 1. Core Resort Amenities */}
      <div className={styles.grid}>
        {coreAmenities.map((item) => (
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
                  <Link href="/menu" className="btn btn-outline" style={{ fontSize: '0.85rem' }}>
                    Open Full Menu Page →
                  </Link>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* 2. Complimentary Activities & Games (From Official Rate Chart) */}
      <div style={{ marginTop: '5rem' }}>
        <div className="section-header">
          <span className="label">Included Free With Every Stay &amp; Day Picnic</span>
          <h2>Complimentary Games &amp; Activities</h2>
          <p>Enjoy unlimited access to all indoor and outdoor sports with family, friends, or corporate colleagues.</p>
          <div className="divider" />
        </div>

        <div className={styles.activitiesGrid}>
          {complimentaryActivities.map((act) => (
            <div key={act.name} className={styles.activityCard}>
              <span className={styles.actIcon}>{act.icon}</span>
              <h3 className={styles.actTitle}>{act.name}</h3>
              <p className={styles.actDesc}>{act.desc}</p>
              <span className={styles.freeBadge}>FREE / INCLUDED</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Paid Thrill Adventures (From Official Rate Chart) */}
      <div style={{ marginTop: '5rem' }}>
        <div className="section-header">
          <span className="label">Thrill &amp; Adventure Zone</span>
          <h2>Paid Adventure Activities</h2>
          <p>Take your adrenaline to the next level with our certified adventure rope courses and shooting ranges.</p>
          <div className="divider" />
        </div>

        <div className={styles.paidGrid}>
          {paidAdventures.map((adv) => (
            <article key={adv.name} className={styles.paidCard}>
              <div className={styles.paidImgWrap}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={adv.image}
                  alt={adv.name}
                  onError={(e) => {
                    e.currentTarget.src = '/client-media/reduced/General Photos/River View 2.jpg';
                  }}
                  loading="lazy"
                />
                <span className={styles.paidBadge}>{adv.badge}</span>
              </div>
              <div className={styles.paidBody}>
                <div className={styles.paidHeader}>
                  <span className={styles.icon}>{adv.icon}</span>
                  <h3>{adv.name}</h3>
                </div>
                <p>{adv.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Interactive Alphonso Restaurant Menu Modal */}
      <MenuModal isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
