import React from "react";
import Navbar from "../Navbar/Navbar";
import CheckOut from "./CheckOut";
import Qty from "./Qty";
import { useSelector } from "react-redux";
import { delItem } from "../../Actions/action";
import { useDispatch } from "react-redux";
import "./Cart.css";
const Cart = () => {
  let getData = useSelector((state) => state);
  console.log("cart", getData);
  const dispatch = useDispatch();
  const RemoveProduct = (product) => {
    dispatch(delItem(product));
  };
  
  return (
    <div>
      <Navbar />
      <div className="display-cart-product" >
      <div className="left product-conatiner" >
      {getData?.map((product) => {
          return (
            <>
            <div className="Product-card" key = {product?.id}>
              <div className="Product-image">
                <img src={`${product?.images[0]}`} alt="" className="image" />
              </div>
              <div className="Product-title">{product?.title}</div>
              <div className="Product-rating">Rating: {product?.rating}</div>
              <div className="Product-Price">Price : $ {product?.price}</div>
              <div className="Product-quantity">
                <Qty/>
              </div>
              <button className="Product-add" onClick={()=>RemoveProduct(product)}>Remove Product</button>
            </div>
            
          </>

          )
          
        })}
        </div>
         {getData.length?<CheckOut getData={getData}/>:<h2>NO ITEMS ADDED</h2>}
      </div>
    </div>
  );
};

export default Cart;
