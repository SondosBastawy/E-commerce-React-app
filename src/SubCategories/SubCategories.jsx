import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../Loading/Loading'
import SubCategory from '../SubCategory/SubCategory'



export default function SubCategories() {

  const[subCategories, setSubCategories] = useState([])
  let [loading, setLoading] = useState(true);

  let x = useParams()
    console.log(x)

  async function getSubCategories(){
    let data = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories/${x.Id}/subcategories`)
    setSubCategories(data?.data.data);
    console.log(data?.data.data)
    console.log(subCategories)
    setLoading(false)
  }
  getSubCategories()
    // let {data, isLoading} =useQuery('getSubCategories', getSubCategories)

  return (
    <>
    {loading?<div> <Loading/></div>:
    <div className='my-5 container pt-5'>
      
      <div className="row">
        {subCategories?.map((item)=>{
          return <SubCategory item={item} key={item._id}/>
        })}
        </div>
      </div>}  
    
    
    </>
  )
}
