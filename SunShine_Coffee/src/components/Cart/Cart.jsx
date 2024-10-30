
import React from 'react';
import s from './CartModal.module.scss';

export const CartModal = ({ cart, toggleCart }) => {
  return (
    <div className={s.cartModal}>
      <button onClick={toggleCart} className={s.closeButton}>X</button>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} className={s.cartItem}>
              <p>{item.name}</p>
              <p>{item.price} DKK</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
