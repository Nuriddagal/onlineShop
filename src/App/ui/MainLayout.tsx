// src/components/MainLayout.tsx

import type { Dispatch, SetStateAction } from 'react';
import { Filter } from '@/Features/productFilter/ui/Filter';
import { Header } from '@/widgets/header/ui/header';
import { AppRoute } from '../providers/AppRoute';
import { useSelector } from 'react-redux';
import { selectChosenFilter } from '@/Features/productFilter/model/selectors';
import type { Counts, Product } from '@/Types';
import type { NavigateFunction } from 'react-router';

interface Props {
    navigate: NavigateFunction;
    counts: Counts;
    wrapperRef: React.RefObject<HTMLElement | null>;
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
    wrapperRef,
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
    return (
        <>
            <Header navigate={navigate} counts={counts} setIsFilterOpen={setIsFilterOpen} />
            <main ref={wrapperRef} className="wrapper">
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
