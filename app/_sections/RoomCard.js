'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './RoomsSection.module.css';

export default function RoomCard({ room }) {
  const images = room.images && room.images.length > 0 ? room.images : [room.image];
  const [currentIdx, setCurrentIdx] = useState(0);

  // Auto-slide every 2 seconds smoothly
  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [images.length]);

  const handlePrev = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIdx((prev) => (prev + 1) % images.length);
  };

  const handleDotClick = (e, idx) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIdx(idx);
  };

  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        {images.map((imgSrc, idx) => (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            key={imgSrc + idx}
            src={imgSrc}
            alt={`${room.name} - photo ${idx + 1}`}
            className={`${styles.image} ${idx === currentIdx ? styles.activeImage : styles.inactiveImage}`}
            loading="lazy"
          />
        ))}

        {room.badge && <span className={styles.badge}>{room.badge}</span>}

        {images.length > 1 && (
          <>
            <button
              type="button"
              className={`${styles.sliderBtn} ${styles.prevBtn}`}
              onClick={handlePrev}
              aria-label={`Previous image of ${room.name}`}
            >
              &#10094;
            </button>
            <button
              type="button"
              className={`${styles.sliderBtn} ${styles.nextBtn}`}
              onClick={handleNext}
              aria-label={`Next image of ${room.name}`}
            >
              &#10095;
            </button>

            <div className={styles.dotsWrap} role="tablist">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`${styles.dot} ${idx === currentIdx ? styles.activeDot : ''}`}
                  onClick={(e) => handleDotClick(e, idx)}
                  aria-label={`Image ${idx + 1} of ${images.length}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className={styles.body}>
        <h3 className={styles.name}>{room.name}</h3>

        <div className={styles.meta}>
          <span>👤 {room.adults} Adults</span>
          <span>👶 {room.children} Child</span>
          <span>📐 {room.size}</span>
        </div>

        <ul className={styles.features}>
          {room.features.map((f) => (
            <li key={f} className={styles.feature}>
              <span className={styles.check}>✓</span> {f}
            </li>
          ))}
        </ul>

        <div className={styles.footer}>
          <div className={styles.price}>
            <span className={styles.priceAmount}>₹{room.price.toLocaleString('en-IN')}</span>
            <span className={styles.priceNote}>/night</span>
          </div>
          <Link
            href={`/book?room=${room.id}`}
            className={`btn btn-primary ${styles.bookBtn}`}
          >
            Book Now
          </Link>
        </div>
      </div>
    </article>
  );
}
