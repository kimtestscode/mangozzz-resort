import './globals.css';
import FloatingWhatsApp from '@/components/FloatingWhatsApp/FloatingWhatsApp';

export const metadata = {
  title: {
    default: 'Mangozzz Magical World Resort Karjat — Riverside Destination Wedding Venue & Cottage Resort',
    template: '%s | Mangozzz Magical World Resort Karjat',
  },
  description:
    'Mangozzz Magical World Resort in Karjat / Khalapur is a premier riverside destination wedding venue & luxury cottage resort near Mumbai and Pune. Features 800-1,000 pax riverside wedding lawns, AC banquet hall, poolside Haldi & Sangeet deck, wooden villas, and adventure activities.',
  keywords: [
    'Mangozzz Magical World resort karjat',
    'Mangozzz Magical World destination wedding',
    'Destination Wedding Karjat',
    'Riverside Wedding Venue Karjat',
    'Wedding Venue Khalapur',
    'Destination Wedding Resort Near Mumbai',
    'Destination Wedding Resort Near Pune',
    'Wedding Lawn 1000 Pax Karjat',
    'Banquet Hall Karjat',
    'Poolside Haldi Venue Karjat',
    'Mangozzz Magical World Resort',
    'resort Khalapur',
    'riverside cottage Karjat',
    'adventure resort Karjat',
  ],
  openGraph: {
    title: 'Mangozzz Magical World Resort Karjat — Riverside Destination Wedding Venue',
    description:
      'Grand riverside wedding lawns for 800-1,000 guests, AC banquet hall for 300-400 guests, poolside Haldi & stay for 150+ guests in Karjat / Khalapur.',
    url: 'https://mangozzz.com',
    siteName: 'Mangozzz Magical World Resort',
    locale: 'en_IN',
    type: 'website',
  },
  metadataBase: new URL('https://mangozzz.com'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}

