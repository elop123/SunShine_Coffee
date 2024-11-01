import React from 'react'
import s from './Checkout.module.scss'
import { useCart } from 'react-use-cart'

const Checkout = () => {
    const { items, cartTotal } = useCart();

  return (
    <section className={s.checkoutContainer}>
      <h2 className={s.title}>Checkout</h2>
      <div className={s.checkoutContent}>
        <form className={s.userInfo}>
          <label>First Name</label>
          <input type="text" />
          <label>Last Name</label>
          <input type="text" />
          <label>Address</label>
          <input type="text"/>
          <label>City</label>
          <input type="text" />
          <label>Phone</label>
          <input type="text" />
          <label>Province</label>
          <input type="text" />
          <label>Country</label>
          <input type="text" />
        </form>

        <section className={s.order}>
          {items.length > 0 ? (
            items.map((item) => (
              <div key={item.id} className={s.orderItem}>
                <p>{item.name} x   {item.quantity}</p>
                <p>{item.price * item.quantity} DKK</p>
              </div>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
          <div className={s.orderTotal}>
            <p>Total</p>
            <p>{cartTotal} DKK</p>
          </div>
          
          <section className={s.shippingOptions}>
            <h4>Choose shipping</h4>
            <label> FakeEx
              <input type="radio" name="shipping" value="FakeEx" className={s.firstInput} />
            </label>
            <label> FakeEx Express
              <input type="radio" name="shipping" value="FakeEx Express" className={s.secondInput} />
            </label>
          </section>
          <button className={s.payNowButton}>Pay now</button>
        </section>
      </div>
    </section>
  )
}

export default Checkout
