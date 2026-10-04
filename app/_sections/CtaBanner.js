import Link from 'next/link';
import styles from './CtaBanner.module.css';

export default function CtaBanner() {
  return (
    <section className={styles.banner} aria-label="Book your stay call to action">
      <div className={styles.bg} aria-hidden="true">
        <div className={styles.overlay} />
      </div>
      <div className={`container ${styles.content}`}>
        <span className={styles.eyebrow}>Ready for Magic?</span>
        <h2 className={styles.title}>Book Your Stay Today</h2>
        <p className={styles.text}>
          Whether it's a family vacation, a couple's retreat, or a group adventure —
          Mangozzz Magical World Resort has the perfect experience waiting for you.
        </p>
        <div className={styles.actions}>
          <Link href="/book" className="btn btn-gold btn-lg">
            📅 Book Now
          </Link>
          <a href="tel:+917977127312" className="btn btn-outline btn-lg">
            📞 Call Us
          </a>
        </div>
      </div>
    </section>
  );
}
