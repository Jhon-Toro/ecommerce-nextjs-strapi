'use client';

import { useState, useEffect } from 'react';
import AdditionalImages from '../additional-images/AdditionalImages';
import { ProductImagesProps } from '../../interfaces/product-images/ProductImages.interface';
import MainImage from '../main-image/MainImage';
import styles from './ProductImages.module.scss';
import { IMAGE_CONFIG } from '../../constants/ImageConfig';

const ProductImages: React.FC<ProductImagesProps> = ({ mainImage, additionalImages }) => {
  const [currentMainImage, setCurrentMainImage] = useState(mainImage);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleResize = () => setIsMobile(window.innerWidth <= IMAGE_CONFIG.IS_MOBILE);
  
  return (
    <section className={styles.product__images} aria-label="Product images">
      <MainImage
        currentMainImage={currentMainImage}
        isMobile={isMobile}
        width={isMobile ? 340 : 444}
        height={isMobile ? 300 : 530}
      />
      <AdditionalImages
        currentMainImage={currentMainImage}
        mainImage={mainImage}
        setCurrentMainImage={setCurrentMainImage}
        additionalImages={additionalImages}
      />
    </section>
  );
};

export default ProductImages;