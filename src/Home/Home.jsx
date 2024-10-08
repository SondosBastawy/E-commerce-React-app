import React from 'react'
import Mainslider from '../mainslider/Mainslider'
import Categories from '../Categories/Categories'
import { Helmet } from 'react-helmet'
import Products from '../Products/Products'

export default function Home() {
  return <>
  <div className='m-0 p-0'>
  <Helmet>
    <title> FreshCart home</title>
  </Helmet>
        <Mainslider />
        <Products/>
  </div>
    </>
  
}
