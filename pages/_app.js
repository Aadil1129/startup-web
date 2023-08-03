import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/globals.css";
import "@fontsource/montserrat";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 200,
      duration: 1600,
    });
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
