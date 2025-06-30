import { Routes, Route, type RouteObject} from "react-router-dom";

import type { AppRouteProps } from "./Types";

import { Basket } from "./pages/Basket";
import { ProductPage } from "./pages/ProductPage";
import { Dashboard } from "./dashboard";

export function AppRoute({productPage, basketState, dashboard, dashboardId}: AppRouteProps) {
    const routes: RouteObject[] = [
        {path: '/', element: <ProductPage key={location.pathname} {...productPage}/>},
        {path: '/basket', element: <Basket {...basketState}/>},
        {path: `/dashboard&${dashboardId}`, element: <Dashboard {...dashboard}/>},
    ] 
    return (
        <Routes>{routes.map((route, index) => <Route key={`route-${index}`} path={route.path} element={route.element}></Route>)}</Routes>
    )
} 