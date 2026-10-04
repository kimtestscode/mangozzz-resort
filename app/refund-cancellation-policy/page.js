import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import styles from '../policy.module.css';

export const metadata = {
  title: 'Refund & Cancellation Policy',
  description: 'Mangozzz Magical World Resort refund and cancellation policy for room bookings.',
};

export default function RefundPolicyPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className="container">
            <h1>Refund & Cancellation Policy</h1>
            <p>Last updated: September 2024</p>
          </div>
        </div>

        <section className="section">
          <div className="container">
            <div className={styles.content}>
              <h2>Cancellation Policy</h2>
              <p>We understand that plans can change. Please review our cancellation terms below before making a booking:</p>

              <h3>Full Refund</h3>
              <p>Cancellations made <strong>7 or more days</strong> before the check-in date are eligible for a <strong>full refund</strong> of the booking amount.</p>

              <h3>50% Refund</h3>
              <p>Cancellations made <strong>3 to 6 days</strong> before the check-in date are eligible for a <strong>50% refund</strong> of the booking amount.</p>

              <h3>No Refund</h3>
              <p>Cancellations made <strong>less than 3 days</strong> before the check-in date or <strong>no-shows</strong> are not eligible for any refund.</p>

              <h2>How to Cancel</h2>
              <p>To cancel a booking, please contact us at:</p>
              <ul>
                <li>📞 Phone: <a href="tel:+917977127312">+91 79771 27312</a></li>
                <li>✉️ Email: <a href="mailto:mangozzzmagicalworld@gmail.com">mangozzzmagicalworld@gmail.com</a></li>
              </ul>
              <p>Please have your booking confirmation number ready when you contact us.</p>

              <h2>Refund Processing</h2>
              <p>Approved refunds will be processed within <strong>7–10 business days</strong> and returned to the original payment method used at the time of booking.</p>

              <h2>Force Majeure</h2>
              <p>In cases of natural disasters, government-mandated closures, or other extraordinary circumstances beyond our control, we will issue full refunds or allow free rescheduling.</p>

              <h2>Contact Us</h2>
              <p>If you have any questions about our refund policy, please don't hesitate to reach out. We are always happy to help make your experience with Mangozzz Magical World Resort a pleasant one.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
