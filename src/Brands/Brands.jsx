import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";

export default function Brands() {
  function getBrands(brand) {
    return axios.get("https://ecommerce.routemisr.com/api/v1/brands");
  }
  let { isLoading, data } = useQuery(
    "getBrands",getBrands);

  return (
    <>
      {isLoading ? (
        <div><Loading/></div>
      ) : (
        <div className="container py-5 mt-3">
          <div className="row">
            {data?.data.data.map((item) => (
              <div className="col-md-3 cursor-pointer my-2" key={item._id}>
                <div className=" py-1 px-2 brand">
                  <img src={item.image} alt="brand" />
                  <h4 className="text-center">
                    <b>{item.name}</b>
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
