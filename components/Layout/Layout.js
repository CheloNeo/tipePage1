import React from "react";
import styles from "./Layout.module.scss";
import { Header, CustomHead } from "..";

const Layout = ({ children }) => {
  return (
    <>
      <CustomHead />
      <Header />
      {children}
    </>
  );
};
export default Layout;
