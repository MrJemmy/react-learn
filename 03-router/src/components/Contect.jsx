import { NavLink, Outlet } from "react-router-dom";

function Contect() {

  return (
    <>
      <h1>Contect us page</h1>

      <nav>
        <ul className="d-flex justify-content-center">
          <li><NavLink to='email'>Email </NavLink></li>
          <li><NavLink to='phone'>Phone</NavLink></li>
          <li><NavLink to='socialmedia'>Social Media</NavLink></li>
        </ul>
      </nav>


      <Outlet />
    </>
  )
}

export default Contect;
