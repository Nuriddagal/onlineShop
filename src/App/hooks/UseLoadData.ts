import { useEffect } from 'react';
import type { AppDispatch } from '@/App/model/state';
import { fetchProducts } from '@/pages/product/model/products';

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
