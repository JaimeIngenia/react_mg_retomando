import React from 'react';
import { Link } from 'react-router-dom';

function NoEncontrado(){


    return (
        <div>
            <h1>NotFoundPage</h1>

            <p>
                <Link to ="/">Back to Home</Link>
            </p>
        </div>
    );
}

export default NoEncontrado;