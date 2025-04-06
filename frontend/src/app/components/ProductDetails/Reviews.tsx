// src/components/ProductDetails/Reviews.tsx
import React from 'react';
import styles from './Reviews.module.scss';
import ReviewCard from './ReviewCard';
import { Review } from './productdetails.interface';

interface ReviewsProps {
  reviews: Review[];
}

const Reviews: React.FC<ReviewsProps> = ({ reviews }) => {
  return (
    <div className={styles.reviews}>
      <h2>Rating & Reviews</h2>
      <div className={styles.filters}>
        <button>All</button>
        <button>Latest</button>
        <button>Write a Review</button>
      </div>
      <div className={styles.reviewList}>
        {reviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>
      <button className={styles.loadMore}>Load More Reviews</button>
    </div>
  );
};

export default Reviews;