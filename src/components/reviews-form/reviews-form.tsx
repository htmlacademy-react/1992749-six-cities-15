import { Fragment, JSX, ReactEventHandler, useState } from 'react';
import { Reviews } from '../../types/types';
import { getAuthorizationStatus } from '../../authorizationStatus';
import { AuthorizationStatus } from '../../const';
import ReviewsList from '../reviews-list/reviews-list';


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

  const [comment, setReview] = useState({rating: 0, review: ''});

  const handleChange: ReactEventHandler<HTMLInputElement | HTMLTextAreaElement> = (evt) =>{
    const {name, value} = evt.currentTarget;
    setReview({...comment, [name]: value});
  };

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>

      <ReviewsList reviews={reviews} />

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

