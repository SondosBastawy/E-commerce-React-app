import axios from 'axios'
import React, { useContext } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import Loading from '../Loading/Loading'
import { cartContext } from '../Context/CartContext'
import { toast } from 'react-toastify'

export default function ProductDetails() {

   let x = useParams()

  function getProductDetails(){
      return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${x.MyId}`)
  }
  let {data,isLoading} =useQuery('getProductDetails', getProductDetails)

  let {setCounter, addToCart} =useContext(cartContext)
  async function addProductToCart(productId){
    let data = await addToCart(productId)
    if (data.status === 'success'){
      toast.success('product added successfully')
      setCounter(data.numOfCartItems)
    }
  }

  return (
    <> 
    {isLoading?<div><Loading/></div>:<div className="container mt-5 mb-4">
      <div className="row">
        <div className="col-md-3 mt-5">
          <img src={data?.data.data.imageCover} className='w-100' alt=""/>
        </div>
        <div className="col-md-9 mt-5 pt-3">
          <h4>{data?.data.data.title}</h4>
          <p>{data?.data.data.description}</p>
          <h6 className='text-main'><b>{data?.data.data.category?.name}</b></h6>
          <div className='d-flex justify-content-between'>
            <h6>price: {data?.data.data.price} EGP</h6>
            <h6>{data?.data.data.ratingsAverage}<i className="fa-solid fa-star rating-color"></i></h6>
          </div>
          <button className='btn bg-main text-white w-100 mt-3' onClick={()=>(addProductToCart(data?.data.data.id))}> <i className="fa-solid fa-plus"></i> Add to Cart </button>
        </div>
        
      </div>
    </div>}
    


    </>
  )
}
