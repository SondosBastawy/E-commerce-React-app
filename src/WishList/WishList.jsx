import React, { useContext, useEffect, useState } from "react";
import { cartContext } from "../Context/CartContext";
import Loading from "../Loading/Loading";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { WishListContext } from "../Context/WishListContext";

export default function WishList() {
  let { addToCart, setCounter } = useContext(cartContext);
  let { getWishList, deleteFromWishList, setWishCount , wishCount } = useContext(WishListContext);
  let [data, setData] = useState(null);
  let [loading, setLoading] = useState(true);

  async function addProductToCart(productId) {
    let data = await addToCart(productId);
    if (data.status == "success") {
      toast.success("product added successfully");
      setCounter(data.numOfCartItems);
    }
  }
  async function deleteProduct(id) {
    let response = await deleteFromWishList(id);
    if (response.status == "success") {
      toast.error("you deleted this item");
      setWishCount(wishCount-1)
      setData({ data: data.data.filter(item => response.data.includes(item._id))});
    }
  }

  useEffect(() => {
    (async () => {
      let data = await getWishList();
      if (data?.response?.data.statusMsg == "fail") {
        return setData(null);
      } else {
        setData(data);
        console.log(data)
      }
      setLoading(false);
    })();
  }, [getWishList]);

  if (loading) return <Loading />;
  if (data?.count == 0 || data == null)
    return (
      <div className="pt-5 mt-4 text-center">
        <h2 className=" text-main mt-5 pt-5 mb-4">Your WishList is empty</h2>
        <button className="btn bg-danger-subtle mt-2 p-3 mb-3 ">
          {" "}
          <Link to={"/home"}>
            {" "}
            <b>Go Shopping</b>{" "}
          </Link>
        </button>
      </div>
    );
  return (
    <>
      <div className="container cursor-pointer rounded-2 border-2 my-5  bg-main-light pt-5 ">
        {data?.data.map((item) => (
          <div className=" border-bottom d-flex pb-4" key={item._id} >
            <Link
              to={"/product-details/" + item._id }
              className="d-flex justify-content-around align-items-center flex-row"
            >
              <div className="w-25">
                <img src={item.imageCover} className="w-50" alt="" />
              </div>
              <div className=" w-50 ">
                <div>
                  <p className="bolder p-0 m-0">{item.title}</p>
                  <p className="bolder p-0 m-0">{item.category.name}</p>
                  <div className="div pt-2">
                    <h6 className="d-inline-block ">{item.price} EGP</h6>
                    <h6>
                      {item.ratingsAverage}
                      <i className="fa-solid fa-star rating-color"></i>
                    </h6>
                  </div>
                </div>
              </div>
            </Link>
            <div className="my-3 col-md-4 pt-4">
              <button
                className="btn bg-main text-white"
                onClick={() => addProductToCart(item._id)}
              >
                {" "}
                <i className="fa-solid fa-plus"></i> Add to Cart{" "}
              </button>
              <button
                className="btn text-white mx-2 text-bg-danger"
                onClick={() => deleteProduct(item._id)}
              >
                <i className="fa-solid fa-trash-can"></i> Delete{" "}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
