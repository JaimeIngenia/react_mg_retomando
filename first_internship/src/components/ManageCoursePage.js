import React, { useState,useHistory, useEffect } from 'react'
import { Navigate, Prompt, useParams } from "react-router-dom";
import {CourseForm} from './CourseForm.js';
import * as courseApi from "../api/courseApi.js"
// import { Route, Routes, useNavigate } from 'react-router-dom';
// import { withRouter } from "react-router-dom";
import { redirect } from "react-router-dom";
import { redirectDocument } from "react-router-dom";
// import Navigate from "react-router-dom";
import { useNavigate ,Redirect} from "react-router-dom";
// import { redirectDocument } from "react-router-dom";
import {toast} from 'react-toastify'

export const ManageCoursePage  = (props) => {
  let {slug} = useParams();
  const [ errors ,setErrors ] = useState({})

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
      courseApi.getCourseBySlug(slug).then( _course =>
        setCourse(_course)
      )
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

    courseApi.saveCourse(course).then( () =>{
      alert("Hola Mundo")
      return redirectDocument("/courses");

      toast.success("Course saved.")

      // { window.location.href = "course"; }

      // <Redirect from="/" to="/home" />
      // const history = useHistory();
      // history.push("/courses");

      // let navigate = useNavigate();
      // return navigate("/courses");
      // redirect("/courses")
      // return redirectDocument("/courses");
      // <Navigate to = "/courses"/>

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