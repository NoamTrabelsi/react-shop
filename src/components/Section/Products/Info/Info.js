import React from 'react'
import './Info.css'
const Info = ({ price, title }) => {
  return (
    <div className="product-info">
      <h5>{title}</h5>
      <h6>{price}$</h6>
    </div>
  )
}
export default Info