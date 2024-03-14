import { JSX } from 'react';
import { Offers } from '../../types/types';
import { getNewStr, getRoundNumber } from '../../utils';
import { useParams } from 'react-router-dom';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import { reviews } from '../../mocks/reviews';
import ReviewsForm from '../../components/reviews-form/reviews-form';
import PlacesNear from '../../components/places-near/places-near';
import Map from '../../components/map/map';

type OfferScreenProps = {
  offers: Offers;
}

export default function OfferScreen({offers}: OfferScreenProps): JSX.Element {
  const {id} = useParams();
  const currentOffer = offers.find((offer) => offer.id === id);

  if (!currentOffer) {
    return <NotFoundScreen />;
  }
  const { bedrooms,images, isFavorite, price, rating, type, maxAdults, host, goods, description } = currentOffer;

  return (
    <main className="page__main page__main--offer">
      <section className="offer">
        <div className="offer__gallery-container container">
          <div className="offer__gallery">
            {images.map((item) =>
              (
                <div className="offer__image-wrapper" key={item}>
                  <img className="offer__image" src={item} alt="Photo studio" />
                </div>
              )
            )}
          </div>
        </div>
        <div className="offer__container container">
          <div className="offer__wrapper">
            <div className="offer__mark">
              <span>Premium</span>
            </div>
            <div className="offer__name-wrapper">
              <h1 className="offer__name">
                  Beautiful &amp; luxurious studio at great location
              </h1>
              <button className={isFavorite ? 'place-card__bookmark-button place-card__bookmark-button--active button' : 'place-card__bookmark-button button'} type="button">
                <svg className="place-card__bookmark-icon" width="18" height="19">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
              </button>
            </div>
            <div className="offer__rating rating">
              <div className="offer__stars rating__stars">
                <span style={{width: `${getRoundNumber(rating)}0%`}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="offer__rating-value rating__value">{rating}</span>
            </div>
            <ul className="offer__features">
              <li className="offer__feature offer__feature--entire">
                {getNewStr(type)}
              </li>
              <li className="offer__feature offer__feature--bedrooms">
                {bedrooms > 1 ? `${bedrooms} Bedrooms` : `${bedrooms} Bedroom`}
              </li>
              <li className="offer__feature offer__feature--adults">
                {maxAdults > 1 ? `Max ${maxAdults} adults` : `Max ${maxAdults} adult`}
              </li>
            </ul>
            <div className="offer__price">
              <b className="offer__price-value">&euro;{price}</b>
              <span className="offer__price-text">&nbsp;night</span>
            </div>
            <div className="offer__inside">
              <h2 className="offer__inside-title">What&apos;s inside</h2>
              <ul className="offer__inside-list">
                {goods.map((item) =>
                  (
                    <li className="offer__inside-item" key={item}>
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="offer__host">
              <h2 className="offer__host-title">Meet the host</h2>
              <div className="offer__host-user user">
                <div className={`offer__avatar-wrapper ${host.isPro ? 'offer__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                  <img className="offer__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
                </div>
                <span className="offer__user-name">
                  {host.name}
                </span>
                <span className="offer__user-status">
                  {host.isPro ? 'Pro' : ''}
                </span>
              </div>
              <div className="offer__description">
                <p className="offer__text">
                  {description}
                </p>
                <p className="offer__text">
                  {description}
                </p>
              </div>
            </div>

            <ReviewsForm reviews={reviews}/>

          </div>
        </div>
        <Map className='offer__map' city={offers[0].city} offers={offers}/>
      </section>
      <div className="container">

        <PlacesNear offers={offers} />

      </div>
    </main>

  );
}

