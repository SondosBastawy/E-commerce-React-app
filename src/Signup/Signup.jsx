import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Signup() {

  let navigate = useNavigate()

  const [errorMsg, SetErrorMsg] = useState('')
  const [loading, setLoading] = useState(true)




  async function  sendDataToApi(values){
    setLoading(false)
    await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup', values)
    .then(({data}) =>{
      if (data.message == 'success'){
        navigate('/SignIn')
      }
    }).catch((err) =>{SetErrorMsg(err.response.data.message)})
    setLoading(true)

  }


function validate(values){

  const myErrors= {}
  if (!values.name){
    myErrors.name= 'name is required.'
  } 
  if (!values.email){
    myErrors.email= 'email is required.'
  } 
  if (!/^[A-Z][A-Za-z0-9@]{6,}$/.test(values.password)){
    myErrors.password= 'password must start Capital letter and must be 7 characters'
  } 
  if (values.rePassword !== values.password){
    myErrors.rePassword= 'passwords are not match.'
  } 
  return myErrors

} 
  let register= useFormik({
    initialValues:{
      name:'',
      email:'',
      password:'',
      rePassword:''
    },
    validate,
    onSubmit:(values)=>{
      sendDataToApi(values)
    }
  })

  return (
    <div>
        <div className="w-75 m-auto pt-4">
        <h2>Register Now:</h2>
        <form  onSubmit={register.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" onBlur={register.handleBlur} onChange={register.handleChange} name='name' className='form-control mb-3 w-75' id='name' />
        {register.errors.name && register.touched.name? <div className="alert alert-danger">{register.errors.name}</div>:''} 

        <label htmlFor="email">Email:</label>
        <input type="email" onBlur={register.handleBlur} onChange={register.handleChange} name='email' className='form-control mb-3 w-75' id='email' />
        {register.errors.email && register.touched.email? <div className="alert alert-danger">{register.errors.email}</div>:''} 

        <label htmlFor="password">Password:</label>
        <input type="password" onBlur={register.handleBlur} onChange={register.handleChange} name='password' className='form-control mb-3 w-75' id='password' />
        {register.errors.password && register.touched.password? <div className="alert alert-danger">{register.errors.password}</div>:''} 

        <label htmlFor="rePassword">Repassword:</label>
        <input type="password" onBlur={register.handleBlur} onChange={register.handleChange} name='rePassword' className='form-control mb-3 w-75' id='rePassword' />
        {register.errors.rePassword && register.touched.rePassword? <div className="alert alert-danger">{register.errors.rePassword}</div>:''}

          {errorMsg ?<div className="alert alert-danger">{errorMsg}</div> :''}
        <button disabled={!(register.dirty && register.isValid)} type='submit' className='btn bg-main text-white'>{loading ? 'Signup' :'Loading...'}</button>
        </form>
        </div>
    </div>
  )
}
