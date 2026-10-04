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
  title: 'Mangozzz Magical World Resort — Riverside Cottage Resort, Khalapur',
  description:
    'Book a stay at Mangozzz Magical World Resort, a riverside cottage resort in Khalapur near Mumbai. Enjoy adventures, games, pool, buffet, and magical nature experiences.',
};

export default function HomePage() {
  return (
    <>
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
