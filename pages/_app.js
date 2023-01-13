// import '../styles/globals.css'
// import "bootstrap/dist/css/bootstrap.css"
import { useEffect } from "react";
import "../css/main.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return <Component {...pageProps} />;
}
