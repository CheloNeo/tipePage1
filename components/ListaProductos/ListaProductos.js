import React from "react";
import { Product } from "..";

const ListaProductos = ({
  admin,
  productos,
  busqueda,
  borrarProducto,
  modificarProducto,
}) => {
  return (
    <>
      {productos
        ?.filter((producto) => {
          if (busqueda === "") return producto;
          else if (
            producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
          )
            return producto;
        })
        .map((producto) => {
          return (
            <Product
              nombre={producto.nombre}
              precio={producto.precio}
              descripcion={producto.descripcion}
              key={producto._id}
              id={producto._id}
              fotos={producto.fotos}
              admin={admin || false}
              borrarProducto={admin && borrarProducto}
              modificarProducto={admin && modificarProducto}
            />
          );
        })}
    </>
  );
};

export default ListaProductos;
