import Link from 'next/link';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';

// All official games from Current Rates.jpeg
const outdoorSports = [
  { icon: '🏏', title: 'Cricket',       desc: 'Full grounds cricket set with bat, ball, wickets, and pitch for spirited matches.' },
  { icon: '🏐', title: 'Volleyball',    desc: 'Lawn volleyball court with standard net and balls for family & group tournaments.' },
  { icon: '🏸', title: 'Badminton',     desc: 'Smooth outdoor badminton court with lightweight rackets and shuttlecocks.' },
  { icon: '🌧️', title: 'Rain Dance',    desc: 'High-energy outdoor rain floor with musical beats and water mist sprays.' },
];

const indoorSports = [
  { icon: '🏓', title: 'Table Tennis',  desc: 'Tournament-grade TT table with premium paddles and balls.' },
  { icon: '🎱', title: 'Pool Table',    desc: 'Full-size slate billiards table with cues and chalk.' },
  { icon: '⚽', title: 'Foosball',      desc: 'Exciting fast-paced table soccer for all age groups.' },
  { icon: '🎯', title: 'Carrom Board',  desc: 'Smooth championship wooden carrom boards with striker and coins.' },
  { icon: '♟️', title: 'Chess',         desc: 'Classic chess boards for strategic minds and quiet evenings.' },
  { icon: '🎟️', title: 'Housie',        desc: 'Exciting Tambola / Housie sets for fun family and group sessions.' },
  { icon: '🃏', title: 'Uno & Cards',   desc: 'Popular Uno card decks and board games for endless fun.' },
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
  title: 'Games & Sports — 12+ Complimentary Indoor & Outdoor Games',
  description:
    'Enjoy 12+ complimentary games at Mangozzz Magical World Resort — Cricket, Volleyball, Badminton, Table Tennis, Pool Table, Foosball, Carrom, Chess, Housie, and Uno Cards.',
};

export default function GamesPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className={styles.hero}>
          <div className={styles.heroBg} aria-hidden="true"><div className={styles.overlay} /></div>
          <div className={`container ${styles.heroContent}`}>
            <span className={styles.eyebrow}>Included Free With Stay &amp; Day Pass</span>
            <h1>Resort Games &amp; Sports</h1>
            <p>12+ indoor and outdoor games designed for children, families, corporate teams, and friend groups.</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-header">
              <span className="label">Complimentary Activities</span>
              <h2>Fun for All Ages</h2>
              <p>All games are completely complimentary with every overnight stay and One Day Picnic pass.</p>
              <div className="divider" />
            </div>

            <GameSection title="🌿 Outdoor Sports & Activities" games={outdoorSports} accent="var(--green-dark)" />
            <GameSection title="🏠 Indoor GameZone & Board Games" games={indoorSports} accent="var(--gold-dark, #a07c2a)" />

            {/* GameZone Real Photos */}
            <div style={{ marginTop: '4.5rem' }}>
              <div className="section-header">
                <span className="label">Photo Preview</span>
                <h2>GameZone in Action</h2>
                <p>Real glimpses of our indoor and outdoor recreation facilities in Khalapur.</p>
                <div className="divider" />
              </div>
              <div className={styles.photoGrid}>
                <div className={styles.photoCard}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/client-media/reduced/GameZone/2.jpg" alt="Indoor Table Tennis & Billiards" loading="lazy" />
                  <span className={styles.photoLabel}>Table Tennis &amp; Billiards</span>
                </div>
                <div className={styles.photoCard}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/client-media/reduced/GameZone/3.jpg" alt="Indoor Board Games & Carrom" loading="lazy" />
                  <span className={styles.photoLabel}>Carrom &amp; Board Games</span>
                </div>
                <div className={styles.photoCard}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/client-media/reduced/GameZone/4.jpg" alt="Gaming & Sports Arena" loading="lazy" />
                  <span className={styles.photoLabel}>Gaming Arena</span>
                </div>
                <div className={styles.photoCard}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/client-media/reduced/GameZone/WhatsApp Image 2025-12-20 at 3.22.45 PM.jpeg" alt="Lawn Sports Area" loading="lazy" />
                  <span className={styles.photoLabel}>Lawn Sports Area</span>
                </div>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '3.5rem', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/amenities" className="btn btn-gold btn-lg">
                🎯 View Full Amenities &amp; Adventure Zone
              </Link>
              <Link href="/book" className="btn btn-primary btn-lg">
                📅 Book Your Stay or Day Pass
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
