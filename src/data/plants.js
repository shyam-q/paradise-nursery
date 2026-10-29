const photos = {
  monstera: 'photo-1614594975525-e45190c55d0b',
  snake: 'photo-1593482892290-f54927ae2b8b',
  pothos: 'photo-1501004318641-b39e6451bec6',
  peace: 'photo-1497250681960-ef046c08a56e',
  succulent: 'photo-1459411552884-841db9b3cc2a',
  fern: 'photo-1509423350716-97f9360b4e09',
  rubber: 'photo-1509423350716-97f9360b4e09',
  zz: 'photo-1485955900006-10f4d324d411',
  aloe: 'photo-1509423350716-97f9360b4e09',
};

const image = (key) => `https://images.unsplash.com/${photos[key]}?auto=format&fit=crop&w=700&q=80`;

export const categories = [
  {
    name: 'Easy-Care Favorites',
    description: 'Beautiful greenery for beginners and busy plant parents.',
    plants: [
      { id: 'snake-plant', name: 'Snake Plant', price: 18, image: image('snake'), description: 'Upright, architectural leaves with a forgiving nature.' },
      { id: 'golden-pothos', name: 'Golden Pothos', price: 14, image: image('pothos'), description: 'Trailing heart-shaped leaves that brighten shelves.' },
      { id: 'zz-plant', name: 'ZZ Plant', price: 22, image: image('zz'), description: 'Glossy foliage that handles lower light.' },
      { id: 'aloe-vera', name: 'Aloe Vera', price: 12, image: image('aloe'), description: 'A sculptural succulent for a sunny windowsill.' },
      { id: 'jade-succulent', name: 'Jade Succulent', price: 16, image: image('succulent'), description: 'Compact, plump leaves with a timeless look.' },
      { id: 'rubber-plant', name: 'Rubber Plant', price: 26, image: image('rubber'), description: 'Bold, deep-green leaves make a statement.' },
    ],
  },
  {
    name: 'Tropical Statement Plants',
    description: 'Big leaves and lush shapes for a little indoor jungle.',
    plants: [
      { id: 'monstera', name: 'Monstera Deliciosa', price: 32, image: image('monstera'), description: 'Iconic split leaves with a tropical feel.' },
      { id: 'bird-paradise', name: 'Bird of Paradise', price: 45, image: image('rubber'), description: 'A dramatic upright plant for bright rooms.' },
      { id: 'fiddle-leaf', name: 'Fiddle Leaf Fig', price: 39, image: image('monstera'), description: 'Large violin-shaped leaves and sculptural form.' },
      { id: 'calathea', name: 'Calathea', price: 24, image: image('pothos'), description: 'Patterned foliage that adds visual texture.' },
      { id: 'philodendron', name: 'Philodendron', price: 21, image: image('peace'), description: 'Lush foliage that suits many indoor spaces.' },
      { id: 'areca-palm', name: 'Areca Palm', price: 34, image: image('fern'), description: 'Feathery fronds for a relaxed, tropical mood.' },
    ],
  },
  {
    name: 'Calm & Airy Greens',
    description: 'Soft foliage and fresh silhouettes for peaceful spaces.',
    plants: [
      { id: 'peace-lily', name: 'Peace Lily', price: 20, image: image('peace'), description: 'Elegant leaves and delicate white blooms.' },
      { id: 'boston-fern', name: 'Boston Fern', price: 19, image: image('fern'), description: 'Soft, arching fronds for a lush look.' },
      { id: 'spider-plant', name: 'Spider Plant', price: 15, image: image('pothos'), description: 'Graceful arching leaves and easy-going growth.' },
      { id: 'parlor-palm', name: 'Parlor Palm', price: 23, image: image('fern'), description: 'A compact palm with a gentle silhouette.' },
      { id: 'heartleaf-philodendron', name: 'Heartleaf Philodendron', price: 17, image: image('peace'), description: 'A lovely trailing plant with heart-shaped leaves.' },
      { id: 'succulent-mix', name: 'Succulent Trio', price: 25, image: image('succulent'), description: 'A ready-to-style trio of little succulents.' },
    ],
  },
];