import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import {CourseForm} from './CourseForm.js';
//import * as courseApi from "../api/courseApi.js"//PILAS CON ESTA, SE ELIMINA EN STORE: INTERACTIONS
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'
import courseStore from '../stores/courseStore.js'
import * as courseActions from "../actions/courseActions.js"


export const ManageCoursePage  = (props) => {
  let navigate = useNavigate();
  let {slug} = useParams();
  const [ errors ,setErrors ] = useState({})
//prueba
  const [ course, setCourse ] = useState({
    id: null,
    slug: "",
    title: "",
    authorId:"",
    category:""
  });

  useEffect( () => {
    // const slug = props.match.params.slug; //del path "./courses/:slug"
    // let slug = slug;

    if (slug){
      // courseApi.getCourseBySlug(slug).then( _course =>
      //   setCourse(_course)
      // )
      setCourse(courseStore.getCourseBySlug(slug) )
    }
  // },[props.match.params.slug] )
},[slug] )

  function handleChange({target}){
    const updatedCourse = {...course, [target.name]: target.value};
    // const updatedCourse = {...course} // Esto copia el objeto Course
    // updatedCourse.title = event.target.value
    // es lo mismo que
    // const updatedCourse = {...course, title: event.target.value }
    setCourse(updatedCourse);

  }

  function formIsValid () {
    const _errors = {};

    if( !course.title) _errors.title = "Title is required"
    if( !course.authorId) _errors.authorId= "Author ID is required"
    if( !course.category) _errors.category= "category is required"
    setErrors(_errors);
    return Object.keys(_errors).length === 0; 
  }

  function handleSubmit(event){
    event.preventDefault();
    if( !formIsValid() ) return ;
    

    courseActions.saveCourse(course).then( () =>{
      alert("Hola Mundo")
      
      navigate("/courses", {replace: true});
      //return redirectDocument("/courses");

      toast.success("Course saved.")


    } );
  }

  return(
    <div>
        <h1 > Manage Course</h1>

        <CourseForm 
          errors={errors}
          courseAndres={course}
          onChange={handleChange} 
          onSubmit={handleSubmit} 
         
        />

        {/* { slug } */}


    </div>
   )

 }


//  export default withRouter(ManageCoursePage);