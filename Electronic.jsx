import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router';

export default function Electronic() {
const[product,setProduct]=useState([])
const{id}=useParams()
console.log(id);

useEffect(()=>{
fetch(`https://fakestoreapi.com/products/category/electronics`)
.then((res)=>res.json())
.then((data)=>{
console.log(data);
setProduct(data)
})
},[])

  return (
    <>
    {
      product.map((item)=>{
      return<div>
        <p>{item.id}</p>
        <Link to={`/productDetail/${item.id}`}>{item.title}</Link>
        <p>{item.description}</p>
        <img src={item.image} alt="" height={100} width={200}/>
      </div>
      })
    }
    </>
  )
}
