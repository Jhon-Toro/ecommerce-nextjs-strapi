import { StarIcon } from '@heroicons/react/24/solid';
import React from 'react';
import styles from './Rating.module.scss';

interface RatingProps {
  rating: number;
  size: 'small' | 'medium' | 'extra-medium';
}

const Rating: React.FC<RatingProps> = ({ rating, size }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - Math.ceil(rating);

  return (
    <section className={`${styles.rating} ${styles[size]}`}>
      {Array.from({ length: fullStars }, (_, i) => (
        <StarIcon key={`full-${i}`} className={`${styles.star} ${styles.full} ${styles[size]}`} />
      ))}

      {halfStar && (
        <StarIcon
          key="half"
          className={`${styles.star} ${styles.half} ${styles[size]}`}
        />
      )}

      {Array.from({ length: emptyStars }, (_, i) => (
        <StarIcon key={`empty-${i}`} className={`${styles.star} ${styles.empty} ${styles[size]}`} />
      ))}
    </section>
  );
};

export default Rating;
