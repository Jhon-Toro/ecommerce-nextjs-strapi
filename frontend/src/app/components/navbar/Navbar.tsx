import Link from 'next/link';
import styles from './Navbar.module.scss';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles['navbar-list']}>
        <li className={styles['navbar-item']}>
          <Link href="/" className={styles['navbar-link']}>
            Home
          </Link>
        </li>
        <li className={styles['navbar-item']}>
          <Link href="/about" className={styles['navbar-link']}>
            About
          </Link>
        </li>
        <li className={styles['navbar-item']}>
          <Link href="/contact" className={styles['navbar-link']}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
