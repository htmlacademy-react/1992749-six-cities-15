import leaflet from 'leaflet';
import {City, Offer} from '../../types/types';
import { useMap } from '../hooks/use-map';
import 'leaflet/dist/leaflet.css';
import {useRef, useEffect} from 'react';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';


type MapProps = {
  city: City;
  offers: Offer[];
  activeOfferId?: Offer | null;
};

const defaultMarkerIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const activeMarcerIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

export default function Map({city, offers, activeOfferId}: MapProps): JSX.Element {

  const mapContainerRef = useRef<HTMLDivElement>(null);
  const map = useMap({location: city.location, containerRef: mapContainerRef});

  useEffect((): void => {
    if (map) {
      offers.forEach((offer): void => {
        leaflet.marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        }, {
          icon: offer === activeOfferId ? activeMarcerIcon : defaultMarkerIcon,
        })
          .addTo(map);
      });
    }
  }, [activeOfferId, map, offers]);

  return <section className="cities__map map" ref={mapContainerRef} />;

}
