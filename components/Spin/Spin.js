import React from "react";
import Loader from "react-loader-spinner";
import styles from "./Spin.module.scss";

const Spin = () => {
  return (
    <div className={styles.spin_container}>
      <Loader
        type="Hearts"
        color="#F00"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    </div>
  );
};

export default Spin;
