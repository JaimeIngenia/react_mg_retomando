import React, { useState,useEffect } from 'react'
import {getCourses} from "../api/courseApi" 

export const CoursesPages = (props) => {

    const [ courses, setCourses ] = useState([]);

    useEffect( ()=>{
        getCourses().then(par_courses => setCourses(par_courses))
    },[] )

    
    return(

        <>
        <br></br>

            <div className=' container p-3 my-3 bg-dark text-white' >Hola soy courses</div>
        
            <table className='table' >

                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author ID</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    { courses.map( course => {
                        return(
                            <>
                                <tr key={course.id} >
                                    <td> { course.title } </td>
                                    <td> { course.authorId } </td>
                                    <td> { course.category } </td>
                                </tr>
                            </>
                        )
                    } ) }
                </tbody>
            </table>
        </>
   )

 }