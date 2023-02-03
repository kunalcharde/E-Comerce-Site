import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Navbar.css"
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
       <div className="navbar-logo" onClick={() =>{
              navigate("/")}}>
        E-Com
       </div>
       <div className="navbar-list">
        <ul >
            <li><button onClick={() =>{
              navigate("/");
            }}>Home</button></li>
            <li><button onClick={() =>{
              navigate("/cart");
            }}>Cart</button></li>
        </ul>
       </div>
    </div>
  )
}

export default Navbar
