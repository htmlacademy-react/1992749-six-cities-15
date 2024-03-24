import { JSX } from 'react';
import PlacesList from '../../components/places-list/places-list';
import { useAppDispatch, useAppSelector } from '../../components/hooks/use-store';
import { CITIES } from '../../const';
import { setCity } from '../../store/reducer';


export default function MainScreen(): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  const currentCity = useAppSelector((state) => state.city);
  const currentOffers = offers.filter((offer) => offer.city.name === currentCity);
  const dispatch = useAppDispatch();


  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {CITIES.map((city) => (
              <li className="locations__item" key={city}>
                <a className={`locations__item-link tabs__item ${
                  currentCity === city && 'tabs__item--active'
                }`}
                onClick={(evt) => {
                  evt.preventDefault();
                  dispatch(setCity(city));
                }}
                >
                  <span>{city}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <PlacesList offers={currentOffers} />

    </main>
  );
}

