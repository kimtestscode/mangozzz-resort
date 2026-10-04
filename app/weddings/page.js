import Link from 'next/link';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import WeddingInquiryForm from './WeddingInquiryForm';
import WeddingFaq from './WeddingFaq';
import styles from './page.module.css';

export const metadata = {
  title: 'Destination Weddings & Events Venue in Karjat / Khalapur (800-1000 Pax Lawn, Banquet & Poolside) | Mangozzz Magical World Resort',
  description:
    'Host your dream riverside destination wedding at Mangozzz Magical World Resort, Khalapur near Karjat, Mumbai & Pune. Featuring an 800-1000 Pax open lawn, 300-400 Pax AC banquet hall, vibrant poolside Haldi setup, and budget-friendly open garden for intimate weddings.',
  keywords: [
    'Destination Wedding Karjat',
    'Destination Wedding Venue Khalapur',
    'Wedding Lawn 1000 Pax Karjat',
    'Banquet Hall 400 Pax Karjat',
    'Riverside Wedding Resort Maharashtra',
    'Poolside Haldi Venue Karjat',
    'Intimate Wedding Venue Mumbai Pune',
    'Destination Wedding Resort Near Mumbai',
    'Destination Wedding Resort Near Pune',
    'Mangozzz Magical World Resort Weddings',
  ],
  openGraph: {
    title: 'Riverside Destination Weddings & Events | Mangozzz Magical World Resort',
    description:
      'Grand open lawn for 800-1000 pax, AC banquet for 300-400 pax, poolside Haldi & budget open garden setups in Khalapur / Karjat.',
    url: 'https://mangozzz.com/weddings',
    siteName: 'Mangozzz Magical World Resort',
    images: [
      {
        url: 'https://mangozzz.com/client-media/reduced/Wedding/WhatsApp%20Image%202026-09-15%20at%203.36.28%20PM.jpeg',
        width: 1200,
        height: 630,
        alt: 'Destination Wedding at Mangozzz Magical World Resort',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mangozzz.com/weddings',
  },
};

const venues = [
  {
    id: 'grand-open-lawn',
    tag: 'Grand Open-Air Receptions & Mega Weddings',
    title: 'Grand Riverside Open Lawn',
    capacity: '800 – 1,000 Pax',
    image: '/client-media/reduced/Wedding/WhatsApp Image 2026-09-15 at 3.36.28 PM.jpeg',
    desc: 'Our flagship open-air lawn offers an expansive manicured green expanse bordered by Sahyadri hill vistas and gentle river breezes. Perfectly suited for royal mandap ceremonies under a starlit sky, grand musical Sangeet nights, multi-station gourmet buffets, and drone-captured celebrations.',
    features: [
      'Accommodates 800 to 1,000+ guests with theater/cluster seating',
      'Expansive stage, mandap and DJ truss installation zones',
      'Dedicated multi-cuisine live food station pathways',
      'Panoramic 360° Sahyadri mountain and riverside backdrop',
      'Heavy-duty 24/7 generator backup for uninterrupted sound & lighting',
      'Direct access from guest cottages and valet parking',
    ],
  },
  {
    id: 'ac-banquet-hall',
    tag: 'Engagements, Ring Ceremonies & Royal Feasts',
    title: 'Indoors AC Banquet Hall',
    capacity: '300 – 400 Pax',
    image: '/client-media/reduced/Event/venue/WhatsApp Image 2025-12-30 at 7.02.38 PM.jpeg',
    desc: 'An air-conditioned, pillarless indoor banquet space crafted for elegant ring ceremonies, formal wedding receptions, traditional indoor rituals, and corporate galas. Enjoy climate-controlled comfort with high ceilings, acoustic treatments, and customizable decor layouts.',
    features: [
      'Accommodates 300 to 400 guests in banquet & cluster setups',
      'Full climate-controlled central air conditioning',
      'Dedicated stage for varmala, bridal seating & musical performances',
      'Acoustic sound system and ambient lighting rigs',
      'Adjoining bridal green room with private ensuite vanity',
      'Weather-proof all-season venue for monsoon & summer events',
    ],
  },
  {
    id: 'poolside-haldi-deck',
    tag: 'Vibrant Haldi, Mehendi & Pool Parties',
    title: 'Poolside Deck & Haldi / Mehendi Setup',
    capacity: '100 – 250 Pax',
    image: '/client-media/reduced/General Photos/Pool.jpg',
    desc: 'Add pure joy and cinematic splashes to your pre-wedding festivities. Our crystal-blue pool deck creates an energetic, sun-kissed atmosphere for vibrant yellow Haldi rituals, floral Mehendi lounges, rain dance celebrations, sundowner cocktail parties, and musical pool bashes.',
    features: [
      'Accommodates 100 to 250 guests for interactive celebrations',
      'Marigold and floral drape decor setups around pool perimeter',
      'Sun lounger decks, cabana seating & shaded gazebo lounges',
      'Rain dance and DJ music setup ready for celebration',
      'Dedicated mocktail, coconut water & live chaat counter space',
      'Convenient changing rooms & cottage proximity',
    ],
  },
  {
    id: 'open-garden-setup',
    tag: 'Intimate Weddings & Budget-Friendly Group Events',
    title: 'Budget-Friendly Open Garden Setup',
    capacity: '50 – 150 Pax',
    image: '/client-media/reduced/Wedding/WhatsApp Image 2026-09-15 at 3.36.29 PM.jpeg',
    desc: 'Looking for a warm, picturesque, and cost-effective setting for an intimate gathering? Our manicured orchard garden lawns surrounded by mature Alphonso mango trees offer the ideal setting for boutique weddings, pre-wedding poojas, family milestones, birthday galas, and anniversary reunions.',
    features: [
      'Accommodates 50 to 150 guests with personalized intimacy',
      'Budget-friendly all-inclusive packages (decor + venue + catering)',
      'Natural shaded canopies of lush mango orchard trees',
      'Customized cozy floral archways, fairy lights & photo booths',
      'Warm family dining buffet and campfire gathering areas',
      'Ideal for pre-wedding couple shoots and family portraits',
    ],
  },
];

const weddingServices = [
  {
    icon: '🍲',
    title: 'Alphonso In-House Catering',
    desc: 'From traditional Maharashtrian wedding feasts (Ukadiche Modak, Puran Poli) to North Indian, Pure Jain / Gujarati satvik spreads, and continental live counters.',
  },
  {
    icon: '🏡',
    title: 'Full Resort Buyout & Stay',
    desc: '8 room categories including handcrafted Woodhouse villas, pool view cottages, and family suites accommodating 150+ guests overnight with complete privacy.',
  },
  {
    icon: '🌸',
    title: 'Custom Decor & Mandap Designs',
    desc: 'Expert floral mandaps, fairy light tunnels, royal entry carpets, bridal entry concepts, and themed setups tailored to your vision and budget.',
  },
  {
    icon: '🎵',
    title: 'Sound, DJ & Live Entertainment',
    desc: 'Professional sound trusses, LED dance floors, acoustic indoor setups, folk artist arrangements, and live dhol tasha for grand baraat processions.',
  },
  {
    icon: '🚗',
    title: 'Valet & Ample Parking',
    desc: 'Spacious secure parking area accommodating 100+ guest cars with dedicated security staff and valet assistance for seamless arrivals.',
  },
  {
    icon: '⚡',
    title: '24/7 Heavy Generator Backup',
    desc: 'Uninterrupted power supply ensuring all lighting, sound systems, cooling, and decor effects run flawlessly throughout day and night.',
  },
];

const galleryHighlights = [
  {
    src: '/client-media/reduced/Wedding/WhatsApp Image 2026-09-15 at 3.36.28 PM.jpeg',
    alt: 'Grand Open Lawn Wedding Stage at Mangozzz Resort',
    caption: 'Lawn Mandap & Stage Setup',
  },
  {
    src: '/client-media/reduced/Wedding/WhatsApp Image 2026-09-15 at 3.36.28 PM (1).jpeg',
    alt: 'Open Air Wedding Decor and Seating',
    caption: 'Open Air Banquet Seating',
  },
  {
    src: '/client-media/reduced/Wedding/WhatsApp Image 2026-09-15 at 3.36.29 PM.jpeg',
    alt: 'Garden Haldi & Mehendi Celebration Decor',
    caption: 'Intimate Garden Celebration',
  },
  {
    src: '/client-media/reduced/Wedding/WhatsApp Image 2026-09-15 at 3.36.29 PM (1).jpeg',
    alt: 'Wedding Reception Decor Setup',
    caption: 'Floral Stage & Lighting Decor',
  },
  {
    src: '/client-media/reduced/Event/venue/WhatsApp Image 2025-12-30 at 7.02.38 PM.jpeg',
    alt: 'AC Banquet Hall Seating and Lighting',
    caption: '300-400 Pax AC Banquet Hall',
  },
  {
    src: '/client-media/reduced/General Photos/Resort.jpg',
    alt: 'Panoramic View of Mangozzz Resort Grounds',
    caption: 'Riverside Resort Grounds & Sahyadri Views',
  },
];

export default function WeddingsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['EventVenue', 'WeddingVenue', 'Hotel'],
    name: 'Mangozzz Magical World Resort — Destination Wedding Venue',
    description:
      'Premier riverside destination wedding resort in Khalapur near Karjat, Mumbai & Pune. Features an 800-1000 pax open lawn, 300-400 pax AC banquet hall, poolside Haldi deck, and open garden setups.',
    url: 'https://mangozzz.com/weddings',
    telephone: '+91 79771 27312',
    email: 'mangozzzmagicalworld@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Survey No. 59/1, 59/6/A, 59/6/B, Asarewadi, near Swaminarayan Gurukul School, Chouk',
      addressLocality: 'Khalapur, near Karjat',
      addressRegion: 'Maharashtra',
      postalCode: '410206',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '18.9038',
      longitude: '73.2842',
    },
    maximumAttendeeCapacity: 1000,
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Open Wedding Lawn', value: '800-1000 Pax' },
      { '@type': 'LocationFeatureSpecification', name: 'AC Banquet Hall', value: '300-400 Pax' },
      { '@type': 'LocationFeatureSpecification', name: 'Poolside Haldi Setup', value: '100-250 Pax' },
      { '@type': 'LocationFeatureSpecification', name: 'Intimate Garden Setup', value: '50-150 Pax' },
      { '@type': 'LocationFeatureSpecification', name: 'Overnight Guest Stay', value: '150+ Guests' },
      { '@type': 'LocationFeatureSpecification', name: 'In-House Multi-Cuisine Catering', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Valet Parking', value: true },
    ],
  };

  return (
    <>
      {/* Schema.org Structured Data for Google Rich Snippets & AI Search */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main className={styles.main}>
        {/* ---------------- Hero Section ---------------- */}
        <section className={styles.hero}>
          <div className={styles.heroBg} aria-hidden="true" />
          <div className={styles.heroOverlay} aria-hidden="true" />
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>Riverside Destination Weddings &amp; Events</span>
            <h1 className={styles.heroTitle}>
              Where <span>Fairytale Riverside Weddings</span> Come Alive
            </h1>
            <p className={styles.heroDesc}>
              Celebrate your special day surrounded by peaceful river breezes and the majestic Sahyadri hills.
              Choose from grand <strong>800–1000 Pax open lawns</strong>, an elegant <strong>300–400 Pax indoor AC banquet hall</strong>,
              a lively <strong>poolside Haldi deck</strong>, or a <strong>budget-friendly open garden setup</strong>.
            </p>

            <div className={styles.heroBadges}>
              <span className={styles.badge}>🌿 Riverside &amp; Mountain Backdrop</span>
              <span className={styles.badge}>👥 800–1,000 Pax Open Lawn</span>
              <span className={styles.badge}>🏛️ 300–400 Pax AC Banquet</span>
              <span className={styles.badge}>🏊 Poolside Haldi Setup</span>
              <span className={styles.badge}>🏡 150+ Overnight Guest Stay</span>
            </div>

            <div className={styles.heroActions}>
              <a href="#inquiry-form" className="btn btn-primary btn-lg">
                ✨ Check Date Availability &amp; Get Quote
              </a>
              <a
                href="https://wa.me/917977127312?text=Hello%20Mangozzz%20Magical%20World%20Resort!%20I%20am%20interested%20in%20hosting%20a%20destination%20wedding%20/%20event.%20Please%20share%20details."
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn-lg ${styles.whatsappBtn}`}
              >
                💬 WhatsApp Wedding Planner
              </a>
            </div>
          </div>
        </section>

        {/* ---------------- Overview Highlights ---------------- */}
        <div className="container">
          <div className={styles.overviewStats}>
            <div className={styles.statCard}>
              <span className={styles.statIcon}>🌿</span>
              <div className={styles.statNum}>800 – 1000</div>
              <div className={styles.statLabel}>Grand Open Lawn Pax</div>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statIcon}>🏛️</span>
              <div className={styles.statNum}>300 – 400</div>
              <div className={styles.statLabel}>AC Banquet Hall Pax</div>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statIcon}>🏊</span>
              <div className={styles.statNum}>100 – 250</div>
              <div className={styles.statLabel}>Poolside Haldi &amp; Mehendi</div>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statIcon}>🏡</span>
              <div className={styles.statNum}>150+ Stay</div>
              <div className={styles.statLabel}>Woodhouse &amp; Luxury Cottages</div>
            </div>
          </div>
        </div>

        {/* ---------------- Venue Options & Setups ---------------- */}
        <section className="section" id="venues">
          <div className="container">
            <div className="section-header">
              <span className="label">Versatile Event Spaces</span>
              <h2>Multiple Wedding &amp; Event Setup Options</h2>
              <p>
                From mega starlit receptions to climate-controlled indoor ceremonies and intimate garden celebrations —
                discover our tailored spaces crafted for your dream wedding.
              </p>
              <div className="divider" />
            </div>

            <div className={styles.venueGrid}>
              {venues.map((venue, idx) => (
                <article
                  key={venue.id}
                  className={`${styles.venueCard} ${idx % 2 === 1 ? styles.reverse : ''}`}
                >
                  <div className={styles.venueImgWrap}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={venue.image}
                      alt={`${venue.title} at Mangozzz Magical World Resort`}
                      className={styles.venueImg}
                      loading="lazy"
                    />
                    <div className={styles.capacityPill}>👥 Capacity: {venue.capacity}</div>
                  </div>

                  <div className={styles.venueBody}>
                    <span className={styles.venueTag}>{venue.tag}</span>
                    <h3 className={styles.venueTitle}>{venue.title}</h3>
                    <p className={styles.venueDesc}>{venue.desc}</p>

                    <ul className={styles.featureList}>
                      {venue.features.map((feat) => (
                        <li key={feat} className={styles.featureItem}>
                          <span>✓</span> {feat}
                        </li>
                      ))}
                    </ul>

                    <div className={styles.venueCardActions}>
                      <a href="#inquiry-form" className="btn btn-primary">
                        Reserve {venue.title}
                      </a>
                      <a
                        href={`https://wa.me/917977127312?text=Hello!%20I%20am%20interested%20in%20the%20${encodeURIComponent(
                          venue.title
                        )}%20(${encodeURIComponent(venue.capacity)})%20for%20an%20event.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`btn ${styles.whatsappBtn}`}
                      >
                        💬 Quick Quote
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- In-House Wedding Services ---------------- */}
        <section className="section" style={{ backgroundColor: 'var(--color-surface-2)' }}>
          <div className="container">
            <div className="section-header">
              <span className="label">Full-Service Hospitality</span>
              <h2>Everything You Need Under One Roof</h2>
              <p>
                Our dedicated event management team handles all logistics so you can cherish every moment with your loved ones.
              </p>
              <div className="divider" />
            </div>

            <div className={styles.servicesGrid}>
              {weddingServices.map(({ icon, title, desc }) => (
                <div key={title} className={styles.serviceCard}>
                  <span className={styles.serviceIcon}>{icon}</span>
                  <h3 className={styles.serviceTitle}>{title}</h3>
                  <p className={styles.serviceDesc}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- Authentic Wedding Visual Gallery ---------------- */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <span className="label">Real Celebrations</span>
              <h2>Wedding &amp; Event Gallery</h2>
              <p>Take a glimpse into the magical setups, scenic lawns, and decor at Mangozzz Magical World Resort.</p>
              <div className="divider" />
            </div>

            <div className={styles.galleryGrid}>
              {galleryHighlights.map(({ src, alt, caption }) => (
                <div key={src} className={styles.galleryItem}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt={alt} loading="lazy" />
                  <div className={styles.galleryCaption}>{caption}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- Inquiry & Booking Section ---------------- */}
        <div className="container">
          <section className={styles.inquirySection}>
            <div className={styles.inquiryGrid}>
              <div className={styles.inquiryLeft}>
                <h2>Plan Your Dream Destination Wedding</h2>
                <p>
                  Dates fill up quickly during the wedding season! Fill out the inquiry form or contact our direct event coordinator
                  to schedule a complimentary resort recce and receive a customized package quote.
                </p>

                <div className={styles.contactDirect}>
                  <a href="tel:+917977127312">
                    📞 Direct Event Desk: +91 79771 27312
                  </a>
                  <a href="mailto:mangozzzmagicalworld@gmail.com">
                    ✉️ mangozzzmagicalworld@gmail.com
                  </a>
                  <a
                    href="https://maps.app.goo.gl/HA4N17DKTDiQtnmT7"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📍 Chouk, Khalapur, Maharashtra (Near Karjat)
                  </a>
                </div>
              </div>

              <div>
                <WeddingInquiryForm />
              </div>
            </div>
          </section>
        </div>

        {/* ---------------- Wedding FAQ Section ---------------- */}
        <section className="section" style={{ backgroundColor: 'var(--color-surface-2)' }}>
          <div className="container">
            <div className="section-header">
              <span className="label">Frequently Asked Questions</span>
              <h2>Destination Wedding FAQs</h2>
              <p>Everything you need to know about hosting your wedding or celebration with us.</p>
              <div className="divider" />
            </div>

            <WeddingFaq />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
