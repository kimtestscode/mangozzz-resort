import Link from 'next/link';
import styles from './ActivitiesTeaser.module.css';

const activities = [
  { icon: '🔄', title: '360° Cycling',   desc: 'Defy gravity on our thrilling 360-degree rotating loop cycle' },
  { icon: '🌲', title: 'High Zipline',   desc: 'Soar through the lush mango canopy on an aerial zip line' },
  { icon: '🎯', title: 'Target Shooting', desc: 'Test your aim with air rifle shooting at guided target range' },
  { icon: '🏹', title: 'Archery Arena',   desc: 'Practice bow & arrow precision target shooting on green lawns' },
  { icon: '🌉', title: 'Brahma Bridge',  desc: 'Cross suspended planks on our high-rope adventure obstacle trail' },
  { icon: '🌧️', title: 'Rain Dance & Pool', desc: 'Splash in crystal pool & dance to high-energy rain beats' },
];

export default function ActivitiesTeaser() {
  return (
    <section className={`section ${styles.section}`} id="adventures-preview">
      <div className="container">
        <div className="section-header">
          <span className="label">Thrill &amp; Adventure Zone</span>
          <h2>Unforgettable Activities &amp; Games</h2>
          <p>
            From high-flying ziplines and 360° cycling to 12+ complimentary indoor and outdoor games — experience unlimited resort fun.
          </p>
          <div className="divider" />
        </div>

        <div className={styles.grid}>
          {activities.map(({ icon, title, desc }) => (
            <div key={title} className={styles.card}>
              <div className={styles.iconWrap}>
                <span className={styles.icon}>{icon}</span>
              </div>
              <div className={styles.body}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.desc}>{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <Link href="/amenities" className="btn btn-gold btn-lg">🎯 Explore All Activities &amp; Games</Link>
          <Link href="/menu"      className="btn btn-primary btn-lg">📜 View Restaurant Menu</Link>
        </div>
      </div>
    </section>
  );
}
