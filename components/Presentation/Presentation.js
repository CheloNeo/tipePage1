import React from "react";
import styles from "./Presentacion.module.scss";
import Link from "next/link";

const Presentation = () => {
  return (
    <div className={styles.presentacion}>
      <div
        className={styles.presentacion_foto}
        style={{
          backgroundImage: `url("https://res.cloudinary.com/md-mujer/image/upload/v1630011485/woman-5295559_1920_htww1c.jpg")`,
        }}
      ></div>
      <div className={styles.presentacion_info}>
        <div className={styles.presentacion_info_header}>
          <h1>MD Mujer</h1>
        </div>
        <hr style={{ width: "90%", color: "white" }} />
        <div className={styles.presentacion_info_body}>
          <h6>
            En nuestra tienda encontraras los mejores precios, productos
            exclusivos y de tendencia, con envios a todo Chile. Para dudas o
            consultas acerca de productos y stock, haz click aquí
          </h6>
          <Link href="/#contacto" passHref>
            <button className={styles.contact_button}>Ir a contacto!</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
