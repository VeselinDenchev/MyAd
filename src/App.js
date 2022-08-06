import { useLayoutEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Routes, Route, useLocation } from 'react-router-dom';
import $ from 'jquery';

import logo from './logo.svg';
import './App.css';

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import BackToTop from "./components/back-to-top/BackToTop";
import Products from "./components/products/Products";

function App() {
    let location = useLocation();

  useLayoutEffect(() => {
    const jqueryScript = document.createElement('jqueryScript');
    jqueryScript.src = "https://code.jquery.com/jquery-3.4.1.min.js";
    document.body.appendChild(jqueryScript);

    const bootstrapScript = document.createElement('bootstrapScript');
    bootstrapScript.src = "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js";
    document.body.appendChild(bootstrapScript);

    const easingScript = document.createElement('easingScript');
    easingScript.src = "%PUBLIC_URL%/lib/easing/easing.min.js";
    document.body.appendChild(easingScript);

    const slickScript = document.createElement('slickScript');
    slickScript.src = "%PUBLIC_URL%/lib/slick/slick.min.js";
    document.body.appendChild(slickScript);

    const mainScript = document.createElement('mainScript');
    mainScript.src = "%PUBLIC_URL%/js/main.js";
    mainScript.type = 'text/javascript';
    document.body.appendChild(mainScript);


    return () => {
      document.body.removeChild(jqueryScript);
      document.body.removeChild(bootstrapScript);
      document.body.removeChild(easingScript);
      document.body.removeChild(slickScript);
      document.body.removeChild(mainScript);
    }
  }, [location.pathname]);

  return (
    <>
        {/* <Helmet>
            <script src="js/main.js" type="text/javascript" defer></script>
        </Helmet> */}

        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>

        <Footer />

        <BackToTop />
    </>    
  );
}

export default App;
