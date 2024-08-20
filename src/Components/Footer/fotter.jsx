import React from 'react'
import logo from '../Assets/logo.png'
import { Link } from 'react-router-dom';
import './fotter.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';



const Footer = () => {
  return (
    <div className='footer_main'>
        <div className='footer_left'>
            <div className='nav-logo'>
                <img src={logo} alt=""/>
                <p>SHOPING</p>
            </div> 
       <div className='left_text'>
        <span>You Can follow us on below platforms</span>
       </div>
       <div className='icons'>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
        </div>
       </div>
       <div className='products'>
        <div>
        <span className='heading'>Products</span>
        </div>
        <div>           <Link to='/mens'><a href=''><span>Mens Wear</span></a></Link>
        </div>
        <div>           <Link to='/womens'><a href=''><span>Womens Wear</span></a></Link>
        </div>
        <div>           <Link to='/kids'><a href=''><span>Kids Wear</span></a></Link>
        </div>
        <div>           <Link to='/latest'><a href=''><span>Latest Trends</span></a></Link>
        </div>
        </div>
        <div className='products'>
            <span className='heading'>Support</span>
            <a href=''><span>Terms and Conditions</span></a>
            <a href=''><span>Privacy Policy</span></a>
            <a href=''><span>Refund</span></a>
            <a href=''><span>Customer Care</span></a>
        </div>
        <div className='products'>
            <span className='heading'>Contact</span>
            <span>Branch: Jubliee Hills</span>
            <span>Address: Road No-10 Swing Towers</span>
            <span>Ph: 01-232-040</span>
        </div>
    </div>
  )
}

export default Footer