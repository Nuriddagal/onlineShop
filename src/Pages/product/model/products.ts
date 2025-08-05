import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/App/model/state';
import type { Products, ProductsState } from '@/Types';

// Асинхронный запрос
export const fetchProducts = createAsyncThunk<Products, void, { state: RootState }>(
    'products/fetch',
    async () => {
        try {
            const response = await fetch('https://dummyjson.com/products?limit=0');
            if (!response.ok) throw new Error('Server error!');
            return await response.json();
        } catch (err) {
            throw new Error(err instanceof Error ? err.message : 'Unknown error occurred');
        }
    }
);

const initialState: ProductsState = {
    data: null,
    loading: false,
    error: null,
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchProducts.pending, state => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Products>) => {
                state.data = action.payload;
                state.loading = false;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.error = action.error.message || 'Unknown error occurred';
                state.loading = false;
            });
    },
});

export default productsSlice.reducer;
