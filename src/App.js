import { useLayoutEffect } from "react";
import { Helmet } from "react-helmet";
import { Routes, Route, useLocation } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import Header from "./components/common/header/Header";
import Home from "./components/pages/home/Home";
import Footer from "./components/common/footer/Footer";
import BackToTop from "./components/common/back-to-top/BackToTop";
import Products from "./components/pages/products/Products";
import ProductDetail from "./components/pages/product-detail/ProductDetail";
import Cart from "./components/pages/cart/Cart";
import Checkout from "./components/pages/checkout/Checkout";
import MyAccount from "./components/pages/my-account/MyAccount";
import Wishlist from "./components/pages/wishlist/Wishlist";
import Login from "./components/pages/login/Login";

function App() {
    let location = useLocation();

  useLayoutEffect(() => {
    const jqueryScript = document.createElement('jqueryScript');
    jqueryScript.src = "https://code.jquery.com/jquery-3.4.1.min.js";
    jqueryScript.defer = true;
    document.body.appendChild(jqueryScript);

    const bootstrapScript = document.createElement('bootstrapScript');
    bootstrapScript.src = "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js";
    bootstrapScript.defer = true;
    document.body.appendChild(bootstrapScript);

    const easingScript = document.createElement('easingScript');
    easingScript.src = "%PUBLIC_URL%/lib/easing/easing.min.js";
    easingScript.defer = true;
    document.body.appendChild(easingScript);

    /*const slickScript = document.createElement('slickScript');
    slickScript.src = "%PUBLIC_URL%/lib/slick/slick.min.js";
    document.body.appendChild(slickScript);*/

    const mainScript = document.createElement('mainScript');
    mainScript.src = "%PUBLIC_URL%/js/main.js";
    mainScript.defer = true;
    document.body.appendChild(mainScript);

    console.log(location.pathname);


    return () => {
      document.body.removeChild(jqueryScript);
      document.body.removeChild(bootstrapScript);
      document.body.removeChild(easingScript);
      //document.body.removeChild(slickScript);
      document.body.removeChild(mainScript);

    }
  }, [location.pathname]);

  return (
    <>
        <Helmet>
            <script src="js/main.js" type="text/javascript" defer></script>
        </Helmet>

        <Header />

        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product-detail" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/login" element={<Login />} />
        </Routes>

        <Footer />

        <BackToTop />
    </>    
  );
}

export default App;
