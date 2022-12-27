import React from 'react'
import Product from './Product/Product'
import Info from './Info/Info'
import './Products.css'

const Products = () => {
  return (
    <div className="product-card">
      <Product />
      <Info />
    </div>
  )
}

export default Products