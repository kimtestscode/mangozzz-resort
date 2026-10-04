import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import styles from '../policy.module.css';

export const metadata = {
  title: 'Terms & Conditions',
  description: 'Mangozzz Magical World Resort terms and conditions for bookings and stays.',
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className="container">
            <h1>Terms &amp; Conditions</h1>
            <p>Last updated: September 2024</p>
          </div>
        </div>

        <section className="section">
          <div className="container">
            <div className={styles.content}>
              <h2>1. Acceptance of Terms</h2>
              <p>By accessing and using the Mangozzz Magical World Resort website and making a booking, you agree to be bound by these Terms and Conditions.</p>

              <h2>2. Reservations</h2>
              <p>All reservations are subject to availability. A booking is confirmed only upon receipt of a confirmation email from us. We reserve the right to decline any booking at our discretion.</p>

              <h2>3. Check-In / Check-Out</h2>
              <ul>
                <li>Check-in time: 12:00 PM (noon)</li>
                <li>Check-out time: 11:00 AM</li>
                <li>Early check-in and late check-out are subject to availability and may incur additional charges.</li>
              </ul>

              <h2>4. Guest Conduct</h2>
              <p>Guests are expected to behave respectfully towards staff and other guests. We reserve the right to ask guests who engage in disruptive, illegal, or inappropriate behaviour to leave without a refund.</p>

              <h2>5. Prohibited Items</h2>
              <ul>
                <li>Alcohol (unless purchased from our bar)</li>
                <li>Fireworks or explosives</li>
                <li>Pets are not permitted on the property</li>
                <li>Smoking is not permitted in rooms or dining areas</li>
              </ul>

              <h2>6. Liability</h2>
              <p>Mangozzz Magical World Resort is not liable for loss of personal belongings, injuries during activities, or any damages caused by acts of God or unforeseen circumstances.</p>

              <h2>7. Activities</h2>
              <p>All adventure activities are undertaken at the guest's own risk. Guests must follow all safety instructions provided by our staff. We reserve the right to cancel activities due to weather or safety concerns.</p>

              <h2>8. Privacy</h2>
              <p>Your personal information is collected and used in accordance with our Privacy Policy.</p>

              <h2>9. Modifications</h2>
              <p>We reserve the right to modify these Terms and Conditions at any time. Changes will be posted on this page with an updated date.</p>

              <h2>10. Contact</h2>
              <p>For any queries regarding these Terms, please contact us at <a href="mailto:mangozzzmagicalworld@gmail.com">mangozzzmagicalworld@gmail.com</a>.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
