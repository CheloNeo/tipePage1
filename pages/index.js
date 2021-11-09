import { Layout, Presentation, Carrusel, Main, Contacto } from "../components";

const Home = () => {
  return (
    <Layout>
      <Presentation />
      {/* <Carrusel /> */}
      <Main />
      <Contacto />
    </Layout>
  );
};

export default Home;
