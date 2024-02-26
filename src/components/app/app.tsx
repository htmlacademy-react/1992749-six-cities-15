import { JSX } from 'react';
import MainScreen from '../../pages/main-screen/main-screen';
import { AppRoute } from '../../const';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginScreen from '../../pages/login-screen/login-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import Layout from '../layout/layout';
import { getAuthorizationStatus } from '../../authorizationStatus';
import { Offers } from '../../mocks/types';

type AppScreenProps = {
  numberOfCards: number;
  offers: Offers;
}

export default function App({numberOfCards, offers}: AppScreenProps): JSX.Element {
  const authorizationStatus = getAuthorizationStatus();

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<Layout />}>
          <Route
            index
            element={<MainScreen numberOfCards={numberOfCards} />}
          />
          <Route
            path={AppRoute.Login}
            element={(
              <PrivateRoute authorizationStatus={authorizationStatus} isReverse>
                <LoginScreen />
              </PrivateRoute>
            )}
          />
          <Route
            path={AppRoute.Favorites}
            element={(
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <FavoritesScreen />
              </PrivateRoute>
            )}
          />
          <Route
            path={AppRoute.Offer}
            element={<OfferScreen />}
          />
          <Route
            path='*'
            element={<NotFoundScreen />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

