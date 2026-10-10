import Link from 'next/link';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';

const whyUs = [
  { icon: '🌿', title: 'Nature & Serenity',    desc: 'Wake up to birdsong, river sounds, and fresh mountain air every morning.' },
  { icon: '🏡', title: 'Cosy Cottages',        desc: 'Our riverside cottages are thoughtfully designed for comfort and elegance.' },
  { icon: '🎯', title: 'Adventure Activities', desc: 'From zip lining to kayaking, we have thrills for every kind of adventurer.' },
  { icon: '🍽️', title: 'Delicious Food',       desc: 'Freshly prepared local and continental cuisine served daily at our restaurant.' },
  { icon: '👨‍👩‍👧', title: 'Family Friendly',    desc: 'A safe, fun, and welcoming environment perfect for families and groups.' },
  { icon: '⭐', title: 'Award Winning',        desc: 'Recognised for exceptional hospitality and guest satisfaction year after year.' },
];

export const metadata = {
  title: 'About Us',
  description: 'Learn about Mangozzz Magical World Resort — our story, vision, riverside cottages, Alphonso dining, and nature getaway in Khalapur, Maharashtra.',
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroBg} aria-hidden="true"><div className={styles.overlay} /></div>
          <div className={`container ${styles.heroContent}`}>
            <span className={styles.eyebrow}>Our Story</span>
            <h1>About Mangozzz Magical World Resort</h1>
          </div>
        </section>

        {/* Story Section */}
        <section className="section">
          <div className="container">
            <div className={styles.storyLayout}>
              <div className={styles.storyText}>
                <span className="label">More Than a Stay</span>
                <h2>A Magical Riverside Retreat</h2>
                <div className="divider" style={{ marginInline: 0, marginTop: '1rem', marginBottom: '1.5rem' }} />
                <p>
                  Nestled in the serene hills of Khalapur, Maharashtra, Mangozzz Magical World Resort is
                  a premier riverside cottage resort that blends the beauty of nature with modern
                  comforts. Founded with a vision to create a sanctuary where guests can escape
                  the chaos of city life, we have grown to become one of the most beloved
                  getaways near Mumbai and Pune.
                </p>
                <p style={{ marginTop: '1rem' }}>
                  Whether you're looking for a peaceful weekend retreat, a thrilling adventure
                  holiday, or a venue for your special celebrations, our resort offers something
                  truly magical for everyone. From our carefully designed cottages along the river
                  to world-class amenities and exciting activities, every detail at Mangozzz is
                  crafted with love and care.
                </p>
                <p style={{ marginTop: '1rem' }}>
                  We believe that the best memories are made when people reconnect with nature,
                  with each other, and with themselves. Welcome to Mangozzz Magical World Resort — where
                  every moment is an experience to treasure.
                </p>
                <Link href="/book" className="btn btn-primary" style={{ marginTop: '2rem', display: 'inline-flex' }}>
                  📅 Book Your Experience
                </Link>
              </div>
              <div className={styles.storyImages}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/client-media/reduced/General Photos/Resort.jpg" alt="Mangozzz Resort Grounds & Cottages" className={styles.imgMain} />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/client-media/reduced/General Photos/Both Wood House.jpg" alt="Authentic Woodhouse Riverside Cottages" className={styles.imgSecondary} />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section section--gray">
          <div className="container">
            <div className="section-header">
              <span className="label">Why Choose Us</span>
              <h2>The Mangozzz Difference</h2>
              <p>Here's what makes us the most magical resort in the Sahyadri region.</p>
              <div className="divider" />
            </div>
            <div className={styles.whyGrid}>
              {whyUs.map(({ icon, title, desc }) => (
                <div key={title} className={styles.whyCard}>
                  <span className={styles.whyIcon}>{icon}</span>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
