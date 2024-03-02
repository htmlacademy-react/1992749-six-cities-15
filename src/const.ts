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

export const CLASS_MAIN_SCREEN = 'cities__card place-card';
export const CLASS_OFFER_SCREEN = 'near-places__card place-card';
