import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/16/solid';
import { SliderButtonProps } from './interfaces/SliderButtonProps.interface';
import styles from './SliderButton.module.scss';

const SliderButton: React.FC<SliderButtonProps> = ({ direction, onClick, disabled }) => {
  return (
    <button
      className={`${styles.arrow} ${direction === 'left' ? styles.arrowLeft : styles.arrowRight}`}
      onClick={onClick}
      disabled={disabled}
    >
      {direction === 'left' ? <ArrowLeftIcon className={styles.arrow__size}/> : <ArrowRightIcon className={styles.arrow__size}/>}
    </button>
  );
};

export default SliderButton;
