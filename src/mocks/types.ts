type Host = {
  avatarUrl: string;
  isPro: boolean;
  name: string;
}

type City = {
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  name: string;
}

type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type Offer = {
  bedrooms: number;
  city: City;
  description: string;
  goods: string[];
  host: Host;
  id: string;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: Location;
  maxAdults: number;
  price: number;
  rating: number;
  title: string;
  type: string;
}

export type Offers = Offer[];