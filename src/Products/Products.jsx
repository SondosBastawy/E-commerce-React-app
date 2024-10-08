import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from '../Loading/Loading'
import Product from '../Product/Product'
import Pagination from '../Pagination/Pagination'




export default function Products() {

  const[products, setProducts] = useState([])
  let [loading, setLoading] = useState(true)

  async function getProducts(){
  let {data} = await axios.get('https://ecommerce.routemisr.com/api/v1/products?limit=20')
    setProducts(data.data)
    setLoading(false)
  }
  async function getPage(page){
    let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products?page=${page}&limit=20`)
      setProducts(data.data)
      setLoading(false)
    }

  useEffect(()=>{
    getProducts()
  },[])

  return (
    <>
    {loading?<div> <Loading/></div>:<div className='my-3 container pt-5'>
      <div className= 'text-center '><h3 className='py-3 productTitle'><strong>Our Products</strong></h3></div>
      <div className="row">
        {products.map(item=>{
          return <Product item={item} key={item._id}/>
        })}
        </div>
      </div>}  
    
      <Pagination getPage={getPage}/>
    </>
  )
}
