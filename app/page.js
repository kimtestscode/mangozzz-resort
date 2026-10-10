import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import HeroSection from './_sections/HeroSection';
import BookingWidget from './_sections/BookingWidget';
import StatsSection from './_sections/StatsSection';
import RoomsSection from './_sections/RoomsSection';
import WeddingTeaser from './_sections/WeddingTeaser';
import ActivitiesTeaser from './_sections/ActivitiesTeaser';
import AmenitiesTeaser from './_sections/AmenitiesTeaser';
import GalleryTeaser from './_sections/GalleryTeaser';
import CtaBanner from './_sections/CtaBanner';

export const metadata = {
  title: 'Mangozzz Magical World Resort Karjat — Riverside Destination Wedding Venue & Resort',
  description:
    'Mangozzz Magical World Resort in Karjat / Khalapur is a premier riverside destination wedding venue & cottage resort. Featuring an 800-1,000 pax open lawn, 300-400 pax AC banquet hall, poolside Haldi & Sangeet deck, authentic wooden villas, and outdoor adventures near Mumbai & Pune.',
  keywords: [
    'Mangozzz Magical World resort karjat',
    'Mangozzz Magical World resort destination wedding',
    'destination wedding venue Karjat',
    'riverside destination wedding venue',
    'wedding lawn 1000 pax Karjat',
    'resort in Karjat for wedding',
    'AC banquet hall Karjat',
    'destination wedding near Mumbai',
    'destination wedding near Pune',
    'riverside cottage resort Khalapur',
  ],
  alternates: {
    canonical: 'https://mangozzz.com',
  },
};

const homeSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Resort', 'Hotel', 'EventVenue', 'WeddingVenue'],
      '@id': 'https://mangozzz.com/#venue',
      name: 'Mangozzz Magical World Resort Karjat',
      alternateName: [
        'Mangozzz Magical World Resort',
        'Mangozzz Resort Karjat',
        'Mangozzz Destination Wedding Venue',
        'Mangozzz Magical World Khalapur',
      ],
      description:
        'Premier riverside destination wedding venue and cottage resort situated on the Patalganga river in Khalapur near Karjat, Maharashtra. Featuring 800-1,000 pax grand open lawns, 300-400 pax indoor AC banquet, poolside Haldi deck, luxury wooden villas for 150+ guest stay, and full in-house gourmet catering.',
      url: 'https://mangozzz.com',
      telephone: '+91 79771 27312',
      email: 'mangozzzmagicalworld@gmail.com',
      priceRange: '₹₹ - ₹₹₹',
      image: 'https://mangozzz.com/client-media/reduced/Wedding/WhatsApp%20Image%202026-09-15%20at%203.36.28%20PM.jpeg',
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
        { '@type': 'LocationFeatureSpecification', name: 'Riverside Wedding Lawn', value: '800-1,000 Pax' },
        { '@type': 'LocationFeatureSpecification', name: 'AC Banquet Hall', value: '300-400 Pax' },
        { '@type': 'LocationFeatureSpecification', name: 'Poolside Haldi & Mehendi Setup', value: '100-250 Pax' },
        { '@type': 'LocationFeatureSpecification', name: 'Overnight Guest Accommodation', value: '150+ Guests' },
        { '@type': 'LocationFeatureSpecification', name: 'In-House Multi-Cuisine Catering', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Swimming Pool & Rain Dance', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Valet Parking for 100+ Cars', value: true },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://mangozzz.com/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is Mangozzz Magical World Resort Karjat a destination wedding venue?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! Mangozzz Magical World Resort in Karjat / Khalapur is a premier riverside destination wedding venue. It features a grand 800–1,000 guest open-air lawn, a 300–400 guest indoor AC banquet hall, a scenic poolside Haldi & Sangeet deck, and authentic wooden villas for 150+ overnight guests.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the wedding guest capacity at Mangozzz Magical World Resort Karjat?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The resort accommodates up to 1,000 guests on its grand open-air riverside lawn, 300 to 400 guests in its indoor climate-controlled AC banquet hall, and 100 to 250 guests on its poolside celebration deck.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where is Mangozzz Magical World Resort located from Mumbai and Pune?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Mangozzz Magical World Resort is situated along the Patalganga river in Chouk, Khalapur, just 1.5 hours from Mumbai / Navi Mumbai and approximately 2 hours from Pune via the Mumbai-Pune Expressway near Karjat.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Mangozzz Magical World Resort provide wedding catering and stay?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The resort provides full in-house multi-cuisine wedding catering at Alphonso Restaurant (Maharashtrian, North Indian, Jain/Gujarati, and live counters) as well as authentic wooden villas and deluxe cottages accommodating 150+ guests overnight with full resort buyout options.',
          },
        },
      ],
    },
  ],
};

export default function HomePage() {
  return (
    <>
      {/* Schema.org Structured Data for Google Rich Snippets & AI Search */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <Navbar />
      <main>
        <HeroSection />
        <BookingWidget />
        <StatsSection />
        <RoomsSection />
        <WeddingTeaser />
        <AmenitiesTeaser />
        <ActivitiesTeaser />
        <GalleryTeaser />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
