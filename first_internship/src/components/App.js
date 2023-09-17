import React from "react";
import HomePage from './HomePage';
// import {Route , Routes } from 'react-router-dom';
import AboutPage from './AboutPage';
import Header from "./Header";
import { CoursesPages } from "./CoursesPages";
import {Route , Routes , Redirect} from 'react-router-dom';
import { NotFoundPage } from "./NotFoundPage";
import { ManageCoursePage } from "./ManageCoursePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function App(){

    // function getPage(){
    //     const route = window.location.pathname;
    //     return route === "/about" ? <AboutPage/> : <HomePage/>;
    //     return route === "/courses" ? <CoursesPages />: <HomePage/>;
    // }

    return(
        
        <div className="container-fluid" >
            <ToastContainer autoClose={3000} hideProgressBar />
                <Header/>


                    <Routes>
                        <Route path="/" exact Component={HomePage} />
                        <Route path="/courses" Component={CoursesPages} />
                        <Route path="/about" Component={AboutPage} /> 
                        <Route path="/course/:slug" Component={ManageCoursePage} /> 
                        <Route path="/course" exact Component={ManageCoursePage}/> 

                        {/* <Redirect from="/about-page" to="about"  /> */}

                        {/* <Route component={NotFoundPage} /> */}
                    </Routes>


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


