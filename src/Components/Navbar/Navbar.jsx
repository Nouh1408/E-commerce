import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import iconcolor from '../Navbar/Navbar.module.css';



export default function Navbar() {
  return (
    
  <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
  <a className="navbar-brand" href="#">
  <FaShoppingCart className={iconcolor['icon-color']} /> 
  <span className={iconcolor['text-large']}>fresh cart</span> 
</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="#">register</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">login</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </div>

  )
}
