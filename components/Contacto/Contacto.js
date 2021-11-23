import React from "react";
import styles from "./Contacto.module.scss";
import Image from "next/image";
import { Media } from "../";
import { datos } from "../../data/datos";

const Contacto = () => {
  return (
    <div className={styles.contacto} id="contacto">
      <div className={styles.contacto_foto}>
        <Image
          src="/logo.jpeg"
          width="600"
          height="600"
          className={styles.foto_contacto}
        />
      </div>
      <div className={styles.contacto_datos}>
        <div className={styles.contacto_header}>
          <h1>{datos.nombre_empresa}</h1>
        </div>
        <hr className={styles.linea} />
        <div className={styles.contacto_body}>
          <div className={styles.description}>
            <p>
              Utiliza estos medios para estar en contacto con nuestra tienda.
            </p>
          </div>
          <div className={styles.first_cont}>
            <a
              href={`mailto:${datos.email_empresa}`}
              target="_blank"
              rel="noreferrer"
            >
              <Media type="email" color="white" width="23" height="23" />
              <h2>{datos.email_empresa}</h2>
            </a>
          </div>
          <div className={styles.second_cont}>
            <a
              href={`https://api.whatsapp.com/send?phone=${datos.numero_empresa}`}
              target="_blank"
              rel="noreferrer"
            >
              <Media type="whatsapp" color="green" width="23" height="23" />
              <h2>+{datos.numero_empresa}</h2>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
