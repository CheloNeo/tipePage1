import React from "react";
import styles from "./FotosProducto.module.scss";

const FotosProducto = ({ fotos, preview, setPreview }) => {
  return (
    <div className={styles.preview_foto}>
      <div className={styles.main_foto}>
        <img
          src={preview || fotos[0]}
          alt="preview foto producto"
          className={styles.foto_producto}
        />
      </div>
      <div className={styles.fotos_preview}>
        <ul>
          {fotos?.map((foto, i) => {
            return (
              <li key={i}>
                <img
                  src={foto}
                  alt="preview fotos"
                  onClick={() => setPreview(foto)}
                  className={styles.producto_foto}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default FotosProducto;
