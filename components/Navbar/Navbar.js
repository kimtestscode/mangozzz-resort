'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const navLinks = [
  { href: '/',           label: 'Home' },
  { href: '/amenities',  label: 'Amenities & Activities' },
  { href: '/menu',       label: 'Restaurant Menu' },
  { href: '/weddings',   label: 'Weddings & Events' },
  { href: '/about-us',   label: 'About Us' },
  { href: '/gallery',    label: 'Gallery' },
  { href: '/contact',    label: 'Contact' },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const isHome = pathname === '/';

  return (
    <header
      className={[
        styles.header,
        scrolled   ? styles.scrolled : '',
        !isHome    ? styles.solid    : '',
      ].join(' ')}
    >
      <div className={styles.inner}>
        {/* Logo */}
        <Link href="/" className={styles.logo} aria-label="Mangozzz Magical World Resort Home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo-official.png"
            alt="Mangozzz Magical World Resort Logo"
            className={styles.logoImg}
            width={48}
            height={48}
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <span className={styles.logoText}>
            <span className={styles.logoMain}>Mangozzz</span>
            <span className={styles.logoSub}>Magical World Resort</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className={styles.nav} aria-label="Main navigation">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={[styles.link, pathname === href ? styles.active : ''].join(' ')}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link href="/book" className={styles.cta}>
          Book Now
        </Link>

        {/* Hamburger */}
        <button
          className={[styles.hamburger, menuOpen ? styles.open : ''].join(' ')}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={[styles.drawer, menuOpen ? styles.drawerOpen : ''].join(' ')} aria-hidden={!menuOpen}>
        <nav>
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={[styles.drawerLink, pathname === href ? styles.active : ''].join(' ')}
            >
              {label}
            </Link>
          ))}
          <Link href="/book" className={styles.drawerCta}>
            📅 Book Now
          </Link>
        </nav>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className={styles.overlay}
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
