import Link from 'next/link';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import AmenitiesClient from './AmenitiesClient';
import styles from './page.module.css';

export const metadata = {
  title: 'Resort Amenities & Facilities — Alphonso Restaurant, Pool & Cottages',
  description:
    'Explore premier amenities at Mangozzz Magical World Resort — Alphonso Multi-Cuisine Restaurant with full food menu, crystal swimming pool, authentic Woodhouse villas, GameZone, and wedding venues.',
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
            <h1>Amenities &amp; Facilities</h1>
            <p>Everything you need for an unforgettable nature vacation and culinary experience.</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-header">
              <span className="label">World-Class Facilities</span>
              <h2>Our Resort Amenities</h2>
              <p>From Alphonso gourmet dining and swimming pool parties to adventure activities — we have got you covered.</p>
              <div className="divider" />
            </div>

            <AmenitiesClient />

            <div style={{ textAlign: 'center', marginTop: '3.5rem', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/menu" className="btn btn-gold btn-lg">
                📜 Browse Alphonso Restaurant Menu
              </Link>
              <Link href="/book" className="btn btn-primary btn-lg">
                📅 Book Your Stay &amp; Enjoy All Amenities
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
