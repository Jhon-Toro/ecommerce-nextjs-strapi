import { ZoomLensProps } from '../../interfaces/zoom-lens/ZoomLens.interface';
import styles from './ZoomLens.module.scss';

const ZoomLens: React.FC<ZoomLensProps> = ({ lensPosition }) => {
  return (
    <div
      className={styles.zoomLens}
      style={{
        left: `${lensPosition.x}px`,
        top: `${lensPosition.y}px`,
      }}
    />
  );
};

export default ZoomLens;