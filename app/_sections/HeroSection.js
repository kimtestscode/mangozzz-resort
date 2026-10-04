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
        <span className={styles.eyebrow}>Welcome to</span>
        <h1 className={styles.title}>
          Mangozzz<br />
          <em>Magical World Resort</em>
        </h1>
        <p className={styles.subtitle}>
          A riverside retreat nestled in nature — where adventures, serenity, and
          unforgettable memories come together in the heart of Khalapur, Maharashtra.
        </p>
        <div className={styles.actions}>
          <Link href="/book" className="btn btn-gold btn-lg">
            📅 Book Your Stay
          </Link>
          <Link href="/adventures" className="btn btn-outline btn-lg">
            🌿 Explore Adventures
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
