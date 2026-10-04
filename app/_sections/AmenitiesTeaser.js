import Link from 'next/link';
import styles from './AmenitiesTeaser.module.css';

const amenities = [
  { icon: '🍽️', title: 'Alphonso Restaurant', desc: 'Curated by Chef Ajit Shetty — Maharashtrian, Tandoori & Chinese delicacies', link: '/menu', linkText: 'View Food Menu →' },
  { icon: '🏡', title: 'Cottages & Woodhouses', desc: 'Handcrafted wooden villas & AC cottages with scenic river and pool views', link: '/book', linkText: 'Check Rates →' },
  { icon: '🎉', title: 'Grand Banquet & Lawn', desc: '800-1000 Pax open lawn & 300-400 Pax AC Banquet for royal celebrations', link: '/weddings', linkText: 'Wedding Details →' },
  { icon: '🏊', title: 'Crystal Swimming Pool', desc: 'Large outdoor pool with sun loungers, kids zone & rain dance music', link: '/amenities', linkText: 'Explore Pool →' },
  { icon: '🎮', title: 'GameZone & Sports', desc: 'Table tennis, carrom, chess, pool table, badminton & outdoor cricket', link: '/games', linkText: 'View Games →' },
  { icon: '🍱', title: 'Day Picnic & Stay Buffets', desc: 'All-inclusive packages with breakfast, lavish lunch, hi-tea & dinner', link: '/book?room=day-picnic', linkText: 'Day Passes →' },
];

export default function AmenitiesTeaser() {
  return (
    <section className={`section ${styles.section}`} id="amenities-preview">
      <div className="container">
        <div className="section-header">
          <span className="label">Resort Facilities &amp; Dining</span>
          <h2>World-Class Amenities</h2>
          <p>Everything you need for an authentic nature getaway, gourmet dining, and celebrations.</p>
          <div className="divider" />
        </div>

        <div className={styles.grid}>
          {amenities.map(({ icon, title, desc, link, linkText }) => (
            <div key={title} className={styles.card}>
              <span className={styles.icon}>{icon}</span>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.desc}>{desc}</p>
              {link && (
                <Link
                  href={link}
                  style={{
                    display: 'inline-block',
                    marginTop: '0.75rem',
                    color: 'var(--gold-dark, #a07c2a)',
                    fontWeight: '700',
                    fontSize: '0.85rem',
                    textDecoration: 'none'
                  }}
                >
                  {linkText}
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className={styles.cta} style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/menu" className="btn btn-gold btn-lg">
            📜 Alphonso Restaurant Menu
          </Link>
          <Link href="/amenities" className="btn btn-primary btn-lg">
            View All Amenities
          </Link>
        </div>
      </div>
    </section>
  );
}
