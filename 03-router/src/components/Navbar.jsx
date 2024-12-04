import { NavLink } from "react-router-dom";

function Navbar() {
    return(
        <nav>
            <ul className='d-flex justify-content-center'>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
            </ul>
          </nav>
    )
}

export default Navbar;