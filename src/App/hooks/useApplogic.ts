// src/hooks/useAppLogic.ts
import { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';

import { useLoadData } from './UseLoadData';

import { useInfiniteScroll } from './useInfinityScroll';

import type { Product } from '../../Types';
import { addToBasket, deleteFromBasket, removeFromBasket } from '@/Pages/basket/model/basket';
import type { RootState } from '../model/state';

export function useAppLogic() {
    const [visibleProducts, setVisibleProducts] = useState(30);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const wrapperRef = useRef<HTMLElement>(null);

    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { data, loading, error } = useSelector((state: RootState) => state.products);
    const { basket, counts } = useSelector((state: RootState) => state.basket);

    const loadMore = () => {
        setVisibleProducts((prev) => Math.min(prev + 30, data?.products?.length || 0));
    };

    const { loadMoreRef } = useInfiniteScroll(loadMore, loading);

    useLoadData(dispatch);

    useEffect(() => {
        if (location.pathname === '/basket') {
            wrapperRef.current?.classList.add('basket-wrapper');
        } else {
            wrapperRef.current?.classList.remove('basket-wrapper');
        }
    }, [location]);

    const addTo = (product: Product) => dispatch(addToBasket(product));
    const removeFrom = (product: Product) => dispatch(removeFromBasket(product));
    const deleteFrom = (product: Product) => dispatch(deleteFromBasket(product));

    return {
        wrapperRef,
        visibleProducts,
        isFilterOpen,
        setIsFilterOpen,
        navigate,
        basket,
        counts,
        data,
        loading,
        error,
        loadMoreRef,
        addTo,
        removeFrom,
        deleteFrom,
    };
}
