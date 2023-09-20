import React from 'react'
import {Link} from "react-router-dom"

const NotFound = (props) => {
    return(
        <>
            <h1>NotFound</h1>
            <p>
                <Link to ="/">Regresar al inicio</Link>
            </p>
        </>
    )
}


export default NotFound