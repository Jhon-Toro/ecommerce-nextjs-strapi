import styles from './ProductPrice.module.scss';

interface ProductPriceProps {
    price: number;
    discountPrice?: number;
    discount?: number;
    currency?: string;
}

const ProductPrice: React.FC<ProductPriceProps> = ({ price, discountPrice, discount, currency = 'USD' }) => {
    const formatPrice = (value: number) =>
        new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(value);

    return (
        <p className={styles.price}>
            {discountPrice ? (
                <>
                    {formatPrice(discountPrice)}{' '}
                    <span className={styles.price__discount}>{formatPrice(price)}</span>
                </>
            ) : (
                formatPrice(price)
            )}
            {discount && <span className={styles.discount}>-{discount}%</span>}
        </p>
    );
};

export default ProductPrice;