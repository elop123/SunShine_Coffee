import React from 'react'
import s from './Navbar.module.scss'
import icon1 from '../../assets/images/Shopping Cart.png'
import icon2 from '../../assets/images/Male User.png'
import logo from '../../../src/assets/images/Coffee.png'

export const Navbar = () => {
  return (
    <nav className={s.navbarStyle}>
      <div className={s.titleContainer}>
      <h1 className={s.titleStyle}>SunShine Coffee</h1>
      </div>
            <div className={s.icons}>
            <img src={icon1} alt="icon1" />
            <img src={icon2} alt="icon2" />
            </div>
            <div className={s.circle}>
           <img src={logo} alt="coffee-æogo" className={s.coffeeLogo} />
        </div>
    </nav>
  )
}
