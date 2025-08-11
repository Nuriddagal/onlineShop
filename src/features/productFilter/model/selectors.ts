import type { RootState } from '../../../app/model/state';

export const selectChosenFilter = (state: RootState) => state.filter.chosenFilter;

export const isFilterSelected = (value: string) => (state: RootState) =>
    state.filter.chosenFilter.includes(value);
