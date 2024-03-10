// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link, NavLink } from "react-router-dom";

import './Navbar.css'


const Navbar = ()=>{
    return(
        <>
        <nav>
          <Link to='/' className="title">LOGO</Link>
          <ul>
            <li>
              <NavLink to="/" >Home</NavLink>
            </li>
            <li>
              <NavLink to='/about'>About</NavLink>
            </li>
            <li>
            <NavLink to='/services'>Services</NavLink>
            </li>
            <li>
            <NavLink to='contact'>Contact</NavLink>

            </li>
          </ul>
        </nav>
        </>
    )
}


export default Navbar;