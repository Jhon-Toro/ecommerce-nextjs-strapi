'use client'

import React, { useState } from 'react';
import styles from './ProductInfo.module.scss';
import { Product } from './productdetails.interface';
import Rating from '@/app/shared-components/rating/Rating';
import Button from '@/app/shared-components/button/Button';

interface ProductInfoProps {
  product: Product;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0].name);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);

  return (
    <article className={styles.productInfo}>
      <h1 className={styles.title}>{product.name}</h1>
        <Rating rating={product.rating} size="extra-medium"/>
      <div className={styles.price}>
        <span className={styles.discountedPrice}>${product.discountedPrice}</span>
        {product.discount && <span className={styles.discount}>{product.discount} OFF</span>}
      </div>
      <p className={styles.description}>{product.description}</p>

      <div className={styles.colors}>
        <p>Select Colors</p>
        <div className={styles.colorOptions}>
          {product.colors.map((color) => (
            <button
              key={color.name}
              className={`${styles.colorButton} ${selectedColor === color.name ? styles.selected : ''}`}
              style={{ backgroundColor: color.hex }}
              onClick={() => setSelectedColor(color.name)}
            />
          ))}
        </div>
      </div>

      <div className={styles.sizes}>
        <p>Choose Size</p>
        <div className={styles.sizeOptions}>
          {product.sizes.map((size) => (
            // <button
            //   key={size}
            //   className={`${styles.sizeButton} ${selectedSize === size ? styles.selected : ''}`}
            //   onClick={() => setSelectedSize(size)}
            // >
            //   {size}
            // </button>
            <Button key={size} type='tertiary' text={size} size='extra-small-product'/>
          ))}
        </div>
      </div>

      <div className={styles.addToCart}>
        <div className={styles.quantity}>
          <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>
        <Button type='primary' text='Add to Cart' size='extra-large'/>
      </div>
    </article>
  );
};

export default ProductInfo;