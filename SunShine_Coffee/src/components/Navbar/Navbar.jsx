import React from 'react'
import s from './Navbar.module.scss'
import icon1 from '../../assets/images/Shopping Cart.png'
import icon2 from '../../assets/images/Male User.png'
import logo from '../../../src/assets/images/Coffee.png'
import { Link } from 'react-router-dom'

export const Navbar = ({ toggleCart }) => {
  //const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className={s.navbarStyle}>
      <div className={s.titleContainer}>
      <h1 className={s.titleStyle}>SunShine Coffee</h1>
      </div>
            <div className={s.icons}>
            <div onClick={toggleCart} className={s.cartIcon}>
            <Link to="/cart">
            <img src={icon1} alt="icon1" />
            </Link>
            {/* {cartCount > 0 && <span className={s.cartCount}>{cartCount}</span>} */}
            </div>
            <Link to="/login">
            <img src={icon2} alt="icon2" />
            </Link >
            </div>
            <div className={s.circle}>
           <img src={logo} alt="coffee-æogo" className={s.coffeeLogo} />
        </div>
    </nav>
  )
}
