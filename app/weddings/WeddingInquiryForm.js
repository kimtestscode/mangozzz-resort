'use client';

import { useState } from 'react';
import styles from './page.module.css';

const eventTypes = [
  'Grand Destination Wedding (2-3 Days)',
  'Wedding Reception & Ceremony',
  'Sangeet / Mehendi Night',
  'Poolside Haldi Celebration',
  'Ring Ceremony / Engagement',
  'Intimate Garden Wedding (50-150 Pax)',
  'Corporate Offsite & Annual Gala',
  'Birthday / Anniversary Celebration',
];

const venueOptions = [
  'Grand Open Lawn (800 - 1000 Pax)',
  'AC Banquet Hall (300 - 400 Pax)',
  'Poolside Deck & Haldi Zone (100 - 250 Pax)',
  'Budget-Friendly Open Garden (50 - 150 Pax)',
  'Full Resort Buyout (All Venues + Rooms)',
];

export default function WeddingInquiryForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: eventTypes[0],
    venue: venueOptions[0],
    guestCount: '300-500',
    eventDate: '',
    message: '',
  });

  const [status, setStatus] = useState('idle');
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
      // 1. Save in Supabase DB
      try {
        await fetch('/api/wedding-inquiries', {
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
            from_name: form.name,
            from_email: form.email,
            phone: form.phone,
            room_type: `Wedding / Event: ${form.eventType} (${form.venue})`,
            checkin: form.eventDate || 'TBD',
            checkout: 'N/A',
            adults: form.guestCount,
            requests: `Event: ${form.eventType} | Venue: ${form.venue} | Pax: ${form.guestCount} | Notes: ${form.message}`,
            to_email: 'mangozzzmagicalworld@gmail.com',
          }, publicKey);
        }
      } catch (emailErr) {
        console.warn('Email notification notice:', emailErr);
      }

      // 3. Formulate WhatsApp message and auto-open
      const waText = 
        `*New Wedding & Event Inquiry — Mangozzz Magical World Resort*\n\n` +
        `👤 *Name:* ${form.name}\n` +
        `📞 *Phone:* ${form.phone}\n` +
        `✉️ *Email:* ${form.email}\n` +
        `💍 *Event Type:* ${form.eventType}\n` +
        `🏛️ *Preferred Setup:* ${form.venue}\n` +
        `👥 *Guests (Pax):* ${form.guestCount}\n` +
        `📅 *Tentative Date:* ${form.eventDate || 'Flexible'}\n` +
        `📝 *Special Requirements:* ${form.message || 'None'}\n\n` +
        `Please share venue availability and customized wedding packages.`;
      
      const waUrl = `https://wa.me/917977127312?text=${encodeURIComponent(waText)}`;
      
      if (typeof window !== 'undefined') {
        window.open(waUrl, '_blank');
      }

      setStatus('success');
    } catch (err) {
      console.error('Inquiry error:', err);
      setStatus('success');
    }
  };

  const getWhatsAppUrl = () => {
    const waText = 
      `*New Wedding & Event Inquiry — Mangozzz Magical World Resort*\n\n` +
      `👤 *Name:* ${form.name || 'Guest'}\n` +
      `📞 *Phone:* ${form.phone || 'N/A'}\n` +
      `✉️ *Email:* ${form.email || 'N/A'}\n` +
      `💍 *Event Type:* ${form.eventType}\n` +
      `🏛️ *Preferred Setup:* ${form.venue}\n` +
      `👥 *Guests (Pax):* ${form.guestCount}\n` +
      `📅 *Tentative Date:* ${form.eventDate || 'Flexible'}\n` +
      `📝 *Special Requirements:* ${form.message || 'None'}\n\n` +
      `Please share venue availability and customized wedding packages.`;
    return `https://wa.me/917977127312?text=${encodeURIComponent(waText)}`;
  };

  return (
    <div className={styles.formCard} id="inquiry-form">
      <h3>Request Venue Quote &amp; Date Availability</h3>

      {status === 'success' ? (
        <div>
          <div className={styles.successNotice}>
            🎉 Thank you! Your wedding inquiry has been recorded. Redirecting you to WhatsApp for instant quote &amp; date confirmation!
          </div>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn ${styles.whatsappBtn}`}
            style={{ display: 'block', textAlign: 'center', marginTop: '1rem' }}
          >
            💬 Open WhatsApp Chat Now
          </a>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className={styles.formRow}>
            <div className={styles.field}>
              <label htmlFor="wed-name">Full Name *</label>
              <input
                id="wed-name"
                type="text"
                name="name"
                placeholder="Bride / Groom / Organizer Name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="wed-phone">Phone / WhatsApp *</label>
              <input
                id="wed-phone"
                type="tel"
                name="phone"
                placeholder="+91 XXXXX XXXXX"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.field}>
              <label htmlFor="wed-email">Email Address *</label>
              <input
                id="wed-email"
                type="email"
                name="email"
                placeholder="yourname@gmail.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="wed-date">Tentative Event Date *</label>
              <input
                id="wed-date"
                type="date"
                name="eventDate"
                value={form.eventDate}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.field}>
              <label htmlFor="wed-eventtype">Event Type *</label>
              <select
                id="wed-eventtype"
                name="eventType"
                value={form.eventType}
                onChange={handleChange}
              >
                {eventTypes.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
            <div className={styles.field}>
              <label htmlFor="wed-venue">Preferred Setup *</label>
              <select
                id="wed-venue"
                name="venue"
                value={form.venue}
                onChange={handleChange}
              >
                {venueOptions.map((v) => (
                  <option key={v} value={v}>{v}</option>
                ))}
              </select>
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="wed-guests">Estimated Guest Count (Pax) *</label>
            <select
              id="wed-guests"
              name="guestCount"
              value={form.guestCount}
              onChange={handleChange}
            >
              <option value="50 - 150 Pax (Intimate / Garden)">50 – 150 Pax (Intimate / Garden)</option>
              <option value="150 - 300 Pax (Banquet / Poolside)">150 – 300 Pax (Banquet / Poolside)</option>
              <option value="300 - 500 Pax (Banquet / Lawn)">300 – 500 Pax (Banquet / Lawn)</option>
              <option value="500 - 800 Pax (Grand Lawn)">500 – 800 Pax (Grand Lawn)</option>
              <option value="800 - 1000 Pax (Full Lawn Setup)">800 – 1,000 Pax (Full Lawn Setup)</option>
              <option value="1000+ Pax (Mega Event)">1,000+ Pax (Mega Event)</option>
            </select>
          </div>

          <div className={styles.field}>
            <label htmlFor="wed-message">Additional Requirements / Dietary Preferences</label>
            <textarea
              id="wed-message"
              name="message"
              rows={3}
              placeholder="e.g. Maharashtrian / Jain food requirement, number of rooms needed for stay, specific decor theme..."
              value={form.message}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className={`btn btn-primary ${styles.submitBtn}`}
            disabled={status === 'sending'}
          >
            {status === 'sending' ? '⏳ Submitting...' : '✨ Get Wedding Package & Quotation'}
          </button>
        </form>
      )}
    </div>
  );
}
