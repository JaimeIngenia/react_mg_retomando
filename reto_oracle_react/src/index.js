import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import "bootstrap/dist/css/bootstrap.min.css" ;
import {  BrowserRouter as Router } from "react-router-dom";
import {Route , Routes , Redirect} from 'react-router-dom';

import { NuevoVideo } from './components/nuevoVideo/NuevoVideo'
import { Categoria } from './components/categoria/Categoria'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import HomePage from './components/homePage/HomePage';
import HeaderNav from './components/header_nav/HeaderNav';
import NotFound from './components/notFound/NotFound';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


//import * as React from "react";
//import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/categoriasOracle",
    element: <Categoria/>,
  },
  {
    path: "/categoriasOracle/:codigoSeguridad",
    element: <Categoria/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(



    <React.StrictMode>
      <ToastContainer autoClose={3000} hideProgressBar />
      <Header/>
    <RouterProvider router={router} />

    {/* <Routes>
      <Route path="/" exact component={HomePage} />
      <Route path="/categoriasOracle" exact component={Categoria} />
      <Route path="/categoriasOracle/:codigoSeguridad" component={Categoria} />
      <Route path="/videos" component={NuevoVideo} />
    </Routes> */}

      {/* <App /> */}
      {/* <Categoria/> */}
      {/* <NuevoVideo/> */}
      {/* <HomePage/> */}
      <Footer/>
 
    </React.StrictMode>


);

