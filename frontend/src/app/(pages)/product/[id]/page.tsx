// src/pages/product/[id]/page.tsx
import React from 'react';
import ProductInfo from '../../../components/ProductDetails/ProductInfo';
import ProductImages from '../../../components/ProductDetails/ProductImages';
import Reviews from '../../../components/ProductDetails/Reviews';
import mockProduct from '../../../../assets/mockProduct.json';
import styles from './page.module.scss';
import { Product } from '../../../components/ProductDetails/productdetails.interface';

const ProductPage = () => {
  const product: Product = mockProduct;

  return (
    <div className={styles.container}>
      <div className={styles.mainSection}>
        <ProductImages
          mainImage={product.mainImage}
          additionalImages={product.additionalImages}
        />
        <ProductInfo product={product} />
      </div>
      <Reviews reviews={product.reviews} />
    </div>
  );
};

export default ProductPage;