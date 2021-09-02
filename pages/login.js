import React, { useContext, useEffect, useState } from "react";
import { AuthContext, Layout } from "../components";
import styles from "../styles/Login.module.scss";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { iniciarSesion } from "../services/fetchInstance";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loggedIn, getLoggedIn } = useContext(AuthContext);

  const Router = useRouter();

  const Loggin = async () => {
    const response = await iniciarSesion({ email, password });

    if (response.status !== 200) return toast.error(response.descripcion);
    toast.success(response.descripcion);

    await getLoggedIn();

    Router.push("/dashboard");
  };

  useEffect(() => {
    if (loggedIn) {
      Router.push("/dashboard");
    }
  }, []);

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.login}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="contraseña">Contraseña</label>
          <input
            type="password"
            placeholder="Contraseña"
            name="contraseña"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={() => Loggin()} className={styles.btn}>
            Iniciar sesión
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
