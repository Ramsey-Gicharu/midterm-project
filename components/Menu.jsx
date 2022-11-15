import menuStyles from '../styles/Menu.module.css';
import MenuCard from './MenuCard';

const Menu = ({menuItem}) => {
  return (
 <div className={menuStyles.container}>
      <h1 classNamenuSe={menuStyles.title}>Affordable Fresh tatsy Meals</h1>
      <p className={menuStyles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <div className={menuStyles.wrapper}>
        {menuItem.map((menuItem) =>(
             <MenuCard key={item.id} menuItem= {menuItem}/>
))}
      
         
      </div>
    </div>
  )
}

export default Menu