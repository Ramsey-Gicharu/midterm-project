import navbarStyles  from '../styles/Navbar.module.css';
import React from 'react'
import Image from 'next/image';

const Navbar = () => {
  return (
<div className={navbarStyles.container}>
   <div className={navbarStyles.item}>
    <div className={navbarStyles.callButton}>
      <Image src="/img/telephone.png" width='60' height="50" alt="phone" />
    </div>
    <div className={navbarStyles.texts}>
      <div className={navbarStyles.text}>Order Now</div>
      <div className={navbarStyles.text}> 1233 4564 4357</div>
    </div>
   </div>
   <div className={navbarStyles.item}>
    <ul className={navbarStyles.list}>
      <li className={navbarStyles.listItem}>Home</li>
      <Image src="/img/logo.png" width='130' height="130" alt="logo" />
      <li className={navbarStyles.listItem}> Menu</li>
      </ul>
   </div>
   <div className={navbarStyles.item}>
    <div className={navbarStyles.cart}>
      <Image src="/img/cart.png" width='50' height="40" alt="user" />
      <div className={navbarStyles.counter}>2</div>
      </div>
   </div>
 </div>
  )
}

export default Navbar