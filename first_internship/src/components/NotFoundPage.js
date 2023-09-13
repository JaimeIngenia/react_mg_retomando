import React from 'react'
import { Link } from 'react-router-dom'



export const NotFoundPage = (props) => {
  return(
    
    <>
        <div className='p-3 my-3 bg-dark ' >
            <h1>NotFoundPage</h1>

            <p>
                <Link to ="/">Back to Home</Link>
            </p>


        </div>
    </>

   )

 }