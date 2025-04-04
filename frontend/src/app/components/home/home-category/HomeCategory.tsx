import Image from 'next/image';
import style from './HomeCategory.module.scss';

const HomeCategory = () => {
  return (
    <section className={style.category}>
      <div className={style.category__card}>
        <h3>Casual</h3>
        <Image src={''} alt={''}/>
      </div>
    </section>
  )
}

export default HomeCategory
