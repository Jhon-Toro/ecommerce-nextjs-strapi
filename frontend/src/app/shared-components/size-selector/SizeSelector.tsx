import React from 'react';
import styles from './SizeSelector.module.scss';
import Button from '../button/Button';

interface SizeSelectorProps {
  sizes: string[];
  selectedSize: string;
  onSizeChange: (size: string) => void;
}

const SizeSelector: React.FC<SizeSelectorProps> = ({ sizes, selectedSize, onSizeChange }) => {
  return (
    <section className={styles.sizes}>
      <p>Choose Size</p>
      <div className={styles.sizes__options}>
        {sizes.map((size) => (
          <Button
            key={size}
            type="tertiary"
            text={size}
            size="extra-small-product"
            margin="zero"
            className={`${styles.sizes__button} ${selectedSize === size ? styles.selected : ''}`}
            onClick={() => onSizeChange(size)}
          />
        ))}
      </div>
    </section>
  );
};

export default SizeSelector;