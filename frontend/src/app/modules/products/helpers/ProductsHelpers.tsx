import { FilterCreator, FilterCriteria, FilterFunction } from "../components/types/Products.type";

export const filterCreators: Record<keyof FilterCriteria, FilterCreator> = {
    category: ({ category }) => (product) =>
      category.length === 0 || category.includes(product.category!),
    priceRange: ({ priceRange }) => (product) =>
      product.price >= priceRange[0] && product.price <= priceRange[1],
    colors: ({ colors }) => (product) =>
      colors.length === 0 || colors.includes(product.color!),
    sizes: ({ sizes }) => (product) =>
      sizes.length === 0 || sizes.includes(product.size!),
    dressStyles: ({ dressStyles }) => (product) =>
      dressStyles.length === 0 || dressStyles.includes(product.dressStyle!),
};

export const createFilterPipeline = (criteria: FilterCriteria): FilterFunction[] =>
    Object.values(filterCreators).map((creator) => creator(criteria));