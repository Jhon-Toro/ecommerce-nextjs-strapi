import { Product } from './interfaces/product-details/ProductDetails.interface';
import mockProduct from '../../../assets/mockProduct.json';
import ProductInfo from './components/product-info/ProductInfo';
import Reviews from './components/reviews/Reviews';
import styles from './ProductDetails.module.scss';
import ProductImages from './ProductImages';

const ProductDetailts = () => {
  const product: Product = mockProduct;

  return (
    <section className={styles.container}>
      <main className={styles.container__main}>
        <ProductImages
          mainImage={product.mainImage}
          additionalImages={product.additionalImages}
        />
        <ProductInfo product={product} />
      </main>
      <Reviews reviews={product.reviews} />
    </section>
  );
};

export default ProductDetailts;