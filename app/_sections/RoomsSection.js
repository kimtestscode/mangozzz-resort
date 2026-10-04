import Link from 'next/link';
import RoomCard from './RoomCard';
import styles from './RoomsSection.module.css';

const rooms = [
  {
    id: 'woodhouse-villa',
    name: 'Authentic Woodhouse Villa',
    price: 4500,
    adults: 2,
    children: 2,
    size: '300 sq ft',
    images: [
      '/client-media/reduced/General Photos/Wood house big.jpg',
      '/client-media/reduced/General Photos/Both Wood House.jpg',
      '/client-media/reduced/Woodhouse/IMG-20250331-WA0091.jpg',
      '/client-media/reduced/Woodhouse/IMG-20250331-WA0092.jpg',
      '/client-media/reduced/Woodhouse 1/IMG-20250331-WA0106.jpg',
    ],
    features: ['Handcrafted Wood Interior', 'Private Balcony', 'Air Conditioned', 'Nature Facing Deck'],
    badge: 'Guest Favourite',
  },
  {
    id: 'pool-view-cottage',
    name: 'Pool View Cottage',
    price: 3000,
    adults: 2,
    children: 1,
    size: '220 sq ft',
    images: [
      '/client-media/reduced/General Photos/Pool View.jpg',
      '/client-media/reduced/General Photos/Pool View 2.jpg',
      '/client-media/reduced/Pool View/IMG_7107-1024x682.jpg',
      '/client-media/reduced/Pool View/IMG20230826141116.jpg',
      '/client-media/reduced/General Photos/Pool.jpg',
    ],
    features: ['Direct Pool View', 'Air Conditioned', 'Private Verandah', 'Ensuite Bathroom'],
  },
  {
    id: 'pool-side-double-cottage',
    name: 'Pool View Double Bed Cottage',
    price: 6000,
    adults: 4,
    children: 2,
    size: '380 sq ft',
    images: [
      '/client-media/reduced/Pool View Double/SRH_2511.jpg',
      '/client-media/reduced/Pool View Double/SRH_2513.jpg',
      '/client-media/reduced/Pool View Double/SRH_2515.jpg',
      '/client-media/reduced/General Photos/Pool View 2.jpg',
    ],
    features: ['2 King Double Beds', 'Pool Frontage', 'Spacious Seating', 'Family Friendly'],
    badge: 'Family Special',
  },
  {
    id: 'river-view-cottage',
    name: 'River View Cottage',
    price: 3500,
    adults: 2,
    children: 1,
    size: '220 sq ft',
    images: [
      '/client-media/reduced/General Photos/River View.jpg',
      '/client-media/reduced/General Photos/River View 2.jpg',
      '/client-media/reduced/SRH_2413.jpg',
      '/client-media/reduced/SRH_2415.jpg',
    ],
    features: ['Riverside Panorama', 'Air Conditioned', 'River Deck Access', 'Scenic Breeze'],
  },
  {
    id: 'river-view-double',
    name: 'River View Double Bed Cottage',
    price: 7000,
    adults: 5,
    children: 2,
    size: '380 sq ft',
    images: [
      '/client-media/reduced/RiverView Double/SRH_2527.jpg',
      '/client-media/reduced/RiverView Double/SRH_2528.jpg',
      '/client-media/reduced/RiverView Double/SRH_2529.jpg',
      '/client-media/reduced/General Photos/River View Double.jpg',
    ],
    features: ['Double King Beds', 'Panoramic River Vista', 'Private Balcony', 'Lounge Seating'],
    badge: 'Most Popular',
  },
  {
    id: 'mountain-view-room',
    name: 'Mountain View Room',
    price: 3200,
    adults: 2,
    children: 1,
    size: '240 sq ft',
    images: [
      '/client-media/reduced/General Photos/Mountain View.jpg',
      '/client-media/reduced/Mountain View Rooms/IMG-20250912-WA0031.jpg',
      '/client-media/reduced/Mountain View Rooms/IMG-20250912-WA0032.jpg',
      '/client-media/reduced/Mountain View Rooms/IMG-20250912-WA0038.jpg',
    ],
    features: ['Sahyadri Hills View', 'Air Conditioned', 'Peaceful Ambience', 'Modern Decor'],
  },
  {
    id: 'garden-view-cottage',
    name: 'Garden View Cottage',
    price: 3000,
    adults: 2,
    children: 1,
    size: '220 sq ft',
    images: [
      '/client-media/reduced/General Photos/Garden View.jpg',
      '/client-media/reduced/General Photos/Garden View 2.jpg',
      '/client-media/reduced/Garden View/IMG-20250331-WA0135.jpg',
      '/client-media/reduced/Garden View/IMG-20250331-WA0136.jpg',
    ],
    features: ['Mango Grove Setting', 'Lawn Facing', 'Air Conditioned', 'Tranquil Surroundings'],
  },
  {
    id: 'family-room',
    name: 'Spacious Family & Group Suite',
    price: 9500,
    adults: 8,
    children: 3,
    size: '450 sq ft',
    images: [
      '/client-media/reduced/General Photos/Family Room.jpg',
      '/client-media/reduced/Family Room/SRH_2541.jpg',
      '/client-media/reduced/Family Room/SRH_2545.jpg',
      '/client-media/reduced/Family Room/SRH_2528.jpg',
    ],
    features: ['Multiple Beds', 'Large Common Area', 'Perfect for Groups', 'Best Group Value'],
    badge: 'Group Choice',
  },
];

export default function RoomsSection() {
  return (
    <section className={`section ${styles.rooms}`} id="rooms">
      <div className="container">
        <div className="section-header">
          <span className="label">Our Accommodations</span>
          <h2>Choose Your Perfect Stay</h2>
          <p>
            From cosy pool-view cottages to authentic woodhouses and riverside suites — every room is a gateway
            to the magic of nature.
          </p>
          <div className="divider" />
        </div>

        <div className={styles.grid}>
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
    </section>
  );
}
