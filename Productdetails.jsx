import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

export default function ProductDetail() {
const[product,setProduct]=useState({})
const{id}=useParams()
console.log(id);

useEffect(()=>{
fetch(`https://fakestoreapi.com/products/$(id)`)
.then((res)=>{return res.json()}).then((data)=>{
console.log(data);
setProduct(data)
})
},[])
  return (
    <div>
    <h1>Product Detail</h1>
    <p>{product.title}</p>
    <img src={product.image}  />
    </div>
  )
}
