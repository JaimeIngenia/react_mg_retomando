import React, { useState,useEffect } from 'react'
//import {getCourses} from "../api/courseApi" 
import courseStore from '../stores/courseStore.js'
import CourseList from './CourseList'
import { Link } from 'react-router-dom';
import { loadCourses } from '../actions/courseActions.js';
 



export const CoursesPages = (props) => {

    const [ courses, setCourses ] = useState(courseStore.getCourses());
    const [ variable, setVariable ] = useState(true);

    const persona = {
        saludo : "hola",
        despedida : "chao"
    }


    useEffect( ()=>{


        courseStore.addChangeListener(onChange);
        if(courseStore.getCourses().length === 0){
            loadCourses()
        }

        return () => courseStore.removeChangeListener(onChange);
        

        // getCourses()
        // .then(par_courses => {
        //     setCourses(par_courses);
        // })

    },[] )

    function onChange (){
        setCourses(courseStore.getCourses());
    }


    
    return(

        <>
        <br></br>

            <Link className='btn btn-primary' to="/course"  >Add course</Link>
            <div className=' container p-3 my-3 bg-dark text-white' >Hola soy courses</div>
            <CourseList coursesJaime={courses} variable={{state:variable, useState:setVariable}} />
        </>
   )

 }











