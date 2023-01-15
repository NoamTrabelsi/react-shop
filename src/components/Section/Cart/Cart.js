import React from 'react'
import './Cart.css';
import MyContext from "../../../MyContext"
import { useContext } from 'react';
const Cart = () => {
  const { cart } = useContext(MyContext);
  return (
    <div className="Cart">
      <p>Mp Cart:</p>
      <ul>
        {cart.map((element, index) => <li key={index}>{element.imageUrl} {element.title} {element.count} </li>)}
      </ul>
    </div>
  )
}

export default Cart