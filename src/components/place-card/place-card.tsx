import { JSX } from 'react';
import { Offer } from '../../mocks/types';
import { getNewStr, getRoundNumber } from '../../utils';
import { Link } from 'react-router-dom';


type PlaceCardProps = {
  offer: Offer;
  classCard: string;
  handleHover?: (offer?: Offer) => void;
}

export default function PlaceCard({offer, classCard, handleHover}: PlaceCardProps): JSX.Element {
  const {price, title, type, rating, images, isPremium, isFavorite, id} = offer;

  const handleMouseOn = () => {
    if (handleHover) {
      handleHover(offer);
    }
  };
  const handleMouseOff = () => {
    if (handleHover) {
      handleHover();
    }
  };

  return (
    <article className={classCard} onMouseEnter={handleMouseOn} onMouseLeave={handleMouseOff}>
      {!isPremium ? '' :
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}

      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={images[0]} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={isFavorite ? 'place-card__bookmark-button place-card__bookmark-button--active button' : 'place-card__bookmark-button button'} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">
              {isFavorite ? 'In bookmarks' : 'To bookmarks'}
            </span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${getRoundNumber(rating)}0%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>.
        </h2>
        <p className="place-card__type">{getNewStr(type)}</p>
      </div>
    </article>
  );
}

