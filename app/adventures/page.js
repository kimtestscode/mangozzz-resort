import Link from 'next/link';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';

const adventures = [
  { icon: '⛺', title: 'River Tents',    desc: 'Spend a magical night in riverside tents — fall asleep to the sound of flowing water and wake up to breathtaking views. Perfect for those who love sleeping under the stars without giving up comfort.', image: '/images/2022/01/place-02.jpg' },
  { icon: '🔥', title: 'Bonfire',        desc: 'Gather around a crackling bonfire under the open sky. Share stories, roast marshmallows, and make unforgettable memories with your loved ones on cool evenings.', image: '/images/2022/01/place-03.jpg' },
  { icon: '🧗', title: 'Zip Lining',     desc: 'Soar through the lush green canopy on our thrilling zip line. Experience the rush of adrenaline as you fly over the treetops and take in the panoramic views of our magical resort.', image: '/images/2023/08/zipline-adventure-near-mumbai-in-maharashtra-price.jpg' },
  { icon: '🚣', title: 'Kayaking',       desc: 'Paddle through the calm and scenic river waters at your own pace. Whether you are a beginner or an experienced paddler, our guided kayaking sessions are perfect for all.', image: '/images/2022/01/services-05.jpg' },
  { icon: '⛵', title: 'Boating',        desc: 'Enjoy peaceful boat rides on the river as the sun sets over the Sahyadri hills. A perfect romantic activity for couples or a fun family outing that everyone will enjoy.', image: '/images/2022/01/services-06.jpg' },
  { icon: '🌊', title: 'River Crossing', desc: 'Wade across the river in a guided, safe and exhilarating river crossing adventure. Feel the rush of the current as you navigate through the flowing waters — a must-do for the brave at heart.', image: '/images/2022/01/services-07.jpg' },
];

export const metadata = {
  title: 'Adventures & Activities',
  description: 'Explore exciting outdoor adventures at Mangozzz Magical World Resort — Zip Lining, Kayaking, Boating, River Crossing, Bonfires & Riverside Tents.',
};

export default function AdventuresPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className={styles.hero}>
          <div className={styles.heroBg} aria-hidden="true"><div className={styles.overlay} /></div>
          <div className={`container ${styles.heroContent}`}>
            <span className={styles.eyebrow}>Thrill & Adventure</span>
            <h1>Adventures</h1>
            <p>Dive into a world of excitement, nature, and unforgettable experiences.</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-header">
              <span className="label">Exciting Activities</span>
              <h2>Adventure Awaits</h2>
              <p>From riverside activities to jungle thrills — there's something for everyone at Mangozzz Magical World Resort.</p>
              <div className="divider" />
            </div>

            <div className={styles.grid}>
              {adventures.map(({ icon, title, desc, image }, i) => (
                <article key={title} className={`${styles.card} ${i % 2 === 1 ? styles.reverse : ''}`}>
                  <div className={styles.imgWrap}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={image} alt={title} loading="lazy" />
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
