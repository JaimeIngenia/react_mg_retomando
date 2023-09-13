import React from "react";
import HomePage from './HomePage';
// import {Route , Routes } from 'react-router-dom';
import AboutPage from './AboutPage';
import Header from "./Header";
import { CoursesPages } from "./CoursesPages";
import {Route , Routes, Switch , Redirect} from 'react-router-dom';
import { NotFoundPage } from "./NotFoundPage";




function App(){

    // function getPage(){
    //     const route = window.location.pathname;
    //     return route === "/about" ? <AboutPage/> : <HomePage/>;
    //     return route === "/courses" ? <CoursesPages />: <HomePage/>;
    // }

    return(
        
        <div className="container-fluid" >
                <Header/>

                <switch>
                    <Routes>
                        <Route path="/" exact Component={HomePage} />
                        <Route path="/courses" Component={CoursesPages} />
                        <Route path="/about" Component={AboutPage} /> 

                        {/* <Redirect from="/about-page" to="about"  /> */}

                        <Route component={NotFoundPage} />
                    </Routes>
                </switch>



                {/* <CoursesPages/> */}
                {/* { getPage() }  */}
                
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


