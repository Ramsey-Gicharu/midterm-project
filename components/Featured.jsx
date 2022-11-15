import styles from "../styles/Featured.module.css";
import Image from "next/image";
import { useState } from "react";

const Featured = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "/img/fries.jpg",
    "/img/cheese beef burger.jpg",
    "/img/Hawaiian.jpg",
  ];

  const sliderArrow = (direction) =>{
      if(direction==="left"){
          setIndex(index !== 0 ? index-1 : 0)
      }
      if(direction==="right"){
          setIndex(index !== 2 ? index+1 : 2)
      }
  }

  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer} style={{ left: 0 }} onClick={()=>sliderArrow("left")}>
        <Image src="/img/leftarrow.png" alt="" layout="fill" objectFit="contain"/>
      </div>
      <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
        {images.map((image, index) => (
          <div className={styles.imgContainer} key={index}>
            <Image src={image} alt="" layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>
      <div className={styles.arrowContainer} style={{ right: 0 }} onClick={()=>sliderArrow("right")}>
        <Image src="/img/rightarrow.png" layout="fill" alt="" objectFit="contain"/>
      </div>
    </div>
  );
};

export default Featured;
