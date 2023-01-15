import React, { useEffect } from 'react'
import './Info.css'
import MyContext from "../../../../MyContext"
import { useContext } from 'react';
import { useState } from 'react';

const Info = ({ price, title, id,imageUrl }) => {
  const { addToCart } = useContext(MyContext);
  const [count, setCount] = useState(0);

  const inc = () => { setCount(count + 1) }
  const dec = () => { if (count > 0) { setCount(count - 1) } else { return } }
  useEffect(() => { }, [count])

  return (
    <div className="product-info">
      <h5>{title}</h5>
      <h6>{price}$</h6>
      <div className="count">
        <button onClick={dec}>-</button>
        <p>{count}</p>
        <button onClick={inc}>+</button>
      </div>
      {<button onClick={() => addToCart({ title, count, id, imageUrl})}>Add to Cart</button>}
    </div >
  )
}
export default Info