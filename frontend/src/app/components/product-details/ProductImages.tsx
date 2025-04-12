'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './ProductImages.module.scss';
import AdditionalImages from './components/additional-images/AdditionalImages';

interface ProductImagesProps {
  mainImage: string;
  additionalImages: string[];
}

const ProductImages: React.FC<ProductImagesProps> = ({ mainImage, additionalImages }) => {
  const [currentMainImage, setCurrentMainImage] = useState(mainImage);
  const [isZooming, setIsZooming] = useState(false);
  const [lensPosition, setLensPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);


  const ZOOM_FACTOR = 2;
  const LENS_SIZE = 120;
  const MAIN_IMAGE_SIZE = 444;
  const MAIN_IMAGE_SIZE_HEIGHT = 530;
  const ZOOMED_IMAGE_SIZE = 444;
  const ZOOMED_IMAGE_SIZE_HEIGHT = 530;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current || isMobile) return;

    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const lensX = Math.max(LENS_SIZE / 2, Math.min(width - LENS_SIZE / 2, x));
    const lensY = Math.max(LENS_SIZE / 2, Math.min(height - LENS_SIZE / 2, y));

    setLensPosition({ x: lensX, y: lensY });
    setIsZooming(true);
  };

  const handleMouseLeave = () => {
    setIsZooming(false);
  };

  const zoomedImageTranslateX = Math.min(
    Math.max(0, (lensPosition.x - LENS_SIZE / 2) * ZOOM_FACTOR),
    (MAIN_IMAGE_SIZE * ZOOM_FACTOR - ZOOMED_IMAGE_SIZE)
  );
  const zoomedImageTranslateY = Math.min(
    Math.max(0, (lensPosition.y - LENS_SIZE / 2) * ZOOM_FACTOR),
    (MAIN_IMAGE_SIZE_HEIGHT * ZOOM_FACTOR - ZOOMED_IMAGE_SIZE_HEIGHT)
  );

  return (
    <section className={styles.productImages} aria-label="Imágenes del producto">
      <article
        className={styles.mainImageWrapper}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        ref={imageRef}
        role="region"
        aria-label="Imagen principal del producto con zoom"
      >
        <Image
          src={currentMainImage}
          alt="Imagen principal del producto"
          width={MAIN_IMAGE_SIZE}
          height={MAIN_IMAGE_SIZE_HEIGHT}
          className={styles.mainImage}
          priority
        />
        {isZooming && !isMobile && (
          <div
            className={styles.zoomLens}
            style={{
              left: `${lensPosition.x}px`,
              top: `${lensPosition.y}px`,
            }}
          />
        )}
        {isZooming && !isMobile && (
          <div className={styles.zoomedImage}>
            <Image
              src={currentMainImage}
              alt="Imagen ampliada del producto"
              width={MAIN_IMAGE_SIZE * ZOOM_FACTOR}
              height={MAIN_IMAGE_SIZE_HEIGHT * ZOOM_FACTOR}
              className={styles.zoomedImageContent}
              style={{
                transform: `translate(-${zoomedImageTranslateX}px, -${zoomedImageTranslateY}px)`,
              }}
            />
          </div>
        )}
      </article>

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