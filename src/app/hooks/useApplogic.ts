import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import { useLoadData } from '@/app/hooks/useLoadData';

import { useInfiniteScroll } from '@/app/hooks/useInfinityScroll';

import type { Product } from '@/Types';
import { addToBasket, deleteFromBasket, removeFromBasket } from '../../pages/basket/model/basket';
import type { RootState } from '@/app/model/state';

export function useAppLogic() {
    const [visibleProducts, setVisibleProducts] = useState(30);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { data, loading, error } = useSelector((state: RootState) => state.products);
    const { basket, counts } = useSelector((state: RootState) => state.basket);

    const loadMore = () => {
        setVisibleProducts(prev => Math.min(prev + 30, data?.products?.length || 0));
    };

    const { loadMoreRef } = useInfiniteScroll(loadMore, loading);

    useLoadData(dispatch);

    const addTo = (product: Product) => dispatch(addToBasket(product));
    const removeFrom = (product: Product) => dispatch(removeFromBasket(product));
    const deleteFrom = (product: Product) => dispatch(deleteFromBasket(product));

    return {
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
