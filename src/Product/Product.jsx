import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { cartContext } from '../Context/CartContext'
import { toast } from 'react-toastify'
import { WishListContext } from '../Context/WishListContext'


export default function Product({item}) {

  let { setCounter , addToCart }=useContext(cartContext)
  let { addToWishList} = useContext(WishListContext)

  async function addProductToCart(productId){
    let data = await addToCart(productId)
    if (data?.status == 'success'){
      toast.success('product added successfully')
      setCounter(data.numOfCartItems)
    }
  }
  async function addProductToWishList(productId){
    let data = await addToWishList(productId)
    console.log(data)
    if (data?.status == 'success'){
      toast.info('product added to your wishList')
      // setCounter(data.numOfCartItems)
    }
  }
  return (
    <>
    <div className="col-md-3 w-25">
          <div className="product p-2 cursor-pointer rounded-2 w-75">
           <Link to={'/product-details/'+ item._id} >
           <img src={item.imageCover} className='w-100' height={280} alt="product" />
            <span className='text-main'>{item.category.name}</span>
            <h5>{item.title.split(' ').slice(0,2).join(' ')}</h5>
            <div className="div d-flex justify-content-between pt-2">
              <h6>{item.price} EGP</h6>
              <h6>{item.ratingsAverage}<i className="fa-solid fa-star rating-color"></i></h6>
            </div>
           </Link>
           <button className='wishIcon cursor-pointer m-1'onClick={()=>(addProductToWishList(item._id))}><i className="fa-regular fa-heart"></i></button>
            <button className='btn bg-main text-white m-1' onClick={()=>(addProductToCart(item._id))}> <i className="fa-solid fa-plus"></i> Add to Cart </button>
            </div>
          </div>
    </>
  )
}
