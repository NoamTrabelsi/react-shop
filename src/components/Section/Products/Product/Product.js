import React from 'react'
import './Product.css'

const Product = ({ imageUrl }) => {
  return (
    <div className="product-image">
      <img src={imageUrl} alt="" />
    </div>
  )
}
export default Product