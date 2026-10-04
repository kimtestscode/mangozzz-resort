'use client';

import { useState } from 'react';
import Link from 'next/link';
import RoomCard from './RoomCard';
import { officialRateChart } from '@/data/ratesData';
import styles from './RoomsSection.module.css';

// Client media authentic photos mapped to official rate chart rooms
const roomsWithPhotos = [
  {
    ...officialRateChart.rooms[0], // River View Deluxe
    images: [
      '/client-media/reduced/General Photos/River View.jpg',
      '/client-media/reduced/General Photos/River View 2.jpg',
      '/client-media/reduced/SRH_2413.jpg',
      '/client-media/reduced/SRH_2415.jpg',
    ],
  },
  {
    ...officialRateChart.rooms[1], // Mountain View Deluxe
    images: [
      '/client-media/reduced/General Photos/Mountain View.jpg',
      '/client-media/reduced/Mountain View Rooms/IMG-20250912-WA0031.jpg',
      '/client-media/reduced/Mountain View Rooms/IMG-20250912-WA0032.jpg',
      '/client-media/reduced/Mountain View Rooms/IMG-20250912-WA0038.jpg',
    ],
  },
  {
    ...officialRateChart.rooms[2], // River View Supreme Deluxe Double Bed
    images: [
      '/client-media/reduced/RiverView Double/SRH_2527.jpg',
      '/client-media/reduced/RiverView Double/SRH_2528.jpg',
      '/client-media/reduced/RiverView Double/SRH_2529.jpg',
      '/client-media/reduced/General Photos/River View Double.jpg',
    ],
  },
  {
    ...officialRateChart.rooms[3], // Wood House 1 (Authentic Wood Villa)
    images: [
      '/client-media/reduced/General Photos/Wood house big.jpg',
      '/client-media/reduced/Woodhouse/IMG-20250331-WA0091.jpg',
      '/client-media/reduced/Woodhouse/IMG-20250331-WA0092.jpg',
      '/client-media/reduced/Woodhouse 1/IMG-20250331-WA0106.jpg',
    ],
  },
  {
    ...officialRateChart.rooms[4], // Wood House 2 (Cozy Wood Cottage)
    images: [
      '/client-media/reduced/General Photos/Both Wood House.jpg',
      '/client-media/reduced/Woodhouse/IMG-20250331-WA0091.jpg',
      '/client-media/reduced/Woodhouse 1/IMG-20250331-WA0106.jpg',
    ],
  },
  {
    ...officialRateChart.rooms[5], // Garden View Room
    images: [
      '/client-media/reduced/General Photos/Garden View.jpg',
      '/client-media/reduced/General Photos/Garden View 2.jpg',
      '/client-media/reduced/Garden View/IMG-20250331-WA0135.jpg',
      '/client-media/reduced/Garden View/IMG-20250331-WA0136.jpg',
    ],
  },
  {
    ...officialRateChart.rooms[6], // Pool View Room
    images: [
      '/client-media/reduced/General Photos/Pool View.jpg',
      '/client-media/reduced/General Photos/Pool View 2.jpg',
      '/client-media/reduced/Pool View/IMG_7107-1024x682.jpg',
      '/client-media/reduced/General Photos/Pool.jpg',
    ],
  },
  {
    ...officialRateChart.rooms[7], // Pool View Supreme Deluxe Double Bed
    images: [
      '/client-media/reduced/Pool View Double/SRH_2511.jpg',
      '/client-media/reduced/Pool View Double/SRH_2513.jpg',
      '/client-media/reduced/Pool View Double/SRH_2515.jpg',
      '/client-media/reduced/General Photos/Pool View 2.jpg',
    ],
  },
  {
    ...officialRateChart.rooms[8], // Family Room (*APP*)
    images: [
      '/client-media/reduced/General Photos/Family Room.jpg',
      '/client-media/reduced/Family Room/SRH_2541.jpg',
      '/client-media/reduced/Family Room/SRH_2545.jpg',
      '/client-media/reduced/Family Room/SRH_2528.jpg',
    ],
  },
];

