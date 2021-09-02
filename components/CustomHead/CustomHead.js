import React from "react";
import Head from "next/head";

const CustomHead = () => {
  return (
    <>
      <Head>
        <title>MD Mujer</title>
        <meta
          name="description"
          content="MD Mujer es una tienda de ropa femenina donde encontraras los mejores precios, las mejores
            marcas, productos exclusivos y de tendencia, con envios a todo
            Chile."
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
