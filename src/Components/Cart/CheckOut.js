import React from 'react'

const CheckOut = () => {
    const handleCheckOut=()=>{
        console.log("checkout")
    }
  return (
    <div className="checkout-container right">
          <h2 >Checkout</h2>
          <div className="checkout-product-line"><span>1</span><span>iPhone X</span><span>$ 899</span></div>
          <div className="checkout-product-line"><span>2</span><span>OPPOF19</span><span> $ 280</span></div>
          <div className="checkout-product-line"><span>3</span><span>Samsung Galaxy</span><span>$ 1499</span></div>
          <hr/>
          <div  className="checkout-product-line"><span></span><span>Total :</span> <span>$ 2678</span></div>
          <hr/>
          <button onclick={()=> handleCheckOut}>Checkout</button>
        </div>
  )
}

export default CheckOut
