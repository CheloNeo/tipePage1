import React, { useState } from "react";
import styles from "./Modal.module.scss";
import { Datos } from "..";
import { FotosProducto } from "..";

const Modal = ({ nombre, precio, descripcion, cerrarProducto, fotos }) => {
  const [preview, setPreview] = useState(undefined);

  return (
    <div className={styles.product_details}>
      <div className={styles.product_card}>
        <FotosProducto
          fotos={fotos}
          preview={preview}
          setPreview={setPreview}
        />
        <div className={styles.producto_container}>
          <div className={styles.closeModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-x-lg"
              viewBox="0 0 16 16"
              onClick={() => cerrarProducto()}
              style={{ cursor: "pointer" }}
            >
              <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
            </svg>
          </div>
          <div className={styles.product_information}>
            <hr className={styles.linea} />
            <p className={styles.title}>Nombre</p>
            <p className={styles.valor}>{nombre}</p>
            <hr className={styles.linea} />
            <p className={styles.title}>Precio</p>
            <p className={styles.valor}>${precio}</p>
            <hr className={styles.linea} />
            <p className={styles.title}>Descripción</p>
            <p className={styles.valor}>{descripcion}</p>
            <hr className={styles.linea} />
            <Datos nombre={nombre} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
