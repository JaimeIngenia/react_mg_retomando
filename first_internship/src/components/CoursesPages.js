import React, { useState,useEffect } from 'react'
import {getCourses} from "../api/courseApi" 
import CourseList from './CourseList'




export const CoursesPages = (props) => {

    const [ courses, setCourses ] = useState([]);
    const [ variable, setVariable ] = useState(true);

    const persona = {
        saludo : "hola",
        despedida : "chao"
    }


    useEffect( ()=>{
        // click();
        getCourses()
        .then(par_courses => setCourses(par_courses))
    },[variable===true] )

    function click (){
        alert("Hola hiciste un click")
        // getCourses()
        // .then(par_courses => setCourses(par_courses))
    }

    let variableControl = true;

    
    return(

        <>
        <br></br>

            <div className=' container p-3 my-3 bg-dark text-white' >Hola soy courses</div>
            <CourseList coursesJaime={courses} variable={{state:variable, useState:setVariable}} />
            <button className='btn btn-primary'  >Click</button>
        </>
   )

 }











