import React, { useContext, useEffect } from 'react'
import imgLogo from "../Assets/Images/freshcart-logo.svg"
import { NavLink, useNavigate } from 'react-router-dom'
import { cartContext } from '../Context/CartContext'
import { userContext } from '../Context/UserContext'


export default function Navbar() {


  let {counter, getCart, setCounter } =useContext(cartContext)
  let {userToken , setUserToken} = useContext(userContext)
  let navigate = useNavigate()

  function signOut(){
    localStorage.setItem('userToken' , null)
    setUserToken(null)
    navigate('/Home')  
  }
  
  useEffect(()=>{
    ( async ()=>{
    let data = await getCart()
    setCounter(data.numOfCartItems)
  })()
  }, [])

  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light py-2 fixed-top mb-4">
      <div className="container-fluid mx-4">
    <NavLink className="navbar-brand" to="/"><img src={imgLogo} alt="Logo" /></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {userToken != null ? <>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/brands">Brands</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/categories">Categories</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Products">Products</NavLink>
        </li>
      </ul></>: null }
      
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

        {userToken != null ?<>
        <li className="nav-item border-start">
          <NavLink className="nav-link position-relative" to="/wishlist"> Wishlist
          <i className="fa-regular fa-heart"></i>
          <span className="position-absolute top-5 start-100 translate-middle badge rounded-pill bg-danger">
          </span></NavLink>
        </li>
        <li className="nav-item border-start">
          <NavLink className="nav-link position-relative" to="/cart">Cart
          <i className="fa-solid fa-cart-shopping mx-2"></i>
          <span className="position-absolute top-5 start-100 translate-middle badge rounded-pill bg-danger">
          {counter}</span></NavLink>
        </li>
        <li className="nav-item px-4 border-start">
          <button className="nav-link"  onClick={()=> signOut()}>SignOut</button>
        </li></>: <>
        <li className="nav-item px-4 border-start">
          <NavLink className="nav-link" to="/signin">logIn</NavLink>
        </li>
        <li className="nav-item px-4 border-start">
        <NavLink className="nav-link" to="/signup">Register</NavLink>
      </li></>}
      </ul>
    </div>
  </div>
  </nav>

    </>
  )
}
