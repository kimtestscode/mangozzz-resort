'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
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
        await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        });
      } catch (dbErr) {
        console.warn('DB recording notice:', dbErr);
      }

      // 2. Send email notification if EmailJS configured
      try {
        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

        if (serviceId && templateId && publicKey) {
          const emailjs = (await import('@emailjs/browser')).default;
          await emailjs.send(
            serviceId,
            templateId,
            { from_name: form.name, from_email: form.email, phone: form.phone, message: form.message },
            publicKey,
          );
        }
      } catch (emailErr) {
        console.warn('Email notification notice:', emailErr);
      }

      setStatus('success');
    } catch (err) {
      setErrorMsg('Failed to send. Please email us directly at mangozzzmagicalworld@gmail.com');
      setStatus('error');
    }
  };

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroBg} aria-hidden="true"><div className={styles.heroOverlay} /></div>
          <div className={`container ${styles.heroContent}`}>
            <span className={styles.eyebrow}>We'd Love to Hear From You</span>
            <h1>Contact Us</h1>
            <p>Reach out to us for bookings, queries, or just to say hello!</p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section">
          <div className="container">
            <div className={styles.layout}>
              {/* Info */}
              <div className={styles.info}>
                <h2>Get In Touch</h2>
                <p className={styles.subtext}>
                  We're here to help make your stay at Mangozzz Magical World Resort unforgettable.
                  Contact us through any of the following channels.
                </p>

                <ul className={styles.contactItems}>
                  <li className={styles.contactItem}>
                    <span className={styles.contactIcon}>📍</span>
                    <div>
                      <strong>Address</strong>
                      <p>Near Swaminarayan Gurukul School, Chouk,<br />Khalapur, Maharashtra 410206</p>
                      <a
                        href="https://maps.app.goo.gl/HA4N17DKTDiQtnmT7"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', marginTop: '0.4rem', color: 'var(--gold)', fontWeight: '600', fontSize: '0.88rem', textDecoration: 'underline' }}
                      >
                        🗺️ Get Directions / View on Google Maps →
                      </a>
                    </div>
                  </li>
                  <li className={styles.contactItem}>
                    <span className={styles.contactIcon}>📞</span>
                    <div>
                      <strong>Phone</strong>
                      <p><a href="tel:+917977127312">+91 79771 27312</a></p>
                    </div>
                  </li>
                  <li className={styles.contactItem}>
                    <span className={styles.contactIcon}>✉️</span>
                    <div>
                      <strong>Email</strong>
                      <p><a href="mailto:mangozzzmagicalworld@gmail.com">mangozzzmagicalworld@gmail.com</a></p>
                    </div>
                  </li>
                  <li className={styles.contactItem}>
                    <span className={styles.contactIcon}>🕐</span>
                    <div>
                      <strong>Hours</strong>
                      <p>Open 24 hours · 7 days a week</p>
                    </div>
                  </li>
                </ul>

                <div className={styles.socials}>
                  <a href="https://www.instagram.com/mangozzz_magical_world/" target="_blank" rel="noopener noreferrer" className={styles.social}>
                    📷 @mangozzz_magical_world
                  </a>
                  <a href="https://www.youtube.com/@mangozzzmagicalworld" target="_blank" rel="noopener noreferrer" className={styles.social}>
                    ▶️ YouTube Channel
                  </a>
                </div>
              </div>

              {/* Form */}
              <div className={styles.formWrap}>
                {status === 'success' ? (
                  <div className={styles.successCard}>
                    <span className={styles.successIcon}>✅</span>
                    <h3>Message Sent!</h3>
                    <p>Thank you, <strong>{form.name}</strong>! We'll get back to you shortly.</p>
                  </div>
                ) : (
                  <form className={styles.form} onSubmit={handleSubmit}>
                    <h3 className={styles.formTitle}>Send Us a Message</h3>

                    <div className={styles.row}>
                      <div className={styles.field}>
                        <label htmlFor="c-name">Full Name *</label>
                        <input id="c-name" type="text" name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
                      </div>
                      <div className={styles.field}>
                        <label htmlFor="c-email">Email *</label>
                        <input id="c-email" type="email" name="email" placeholder="you@example.com" value={form.email} onChange={handleChange} required />
                      </div>
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="c-phone">Phone</label>
                      <input id="c-phone" type="tel" name="phone" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={handleChange} />
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="c-message">Message *</label>
                      <textarea id="c-message" name="message" rows={5} placeholder="How can we help you?" value={form.message} onChange={handleChange} required />
                    </div>

                    {status === 'error' && <div className={styles.errorBox}>{errorMsg}</div>}

                    <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }} disabled={status === 'sending'}>
                      {status === 'sending' ? '⏳ Sending...' : '✉️ Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Map — exact location in Khalapur */}
        <section className={styles.mapSection} style={{ position: 'relative' }}>
          <iframe
            title="Mangozzz Magical World Exact Location"
            src="https://maps.google.com/maps?q=Mangozzz+Magical+World,+Chouk,+Khalapur,+Maharashtra+410206&t=&z=14&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="450"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div style={{ position: 'absolute', bottom: '1.5rem', right: '1.5rem', zIndex: 10 }}>
            <a
              href="https://maps.app.goo.gl/HA4N17DKTDiQtnmT7"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.4)', backdropFilter: 'blur(10px)' }}
            >
              📍 Open Exact Location in Google Maps
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
