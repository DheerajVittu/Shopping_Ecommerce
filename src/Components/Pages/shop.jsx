import React from 'react'
import './shop.css';
import hand_icon from '../Assets/hand_icon.png';
import arrow from '../Assets/arrow.png';
import hero_img from '../Assets/hero_image.png'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'


const Shop = () => {
  return (
    <div>
        <div>
            <Navbar/>
        </div>
    <div className='shop'>
        
    <div className="shop_left">
        <h2>New Arrivals</h2>
        <div>
            <div className="hand_icon">
                <p>new</p>
                <img src={hand_icon} alt=''/>
            </div>
            <p>collections</p>
            <p>for everyone</p>
        </div>
        <div className="latest_button">
            <Link to='/latest'><a href=''><div>Latest Offers</div></a></Link>
            <img src={arrow} alt=''/>
        </div>
    </div>
    <div className="shop_right">
        <img src={hero_img} alt=''/>
    </div>
    </div>
    </div>
  )
}

export default Shop
