import { NavLink, Link } from "react-router-dom";

function Navbar() {
    return(
        <nav>
            <ul className='d-flex justify-content-center'>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/filter">Filter</NavLink></li>
              <li><NavLink to="/contect">Contect</NavLink></li>
              <li><Link to="/login">Logout</Link></li>
            </ul>
          </nav>
    )
}

export default Navbar;