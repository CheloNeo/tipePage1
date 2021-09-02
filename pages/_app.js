import "../styles/globals.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContextProvider } from "../components/AuthContext/AuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthContextProvider>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          closeOnClick
        />
        <Component {...pageProps} />
      </AuthContextProvider>
    </>
  );
}

export default MyApp;
