import React from 'react'
import './Sig.css'
import LOGO from '../Images/LOGO1.png'
import { Link, Outlet } from 'react-router-dom'
function Navigation() {

  return (
    <>
    <nav className="navbar navbar-expand-lg fixed-top back">
  <div className="container-fluid">
  <img src={LOGO} className='logo'/>
    <a className="navbar-brand hed">Online Medical</a>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

        <li className="nav-item">
          <span  className="nav-link active spp" aria-current="page" ><Link className="LINK" to="/"> Home</Link></span>
        </li>

        <li className="nav-item">
          <span   className="nav-link active spp" aria-current="page"> <Link  className="LINK" to="/service">Service</Link></span>
        </li>

        <li className="nav-item">
          <span  className="nav-link active spp" aria-current="page"> <Link  className="LINK" to="medicine">Medicine</Link></span>
        </li>
       
      </ul>
      <form className="d-flex" role="search">
        <button className="btn btn-primary" type="submit"><Link  className="LINK" to="signup">SignUp</Link></button>
      </form>
    </div>
  </div>
</nav>
<Outlet/>
    </>
  )
}

export default Navigation
