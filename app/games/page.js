import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';

const outdoorGames = [
  { icon: '⚽', title: 'Football',  desc: 'Play an exciting game of football on our well-maintained ground with your family and friends.' },
  { icon: '🏏', title: 'Cricket',   desc: 'Enjoy a fun cricket match on our dedicated pitch — perfect for all ages and skill levels.' },
  { icon: '🏸', title: 'Badminton', desc: 'Play a few rounds of badminton on our outdoor courts surrounded by nature.' },
  { icon: '🎯', title: 'Archery',   desc: 'Try your hand at archery with guided sessions for beginners and enthusiasts alike.' },
];

const indoorGames = [
  { icon: '🎲', title: 'Carrom',     desc: 'Challenge your friends to a classic game of carrom — great fun for the entire family.' },
  { icon: '🎱', title: 'Pool Table', desc: 'Show off your billiards skills at our indoor pool table — available throughout the day.' },
];

function GameSection({ title, games, accent }) {
  return (
    <div className={styles.gameSection}>
      <h2 className={styles.sectionTitle} style={{ color: accent }}>{title}</h2>
      <div className={styles.gamesGrid}>
        {games.map(({ icon, title: t, desc }) => (
          <div key={t} className={styles.gameCard}>
            <span className={styles.gameIcon}>{icon}</span>
            <h3>{t}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export const metadata = {
  title: 'Games & Sports',
  description: 'Indoor & outdoor games at Mangozzz Magical World Resort — Football, Cricket, Badminton, Archery, Carrom, and Pool Table.',
};

export default function GamesPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className={styles.hero}>
          <div className={styles.heroBg} aria-hidden="true"><div className={styles.overlay} /></div>
          <div className={`container ${styles.heroContent}`}>
            <span className={styles.eyebrow}>Fun for Everyone</span>
            <h1>Games</h1>
            <p>From outdoor sports to indoor games — there's always something fun to do at Mangozzz Magical World Resort.</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-header">
              <span className="label">Play & Enjoy</span>
              <h2>Games & Sports</h2>
              <p>Keep the fun going with our variety of outdoor and indoor games for all ages.</p>
              <div className="divider" />
            </div>
            <GameSection title="🌿 Outdoor Games" games={outdoorGames} accent="var(--green-dark)" />
            <GameSection title="🏠 Indoor Games"  games={indoorGames}  accent="var(--gold)" />

            {/* GameZone Real Photos */}
            <div style={{ marginTop: '4rem' }}>
              <div className="section-header">
                <span className="label">Photo Preview</span>
                <h2>GameZone in Action</h2>
                <p>Real glimpses of our indoor and outdoor recreation facilities.</p>
                <div className="divider" />
              </div>
              <div className={styles.photoGrid}>
                <div className={styles.photoCard}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/client-media/reduced/GameZone/2.jpg" alt="Indoor Recreation & Pool Table" loading="lazy" />
                  <span className={styles.photoLabel}>Table Tennis & Billiards</span>
                </div>
                <div className={styles.photoCard}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/client-media/reduced/GameZone/3.jpg" alt="Indoor Board Games & Carrom" loading="lazy" />
                  <span className={styles.photoLabel}>Carrom & Board Games</span>
                </div>
                <div className={styles.photoCard}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/client-media/reduced/GameZone/4.jpg" alt="Sports & Game Arena" loading="lazy" />
                  <span className={styles.photoLabel}>Gaming Arena</span>
                </div>
                <div className={styles.photoCard}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/client-media/reduced/GameZone/WhatsApp Image 2025-12-20 at 3.22.45 PM.jpeg" alt="Lawn Games & Activities" loading="lazy" />
                  <span className={styles.photoLabel}>Lawn Sports Area</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
