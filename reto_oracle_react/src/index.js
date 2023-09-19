import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

import { NuevoVideo } from './components/nuevoVideo/NuevoVideo'
import { Categoria } from './components/categoria/Categoria'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Header/>
    <Categoria/>
    {/* <NuevoVideo/> */}
    <Footer/>
  </React.StrictMode>
);
