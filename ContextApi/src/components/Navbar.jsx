import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
        
          <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
            <p>Home</p>
          </Link>
          <Link to="/login" style={{ textDecoration: "none", color: "#000" }}>
            <p>Login</p>
          </Link>
    </div>
  )
}

export default Navbar