export default function RoomsSection() {
  const [tariffMode, setTariffMode] = useState('weekday'); // 'weekday' | 'weekend'

  return (
    <section className={`section ${styles.rooms}`} id="rooms">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="label">Official Rate Chart &amp; Tariffs</span>
          <h2>Choose Your Perfect Stay</h2>
          <p>
            Authentic wooden villas, poolside double cottages, and scenic riverside rooms with complimentary breakfast included in every booking.
          </p>
          <div className="divider" />
        </div>

        {/* Tariff Switcher */}
        <div className={styles.rateHeaderWrap}>
          <div className={styles.tariffToggleWrap}>
            <button
              type="button"
              className={[styles.tariffToggleBtn, tariffMode === 'weekday' ? styles.activeToggle : ''].join(' ')}
              onClick={() => setTariffMode('weekday')}
            >
              ☀️ Weekdays Tariff (Mon – Thu)
            </button>
            <button
              type="button"
              className={[styles.tariffToggleBtn, tariffMode === 'weekend' ? styles.activeToggle : ''].join(' ')}
              onClick={() => setTariffMode('weekend')}
            >
              🎉 Weekend Tariff (Fri – Sun)
            </button>
          </div>
        </div>

        {/* Rooms Grid */}
        <div className={styles.grid}>
          {roomsWithPhotos.map((room) => (
            <RoomCard key={room.id} room={room} tariffMode={tariffMode} />
          ))}
        </div>

        {/* Official Packages & Tariff Table Section */}
        <div className={styles.packagesSection}>
          <div className={styles.packagesHeader}>
            <span className="label">Special Resort Packages</span>
            <h3>Day Picnic &amp; 24-Hour Stay Packages</h3>
            <p>
              Enjoy wholesome multi-cuisine meals at Alphonso Restaurant, swimming pool fun, rain dance, and exciting adventure activities.
            </p>
          </div>

          {/* Package Cards Grid */}
          <div className={styles.packageCardsGrid}>
            {/* Day Picnic Pass */}
            <div className={styles.pkgCard}>
              <span className={styles.pkgBadge}>Day Visitor Special</span>
              <h4 className={styles.pkgTitle}>{officialRateChart.dayPicnic.title}</h4>
              <div className={styles.pkgPriceWrap}>
                <span className={styles.pkgPrice}>{officialRateChart.dayPicnic.price}</span>
                <span className={styles.pkgUnit}>{officialRateChart.dayPicnic.unit}</span>
              </div>
              <div className={styles.pkgMeals}>{officialRateChart.dayPicnic.includes}</div>
              <ul className={styles.pkgFeatures}>
                {officialRateChart.dayPicnic.features.map((feat) => (
                  <li key={feat}><span className={styles.check}>✓</span> {feat}</li>
                ))}
              </ul>
              <Link href="/book?room=day-picnic" className="btn btn-primary" style={{ marginTop: 'auto', width: '100%', justifyContent: 'center' }}>
                Book Day Picnic Pass
              </Link>
            </div>

            {/* Stay Package Weekday */}
            <div className={`${styles.pkgCard} ${styles.pkgCardHighlight}`}>
              <span className={styles.pkgBadge}>All-Inclusive Weekday</span>
              <h4 className={styles.pkgTitle}>24-Hour Stay Package (Weekday)</h4>
              <div className={styles.pkgPriceWrap}>
                <span className={styles.pkgPrice}>₹3,500</span>
                <span className={styles.pkgUnit}>per head / night</span>
              </div>
              <div className={styles.pkgMeals}>Includes Lunch, Hi-Tea, Dinner, &amp; Next Day Breakfast with Stay</div>
              <ul className={styles.pkgFeatures}>
                {officialRateChart.stayPackages[0].features.map((feat) => (
                  <li key={feat}><span className={styles.check}>✓</span> {feat}</li>
                ))}
              </ul>
              <Link href="/book?room=all-inclusive-weekday" className="btn btn-gold" style={{ marginTop: 'auto', width: '100%', justifyContent: 'center' }}>
                Book Weekday Package
              </Link>
            </div>

            {/* Stay Package Weekend */}
            <div className={styles.pkgCard}>
              <span className={styles.pkgBadge}>All-Inclusive Weekend</span>
              <h4 className={styles.pkgTitle}>24-Hour Stay Package (Weekend)</h4>
              <div className={styles.pkgPriceWrap}>
                <span className={styles.pkgPrice}>₹4,000</span>
                <span className={styles.pkgUnit}>per head / night</span>
              </div>
              <div className={styles.pkgMeals}>Includes Lunch, Hi-Tea, Dinner, &amp; Next Day Breakfast with Stay</div>
              <ul className={styles.pkgFeatures}>
                {officialRateChart.stayPackages[1].features.map((feat) => (
                  <li key={feat}><span className={styles.check}>✓</span> {feat}</li>
                ))}
              </ul>
              <Link href="/book?room=all-inclusive-weekend" className="btn btn-primary" style={{ marginTop: 'auto', width: '100%', justifyContent: 'center' }}>
                Book Weekend Package
              </Link>
            </div>
          </div>

          {/* Full Rate Comparison Table */}
          <div className={styles.tableWrap}>
            <table className={styles.rateTable}>
              <thead>
                <tr>
                  <th>Room / Cottage Type</th>
                  <th>Weekdays Tariff</th>
                  <th>Weekend Tariff</th>
                  <th>Meal Plan</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {officialRateChart.rooms.map((r) => (
                  <tr key={r.id}>
                    <td className={styles.roomNameCell}>{r.name}</td>
                    <td className={styles.priceCell}>
                      {typeof r.weekday === 'number' ? `₹${r.weekday.toLocaleString('en-IN')}` : r.weekday}
                    </td>
                    <td className={styles.priceCell}>
                      {typeof r.weekend === 'number' ? `₹${r.weekend.toLocaleString('en-IN')}` : r.weekend}
                    </td>
                    <td>
                      <span className={styles.includedPill}>✓ Breakfast Included</span>
                    </td>
                    <td>
                      <Link href={`/book?room=${r.slug}`} className="btn btn-primary btn-sm" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}>
                        Reserve
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Policy & Rate Chart Banner */}
          <div className={styles.policyBanner}>
            <div className={styles.policyItems}>
              <div className={styles.policyItem}>
                <strong>⏰ Check-In:</strong> {officialRateChart.timings.checkin}
              </div>
              <div className={styles.policyItem}>
                <strong>⏰ Check-Out:</strong> {officialRateChart.timings.checkout}
              </div>
              <div className={styles.policyItem}>
                <strong>🍳 Breakfast:</strong> {officialRateChart.timings.breakfast}
              </div>
              <div className={styles.policyItem}>
                <strong>🛏️ Extra Mattress:</strong> {officialRateChart.timings.extraMattress}
              </div>
            </div>

            <div className={styles.chartImageAction}>
              <a
                href="/images/Current Rates.jpeg"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ fontSize: '0.85rem' }}
              >
                🖼️ View Original Rate Card Image
              </a>
              <Link href="/book" className="btn btn-primary" style={{ fontSize: '0.85rem' }}>
                📅 Reserve Online
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
