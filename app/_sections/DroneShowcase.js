import Link from 'next/link';
import styles from './DroneShowcase.module.css';

export default function DroneShowcase() {
  return (
    <section className={`section ${styles.section}`} id="resort-layout">
      <div className="container">
        <div className="section-header">
          <span className="label">Bird&apos;s-Eye Perspective</span>
          <h2>Aerial Top-View of Mangozzz Resort</h2>
          <p>
            Take in the grand scale of our riverfront paradise nestled along the Patalganga river in Karjat / Khalapur.
          </p>
          <div className="divider" />
        </div>

        <div className={styles.grid}>
          {/* Top-View Drone Image */}
          <div className={styles.imgContainer}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/client-media/reduced/General Photos/New Drone View 1.png"
              alt="Aerial Top-View Drone Shot of Mangozzz Magical World Resort Karjat"
              className={styles.droneImg}
              loading="lazy"
            />
            <div className={styles.droneBadge}>
              <span>🚁</span> Aerial Top View Drone Shot
            </div>
            <div className={styles.captionOverlay}>
              <h3 className={styles.captionTitle}>15+ Acres of Riverside Harmony</h3>
              <p className={styles.captionSub}>Patalganga River • Mango Groves • Grand Lawns • Swimming Pool</p>
            </div>
          </div>

          {/* Content & Layout Callouts */}
          <div className={styles.content}>
            <h3 className={styles.title}>
              A Closer Look at Our <span>Riverside Layout</span>
            </h3>
            <p className={styles.desc}>
              Captured from directly above, our property layout reveals how every feature is harmoniously planned — from secluded wooden cottages surrounded by mature mango trees to expansive lawns bordering the river.
            </p>

            <div className={styles.pointsList}>
              <div className={styles.pointItem}>
                <span className={styles.pointIcon}>🌊</span>
                <div className={styles.pointText}>
                  <h4>Patalganga Riverfront Deck</h4>
                  <p>Tranquil water views, nature walking trails, and fresh Sahyadri breezes along the property perimeter.</p>
                </div>
              </div>

              <div className={styles.pointItem}>
                <span className={styles.pointIcon}>💍</span>
                <div className={styles.pointText}>
                  <h4>800–1,000 Pax Grand Wedding Lawn</h4>
                  <p>Vast manicured open-air lawn for royal destination wedding mandaps, starlit sangeets, and receptions.</p>
                </div>
              </div>

              <div className={styles.pointItem}>
                <span className={styles.pointIcon}>🏊</span>
                <div className={styles.pointText}>
                  <h4>Central Pool &amp; Rain Dance Hub</h4>
                  <p>Large crystal-blue outdoor swimming pool, sun lounger decks, and musical rain dance arena.</p>
                </div>
              </div>

              <div className={styles.pointItem}>
                <span className={styles.pointIcon}>🏡</span>
                <div className={styles.pointText}>
                  <h4>Woodhouse Villas &amp; Deluxe Cottages</h4>
                  <p>Authentic handcrafted teak wood villas &amp; air-conditioned cottages accommodating 150+ guests overnight.</p>
                </div>
              </div>

              <div className={styles.pointItem}>
                <span className={styles.pointIcon}>🎯</span>
                <div className={styles.pointText}>
                  <h4>Adventure &amp; Recreation Zones</h4>
                  <p>360° extreme cycling, high canopy zipline, target shooting, archery, and indoor GameZone.</p>
                </div>
              </div>
            </div>

            <div className={styles.actions}>
              <Link href="/gallery" className="btn btn-primary btn-lg">
                📷 Explore Full Gallery
              </Link>
              <Link href="/weddings" className="btn btn-gold btn-lg">
                💍 View Wedding Lawns &amp; Banquet
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
