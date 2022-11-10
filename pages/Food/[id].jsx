import foodStyles from "../../styles/Food.module.css";
import Image from "next/image";
import { useState } from "react";

const Food = ()  => {
  const [size, setSize] = useState(0);
  const pizza = {
    id: 1,
    img: "/img/bbqsteakpizza.jpg",
    name: "BBq Steak Pizza",
    price: [250],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu purus, rhoncus fringilla vestibulum vel, dignissim vel ante. Nulla facilisi. Nullam a urna sit amet tellus pellentesque egestas in in ante.",
  };

    return (
    <div className={foodStyles.container}>
      <div className={foodStyles.left}>
        <div className={foodStyles.imgContainer}>
          <Image src={pizza.img} objectFit="contain" layout="fill" alt="" />
        </div>
      </div>
      <div className={foodStyles.right}>
        <h1 className={foodStyles.title}>{pizza.name}</h1>
        <span className={foodStyles.price}>${pizza.price[size]}</span>
        <p className={foodStyles.desc}>{pizza.desc}</p>
        <div className={foodStyles.add}>
            <input type="number" defaultValue={1} className={foodStyles.quantity}/>
            <button className={foodStyles.button}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Food;