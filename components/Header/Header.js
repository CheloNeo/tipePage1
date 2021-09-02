import React, { useContext, useEffect } from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";
import MdMujer from "../../public/md_mujer.png";
import Search from "../../public/search.svg";

import AuthContext from "../AuthContext/AuthContext";

const Header = ({ searchBar }) => {
  const { loggedIn, getLoggedIn, logout } = useContext(AuthContext);

  return (
    <div className={styles.header_container}>
      <div className={styles.header_head}>
        <Image src={MdMujer} alt="MD Mujer" className={styles.logo} />
      </div>
      <div className={styles.header_body}>
        <ul className={styles.header_list}>
          <Link href="/" passHref>
            <li>Home</li>
          </Link>
          <Link href="/#main" passHref>
            <li>Productos</li>
          </Link>
          <Link href="/#contacto" passHref>
            <li>Contacto</li>
          </Link>
          {loggedIn ? (
            <>
              <Link href="/login" passHref>
                <li
                  onClick={() => {
                    logout();
                  }}
                >
                  Cerrar sesion
                </li>
              </Link>
              <Link href="/dashboard" passHref>
                <li>Administrar</li>
              </Link>
            </>
          ) : (
            <Link href="/login" passHref>
              <li>Iniciar sesión</li>
            </Link>
          )}
          {searchBar && (
            <li className={styles.last_item}>
              <Image src={Search} alt="search" />
              <input
                type="text"
                placeholder="Buscar producto..."
                className={styles.search}
              />
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};
export default Header;
