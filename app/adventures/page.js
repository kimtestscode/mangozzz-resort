import Link from 'next/link';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';

const adventures = [
  {
    icon: '🔄',
    title: '360° Cycling',
    desc: 'Experience zero-gravity sensations on our 360-degree full loop track cycle! Complete with safety gear, harness, and expert supervision for an unforgettable thrill.',
    image: '/client-media/reduced/Adventures/360 cycling.jpg',
  },
  {
    icon: '🌲',
    title: 'High-Tree Zipline',
    desc: 'Soar through the lush green canopy on our high-flying zip line. Feel the rush of mountain winds and take in panoramic views of the Sahyadri landscape and mango orchards.',
    image: '/client-media/reduced/Adventures/zipline.jpg',
  },
  {
    icon: '🎯',
    title: 'Target Shooting',
    desc: 'Test your precision, focus, and hand-eye coordination with air gun target shooting under the guidance of trained range instructors.',
    image: '/client-media/reduced/Adventures/shooting.jpg',
  },
  {
    icon: '🏹',
    title: 'Archery Arena',
    desc: 'Channel your inner archer with traditional and compound bows in our dedicated outdoor archery field surrounded by nature.',
    image: '/client-media/reduced/Adventures/archery.jpg',
  },
  {
    icon: '🌉',
    title: 'Brahma Bridge & Rope Course',
    desc: 'Challenge your balance and agility on suspended wooden bridges and rope obstacles high above the green forest floor.',
    image: '/client-media/reduced/Adventures/brahma bridge.jpg',
  },
  {
    icon: '🌧️',
    title: 'Rain Dance & Swimming Pool',
    desc: 'Dance under cascading water jets synced with DJ music beats, then plunge into our large crystal outdoor swimming pool for pure refreshment.',
    image: '/client-media/reduced/General Photos/Pool.jpg',
  },
];

export const metadata = {
  title: 'Adventures & Thrill Activities — 360° Cycling, Zipline & Shooting',
  description:
    'Explore exciting outdoor adventures at Mangozzz Magical World Resort — 360° Cycling, High Zipline, Target Shooting, Archery Arena, Brahma Bridge Rope Course, and Rain Dance.',
};

export default function AdventuresPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className={styles.hero}>
          <div className={styles.heroBg} aria-hidden="true"><div className={styles.overlay} /></div>
          <div className={`container ${styles.heroContent}`}>
            <span className={styles.eyebrow}>Thrill &amp; Adventure Zone</span>
            <h1>Resort Adventures</h1>
            <p>Elevate your heart rate with certified adventure obstacle courses, aerial ziplines, and extreme cycling.</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-header">
              <span className="label">Certified Outdoor Thrills</span>
              <h2>Adventure Awaits</h2>
              <p>All adventure activities feature professional equipment, certified harnesses, and safety marshals.</p>
              <div className="divider" />
            </div>

            <div className={styles.grid}>
              {adventures.map(({ icon, title, desc, image }, i) => (
                <article key={title} className={`${styles.card} ${i % 2 === 1 ? styles.reverse : ''}`}>
                  <div className={styles.imgWrap}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={image}
                      alt={title}
                      loading="lazy"
                    />
                    <div className={styles.iconBadge}>{icon}</div>
                  </div>
                  <div className={styles.body}>
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.desc}>{desc}</p>
                    <Link href="/book" className="btn btn-primary" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>
                      📅 Book This Experience
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '3.5rem', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/amenities" className="btn btn-gold btn-lg">
                🎯 View All Amenities &amp; Games
              </Link>
              <Link href="/menu" className="btn btn-primary btn-lg">
                📜 Alphonso Restaurant Menu
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
