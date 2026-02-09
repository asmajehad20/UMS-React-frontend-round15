import React from 'react'
import style from './Navbar.module.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    
    <nav className={` navbar navbar-expand-lg navbar-dark text-uppercase fixed-top ${style.navbar}`}>
      <div className="container">
        <a className="navbar-brand fw-bold fs-3" href="#">
          Start Bootstrap
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-white fw-bold fs-5" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-bold fs-5" to="/users">Users</Link>
            </li>
           
          </ul>
        </div>

      </div>
    </nav>
    
  )
}
