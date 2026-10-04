'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';

const tabs = ['All', 'Woodhouse', 'Pool', 'River View', 'Rooms', 'Dining', 'Resort & Drone', 'GameZone', 'Weddings & Events'];

const galleryImages = [
  // Woodhouse & Cottages
  { src: '/client-media/reduced/General Photos/Both Wood House.jpg',    alt: 'Both Wood House Cottages',            category: 'Woodhouse' },
  { src: '/client-media/reduced/General Photos/Wood house big.jpg',     alt: 'Authentic Woodhouse Villa Exterior',   category: 'Woodhouse' },
  { src: '/client-media/reduced/General Photos/Woodhouse Small.jpg',    alt: 'Woodhouse Small Cottage',              category: 'Woodhouse' },
  { src: '/client-media/reduced/Woodhouse/IMG-20250331-WA0091.jpg',     alt: 'Woodhouse Cottage Front Porch',        category: 'Woodhouse' },
  { src: '/client-media/reduced/Woodhouse/IMG-20250331-WA0092.jpg',     alt: 'Wooden Cottage Balcony & Nature View', category: 'Woodhouse' },
  { src: '/client-media/reduced/Woodhouse 1/IMG-20250331-WA0106.jpg',   alt: 'Woodhouse Interior Architecture',      category: 'Woodhouse' },
  { src: '/client-media/reduced/Woodhouse 1/IMG-20250331-WA0116.jpg',   alt: 'Woodhouse Bedroom & Wood Crafting',    category: 'Woodhouse' },

  // Pool & Pool View
  { src: '/client-media/reduced/General Photos/Pool.jpg',               alt: 'Resort Swimming Pool & Sun Deck',      category: 'Pool' },
  { src: '/client-media/reduced/General Photos/Pool View.jpg',          alt: 'Pool View Cottages',                   category: 'Pool' },
  { src: '/client-media/reduced/General Photos/Pool View 2.jpg',        alt: 'Sparkling Swimming Pool & Cottages',   category: 'Pool' },
  { src: '/client-media/reduced/Pool View/IMG_7107-1024x682.jpg',       alt: 'Poolside Lounge & Clear Blue Waters',  category: 'Pool' },
  { src: '/client-media/reduced/Pool View/IMG20230826141116.jpg',       alt: 'Daytime Poolside Atmosphere',          category: 'Pool' },
  { src: '/client-media/reduced/Pool View Double/SRH_2511.jpg',         alt: 'Pool View Double Cottage Interior',    category: 'Pool' },

  // River View & Riverfront
  { src: '/client-media/reduced/General Photos/River View.jpg',         alt: 'River View Cottage Deck',              category: 'River View' },
  { src: '/client-media/reduced/General Photos/River View 2.jpg',       alt: 'Peaceful Riverfront Atmosphere',       category: 'River View' },
  { src: '/client-media/reduced/General Photos/River View Double.jpg',  alt: 'River View Double Cottage Suite',      category: 'River View' },
  { src: '/client-media/reduced/SRH_2413.jpg',                          alt: 'Serene River Edge View',               category: 'River View' },
  { src: '/client-media/reduced/SRH_2415.jpg',                          alt: 'Riverside Walk & Nature Deck',         category: 'River View' },
  { src: '/client-media/reduced/RiverView Double/SRH_2527.jpg',         alt: 'Riverfront Cottage Bed & Decor',       category: 'River View' },

  // Rooms & Interiors
  { src: '/client-media/reduced/General Photos/Mountain View.jpg',      alt: 'Mountain View Room Interior',          category: 'Rooms' },
  { src: '/client-media/reduced/General Photos/Garden View.jpg',        alt: 'Garden View Cottage Room',             category: 'Rooms' },
  { src: '/client-media/reduced/General Photos/Family Room.jpg',        alt: 'Spacious Family & Group Room',         category: 'Rooms' },
  { src: '/client-media/reduced/Family Room/SRH_2541.jpg',              alt: 'Multi-Bed Group Suite',                category: 'Rooms' },
  { src: '/client-media/reduced/Garden View/IMG-20250331-WA0135.jpg',   alt: 'Garden Cottage Verandah',              category: 'Rooms' },
  { src: '/client-media/reduced/Mountain View Rooms/IMG-20250912-WA0031.jpg', alt: 'Mountain Outlook from Room',    category: 'Rooms' },

  // Dining (Alphonso Restaurant)
  { src: '/client-media/reduced/General Photos/Alphonso Restaurant.jpg',alt: 'Alphonso Restaurant Dining Hall',      category: 'Dining' },
  { src: '/client-media/reduced/General Photos/2.jpg',                  alt: 'Gourmet Food & Buffet Presentation',   category: 'Dining' },
  { src: '/client-media/reduced/General Photos/3.jpg',                  alt: 'Freshly Prepared Resort Dishes',       category: 'Dining' },
  { src: '/client-media/reduced/General Photos/4.jpg',                  alt: 'Family Dining Experience',             category: 'Dining' },

  // Resort & Drone
  { src: '/client-media/reduced/General Photos/Resort.jpg',             alt: 'Panoramic View of Mangozzz Resort',    category: 'Resort & Drone' },
  { src: '/client-media/reduced/General Photos/Drone.jpg',              alt: 'Aerial Drone Shot of Entire Property', category: 'Resort & Drone' },
  { src: '/client-media/reduced/General Photos/Resort View .jpg',       alt: 'Resort Walkway & Sahyadri Hills',      category: 'Resort & Drone' },
  { src: '/client-media/reduced/General Photos/Walkway.jpg',            alt: 'Lush Green Pathway Between Cottages',  category: 'Resort & Drone' },
  { src: '/client-media/reduced/General Photos/Resort night.jpg',       alt: 'Magical Resort Lighting at Night',     category: 'Resort & Drone' },

  // GameZone & Sports
  { src: '/client-media/reduced/GameZone/2.jpg',                        alt: 'Indoor GameZone & Table Tennis',       category: 'GameZone' },
  { src: '/client-media/reduced/GameZone/3.jpg',                        alt: 'Carrom & Indoor Board Games',          category: 'GameZone' },
  { src: '/client-media/reduced/GameZone/4.jpg',                        alt: 'Recreation & Gaming Arena',            category: 'GameZone' },
  { src: '/client-media/reduced/GameZone/WhatsApp Image 2025-12-20 at 3.22.45 PM.jpeg', alt: 'Lawn Sports & Open Activities', category: 'GameZone' },

  // Weddings & Events
  { src: '/client-media/reduced/Wedding/WhatsApp Image 2026-09-15 at 3.36.28 PM.jpeg',   alt: 'Destination Wedding Stage Decor', category: 'Weddings & Events' },
  { src: '/client-media/reduced/Wedding/WhatsApp Image 2026-09-15 at 3.36.28 PM (1).jpeg', alt: 'Wedding Mandap & Open Lawn',   category: 'Weddings & Events' },
  { src: '/client-media/reduced/Wedding/WhatsApp Image 2026-09-15 at 3.36.29 PM.jpeg',   alt: 'Evening Wedding Atmosphere',     category: 'Weddings & Events' },
  { src: '/client-media/reduced/Event/banner.jpg',                                      alt: 'Corporate Meets & Celebrations', category: 'Weddings & Events' },
];

