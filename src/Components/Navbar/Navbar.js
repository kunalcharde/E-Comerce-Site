import React from 'react'
import {  Link } from 'react-router-dom'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className="navbar">
       <div className="navbar-logo">
        Logo
       </div>
       <div className="navbar-list">
        <ul >
            <li><Link to ="/" >Home</Link></li>
            <li><Link to ="/cart">Cart</Link></li>
        </ul>
       </div>
    </div>
  )
}

export default Navbar
