import { useState } from "react"

export function useProductFilter(initialFilters: string[] = []) {
  const [chosenFilter, setChosenFilter] = useState<string[]>(initialFilters)

  const isSelected = (value: string) => chosenFilter.includes(value)

  const toggleFilter = (value: string) => {
    setChosenFilter((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    )
  }

  const resetFilters = () => setChosenFilter([])

  return {
    chosenFilter,
    isSelected,
    toggleFilter,
    resetFilters,
    setChosenFilter, // оставим для гибкости
  }
}
