import Image from 'next/image';
import style from './HomeCategory.module.scss';
import Link from 'next/link';
import categories from '../../../../assets/home-category.json';

const HomeCategory = () => {
  return (
    <section className={style.category}>
      {categories.map((category, index) => (
        <div
          key={index}
          className={`${style.category__card} ${category.twoColumn ? style.category__card_twoColumn : ''}`}
        >
          <Link href={category.link} className={style.category__card_link}>
            <h3 className={style.category__card_title}>{category.title}</h3>
            <Image
              className={style.category__card_image}
              src={category.image}
              alt={category.title}
              width={407}
              height={289}
            />
          </Link>
        </div>
      ))}
    </section>
  );
}

export default HomeCategory;
