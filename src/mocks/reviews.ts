import { Reviews } from './types';

export const reviews: Reviews = [
  {
    id: '555ddfd5-b953-4a30-8c8d-bd083cd6b62a',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Oliver Conner',
      avatarUrl: `https://i.pravatar.cc/128?rnd=${Math.random()}`,
      isPro: false
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 4
  },
  {
    id: '666ddfd5-b953-4a30-8c8d-bd083cd6b62a',
    date: '2029-07-10T14:03:56.569Z',
    user: {
      name: 'Jim Beam',
      avatarUrl: `https://i.pravatar.cc/128?rnd=${Math.random()}`,
      isPro: false
    },
    comment: 'The climate is temperate, transitional from temperate continental to temperate maritime.',
    rating: 4
  },
  {
    id: '777ddfd5-b953-4a30-8c8d-bd083cd6b62a',
    date: '2049-06-13T14:07:56.569Z',
    user: {
      name: 'Jack Daniels',
      avatarUrl: `https://i.pravatar.cc/128?rnd=${Math.random()}`,
      isPro: false
    },
    comment: 'This type of climate is explained by the geographical location and atmospheric circulation characteristic of the Leningrad region.',
    rating: 4
  },
  {
    id: '888ddfd5-b953-4a30-8c8d-bd083cd6b62a',
    date: '2069-08-14T14:17:56.569Z',
    user: {
      name: 'John Snow',
      avatarUrl: `https://i.pravatar.cc/128?rnd=${Math.random()}`,
      isPro: false
    },
    comment: 'According to the Köppen climate classification, it is classified as humid continental.',
    rating: 4
  }
];
