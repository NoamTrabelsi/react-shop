import React from 'react'
import Product from './Product/Product'
import Info from './Info/Info'
import './Products.css'

const Products = ({ price, title, imageUrl }) => {
  return (
    <div className="product-card">
      <Product
        imageUrl={imageUrl}
      />
      <Info
        price={price}
        title={title}
      />
    </div>
  )
}

export default Products