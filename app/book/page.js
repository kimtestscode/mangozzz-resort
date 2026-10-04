'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';

const roomTypes = [
  { id: 'river-view-deluxe',          label: 'River View Deluxe — WD: ₹3,500 / WE: ₹4,000' },
  { id: 'mountain-view-deluxe',       label: 'Mountain View Deluxe — WD: ₹3,500 / WE: ₹4,000' },
  { id: 'river-view-supreme-double',  label: 'River View Supreme Deluxe Double Bed — WD: ₹7,000 / WE: ₹7,450' },
  { id: 'woodhouse-1',                label: 'Wood House 1 (Authentic Wood Villa) — WD: ₹5,500 / WE: ₹6,500' },
  { id: 'woodhouse-2',                label: 'Wood House 2 (Cozy Wood Cottage) — WD: ₹4,500 / WE: ₹5,000' },
  { id: 'garden-view-room',           label: 'Garden View Room — WD: ₹3,500 / WE: ₹4,000' },
  { id: 'pool-view-room',             label: 'Pool View Room — WD: ₹3,000 / WE: ₹3,500' },
  { id: 'pool-view-supreme-double',   label: 'Pool View Supreme Deluxe Double Bed — WD: ₹6,000 / WE: ₹6,500' },
  { id: 'family-room',                label: 'Family & Group Suite (*APP* / Custom)' },
  { id: 'day-picnic',                 label: 'One Day Picnic Pass — ₹1,500 / person (Meals + Pool + Games)' },
  { id: 'all-inclusive-stay',         label: 'All-Inclusive 24-Hr Stay Package — WD: ₹3,500 / WE: ₹4,000 per head' },
];

