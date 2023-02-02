import React from "react";
import Navbar from "../Navbar/Navbar";
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
  const handleCheckOut =()=>{
    document.getElementById("display").style="display:none"

  }
  return (
    <div>
      <Navbar />
      <div className="display-cart-product" >
        <div className="left product-conatiner" id="display">
          <div className="Product-card" key={getData?.id}>
            <div className="Product-image">
              <img src="" alt="" className="image" />
            </div>
            <div className="Product-title">{getData?.title} iPhone X</div>
            <div className="Product-rating">
              Rating: {getData?.rating} 4.44{" "}
            </div>
            <div className="Product-Price">Price : $ {getData?.price} 899</div>
            <div className="Product-quantity">
              <button>-</button>
              <input value={1} />
              <button>+</button>
            </div>
            <button
              className="Product-add"
              onClick={() => RemoveProduct(getData)}
            >
              Remove
            </button>
          </div>
          <div className="Product-card" key={getData?.id}>
            <div className="Product-image">
              <img src={``} alt="" className="image" />
            </div>
            <div className="Product-title">{getData?.title} OPPOF19</div>
            <div className="Product-rating">Rating: {getData?.rating} 4.3</div>
            <div className="Product-Price">Price : $ {getData?.price} 280</div>
            <div></div>
            <div className="Product-quantity">
              <button>-</button>
              <input value={1} />
              <button>+</button>
            </div>
            <button
              className="Product-add"
              onClick={() => RemoveProduct(getData)}
            >
              Remove
            </button>
          </div>
          <div className="Product-card" key={getData?.id}>
            <div className="Product-image">
              <img src={``} alt="" className="image" />
            </div>
            <div className="Product-title">
              {getData?.title} Samsung Galaxy Book
            </div>
            <div className="Product-rating">
              Rating: {getData?.rating} 4.25{" "}
            </div>
            <div className="Product-Price">Price : $ {getData?.price} 1499</div>
            <div className="Product-quantity">
              <button>-</button>
              <input value={1} />
              <button>+</button>
            </div>
            <button
              className="Product-add"
              onClick={() => RemoveProduct(getData)}
            >
              Remove
            </button>
          </div>
        </div>
        <div className="checkout-container right">
          <h2 >Checkout</h2>
          <div className="checkout-product-line"><span>1</span><span>iPhone X</span><span>$ 899</span></div>
          <div className="checkout-product-line"><span>2</span><span>OPPOF19</span><span> $ 280</span></div>
          <div className="checkout-product-line"><span>3</span><span>Samsung Galaxy</span><span>$ 1499</span></div>
          <hr/>
          <div  className="checkout-product-line"><span></span><span>Total :</span> <span>$ 2678</span></div>
          <hr/>
          <button onclick={()=> handleCheckOut()}>Checkout</button>
        </div>
      </div>
      
    </div>
  );
};

export default Cart;
