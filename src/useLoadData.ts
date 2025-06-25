import { useEffect } from "react"
import { fetchProducts } from "./redux/products"
import type { AppDispatch } from "./redux/state"

export const useLoadData = (dispatch:AppDispatch):void => {
    useEffect(() => {
        const loadProducts = async () => {
          try {
            await dispatch(fetchProducts()).unwrap()
          } catch (err) {
            console.error('Failed to load products:', err)
          }
        }
        loadProducts()
      }, [dispatch])
}