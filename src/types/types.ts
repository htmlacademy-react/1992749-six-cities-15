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

export type Point = {
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
};

export type Points = Point[];
