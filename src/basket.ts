import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { Basket, Product } from "./Types";

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
      }
    }
  }
    }
  )

export const {addToBasket, removeFromBasket} = basketSlice.actions
export default basketSlice.reducer