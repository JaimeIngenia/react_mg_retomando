import React from 'react';
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom';

function Header(){

    const activeStyleJaime = { color: "orange" };


    return (
        <nav>
            <NavLink activeStyle={{ color: 'orange' }} to='/' > Home </NavLink>  {"|"}  
            <NavLink activeStyle={activeStyleJaime} to='/about'> About </NavLink>  {"|"}  
            <NavLink activeStyle={activeStyleJaime} to='/courses' > Courses </NavLink>
            
        </nav>
    );
}

export default Header;