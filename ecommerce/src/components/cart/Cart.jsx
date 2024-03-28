import React from 'react'
import './cartstyle.css'
import { CartContext } from '../../contextapi/CartContext';
import { useContext } from 'react';


function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);
  return (
    <>
      <div className="cart-container">
        <h1>Shopping Cart</h1>
        <hr/>
        <ul className="cart-items">
          {cart.map((item, index) => (
            <li key={index}>
              <span><img src={item.images} alt={item.name} style={{ width: '100px', height: '100px' }} /></span>
              <span>{item.title}</span>
              <span>${item.price}</span>
              <button onClick={() => removeFromCart(item.id)}>Delete</button>
            </li>
            
          ))}
          <hr/>
        </ul>
        <p className="total">Total: ${cart.reduce((acc, item) => acc + item.price, 0)}</p>
      </div>
    </>
  )
}

export default Cart
