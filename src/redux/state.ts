import { configureStore} from "@reduxjs/toolkit";

import productReducer from "./products"
import basketReducer, { basketMiddleware, initialBasketState } from "./basket"

import { useDispatch } from "react-redux";
import type { Basket } from "../Types";

const loadState = ():Basket => {
  try {
    const serializedState = localStorage.getItem('basket');
    if (serializedState === null) {
      return  initialBasketState ;
    }
    return  JSON.parse(serializedState) ;
  } catch (e) {
    console.warn('Failed to load state from localStorage', e);
    return initialBasketState;
  }
};



export const store = configureStore({
    reducer:{
        products: productReducer,
        basket: basketReducer
    },
    preloadedState: {
      basket: loadState()
    },
     middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Игнорируем несериализуемые значения (если есть)
        ignoredActions: ['some/non-serializable-action'],
        ignoredPaths: ['some.non.serializable.path']
      }
    }).concat(basketMiddleware),
  devTools: true
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()