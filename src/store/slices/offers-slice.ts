import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CITIES } from '../../const';
import { offers } from '../../mocks/offers';
import { OffersState } from '../../types/types';

const initialState: OffersState = {
  city: CITIES[0],
  filteredOffers: offers.filter((offer) => offer.city.name === CITIES[0]),
  offers,
};

export const offersSlice = createSlice({
  initialState,
  name: 'offers',
  reducers: {
    setCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
      state.filteredOffers = state.offers.filter((offer) => offer.city.name === action.payload);
    },
  },
  selectors: {
    city: (state) => state.city,
    filteredOffers: (state) => state.filteredOffers,
  }
});

// export const offersActions = offersSlice.actions;
export const {setCity} = offersSlice.actions;
export const offersSelectors = offersSlice.selectors;

