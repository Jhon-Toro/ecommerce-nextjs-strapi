'use client';

import { useState, useEffect, useMemo } from 'react';
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

const PRODUCTS_PER_PAGE = 9;

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { category, priceRange, colors, sizes, dressStyles } = useFilterStore();
  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;
  const currentProducts = useMemo(
    () => products.slice(startIndex, endIndex),
    [products, startIndex, endIndex]
  );

  const filterCriteria: FilterCriteria = {
    category,
    priceRange,
    colors,
    sizes,
    dressStyles,
  };

  useEffect(() => {
    const filterPipeline = createFilterPipeline(filterCriteria);
    const filteredProducts = productsData.filter((product) =>
      filterPipeline.every((filter) => filter(product))
    );
    setProducts(filteredProducts);
  }, [category, priceRange, colors, sizes, dressStyles]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className={styles.products}>
      <section className={styles.products__filters}>
        <Filters />
      </section>
      <section className={styles.products__cards}>
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