export default function GalleryPage() {
  const [activeTab,   setActiveTab]   = useState('All');
  const [lightboxImg, setLightboxImg] = useState(null);

  const filtered = activeTab === 'All'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeTab);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroBg} aria-hidden="true"><div className={styles.overlay} /></div>
          <div className={`container ${styles.heroContent}`}>
            <span className={styles.eyebrow}>Our Visual Story</span>
            <h1>Gallery</h1>
            <p>A picture-perfect glimpse into the Mangozzz Magical World Resort experience.</p>
          </div>
        </section>

        {/* Gallery */}
        <section className="section">
          <div className="container">
            {/* Tabs */}
            <div className={styles.tabs} role="tablist">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  role="tab"
                  aria-selected={activeTab === tab}
                  className={[styles.tab, activeTab === tab ? styles.activeTab : ''].join(' ')}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Image Grid */}
            <div className={styles.grid}>
              {filtered.map((img, i) => (
                <div
                  key={i}
                  className={styles.imgWrap}
                  onClick={() => setLightboxImg(img)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${img.alt}`}
                  onKeyDown={(e) => e.key === 'Enter' && setLightboxImg(img)}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img.src} alt={img.alt} loading="lazy" />
                  <div className={styles.imgOverlay}>
                    <span>🔍 {img.alt}</span>
                  </div>
                </div>
              ))}
            </div>

            {filtered.length === 0 && (
              <p className={styles.empty}>No images in this category yet. Check back soon!</p>
            )}
          </div>
        </section>

        {/* Lightbox */}
        {lightboxImg && (
          <div
            className={styles.lightbox}
            onClick={() => setLightboxImg(null)}
            role="dialog"
            aria-modal="true"
            aria-label={lightboxImg.alt}
          >
            <button className={styles.closeBtn} aria-label="Close lightbox">✕</button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={lightboxImg.src}
              alt={lightboxImg.alt}
              className={styles.lightboxImg}
              onClick={(e) => e.stopPropagation()}
            />
            <p className={styles.lightboxCaption}>{lightboxImg.alt}</p>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
