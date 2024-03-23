import { useState } from 'react';
import { CityName, Offer, Offers } from '../../types/types';
import PlaceCard from '../place-card/place-card';
import Map from '../map/map';
import { Nullable } from 'vitest';


type PlacesListProps = {
  offers: Offers;
  currentCity: CityName;
}

export default function PlacesList({offers, currentCity}: PlacesListProps): JSX.Element {

  const [activeOffer, setActiveOffer] = useState<Nullable<Offer>>(null);
  const handleHover = (offer?: Offer) => {
    setActiveOffer(offer || null);
  };

  const showCards = offers.map((item) => <PlaceCard handleHover={handleHover} offer={item} key={item.id} classCard={'cities__card place-card'}/>);

  return (

    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">312 places to stay in Amsterdam</b>
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by</span>
            <span className="places__sorting-type" tabIndex={0}>
                Popular
              <svg className="places__sorting-arrow" width="7" height="4">
                <use xlinkHref="#icon-arrow-select"></use>
              </svg>
            </span>
            <ul className="places__options places__options--custom places__options--opened">
              <li className="places__option places__option--active" tabIndex={0}>Popular</li>
              <li className="places__option" tabIndex={0}>Price: low to high</li>
              <li className="places__option" tabIndex={0}>Price: high to low</li>
              <li className="places__option" tabIndex={0}>Top rated first</li>
            </ul>
          </form>
          <div className="cities__places-list places__list tabs__content">

            {showCards}

          </div>
        </section>
        <div className="cities__right-section">
          <Map className='cities__map' city={currentCity} offers={offers} activeOffer={activeOffer}/>
        </div>
      </div>
    </div>
  );
}
