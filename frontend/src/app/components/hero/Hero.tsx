import Button from '@/app/shared-components/button/Button';
import styles from './Hero.module.scss';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className={styles.hero}>

      <Image
        src="https://res.cloudinary.com/dxspvj1rj/image/upload/v1743273819/hero_oqglpz.png"
        alt="Imagen de Cloudinary"
        width={1440}
        height={663}
      />
      <article className={styles.hero__article}>
        <h1 className={styles.hero__article_title}>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
        <p  className={styles.hero__article_paragraph}>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
        <Button/>
      </article>
    </section>
  )
}

export default Hero
