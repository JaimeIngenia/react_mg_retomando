import React from "react";
import HomePage from './HomePage';
import {Route , Routes } from 'react-router-dom';
import AboutPage from './AboutPage';

function App(){

    const route = window.location.pathname;

    //if( route === "/about" ) return <AboutPage/>
    return route === "/about" ? <AboutPage/> : <HomePage/>;




    // return(
    //     <Routes>  
    //         <Route path="/" exact Component = {HomePage} />
    //         <Route path="/ruta" Component = {AboutPage} />
    //     </Routes>
    // )


    

}


export default App;


