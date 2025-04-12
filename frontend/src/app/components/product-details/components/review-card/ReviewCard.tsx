import { Review } from '../../interfaces/product-details/ProductDetails.interface';
import styles from './ReviewCard.module.scss';

interface ReviewCardProps {
  review: Review;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className={styles.reviewCard}>
      <div className={styles.header}>
        <p className={styles.author}>{review.author}</p>
        <div className={styles.rating}>{'★'.repeat(review.rating)}</div>
      </div>
      <p className={styles.comment}>{review.comment}</p>
      <p className={styles.date}>Posted on {review.date}</p>
    </div>
  );
};

export default ReviewCard;