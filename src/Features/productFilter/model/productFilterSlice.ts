import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type ProductFilterState = {
    chosenFilter: string[];
};

const initialState: ProductFilterState = {
    chosenFilter: [],
};

const productFilterSlice = createSlice({
    name: 'productFilter',
    initialState,
    reducers: {
        toggleFilter(state, action: PayloadAction<string>) {
            const value = action.payload;
            if (state.chosenFilter.includes(value)) {
                state.chosenFilter = state.chosenFilter.filter((item) => item !== value);
            } else {
                state.chosenFilter.push(value);
            }
        },
        resetFilters(state) {
            state.chosenFilter = [];
        },
        setFilters(state, action: PayloadAction<string[]>) {
            state.chosenFilter = action.payload;
        },
    },
});

export const { toggleFilter, resetFilters, setFilters } = productFilterSlice.actions;
export default productFilterSlice.reducer;
