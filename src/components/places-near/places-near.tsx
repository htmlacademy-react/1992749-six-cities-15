import { Offers } from '../../types/types';
import PlaceCard from '../place-card/place-card';

const QUANTITY_OFFERS = 3;

type PlacesNearProps = {
  offers: Offers;
}

export default function PlacesNear({offers}: PlacesNearProps): JSX.Element {

  const showCards = offers.slice(0, QUANTITY_OFFERS).map((item) =>
    <PlaceCard offer={item} key={item.id} classCard={'near-places__card place-card'}/>
  );

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {showCards}
      </div>
    </section>
  );
}
