import React, { useContext, useEffect, useState } from 'react'
import { cartContext } from '../Context/CartContext'
import Loading from '../Loading/Loading'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'


export default function Cart() {


  let { getCart, deleteCart , setCounter , updateQty} =useContext(cartContext)
  let [data, setData] = useState(null)
  let [loading, setLoading] = useState(true)
  
  useEffect(()=>{
    ( async ()=>{
    let data = await getCart()
    if(data?.response?.data.statusMsg == 'fail'){
      return setData(null)
    }
    else{
      setData(data)
    }
    console.log(data)
    setLoading(false)

  })()
  }, [getCart])

  async function deleteProduct(id){
      let data = await deleteCart(id)
      console.log(data)
      if(data.status == 'success'){
        toast.error('you deleted this item')
        setCounter(data?.numOfCartItems)
        setData(data)

      }
  }

  async function update(id, count){
    let data = await updateQty(id, count)
    console.log(data)
    if(data.status == 'success'){
      toast.info('products updated successfully')
      setCounter(data?.numOfCartItems)
      setData(data)
}
}
if(loading) return <Loading/>
if(data?.numOfCartItems == 0 || data==null) return <div className='pt-5 mt-4 text-center'><h2 className=' text-main mt-5 pt-5'><b>Your cart is empty</b></h2>
<button className='btn mt-2 p-3 bg-info mb-5'> <Link to={'/home'}> <b> Go shopping</b> </Link></button>
</div>
  return ( <>
<Helmet>
      <title>Shopping Cart</title>
    </Helmet>
    <div className="container my-5 bg-main-light pt-3 rounded-1">
      <h3 className='mt-4 py-2'><b>Your shopping cart :</b></h3>
      <h5 className='text-main'><b>Total price:</b> {data?.data.totalCartPrice} EGP</h5>
      {data?.data.products.map(item=>{
return <div className="row border-bottom" key={item._id}>
            <div className="col-md-1 my-2">
                <img src={item.product.imageCover} className='w-100' alt="" />
            </div>
        <div className="col-md-10 mt-3 d-flex justify-content-between">
          <div>
            <p className='bolder p-0 m-0'>{item.product.title}</p>
            <p className='text-main p-0'> price: {item.price} EGP</p>
            <button className='btn text-white mb-2 text-bg-danger' onClick={()=>deleteProduct(item.product._id)}><i className="fa-solid fa-trash-can"></i> remove</button>
          </div>
        <div>
            <button  className=' btn brdr' onClick={()=>{item.count<=1 ? deleteProduct(item.product._id) :update(item.product._id, item.count-1)}}>-</button>
          <span className='px-3'>{item.count}</span>
            <button className=' btn brdr' onClick={()=>update(item.product._id, item.count+1 )} >+</button>
        </div>
      </div>
    </div>
      }
        
      )}
      <Link className='bg-main text-white btn my-3 mx-5' to={`/address/${data.data._id}`}> Place Order</Link>
      
    </div>

    </>
  )
}
