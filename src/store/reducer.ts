import { CITIES } from '../const';
import { offers } from '../mocks/offers';
import { CityName, Offer } from '../types/types';


interface OffersState {
  city: CityName;
  offers: Offer[];
}

const initialState: OffersState = {
  city: CITIES[0],
  offers,
};

const enum ActionType {
  SetCity = 'offers/setCity',
}

export const setCity = (city: CityName) => ({
  payload: city,
  type: ActionType.SetCity,
});

export function reducer(state: OffersState = initialState, action: {payload: unknown; type: ActionType}): OffersState {
  switch(action.type) {
    case ActionType.SetCity:
      return {
        ...state,
        city: action.payload as CityName,
      };
    default: return state;
  }
}

