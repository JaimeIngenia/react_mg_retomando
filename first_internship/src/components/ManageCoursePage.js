import React, { useState } from 'react'
import { Prompt, useParams } from "react-router-dom";
import {CourseForm} from './CourseForm.js';


export const ManageCoursePage  = (props) => {
  // let {slug} = useParams();
  const [ course, setCourse ] = useState({
    id: null,
    slug: "",
    title: "",
    authorId:"",
    category:""
  });





  function handleChange(event){
    const updatedCourse = {...course, [event.target.name]: event.target.value};
    // updatedCourse.title = event.target.value
    setCourse(updatedCourse);

  }

  return(
    <div>
        <h1 > Manage Course</h1>

        <CourseForm courseAndres={course} onChange={handleChange}  />

        {/* { slug } */}


    </div>
   )

 }