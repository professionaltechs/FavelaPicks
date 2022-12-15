import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import favelabetsLOGO from '../../assets/img/favela.png'
import {FaLock, FaUser} from 'react-icons/fa'
import { UserContext } from '../../authContext/AuthProvider';
import { axiosAuthInstance } from '../../axios';
import { check } from '../../functions';

export const NavBar = () => {
  const {user, setUser} = useContext(UserContext)

  console.log(user)

  // const test = check("email")

  // console.log(test)

  useEffect(()=>{
    if(user.isLoggedIn){
      axiosAuthInstance({
        method: "post",
        url: "api/user/userDetails",
        data: {
          email: user.email
        }
      }).then(res => {
        console.log(res)
        if(res.statusCode != 403){
          setUser(prevStat => {
            return {
              ...prevStat,
              membershipStatus: res.data.membershipStatus
            }
          })
        }
      }).catch(err => console.log(err))
    }
  },[user.isLoggedIn])

  // console.log(here)
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
                    <li>
                      <Link className="dropdown-item d-flex justify-content-between" to={user.membershipStatus == 1 ? "/NBA" : "#"}>
                        NBA Picks 
                        {user.membershipStatus == 1 ? "" : <FaLock/>}
                      </Link>
                    </li>
                    <li >
                      <Link className="dropdown-item d-flex justify-content-between" to={user.membershipStatus == 1 ? "/NCAAF" : "#"} aria-disabled>
                        NCAAF Picks 
                        {user.membershipStatus == 1 ? "" : <FaLock/>}
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item d-flex justify-content-between" to={user.membershipStatus == 1 ? "/NCAAB" : "#"}>
                        NCAAB Picks 
                        {user.membershipStatus == 1 ? "" : <FaLock/>}
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item d-flex justify-content-between" to={user.membershipStatus == 1 ? "/NFL" : "#"}>
                        NFL Picks 
                        {user.membershipStatus == 1 ? "" : <FaLock/>}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item ms-3">
                  <Link className="nav-link active" to="/blog" style={{fontSize: "0.8rem", fontWeight: "700", color: "white"}}>BLOG</Link>
                </li>
                <li className="nav-item ms-3">
                  <Link className="nav-link active" to="/contact" style={{fontSize: "0.8rem", fontWeight: "700", color: "white"}}>CONTACT</Link>
                </li>
                <li className="nav-item ms-md-3" style={{display: user.membershipStatus == 1 ? "none" : "block"}}>
                  <Link className="nav-link active" to="/premium" style={{color: "white",
                  backgroundColor: "#F04E45",
                  border: "1px solid #F04E45",
                  padding: "8px 13px",
                  borderRadius: "4px",
                  fontSize: "0.7rem",
                  fontWeight: "600",}}>GO PREMIUM</Link>
                </li>
                <li className="nav-item ms-md-3" style={{display: user.membershipStatus == 1 ? "block" : "none"}}>
                  <Link className="nav-link active" to="#" style={{color: "white",
                  backgroundColor: "#F04E45",
                  border: "1px solid #F04E45",
                  padding: "8px 13px",
                  borderRadius: "4px",
                  fontSize: "0.7rem",
                  fontWeight: "600",}}>PREMIUM MEMBER</Link>
                </li>
              </ul>
              <div className="d-flex">
                {user.isLoggedIn ? null : <Link to='/signup' className="nav-link active hover">Register</Link>}
                {user.isLoggedIn ? null : <Link to='/' className="nav-link active ms-2 hover">Login</Link>}
                { user.isLoggedIn ? <div style={{backgroundColor: "white", padding: "5px 15px", borderRadius: "4px", fontWeight: "600"}}>
                    <FaUser style={{marginRight: "8px"}}/>
                    {user.userName}
                  </div> : null
                }
                {user.isLoggedIn ? <Link onClick={()=>{
                  localStorage.removeItem("isLoggedIn")
                  localStorage.removeItem("userName")
                  localStorage.removeItem("token")
                  localStorage.removeItem("email")
                  localStorage.removeItem("membershipStatus")
                  setUser(prevStat=>{
                    return{
                      ...prevStat,
                      isLoggedIn: false,
                      userName: "",
                      email: "",
                      membershipStatus: 0
                    }
                  })
                }} to='/' className="nav-link active ms-2 hover">Logout</Link> : null}
              </div>
            </div>
          </div>
        </nav>
      </div>
  )
}
