
import React from 'react'
import './Modal.module.scss'

const Modal = ({ cart, toggleCart }) => {
  return (
    <div className="cart-modal">
      <div className="cart-content">
        <button onClick={toggleCart} className="close-button">X</button>
        <h2>Shopping Cart</h2>
        {cart.length > 0 ? (
          <div>
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                <p>{item.name}</p>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default Modal
