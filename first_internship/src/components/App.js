import React from "react";
import HomePage from './HomePage';
import {Route , Routes } from 'react-router-dom';
import AboutPage from './AboutPage';
import Header from "./Header";

function App(){

    

    

    function getPage(){
        const route = window.location.pathname;
        return route === "/about" ? <AboutPage/> : <HomePage/>;
    }


    return(
        <div className="container-fluid" >
            <Header/>
            { getPage() }
        </div>
    )

    


    // return(
    //     <Routes>  
    //         <Route path="/" exact Component = {HomePage} />
    //         <Route path="/ruta" Component = {AboutPage} />
    //     </Routes>
    // )

}


export default App;


