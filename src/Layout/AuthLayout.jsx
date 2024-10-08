import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import imgLogo from "../Assets/Images/freshcart-logo.svg"

export default function AuthLayout() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light py-3 ">
      <div className="container-fluid mx-4">
    <NavLink className="navbar-brand" to="/"><img src={imgLogo} alt="Logo" /></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/Signin">Signin</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Signup">Signup</NavLink>
        </li>
      </ul>
    </div>
  </div>
  </nav>
      <Outlet/>
    </>
  )
}
