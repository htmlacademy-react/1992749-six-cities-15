import { Fragment, JSX, ReactEventHandler, useState } from 'react';
import { Reviews } from '../../mocks/types';
import { getAuthorizationStatus } from '../../authorizationStatus';
import { AuthorizationStatus } from '../../const';

const rating = [
  {value: 5, label: 'perfect'},
  {value: 4, label: 'good'},
  {value: 3, label: 'not bad'},
  {value: 2, label: 'badly'},
  {value: 1, label: 'terrible'},
];

type ReviewsFormProps = {
  reviews: Reviews;
}

export default function ReviewsForm({reviews}: ReviewsFormProps): JSX.Element {
  const authorizationStatus = getAuthorizationStatus();
  const {user} = reviews[0];

  const [comment, setReview] = useState({rating: 0, review: ''});

  const handleChange: ReactEventHandler<HTMLInputElement | HTMLTextAreaElement> = (evt) =>{
    const {name, value} = evt.currentTarget;
    setReview({...comment, [name]: value});
  };

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
      <ul className="reviews__list">
        <li className="reviews__item">
          <div className="reviews__user user">
            <div className="reviews__avatar-wrapper user__avatar-wrapper">
              <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
            </div>
            <span className="reviews__user-name">
              {user.name}
            </span>
          </div>
          <div className="reviews__info">
            <div className="reviews__rating rating">
              <div className="reviews__stars rating__stars">
                <span style={{width: '80%'}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <p className="reviews__text">
                        A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
            </p>
            <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
          </div>
        </li>
      </ul>

      {authorizationStatus === AuthorizationStatus.Auth ? (
        <form className="reviews__form form" action="#" method="post">
          <label className="reviews__label form__label" htmlFor="review">Your review</label>
          <div className="reviews__rating-form form__rating">
            {rating.map(({value, label}) => (
              <Fragment key={value}>
                <input
                  className="form__rating-input visually-hidden"
                  name="rating"
                  defaultValue={value}
                  id={`${value}-stars`}
                  type="radio"
                  onChange={handleChange}
                />
                <label
                  htmlFor={`${value}-stars`}
                  className="reviews__rating-label form__rating-label"
                  title={label}
                >
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </label>
              </Fragment>
            ))}
          </div>
          <textarea defaultValue={''} onChange={handleChange}
            className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"
          >
          </textarea>
          <div className="reviews__button-wrapper">
            <p className="reviews__help">
            To submit review please make sure to set{' '}
              <span className="reviews__star">rating</span> and describe
            your stay with at least{' '}
              <b className="reviews__text-amount">50 characters</b>.
            </p>
            <button
              className="reviews__submit form__submit button"
              type="submit"
              disabled={comment.review.length < 50 || comment.rating === 0}
            >
              Submit
            </button>
          </div>
        </form>
      ) : null}

    </section>

  );
}

