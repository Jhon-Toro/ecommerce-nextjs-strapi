import React from 'react';
import Image from 'next/image';
import styles from './FooterSocialIcons.module.scss';
import { FooterLink } from '../../footerData';

const FooterSocialIcons: React.FC<{ links: FooterLink[] }> = ({ links }) => (
  <div className={styles.social} role="navigation" aria-label="Social Media Links">
    {links.map((link) => (
      <a
        key={link.label}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.social__link}
        aria-label={`Visit our ${link.label} page`}
      >
        <Image
          src={`${link.src}`}
          alt={`${link.label} icon`}
          width={30}
          height={30}
        />
      </a>
    ))}
  </div>
);

export default FooterSocialIcons;