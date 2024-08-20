import React from 'react'
import Navbar from '../Navbar/Navbar'
import './auth.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub , faGoogle} from '@fortawesome/free-brands-svg-icons';
import Footer from '../Footer/fotter';


const Signup = () => {
  return (
    <div>
        <div>
            <Navbar/>
        </div>
        <div className='login_components1'>
          <div className='logo_info'>
                <span className='main_span'><span className='child_span'>Welcome</span>, New User</span>
                <span className='text1'>Please SignUp to Login</span>
          </div>
          <div className='input_tags'>
            <input type='text' placeholder='Email or Phn' style={{width:'300px',height:'22px',fontSize:'12px',padding:'3px',borderRadius:'7px'}}/>
            <input type='password' placeholder='Create Password' style={{width:'300px',height:'22px',fontSize:'12px',padding:'3px',borderRadius:'7px'}}/>
            <input type='password' placeholder='ReEnter Password' style={{width:'300px',height:'22px',fontSize:'12px',padding:'3px',borderRadius:'7px'}}/> 
          </div>
          <div>
          <button className='login_button'>Create Account</button>
          </div>
          <div>
            <span>(or)</span>
          </div>
          <div>
            <span>Create Account with</span>
          </div>
          <div className='icons'>
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGoogle} size="2x" />
            </a>
            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>
        </div>
        <div>
          <Footer/>
        </div>

    </div>
  )
}

export default Signup