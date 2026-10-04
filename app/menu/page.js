'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { menuCategories, menuItems } from '@/data/restaurantMenu';
import styles from './page.module.css';

export default function RestaurantMenuPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietFilter, setDietFilter] = useState('all');

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesDiet =
      dietFilter === 'all' || (dietFilter === 'veg' && item.veg) || (dietFilter === 'nonveg' && !item.veg);
    const matchesSearch =
      !searchQuery ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesDiet && matchesSearch;
  });

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* Hero Header */}
        <section className={styles.hero}>
          <div className={styles.heroBg} aria-hidden="true">
            <div className={styles.heroOverlay} />
          </div>
          <div className={`container ${styles.heroContent}`}>
            <span className={styles.eyebrow}>Shivay Hospitality Presents</span>
            <h1>Alphonso Multi-Cuisine Restaurant</h1>
            <p>
              Experience authentic Maharashtrian specialties, tandoori masterworks, sizzling Chinese, coastal seafood &amp; handcrafted mocktails amidst fragrant mango orchards.
            </p>

            <div className={styles.heroActions}>
              <a
                href="/images/Mangozzz Magical Menu Card.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold btn-lg"
              >
                📥 Download Official PDF Menu Card
              </a>
              <a
                href="https://wa.me/917977127312?text=Hello%20Alphonso%20Restaurant!%20I%20would%20like%20to%20place%20a%20food%20order."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-lg"
                style={{ background: '#25d366', borderColor: '#25d366', color: '#fff' }}
              >
                💬 Order via WhatsApp (+91 79771 27312)
              </a>
            </div>
          </div>
        </section>

        {/* Quick Highlights Bar */}
        <section className={styles.highlightsBar}>
          <div className="container">
            <div className={styles.highlightsGrid}>
              <div className={styles.highlightItem}>
                <span className={styles.hlIcon}>👨‍🍳</span>
                <div>
                  <strong>Curated by Chef Ajit Shetty</strong>
                  <span>Owner of Shivay Hospitality</span>
                </div>
              </div>
              <div className={styles.highlightItem}>
                <span className={styles.hlIcon}>⏰</span>
                <div>
                  <strong>Service Hours</strong>
                  <span>8:00 AM – 12:00 Midnight (Last Order 11:00 PM)</span>
                </div>
              </div>
              <div className={styles.highlightItem}>
                <span className={styles.hlIcon}>📞</span>
                <div>
                  <strong>Room Service &amp; Inquiries</strong>
                  <span>Dial 222 / 223 · Reception: 9</span>
                </div>
              </div>
              <div className={styles.highlightItem}>
                <span className={styles.hlIcon}>🥗</span>
                <div>
                  <strong>Pure Veg &amp; Non-Veg</strong>
                  <span>Separate Jain / Halal options on request</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section className="section">
          <div className="container">
            {/* Filters */}
            <div className={styles.controlsWrap}>
              <div className={styles.searchBox}>
                <span className={styles.searchIcon}>🔍</span>
                <input
                  type="text"
                  placeholder="Search dishes (e.g., Paneer Butter Masala, Murgh Musallam, Biryani, Mojito...)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={styles.searchInput}
                />
                {searchQuery && (
                  <button className={styles.clearSearch} onClick={() => setSearchQuery('')}>✕</button>
                )}
              </div>

              <div className={styles.dietToggle}>
                <button
                  className={[styles.dietBtn, dietFilter === 'all' ? styles.dietActive : ''].join(' ')}
                  onClick={() => setDietFilter('all')}
                >
                  All ({menuItems.length})
                </button>
                <button
                  className={[styles.dietBtn, dietFilter === 'veg' ? styles.dietActiveVeg : ''].join(' ')}
                  onClick={() => setDietFilter('veg')}
                >
                  🟢 Pure Veg
                </button>
                <button
                  className={[styles.dietBtn, dietFilter === 'nonveg' ? styles.dietActiveNonVeg : ''].join(' ')}
                  onClick={() => setDietFilter('nonveg')}
                >
                  🔴 Non-Veg
                </button>
              </div>
            </div>

            {/* Category Tabs */}
            <div className={styles.categoryNav}>
              {menuCategories.map((cat) => (
                <button
                  key={cat.id}
                  className={[styles.catBtn, activeCategory === cat.id ? styles.catActive : ''].join(' ')}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Menu Grid */}
            {filteredItems.length === 0 ? (
              <div className={styles.emptyState}>
                <span>🍽️</span>
                <h3>No dishes found</h3>
                <p>Try searching another keyword or reset your filters.</p>
                <button
                  className="btn btn-primary"
                  onClick={() => { setSearchQuery(''); setDietFilter('all'); setActiveCategory('all'); }}
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className={styles.menuGrid}>
                {filteredItems.map((item, idx) => (
                  <article key={`${item.name}-${idx}`} className={styles.menuCard}>
                    <div className={styles.cardHeader}>
                      <div className={styles.cardTitleWrap}>
                        <span
                          className={item.veg ? styles.vegDotWrap : styles.nonVegDotWrap}
                          title={item.veg ? 'Vegetarian' : 'Non-Vegetarian'}
                        >
                          <span className={styles.dot} />
                        </span>
                        <h3 className={styles.dishName}>{item.name}</h3>
                      </div>
                      <span className={styles.dishPrice}>{item.price}</span>
                    </div>
                    {item.desc && <p className={styles.dishDesc}>{item.desc}</p>}
                  </article>
                ))}
              </div>
            )}

            {/* Bottom CTA Banner */}
            <div className={styles.bottomBanner}>
              <div>
                <h3>Planning a Banquet, Wedding Feast or Corporate Dinner?</h3>
                <p>Our culinary team crafts customized buffet spreads, live counters &amp; special Jain dining for any group size.</p>
              </div>
              <div className={styles.bannerActions}>
                <Link href="/weddings#inquiry-form" className="btn btn-gold btn-lg">
                  💍 Request Catering Quote
                </Link>
                <Link href="/book" className="btn btn-primary btn-lg">
                  📅 Book Resort Stay
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
