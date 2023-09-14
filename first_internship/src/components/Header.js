import React from 'react';
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom';

function Header(){

    const activeStyleJaime = { color: "orange" };


    return (
        <nav>
            <NavLink  to='/' > Home </NavLink>  {"|"}  
            <NavLink  to='/about'> About </NavLink>  {"|"}  
            <NavLink  to='/courses' > Courses </NavLink>
            
        </nav>
    );
}

export default Header;