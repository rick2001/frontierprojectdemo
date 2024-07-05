import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
      <nav classname="navbar navbar-dark bg-dark">
        <div classname="container-fluid">
          <Link to="/" classname="navbar-brand mb-0 h1">Navbar</Link>
        </div>
      </nav>


    </div>
  )
}
