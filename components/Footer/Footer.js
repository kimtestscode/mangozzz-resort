'use client';

import Link from 'next/link';
import styles from './Footer.module.css';

const quickLinks = [
  { href: '/',           label: 'Home' },
  { href: '/menu',       label: 'Restaurant Menu' },
  { href: '/about-us',   label: 'About Us' },
  { href: '/weddings',   label: 'Weddings & Events' },
  { href: '/amenities',  label: 'Amenities' },
  { href: '/adventures', label: 'Adventures' },
  { href: '/games',      label: 'Games' },
  { href: '/gallery',    label: 'Gallery' },
  { href: '/contact',    label: 'Contact Us' },
  { href: '/book',       label: 'Book Now' },
];

const policies = [
  { href: '/refund-cancellation-policy', label: 'Refund & Cancellation Policy' },
  { href: '/terms-conditions',           label: 'Terms & Conditions' },
  { href: '/privacy-policy',             label: 'Privacy Policy' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className="container">
          <div className={styles.grid}>
            {/* Brand */}
            <div className={styles.brand}>
              <Link href="/" className={styles.logo}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/logo-official.png"
                  alt="Mangozzz Magical World Resort Logo"
                  className={styles.logoImg}
                  width={48}
                  height={48}
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <span>
                  <span className={styles.logoMain}>Mangozzz</span>
                  <span className={styles.logoSub}>Magical World Resort</span>
                </span>
              </Link>
              <p className={styles.tagline}>
                A nature retreat where memories are made. Nestled along the riverside in
                Khalapur, Maharashtra.
              </p>
              <div className={styles.socials}>
                <a
                  href="https://www.instagram.com/mangozzz_magical_world/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className={styles.social}
                >
                  📷 Instagram
                </a>
                <a
                  href="https://www.youtube.com/@mangozzzmagicalworld"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className={styles.social}
                >
                  ▶️ YouTube
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className={styles.colTitle}>Quick Links</h3>
              <ul className={styles.links}>
                {quickLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} className={styles.link}>{label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Policies */}
            <div>
              <h3 className={styles.colTitle}>Policies</h3>
              <ul className={styles.links}>
                {policies.map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} className={styles.link}>{label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className={styles.colTitle}>Contact Us</h3>
              <ul className={styles.contactList}>
                <li>
                  <span className={styles.contactIcon}>📍</span>
                  <a
                    href="https://maps.app.goo.gl/HA4N17DKTDiQtnmT7"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'inherit', textDecoration: 'none' }}
                  >
                    Near Swaminarayan Gurukul School,<br />
                    Chouk, Khalapur,<br />
                    Maharashtra 410206<br />
                    <span style={{ color: 'var(--gold-light)', fontSize: '0.75rem', fontWeight: '600', display: 'inline-block', marginTop: '0.2rem' }}>
                      🗺️ Open in Google Maps ↗
                    </span>
                  </a>
                </li>
                <li>
                  <span className={styles.contactIcon}>📞</span>
                  <a href="tel:+917977127312">+91 79771 27312</a>
                </li>
                <li>
                  <span className={styles.contactIcon}>✉️</span>
                  <a href="mailto:mangozzzmagicalworld@gmail.com">
                    mangozzzmagicalworld@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <p>© {new Date().getFullYear()} Mangozzz Magical World Resort. All rights reserved.</p>
          <p>
            Website designed &amp; built by{' '}
            <a
              href="https://grabodo.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.credit}
            >
              Grabodo
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
