import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

const Navbar = () => {

    const [menu, setMenu] = useState("shop");

    return (
        <div>
            <div className="navbar">
                <div className='nav-logo'>
                    <div>
                    <Link to='/shop'><a><img src={logo} alt="main_logo" /></a>
                    </Link>
                    </div>
                    <div>
                        <Link to='/shop'><a><p>SHOPPING</p></a></Link>
                    </div>
                </div>
                <ul className='nav-menu'>
                    <Link style={{ textDecoration: 'none' }} to='/shop'>
                        <li onClick={() => setMenu("shop")}>
                            Shop {menu === "shop" && <hr />}
                        </li>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to='/mens'>
                        <li onClick={() => setMenu("mens")}>
                            Men {menu === "mens" && <hr />}
                        </li>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to='/womens'>
                        <li onClick={() => setMenu("womens")}>
                            Women {menu === "womens" && <hr />}
                        </li>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to='/kids'>
                        <li onClick={() => setMenu("kids")}>
                            Kids {menu === "kids" && <hr />}
                        </li>
                    </Link>
                </ul>
                <div className="nav-login-cart">
                    <Link style={{ textDecoration: 'none' }} to='/login'>
                        <button>Login</button>
                    </Link>
                    <Link to='/cart'><a href=''><img src={cart_icon} alt='' /></a> </Link>
                    <div className="nav-cart-count">
                        0
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
