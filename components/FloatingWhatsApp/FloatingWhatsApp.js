'use client';

import styles from './FloatingWhatsApp.module.css';

export default function FloatingWhatsApp() {
  const defaultMessage = encodeURIComponent(
    'Hello Mangozzz Magical World Resort! I would like to inquire about room booking and resort packages.'
  );

  return (
    <a
      href={`https://wa.me/917977127312?text=${defaultMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.floatBtn}
      aria-label="Chat with Mangozzz Resort on WhatsApp"
      title="Quick WhatsApp Booking & Inquiry"
    >
      <div className={styles.iconWrapper}>
        <svg
          viewBox="0 0 24 24"
          width="32"
          height="32"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.301-.15-1.78-.879-2.056-.98-.276-.1-.477-.15-.678.15-.2.301-.778.98-.954 1.18-.175.201-.351.226-.652.075s-1.272-.469-2.424-1.496c-.896-.799-1.501-1.786-1.677-2.087-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.2-.301.3-.501.1-.201.05-.376-.025-.526-.075-.15-.678-1.634-.928-2.238-.244-.588-.493-.508-.678-.517-.175-.009-.376-.011-.577-.011s-.527.075-.803.376c-.276.301-1.054 1.03-1.054 2.511 0 1.482 1.079 2.912 1.23 3.113.15.201 2.124 3.243 5.145 4.548.719.311 1.28.497 1.718.636.722.23 1.378.197 1.898.12.579-.086 1.78-.727 2.031-1.429.251-.702.251-1.304.176-1.429-.076-.126-.277-.201-.578-.351z" />
          <path d="M12.004 0C5.385 0 0 5.385 0 12.004c0 2.113.553 4.175 1.603 5.996L.065 23.635a.625.625 0 0 0 .762.763l5.772-1.517A11.96 11.96 0 0 0 12.004 24c6.619 0 12.004-5.385 12.004-12.004C24.008 5.385 18.623 0 12.004 0zm0 21.996c-1.895 0-3.738-.522-5.334-1.509l-.382-.235-3.844 1.01 1.026-3.746-.255-.407A9.957 9.957 0 0 1 2.008 12.004C2.008 6.488 6.488 2.008 12.004 2.008c5.516 0 9.996 4.48 9.996 9.996 0 5.516-4.48 9.992-9.996 9.992z" />
        </svg>
      </div>
      <span className={styles.label}>Chat on WhatsApp</span>
    </a>
  );
}
