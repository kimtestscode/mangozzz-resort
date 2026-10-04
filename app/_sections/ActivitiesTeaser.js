import Link from 'next/link';
import styles from './ActivitiesTeaser.module.css';

const activities = [
  { icon: '⛺', title: 'River Tents',     desc: 'Sleep under the stars beside the flowing river' },
  { icon: '🔥', title: 'Bonfire',          desc: 'Gather around crackling flames on cool evenings' },
  { icon: '🧗', title: 'Zip Lining',       desc: 'Soar through the canopy on an exhilarating zip line' },
  { icon: '🚣', title: 'Kayaking',         desc: 'Paddle through scenic river waters at your own pace' },
  { icon: '⛵', title: 'Boating',          desc: 'Peaceful boat rides on the river at sunset' },
  { icon: '🌊', title: 'River Crossing',   desc: 'Adventure-packed river crossing for the brave at heart' },
];

export default function ActivitiesTeaser() {
  return (
    <section className={`section ${styles.section}`} id="adventures-preview">
      <div className="container">
        <div className="section-header">
          <span className="label">Thrill &amp; Adventure</span>
          <h2>Unforgettable Experiences</h2>
          <p>Dive into a world of adventure — from riverside activities to jungle thrills.</p>
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
          <Link href="/adventures" className="btn btn-gold btn-lg">🏕️ See All Adventures</Link>
          <Link href="/games"      className="btn btn-primary btn-lg">🎮 View Games</Link>
        </div>
      </div>
    </section>
  );
}
