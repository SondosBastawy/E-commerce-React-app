import React from 'react'


export default function SubCategory({item}) {
  return (
    <>
    <div className="col-md-3 ">
          <div className="subCategory p-2  cursor-pointer rounded-3 bg-light m-3 shadow-sm " >
           <h4>{item.name}</h4>
            <h5>{item.title}</h5>
            </div>
          </div>

    </>
  )
}
