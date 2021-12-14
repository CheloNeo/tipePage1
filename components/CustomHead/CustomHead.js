import React from "react";
import Head from "next/head";

const CustomHead = () => {
  return (
    <>
      <Head>
        <title>Entregas Pro</title>
        <meta name="Descipcion" content="Entregas pro es una pyme que se dedica a la compra y venta de todo tipo de productos en la ciudad de la region de Valparaiso"/>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
        ></link>
      </Head>
    </>
  );
};

export default CustomHead;
