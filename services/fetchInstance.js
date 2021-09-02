// GET
export const obtenerProductosAPI = async () => {
  const response = await fetch("/api/products");
  const data = await response.json();
  return data;
};

// POST
export const agregarProductoAPI = async (info) => {
  const response = await fetch("/api/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(info),
  });

  const data = await response.json();
  return data;
};

// GET:ID
export const obtenerUnProductoAPI = async (id) => {
  const response = await fetch(`/api/products/${id}`);
  const data = await response.json();
  return data;
};

// DELETE
export const eliminarProductoAPI = async (id) => {
  const response = await fetch(`/api/products/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
};

// PUT
export const actualizarProductoAPI = async (id, info) => {
  const response = await fetch(`/api/products/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(info),
  });
  const data = await response.json();
  return data;
};

// OBTENER LOGIN
export const obtenerLogueado = async () => {
  const response = await fetch(`${process.env.HOST_URI}/api/user`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  return data;
};

// LOGUEARSE
export const iniciarSesion = async (info) => {
  const response = await fetch(`/api/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(info),
  });

  const data = await response.json();
  return data;
};

// CERRAR SESIÓN
export const cerrarSesion = async () => {
  const response = await fetch(`/api/user/logout`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};
