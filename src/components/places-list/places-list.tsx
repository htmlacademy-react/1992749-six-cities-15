import { useState } from 'react';
import { Offer, Offers } from '../../types/types';
import PlaceCard from '../place-card/place-card';
import Map from '../map/map';
import { Nullable } from 'vitest';
import { SortOptions } from '../../const';
import { Sort } from '../sort/sort';

type PlacesListProps = {
  offers: Offers;
}

export default function PlacesList({offers}: PlacesListProps): JSX.Element {

  const [activeOffer, setActiveOffer] = useState<Nullable<Offer>>(null);
  const handleHover = (offer?: Offer) => {
    setActiveOffer(offer || null);
  };

  const [activeSort, setActiveSort] = useState(SortOptions.Popular);
  let sortedOffers = offers;

  if(activeSort === SortOptions.PriceLowToHigh) {
    sortedOffers = offers.toSorted((a, b) => a.price - b.price);
  }
  if (activeSort === SortOptions.PriceHighToLow) {
    sortedOffers = offers.toSorted((a, b) => b.price - a.price);
  }
  if (activeSort === SortOptions.TopRatedFirst) {
    sortedOffers = offers.toSorted((a, b) => b.rating - a.rating);
  }

  const showCards = sortedOffers.map((item) => <PlaceCard handleHover={handleHover} offer={item} key={item.id} classCard={'cities__card place-card'}/>);

  return (

    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">312 places to stay in Amsterdam</b>
          <Sort current={activeSort} setter={setActiveSort}/>
          <div className="cities__places-list places__list tabs__content">

            {showCards}

          </div>
        </section>
        <div className="cities__right-section">
          <Map className='cities__map' city={offers[0].city} offers={offers} activeOffer={activeOffer}/>
        </div>
      </div>
    </div>
  );
}
