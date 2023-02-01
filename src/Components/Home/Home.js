import React from 'react'
import { useState,useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
const Home = () => {
    const [data,setData] = useState([])
    useEffect(() =>{
        const getData = async()=>{
            const url= "https://dummyjson.com/products"
            const fetchData= await fetch(url)
            const data = await fetchData.json();
            // console.log(data)
            setData(data)
            console.log(data)
        }
        getData();  
    },[])
  return (
    <>
    <Navbar/>
    <div>
        {
            data?.products?.map(product => <h1>{product.title}</h1>)
        }
    </div>
    </>

    
  )
}

export default Home
