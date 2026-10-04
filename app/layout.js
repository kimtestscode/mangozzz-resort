import './globals.css';

export const metadata = {
  title: {
    default: 'Mangozzz Magical World Resort — Riverside Cottage Resort, Khalapur',
    template: '%s | Mangozzz Magical World Resort',
  },
  description:
    'Experience nature at its finest at Mangozzz Magical World Resort — a premier riverside cottage resort in Khalapur, Maharashtra. Book rooms, enjoy adventures, games, and authentic nature getaways.',
  keywords: [
    'Mangozzz Magical World Resort',
    'Mangozzz Magical World',
    'resort Khalapur',
    'riverside cottage',
    'Karjat resort',
    'nature resort Maharashtra',
    'adventure resort',
    'family resort near Mumbai',
    'river resort',
  ],
  openGraph: {
    title: 'Mangozzz Magical World Resort — Riverside Cottage Resort',
    description: 'A magical riverside resort experience in Khalapur, Maharashtra.',
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
      <body>{children}</body>
    </html>
  );
}
