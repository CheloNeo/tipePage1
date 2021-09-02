import React from "react";
import styles from "./Contacto.module.scss";
import Image from "next/image";
import { Media } from "../";
import Logo from "../../public/md_mujer.png";

const Contacto = () => {
  return (
    <div className={styles.contacto} id="contacto">
      <div className={styles.contacto_foto}>
        <Image
          src={Logo}
          alt="logo"
          width="600"
          height="600"
          className={styles.foto_contacto}
        />
      </div>
      <div className={styles.contacto_datos}>
        <div className={styles.contacto_header}>
          <h1>MD Mujer</h1>
        </div>
        <hr className={styles.linea} />
        <div className={styles.contacto_body}>
          <div className={styles.description}>
            <p>
              Utiliza estos medios para ponerte en contacto con nuestra tienda.
            </p>
          </div>
          <div className={styles.first_cont}>
            <a
              href="mailto:mdmujer@tiendamdmujer.cl"
              target="_blank"
              rel="noreferrer"
            >
              <Media type="email" color="red" width="23" height="23" />
              <h2>mdmujer@tiendamdmujer.cl</h2>
            </a>
          </div>
          <div className={styles.second_cont}>
            <a
              href="https://api.whatsapp.com/send?phone=56978770897"
              target="_blank"
              rel="noreferrer"
            >
              <Media type="whatsapp" color="green" width="23" height="23" />
              <h2>+56978770897</h2>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
