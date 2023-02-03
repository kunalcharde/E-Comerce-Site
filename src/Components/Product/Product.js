import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addcart } from "../../Actions/action";
import Qty from "../Cart/Qty";

import './Product.css'
const Product = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data)
  const dispatch = useDispatch();
  const addProduct =(product)=>{
    dispatch(addcart(product))
  }
 
  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const products = await response.json();
      setData(products);
      setFilter(products);
    };
    getProduct();
    
  }, []);
  const filterData =(categ)=>{
    console.log(categ);
    const updatedProduct = data?.products?.filter((product)=> product?.category===categ);
    console.log(updatedProduct)
    setFilter(updatedProduct);
  }
  const ShowProducts = () => {
    return (
        <>

        {filter?.products?.map((product) => {
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
              <button className="Product-add" onClick={()=>addProduct(product)}>Add To Cart</button>
            </div>
          </>

          )
          
        })}
      </>
    );
  };
  
  return (
    <div>
      <div className="filter-btn">
            <button className="btn" onClick={()=>setFilter(data)}>ALL</button>
            <button className="btn" onClick={()=>filterData("smartphones")}>Smart Phones</button>
            <button className="btn" onClick={()=>filterData("groceries")}>Groceries</button>
            <button className="btn" onClick={()=>filterData("laptops")}>Laptop</button>
            <button className="btn" onClick={()=>filterData("skincare")}>Skin Care</button>
            <button className="btn" onClick={()=>filterData("home-decoration")}>Home Decore</button>
            <button className="btn" onClick={()=>filterData("fragrances")}>Fragrance</button>
        </div>
      <div className="display-product">
      <ShowProducts />

      </div>
    </div>
  );
};

export default Product;
