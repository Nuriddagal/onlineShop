import type { RouteObject } from 'react-router-dom';

import { ProductPage } from '../../pages/product/ProductPage';
import type { BasketState, ProductPageProps } from '../../Types';
import { Basket } from '@/pages/basket/Basket';
import { Dashboard } from '@/pages/dashboard/Dashboard';

export const routeConfig = (props: {
    productPage: ProductPageProps;
    basketState: BasketState;
}): RouteObject[] => [
    {
        path: '/',
        element: <ProductPage {...props.productPage} />,
    },
    {
        path: '/basket',
        element: <Basket {...props.basketState} />,
    },
    {
        path: '/dashboard/:dashboardId',
        element: <Dashboard />,
    },
];
