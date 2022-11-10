import Image from "next/image";
import menuCardStyles from '../styles/MenuCard.module.css';
const MenuCard = () => {
  return (
     <div className={menuCardStyles.container}>
      <Image src="/img/beef burger.jpg" alt="" width="160" height="160" />
      <h1 className={menuCardStyles.title}>Beef Burger</h1>
      <span className={menuCardStyles.price}>180 kshs</span>
      <p className={menuCardStyles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  )
}

export default MenuCard