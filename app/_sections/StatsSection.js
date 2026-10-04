import styles from './StatsSection.module.css';

const stats = [
  { value: '5+',   label: 'Room Types',        icon: '🏡' },
  { value: '6+',   label: 'Adventure Activities', icon: '🎯' },
  { value: '4+',   label: 'Outdoor Games',     icon: '⚽' },
  { value: '500+', label: 'Happy Guests',       icon: '😊' },
  { value: '10+',  label: 'Years of Magic',     icon: '✨' },
];

export default function StatsSection() {
  return (
    <section className={`${styles.stats} section--dark`}>
      <div className="container">
        <div className={styles.grid}>
          {stats.map(({ value, label, icon }) => (
            <div key={label} className={styles.stat}>
              <span className={styles.icon}>{icon}</span>
              <span className={styles.value}>{value}</span>
              <span className={styles.label}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
