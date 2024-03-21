import { CITIES } from '../const';

type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type Review = {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: number;
}

export type Reviews = Review[];

type Host = {
  avatarUrl: string;
  isPro: boolean;
  name: string;
}

export type City = {
  location: Location;
  name: string;
}

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: string[];
  host: Host;
  images: string[];
  maxAdults: number;
}

export type Offers = Offer[];

export type CityName = (typeof CITIES)[number]['name'];

export type OffersState = {
  city: CityName;
  offers: Offer[];
}
