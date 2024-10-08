import axios from "axios";
import { createContext, useState } from "react";

export let cartContext = createContext();

async function addToCart(productId) {
  return axios
    .post(
      "https://ecommerce.routemisr.com/api/v1/cart",
      { productId },
      {
        headers: {
          token: localStorage.getItem("userToken"),
        },
      }
    )
    .then(({ data }) => data)
    .catch((err) => err);
}
async function getCart() {
  return axios
    .get("https://ecommerce.routemisr.com/api/v1/cart", {
      headers: {
        token: localStorage.getItem("userToken"),
      },
    })
    .then(({ data }) => data)
    .catch((err) => err);
}

async function deleteCart(productId) {
  return axios
    .delete("https://ecommerce.routemisr.com/api/v1/cart/" + productId, {
      headers: {
        token: localStorage.getItem("userToken"),
      },
    })
    .then(({ data }) => data)
    .catch((err) => err);
}

async function updateQty(productId, count) {
  return axios
    .put(
      "https://ecommerce.routemisr.com/api/v1/cart/" + productId,
      { count },
      {
        headers: {
          token: localStorage.getItem("userToken"),
        },
      }
    )
    .then(({ data }) => data)
    .catch((err) => err);
}

async function pay(cartId, shippingAddress) {
  return axios
    .post(
      "https://ecommerce.routemisr.com/api/v1/orders/checkout-session/" +
        cartId,
      { shippingAddress },
      {
        headers: {
          token: localStorage.getItem("userToken"),
        },
      }
    )
    .then(({ data }) => data)
    .catch((err) => err);
}


export default function CartContextProvider({ children }) {
  let [counter, setCounter] = useState(0);

  return (
    <cartContext.Provider
      value={{
        counter,
        setCounter,
        addToCart,
        getCart,
        deleteCart,
        updateQty,
        pay      }}
    >
      {" "}
      {children}{" "}
    </cartContext.Provider>
  );
}
