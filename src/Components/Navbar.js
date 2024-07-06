import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand mb-0 h1">Home</Link>
        </div>
      </nav>


    </div>
  )
}
