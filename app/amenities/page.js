import Link from 'next/link';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';

const amenities = [
  {
    icon: '🍽️',
    title: 'Alphonso Multi-Cuisine Restaurant',
    image: '/client-media/reduced/General Photos/Alphonso Restaurant.jpg',
    desc: 'Our renowned on-site Alphonso Restaurant serves delicious freshly prepared Maharashtrian specialties alongside Indian and continental favourites. Enjoy gourmet meals surrounded by tranquil mango groves.',
    highlights: ['Specialty Maharashtrian dishes', 'Fresh daily buffet spreads', 'Outdoor & indoor seating', 'Private candle-lit dining'],
  },
  {
    icon: '🏊',
    title: 'Crystal Swimming Pool & Sun Deck',
    image: '/client-media/reduced/General Photos/Pool.jpg',
    desc: 'Take a refreshing swim in our large outdoor swimming pool with loungers and direct cottage access. Ideal for morning swims, family fun, and relaxing afternoons under the sun.',
    highlights: ['Large outdoor pool', 'Poolside lounger deck', 'Dedicated kids swimming zone', 'Surrounded by lush greens'],
  },
  {
    icon: '🏡',
    title: 'Authentic Woodhouse & Luxury Cottages',
    image: '/client-media/reduced/General Photos/Both Wood House.jpg',
    desc: 'Experience pure serenity in handcrafted wooden cottages and poolside villas. Every accommodation features air conditioning, private balconies, and scenic views.',
    highlights: ['Authentic Woodhouse villas', 'Pool & river view options', 'Private balconies & decks', 'Ensuite modern bathrooms'],
  },
  {
    icon: '🎮',
    title: 'GameZone & Indoor/Outdoor Sports',
    image: '/client-media/reduced/GameZone/2.jpg',
    desc: 'Unleash the fun at our fully-equipped GameZone featuring table tennis, carrom, chess, badminton, and outdoor cricket on spacious lawns.',
    highlights: ['Table Tennis & Carrom', 'Badminton court', 'Cricket & Football lawn', 'Fun activities for all ages'],
  },
  {
    icon: '💍',
    title: 'Destination Weddings & Receptions',
    image: '/client-media/reduced/Wedding/WhatsApp Image 2026-09-15 at 3.36.28 PM.jpeg',
    desc: 'Host fairytale destination weddings and ring ceremonies against the Sahyadri backdrop with our expansive green lawns, custom decor, and in-house catering.',
    highlights: ['Grand open-air lawn', 'Custom stage & mandap decor', 'Gourmet wedding catering', 'Full resort buyout options'],
  },
  {
    icon: '🎉',
    title: 'Corporate Meets & Private Events',
    image: '/client-media/reduced/Event/banner.jpg',
    desc: 'Our versatile event spaces are perfect for corporate offsites, team outings, birthday bashes, and family milestones with complete audio-visual and stage setups.',
    highlights: ['AV & sound systems', 'Custom stage arrangements', 'Group dining packages', 'Event management support'],
  },
];

export const metadata = {
  title: 'Resort Amenities & Facilities',
  description: 'Explore premier amenities at Mangozzz Magical World Resort — Alphonso Restaurant, Swimming Pool, Luxury Cottages, GameZone, Destination Weddings, and Events.',
};

export default function AmenitiesPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className={styles.hero}>
          <div className={styles.heroBg} aria-hidden="true"><div className={styles.overlay} /></div>
          <div className={`container ${styles.heroContent}`}>
            <span className={styles.eyebrow}>What We Offer</span>
            <h1>Amenities</h1>
            <p>Everything you need for a perfect stay, all under one roof.</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-header">
              <span className="label">World-Class Facilities</span>
              <h2>Our Amenities</h2>
              <p>From gourmet dining to adventure activities — we've thought of everything.</p>
              <div className="divider" />
            </div>

            <div className={styles.grid}>
              {amenities.map(({ icon, title, image, desc, highlights }) => (
                <article key={title} className={styles.card}>
                  {image && (
                    <div className={styles.imageWrap}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={image} alt={title} className={styles.cardImage} loading="lazy" />
                    </div>
                  )}
                  <div className={styles.body}>
                    <div className={styles.cardHeader}>
                      <span className={styles.icon}>{icon}</span>
                      <h2 className={styles.title}>{title}</h2>
                    </div>
                    <p className={styles.desc}>{desc}</p>
                    <ul className={styles.highlights}>
                      {highlights.map((h) => (
                        <li key={h}><span className={styles.check}>✓</span> {h}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <Link href="/book" className="btn btn-primary btn-lg">📅 Book Now & Enjoy All Amenities</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
