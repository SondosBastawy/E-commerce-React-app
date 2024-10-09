import axios from 'axios'
import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userContext } from '../Context/UserContext'

export default function SignIn() {

  let navigate = useNavigate()

  const [errorMsg, SetErrorMsg] = useState('')
  const [loading, setLoading] = useState(true)

  let { setUserToken, userToken }= useContext(userContext)




  async function  sendDataToApi(values){
    setLoading(false)
    await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin', values)
    .then(({data}) =>{
      if (data.message == 'success'){
        setUserToken(data.token)
        console.log(userToken)
        localStorage.setItem('userToken', data.token)
        navigate('/Home')
      }
    }).catch((err) =>{SetErrorMsg(err.response.data.message)})
    setLoading(true)
  }

function validate(values){

  const myErrors= {}
  if (!values.email){
    myErrors.email= 'email is required.'
  } 
  if (!/^[A-Z][A-Za-z0-9@]{6,}$/.test(values.password)){
    myErrors.password= 'password must start Capital letter and must be 7 characters'
  } 
  return myErrors

} 
  let login= useFormik({
    initialValues:{
      email:'',
      password:'',
    },
    validate,
    onSubmit:(values)=>{
      sendDataToApi(values)
    }
  })
  return (
    <div>
        <div className="w-75 m-auto pt-5 mt-5">
        <h2>Login Now:</h2>
        <form  onSubmit={login.handleSubmit}>

        <label htmlFor="email">Email:</label>
        <input type="email" onBlur={login.handleBlur} onChange={login.handleChange} name='email' className='form-control mb-3 w-75' id='email' />
        {login.errors.email && login.touched.email? <div className="alert alert-danger">{login.errors.email}</div>:''} 

        <label htmlFor="password">Password:</label>
        <input type="password" onBlur={login.handleBlur} onChange={login.handleChange} name='password' className='form-control mb-3 w-75' id='password' />
        {login.errors.password && login.touched.password? <div className="alert alert-danger">{login.errors.password}</div>:''} 

          {errorMsg ?<div className="alert alert-danger">{errorMsg}</div> :''}
        <button disabled={!(login.dirty && login.isValid)} type='submit' className='btn bg-main text-white'>{loading ? 'Signin' :'Loading...'}</button>
        <Link className='px-2 btn border mx-2 bg-info' to={'/signup'}><b>Don't have an account ? Sign up here</b></Link>
        <p className='forgotPassword text-right pt-2'><Link to={'/forgot-password'}>Forgot Password ?</Link></p>
        </form>
        </div>
    </div>
  )
}