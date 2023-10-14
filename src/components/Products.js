 import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'


export default function Products() {
    const [products,setProducts]=useState(Object)
    useEffect(()=>{
        axios.get('http://dummyjson.com/products')
        .then(res => setProducts(res.data.products))
    })
    console.log(products)
  return (
      <>
      <h1>products page</h1>
      </>
  )
}