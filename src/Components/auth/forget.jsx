import React from 'react'
import Navbar from '../Navbar/Navbar'
import './auth.css'
import { Link } from 'react-router-dom'
import Footer from '../Footer/fotter'

const Forget = () => {
  return (
    <div>
        <div>
            <Navbar/>
        </div>

        <div className='forget_info'>
            <div className='forget_heading'>
                <span className='main_span'><span className='child_span'>Don't Worry</span>, You can Recover your password</span>
                <span>Please Enter your mail</span>
            </div>
            <div className='forget_input_tags'>
                <input type='text' placeholder='Email or Phn' style={{width:'300px',height:'22px',fontSize:'12px',padding:'3px',borderRadius:'7px'}}/>
            </div>
            <div className='forget_buttons'>
                <input type='text' placeholder='' style={{width:'100px',height:'22px',fontSize:'12px',padding:'3px'}}/>
                <button type='submit'>Generate OTP</button>
            </div>
            <div className='password_tags' style={{display:'flex',flexDirection:'column',gap:'20px'}}>
                <input type='text' placeholder='Create New Password' style={{width:'300px',height:'22px',fontSize:'12px',padding:'3px',borderRadius:'7px'}}/>
                <input type='text' placeholder='ReEnter Password' style={{width:'300px',height:'22px',fontSize:'12px',padding:'3px',borderRadius:'7px'}}/>
            </div>
            <div>
            <button type='submit' href=''>Change Password</button>
            </div>
            <div>
                <Link to='/login'><a href=''>Back To Login</a></Link>
            </div>
        </div>
        <div>
            <Footer/>
        </div>
    </div>
  )
}

export default Forget