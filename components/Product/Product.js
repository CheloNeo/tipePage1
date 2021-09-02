import React, { useState } from "react";
import Modal from "../Modal/Modal";
import styles from "./Product.module.scss";

const Product = ({
  nombre,
  precio,
  descripcion,
  admin,
  id,
  modificarProducto,
  borrarProducto,
  fotos,
}) => {
  const [viewProduct, setViewProduct] = useState(false);

  return (
    <div className={styles.product_container}>
      <div
        className={styles.product_head}
        style={{
          backgroundImage: `url(${fotos[0]})`,
        }}
      />
      <div className={styles.product_body}>
        <p>{nombre}</p>
        <p>${precio}</p>
      </div>
      <div
        className={styles.product_modal}
        onClick={() => setViewProduct(true)}
      >
        <h2 className="noselect">Ver más...</h2>
      </div>
      {admin && (
        <>
          <div className={styles.delete} onClick={() => borrarProducto(id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="red"
              className="bi bi-x-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </div>
          <div className={styles.modify} onClick={() => modificarProducto(id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              className="bi bi-gear-fill"
              viewBox="0 0 16 16"
            >
              <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
            </svg>
          </div>
        </>
      )}
      {viewProduct && (
        <Modal
          nombre={nombre}
          precio={precio}
          descripcion={descripcion}
          cerrarProducto={setViewProduct}
          fotos={fotos}
        />
      )}
    </div>
  );
};

export default Product;
