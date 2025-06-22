import { createSlice, type Middleware, type PayloadAction } from "@reduxjs/toolkit";

import type { Basket, Product } from "../Types";


const initialState: Basket = {
  basket: [],
  counts: {}
}
const basketSlice = createSlice({
  name:"basket",
  initialState,
  reducers: {
    addToBasket(state, action: PayloadAction<Product>){
      if(action.payload.title in state.counts ){
        state.counts[action.payload.title] += 1;
      }else{
        state.basket = [...state.basket, action.payload]
        state.counts[action.payload.title] = 1;
      } 
    },
    removeFromBasket(state, action: PayloadAction<Product>){
      if(action.payload.title in state.counts && state.counts[action.payload.title] !== 1) {
        state.counts[action.payload.title] -= 1
      } else{
        const removeId: number = state.basket.findIndex(item => item.id === action.payload.id)
        state.basket.splice(removeId, 1)
        delete state.counts[action.payload.title]
      }
    }
  }
    }
  )

export const basketMiddleware: Middleware<{}, {basket: Basket}> = 
  (store) => (next) => (action) => {
    const result = next(action);
     if (typeof action === 'object' && action && 'type' in action) {
    if (typeof action.type === 'string' && action.type.startsWith('basket/')) {
      try {
        const basketState = store.getState().basket;
        localStorage.setItem('basket', JSON.stringify(basketState));
      } catch (e) {
        console.error('Failed to save basket', e);
      }
    }
  }
    return result;
  };

export const {addToBasket, removeFromBasket} = basketSlice.actions
export default basketSlice.reducer