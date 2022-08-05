import { useEffect } from "react";
import { Helmet } from "react-helmet";

import logo from './logo.svg';
import './App.css';

import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import BackToTop from "./components/back-to-top/BackToTop";

function App() {
  return (
    <>
        <Helmet>
            <script src="https://code.jquery.com/jquery-3.4.1.min.js" type="text/javascript" defer></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js" type="text/javascript" defer></script>
            <script src="lib/easing/easing.min.js" type="text/javascript" defer></script>
            <script src="lib/slick/slick.min.js" type="text/javascript" defer></script>
            
            <script src="js/main.js" type="text/javascript" defer></script>
        </Helmet>

        <Header />
        <Main />
        <Footer />

        <BackToTop />
    </>    
        
  );
}

export default App;
