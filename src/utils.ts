import { offers } from './mocks/offers';
import { Offer } from './types/types';

const MAX_NEAR_OFFERS = 3;

export const getNearOffers = (offer: Offer): Offer[] => {
  const nearOffers: Offer[] = [];

  for (let i = 0; i < offers.length; i++) {
    if(offers[i].id !== offer.id && offers[i].city.name === offer.city.name) {
      nearOffers.push(offers[i]);
    }
    if (nearOffers.length >= MAX_NEAR_OFFERS) {
      break;
    }
  }

  return nearOffers;
};

export const getNewStr = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const getRoundNumber = (rating: number) => `${String(Math.round(rating) * 2)}`;

