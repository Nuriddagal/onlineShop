// app/providers/router/routeConfig.tsx
import type { RouteObject } from 'react-router-dom';

import { Basket } from '@/Pages/basket/ui/Basket';
import { Dashboard } from '@/dashboard';
import { ProductPage } from '@/Pages/product/ui/ProductPage';
import type { BasketState, ProductPageProps } from '../../Types';

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
