import Link from 'next/link';
import styles from './Banner.module.scss';

const Banner = () => {
  return (
    <header className={styles.banner}>
      <p>Sign up and get 20% off to your first order.{' '} <Link href="/" passHref className={styles.signup}>Sign Up Now</Link></p>

      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" aria-label="Close icon" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
    </header>
  );
};

export default Banner;
