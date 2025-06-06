// import React, {useState} from 'react'
// import './Navbar.css'
// import {assets} from '../../assets/assets'
// import { Link } from 'react-router-dom';

// const Navbar = (setShowLogin) => {
//   const [menu,setMenu] = useState("home");
//   return (
//     <div className='navbar'>
//       <img src={assets.logo} alt="" className='logo'/>
//       <ul className='navbar-menu'>
//       <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</Link>
//       <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</a>
//       <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</a>
//       <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</a>
//       </ul>
//       <div className="navbar-right">
//         <img src={assets.search_icon} alt="" />
//         <div className="navbar-search-ion">
//           <img src={assets.basket_icon} alt="" />
//           <div className="dot"></div>
//         </div>
//         <button onClick={()=>setShowLogin(true)}>sign in</button>
//       </div>
//     </div>
//   )
// }

// export default Navbar



import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useLocation } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState("home");

    const{getTotalCartAmount} =useContext(StoreContext)

    const location = useLocation(); // Get current path

    return (
        <div className='navbar'>
           <Link to='/'> <img src={assets.logo} alt="Logo" className='logo' /></Link>
            <ul className='navbar-menu'>
                <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
                <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
                <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</a>
                <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>contact us</a>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="Search" />
                <div className="navbar-search-icon">
                   <Link to='/cart'><img src={assets.basket_icon} alt="Basket" /></Link> 
                    <div className={getTotalCartAmount()===0?"":"dot"}></div>
                </div>
                <button onClick={() => {
                    setShowLogin(true);
                    console.log("Current Path:", location.pathname); // Log the current path
                }}>
                    Sign In
                </button>
            </div>
        </div>
    );
}

export default Navbar;

