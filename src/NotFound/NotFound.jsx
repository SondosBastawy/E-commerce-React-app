import React from 'react'
import errorImg from '../Assets/Images/error.svg'

export default function NotFound() {
  return (
  <div className='d-flex flex-column pt-5 justify-content-center align-items-center mb-3'>
        <img src={errorImg} alt="Error404" className='pt-5 w-50' />
        <h2>Page Not Found</h2>
    </div>
    
  )
}
