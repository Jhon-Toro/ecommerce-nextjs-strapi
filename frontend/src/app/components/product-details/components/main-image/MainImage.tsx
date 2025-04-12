import { useState, useRef } from 'react';
import { IMAGE_CONFIG } from '../../constants/ImageConfig';
import { MainImageProps } from '../../interfaces/main-image/MainImage.interface';
import Image from 'next/image';
import ZoomLens from '../zoom-lens/ZoomLens';
import ZoomedImage from '../zoomed-images/ZoomedImage';
import styles from './MainImage.module.scss';

const MainImage: React.FC<MainImageProps> = ({ currentMainImage, isMobile, width, height }) => {
  const [isZooming, setIsZooming] = useState(false);
  const [lensPosition, setLensPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current || isMobile) return;

    const { left, top, width: rectWidth, height: rectHeight } = imageRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const lensX = Math.max(IMAGE_CONFIG.LENS_SIZE / 2, Math.min(rectWidth - IMAGE_CONFIG.LENS_SIZE / 2, x));
    const lensY = Math.max(IMAGE_CONFIG.LENS_SIZE / 2, Math.min(rectHeight - IMAGE_CONFIG.LENS_SIZE / 2, y));

    setLensPosition({ x: lensX, y: lensY });
    setIsZooming(true);
  };

  const handleMouseLeave = () => {
    setIsZooming(false);
  };

  const zoomedImageTranslateX = Math.min(
    Math.max(0, (lensPosition.x - IMAGE_CONFIG.LENS_SIZE / 2) * IMAGE_CONFIG.ZOOM_FACTOR),
    (width * IMAGE_CONFIG.ZOOM_FACTOR - width)
  );
  const zoomedImageTranslateY = Math.min(
    Math.max(0, (lensPosition.y - IMAGE_CONFIG.LENS_SIZE / 2) * IMAGE_CONFIG.ZOOM_FACTOR),
    (height * IMAGE_CONFIG.ZOOM_FACTOR - height)
  );

  return (
    <article
      className={styles.main}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={imageRef}
      role="region"
      aria-label="Main product image with zoom"
    >
      <Image
        src={currentMainImage}
        alt="Main product image"
        width={width}
        height={height}
        className={styles.main__image}
        priority
      />
      {isZooming && !isMobile && (
        <ZoomLens lensPosition={lensPosition} />
      )}
      {isZooming && !isMobile && (
        <ZoomedImage
          currentMainImage={currentMainImage}
          width={width}
          height={height}
          zoomFactor={IMAGE_CONFIG.ZOOM_FACTOR}
          translateX={zoomedImageTranslateX}
          translateY={zoomedImageTranslateY}
        />
      )}
    </article>
  );
};

export default MainImage;