import { create } from 'zustand';

interface FilterState {
  category: string[];
  priceRange: [number, number];
  colors: string[];
  sizes: string[];
  isFiltersOpen: boolean;
  dressStyles: string[];
  setCategory: (category: string[]) => void;
  setPriceRange: (range: [number, number]) => void;
  setColors: (colors: string[]) => void;
  setSizes: (sizes: string[]) => void;
  setDressStyles: (styles: string[]) => void;
  setIsFiltersOpen: (isOpen: boolean) => void;
  resetFilters: () => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  category: [],
  priceRange: [50, 200],
  colors: [],
  sizes: [],
  dressStyles: [],
  isFiltersOpen: true,
  setCategory: (category) => set({ category }),
  setPriceRange: (priceRange) => set({ priceRange }),
  setColors: (colors) => set({ colors }),
  setSizes: (sizes) => set({ sizes }),
  setDressStyles: (dressStyles) => set({ dressStyles }),
  setIsFiltersOpen: (isFiltersOpen) => set({ isFiltersOpen }),
  toggleFilters: () => set((state) => ({ isFiltersOpen: !state.isFiltersOpen })),
  resetFilters: () =>
    set({
      category: [],
      priceRange: [50, 200],
      colors: [],
      sizes: [],
      dressStyles: [],
      isFiltersOpen: true,
    }),
}));