'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './BookingWidget.module.css';

export default function BookingWidget() {
  const router = useRouter();
  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  const [form, setForm] = useState({
    checkin:  today,
    checkout: tomorrow,
    adults:   2,
    children: 0,
    rooms:    1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams(form).toString();
    router.push(`/book?${params}`);
  };

  return (
    <section className={styles.wrapper} aria-label="Quick booking">
      <div className="container">
        <form className={styles.widget} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label htmlFor="bw-checkin">Check-In</label>
            <input
              id="bw-checkin"
              type="date"
              name="checkin"
              min={today}
              value={form.checkin}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.divider} aria-hidden="true" />

          <div className={styles.field}>
            <label htmlFor="bw-checkout">Check-Out</label>
            <input
              id="bw-checkout"
              type="date"
              name="checkout"
              min={form.checkin}
              value={form.checkout}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.divider} aria-hidden="true" />

          <div className={styles.field}>
            <label htmlFor="bw-adults">Adults</label>
            <select id="bw-adults" name="adults" value={form.adults} onChange={handleChange}>
              {[1,2,3,4,5,6,7,8,9].map(n => (
                <option key={n} value={n}>{n} Adult{n > 1 ? 's' : ''}</option>
              ))}
            </select>
          </div>

          <div className={styles.divider} aria-hidden="true" />

          <div className={styles.field}>
            <label htmlFor="bw-children">Children</label>
            <select id="bw-children" name="children" value={form.children} onChange={handleChange}>
              {[0,1,2,3,4].map(n => (
                <option key={n} value={n}>{n} Child{n !== 1 ? 'ren' : ''}</option>
              ))}
            </select>
          </div>

          <div className={styles.divider} aria-hidden="true" />

          <div className={styles.field}>
            <label htmlFor="bw-rooms">Rooms</label>
            <select id="bw-rooms" name="rooms" value={form.rooms} onChange={handleChange}>
              {[1,2,3].map(n => (
                <option key={n} value={n}>{n} Room{n > 1 ? 's' : ''}</option>
              ))}
            </select>
          </div>

          <button type="submit" className={styles.btn}>
            Check Availability
          </button>
        </form>
      </div>
    </section>
  );
}
