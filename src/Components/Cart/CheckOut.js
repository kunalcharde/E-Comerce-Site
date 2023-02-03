import React, { useState } from "react";
import { removeallItem } from "../../Actions/action";
import { useDispatch } from "react-redux";
const CheckOut = ({ getData }) => {
  const [data, setData] = useState(getData);
  const dispatch = useDispatch();
  const RemoveProduct = () => {
    dispatch(removeallItem([]));
  };
  
  return (
    <div className="checkout-container right">
      <h2>Order Summary</h2>
      {data?.map((products, idx) => {
        return (
          <div className="checkout-product-line">
            <span>{idx + 1}</span>
            <span>{products?.title.toUpperCase()}</span>
            <span>$ {products?.price}</span>
          </div>
        );
      })}

      <hr />
      <div className="checkout-product-line">
        <span></span>
        <span>Total :</span> <span>$ </span>
      </div>
      <hr />
      <button
        onClick={() => {
          RemoveProduct();
        }}
      >
        Checkout
      </button>
    </div>
  );
};

export default CheckOut;
