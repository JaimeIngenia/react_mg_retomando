import React, { useState } from "react";
import { Nav } from "./components/Nav/Nav";
import { ShoppingCar } from "./pages/ShoppingCard";
import { HomePage } from "./pages/homePage/index";
import { Footer } from "./components/Footer/Footer";
import { Route, Routes, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PruebaApi } from "./components/prueba/PruebaApi";

export const App = (props) => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <ToastContainer autoClose={3000} hideProgressBar />
      <Nav counter={counter} />

      <Routes>
        <Route path="/" exact Component={HomePage} />
        <Route path="/car" Component={ShoppingCar} />
        <Route path="/p" Component={PruebaApi} />
      </Routes>
      <Footer />
    </>
  );
};
