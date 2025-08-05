import { configureStore } from '@reduxjs/toolkit';
import type { Basket } from '../../Types';
import { basketMiddleware, basketReducer, initialBasketState } from '@/Pages/basket/model/basket';
import { useDispatch } from 'react-redux';
import productReducer from '@/Pages/product/model/products';
import filterReducer from '@/Features/productFilter/model/productFilterSlice';

const loadState = (): Basket => {
    try {
        const serializedState = localStorage.getItem('basket');
        if (serializedState === null) {
            return initialBasketState;
        }
        return JSON.parse(serializedState);
    } catch (e) {
        console.warn('Failed to load state from localStorage', e);
        return initialBasketState;
    }
};

export const store = configureStore({
    reducer: {
        products: productReducer,
        basket: basketReducer,
        filter: filterReducer,
    },
    preloadedState: {
        basket: loadState(),
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                // Игнорируем несериализуемые значения (если есть)
                ignoredActions: ['some/non-serializable-action'],
                ignoredPaths: ['some.non.serializable.path'],
            },
        }).concat(basketMiddleware),
    devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
