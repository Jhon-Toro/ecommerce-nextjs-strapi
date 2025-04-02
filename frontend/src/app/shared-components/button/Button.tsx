import React from 'react';
import { ButtonProps } from './interfaces/ButtonProps';
import styles from './Button.module.scss';

const Button: React.FC<ButtonProps> = ({ type, text, onClick, className, size }) => {
  return (
    <button
      className={`${styles.button} ${styles[`button--${type}`]} ${styles[`button--${size}`]} ${className ?? ''}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