function BookingForm() {
  const searchParams = useSearchParams();
  const today    = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  const [form, setForm] = useState({
    name:     '',
    email:    '',
    phone:    '',
    checkin:  searchParams.get('checkin')  || today,
    checkout: searchParams.get('checkout') || tomorrow,
    adults:   searchParams.get('adults')   || '2',
    children: searchParams.get('children') || '0',
    rooms:    searchParams.get('rooms')    || '1',
    roomType: searchParams.get('room')     || '',
    requests: '',
  });

  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    try {
      // 1. Save booking in Supabase DB
      try {
        await fetch('/api/bookings', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        });
      } catch (dbErr) {
        console.warn('DB recording notice:', dbErr);
      }

      // 2. Send email notification via EmailJS if keys configured
      try {
        const serviceId  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_BOOKING_TEMPLATE_ID;
        const publicKey  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

        if (serviceId && templateId && publicKey) {
          const emailjs = (await import('@emailjs/browser')).default;
          await emailjs.send(serviceId, templateId, {
            from_name:    form.name,
            from_email:   form.email,
            phone:        form.phone,
            checkin:      form.checkin,
            checkout:     form.checkout,
            adults:       form.adults,
            children:     form.children,
            rooms:        form.rooms,
            room_type:    form.roomType || 'Not specified',
            requests:     form.requests || 'None',
            to_email:     'mangozzzmagicalworld@gmail.com',
          }, publicKey);
        }
      } catch (emailErr) {
        console.warn('Email notification notice:', emailErr);
      }

      // 3. Formulate WhatsApp message and redirect
      const roomLabel = roomTypes.find(r => r.id === form.roomType)?.label || form.roomType || 'Cottage / Villa';
      const waMessage = 
        `*New Booking Request — Mangozzz Magical World Resort*\n\n` +
        `👤 *Name:* ${form.name}\n` +
        `📞 *Phone:* ${form.phone}\n` +
        `✉️ *Email:* ${form.email}\n` +
        `🏡 *Room Type:* ${roomLabel}\n` +
        `📅 *Check-In:* ${form.checkin}\n` +
        `📅 *Check-Out:* ${form.checkout}\n` +
        `👥 *Guests:* ${form.adults} Adults, ${form.children} Children (${form.rooms} Room(s))\n` +
        `📝 *Special Requests:* ${form.requests || 'None'}\n\n` +
        `Please confirm availability and booking details.`;
      
      const waUrl = `https://wa.me/917977127312?text=${encodeURIComponent(waMessage)}`;
      
      // Auto open WhatsApp chat
      if (typeof window !== 'undefined') {
        window.open(waUrl, '_blank');
      }

      setStatus('success');
    } catch (err) {
      console.error('Booking submission error:', err);
      setErrorMsg('Something went wrong. Please call us at +91 79771 27312 or email us directly.');
      setStatus('error');
    }
  };

  const getWhatsAppUrl = () => {
    const roomLabel = roomTypes.find(r => r.id === form.roomType)?.label || form.roomType || 'Cottage / Villa';
    const waMessage = 
      `*New Booking Request — Mangozzz Magical World Resort*\n\n` +
      `👤 *Name:* ${form.name}\n` +
      `📞 *Phone:* ${form.phone}\n` +
      `✉️ *Email:* ${form.email}\n` +
      `🏡 *Room Type:* ${roomLabel}\n` +
      `📅 *Check-In:* ${form.checkin}\n` +
      `📅 *Check-Out:* ${form.checkout}\n` +
      `👥 *Guests:* ${form.adults} Adults, ${form.children} Children (${form.rooms} Room(s))\n` +
      `📝 *Special Requests:* ${form.requests || 'None'}\n\n` +
      `Please confirm availability and booking details.`;
    return `https://wa.me/917977127312?text=${encodeURIComponent(waMessage)}`;
  };

  if (status === 'success') {
    return (
      <div className={styles.successCard}>
        <div className={styles.successIcon}>🎉</div>
        <h2>Booking Request Sent!</h2>
        <p>
          Thank you, <strong>{form.name}</strong>! Your booking details have been sent.
          Redirecting to WhatsApp for instant confirmation.
        </p>

        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-lg"
          style={{
            background: '#25d366',
            borderColor: '#25d366',
            color: '#fff',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            margin: '1.25rem 0',
            fontWeight: 700,
            boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)'
          }}
        >
          💬 Open WhatsApp Chat Now
        </a>

        <div className={styles.bookingDetails}>
          <div><strong>Check-in:</strong> {form.checkin}</div>
          <div><strong>Check-out:</strong> {form.checkout}</div>
          <div><strong>Guests:</strong> {form.adults} Adults, {form.children} Children</div>
        </div>
        <p className={styles.callNote}>
          Need urgent help? Call us directly at{' '}
          <a href="tel:+917977127312">+91 79771 27312</a>
        </p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <h3 className={styles.formSection}>Personal Information</h3>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="book-name">Full Name *</label>
          <input
            id="book-name"
            type="text"
            name="name"
            placeholder="Your full name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="book-email">Email Address *</label>
          <input
            id="book-email"
            type="email"
            name="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="book-phone">Phone Number *</label>
          <input
            id="book-phone"
            type="tel"
            name="phone"
            placeholder="+91 XXXXX XXXXX"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="book-roomtype">Room Type</label>
          <select id="book-roomtype" name="roomType" value={form.roomType} onChange={handleChange}>
            <option value="">-- Select Room Type --</option>
            {roomTypes.map((r) => (
              <option key={r.id} value={r.id}>{r.label}</option>
            ))}
          </select>
        </div>
      </div>

      <h3 className={styles.formSection}>Stay Details</h3>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="book-checkin">Check-In Date *</label>
          <input
            id="book-checkin"
            type="date"
            name="checkin"
            min={today}
            value={form.checkin}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="book-checkout">Check-Out Date *</label>
          <input
            id="book-checkout"
            type="date"
            name="checkout"
            min={form.checkin}
            value={form.checkout}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="book-adults">Adults *</label>
          <select id="book-adults" name="adults" value={form.adults} onChange={handleChange}>
            {[1,2,3,4,5,6,7,8,9].map(n => (
              <option key={n} value={n}>{n} Adult{n > 1 ? 's' : ''}</option>
            ))}
          </select>
        </div>
        <div className={styles.field}>
          <label htmlFor="book-children">Children</label>
          <select id="book-children" name="children" value={form.children} onChange={handleChange}>
            {[0,1,2,3,4].map(n => (
              <option key={n} value={n}>{n} Child{n !== 1 ? 'ren' : ''}</option>
            ))}
          </select>
        </div>
        <div className={styles.field}>
          <label htmlFor="book-rooms">Rooms</label>
          <select id="book-rooms" name="rooms" value={form.rooms} onChange={handleChange}>
            {[1,2,3].map(n => (
              <option key={n} value={n}>{n} Room{n > 1 ? 's' : ''}</option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="book-requests">Special Requests</label>
        <textarea
          id="book-requests"
          name="requests"
          rows={4}
          placeholder="Any dietary requirements, accessibility needs, or special occasions we should know about?"
          value={form.requests}
          onChange={handleChange}
        />
      </div>

      {status === 'error' && (
        <div className={styles.errorBox} role="alert">{errorMsg}</div>
      )}

      <button
        type="submit"
        className={`btn btn-primary btn-lg ${styles.submitBtn}`}
        disabled={status === 'sending'}
      >
        {status === 'sending' ? '⏳ Sending...' : '📅 Send Booking Request'}
      </button>

      <p className={styles.note}>
        * We will confirm your booking within 24 hours. For immediate assistance, call{' '}
        <a href="tel:+917977127312">+91 79771 27312</a>
      </p>
    </form>
  );
}

export default function BookPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* Page header */}
        <section className={styles.header}>
          <div className={styles.headerBg} aria-hidden="true">
            <div className={styles.headerOverlay} />
          </div>
          <div className={`container ${styles.headerContent}`}>
            <span className={styles.eyebrow}>Reserve Your Spot</span>
            <h1>Book Your Stay</h1>
            <p>Fill in your details and we'll confirm your reservation within 24 hours.</p>
          </div>
        </section>

        {/* Booking form section */}
        <section className={`section ${styles.formSection}`}>
          <div className="container">
            <div className={styles.layout}>
              {/* Form */}
              <div className={styles.formWrap}>
                <Suspense fallback={<div className={styles.loading}>Loading form...</div>}>
                  <BookingForm />
                </Suspense>
              </div>

              {/* Sidebar */}
              <aside className={styles.sidebar}>
                <div className={styles.infoCard}>
                  <h3>📞 Contact Us Directly</h3>
                  <p>Prefer to book over the phone? We're happy to help!</p>
                  <a href="tel:+917977127312" className={`btn btn-primary ${styles.callBtn}`}>
                    Call +91 79771 27312
                  </a>
                  <a href="mailto:mangozzzmagicalworld@gmail.com" className={`btn ${styles.emailBtn}`}>
                    ✉️ Email Us
                  </a>
                </div>

                <div className={styles.infoCard}>
                  <h3>📍 Location</h3>
                  <p>Near Swaminarayan Gurukul School, Chouk, Khalapur, Maharashtra 410206</p>
                  <a
                    href="https://maps.app.goo.gl/HA4N17DKTDiQtnmT7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn ${styles.mapBtn}`}
                  >
                    🗺️ Get Directions
                  </a>
                </div>

                <div className={styles.infoCard}>
                  <h3>ℹ️ Booking &amp; Resort Info</h3>
                  <ul className={styles.infoList}>
                    <li>✓ Complimentary Breakfast (8:30 AM – 10:30 AM)</li>
                    <li>✓ Check-in: 1:00 PM</li>
                    <li>✓ Check-out: Before 11:00 AM</li>
                    <li>✓ Extra Mattress: ₹1,200</li>
                    <li>✓ Room Service Dial: 222 / 223</li>
                    <li>✓ Instant confirmation via WhatsApp</li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
