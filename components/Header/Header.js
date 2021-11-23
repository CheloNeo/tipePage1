import React, { useContext } from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";
import { headerItems } from "../../data/headerItems";

import AuthContext from "../AuthContext/AuthContext";

const Header = () => {
  const { loggedIn, logout } = useContext(AuthContext);

  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <div className={styles.header_body}>
          <Image
            src="/logo.jpeg"
            height="100%"
            width="100%"
            className={styles.fotoLogo}
          />
          <ul className={styles.header_list}>
            {headerItems.map(({ name, link, hidden }, i) => {
              return (
                <li
                  key={i}
                  style={
                    hidden && !loggedIn
                      ? { display: "none" }
                      : { display: "inline-block" }
                  }
                >
                  <Link href={link} passHref>
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Header;
