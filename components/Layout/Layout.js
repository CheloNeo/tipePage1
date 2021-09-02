import React from "react";
import styles from "./Layout.module.scss";
import { Header, CustomHead } from "..";

const Layout = ({ children }) => {
  return (
    <>
      <CustomHead />
      <header className={styles.header}>
        <Header />
      </header>
      {children}
    </>
  );
};
export default Layout;
