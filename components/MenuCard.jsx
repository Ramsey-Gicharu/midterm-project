import Image from "next/image";
import menuCardStyles from '../styles/MenuCard.module.css';
const MenuCard = ({ menuItem }) => {
  return (
     <div className={menuCardStyles.container}>
      <Image src={menuItem.img} alt="" width="160" height="160" />
      <h1 className={menuCardStyles.title}>{menuItem.title}</h1>
      <span className={menuCardStyles.price}>khs{menuItem.price}</span>
      <p className={menuCardStyles.desc}>
   {menuItem.desc}
      </p>
    </div>
  )
}

export default MenuCard