// app/providers/router/AppRoute.tsx
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from './routeConfig';
import type { AppRouteProps } from '../../Types';

export function AppRoute({ productPage, basketState }: AppRouteProps) {
  const routes = routeConfig({ productPage, basketState });

  return (
    <Routes>
      {routes.map((route, index) => (
        <Route
          key={`route-${index}`}
          path={route.path}
          element={route.element}
        />
      ))}
    </Routes>
  );
}
