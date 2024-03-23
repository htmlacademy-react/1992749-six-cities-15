import { JSX } from 'react';
import PlacesList from '../../components/places-list/places-list';
import { useAppDispatch, useAppSelector } from '../../components/hooks/use-store';
import { AppRoute, CITIES } from '../../const';
import { Link } from 'react-router-dom';
import { setCity } from '../../store/reducer';


export default function MainScreen(): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  const currentCity = useAppSelector((state) => state.city);
  const dispatch = useAppDispatch();
  const currentOffers = offers.filter((offer) => offer.city.name === currentCity.name);

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {CITIES.map((city) => (
              <li className="locations__item" key={city.name}>
                <Link className={`locations__item-link tabs__item ${
                  currentCity === city && 'tabs__item--active'
                }`} to={AppRoute.Root}
                onClick={(evt) => {
                  evt.preventDefault();
                  dispatch(setCity(city));
                }}
                >
                  <span>{city.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <PlacesList offers={currentOffers} currentCity={currentCity}/>

    </main>
  );
}

