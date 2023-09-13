import React, { useState,useEffect } from 'react'
import {getCourses} from "../api/courseApi" 
import CourseList from './CourseList'

export const CoursesPages = (props) => {

    const [ courses, setCourses ] = useState([]);

    useEffect( ()=>{
        getCourses().then(par_courses => setCourses(par_courses))
    },[] )

    
    return(

        <>
        <br></br>

            <div className=' container p-3 my-3 bg-dark text-white' >Hola soy courses</div>
            <CourseList coursesJaime={courses} />

        </>
   )

 }