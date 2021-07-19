import React from 'react'
import { Link } from 'gatsby'
import "./navbar.scss"
export default function Navbar() {
  return (
    <ul className="navigation">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About me</Link>
      </li>
      <li>
        <Link to="/gallery">Work gallery</Link>
      </li>
    </ul>
  )
}
