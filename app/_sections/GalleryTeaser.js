import Link from 'next/link';
import styles from './GalleryTeaser.module.css';

const images = [
  { src: '/client-media/reduced/General Photos/New Drone View 1.png',    alt: 'Aerial Top-View Drone Shot of Mangozzz Resort' },
  { src: '/client-media/reduced/General Photos/Pool.jpg',                alt: 'Resort Swimming Pool & Deck' },
  { src: '/client-media/reduced/General Photos/Both Wood House.jpg',     alt: 'Authentic Woodhouse Riverside Cottages' },
  { src: '/client-media/reduced/General Photos/Alphonso Restaurant.jpg', alt: 'Alphonso Restaurant & Dining' },
  { src: '/client-media/reduced/Wedding/WhatsApp Image 2026-09-15 at 3.36.28 PM.jpeg', alt: 'Riverside Destination Wedding Setup' },
  { src: '/client-media/reduced/General Photos/Resort.jpg',              alt: 'Resort Grounds & Sahyadri Hills' },
];

export default function GalleryTeaser() {
  return (
    <section className={`section ${styles.section}`} id="gallery-preview">
      <div className="container">
        <div className="section-header">
          <span className="label">Photo Gallery</span>
          <h2>A Glimpse of Magic</h2>
          <p>Every corner of Mangozzz Magical World Resort is a photo worth taking.</p>
          <div className="divider" />
        </div>

        <div className={styles.mosaicGrid}>
          {images.map((img, i) => (
            <div key={i} className={`${styles.mosaic} ${styles[`m${i}`]}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className={styles.hoverOverlay}>
                <span>🔍</span>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <Link href="/gallery" className="btn btn-primary btn-lg">
            📷 View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
