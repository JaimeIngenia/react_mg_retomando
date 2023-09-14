import React from 'react'
import { Link, useParams,params } from 'react-router-dom';


export const ManageCoursePage = props => {
  return(

    <>
        <div> Manage Course  </div>

        {
            props.match.params.slug
        } 

    </>
   )

 }