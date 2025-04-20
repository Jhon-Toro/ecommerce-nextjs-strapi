'use client';

import { useState, useEffect, useMemo, useRef } from 'react';
import type { Product } from '@/app/shared-components/product/interfaces/Product.interface';
import { useFilterStore } from '@/app/store/filtersStore';
import { FilterCriteria } from './components/types/Products.type';
import { createFilterPipeline } from './helpers/ProductsHelpers';
import ProductCard from '@/app/shared-components/product/ProductCard';
import productsData from '../../../../public/data/all-products.json';
import styles from './Products.module.scss';
import Filters from './components/filters/Filters';
import Divider from '../product-details/components/divider/Divider';
import Pagination from './components/pagination/Pagination';
import useClickOutside from '@/app/hooks/useClickOutside';
import useEscKey from '@/app/hooks/useEscKey';
import clsx from 'clsx';

const PRODUCTS_PER_PAGE = 9;

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { category, priceRange, colors, sizes, dressStyles, isFiltersOpen, setIsFiltersOpen } = useFilterStore();
  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);
  const filtersRef = useRef<HTMLElement>(null);
  const productsRef = useRef<HTMLElement>(null);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;
  const currentProducts = useMemo(
    () => products.slice(startIndex, endIndex),
    [products, startIndex, endIndex]
  );

  useClickOutside(filtersRef, () => {
    if (isFiltersOpen) setIsFiltersOpen(false);
  });

  useEscKey(productsRef, () => {
    setIsFiltersOpen(false);
  }, isFiltersOpen);


  const filterCriteria: FilterCriteria = useMemo(() => ({
    category,
    priceRange,
    colors,
    sizes,
    dressStyles,
  }), [category, priceRange, colors, sizes, dressStyles]);
  
  useEffect(() => {
    const filterPipeline = createFilterPipeline(filterCriteria);
    const filteredProducts = productsData.filter((product) =>
      filterPipeline.every((filter) => filter(product))
    );
    setProducts(filteredProducts);
  }, [category, priceRange, colors, sizes, dressStyles, filterCriteria]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <main className={styles.products} ref={productsRef}>
      <section
        ref={filtersRef}
        className={clsx(styles.products__filters, { [styles.filtersOpen]: isFiltersOpen})}
      >
        <Filters />
      </section>
      <section className={styles.products__cards}>
        <h2>Casual</h2>
        <article className={styles.products__cards__product}>
          {currentProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              discountPrice={product.discountPrice}
              rating={product.rating}
              image={product.image}
              discount={product.discount}
            />
          ))}
        </article>
        <Divider />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </section>
    </main>
  );
};

export default Products;