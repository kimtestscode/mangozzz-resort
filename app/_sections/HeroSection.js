import Link from 'next/link';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero} aria-label="Hero">
      {/* Background image layer */}
      <div className={styles.bg} aria-hidden="true">
        <div className={styles.overlay} />
      </div>

      {/* Floating particles */}
      <div className={styles.particles} aria-hidden="true">
        {[...Array(12)].map((_, i) => (
          <span key={i} className={styles.particle} style={{ '--i': i }} />
        ))}
      </div>

      <div className={`container ${styles.content}`}>
        <span className={styles.eyebrow}>Riverside Destination Wedding Venue &amp; Resort in Karjat / Khalapur</span>
        <h1 className={styles.title}>
          Mangozzz<br />
          <em>Magical World Resort</em>
        </h1>
        <p className={styles.subtitle}>
          A premier riverside destination wedding venue &amp; nature resort in Karjat / Khalapur — featuring grand 800–1,000 Pax open wedding lawns, an elegant 300–400 Pax AC banquet hall, poolside Haldi &amp; Sangeet celebrations, and authentic wooden villas near Mumbai &amp; Pune.
        </p>
        <div className={styles.actions}>
          <Link href="/weddings" className="btn btn-primary btn-lg">
            💍 Destination Weddings
          </Link>
          <Link href="/book" className="btn btn-gold btn-lg">
            📅 Book Your Stay
          </Link>
          <Link href="/amenities" className="btn btn-outline btn-lg">
            🌿 Amenities &amp; Activities
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator} aria-hidden="true">
        <span className={styles.mouse}><span className={styles.wheel} /></span>
        <p>Scroll to explore</p>
      </div>
    </section>
  );
}
