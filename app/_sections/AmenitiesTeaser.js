import Link from 'next/link';
import styles from './AmenitiesTeaser.module.css';

const amenities = [
  { icon: '🍽️', title: 'Restaurant',  desc: 'Savour freshly prepared local and continental dishes' },
  { icon: '🏡', title: 'Cottage Rooms', desc: 'Comfortable rooms with scenic river and pool views' },
  { icon: '🎉', title: 'Banquet Hall',  desc: 'Host events, weddings, and celebrations in style' },
  { icon: '🏊', title: 'Swimming Pool', desc: 'Dive into our beautiful outdoor swimming pool' },
  { icon: '🥤', title: 'Juice Bar',     desc: 'Fresh seasonal fruit juices and healthy drinks' },
  { icon: '🍱', title: 'Buffet',        desc: 'Hearty spread of delicious dishes for every meal' },
];

export default function AmenitiesTeaser() {
  return (
    <section className={`section ${styles.section}`} id="amenities-preview">
      <div className="container">
        <div className="section-header">
          <span className="label">What We Offer</span>
          <h2>World-Class Amenities</h2>
          <p>Everything you need for a comfortable and memorable stay, all in one place.</p>
          <div className="divider" />
        </div>

        <div className={styles.grid}>
          {amenities.map(({ icon, title, desc }) => (
            <div key={title} className={styles.card}>
              <span className={styles.icon}>{icon}</span>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.desc}>{desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <Link href="/amenities" className="btn btn-primary btn-lg">
            View All Amenities
          </Link>
        </div>
      </div>
    </section>
  );
}
