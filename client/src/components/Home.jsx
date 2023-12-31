import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faLocust } from "@fortawesome/free-solid-svg-icons";


// import './home.css'

const Home = () => {
  function handleLogout() {
    alert('Logged Out successfully!');
  }
  
  return (
    <div style={{background:"teal"}} className="container-fluid p-4 mt-5">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="left-section">
          <b className="mr-4">
            <Link style={{textDecoration:"none",color:"#90EE90"}} to='/home' ><FontAwesomeIcon style={{color:"#E18728",marginRight:"10px"}} icon={faHouse} />HOME</Link>
          </b>
          <b>
            <Link style={{textDecoration:"none",marginLeft:"60px",color:"#90EE90"}} to='/about' ><FontAwesomeIcon style={{color:"#E18738",marginRight:"12px"}} icon={faLocust} />ABOUT</Link>
          </b>
        </div>
        <div className="right-section">
          <b className="mr-4">
            <Link style={{textDecoration:"none",color:"#F76B1C"}} to='/profile' ><FontAwesomeIcon style={{color:"#E18728",marginRight:"12px"}} icon={faUser} />PROFILE</Link>
          </b>
          <Link style={{textDecoration:"none",marginLeft:"50px",color:"#F76B1C"}} to='/login'  onClick={handleLogout}><FontAwesomeIcon style={{color:"#E18738",marginRight:"12px"}} icon={faRightFromBracket} />Logout</Link>
        </div>
      </div>
    </div>
  )
}


export default Home
