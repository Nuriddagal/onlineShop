import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./products"

import { useDispatch } from "react-redux";

export const store = configureStore({
    reducer:{
        products: productReducer,
    },
     middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }),
  devTools: true
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()