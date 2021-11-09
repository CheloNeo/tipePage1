import React from "react";
import styles from "./Presentacion.module.scss";
import Link from "next/link";
import { datos } from "../../data/datos";

const Presentation = () => {
  return (
    <div className={styles.presentacion}>
      <div className={styles.presentacion_info}>
        <div className={styles.presentacion_info_header}>
          <h1>{datos.nombre_empresa}</h1>
        </div>
        <hr style={{ width: "90%", color: "white" }} />
        <div className={styles.presentacion_info_body}>
          <h6>{datos.descripcion_empresa}</h6>
          <Link href="/#contacto" passHref>
            <button className={styles.contact_button}>Ir a contacto!</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
