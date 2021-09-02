import styles from "./AsideFilter.module.scss";

const AsideFilter = ({ setBusqueda, style }) => {
  return (
    <aside className={styles.aside_filter} style={style}>
      <div className={styles.filter_container}>
        <hr style={{ width: "80%", color: "#000" }} />
        <h1>Filtrar por</h1>
        <hr style={{ width: "80%", color: "#000" }} />
        <label htmlFor="nombre">Nombre del producto</label>
        <input
          type="text"
          name="nombre"
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>
    </aside>
  );
};

export default AsideFilter;
