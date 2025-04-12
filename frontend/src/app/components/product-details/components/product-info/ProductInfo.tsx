'use client'

import { useState } from 'react';
import styles from './ProductInfo.module.scss';
import { Product } from '../../interfaces/product-details/ProductDetails.interface';
import Rating from '@/app/shared-components/rating/Rating';
import Button from '@/app/shared-components/button/Button';
import QuantityControl from '../quantity-control/QuantityControl';
import ProductPrice from '@/app/shared-components/product-price/ProductPrice';
import ColorSelector from '@/app/shared-components/select-color/SelectColor';
import SizeSelector from '@/app/shared-components/size-selector/SizeSelector';

interface ProductInfoProps {
  product: Product;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0].name);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);

  return (
    <article className={styles.product}>
      <h2 className={styles.product__title}>{product.name}</h2>
      <Rating rating={product.rating} size="extra-medium" />
      <ProductPrice price={product.price} discountPrice={product.discountPrice} discount={product.discount} />
      <p className={styles.product__description}>{product.description}</p>

      <ColorSelector
        colors={product.colors}
        selectedColor={selectedColor}
        onColorChange={setSelectedColor}
      />
      <SizeSelector
        sizes={product.sizes}
        selectedSize={selectedSize}
        onSizeChange={setSelectedSize}
      />

      <section className={styles.product__addToCart}>
        <QuantityControl
          quantity={quantity}
          setQuantity={setQuantity}
        />
        <Button type='primary' text='Add to Cart' size='extra-large' />
      </section>
    </article>
  );
};

export default ProductInfo;