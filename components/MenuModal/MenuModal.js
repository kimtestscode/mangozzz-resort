'use client';

import { useState, useEffect } from 'react';
import { menuCategories, menuItems } from '@/data/restaurantMenu';
import styles from './MenuModal.module.css';

export default function MenuModal({ isOpen, onClose }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietFilter, setDietFilter] = useState('all'); // all | veg | nonveg

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

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
    <div className={styles.backdrop} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <span className={styles.tag}>🥭 Mangozzz Magical World Resort</span>
            <h2 className={styles.title}>Alphonso Multi-Cuisine Restaurant Menu</h2>
            <p className={styles.subtitle}>
              Freshly prepared with love by Chef Ajit Shetty (Shivay Hospitality) · Pure Veg &amp; Non-Veg Delicacies
            </p>
          </div>
          <div className={styles.headerActions}>
            <a
              href="/images/Mangozzz Magical Menu Card.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.pdfBtn}
              title="Download Official PDF Menu"
            >
              📥 Official PDF Menu
            </a>
            <button className={styles.closeBtn} onClick={onClose} aria-label="Close menu">
              ✕
            </button>
          </div>
        </header>

        {/* Notice Banner */}
        <div className={styles.noticeBar}>
          <span>⏰ Service Hours: <strong>8:00 AM – 12:00 Midnight</strong> (Last Order at 11:00 PM)</span>
          <span>📞 Room Service Dial: <strong>222 / 223</strong> · Reception: <strong>9</strong></span>
          <span>💬 Order on WhatsApp: <a href="https://wa.me/917977127312?text=Hello!%20I%20would%20like%20to%20order%20from%20Alphonso%20Restaurant%20Menu." target="_blank" rel="noopener noreferrer"><strong>+91 79771 27312</strong></a></span>
        </div>

        {/* Filters & Search */}
        <div className={styles.controls}>
          <div className={styles.searchBox}>
            <span className={styles.searchIcon}>🔍</span>
            <input
              type="text"
              placeholder="Search dishes (e.g. Paneer Tikka, Butter Chicken, Biryani...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
            {searchQuery && (
              <button className={styles.clearSearch} onClick={() => setSearchQuery('')}>
                ✕
              </button>
            )}
          </div>

          <div className={styles.dietToggle}>
            <button
              className={[styles.dietBtn, dietFilter === 'all' ? styles.dietActive : ''].join(' ')}
              onClick={() => setDietFilter('all')}
            >
              All Items ({menuItems.length})
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

        {/* Category Pill Tabs */}
        <nav className={styles.categories} aria-label="Menu categories">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              className={[styles.catBtn, activeCategory === cat.id ? styles.catActive : ''].join(' ')}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </nav>

        {/* Menu Items Grid */}
        <div className={styles.menuBody}>
          {filteredItems.length === 0 ? (
            <div className={styles.emptyState}>
              <span>🍽️</span>
              <h3>No dishes match your search</h3>
              <p>Try searching for a different keyword or clearing your filters.</p>
              <button className="btn btn-primary" onClick={() => { setSearchQuery(''); setDietFilter('all'); setActiveCategory('all'); }}>
                Reset Filters
              </button>
            </div>
          ) : (
            <div className={styles.itemsGrid}>
              {filteredItems.map((item, index) => (
                <article key={`${item.name}-${index}`} className={styles.itemCard}>
                  <div className={styles.itemTop}>
                    <div className={styles.itemTitleWrap}>
                      <span
                        className={item.veg ? styles.vegBadge : styles.nonVegBadge}
                        title={item.veg ? 'Vegetarian' : 'Non-Vegetarian'}
                      >
                        <span className={styles.dot} />
                      </span>
                      <h4 className={styles.itemName}>{item.name}</h4>
                    </div>
                    <span className={styles.itemPrice}>{item.price}</span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <footer className={styles.footer}>
          <div className={styles.footerInfo}>
            <span>* Gov. Taxes as applicable · Please allow 25–30 mins for preparation.</span>
          </div>
          <div className={styles.footerBtns}>
            <a
              href="https://wa.me/917977127312?text=Hello%20Alphonso%20Restaurant!%20I%20would%20like%20to%20place%20a%20food%20order."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappOrderBtn}
            >
              💬 Order on WhatsApp
            </a>
            <button className="btn btn-outline" onClick={onClose}>
              Close
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
