import React from 'react';
import './auth.css';
import Navbar from '../Navbar/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub , faGoogle} from '@fortawesome/free-brands-svg-icons';
import Footer from '../Footer/fotter'
import { Link } from 'react-router-dom';
export default function Login(){
    return(
        <div>
            <div>
                <Navbar/>
            </div>
        <div className="container">
            <div className='logo_info'>
                <span className='main_span'><span className='child_span'>Welcome</span>, Thankyou for your Intrest</span>
                <span className='text1'>Login and Continue Shoping</span>
            </div>
            <div className="login_form" >
                <div className='input_tags'>
                <input type='text' placeholder='Email or Phn' style={{width:'300px',height:'22px',fontSize:'12px',padding:'3px',borderRadius:'7px'}}/>
                <input type='password' placeholder='Password' style={{width:'300px',height:'22px',fontSize:'12px',padding:'3px',borderRadius:'7px'}}/> 
                </div>
                <div className='login_components'>
                    <div className='main_checkbox'>
                    <input type='checkbox'/>
                    <a href='' className='check_box' >Remember Me</a>
                    </div>
                    <div>
                        <Link to='/forget'><a href='' style={{fontSize:'12px'}}>Forgot Password?</a></Link>
                    </div>
                </div>
                <button className='login_button'>Login</button>
            </div>
            <div className='signup'>
                <span>Don't Have Account? <Link to='/signup'><a href=''>SighUp</a></Link></span>
                <div className='login_icons'>
                <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGoogle} size="2x" />
            </a>
            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
                </div>
            </div>
    </div>
    <div>
         <Footer/>
    </div>
    </div>
    )
}