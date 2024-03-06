import { JSX } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

export default function NotFoundScreen(): JSX.Element {
  return (
    <section >
      <header >
        <h1>Здесь наверное будет header чуть позже</h1>
      </header>

      <section >
        <h1>404. Page not found</h1>
        <Link to={`${AppRoute.Root}`}>Вернуться на главную</Link>
      </section>
    </section>
  );
}

