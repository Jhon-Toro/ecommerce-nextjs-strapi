import type { Product } from './interfaces/Product.interface';
import Image from 'next/image';
import styles from './ProductCard.module.scss';
import Rating from '../rating/Rating';

const ProductCard: React.FC<Product> = ({
  id,
  name,
  price,
  discountPrice,
  rating,
  image,
  discount,
}) => {
  return (
    <article key={id} className={styles.product}>
      <Image src={image} alt={name} width={300} height={298} className={styles.product__image}/>
      <div className={styles.product__info}>
        <h3 className={styles.product__name}>{name}</h3>
        <div className={styles.product__rating}>
          <Rating rating={rating} size='medium'/>
          <p>{rating}/<span className={styles.product__rating_number}>5</span></p>
        </div>
        <p className={styles.product__price}>
          ${discountPrice ? (
            <>
              {price} <span className={styles.product__price_discount}>${discountPrice}</span> 
            </>
          ) : (
            `${price}`
          )}
          {discount && <span className={styles.product__discount}>-{discount}%</span>}
        </p>

      </div>
    </article>
  );
};

export default ProductCard;
