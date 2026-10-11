/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mangozzz.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/menu.pdf',
        destination: '/images/Mangozzz-Magical-Menu-Card.pdf',
      },
      {
        source: '/menu-card.pdf',
        destination: '/images/Mangozzz-Magical-Menu-Card.pdf',
      },
      {
        source: '/images/Mangozzz%20Magical%20Menu%20Card.pdf',
        destination: '/images/Mangozzz-Magical-Menu-Card.pdf',
      },
    ];
  },
};

export default nextConfig;
