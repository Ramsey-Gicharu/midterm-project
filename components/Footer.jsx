import Image from 'next/image';
import footerStyles from '../styles/Footer.module.css'

const Footer= () => {
  return (
       <div className={footerStyles.container}>
      <div className={footerStyles.item}>
        <Image src="/img/footerimage.jpg" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={footerStyles.item}>
        <div className={footerStyles.card}>
          <h2 className={footerStyles.motto}>
          Hungry, looking for somewhere to eat dont worry Campus Delight is here to help out so that u can maintain the energy needed to focus in class
          </h2>
        </div>
        <div className={footerStyles.card}>
          <h1 className={footerStyles.title}>WORKING HOURS</h1>
          <p className={footerStyles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 7:00 – 21:00
          </p>
          <p className={footerStyles.text}>
            SATURDAY - SUNDAY
            <br /> 10:00 – 20:00
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer;