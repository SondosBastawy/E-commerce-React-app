import React, { useContext, useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import { userContext } from '../Context/UserContext'
import Footer from '../Footer/Footer'




export default function Layout() {
  let { setUserToken } = useContext(userContext)
  useEffect(() => {
    if (localStorage.getItem('userToken') !== '') {
      setUserToken(localStorage.getItem('userToken'))
    }
  }, [setUserToken]);
  return (
    <>
    <Navbar/>
    <Outlet/>    
    <Footer/>
    </>
  )
}
