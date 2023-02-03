import React,{useState} from 'react'

const CheckOut = ({getData}) => {
  const [data,setData]=useState(getData)
    const handleCheckOut=()=>{
      setData([])
    }
  return (
    <div className="checkout-container right">
          <h2 >Checkout</h2>
          {
            data?.map((products,idx)=>{
              return <div className="checkout-product-line"><span>{idx+1}</span><span>{products?.title}</span><span>$ {products?.price }</span></div>
            })
          }
         
         
          <hr/>
          <div  className="checkout-product-line"><span></span><span>Total :</span> <span>$ </span></div>
          <hr/>
          <button onClick={()=> {handleCheckOut()}}>Checkout</button>
        </div>
  )
}

export default CheckOut
