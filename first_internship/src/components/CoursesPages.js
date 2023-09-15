import React, { useState,useEffect } from 'react'
import {getCourses} from "../api/courseApi" 
import CourseList from './CourseList'
import { Link } from 'react-router-dom';
 



export const CoursesPages = (props) => {

    const [ courses, setCourses ] = useState([]);
    const [ variable, setVariable ] = useState(true);

    const persona = {
        saludo : "hola",
        despedida : "chao"
    }


    useEffect( ()=>{

        getCourses()
        .then(par_courses => {
            setCourses(par_courses);
        })

    },[] )




    
    return(

        <>
        <br></br>

            <Link className='btn btn-primary' to="/course"  >Add course</Link>
            <div className=' container p-3 my-3 bg-dark text-white' >Hola soy courses</div>
            <CourseList coursesJaime={courses} variable={{state:variable, useState:setVariable}} />
        </>
   )

 }











