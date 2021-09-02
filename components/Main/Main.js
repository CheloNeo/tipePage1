import React, { useEffect, useState } from "react";
import { Product, AsideFilter } from "..";
import { obtenerProductosAPI } from "../../services/fetchInstance";
import ListaProductos from "../ListaProductos/ListaProductos";
import Spin from "../Spin/Spin";
import styles from "./Main.module.scss";

const Main = () => {
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const [loading, setLoading] = useState(false);

  const obtenerProductos = async () => {
    setLoading(true);
    const response = await obtenerProductosAPI();
    setProductos(response);
    setLoading(false);
  };

  useEffect(() => {
    obtenerProductos();
  }, []);

  return (
    <main className={styles.main} id="main">
      <div className={styles.container}>
        <AsideFilter setBusqueda={setBusqueda} />
        <div className={styles.products}>
          {loading ? (
            <Spin />
          ) : (
            <ListaProductos busqueda={busqueda} productos={productos} />
          )}
        </div>
      </div>
    </main>
  );
};

export default Main;
