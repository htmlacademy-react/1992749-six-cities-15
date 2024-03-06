import { Offers } from './types';

export const offers: Offers = [{
  id: '111',
  title: 'Beautiful & luxurious studio at great location',
  type: 'room',
  price: 120,
  city: {
    name: 'Amsterdam',
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    }
  },
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8
  },
  isFavorite: true,
  isPremium: true,
  rating: 2.8,
  description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  bedrooms: 1,
  goods: [
    'Wi-Fi',
    'Washing machine',
    'Towels',
    'Heating',
    'Coffee machine',
    'Baby seat',
    'Dishwasher',
    'Kitchen',
    'Cabel TV',
    'Fridge',
  ],
  host: {
    name: 'Oliver',
    avatarUrl: `https://i.pravatar.cc/128?rnd=${Math.random()}`,
    isPro: true
  },
  images: [
    `https://i.pravatar.cc/128?rnd=${Math.random()}`,
    `https://i.pravatar.cc/128?rnd=${Math.random()}`,
    `https://i.pravatar.cc/128?rnd=${Math.random()}`,
    `https://i.pravatar.cc/128?rnd=${Math.random()}`,
    `https://i.pravatar.cc/128?rnd=${Math.random()}`,
    `https://i.pravatar.cc/128?rnd=${Math.random()}`,
  ],
  maxAdults: 1
},
{
  id: '222',
  title: 'A calm place in a noisy city.',
  type: 'apartment',
  price: 220,
  city: {
    name: 'Paris',
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    }
  },
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8
  },
  isFavorite: true,
  isPremium: true,
  rating: 3.1,
  description: 'Paris is the capital and largest city of France. Located in the north of the state.',
  bedrooms: 1,
  goods: [
    'Washing machine',
    'Towels',
    'Heating',
    'Coffee machine',
    'Baby seat',
    'Dishwasher',
    'Kitchen',
    'Cabel TV',
    'Fridge',
  ],
  host: {
    name: 'Conner',
    avatarUrl: `https://i.pravatar.cc/128?rnd=${Math.random()}`,
    isPro: false
  },
  images: [
    `https://i.pravatar.cc/128?rnd=${Math.random()}`,
    `https://i.pravatar.cc/128?rnd=${Math.random()}`,
    `https://i.pravatar.cc/128?rnd=${Math.random()}`,
    `https://i.pravatar.cc/128?rnd=${Math.random()}`,
    `https://i.pravatar.cc/128?rnd=${Math.random()}`,
    `https://i.pravatar.cc/128?rnd=${Math.random()}`,
  ],
  maxAdults: 40
},
{
  id: '333',
  title: 'A combination of nature and the rich infrastructure of a modern city.',
  type: 'apartment',
  price: 320,
  city: {
    name: 'Cologne',
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    }
  },
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8
  },
  isFavorite: false,
  isPremium: false,
  rating: 4.3,
  description: 'Cologne is the fourth largest city in Germany, as well as one of the countrys most important religious and tourist centers.',
  bedrooms: 3,
  goods: [
    'Towels',
    'Heating',
    'Coffee machine',
    'Baby seat',
    'Dishwasher',
    'Kitchen',
    'Cabel TV',
    'Fridge',
  ],
  host: {
    'name': 'Angelina Conner',
    'avatarUrl': `https://i.pravatar.cc/128?rnd=${Math.random()}`,
    'isPro': false
  },
  images: [
    `https://i.pravatar.cc/128?rnd=${Math.random()}`,
    `https://i.pravatar.cc/128?rnd=${Math.random()}`,
    `https://i.pravatar.cc/128?rnd=${Math.random()}`,
    `https://i.pravatar.cc/128?rnd=${Math.random()}`,
    `https://i.pravatar.cc/128?rnd=${Math.random()}`,
    `https://i.pravatar.cc/128?rnd=${Math.random()}`,
  ],
  maxAdults: 3
},
{
  id: '444',
  title: 'For those who love entertainment and an active lifestyle.',
  type: 'apartment',
  price: 420,
  city: {
    name: 'Brussels',
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    }
  },
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8
  },
  isFavorite: false,
  isPremium: false,
  rating: 2.2,
  description: 'Brussels is the capital of Belgium, located in the center of Europe.',
  bedrooms: 3,
  goods: [
    'Heating',
    'Coffee machine',
    'Baby seat',
    'Dishwasher',
    'Kitchen',
    'Cabel TV',
    'Fridge',
  ],
  host: {
    name: 'Oliver Angelina',
    avatarUrl: `https://i.pravatar.cc/128?rnd=${Math.random()}`,
    isPro: false
  },
  images: [
    `https://i.pravatar.cc/128?rnd=${Math.random()}`,
    `https://i.pravatar.cc/128?rnd=${Math.random()}`,
    `https://i.pravatar.cc/128?rnd=${Math.random()}`,
    `https://i.pravatar.cc/128?rnd=${Math.random()}`,
    `https://i.pravatar.cc/128?rnd=${Math.random()}`,
    `https://i.pravatar.cc/128?rnd=${Math.random()}`,
  ],
  maxAdults: 2
},
];

