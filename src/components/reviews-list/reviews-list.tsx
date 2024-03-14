import { Reviews } from '../../types/types';
import ReviewsItem from '../reviews-item/reviews-item';


type ReviewsListProps = {
  reviews: Reviews;
}

export default function ReviewsList({reviews}: ReviewsListProps) {

  return (
    reviews.map((review) =>
      (
        <ul className="reviews__list" key={review.id}>
          <ReviewsItem review={review} />
        </ul>
      )
    )
  );
}
