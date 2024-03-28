import leaflet, { layerGroup } from 'leaflet';
import {City, Offer} from '../../types/types';
import { useMap } from '../hooks/use-map';
import 'leaflet/dist/leaflet.css';
import {useRef, useEffect} from 'react';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';


type MapProps = {
  className?: string;
  city: City;
  offers: Offer[];
  activeOffer?: Offer | null;
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

export default function Map({className, city, offers, activeOffer}: MapProps): JSX.Element {

  const mapContainerRef = useRef<HTMLDivElement>(null);
  const map = useMap({location: city.location, containerRef: mapContainerRef});

  useEffect(() => {
    if (map) {
      map.setView([city.location.latitude, city.location.longitude], city.location.zoom);

    }
  }, [city, map]);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);

      offers.forEach((offer): void => {
        leaflet.marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        }, {
          icon: offer === activeOffer ? activeMarcerIcon : defaultMarkerIcon,
        })
          .addTo(markerLayer);
      });
      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [activeOffer, map, offers]);

  return <section className={`${className} map`} ref={mapContainerRef} />;

}
