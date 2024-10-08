import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function NewPassword() {

  let navigate = useNavigate()

  const [errorMsg, SetErrorMsg] = useState('')
  const [loading, setLoading] = useState(true)




async function  sendDataToApi(values){
    setLoading(false)
    const data = {
        ...values,
        email: localStorage.getItem("email")
    }
    await axios.put('https://ecommerce.routemisr.com/api/v1/auth/resetPassword', data)
    .then(({data}) =>{
        console.log(data)
    // if (data.message === 'success'){
        // localStorage.setItem('token', data.token)
        navigate('/SignIn')
    // }
    }).catch((err) =>{SetErrorMsg(err.response.data.message)})
    setLoading(true)
}


function validate(values){

  const myErrors= {}

  if (!/^[A-Z][A-Za-z0-9@]{6,}$/.test(values.newPassword)){
    myErrors.newPassword= 'password must start Capital letter and must be 7 characters'
  } 
  return myErrors

} 
  let register= useFormik({
    initialValues:{
      newPassword:'',
    },
    validate,
    onSubmit:(values)=>{
      sendDataToApi(values)
      console.log(values)
    }
  })

  return (
    <div>
        <div className="w-75 m-auto pt-4 mt-5 pt-5">
        <h3> Confirm the new password:</h3>
        <form  onSubmit={register.handleSubmit}>

        <div className='my-3'>
        <span> your Email: <b>{localStorage.getItem("email")}</b>
        </span>
        </div>
        {/* <input type="email" onBlur={register.handleBlur} onChange={register.handleChange} name='email' className='form-control mb-3 w-75' id='email' />
        {register.errors.email && register.touched.email? <div className="alert alert-danger">{register.errors.email}</div>:''}  */}

        <label htmlFor="password" >New Password:</label>
        <input type="password" onBlur={register.handleBlur} onChange={register.handleChange} name='newPassword' className='form-control mb-3 w-75' id='newPassword' />
        {register.errors.password && register.touched.password? <div className="alert alert-danger">{register.errors.password}</div>:''} 

          {errorMsg ?<div className="alert alert-danger">{errorMsg}</div> :''}
        <button disabled={!(register.dirty && register.isValid)} type='submit' className='btn bg-main text-white'>{loading ? 'confirm new password' :'Loading...'}</button>
        </form>
        </div>
    </div>
  )
}
