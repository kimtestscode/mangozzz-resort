import Link from 'next/link';
import styles from './WeddingTeaser.module.css';

export default function WeddingTeaser() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className="section-header">
          <span className="label">Destination Celebrations</span>
          <h2>Riverside Weddings &amp; Grand Events</h2>
          <p>
            Create timeless memories against the Sahyadri hills with our expansive lawns, banquet hall, and poolside celebrations.
          </p>
          <div className="divider" />
        </div>

        <div className={styles.bannerCard}>
          <div className={styles.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/client-media/reduced/Wedding/WhatsApp Image 2026-09-15 at 3.36.28 PM.jpeg"
              alt="Riverside Destination Wedding Setup at Mangozzz Magical World Resort"
              className={styles.img}
              loading="lazy"
            />
            <div className={styles.imgOverlay} />
            <div className={styles.pillsOnImg}>
              <div className={styles.pill}>
                👥 <strong>800–1,000 Pax</strong> Open Lawn Setup
              </div>
              <div className={styles.pill}>
                🏛️ <strong>300–400 Pax</strong> AC Banquet Hall
              </div>
              <div className={styles.pill}>
                🏊 <strong>Poolside</strong> Haldi &amp; Mehendi Zone
              </div>
            </div>
          </div>

          <div className={styles.content}>
            <span className={styles.tag}>Dream Destination Venue</span>
            <h3 className={styles.title}>
              Celebrate Love by the River in Khalapur &amp; Karjat
            </h3>
            <p className={styles.desc}>
              From royal open-air wedding mandaps under the stars to intimate garden engagements and poolside Haldi bashes,
              Mangozzz Magical World Resort offers complete event infrastructure, in-house Alphonso gourmet catering,
              and luxury overnight stays for 150+ guests.
            </p>

            <div className={styles.featuresGrid}>
              <div className={styles.featureItem}>
                <span>✓</span> Grand 1,000-Pax Open Lawn
              </div>
              <div className={styles.featureItem}>
                <span>✓</span> 300–400 Pax AC Banquet Hall
              </div>
              <div className={styles.featureItem}>
                <span>✓</span> Vibrant Poolside Haldi &amp; Rain Dance
              </div>
              <div className={styles.featureItem}>
                <span>✓</span> Budget-Friendly Open Garden
              </div>
              <div className={styles.featureItem}>
                <span>✓</span> Authentic Maharashtrian &amp; Jain Buffets
              </div>
              <div className={styles.featureItem}>
                <span>✓</span> Full Resort Buyout for 150+ Guests
              </div>
            </div>

            <div className={styles.actions}>
              <Link href="/weddings" className="btn btn-primary btn-lg">
                💍 Explore Wedding Venues &amp; Packages
              </Link>
              <a
                href="https://wa.me/917977127312?text=Hello!%20I%20want%20to%20inquire%20about%20hosting%20a%20wedding/event%20at%20Mangozzz%20Magical%20World%20Resort."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-lg"
              >
                💬 WhatsApp Planner
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
