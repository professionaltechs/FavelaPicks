import React from 'react'
import { Link } from 'react-router-dom'
import favelabetsLOGO from '../../assets/img/logo_favelabets.png'

export const NavBar = () => {
  // localStorage.getItem("isLoggedIn")
  return (
    <div className="header">
        <nav className="navbar navbar-expand-lg navbar-light px-5 py-3" style={{backgroundColor: "#2A2A2A"}}>
          <div className="container-fluid">
            <Link className="navbar-brand" to='/home'>
              <img
                style={{height: "30px"}}
                src={favelabetsLOGO}
                alt=""
              />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-4 d-flex align-items-end ">
                <li className="nav-item dropdown ms-3">
                  <a style={{fontSize: "0.8rem", fontWeight: "700", color: "white"}} className="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Today's Picks
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item" to="/NBA">NBA Picks</Link></li>
                    <li><Link className="dropdown-item" to="/NCAAF">NCAAF Picks</Link></li>
                    <li><Link className="dropdown-item" to="/NCAAB">NCAAB Picks</Link></li>
                    <li><Link className="dropdown-item" to="/NFL">NFL Picks</Link></li>
                  </ul>
                </li>
                <li className="nav-item ms-3">
                  <Link className="nav-link active" to="/blog" style={{fontSize: "0.8rem", fontWeight: "700", color: "white"}}>BLOG</Link>
                </li>
                <li className="nav-item ms-3">
                  <Link className="nav-link active" to="/contact" style={{fontSize: "0.8rem", fontWeight: "700", color: "white"}}>CONTACT</Link>
                </li>
                <li className="nav-item ms-md-3">
                  <Link className="nav-link active" to="/premium" style={{color: "white",
                  backgroundColor: "#F04E45",
                  border: "1px solid #F04E45",
                  padding: "8px 13px",
                  borderRadius: "4px",
                  fontSize: "0.7rem",
                  fontWeight: "600",}}>PREMIUM</Link>
                </li>
              </ul>
              <div className="d-flex">
                <Link to='/signup' className="nav-link active hover">Register</Link>
                <Link to='/' className="nav-link active ms-2 hover">Login</Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
  )
}
