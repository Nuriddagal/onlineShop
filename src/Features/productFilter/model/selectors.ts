import type { RootState } from "../../../App/state"



export const selectChosenFilter = (state: RootState) => state.filter.chosenFilter

export const isFilterSelected = (value: string) => (state: RootState) =>
  state.filter.chosenFilter.includes(value)
