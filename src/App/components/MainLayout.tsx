import type { Dispatch, SetStateAction } from 'react';
import { Filter } from '@/Features/productFilter/Filter';
import { Header } from '@/widgets/header/Header';
import { AppRoute } from '@/App/providers/AppRoute';
import { useSelector } from 'react-redux';
import { selectChosenFilter } from '@/Features/productFilter/model/selectors';
import type { Counts, Product } from '@/Types';
import type { NavigateFunction } from 'react-router';
import styles from '../styles/app.module.css';
import { useLocation } from 'react-router';

interface Props {
    navigate: NavigateFunction;
    counts: Counts;
    visibleProducts: number;
    products: Product[];
    loadMoreRef: React.RefObject<HTMLDivElement | null>;
    addTo: (p: Product) => void;
    basket: Product[] | [];
    removeFrom: (p: Product) => void;
    deleteFrom: (p: Product) => void;
    setIsFilterOpen: Dispatch<SetStateAction<boolean>>;
    isFilterOpen: boolean;
    categories: string[];
}

export function MainLayout({
    navigate,
    counts,
    visibleProducts,
    products,
    loadMoreRef,
    addTo,
    basket,
    removeFrom,
    deleteFrom,
    setIsFilterOpen,
    isFilterOpen,
    categories,
}: Props) {
    const chosenFilter: string[] = useSelector(selectChosenFilter);
    const location = useLocation();
    return (
        <>
            <Header navigate={navigate} counts={counts} setIsFilterOpen={setIsFilterOpen} />
            <main
                className={`${styles.wrapper} ${
                    location.pathname === '/basket' ? styles.basketBg : ''
                }`}
            >
                <AppRoute
                    productPage={{ visibleProducts, products, loadMoreRef, addTo, chosenFilter }}
                    basketState={{ basket, removeFrom, addTo, deleteFrom, counts }}
                />
                <Filter categorys={categories} isFilterOpen={isFilterOpen} />
            </main>
            {window.innerWidth <= 558 && <footer>footer</footer>}
        </>
    );
}
