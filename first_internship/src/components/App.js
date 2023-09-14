import React from "react";
import HomePage from './HomePage';
// import {Route , Routes } from 'react-router-dom';
import AboutPage from './AboutPage';
import Header from "./Header";
import { CoursesPages } from "./CoursesPages";
import {Navigate, Route , Routes, Redirect} from 'react-router-dom';

import { ManageCoursePage } from "./ManageCoursePage";
import NotFoundPage from "./NotFoundPage";

function App(){


    return(
        
        <div className="container-fluid" >
                <Header/>

          
                    <Routes>
                        <Route path="/" exact Component={HomePage} />
                        <Route path="/courses" Component={CoursesPages} />
                        <Route path="/about" Component={AboutPage} /> 
                        <Route path="/course" Component={ManageCoursePage} />
                        {/* <Route path="/404" element={<NotFoundPage />} />
          	            <Route path="*" element={<Navigate to="/404" />} />          */}
                        
                        

                    </Routes>
                
            </div>

    )


}


export default App;


