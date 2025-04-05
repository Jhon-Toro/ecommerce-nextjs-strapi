import Rating from '@/app/shared-components/rating/Rating';
import styles from './HappyCard.module.scss';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

interface HappyCardProps {
  name: string;
  rating: number;
  text: string;
}
const HappyCard: React.FC<HappyCardProps> = ({ name, rating, text }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <Rating rating={rating} size="medium" />
        <span className={styles.name}>{name} <CheckCircleIcon className={styles.name__check}/></span>
      </div>
      <p className={styles.text}>{`"${text}"`}</p>
    </div>
  );
};

export default HappyCard;