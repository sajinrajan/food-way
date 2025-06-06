import React from 'react'

import './Footer.css'
import { assets } from '../assets/assets'

function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>"Savor delicious, freshly prepared meals crafted with passion, rich flavors,
                     and quality ingredients for a delightful dining experience."</p>
                     <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                     </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About US</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91  790 28 856 90 </li>
                    <li>sajinrajan018@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <div className="footer-copyright">
            Copyright 2025 FoodApp.com
        </div>
    </div>
  )
}

export default Footer
