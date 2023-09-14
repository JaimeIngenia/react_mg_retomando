import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const CourseList= (props) => {
    const [ courses, setCourses ] = useState(false);

    return(
    <div>

        <table className='table' >

        <thead>
            <tr>
                <th>Title</th>
                <th>Author ID</th>
                <th>Category</th>
            </tr>
        </thead>
        <tbody>
            { props.coursesJaime.map( course => {

                    return(
                        <>
                            <tr key={course.id} >
                                <td> 
                                    <Link to={"/course/" + course.slug } >  { course.title }  </Link>
                                </td>
                                <td  > { course.authorId } </td>
                                <td  > { course.category } </td>
                            </tr>
                        </>
                        
                    )               
            } ) }
        </tbody>
        </table>

    </div>
   )

 }



 export default CourseList;