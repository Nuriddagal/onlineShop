import { useEffect } from 'react';
import type { AppDispatch } from '../model/state';
import { fetchProducts } from '@/Pages/product/model/products';

export const useLoadData = (dispatch: AppDispatch): void => {
  useEffect(() => {
    const loadProducts = async () => {
      try {
        await dispatch(fetchProducts()).unwrap();
      } catch (err) {
        console.error('Failed to load products:', err);
      }
    };
    loadProducts();
  }, [dispatch]);
};
