import { useRouter } from "next/router";
import React, { createContext, useState, useEffect } from "react";
import { obtenerLogueado, cerrarSesion } from "../../services/fetchInstance";

const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(undefined);

  const Router = useRouter();

  const getLoggedIn = async () => {
    const response = await obtenerLogueado();

    setLoggedIn(response);
  };

  const logout = async () => {
    await cerrarSesion();

    await getLoggedIn();

    Router.push("/");
  };

  useEffect(() => {
    getLoggedIn();
  });

  return (
    <AuthContext.Provider value={{ loggedIn, getLoggedIn, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

export { AuthContextProvider };
