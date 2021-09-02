import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  AsideFilter,
  AuthContext,
  FotosProducto,
  Layout,
  ListaProductos,
} from "../components";
import styles from "../styles/Dashboard.module.scss";
import { useRouter } from "next/router";
import {
  actualizarProductoAPI,
  agregarProductoAPI,
  obtenerProductosAPI,
  obtenerUnProductoAPI,
  eliminarProductoAPI,
} from "../services/fetchInstance";

const Dashboard = () => {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState(0);
  const [descripcion, setDescripcion] = useState("");
  const [stock, setStock] = useState(0);
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [fotos, setFotos] = useState([]);

  const [preview, setPreview] = useState(undefined);

  const { loggedIn } = useContext(AuthContext);
  const [id, setID] = useState("");
  const Router = useRouter();

  const agregarProducto = async () => {
    if (!nombre || !descripcion)
      return toast.error("Debe llenar los espacios obligatorios");

    if (id) {
      const response = await actualizarProductoAPI(id, {
        nombre,
        precio,
        descripcion,
        stock,
        fotos,
      });

      toast.success(response.descripcion);
    } else {
      const response = await agregarProductoAPI({
        nombre,
        precio,
        descripcion,
        stock,
        fotos,
      });

      toast.success(response.descripcion);
    }

    setID("");
    setNombre("");
    setPrecio(0);
    setDescripcion("");
    setStock(0);
    setPreview(undefined);
    setFotos([]);

    obtenerProductos();
  };

  const obtenerProductos = async () => {
    const response = await obtenerProductosAPI();
    setProductos(response);
  };

  const modificarProducto = async (id) => {
    const response = await obtenerUnProductoAPI(id);

    toast.success(response.descripcion);

    setNombre(response.nombre);
    setPrecio(response.precio);
    setDescripcion(response.descripcion);
    setStock(response.stock);
    setFotos(response.fotos);
    setPreview(response.fotos[0]);
    setID(id);
  };

  const cargarFotos = (fotosSubidas) => {
    if (fotosSubidas.length > 3)
      return toast.error("Solo se pueden subir 3 fotos por producto");

    let promesas = [];
    for (let i = 0; i < fotosSubidas.length; i++) {
      promesas[i] = new Promise((resolve) => {
        let reader = new FileReader();
        reader.onloadend = () => {
          resolve(reader.result);
        };
        reader.readAsDataURL(fotosSubidas[i]);
      });
    }

    Promise.all(promesas).then((resultados) => {
      setFotos(resultados);
      setPreview(resultados[0]);
    });
  };

  const borrarProducto = async (id) => {
    if (!confirm("Seguro que deseas eliminar el producto?")) return;

    const response = await eliminarProductoAPI(id);

    toast.success(response.descripcion);

    obtenerProductos();
  };

  const limpiarTodo = () => {
    setID("");
    setNombre("");
    setPrecio(0);
    setDescripcion("");
    setStock(0);
    setPreview(undefined);
    setFotos([]);
  };

  useEffect(() => {
    obtenerProductos();
    if (!loggedIn) {
      Router.push("/login");
    }
  }, []);

  if (!loggedIn)
    return (
      <Layout>
        <h1 style={{ color: "white", textAlign: "center" }}>Cargando...</h1>
      </Layout>
    );

  return (
    <Layout>
      <div className={styles.dashboard}>
        <AsideFilter setBusqueda={setBusqueda} style={{ width: "100%" }} />
        <div className={styles.lista_productos}>
          <ListaProductos
            admin={true}
            productos={productos}
            busqueda={busqueda}
            borrarProducto={borrarProducto}
            modificarProducto={modificarProducto}
          />
        </div>
        <div className={styles.agregar_producto}>
          <FotosProducto fotos={fotos} />
          <div className={styles.form_producto}>
            <label htmlFor="nombre">
              Nombre del producto <span style={{ color: "#f0a" }}>*</span>
            </label>
            <input
              type="text"
              name="nombre"
              required
              onChange={(e) => setNombre(e.target.value)}
              value={nombre}
            />
            <label htmlFor="precio">
              Precio del producto<span style={{ color: "#f0a" }}>*</span>
            </label>
            <input
              type="number"
              name="precio"
              required
              onChange={(e) => setPrecio(e.target.value)}
              value={precio}
              min={0}
            />
            <label htmlFor="descripcion">
              Descripción del producto<span style={{ color: "#f0a" }}>*</span>
            </label>
            <textarea
              type="text"
              name="descripcion"
              required
              onChange={(e) => setDescripcion(e.target.value)}
              value={descripcion}
              maxLength={191}
            />
            <label htmlFor="stock">Stock del producto</label>
            <input
              type="number"
              name="stock"
              required
              onChange={(e) => setStock(e.target.value)}
              value={stock}
              min={0}
            />
            <input
              type="file"
              onChange={(e) => cargarFotos(e.target.files)}
              multiple
            />
            {id ? (
              <>
                <button type="submit" onClick={() => agregarProducto()}>
                  Actualizar
                </button>
                <button
                  onClick={() => limpiarTodo()}
                  style={{ marginTop: "5px" }}
                >
                  Limpiar
                </button>
              </>
            ) : (
              <button type="submit" onClick={() => agregarProducto()}>
                Agregar
              </button>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
