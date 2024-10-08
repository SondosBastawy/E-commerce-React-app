import React from 'react'
import imgLogo from "../Assets/Images/freshcart-logo.svg"
import { NavLink } from 'react-router-dom'


export default function SignOut() {
  
  return (
    <>
      <div className="container m-auto pt-4">
      <NavLink className="Logo " to="/"><img src={imgLogo} alt="Logo"/></NavLink>      
      You 
      </div>
    </>
  )
}
