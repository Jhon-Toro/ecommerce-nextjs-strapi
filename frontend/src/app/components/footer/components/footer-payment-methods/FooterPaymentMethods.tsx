import React from 'react';
import Image from 'next/image';
import styles from './FooterPaymentMethods.module.scss';
import { paymentMethods } from '../../footerData';

const PaymentMethods: React.FC = () => (
  <div className={styles.payment} role="list" aria-label="Accepted Payment Methods">
    {paymentMethods.map((method) => (
      <div key={method.name} role="listitem">
        <Image
          src={method.src}
          alt={method.alt}
          width={66}
          height={49}
          className={styles.payment__icon}
        />
      </div>
    ))}
  </div>
);

export default PaymentMethods;