'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import styles from './ProductImages.module.scss';

interface ProductImagesProps {
  mainImage: string;
  additionalImages: string[];
}

const ProductImages: React.FC<ProductImagesProps> = ({ mainImage, additionalImages }) => {
  const [currentMainImage, setCurrentMainImage] = useState(mainImage);
  const [isZooming, setIsZooming] = useState(false);
  const [lensPosition, setLensPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLDivElement>(null);

  // Constantes para la configuración del zoom
  const ZOOM_FACTOR = 2; // Nivel de zoom (por ejemplo, 2x)
  const LENS_SIZE = 100; // Tamaño de la lupa en píxeles
  const MAIN_IMAGE_SIZE = 444; // Tamaño de la imagen principal (ancho y alto en píxeles)
  const MAIN_IMAGE_SIZE_HEIGHT = 530; // Tamaño de la imagen principal (ancho y alto en píxeles)
  const ZOOMED_IMAGE_SIZE = 444; // Tamaño del contenedor de la imagen ampliada (en píxeles)

  // Manejar el movimiento del ratón para el efecto de lupa
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;

    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    const x = e.clientX - left; // Posición X relativa al contenedor
    const y = e.clientY - top;  // Posición Y relativa al contenedor

    // Asegurar que la lupa no salga de los límites de la imagen
    const lensX = Math.max(LENS_SIZE / 2, Math.min(width - LENS_SIZE / 2, x));
    const lensY = Math.max(LENS_SIZE / 2, Math.min(height - LENS_SIZE / 2, y));

    setLensPosition({ x: lensX, y: lensY });
    setIsZooming(true);
  };

  const handleMouseLeave = () => {
    setIsZooming(false);
  };

  // Calcular la traslación de la imagen ampliada
  const zoomedImageTranslateX = (lensPosition.x - LENS_SIZE / 2) * ZOOM_FACTOR;
  const zoomedImageTranslateY = (lensPosition.y - LENS_SIZE / 2) * ZOOM_FACTOR;

  return (
    <section className={styles.productImages} aria-label="Imágenes del producto">
      {/* Imagen principal con efecto de lupa */}
      <div
        className={styles.mainImageWrapper}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        ref={imageRef}
        role="region"
        aria-label="Imagen principal del producto con zoom"
        style={{ width: `${MAIN_IMAGE_SIZE}px`, height: `${MAIN_IMAGE_SIZE_HEIGHT}px`, position: 'relative' }}
      >
        <Image
          src={currentMainImage}
          alt="Imagen principal del producto"
          width={MAIN_IMAGE_SIZE}
          height={MAIN_IMAGE_SIZE_HEIGHT}
          className={styles.mainImage}
          style={{objectFit: 'cover'}}
          priority
        />
        {isZooming && (
          <div
            className={styles.zoomLens}
            style={{
              left: `${lensPosition.x}px`,
              top: `${lensPosition.y}px`,
              transform: 'translate(-50%, -50%)',
              width: `${LENS_SIZE}px`,
              height: `${LENS_SIZE}px`,
              position: 'absolute',
            }}
          />
        )}
        {isZooming && (
          <div
            className={styles.zoomedImage}
            style={{
              width: `${ZOOMED_IMAGE_SIZE}px`,
              height: `${ZOOMED_IMAGE_SIZE}px`,
              overflow: 'hidden',
              position: 'absolute',
              top: 0,
              left: `${MAIN_IMAGE_SIZE + 10}px`, // Posicionar al lado de la imagen principal
            }}
          >
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
      </div>

      {/* Miniaturas */}
      <div className={styles.thumbnails} role="tablist" aria-label="Imágenes en miniatura">
        <button
          className={`${styles.thumbnail} ${
            currentMainImage === mainImage ? styles.selected : ''
          }`}
          onClick={() => setCurrentMainImage(mainImage)}
          role="tab"
          aria-selected={currentMainImage === mainImage}
          aria-label="Seleccionar imagen principal del producto"
        >
          <Image
            src={mainImage}
            alt="Miniatura de la imagen principal"
            width={80}
            height={80}
            className={styles.thumbnailImage}
          />
        </button>
        {additionalImages.map((image, index) => (
          <button
            key={index}
            className={`${styles.thumbnail} ${
              currentMainImage === image ? styles.selected : ''
            }`}
            onClick={() => setCurrentMainImage(image)}
            role="tab"
            aria-selected={currentMainImage === image}
            aria-label={`Seleccionar miniatura ${index + 1} del producto`}
          >
            <Image
              src={image}
              alt={`Miniatura ${index + 1} del producto`}
              width={152}
              height={167}
              className={styles.thumbnailImage}
            />
          </button>
        ))}
      </div>
    </section>
  );
};

export default ProductImages;