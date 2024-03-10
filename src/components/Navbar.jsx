// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";


const Navbar = ()=>{
    return(
        <>
        <nav>
          <ul>
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>About</Link>
            </li>
            <li>
            <Link>Services</Link>
            </li>
            <li>
            <Link>Contact</Link>

            </li>
          </ul>
        </nav>
        </>
    )
}


export default Navbar;