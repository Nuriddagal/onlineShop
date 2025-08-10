import { Routes, Route } from 'react-router-dom';
import { routeConfig } from '@/app/providers/routeConfig';
import type { AppRouteProps } from '@/Types';
import type { FC } from 'react';

export const AppRoute: FC<AppRouteProps> = ({ productPage, basketState }: AppRouteProps) => {
    const routes = routeConfig({ productPage, basketState });

    return (
        <Routes>
            {routes.map((route, index) => (
                <Route key={`route-${index}`} path={route.path} element={route.element} />
            ))}
        </Routes>
    );
};
