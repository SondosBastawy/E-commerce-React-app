import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'



export default function VerifyCode() {
    let Navigate = useNavigate()

async function sendCode(values){
    await axios.post('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode', values)
    .then(({data}) =>{
        console.log(data)
    if (data.status === 'Success'){
    Navigate('/new-Password')
}
    })
}

function validate(values){
    const myErrors= {}
    if (!values.resetCode){
        myErrors.resetCode= 'verify code does not match.'
    } 
    return myErrors
}

    let check= useFormik({
    initialValues:{
        resetCode:'',
    },
    validate,
    onSubmit:(values)=>{
        sendCode(values)
    }
    })
return (
    <>
    <div className="container mt-5 pt-5 d-flex justify-content-center align-items-center ">
    <div className='bg-info rounded-3 w-50 p-5'>
    <h4 className='text center'>Forgot Password</h4>
    <form onSubmit={check.handleSubmit} >
        <label htmlFor="text" className='m-3'> <b>Verification code </b></label>
        <input type="text" placeholder='write the code' onBlur={check.handleBlur} onChange={check.handleChange}  name='resetCode' className='form-control mb-3 w-100' id='resetCode' />
        <button type='submit' className='btn btn-light m-2'> Submit </button>
    </form>
    </div>
    </div>
    </>
)}
