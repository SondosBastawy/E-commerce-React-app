import axios from 'axios'
import React, { useState } from 'react'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'

export default function ForgotPassword() {


  const [SetErrorMsg] = useState('')
  let Navigate = useNavigate()

  async function  sendEmail(values){
    await axios.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords', values)
    .then(({data}) =>{
      console.log(data)

      if (data.statusMsg === 'success'){
      localStorage.setItem('email', values.email)
      Navigate('/verifyCode')
      }
    }).catch((err) =>{SetErrorMsg(err.response.data.message)})

  }
  function validate(values){

    const myErrors= {}
    if (!values.email){
      myErrors.email= 'email does not match.'
    } 
    return myErrors
  
  } 
    let check= useFormik({
      initialValues:{
        email:'',
      },
      validate,
      onSubmit:(values)=>{
        sendEmail(values)
      }
    })

  return (
    <>
    <div className="container mt-5 pt-5 d-flex justify-content-center align-items-center ">
      <div className='bg-info rounded-3 w-50 p-5'>
      <h4 className='text center'>Forgot Password</h4>
      <form onSubmit={check.handleSubmit} >
        <label htmlFor="email"> Email</label>
        <input type="email" onBlur={check.handleBlur} onChange={check.handleChange}  name='email' className='form-control mb-3 w-100' id='email' />
        <button type='submit' className='btn btn-light m-2'> send verify code </button>
      </form>
      </div>
    </div>
    </>
  )
}
