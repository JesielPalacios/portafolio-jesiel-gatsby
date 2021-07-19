import React from 'react'
import Navbar from './shared/navbar'
import "./container.scss"
import "../style.scss"

export default function Container( { children } ) {
  return (
    <div className="container">
      <Navbar />
      {children}
      <footer>2020</footer>
    </div>
  )
}
