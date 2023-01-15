import React from 'react'
import Product from './Product/Product'
import Info from './Info/Info'
import './Products.css'

const Products = ({ price, title, imageUrl, id }) => {
  return (
    <div className="product-card">
      <Product
        imageUrl={imageUrl}
      />
      <Info
        imageUrl={imageUrl}
        id={id}
        price={price}
        title={title}
      />
    </div>
  )
}

export default Products