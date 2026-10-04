import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import styles from '../policy.module.css';

export const metadata = {
  title: 'Privacy Policy',
  description: 'Mangozzz Magical World Resort privacy policy and data protection practices.',
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className="container">
            <h1>Privacy Policy</h1>
            <p>Last updated: September 2024</p>
          </div>
        </div>

        <section className="section">
          <div className="container">
            <div className={styles.content}>
              <h2>1. Information We Collect</h2>
              <p>We collect information you provide when making a booking or contacting us, including your name, email address, phone number, and stay details.</p>

              <h2>2. How We Use Your Information</h2>
              <ul>
                <li>To process and confirm your booking</li>
                <li>To communicate with you about your stay</li>
                <li>To send you important updates about our services</li>
                <li>To improve our website and services</li>
              </ul>

              <h2>3. Data Sharing</h2>
              <p>We do not sell, trade, or share your personal information with third parties except as required by law or to provide services directly related to your booking (e.g., payment processors).</p>

              <h2>4. Data Security</h2>
              <p>We implement appropriate security measures to protect your personal information from unauthorised access, alteration, or disclosure.</p>

              <h2>5. Cookies</h2>
              <p>Our website may use cookies to enhance your browsing experience. You can disable cookies in your browser settings, though this may affect website functionality.</p>

              <h2>6. Your Rights</h2>
              <p>You have the right to access, correct, or delete your personal data. To make a request, please contact us at <a href="mailto:mangozzzmagicalworld@gmail.com">mangozzzmagicalworld@gmail.com</a>.</p>

              <h2>7. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date.</p>

              <h2>8. Contact Us</h2>
              <p>For any questions about this Privacy Policy, please contact us:</p>
              <ul>
                <li>📧 <a href="mailto:mangozzzmagicalworld@gmail.com">mangozzzmagicalworld@gmail.com</a></li>
                <li>📞 <a href="tel:+917977127312">+91 79771 27312</a></li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
