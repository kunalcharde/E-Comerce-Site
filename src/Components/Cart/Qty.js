import React from 'react'
import { useState } from "react";
const Qty = () => {
    const [qty,setQty]=useState(0)
  const decrement=()=>{
    qty>0?setQty(qty-1):setQty(qty)
  }
  const increment=()=>{
    setQty(qty+1)
  }
  return (
    <>
      <button onClick={()=> decrement()}>-</button>
                <input value={qty} type="text"/>
     <button onClick={()=> increment()}>+</button>
    </>
  )
}

export default Qty
