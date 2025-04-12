import Image from 'next/image';
import styles from './ZoomedImage.module.scss';
import { ZoomedImageProps } from '../../interfaces/zoomed-image/ZoomedImage.interface';

const ZoomedImage: React.FC<ZoomedImageProps> = ({
  currentMainImage,
  width,
  height,
  zoomFactor,
  translateX,
  translateY,
}) => {
  return (
    <div className={styles.zoomed}>
      <Image
        src={currentMainImage}
        alt="Enlarged image of the product"
        width={width * zoomFactor}
        height={height * zoomFactor}
        className={styles.zoomed__image}
        style={{
          transform: `translate(-${translateX}px, -${translateY}px)`,
        }}
      />
    </div>
  );
};

export default ZoomedImage;