// src/hooks/useAppLogic.ts
import { useState, useRef, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { useInfiniteScroll } from './useInfiniteScroll';
import { useLoadData } from '../useLoadData';
import { addToBasket, deleteFromBasket, removeFromBasket } from '../redux/basket';
import type { Product } from '../Types';
import type { RootState } from '../redux/state';

export function useAppLogic() {
  const [visibleProducts, setVisibleProducts] = useState(30);
  const [chosenFilter, setChosenFilter] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const wrapperRef = useRef<HTMLElement>(null);

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data, loading, error } = useSelector((state: RootState) => state.products);
  const { basket, counts } = useSelector((state: RootState) => state.basket);

  const loadMore = () => {
    setVisibleProducts(prev => Math.min(prev + 30, data?.products?.length || 0));
  };

  const { loadMoreRef } = useInfiniteScroll(loadMore, loading);

  useLoadData(dispatch);

  useEffect(() => {
    if (location.pathname === "/basket") {
      wrapperRef.current?.classList.add("basket-wrapper");
    } else {
      wrapperRef.current?.classList.remove("basket-wrapper");
    }
  }, [location]);

  const addTo = (product: Product) => dispatch(addToBasket(product));
  const removeFrom = (product: Product) => dispatch(removeFromBasket(product));
  const deleteFrom = (product: Product) => dispatch(deleteFromBasket(product));

  return {
    wrapperRef,
    visibleProducts,
    chosenFilter,
    isFilterOpen,
    setChosenFilter,
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
