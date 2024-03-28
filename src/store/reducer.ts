/*

import { CITIES } from '../const';
import { offers } from '../mocks/offers';
import { OffersState } from '../types/types';


const initialState: OffersState = {
  city: CITIES[0],
  filteredOffers: offers.filter((offer) => offer.city.name === CITIES[0]),
  offers,
};

const enum ActionType {
  SetCity = 'offers/setCity',
}

export const setCity = (city: string) => ({
  payload: city,
  type: ActionType.SetCity,
});


export function reducer(state: OffersState = initialState, action: {payload: string; type: ActionType}): OffersState {
  switch(action.type) {
    case ActionType.SetCity:
      return {
        ...state,
        city: action.payload,
        filteredOffers: state.offers.filter((offer) => offer.city.name === action.payload),
      };
    default: return state;
  }
}
*/
