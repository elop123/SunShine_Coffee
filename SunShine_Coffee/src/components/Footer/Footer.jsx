import React from 'react'
import s from './Footer.module.scss'

export const Footer = () => {
  return (
    <footer>
        <ul className={s.footerStyle}>
            <div>
            <li>Contact</li> <br />
            <li>Supercoffeeroad 223b</li>
            <li>92230 New Coffeeland</li>
            <li>Phone:22331122</li>
            <li>Mail:coffeeland@info.com</li>
            </div>
            <div>
            <li>Legal</li> <br />
            <li>Cookie policy</li>
            <li>Retrun policy</li>
            <li>Shipping</li>
            <li>Terms and conditions</li>
            </div>
            <div>
            <li>About</li> <br />
            <li>History</li>
            <li>The people behind</li>
            <li>Partnership</li>
            <li>International</li>
            </div>
        </ul>
    </footer>
  )
}
