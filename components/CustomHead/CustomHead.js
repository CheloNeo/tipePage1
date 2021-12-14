import React from "react";
import Head from "next/head";

const CustomHead = () => {
  return (
    <>
      <Head>
        <title>Entregas Pro</title>
        <meta
          name="description"
          content="Entregas pro es una pyme que se dedica a la entrega y venta de todo tipo de productos
          tecnologicos dentro de la Calera!"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
        ></link>
      </Head>
    </>
  );
};

export default CustomHead;
