import React from 'react'
import imgLogo from "../Assets/Images/freshcart-logo.svg"


export default function ProtectedRoutes({children}) {


if(localStorage.getItem('userToken')){
    return children
}
else{
    localStorage.clear()
    return <>
        <div className='mt-5 pt-5 text-center mb-5'>
            <div className='mt-3 '><img src={imgLogo} alt="Logo" className='w-50'/></div>
            <h2>Please Sign-in to access this page</h2></div>
        </>
    }
    

}
