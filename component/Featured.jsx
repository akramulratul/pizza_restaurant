import styles from "../styles/Featured.module.css";
import Image from "next/image";
import { useState } from "react";

const Featured = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "/img/featured.jpg",
    "/img/featured2.jpg",
    "/img/featured3.jpg",
    "/img/featured4.jpg",
  ];

  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 3);
      console.log(setIndex);
    }
    if (direction === "r") {
      setIndex(index !== 3 ? index + 1 : 0);
    }
  };
  console.log(index);
  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow("l")}
      >
        <Image src="/img/arrowl.png" alt="" fill contain="true" />
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image src={img} alt="" fill contain="true" />
          </div>
        ))}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow("r")}
      >
        <Image src="/img/arrowr.png" alt="" fill contain="true" />
      </div>
    </div>
  );
};

export default Featured;
