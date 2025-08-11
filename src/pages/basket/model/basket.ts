import { createSlice, type Middleware, type PayloadAction } from '@reduxjs/toolkit';

import type { Basket, Product } from '@/Types';

export const initialBasketState: Basket = {
    basket: [],
    counts: {
        totalCount: 0,
        totalPrice: 0,
    },
};

const basketSlice = createSlice({
    name: 'basket',
    initialState: initialBasketState,
    reducers: {
        addToBasket(state, action: PayloadAction<Product>) {
            if (action.payload.title in state.counts) {
                state.counts[action.payload.title] += 1;
                state.counts.totalCount += 1;
                state.counts.totalPrice += Math.round(action.payload.price);
            } else {
                state.basket = [...state.basket, action.payload];
                state.counts[action.payload.title] = 1;
                state.counts.totalCount += 1;
                state.counts.totalPrice += Math.round(action.payload.price);
            }
        },
        removeFromBasket(state, action: PayloadAction<Product>) {
            if (action.payload.title in state.counts && state.counts[action.payload.title] !== 1) {
                state.counts[action.payload.title] -= 1;
                state.counts.totalCount -= 1;
                state.counts.totalPrice -= Math.round(action.payload.price);
            } else {
                const removeId: number = state.basket.findIndex(
                    item => item.id === action.payload.id
                );
                state.basket.splice(removeId, 1);
                state.counts.totalCount -= state.counts[action.payload.title];
                state.counts.totalPrice -=
                    Math.round(action.payload.price) * state.counts[action.payload.title];
                delete state.counts[action.payload.title];
            }
        },
        deleteFromBasket(state, action: PayloadAction<Product>) {
            const removeId: number = state.basket.findIndex(item => item.id === action.payload.id);
            state.basket.splice(removeId, 1);
            state.counts.totalCount -= state.counts[action.payload.title];
            state.counts.totalPrice -=
                Math.round(action.payload.price) * state.counts[action.payload.title];
            delete state.counts[action.payload.title];
        },
    },
});

export const basketMiddleware: Middleware<object, { basket: Basket }> = store => next => action => {
    // 1. Получаем текущее состояние ДО обработки действия
    const preActionState = store.getState().basket;

    // 2. Пропускаем действие через редюсеры
    const result = next(action);

    // 3. Получаем новое состояние ПОСЛЕ обработки действия
    const postActionState = store.getState().basket;

    // 4. Сохраняем ТОЛЬКО если состояние действительно изменилось
    if (preActionState !== postActionState) {
        try {
            localStorage.setItem('basket', JSON.stringify(postActionState));
        } catch (e) {
            console.error('Failed to save basket', e);
        }
    }

    return result;
};

export const { addToBasket, removeFromBasket, deleteFromBasket } = basketSlice.actions;
export const basketReducer = basketSlice.reducer;
