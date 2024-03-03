export enum AppRoute {
  Login = '/login',
  Root = '/',
  Favorites = '/favorites',
  Offer = '/offer/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum ClassPlaceCard {
  ClassMainScreen = 'cities__card place-card',
  ClassOfferScreen = 'near-places__card place-card'
}
