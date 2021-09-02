import React from "react";
import styles from "./FotosProducto.module.scss";

const FotosProducto = ({ fotos, preview, setPreview }) => {
  return (
    <div className={styles.preview_foto}>
      <img
        src={preview || fotos[0]}
        alt="preview foto producto"
        className={styles.foto_producto}
      />
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
  );
};

export default FotosProducto;
