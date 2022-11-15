import menuStyles from '../styles/Menu.module.css';
import MenuCard from './MenuCard';

const Menu = ({menuItem}) => {
  return (
 <div className={menuStyles.container}>
      <h1 classNamenuSe={menuStyles.title}></h1>
      <p className={menuStyles.desc}> </p>
      <div className={menuStyles.wrapper}>
        {menuItem.map((menuItem) =>(
             <MenuCard key={menuItem.id} menuItem= {menuItem}/>
))}
      
         
      </div>s
    </div>
  )
}

export default Menu