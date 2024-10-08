import { useFormik } from "formik";
import React, { useContext, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { cartContext } from "../Context/CartContext";

export default function Address() {
  let navigate = useNavigate();

//   const [SetErrorMsg] = useState("");
  const [loading, setLoading] = useState(true);
  let { pay } = useContext(cartContext);
  let {id} = useParams()




async function sendDataToApi( values) {
    setLoading(false);
    let data = await pay(id , values)
    console.log(data)
    setLoading(true);
    if(data.status == 'success'){
        window.location.href = data.session.url

    }
  }

  let address = useFormik({
    initialValues: {
      details: "",
      phone: "",
      city: "",
    },
    onSubmit: (values) => {
      sendDataToApi(values);
    },
  });
  return (
    <div>
      <div className="w-75 m-auto pt-5 mt-5">
        <h2>Address Now:</h2>
        <form onSubmit={address.handleSubmit}>
          <label htmlFor="Details">Details:</label>
          <textarea
            type="text"
            onBlur={address.handleBlur}
            onChange={address.handleChange}
            name="details"
            className="form-control mb-3 w-75"
            id="details"
          />

          <label htmlFor="phone">phone:</label>
          <input
            type="text"
            onBlur={address.handleBlur}
            onChange={address.handleChange}
            name="phone"
            className="form-control mb-3 w-75"
            id="phone"
          />

          <label htmlFor="city">city:</label>
          <input
            type="text"
            onBlur={address.handleBlur}
            onChange={address.handleChange}
            name="city"
            className="form-control mb-3 w-75"
            id="city"
          />

          <button
            // disabled={!(Address.dirty && login.isValid)}
            type="submit"
            className="btn bg-main text-white"
          >
            {loading ? "pay" : "Loading..."}
          </button>
        </form>
      </div>
    </div>
  );
}
