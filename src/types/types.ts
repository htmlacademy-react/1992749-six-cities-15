type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

type Review = {
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

