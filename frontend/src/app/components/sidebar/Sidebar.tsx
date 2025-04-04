'use client';

import Link from 'next/link';
import styles from './Sidebar.module.scss';
import type { SidebarProps } from './interfaces/sidebar-props/SidebarProps.interface';
import { XMarkIcon } from '@heroicons/react/16/solid';

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar, menu }) => {
  return (
    <dialog className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      <strong className={styles.navbar__brand}>SHOP.COM</strong>
      <XMarkIcon className={styles.sidebar__close} onClick={toggleSidebar} />
      <ul className={styles.sidebar__list}>
        {menu.map((item, index) => (
          <li key={index} className={styles.sidebar__item}>
            <Link href={item.href} className={styles.sidebar__link} onClick={toggleSidebar}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </dialog>
  );
};

export default Sidebar;
