import React from "react";
import { Carousel } from "react-responsive-carousel";
import styles from "./Carrusel.module.scss";

const Carrusel = () => {
  return (
    <>
      <Carousel autoPlay transitionTime="1000" showThumbs={false}>
        <div>
          <img
            src="https://res.cloudinary.com/md-mujer/image/upload/v1630011883/Experimento1-gigapixel-scale-4_00x_n1c7u8.png"
            alt="foto carrusel"
            className={styles.foto_carrusel}
          />

          <h1 className={styles.h1}>¡ℍ𝕒𝕫 𝕢𝕦𝕖 𝕥𝕦 𝕖𝕤𝕥𝕚𝕝𝕠 𝕙𝕒𝕓𝕝𝕖 𝕕𝕖 𝕥𝕚!</h1>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/md-mujer/image/upload/v1630012973/foto2_tf3ttj.png"
            alt="foto carrusel"
            className={styles.foto_carrusel}
          />

          <h1 className={styles.h1}>¡ℍ𝕒𝕫 𝕢𝕦𝕖 𝕥𝕦 𝕖𝕤𝕥𝕚𝕝𝕠 𝕙𝕒𝕓𝕝𝕖 𝕕𝕖 𝕥𝕚!</h1>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/md-mujer/image/upload/v1630023532/op2_jbiwbt.png"
            alt="foto carrusel"
            className={styles.foto_carrusel}
          />

          <h1 className={styles.h1}>¡ℍ𝕒𝕫 𝕢𝕦𝕖 𝕥𝕦 𝕖𝕤𝕥𝕚𝕝𝕠 𝕙𝕒𝕓𝕝𝕖 𝕕𝕖 𝕥𝕚!</h1>
        </div>
      </Carousel>
    </>
  );
};

export default Carrusel;
